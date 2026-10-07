export type ProfileLink = {
  label: string;
  href: string;
  /** Rendered as a muted, non-clickable chip until the target exists. */
  pending?: boolean;
  note?: string;
};

export const profile = {
  name: 'Sizhe An',
  affiliation: 'Meta',
  location: 'Redmond, WA',
  email: 'sizhe.an@wisc.edu',
  portrait: '/assets/profile.jpg',
  portraitAlt: 'Portrait of Sizhe An',

  /** The one line under the name. What the work is lives in `biography`, once. */
  positioning: 'Embodied AI & robot learning',

  /** Meta/OG description: the biography's opening, standing on its own. */
  description:
    'Research scientist at Meta Reality Labs Research, working on building robotic foundation models and scaling up egocentric data for human-level dexterity.',

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
   * Public-level description only: no internal project names, data volumes, or
   * infrastructure specifics. Names checked 2026-10-07: Ümit Y. Ogras (ORCID
   * 0000-0002-5045-5535; ACM keeps the Ü, IEEE drops it), Yin Li (UW–Madison
   * Biostatistics & Medical Informatics), Reality Labs Research (Meta's RLR).
   */
  biography:
    'I’m a research scientist at Meta Reality Labs Research, where I work on building robotic foundation models and scaling up egocentric data for human-level dexterity. My background is in multi-modal motion generation and 3D humans. I received my PhD from the University of Wisconsin–Madison, advised by Ümit Ogras and Yin Li, and my BS from the University of Electronic Science and Technology of China (UESTC).',

  /** Which homepage sections render. The in-browser editor can switch them off. */
  sections: { about: true, work: true, earlier: true },
};
