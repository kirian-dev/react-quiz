export enum QuizType {
  single = 'single',
  multiple = 'multiple',
  bubble = 'bubble',
}

export type QuizOption = {
  key: string;
  label: string;
};

export type QuizStepType = {
  key: string;
  title: string;
  subtitle?: string;
  type: 'single' | 'multiple' | 'bubble';
  options: QuizOption[];
};

export type QuizContextType = {
  answers: Record<string, string | string[]>;
  setAnswer: (key: string, value: string | string[]) => void;
  getDynamicStep: (stepIndex: number) => QuizStepType | null;
};
