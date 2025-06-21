import type { QuizQuestion, AILevel, QuizResult } from '../types/quiz';
import { levels } from '../data/levels';

export const calculateScore = (answers: Record<number, number>, questions: QuizQuestion[]): number => {
  let totalScore = 0;
  
  questions.forEach(question => {
    const selectedScore = answers[question.id] || 0;
    totalScore += selectedScore * question.weight;
  });
  
  return totalScore;
};

export const determineLevel = (totalScore: number): AILevel => {
  // レベル判定基準（満点：37.5点）
  if (totalScore >= 31) return levels.find(l => l.id === 'developer')!;
  if (totalScore >= 23) return levels.find(l => l.id === 'designer')!;
  if (totalScore >= 13) return levels.find(l => l.id === 'user')!;
  if (totalScore >= 6) return levels.find(l => l.id === 'beginner')!;
  return levels.find(l => l.id === 'unexperienced')!;
};

export const getQuizResult = (answers: Record<number, number>, questions: QuizQuestion[]): QuizResult => {
  const totalScore = calculateScore(answers, questions);
  const level = determineLevel(totalScore);
  
  return {
    totalScore,
    level,
  };
};