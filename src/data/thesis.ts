export type Act = {
  id: string;
  numeral: string;
  title: string;
  claim: string;
  argument: string;
  /** Slugs from publications.ts, ordered as the argument needs them. */
  evidence: string[];
  /** Said plainly where the substantive work is internal. */
  internalNote?: string;
};

export const thesis = {
  statement:
    'Acting through a body means solving data, representation and control together. I have built in all three.',
  standfirst:
    'Most of the field picks one. The parts only fit if the same person has had to make them fit.',

  acts: [
    {
      id: 'data',
      numeral: 'I',
      title: 'Data',
      claim: 'You cannot learn a body without data of bodies.',
      argument:
        'Every embodied model is downstream of a capture decision someone made years earlier. I have spent a lot of that time on the unglamorous end: standing up rigs, deciding what to measure, and turning heterogeneous sensor streams into something a model can be trained and scored against. Both papers below are that kind of work rather than modelling — the role line on each says exactly where I sat on it.',
      evidence: ['mri', 'show3d'],
    },
    {
      id: 'representation',
      numeral: 'II',
      title: 'Representation',
      claim: 'A body needs a prior an agent can be steered through.',
      argument:
        'Raw capture is not a representation. What a policy needs is a prior over how bodies are shaped and how they move, exposed through an interface something else can drive — language, an identity, a constraint. This is the thread that runs from generating a whole head in 2023 to generating motion and morphology jointly in 2026.',
      evidence: ['llamo', 'iam', 'panohead'],
    },
    {
      id: 'control',
      numeral: 'III',
      title: 'Control & world models',
      claim: 'Prediction and action have to share a representation.',
      argument:
        'An agent that plans in one space and acts in another spends its capacity on translation. The work here pushes toward a single representation that a model can both predict forward and act through — and toward evaluation that can tell a bad decision apart from a bad execution.',
      evidence: ['humanclaw', 'ms-forcing', 'umo'],
      internalNote:
        'This is also where the internal work sits. The robot learning I do at Meta is not publishable; what is public is the layer it stands on.',
    },
  ] satisfies Act[],
};
