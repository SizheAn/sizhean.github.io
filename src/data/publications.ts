export type Media = {
  type: 'image' | 'video' | 'gif';
  src: string;
  poster?: string;
  alt: string;
  /** Where the asset came from, so placeholders are traceable. */
  source: string;
  /** 'placeholder' media is a stand-in until a real teaser exists. */
  status?: 'final' | 'placeholder';
};

export type Publication = {
  slug: string;
  title: string;
  shortTitle: string;
  authors: string;
  venue: string;
  year: string;
  theme: string;
  summary: string;
  contribution: string;
  tags: string[];
  media: Media;
  links: Array<{
    label: string;
    href: string;
  }>;
  /** Position in the Selected Work grid, ordered by embodiment proximity. */
  featuredOrder?: number;
  /** 'unverified' surfaces a badge: title/authors/venue still need confirming. */
  metaStatus?: 'confirmed' | 'unverified';
};

export const publications: Publication[] = [
  {
    slug: 'humanclaw',
    shortTitle: 'HumanCLAW',
    title: 'HumanCLAW — evaluating whether vision-language models can act through a body',
    authors: 'Author list pending. Collaborators include Ziwei Liu, Ranjay Krishna, Manling Li.',
    venue: 'Preprint',
    year: '2026',
    theme: 'Embodiment & VLM evaluation',
    summary:
      'An evaluation framework that decouples a VLM’s decision making from the motor execution that carries it out.',
    contribution:
      'Separating "did the model choose the right thing" from "did the body manage to do it" turns embodied failure into something you can actually attribute.',
    tags: ['Embodied AI', 'VLM', 'Evaluation', 'Control'],
    media: {
      type: 'gif',
      src: '/assets/mri-rotate.gif',
      alt: 'Placeholder animation: rotating multi-view 3D human pose reconstruction',
      source: 'Placeholder — existing local asset /images/demo_gif_rotate.gif',
      status: 'placeholder',
    },
    links: [],
    featuredOrder: 1,
    metaStatus: 'unverified',
  },
  {
    slug: 'ms-forcing',
    shortTitle: 'Ms. Forcing',
    title: 'Ms. Forcing — efficient streaming video generation for world simulation',
    authors: 'Author list pending.',
    venue: 'Preprint',
    year: '2026',
    theme: 'World models & video generation',
    summary:
      'Streaming video generation aimed at world simulation, where frames must be produced continuously rather than in one offline batch.',
    contribution:
      'Streaming is the constraint that separates a video model from a world model an agent can act inside: it has to keep up with the agent.',
    tags: ['World models', 'Video generation', 'Streaming', 'Simulation'],
    media: {
      type: 'gif',
      src: '/assets/panic3d-teaser.gif',
      alt: 'Placeholder animation: generated character imagery standing in for a video-generation teaser',
      source: 'Placeholder — existing local asset /assets/panic3d-teaser.gif',
      status: 'placeholder',
    },
    links: [],
    featuredOrder: 2,
    metaStatus: 'unverified',
  },
  {
    slug: 'umo',
    shortTitle: 'UMO',
    title: 'UMO: Unified In-Context Learning Unlocks Motion Foundation Model Priors',
    authors:
      'Xiaoyan Cong, Zekun Li, Zhiyang Dou, Hongyu Li, Omid Taheri, Chuan Guo, Abhay Mittal, Sizhe An, Taku Komura, Wojciech Matusik, Michael J. Black, Srinath Sridhar',
    venue: 'arXiv',
    year: '2026',
    theme: 'In-context motion priors',
    summary:
      'A unified in-context learning framework that adapts motion foundation priors across generation, inpainting, editing, trajectory, obstacle, and reaction tasks.',
    contribution:
      'One pretrained motion prior, prompted rather than retrained, covers behaviors and constraints that normally need a model each.',
    tags: ['In-context learning', 'Motion foundation model', 'Control', 'Embodied agents'],
    media: {
      type: 'video',
      src: '/assets/umo-motion.mp4',
      poster: '/assets/umo-teaser.png',
      alt: 'UMO generated human motion sequence',
      source: 'Project page media: https://oliver-cong02.github.io/UMO.github.io/',
      status: 'final',
    },
    links: [
      { label: 'Project', href: 'https://oliver-cong02.github.io/UMO.github.io/' },
      { label: 'Paper', href: 'https://arxiv.org/abs/2603.15975' },
      { label: 'Code', href: 'https://github.com/Oliver-Cong02/UMO' },
    ],
    featuredOrder: 3,
    metaStatus: 'confirmed',
  },
  {
    slug: 'llamo',
    shortTitle: 'LLaMo',
    title:
      'LLaMo: Scaling Pretrained Language Models for Unified Motion Understanding and Generation with Continuous Autoregressive Tokens',
    authors:
      'Zekun Li, Sizhe An, Chengcheng Tang, Chuan Guo, Ivan Shugurov, Linguang Zhang, Amy Zhao, Srinath Sridhar, Lingling Tao, Abhay Mittal',
    venue: 'CVPR',
    year: '2026',
    theme: 'Motion-language models',
    summary:
      'A motion-language model built on a pretrained LLM, treating motion as continuous autoregressive tokens for unified understanding and generation.',
    contribution:
      'Continuous tokens avoid the quantization jitter of discrete motion codes while keeping the pretrained language model intact.',
    tags: ['Multimodal LLM', 'Motion generation', 'Motion understanding'],
    media: {
      type: 'video',
      src: '/assets/llamo-sample.mp4',
      poster: '/assets/llamo-method.png',
      alt: 'LLaMo motion-language generation sample',
      source: 'Project page media: https://kunkun0w0.github.io/project/LLaMo/',
      status: 'final',
    },
    links: [
      { label: 'Project', href: 'https://kunkun0w0.github.io/project/LLaMo/' },
      { label: 'Paper', href: 'https://huggingface.co/papers/2602.12370' },
      { label: 'CVPR', href: 'https://cvpr.thecvf.com/virtual/2026/poster/38091' },
    ],
    featuredOrder: 4,
    metaStatus: 'confirmed',
  },
  {
    slug: 'panohead',
    shortTitle: 'PanoHead',
    title: 'PanoHead: Geometry-Aware 3D Full-Head Synthesis in 360 Degrees',
    authors: 'Sizhe An, Hongyi Xu, Yichun Shi, Guoxian Song, Umit Ogras, Linjie Luo',
    venue: 'CVPR',
    year: '2023',
    theme: '3D generative humans',
    summary:
      'A geometry-aware generative model for complete 3D full-head synthesis across 360-degree viewpoints.',
    contribution:
      'The first 3D-aware GAN to synthesize a full head rather than a frontal face, back of the skull and hair included.',
    tags: ['3D generation', 'Neural rendering', 'Avatars'],
    media: {
      type: 'gif',
      src: '/assets/panohead-overview.gif',
      alt: 'PanoHead 360-degree full-head synthesis overview animation',
      source: 'Existing local site asset: /images/panohead_overview-min.gif',
      status: 'final',
    },
    links: [
      { label: 'Project', href: '/panohead/' },
      { label: 'Paper', href: 'https://arxiv.org/abs/2303.13071' },
      { label: 'Code', href: 'https://github.com/sizhean/panohead' },
    ],
    featuredOrder: 5,
    metaStatus: 'confirmed',
  },
  {
    slug: 'spherehead',
    shortTitle: 'SphereHead',
    title: 'SphereHead: Stable 3D Full-Head Synthesis with Spherical Tri-Plane Representation',
    authors: 'Author order pending verification; Sizhe An is a co-author.',
    venue: 'ECCV',
    year: '2024',
    theme: '3D generative humans',
    summary:
      'A spherical tri-plane representation that removes the mirroring and seam artifacts that show up when a planar tri-plane is wrapped around a whole head.',
    contribution:
      'Follow-up work to PanoHead: the geometry representation, not the generator, was what capped full-head quality.',
    tags: ['3D generation', 'Tri-plane', 'Full-head synthesis'],
    media: {
      type: 'gif',
      src: '/assets/panohead-inversion.gif',
      alt: 'Placeholder animation: 360-degree full-head inversion result',
      source: 'Placeholder — existing local asset /images/panohead_inversion_johnson.gif',
      status: 'placeholder',
    },
    links: [
      { label: 'Project', href: 'https://lhyfst.github.io/spherehead/' },
      { label: 'Paper', href: 'https://arxiv.org/abs/2404.05680' },
    ],
    featuredOrder: 6,
    metaStatus: 'unverified',
  },
  {
    slug: 'mri',
    shortTitle: 'mRI',
    title:
      'mRI: Multi-modal 3D Human Pose Estimation Dataset using mmWave, RGB-D, and Inertial Sensors',
    authors: 'Sizhe An, Yin Li, Umit Ogras',
    venue: 'NeurIPS Datasets & Benchmarks',
    year: '2022',
    theme: 'Sensor-grounded perception',
    summary:
      'A multimodal dataset and benchmark for 3D human pose estimation from mmWave radar, RGB-D, and inertial sensors.',
    contribution:
      'Pairs three very different sensing modalities on the same subjects, so cross-modal pose methods have something to train and be measured on.',
    tags: ['Multimodal sensing', '3D pose', 'mmWave', 'Dataset'],
    media: {
      type: 'gif',
      src: '/assets/mri-rotate.gif',
      alt: 'mRI multimodal 3D pose visualization animation',
      source: 'Existing local site asset: /images/demo_gif_rotate.gif',
      status: 'final',
    },
    links: [
      { label: 'Project', href: '/mri/' },
      { label: 'Paper', href: 'https://arxiv.org/abs/2210.08394' },
      { label: 'Code', href: 'https://github.com/sizhean/mri' },
    ],
    metaStatus: 'confirmed',
  },
  {
    slug: 'panic3d',
    shortTitle: 'PAniC-3D',
    title: 'PAniC-3D: Stylized Single-view 3D Reconstruction from Portraits of Anime Characters',
    authors:
      'Shuhong Chen, Kevin Zhang, Yichun Shi, Heng Wang, Yiheng Zhu, Guoxian Song, Sizhe An, Janus Kristjansson, Xiao Yang, Matthias Zwicker',
    venue: 'CVPR',
    year: '2023',
    theme: 'Single-image 3D reconstruction',
    summary:
      'Reconstructs stylized 3D character heads from a single portrait illustration.',
    contribution:
      'Crosses the domain gap between 2D stylized portraits and animatable 3D heads, where photoreal face priors do not transfer.',
    tags: ['3D reconstruction', 'Stylized characters', 'Neural rendering'],
    media: {
      type: 'gif',
      src: '/assets/panic3d-teaser.gif',
      alt: 'PAniC-3D stylized single-view 3D reconstruction teaser animation',
      source: 'Public GitHub media: https://github.com/ShuhongChen/panic3d-anime-reconstruction',
      status: 'final',
    },
    links: [
      { label: 'Code', href: 'https://github.com/ShuhongChen/panic3d-anime-reconstruction' },
      { label: 'Paper', href: 'https://arxiv.org/abs/2303.14587' },
      { label: 'Video', href: 'https://www.youtube.com/watch?v=7NosmLieg6A' },
    ],
    metaStatus: 'confirmed',
  },
];

/** Selected Work grid, ordered by embodiment proximity (closest first). */
export const featuredWork: Publication[] = publications
  .filter((publication) => publication.featuredOrder !== undefined)
  .sort((a, b) => a.featuredOrder! - b.featuredOrder!);

/** Everything not already shown as a big tile. */
export const otherPublications: Publication[] = publications.filter(
  (publication) => publication.featuredOrder === undefined,
);
