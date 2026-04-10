// ゲーム作品のデータ定義
// 画像は /public/games/ フォルダに配置してください

export interface Screenshot {
  src: string;
  alt: string;
}

export interface Game {
  id: string;
  title: string;
  thumbnail: string;       // PNGサムネイル (1:1 square)
  screenshots: Screenshot[];
  description: string;
  genre: string;
  tools: string[];
  link?: string;
  linkLabel?: string;
  year: string;
  accentColor: string;     // カードのアクセントカラー (Tailwindクラス用)
  glowColor: string;       // グローのCSS color
}

export const games: Game[] = [
  {
    id: 'game-1',
    title: 'ゲームタイトル 1',
    thumbnail: '/games/thumb1.png',
    screenshots: [
      { src: '/games/ss1-1.png', alt: 'ゲームプレイ画面 1' },
      { src: '/games/ss1-2.png', alt: 'ゲームプレイ画面 2' },
    ],
    description:
      'このゲームの説明文をここに入れてください。ゲームのコンセプト、ジャンル、開発のポイントなどを簡潔に記述します。',
    genre: 'アクション / パズル',
    tools: ['Unity', 'C#', 'Aseprite'],
    link: 'https://example.com/',
    linkLabel: 'itch.io で遊ぶ',
    year: '2024',
    accentColor: 'cyan',
    glowColor: 'rgba(0, 212, 255, 0.4)',
  },
  {
    id: 'game-2',
    title: 'ゲームタイトル 2',
    thumbnail: '/games/thumb2.png',
    screenshots: [
      { src: '/games/ss2-1.png', alt: 'ゲームプレイ画面 1' },
      { src: '/games/ss2-2.png', alt: 'ゲームプレイ画面 2' },
    ],
    description:
      '2つ目のゲームの説明文をここに記述してください。制作期間や工夫した点などを書くと印象的です。',
    genre: 'ローグライク',
    tools: ['Unity', 'C#', 'Photoshop'],
    link: 'https://example.com/',
    linkLabel: 'itch.io で遊ぶ',
    year: '2025',
    accentColor: 'purple',
    glowColor: 'rgba(139, 92, 246, 0.4)',
  },
  {
    id: 'game-3',
    title: 'ゲームタイトル 3',
    thumbnail: '/games/thumb3.png',
    screenshots: [
      { src: '/games/ss3-1.png', alt: 'ゲームプレイ画面 1' },
    ],
    description: '3つ目のゲームの説明文。ゲームジャムで作ったものや、学習目的のプロジェクトなど何でもOKです。',
    genre: 'プラットフォーマー',
    tools: ['Godot', 'GDScript'],
    link: 'https://example.com/',
    linkLabel: '遊んでみる',
    year: '2025',
    accentColor: 'pink',
    glowColor: 'rgba(236, 72, 153, 0.4)',
  },
];
