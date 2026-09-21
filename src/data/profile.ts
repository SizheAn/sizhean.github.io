export type ProfileLink = {
  label: string;
  href: string;
  /** Rendered as a muted, non-clickable chip until the target exists. */
  pending?: boolean;
  note?: string;
};

export type FocusArea = {
  label: string;
  description: string;
};

export const profile = {
  name: 'Sizhe An',
  role: 'Research Scientist',
  affiliation: 'Meta',
  location: 'Redmond, WA',
  email: 'sizhe.an@wisc.edu',
  portrait: '/assets/profile.jpg',
  portraitAlt: 'Portrait of Sizhe An',

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

  links: [
    {
      label: 'Scholar',
      href: 'https://scholar.google.com/citations?user=l0XPLQcAAAAJ&hl=en',
    },
    { label: 'GitHub', href: 'https://github.com/SizheAn' },
    {
      label: 'CV',
      href: '/assets/cv.pdf',
      pending: true,
      note: 'Drop cv.pdf into public/assets/ to activate.',
    },
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

  /**
   * Public-level research directions only. No internal project names, data
   * volumes, or infrastructure specifics.
   */
  currentFocus: [
    {
      label: 'Robotics data pipeline & infrastructure',
      description:
        'Collecting, curating, and serving robot-learning data at scale — teleoperation, human video, simulation — so heterogeneous demonstrations become something a policy can train on.',
    },
    {
      label: 'VLA & world-action models',
      description:
        'Vision-language-action policies that read an instruction and a scene and emit control, paired with world models that predict what a body does next, so perception, prediction, and action share one representation.',
    },
    {
      label: 'Dexterous manipulation',
      description:
        'Multi-fingered hands: contact-rich grasping, in-hand reorientation, and retargeting human hand motion onto robot hardware without losing the dexterity that made the demonstration useful.',
    },
  ] satisfies FocusArea[],

  biography:
    'Research scientist at Meta in Redmond, working on embodied AI and robot learning. Ph.D. in Computer Engineering from the University of Wisconsin-Madison (2023), advised by Prof. Umit Y. Ogras and working closely with Prof. Yin Li; B.S. from the University of Electronic Science and Technology of China. Earlier work spans multi-modal motion generation, 3D human and head synthesis, and sensor-grounded pose estimation.',
};
