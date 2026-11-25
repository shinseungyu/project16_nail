import type { Config } from 'tailwindcss'

// 미리보기가 사이트와 똑같이 보이도록 사이트 컴포넌트 경로와 브랜드 색을 같이 넣는다.
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}', '../../components/blog/**/*.{ts,tsx}', '../../lib/blog/**/*.ts'],
  theme: {
    extend: {
      colors: {
        brand: { light: '#FFF1F2', DEFAULT: '#FB7185', dark: '#E11D48' },
      },
      boxShadow: {
        premium: '0 10px 30px -10px rgba(251, 113, 133, 0.1), 0 4px 15px -5px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
export default config
