import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div style={{ maxWidth: '600px', margin: '3rem auto', padding: '0 1rem', lineHeight: '1.6', color: '#374151' }}>
      <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '2rem', color: '#111827' }}>개인정보처리방침</h1>
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>1. 개인정보의 처리 목적</h2>
        <p>네일창업연구소는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경될 시에는 사전동의를 구할 예정입니다.</p>
        <ul style={{ marginLeft: '1.5rem', listStyleType: 'disc', marginTop: '0.5rem' }}>
          <li>서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산, 콘텐츠 제공, 맞춤 서비스 제공</li>
          <li>회원가입 및 관리 (회원제 서비스가 있을 경우)</li>
        </ul>
      </section>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>2. 개인정보의 처리 및 보유 기간</h2>
        <p>이용자의 개인정보는 원칙적으로 개인정보의 처리목적이 달성되면 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.</p>
        <ul style={{ marginLeft: '1.5rem', listStyleType: 'disc', marginTop: '0.5rem' }}>
          <li>보유 항목: 접속 로그, 쿠키, 접속 IP 정보</li>
          <li>보유 근거: 통신비밀보호법</li>
          <li>보유 기간: 3개월</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>3. 정보주체의 권리, 의무 및 그 행사방법</h2>
        <p>이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다.</p>
        <ul style={{ marginLeft: '1.5rem', listStyleType: 'disc', marginTop: '0.5rem' }}>
          <li>자신 및 14세 미만 아동의 개인정보의 조회, 수정 및 가입해지의 요청</li>
          <li>개인정보의 오류에 대한 정정 및 삭제의 요청</li>
        </ul>
      </section>
    </div>
  );
}
