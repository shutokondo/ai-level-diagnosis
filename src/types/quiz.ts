export interface QuizOption {
  text: string;
  score: number;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
  weight: number;
}

export interface AILevel {
  id: string;
  name: string;
  description: string;
  abilities: string[];
  tools: string[];
  nextLevel?: string;
  nextLevelActions?: string[];
}

export interface QuizResult {
  totalScore: number;
  level: AILevel;
}