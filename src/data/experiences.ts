// 経歴・実績データ
// src/data/experiences.ts

export interface Experience {
  id: string;
  title: string;           // 職歴/実績のタイトル
  organization: string;    // 会社・団体名
  period: string;          // 期間
  category: string;        // カテゴリ（Competition / Job / Research / Project など）
  thumbnail: string;       // カードに使うアイコン画像
  description: string;     // 短い説明（カード表示用）
  details: string;         // 詳細説明（モーダル表示用）
  tags: string[];          // 使用ツール・キーワード
  link?: string;
  linkLabel?: string;
  accentColor: 'red' | 'orange' | 'gold';
}

export const experiences: Experience[] = [
  {
    id: 'exp-bitsummit',
    title: 'BitSummit Game Jam 2023',
    organization: 'BitSummit',
    period: '2023',
    category: 'Competition',
    thumbnail: '/experience/BitSummitGameJam.jpg',
    description: 'リードプログラマーとして参加し、東京組グランプリを受賞。',
    details: 'BitSummit Game Jam 2023にて、プランナー5名、プログラマー5名、3Dデザイナー1名のチームにて、リードプログラマーとして参加しました。およそ3か月間のゲーム制作において、技術選定、コアシステムの実装、チームのタスク管理を担当しました。タワーディフェンスゲーム『CETUS』を作成し、東京組グランプリを獲得することができました。',
    tags: ['BitSummit Game Jam', 'Lead Programmer', 'Unity', 'C#'],
    accentColor: 'orange',
  },
  {
    id: 'exp-live2d',
    title: '株式会社Live2D アルバイト',
    organization: '株式会社Live2D',
    period: '2023 - 2026',
    category: 'Job',
    thumbnail: 'Live2D',
    description: '2年半の長期アルバイト。主にSDKのissue対応やテスト、サンプル制作を担当。',
    details: '約2年半にわたり、株式会社Live2Dにてソフトウェアエンジニア（アルバイト）として勤務しました。主な業務として、Live2D Cubism Unity SDKのIssue対応、動作テスト、開発者向けのサンプルプログラムの作成およびドキュメント整備を行い、SDKの品質向上と導入ハードルの低下に貢献しました。',
    tags: ['Unity', 'C#', 'C++', 'TypeScript', 'SDK Development'],
    accentColor: 'orange',
  },
  {
    id: 'exp-thesis',
    title: '明暗境界線の統一的スタイル化手法',
    organization: '卒業論文 / 情報処理学会',
    period: '2025 - 2026',
    category: 'Research',
    thumbnail: '/experience/Terminator.png',
    description: '第88回全国大会で発表。明暗境界線のスタイルを統一的に制御する手法を提案。',
    details: '「明暗境界線の統一的スタイル化手法」という題目で卒業論文を執筆しました。3DCGにおける非実写的レンダリングにおいて重要な役割を果たす明暗境界線に対して、ユーザーが意図したスタイルを効率的に適用・制御できる手法を提案し、情報処理学会 第88回全国大会にて口頭発表を行いました。',
    tags: ['NPR', 'Research', 'Unity', 'HLSL'],
    accentColor: 'orange',
  },
  {
    id: 'exp-raytracing',
    title: 'Physically-based Feature Line Rendering',
    organization: 'Personal Project / Research',
    period: '2025',
    category: 'Graphics',
    thumbnail: '/experience/featureline.png',
    description: 'C++でレイトレを実装。論文に基づいた物理ベースのライン描画を追実装。',
    details: '「Ray Tracing in One Weekend」をベースにC++でレイトレーシングを一から実装しました。さらにその知識を発展させ、学術論文「Physically-based Feature Line Rendering」に基づいた、物理ベースの計算を用いた特徴線描画システムを追実装しました。\n\n参考文献:\nPeter Shirley, Ray Tracing in One Weekend\nRex West, ACM Transactions on Graphics, Vol. 40, No. 6, Article 246, pp. 1–11, Dec. 2021. DOI: 10.1145/3478513.3480550',
    tags: ['C++', 'RayTracing', 'Computer Graphics'],
    accentColor: 'orange',
  },
  {
    id: 'exp-capcom',
    title: 'Capcom Games Competition',
    organization: '株式会社カプコン',
    period: '2025',
    category: 'Competition',
    thumbnail: 'RE ENGINE',
    description: 'カプコン社内エンジン「RE ENGINE」を使用したゲーム制作。',
    details: 'Capcom Games Competitionにチーム参加し、カプコンの社内ゲーム開発エンジン「RE ENGINE」を使用したゲーム制作を行いました。内製エンジンに触れることができ、カプコンならではの機能やワークフローを体験し、独自の機能を学びながらゲームを制作しました。\nUI処理、ゲームフローの実装を担当しました。',
    tags: ['RE ENGINE', 'C#'],
    accentColor: 'orange',
  },
  {
    id: 'exp-povray',
    title: 'PovRay 画像作品制作',
    organization: 'Creative Work',
    period: '2024',
    category: 'Project',
    thumbnail: '/experience/povray.png',
    description: 'Pov-Rayを用いたレイトレーシング画像作品の制作。',
    details: 'POV-Ray（Persistence of Vision Raytracer）を使用し、シーン記述言語によるレイトレーシング画像の制作を行いました。幾何学的なモデルの配置、光学的な質感設定などを通じて、レンダリングの基礎理論に基づいた絵作りを学習しました。',
    tags: ['POV-Ray', 'RayTracing', 'SDL'],
    accentColor: 'orange',
  },
];
