import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { QuizPage } from './components/QuizPage';
import { ResultPage } from './components/ResultPage';
import { questions } from './data/questions';
import { getQuizResult } from './utils/scoring';
import type { QuizResult } from './types/quiz';

type AppState = 'home' | 'quiz' | 'result';

function App() {
  const [currentState, setCurrentState] = useState<AppState>('home');
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  const handleStart = () => {
    setCurrentState('quiz');
  };

  const handleQuizComplete = (answers: Record<number, number>) => {
    const result = getQuizResult(answers, questions);
    setQuizResult(result);
    setCurrentState('result');
  };

  const handleRestart = () => {
    setQuizResult(null);
    setCurrentState('home');
  };

  const handleShare = () => {
    if (!quizResult) return;
    
    const shareText = `AI活用レベル診断の結果: ${quizResult.level.name}\n\nスコア: ${quizResult.totalScore.toFixed(1)}/37.5\n\n${quizResult.level.description}\n\n#AI活用レベル診断`;
    const shareUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(shareText);
    window.open(shareUrl, '_blank');
  };

  switch (currentState) {
    case 'home':
      return <HomePage onStart={handleStart} />;
    case 'quiz':
      return <QuizPage questions={questions} onComplete={handleQuizComplete} />;
    case 'result':
      return quizResult ? (
        <ResultPage 
          result={quizResult} 
          onRestart={handleRestart} 
          onShare={handleShare}
        />
      ) : (
        <HomePage onStart={handleStart} />
      );
    default:
      return <HomePage onStart={handleStart} />;
  }
}

export default App;
