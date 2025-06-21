import type { AILevel } from '../types/quiz';

export const levels: AILevel[] = [
  {
    id: 'unexperienced',
    name: 'AI未経験',
    description: 'AIという言葉は知っているが、使ったことはない。ChatGPTなども使った経験がない。',
    abilities: [
      'AIで何ができるかを知らない',
      '業務や日常でAIを使っていない',
    ],
    tools: ['特になし'],
    nextLevel: 'AI初心者',
    nextLevelActions: [
      'ChatGPTやGeminiを試してみる',
      '簡単な質問から始めてAIと対話してみる',
      'AI活用事例を調べてみる',
    ],
  },
  {
    id: 'beginner',
    name: 'AI初心者',
    description: 'ChatGPTや画像生成AIを使ったことがある。簡単なプロンプトを試した経験がある。',
    abilities: [
      '日常業務の一部でAIを使ってみる',
      '文章作成や要約、アイデア出しができる',
    ],
    tools: ['ChatGPT', 'Gemini', 'Canva AI'],
    nextLevel: 'AI活用者',
    nextLevelActions: [
      'プロンプトの書き方を学ぶ',
      '業務でのAI活用シーンを増やす',
      'AIの得意・不得意を理解する',
    ],
  },
  {
    id: 'user',
    name: 'AI活用者',
    description: 'AI活用者であるあなたは、業務フローにAIを組み込んで使えます。AIの得意・不得意が理解でき、必要に応じてプロンプトを工夫できます。',
    abilities: [
      '業務資料の下書き作成',
      '定型業務の自動化',
      '社内でAI活用を促進',
    ],
    tools: ['ChatGPT + プラグイン', 'Excel + Copilot', 'Notion AI'],
    nextLevel: 'AI設計者',
    nextLevelActions: [
      'GPTsを作成してみる',
      'ワークフロー自動化ツールを学ぶ',
      'プログラミングの基礎を学ぶ',
    ],
  },
  {
    id: 'designer',
    name: 'AI設計者',
    description: '業務に合わせたAIの活用方法を設計できる。業務フローをAI前提に再設計して構築できる。',
    abilities: [
      '自社業務に最適なプロンプトを設計',
      '部署横断でAI導入を支援',
      '社内講師として活用指導が可能',
    ],
    tools: ['GPTs', 'Zapier + ChatGPT連携', 'Make / PowerAutomate', 'プログラミング（Python/VBA等）'],
    nextLevel: 'AI開発者・推進者',
    nextLevelActions: [
      'APIを使った開発を学ぶ',
      'LangChainなどの開発フレームワークを学ぶ',
      '組織のAI戦略立案に参加する',
    ],
  },
  {
    id: 'developer',
    name: 'AI開発者・推進者',
    description: '自社専用AIツールを開発・導入できる。API連携やLLMファインチューニングが可能。',
    abilities: [
      '独自AIエージェントの開発',
      '外部ツールとAIの統合設計',
      '組織全体のAI戦略を立案・実行',
    ],
    tools: ['OpenAI API', 'LangChain', 'Claude Code / Cursor'],
  },
];