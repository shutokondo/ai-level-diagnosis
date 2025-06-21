import type { QuizQuestion } from '../types/quiz';

export const questions: QuizQuestion[] = [
  {
    id: 1,
    question: 'ChatGPTなどの生成AIを使った経験はありますか？',
    weight: 1.0,
    options: [
      { text: '名前は聞いたことがあるが、使ったことはない', score: 0 },
      { text: '興味があり数回試してみた', score: 1 },
      { text: '日常的に使っている', score: 2 },
      { text: '業務の中で頻繁に活用し、他人に使い方を教えている', score: 3 },
    ],
  },
  {
    id: 2,
    question: 'AIに指示するプロンプト設計を意識したことはありますか？',
    weight: 1.5,
    options: [
      { text: '指示文（プロンプト）について考えたことがない', score: 0 },
      { text: '自分なりに工夫して書いているが、毎回うまくいくとは限らない', score: 1 },
      { text: 'プロンプトを業務ごとに最適化して使っている', score: 2 },
      { text: '思い通りのプロンプトが作れており、他人にも展開している', score: 3 },
    ],
  },
  {
    id: 3,
    question: '業務でAIを使って自動化・効率化したことはありますか？',
    weight: 1.5,
    options: [
      { text: '特にない', score: 0 },
      { text: '資料作成や要約など、一部で使っている', score: 1 },
      { text: 'ワークフローの一部をAIで自動化している', score: 2 },
      { text: '外部ツールと連携して、業務プロセスを根本的に変えている', score: 3 },
    ],
  },
  {
    id: 4,
    question: '触ったことがあるAIツールはどれですか？',
    weight: 1.0,
    options: [
      { text: 'ChatGPT/Gemini/Claudeなどのみ', score: 1 },
      { text: '上記＋業務系AI（Notion AI、Excel Copilot等）', score: 2 },
      { text: '上記＋ノーコード連携ツール（Zapier、Make等）', score: 3 },
      { text: '上記＋開発系AIツール（OpenAI API、LangChain等）', score: 4 },
    ],
  },
  {
    id: 5,
    question: 'AIの得意・不得意を理解して使い分けていますか？',
    weight: 1.2,
    options: [
      { text: 'AIの特性をよく理解していない', score: 0 },
      { text: 'なんとなく理解している', score: 1 },
      { text: '得意・不得意を理解し、適切に使い分けている', score: 2 },
      { text: '特性を熟知し、最適な活用方法を他人に教えられる', score: 3 },
    ],
  },
  {
    id: 6,
    question: 'AIを使った作業の品質管理はどうしていますか？',
    weight: 1.0,
    options: [
      { text: '出力されたものをそのまま使っている', score: 0 },
      { text: '簡単にチェックしてから使っている', score: 1 },
      { text: '出力結果を必ず検証・修正してから使っている', score: 2 },
      { text: '品質管理の仕組みを構築している', score: 3 },
    ],
  },
  {
    id: 7,
    question: 'プログラミングやAPI連携でAIを活用していますか？',
    weight: 1.8,
    options: [
      { text: 'プログラミングは全くしない', score: 0 },
      { text: 'AIを用いてExcelのVBAやPythonで簡単な処理を書いたことがある', score: 1 },
      { text: 'AIのAPIを使ったプログラムを作ったことがある', score: 2 },
      { text: '複雑なAIアプリケーションを開発できる', score: 3 },
    ],
  },
  {
    id: 8,
    question: '組織内でのAI活用推進に関わっていますか？',
    weight: 1.3,
    options: [
      { text: '個人で使うのみ', score: 0 },
      { text: '同僚に使い方を教えたことがある', score: 1 },
      { text: '部署内でAI活用を推進している', score: 2 },
      { text: '組織全体のAI戦略立案・実行に関わっている', score: 3 },
    ],
  },
  {
    id: 9,
    question: 'AIツール同士の連携や統合を行ったことはありますか？',
    weight: 1.7,
    options: [
      { text: 'AIツールは単体でのみ使用', score: 0 },
      { text: '複数のAIツールを使い分けている', score: 1 },
      { text: 'ツール間でデータ連携を行っている', score: 2 },
      { text: '複数のAIツールを統合したワークフローを構築している', score: 3 },
    ],
  },
  {
    id: 10,
    question: 'AIの技術的な仕組みについてどの程度理解していますか？',
    weight: 1.0,
    options: [
      { text: '技術的なことは全くわからない', score: 0 },
      { text: '基本的な仕組みは理解している', score: 1 },
      { text: '技術的な仕組みを理解し、適切に活用できる', score: 2 },
      { text: '技術的な仕組みを熟知し、カスタマイズや開発ができる', score: 3 },
    ],
  },
];