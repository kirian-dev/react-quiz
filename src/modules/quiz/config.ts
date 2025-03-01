import { getLastStepOptions } from './utils';

export const quizSteps = [
  {
    key: 'step1',
    title: 'step1.title',
    subtitle: 'step1.subtitle',
    singleOptions: ['en', 'fr', 'de', 'es'],
    type: 'single',
  },
  {
    key: 'step2',
    title: 'step2.title',
    subtitle: 'step2.subtitle',
    singleOptions: [
      'step2.options.female',
      'step2.options.male',
      'step2.options.other',
    ],
    type: 'single',
    customRender: (option: string) => genderSmiles[option] || '',
  },
  {
    key: 'step3',
    title: 'step3.title',
    singleOptions: [
      'step3.options.age1',
      'step3.options.age2',
      'step3.options.age3',
      'step3.options.age4',
    ],
    type: 'single',
  },
  {
    key: 'step4',
    title: 'step4.title',
    subtitle: 'step4.subtitle',
    singleOptions: [
      'step4.options.logic',
      'step4.options.slow',
      'step4.options.humor',
      'step4.options.ending',
    ],
    type: 'multiple',
    maxSelection: 2,
    hasCheckbox: true,
  },
  {
    key: 'step5',
    title: 'step5.title',
    subtitle: 'step5.subtitle',
    options: getLastStepOptions(),
    type: 'bubble',
    maxSelection: 3,
  },
];

const genderSmiles: Record<string, string> = {
  'step2.options.female': '👩',
  'step2.options.male': '👨',
  'step2.options.other': '😉',
};
