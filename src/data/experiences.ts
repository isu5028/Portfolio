// 経歴・実績データ
// src/data/experiences.ts

export interface Experience {
  id: string;
  title: string;           // 職歴/実績のタイトル
  organization: string;    // 会社・団体名
  period: string;          // 期間
  category: string;        // カテゴリ（Competition / Job / Research / Project など）
  thumbnail: string;       // カードに使うアイコン画像
  screenshots?: { src: string; alt: string }[];
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
    details: 'BitSummit Game Jam 2023にて、プランナー4名、プログラマー5名、3Dデザイナー1名のチームにて、リードプログラマーとして参加しました。およそ3か月間のゲーム制作において、技術選定、コアシステムの実装、チームのタスク管理を担当しました。タワーディフェンスゲーム『CETUS』を作成し、東京組グランプリを獲得することができました。',
    tags: ['BitSummit Game Jam', 'Lead Programmer', 'Unity', 'C#'],
    accentColor: 'orange',
  },
  {
    id: 'exp-entrustx',
    title: 'Entrust(X)',
    organization: 'VRChat / Team Project',
    period: '2026',
    category: 'Project',
    thumbnail: '/experience/EntrustX.png',
    description: '写真の共有を通じて謎を解くVRChatワールド。Unityシーン・描画・軽量化を担当。',
    details: 'VRChatの謎解きワールド「Entrust(X)」の制作に参加しました。ワールドで撮影してXに投稿された写真が、別のインスタンスにも共有される仕組みを取り入れ、他のプレイヤーの写真を手がかりに謎を解くゲームです。\n\n自身はUnityシーンの制作・調整、描画周りの実装・調整、軽量化を担当しました。謎解きシステム、現実時間に合わせて空が変化するシステム、UI周りの実装を行いました。また、マテリアルの共通化、メッシュの頂点数削減、GPU Instancingの活用により、描画負荷の軽減に取り組みました。\n\n写真共有システムの仕組みは、以下の開発メンバーによる解説記事で紹介されています。\n\nhttps://note.com/hadnf/n/n0c41e3211e3d\n\nhttps://www.youtube.com/watch?v=XMwWPlfKnso',
    tags: ['Unity', 'VRChat', 'Rendering', 'Optimization', 'Team Development'],
    accentColor: 'orange',
  },
  {
    id: 'exp-buildoban',
    title: 'BUILDOBAN',
    organization: 'Gamedev.js Jam 2026 / YouTube Playables',
    period: '2026',
    category: 'Competition',
    thumbnail: '/experience/buildoban.gif',
    screenshots: [
      { src: '/experience/buildoban.gif', alt: 'BUILDOBAN ゲームプレイ動画' },
      { src: '/games/ss_buildoban1.png', alt: 'BUILDOBAN ゲームプレイ画面 1' },
      { src: '/games/ss_buildoban2.png', alt: 'BUILDOBAN ゲームプレイ画面 2' },
      { src: '/games/ss_buildoban3.png', alt: 'BUILDOBAN ゲームプレイ画面 3' },
    ],
    description: 'Gamedev.js Jam 2026で総合2位。YouTube Playablesで5万プレイを達成。',
    details: '合体と同期を駆使してクリアを目指す、倉庫番系パズルゲームです。参加作品約500件のオンライン海外ゲームジャム「Gamedev.js Jam 2026」に参加し、総合2位、YouTube Playable Challenge 4位、Deploy to Wavedash Challenge 2位を獲得しました。\n\nYouTubeのゲームプラットフォーム「YouTube Playables」でも公開し、5万プレイを達成しました。\n\nGodotを用いて短期間で企画・開発を行い、レベルエディタと、コマンドパターンによる入力制御を実装しました。コーディングのサポートにはCodexを活用しました。\n\nhttps://www.youtube.com/watch?v=dzC0jU73puw&t=33s',
    tags: ['Godot', 'GDScript', 'Aseprite', 'Gamedev.js Jam', 'YouTube Playables'],
    link: 'https://youtube.com/playables/Ugkx1VSKxkglrnIIeBdXRg625K4aWH2q87PR',
    linkLabel: 'YouTube Playablesで遊ぶ',
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
    details: 'Capcom Games Competitionにチーム参加し、カプコンの社内ゲーム開発エンジン「RE ENGINE」を使用したゲーム制作を行いました。内製エンジンに触れることができ、カプコンならではの機能やワークフローを体験し、独自の機能を学びながらゲームを制作しました。\nチームでは、UI処理、ゲームフローの実装を担当しました。',
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
