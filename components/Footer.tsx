import PrivacyPolicyModal from './PrivacyPolicyModal';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1c1917', borderTop: '1px solid #292524', marginTop: '3rem', padding: '1.25rem 1rem', width: '100%' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.8rem', color: '#a8a29e' }}>
        <span>© 2026 네일샵 창업. All rights reserved.&nbsp;&nbsp;|&nbsp;&nbsp;<PrivacyPolicyModal /></span>
      </div>
    </footer>
  );
}
