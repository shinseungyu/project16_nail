import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#f9fafb', borderTop: '1px solid #e5e7eb', marginTop: '3rem', padding: '2rem 1rem', width: '100%' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', fontSize: '0.875rem', color: '#6b7280' }}>
          <div>
            <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} 네일아트 창업. All rights reserved.</p>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/terms" style={{ color: '#6b7280', textDecoration: 'none' }}>이용약관</Link>
            <Link href="/privacy" style={{ color: '#4b5563', textDecoration: 'none', fontWeight: 600 }}>개인정보처리방침</Link>
            <Link href="/cookie-policy" style={{ color: '#6b7280', textDecoration: 'none' }}>쿠키정책</Link>
          </div>
        </div>
        <div style={{ fontSize: '0.75rem', color: '#9ca3af', textAlign: 'left' }}>
          본 사이트의 내용 및 비용 정보는 참고용이며 실제와 다를 수 있습니다.
        </div>
      </div>
    </footer>
  );
}
