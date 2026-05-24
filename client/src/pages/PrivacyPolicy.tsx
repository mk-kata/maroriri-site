export default function PrivacyPolicy() {
  return (
    <div style={{ background: 'var(--warm-white)', minHeight: '100vh', padding: '80px 20px 60px' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '8px', color: 'var(--text-main)' }}>
          プライバシーポリシー
        </h1>
        <p style={{ color: 'var(--text-sub)', fontSize: '0.85rem', marginBottom: '40px' }}>
          最終更新日：2026年5月24日
        </p>

        {[
          {
            title: '1. 事業者情報',
            body: 'MARORIRI（マロリリ）/ 片山まゆみ（以下「当事業者」）は、以下のプライバシーポリシーを定め、個人情報の保護に努めます。',
          },
          {
            title: '2. 取得する情報',
            body: 'お問い合わせフォームにご入力いただいた情報（お名前、メールアドレス、電話番号、社名・屋号、ご相談内容）を取得します。',
          },
          {
            title: '3. 利用目的',
            body: '取得した個人情報は、お問い合わせへの回答、サービスのご案内、およびこれらに付随する目的にのみ使用します。',
          },
          {
            title: '4. 第三者提供',
            body: '法令に基づく場合を除き、取得した個人情報を第三者に提供・開示することはありません。',
          },
          {
            title: '5. 情報の管理',
            body: '取得した個人情報は適切な安全管理措置を講じて保管し、不要になった時点で速やかに削除します。',
          },
          {
            title: '6. お問い合わせ',
            body: '個人情報の開示・訂正・削除等のご要望は、お問い合わせフォームよりご連絡ください。',
          },
        ].map((sec) => (
          <div key={sec.title} style={{ marginBottom: '28px' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
              {sec.title}
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-sub)', lineHeight: '2' }}>{sec.body}</p>
          </div>
        ))}

        <div style={{ marginTop: '48px', textAlign: 'center' }}>
          <a href="/" style={{ color: 'var(--orange)', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem' }}>
            ← トップページへ戻る
          </a>
        </div>
      </div>
    </div>
  );
}
