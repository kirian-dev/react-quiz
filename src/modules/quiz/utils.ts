import { QuizStorageService } from '@/services/QuizStorageService';

export const getLastStepOptions = () => {
  const ageGroup = QuizStorageService.getAgeGroup();

  const topicsByAge: Record<string, { key: string; emoji: string }[]> = {
    '18-29 years': [
      { key: 'step5.options.werewolf', emoji: '🐺' },
      { key: 'step5.options.romance', emoji: '🥰' },
      { key: 'step5.options.action', emoji: '🔥' },
      { key: 'step5.options.badBoy', emoji: '🤠' },
      { key: 'step5.options.youngAdult', emoji: '🙋‍♀️' },
      { key: 'step5.options.billionaire', emoji: '🤑' },
    ],
    '30-39 years': [
      { key: 'step5.options.billionaire', emoji: '🤑' },
      { key: 'step5.options.royal', emoji: '👑' },
      { key: 'step5.options.badBoy', emoji: '🤠' },
      { key: 'step5.options.werewolf', emoji: '🐺' },
      { key: 'step5.options.romance', emoji: '🥰' },
      { key: 'step5.options.action', emoji: '🔥' },
    ],
    '40-49 years': [
      { key: 'step5.options.action', emoji: '🔥' },
      { key: 'step5.options.youngAdult', emoji: '🙋‍♀️' },
      { key: 'step5.options.romance', emoji: '🥰' },
      { key: 'step5.options.billionaire', emoji: '🤑' },
      { key: 'step5.options.royal', emoji: '👑' },
    ],
    '50+ years': [
      { key: 'step5.options.royal', emoji: '👑' },
      { key: 'step5.options.billionaire', emoji: '🤑' },
      { key: 'step5.options.werewolf', emoji: '🐺' },
      { key: 'step5.options.romance', emoji: '🥰' },
    ],
  };

  return topicsByAge[ageGroup] || topicsByAge['18-29 years'];
};
