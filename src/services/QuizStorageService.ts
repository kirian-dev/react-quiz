export class QuizStorageService {
  static saveProgress(step: number) {
    localStorage.setItem('quizStep', JSON.stringify(step));
  }

  static getProgress(): number {
    return JSON.parse(localStorage.getItem('quizStep') || '1');
  }

  static saveAnswer(questionId: number, answer: string | string[]) {
    const answers = JSON.parse(localStorage.getItem('quizAnswers') || '{}');
    answers[questionId] = answer;
    localStorage.setItem('quizAnswers', JSON.stringify(answers));
  }

  static getAnswers(): Record<number, string | string[]> {
    return JSON.parse(localStorage.getItem('quizAnswers') || '{}');
  }

  static saveLanguage(language: string) {
    localStorage.setItem('i18nextLng', language);
  }

  static getLanguage(): string {
    return localStorage.getItem('selectedLanguage') || 'en';
  }

  static saveEmail(email: string) {
    localStorage.setItem('email', email);
  }

  static getEmail() {
    return localStorage.getItem('email');
  }

  static clearAllData() {
    localStorage.clear();
  }

  static getAgeGroup(): string {
    const answers = JSON.parse(localStorage.getItem('quizAnswers') || '{}');
    const ageKey = answers[2];
    const ageMap: Record<string, string> = {
      'step3.options.age1': '18-29 years',
      'step3.options.age2': '30-39 years',
      'step3.options.age3': '40-49 years',
      'step3.options.age4': '50+ years',
    };
    return ageMap[ageKey] || 'Unknown';
  }
}
