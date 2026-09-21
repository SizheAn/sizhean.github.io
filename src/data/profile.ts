export type ProfileLink = {
  label: string;
  href: string;
};

export type FocusArea = {
  label: string;
  description: string;
  /** Slugs from publications.ts. A claim with nothing attached reads as an aspiration. */
  evidence: string[];
  /** Set where the substantive work is internal and cannot be shown. */
  internalNote?: string;
};

export const profile = {
  name: 'Sizhe An',
  role: 'Research Scientist',
  affiliation: 'Meta',
  location: 'Redmond, WA',
  email: 'sizhe.an@wisc.edu',

  /** Full positioning line, verbatim. Used for <title>/meta/OG copy. */
  oneLiner:
    'Embodied AI & robot learning — VLA, world-action models, dexterous manipulation, powered by large-scale robotics data & infra. Built on a foundation of multi-modal motion generation and 3D humans.',

  /** Same sentence, split so the hero can give it typographic hierarchy. */
  positioning: {
    lead: 'Embodied AI & robot learning',
    statement:
      'VLA, world-action models, dexterous manipulation, powered by large-scale robotics data & infra.',
    foundation: 'Built on a foundation of multi-modal motion generation and 3D humans.',
  },

  /**
   * Reconciles the robotics headline with a public record that is motion and
   * 3D humans. Without this a reviewer assumes the claim is unsupported rather
   * than unpublishable. Deliberately stops at "internal" — no specifics.
   */
  bridge:
    'The robot learning work at Meta is internal and not publishable. What is public is the layer underneath it: the data, the motion and shape representations, and the 3D-human models that embodied policies are built on.',

  links: [
    {
      label: 'Scholar',
      href: 'https://scholar.google.com/citations?user=l0XPLQcAAAAJ&hl=en',
    },
    { label: 'GitHub', href: 'https://github.com/SizheAn' },
    { label: 'Email', href: 'mailto:sizhe.an@wisc.edu' },
  ] satisfies ProfileLink[],

  /**
   * The badge only renders once `count` is set — an empty one reads as broken.
   * Fill it in from the real Scholar page; never guess the number.
   */
  scholarBadge: {
    label: 'Citations',
    href: 'https://scholar.google.com/citations?user=l0XPLQcAAAAJ&hl=en',
    count: undefined as number | undefined,
  },

  /** Checkable on the repo page. Drifts upward, so it carries the date it was read. */
  github: {
    repo: 'https://github.com/SizheAn/PanoHead',
    label: 'PanoHead',
    stars: 1958,
    checked: '2026-09-20',
  },

  since: { label: 'Meta', year: 2023 },

  /**
   * Public-level research directions only. No internal project names, data
   * volumes, or infrastructure specifics.
   */
  currentFocus: [
    {
      label: 'Robotics data pipeline & infrastructure',
      description:
        'Collecting, curating, and serving robot-learning data at scale — teleoperation, human video, simulation — so heterogeneous demonstrations become something a policy can train on.',
      evidence: ['mri', 'show3d'],
      internalNote: 'The pipeline itself is internal; the public proof is the capture and benchmark work below.',
    },
    {
      label: 'VLA & world-action models',
      description:
        'Vision-language-action policies that read an instruction and a scene and emit control, paired with world models that predict what a body does next, so perception, prediction, and action share one representation.',
      evidence: ['humanclaw', 'ms-forcing', 'umo'],
    },
    {
      label: 'Dexterous manipulation',
      description:
        'Multi-fingered hands: contact-rich grasping, in-hand reorientation, and retargeting human hand motion onto robot hardware without losing the dexterity that made the demonstration useful.',
      evidence: ['show3d'],
      internalNote: 'Policy work is internal; the public proof is in-the-wild hand-object capture.',
    },
  ] satisfies FocusArea[],

  biography:
    'Research scientist at Meta in Redmond, working on embodied AI and robot learning. Ph.D. in Computer Engineering from the University of Wisconsin-Madison (2023), advised by Prof. Umit Y. Ogras and working closely with Prof. Yin Li; B.S. from the University of Electronic Science and Technology of China. Earlier work spans multi-modal motion generation, 3D human and head synthesis, and sensor-grounded pose estimation.',
};
