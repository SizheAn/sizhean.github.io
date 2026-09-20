#!/usr/bin/env bash
#
# Build the site and publish it to the preview branch. Never touches master.
#
#   ./scripts/publish-preview.sh
#   PREVIEW_REMOTE=preview PREVIEW_BRANCH=gh-pages ./scripts/publish-preview.sh
#
# The push must run where github.com is reachable. On the devserver that means a
# plain tmux window — the agent identity is blocked by fwdproxy.

set -euo pipefail

PREVIEW_REMOTE="${PREVIEW_REMOTE:-origin}"
PREVIEW_BRANCH="${PREVIEW_BRANCH:-preview-round-1}"

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
worktree="$(mktemp -d)"
cd "$repo_root"

if [[ "$PREVIEW_BRANCH" == "master" ]]; then
  echo "refusing to publish onto master" >&2
  exit 1
fi

npm run build

# Reuse the existing branch so history stays append-only; no force push.
if git show-ref --verify --quiet "refs/heads/$PREVIEW_BRANCH"; then
  git worktree add "$worktree" "$PREVIEW_BRANCH"
else
  git worktree add --detach "$worktree" HEAD
  git -C "$worktree" checkout --orphan "$PREVIEW_BRANCH"
  git -C "$worktree" rm -rf --cached . >/dev/null
fi

find "$worktree" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -r "$repo_root/dist/." "$worktree/"

# Jekyll skips underscore-prefixed directories, which would 404 all of _astro/.
touch "$worktree/.nojekyll"

git -C "$worktree" add -A
git -C "$worktree" commit -q -m "Preview build from $(git rev-parse --short HEAD)"
git -C "$worktree" push "$PREVIEW_REMOTE" "$PREVIEW_BRANCH"

git worktree remove --force "$worktree"
echo "published $PREVIEW_BRANCH to $PREVIEW_REMOTE"
