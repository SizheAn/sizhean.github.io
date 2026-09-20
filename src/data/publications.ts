// Every title, author list, venue, year and arXiv id below was checked against
// the arXiv API (au:"Sizhe_An") and each paper's own project page on 2026-09-20.
// Teaser media comes from each paper's own project page — never another paper's.

export type Media = {
  type: 'image' | 'video';
  src: string;
  poster?: string;
  alt: string;
  /** Where the asset came from, so provenance is auditable. */
  source: string;
  /** Wide paper figures need 'contain' or the tile crop destroys them. */
  fit?: 'cover' | 'contain';
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
};

export const publications: Publication[] = [
  {
    slug: 'humanclaw',
    shortTitle: 'HumanCLAW',
    title: 'HumanCLAW: Can Vision-Language Models Act Through a Body?',
    authors:
      'Li Siyao, Jiawei Gu, Shuai Liu, Kairui Hu, Zekun Li, Linjie Li, Chengcheng Tang, Po-Chen Wu, Ivan Shugurov, Lingni Ma, Michael Zollhoefer, Sizhe An, Abhay Mittal, Amy Zhao, Ranjay Krishna, Manling Li, Ziwei Liu, Chuan Guo',
    venue: 'arXiv',
    year: '2026',
    theme: 'Embodiment & VLM evaluation',
    summary:
      'A benchmark and skill harness that puts a vision-language model in closed loop with a physical human body.',
    contribution:
      'Separating the decision from the motor execution that carries it out makes embodied failure attributable: the model chose wrong, or the body could not do it.',
    tags: ['Embodied AI', 'VLM', 'Benchmark', 'Closed-loop control'],
    media: {
      type: 'video',
      src: '/assets/humanclaw.mp4',
      poster: '/assets/humanclaw.jpg',
      alt: 'HumanCLAW demo: egocentric observation beside a third-person view of the humanoid and its action toolbar',
      source: 'https://human-claw.github.io/static/videos/demo1.mp4',
    },
    links: [
      { label: 'Project', href: 'https://human-claw.github.io/' },
      { label: 'Paper', href: 'https://arxiv.org/abs/2607.27180' },
    ],
    featuredOrder: 1,
  },
  {
    slug: 'ms-forcing',
    shortTitle: 'Ms. Forcing',
    title:
      'Ms. Forcing: Efficient Streaming Video Generation with Multi-Scale Patchification and Attention',
    authors:
      'Zekun Li, Xiaoyan Cong, Hongyu Li, Zhiyang Dou, Chuan Guo, Abhay Mittal, Sizhe An, Srinath Sridhar',
    venue: 'arXiv',
    year: '2026',
    theme: 'World models & video generation',
    summary:
      'Multi-scale patchification and attention for video generation that streams frames continuously instead of rendering a clip offline.',
    contribution:
      'Streaming is what separates a video model from a world model an agent can act inside — it has to keep up with the agent, in real time.',
    tags: ['World models', 'Video generation', 'Streaming', 'Efficiency'],
    media: {
      type: 'image',
      src: '/assets/msforcing.jpg',
      alt: 'Ms. Forcing teaser: two streamed generations, an art-gallery tour and a blooming rose, annotated 22.8 FPS in real-time',
      source: 'https://kunkun0w0.github.io/images/MsForcing.png (first author page; no project site yet)',
      fit: 'contain',
    },
    links: [{ label: 'Paper', href: 'https://arxiv.org/abs/2607.20940' }],
    featuredOrder: 2,
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
      'One in-context framework that adapts a motion foundation prior across generation, inpainting, editing, trajectory, obstacle and reaction tasks.',
    contribution:
      'One pretrained motion prior, prompted rather than retrained, covers behaviors and constraints that normally need a model each.',
    tags: ['In-context learning', 'Motion foundation model', 'Control', 'Embodied agents'],
    media: {
      type: 'video',
      src: '/assets/umo.mp4',
      poster: '/assets/umo.jpg',
      alt: 'UMO text-to-motion result on HumanML3D',
      source: 'https://oliver-cong02.github.io/UMO.github.io/ (assets/videos/t2m/humanml3d_full)',
    },
    links: [
      { label: 'Project', href: 'https://oliver-cong02.github.io/UMO.github.io/' },
      { label: 'Paper', href: 'https://arxiv.org/abs/2603.15975' },
      { label: 'Code', href: 'https://github.com/Oliver-Cong02/UMO' },
    ],
    featuredOrder: 3,
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
      'Continuous tokens avoid the quantization jitter of discrete motion codes while leaving the pretrained language model intact.',
    tags: ['Multimodal LLM', 'Motion generation', 'Motion understanding'],
    media: {
      type: 'video',
      src: '/assets/llamo.mp4',
      poster: '/assets/llamo.jpg',
      alt: 'LLaMo-8B text-to-motion generation result',
      source: 'https://kunkun0w0.github.io/project/LLaMo/videos/ours_sample_01.mp4',
    },
    links: [
      { label: 'Project', href: 'https://kunkun0w0.github.io/project/LLaMo/' },
      { label: 'Paper', href: 'https://arxiv.org/abs/2602.12370' },
      { label: 'CVPR', href: 'https://cvpr.thecvf.com/virtual/2026/poster/38091' },
    ],
    featuredOrder: 4,
  },
  {
    slug: 'panohead',
    shortTitle: 'PanoHead',
    title: 'PanoHead: Geometry-Aware 3D Full-Head Synthesis in 360°',
    authors: 'Sizhe An, Hongyi Xu, Yichun Shi, Guoxian Song, Umit Ogras, Linjie Luo',
    venue: 'CVPR',
    year: '2023',
    theme: '3D generative humans',
    summary:
      'A geometry-aware generative model for complete 3D full-head synthesis across 360-degree viewpoints.',
    contribution:
      'The first 3D-aware GAN to synthesize a full head rather than a frontal face — back of the skull and hair included.',
    tags: ['3D generation', 'Neural rendering', 'Avatars'],
    media: {
      type: 'video',
      src: '/assets/panohead.mp4',
      poster: '/assets/panohead.jpg',
      alt: 'PanoHead 360-degree full-head synthesis overview',
      source: 'Author-owned site asset: /images/panohead_overview-min.gif, re-encoded to mp4',
    },
    links: [
      { label: 'Project', href: '/panohead/' },
      { label: 'Paper', href: 'https://arxiv.org/abs/2303.13071' },
      { label: 'Code', href: 'https://github.com/sizhean/panohead' },
    ],
    featuredOrder: 5,
  },
  {
    slug: 'spherehead',
    shortTitle: 'SphereHead',
    title: 'SphereHead: Stable 3D Full-head Synthesis with Spherical Tri-plane Representation',
    authors:
      'Heyuan Li, Ce Chen, Tianhao Shi, Yuda Qiu, Sizhe An, Guanying Chen, Xiaoguang Han',
    venue: 'ECCV Oral',
    year: '2024',
    theme: '3D generative humans',
    summary:
      'A spherical tri-plane representation for full-head synthesis that removes the artifacts a planar tri-plane produces when wrapped around a whole head.',
    contribution:
      'Follow-up to PanoHead: the geometry representation, not the generator, was what capped full-head quality.',
    tags: ['3D generation', 'Tri-plane', 'Full-head synthesis'],
    media: {
      type: 'video',
      src: '/assets/spherehead.mp4',
      poster: '/assets/spherehead.jpg',
      alt: 'SphereHead synthesized heads rendered across a range of viewpoints',
      source: 'https://lhyfst.github.io/spherehead/img/SuppVideo_compressed_Trim.mp4 (9–21s)',
    },
    links: [
      { label: 'Project', href: 'https://lhyfst.github.io/spherehead/' },
      { label: 'Paper', href: 'https://arxiv.org/abs/2404.05680' },
    ],
    featuredOrder: 6,
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
      'A multimodal dataset and benchmark for 3D human pose estimation from mmWave radar, RGB-D and inertial sensors.',
    contribution:
      'Pairs three very different sensing modalities on the same subjects, so cross-modal pose methods have something to train and be measured on.',
    tags: ['Multimodal sensing', '3D pose', 'mmWave', 'Dataset'],
    media: {
      type: 'video',
      src: '/assets/mri.mp4',
      poster: '/assets/mri.jpg',
      alt: 'mRI multimodal 3D pose estimation across RGB, IMU and radar inputs',
      source: 'Author-owned site asset: /images/demo_gif_rotate.gif, re-encoded to mp4',
    },
    links: [
      { label: 'Project', href: '/mri/' },
      { label: 'Paper', href: 'https://arxiv.org/abs/2210.08394' },
      { label: 'Code', href: 'https://github.com/sizhean/mri' },
    ],
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
    summary: 'Reconstructs stylized 3D character heads from a single portrait illustration.',
    contribution:
      'Crosses the domain gap between 2D stylized portraits and animatable 3D heads, where photoreal face priors do not transfer.',
    tags: ['3D reconstruction', 'Stylized characters', 'Neural rendering'],
    media: {
      type: 'video',
      src: '/assets/panic3d.mp4',
      poster: '/assets/panic3d.jpg',
      alt: 'PAniC-3D stylized single-view 3D reconstruction results',
      source: 'https://github.com/ShuhongChen/panic3d-anime-reconstruction, re-encoded to mp4',
    },
    links: [
      { label: 'Code', href: 'https://github.com/ShuhongChen/panic3d-anime-reconstruction' },
      { label: 'Paper', href: 'https://arxiv.org/abs/2303.14587' },
      { label: 'Video', href: 'https://www.youtube.com/watch?v=7NosmLieg6A' },
    ],
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
