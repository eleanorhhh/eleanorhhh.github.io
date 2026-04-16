import type { Config } from 'tailwindcss'

export default {
  // 這行超重要！告訴 Tailwind 要去哪裡找 class，沒寫的話樣式會全部失效
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#FF5C00', // 活力橘
        'brand-blue': '#4F46E5',   // 科技藍
        'brand-yellow': '#FACC15', // 點睛黃
        'bg-paper': '#F8F7F2',     // 紙張感底色
      },
      borderWidth: {
        '3': '3px',
      },
      boxShadow: {
        // 定義厚重的實心陰影
        'neo': '6px 6px 0px 0px rgba(0, 0, 0, 1)',
        'neo-hover': '2px 2px 0px 0px rgba(0, 0, 0, 1)',
      }
    },
  },
  plugins: [],
} satisfies Config
