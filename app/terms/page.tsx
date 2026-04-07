import React from 'react';

export default function TermsOfService() {
  return (
    <div style={{ maxWidth: '600px', margin: '3rem auto', padding: '0 1rem', lineHeight: '1.6', color: '#374151' }}>
      <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '2rem', color: '#111827' }}>이용약관</h1>
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>제1조 (목적)</h2>
        <p>이 약관은 네일창업연구소(이하 &quot;회사&quot;)가 제공하는 모든 서비스의 이용조건 및 절차, 이용자와 회사의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다.</p>
      </section>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>제2조 (약관의 효력과 변경)</h2>
        <p>1. 이 약관은 서비스를 통하여 이를 공지하거나 전자우편 등의 방법으로 이용자에게 통지함으로써 효력이 발생합니다.</p>
        <p>2. 회사는 사정상 중요한 사유가 발생될 경우 사전 고지 없이 이 약관의 내용을 변경할 수 있으며, 변경된 약관은 제1항과 같은 방법으로 공지 또는 통지함으로써 효력이 발생합니다.</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>제3조 (약관 외 준칙)</h2>
        <p>이 약관에 명시되지 않은 사항이 관계 법령에 규정되어 있을 경우에는 그 규정에 따릅니다.</p>
      </section>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>제4조 (서비스 이용 제한)</h2>
        <p>이용자가 제공하는 정보의 내용이 허위인 것으로 판명되거나, 허위가 있다고 의심할 만한 합리적인 사유가 발생할 경우 회사는 이용자의 본 서비스 사용을 일부 또는 전부 중지할 수 있습니다.</p>
      </section>
    </div>
  );
}
