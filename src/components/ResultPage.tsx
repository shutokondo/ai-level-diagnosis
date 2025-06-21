import React from 'react';
import type { QuizResult } from '../types/quiz';

interface ResultPageProps {
  result: QuizResult;
  onRestart: () => void;
  onShare: () => void;
}

export const ResultPage: React.FC<ResultPageProps> = ({ result, onRestart, onShare }) => {
  const { totalScore, level } = result;

  const getLevelColor = (levelId: string) => {
    switch (levelId) {
      case 'unexperienced': return 'from-gray-400 to-gray-600';
      case 'beginner': return 'from-blue-400 to-blue-600';
      case 'user': return 'from-green-400 to-green-600';
      case 'designer': return 'from-orange-400 to-orange-600';
      case 'developer': return 'from-purple-400 to-purple-600';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const getLevelBadgeColor = (levelId: string) => {
    switch (levelId) {
      case 'unexperienced': return 'bg-gray-100 text-gray-800';
      case 'beginner': return 'bg-blue-100 text-blue-800';
      case 'user': return 'bg-green-100 text-green-800';
      case 'designer': return 'bg-orange-100 text-orange-800';
      case 'developer': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8">
        {/* ヘッダー */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">診断結果</h1>
          <p className="text-gray-600">あなたのAI活用レベルが判定されました</p>
        </div>

        {/* メイン結果 */}
        <div className="text-center mb-8">
          <div className={`inline-block bg-gradient-to-r ${getLevelColor(level.id)} text-white rounded-2xl p-8 mb-6`}>
            <h2 className="text-4xl font-bold mb-2">{level.name}</h2>
            <p className="text-lg opacity-90">スコア: {totalScore.toFixed(1)} / 37.5</p>
          </div>
          
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            {level.description}
          </p>
        </div>

        {/* 詳細情報 */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* できること */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">✨ できること</h3>
            <ul className="space-y-2">
              {level.abilities.map((ability, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span className="text-gray-700">{ability}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 活用ツール */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">🛠️ 活用ツール</h3>
            <div className="flex flex-wrap gap-2">
              {level.tools.map((tool, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelBadgeColor(level.id)}`}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 次のレベルへのアクション */}
        {level.nextLevel && level.nextLevelActions && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              🚀 次のレベル「{level.nextLevel}」に向けて
            </h3>
            <ul className="space-y-2">
              {level.nextLevelActions.map((action, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">→</span>
                  <span className="text-blue-800">{action}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* アクションボタン */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onShare}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            結果をXでシェア
          </button>
          <button
            onClick={onRestart}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-xl transition-all duration-200"
          >
            もう一度診断する
          </button>
        </div>
      </div>
    </div>
  );
};