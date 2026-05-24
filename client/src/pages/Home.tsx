/**
 * Home.tsx — MARORIRI リニューアルサイト
 * - スマホファースト対応（モバイルレイアウト修正済み）
 * - 現行サイトのイラスト画像を使用
 * - オレンジ・グリーン・オフホワイトの現行カラー継承
 */

import { useEffect, useRef, useState } from "react";

// Image URLs — local assets
const IMG = {
  mvLogo: "/assets/img/mv__logo.webp",
  mvImage: "/assets/img/mv__image.webp",
  mvSub1: "/assets/img/mv__subimage1.webp",
  mvSub2: "/assets/img/mv__subimage2.webp",
  mvSub3: "/assets/img/mv__subimage3.webp",
  visitImage: "/assets/img/visit__image.webp",
  trouble1: "/assets/img/trouble-card__image1.webp",
  trouble2: "/assets/img/trouble-card__image2.webp",
  about: "/assets/img/about__image.webp",
  comment: "/assets/img/comment__image.webp",
  svc1: "/assets/img/service__image1.webp",
  svc2: "/assets/img/service__image2.webp",
  svc3: "/assets/img/service__image3.webp",
  svc4: "/assets/img/service__image4.webp",
  svc5: "/assets/img/service__image5.webp",
  svc6: "/assets/img/service__image6.webp",
  feat1: "/assets/img/feature__image1.webp",
  feat2: "/assets/img/feature__image2.webp",
  feat3: "/assets/img/feature__image3.webp",
};

function FadeSection({ children, className = "", delay = 0 }: {
  children: React.ReactNode; className?: string; delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => el.classList.add("visible"), delay);
        obs.unobserve(el);
      }
    }, { threshold: 0.06 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref} className={`fade-up ${className}`}>{children}</div>;
}

// Town skyline SVG
function TownSkyline({ color = "#d4ccc6" }: { color?: string }) {
  return (
    <div style={{ width: "100%", overflow: "hidden", lineHeight: 0 }}>
      <svg viewBox="0 0 900 70" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%", height: "auto" }}>
        <rect x="10" y="38" width="28" height="32" fill={color} opacity="0.7"/>
        <rect x="14" y="28" width="20" height="12" fill={color} opacity="0.6"/>
        <rect x="17" y="20" width="4" height="10" fill={color} opacity="0.5"/>
        <rect x="48" y="46" width="18" height="24" fill={color} opacity="0.6"/>
        <rect x="76" y="32" width="38" height="38" fill={color} opacity="0.7"/>
        <rect x="80" y="22" width="30" height="12" fill={color} opacity="0.6"/>
        <rect x="124" y="42" width="24" height="28" fill={color} opacity="0.65"/>
        <ellipse cx="165" cy="48" rx="12" ry="16" fill={color} opacity="0.5"/>
        <rect x="163" y="58" width="4" height="12" fill={color} opacity="0.4"/>
        <rect x="185" y="28" width="34" height="42" fill={color} opacity="0.7"/>
        <rect x="189" y="18" width="26" height="12" fill={color} opacity="0.6"/>
        <rect x="230" y="44" width="20" height="26" fill={color} opacity="0.6"/>
        <ellipse cx="265" cy="46" rx="13" ry="17" fill={color} opacity="0.5"/>
        <rect x="263" y="58" width="4" height="12" fill={color} opacity="0.4"/>
        <rect x="285" y="34" width="32" height="36" fill={color} opacity="0.7"/>
        <rect x="288" y="22" width="26" height="14" fill={color} opacity="0.6"/>
        <rect x="328" y="42" width="22" height="28" fill={color} opacity="0.65"/>
        <rect x="360" y="30" width="36" height="40" fill={color} opacity="0.7"/>
        <rect x="364" y="18" width="28" height="14" fill={color} opacity="0.6"/>
        <ellipse cx="412" cy="47" rx="12" ry="16" fill={color} opacity="0.5"/>
        <rect x="410" y="58" width="4" height="12" fill={color} opacity="0.4"/>
        <rect x="432" y="36" width="30" height="34" fill={color} opacity="0.7"/>
        <rect x="472" y="44" width="20" height="26" fill={color} opacity="0.6"/>
        <ellipse cx="508" cy="46" rx="13" ry="17" fill={color} opacity="0.5"/>
        <rect x="506" y="58" width="4" height="12" fill={color} opacity="0.4"/>
        <rect x="528" y="30" width="36" height="40" fill={color} opacity="0.7"/>
        <rect x="532" y="18" width="28" height="14" fill={color} opacity="0.6"/>
        <rect x="575" y="40" width="26" height="30" fill={color} opacity="0.65"/>
        <rect x="612" y="28" width="34" height="42" fill={color} opacity="0.7"/>
        <rect x="616" y="16" width="26" height="14" fill={color} opacity="0.6"/>
        <ellipse cx="660" cy="46" rx="12" ry="16" fill={color} opacity="0.5"/>
        <rect x="658" y="58" width="4" height="12" fill={color} opacity="0.4"/>
        <rect x="680" y="34" width="30" height="36" fill={color} opacity="0.7"/>
        <rect x="720" y="42" width="22" height="28" fill={color} opacity="0.6"/>
        <rect x="752" y="26" width="38" height="44" fill={color} opacity="0.7"/>
        <rect x="756" y="14" width="30" height="14" fill={color} opacity="0.6"/>
        <ellipse cx="805" cy="46" rx="13" ry="17" fill={color} opacity="0.5"/>
        <rect x="803" y="58" width="4" height="12" fill={color} opacity="0.4"/>
        <rect x="825" y="32" width="32" height="38" fill={color} opacity="0.7"/>
        <rect x="868" y="44" width="20" height="26" fill={color} opacity="0.6"/>
        <rect x="0" y="68" width="900" height="4" fill={color} opacity="0.4"/>
      </svg>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('sending');
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch('https://formspree.io/f/xdajdjyb', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setFormState('sent');
        (e.target as HTMLFormElement).reset();
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [["#services", "サービス"], ["#about", "プロフィール"], ["#flow", "ご相談の流れ"]];

  return (
    <div style={{ background: "var(--warm-white)", minHeight: "100vh", overflowX: "hidden" }}>

      {/* ─── Header ─── */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "10px 20px",
        background: scrolled ? "rgba(245,240,237,0.97)" : "rgba(245,240,237,0.9)",
        backdropFilter: "blur(8px)",
        borderBottom: scrolled ? "1px solid rgba(221,213,207,0.8)" : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.06)" : "none",
        transition: "all 0.3s ease",
      }}>
        <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
          <img src={IMG.mvLogo} alt="MARORIRI" style={{ height: "40px", width: "auto" }} />
        </a>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "24px" }} className="hidden md:flex">
          {navLinks.map(([href, label]) => (
            <a key={href} href={href} style={{ fontSize: "0.82rem", fontWeight: 500, color: "var(--text-sub)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--orange)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-sub)")}
            >{label}</a>
          ))}
          <a href="#contact" style={{
            background: "var(--orange)", color: "#fff", padding: "9px 20px",
            borderRadius: "24px", fontSize: "0.82rem", fontWeight: 700, textDecoration: "none",
            boxShadow: "0 2px 8px rgba(255,91,61,0.3)", transition: "all 0.2s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
          >ご相談はこちら</a>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", padding: "6px", display: "flex", flexDirection: "column", gap: "5px", cursor: "pointer" }}
          className="md:hidden"
          aria-label="メニュー"
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: "block", width: "22px", height: "2px", background: "var(--text-main)", borderRadius: "2px", transition: "all 0.3s",
              transform: menuOpen && i === 0 ? "rotate(45deg) translate(5px, 5px)" : menuOpen && i === 2 ? "rotate(-45deg) translate(5px, -5px)" : "none",
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: "60px", left: 0, right: 0, zIndex: 40,
          background: "var(--warm-white)", borderBottom: "1px solid var(--border-color)",
          padding: "20px 24px", display: "flex", flexDirection: "column", gap: "18px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        }}>
          {[...navLinks, ["#contact", "ご相談はこちら"]].map(([href, label]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}
              style={{ fontSize: "1rem", color: "var(--text-main)", textDecoration: "none", fontWeight: 600, padding: "4px 0", borderBottom: "1px solid var(--border-color)" }}
            >{label}</a>
          ))}
        </div>
      )}

      {/* ─── Hero ─── */}
      <section style={{ paddingTop: "60px", background: "var(--warm-white)", position: "relative" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "48px 20px 0" }}>
          {/* Mobile: stack vertically; Desktop: 2 columns */}
          <div className="hero-grid">
            {/* Text */}
            <FadeSection>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "var(--orange-pale)", border: "1.5px solid var(--orange-light)", borderRadius: "999px", padding: "6px 16px", marginBottom: "16px", fontSize: "0.82rem", fontWeight: 700, color: "var(--orange)" }}>
                🙋 ホームページの一日助っ人、参上！
              </div>
              <h1 style={{ fontSize: "clamp(1.6rem, 5vw, 2.8rem)", color: "var(--text-main)", marginBottom: "8px", fontWeight: 900, lineHeight: 1.45 }}>
                事業のホームページに関する<span style={{ color: "var(--orange)" }}>お悩み</span>なんでも相談ください
              </h1>
              <p style={{ fontSize: "clamp(0.95rem, 2.8vw, 1.05rem)", color: "var(--text-sub)", fontWeight: 600, marginBottom: "16px", lineHeight: 1.6 }}>
                Webまわりの困りごと、一緒に整理して解決します
              </p>
              <p style={{ fontSize: "clamp(0.88rem, 2.5vw, 0.95rem)", color: "var(--text-sub)", lineHeight: "2", marginBottom: "28px" }}>
                Web業界35年の経験を持つMARORIRI（マロリリ）が、ホームページの更新・リニューアルから、AI活用、思考整理まで、あなたの事業に寄り添ってお手伝いします。
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a href="#contact" style={{
                  display: "inline-block", background: "var(--orange)", color: "#fff",
                  padding: "13px 28px", borderRadius: "32px", fontSize: "0.92rem", fontWeight: 700,
                  textDecoration: "none", boxShadow: "0 4px 14px rgba(255,91,61,0.35)", transition: "all 0.2s",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
                >ご相談はこちら →</a>
                <a href="#services" style={{
                  display: "inline-block", background: "transparent", color: "var(--green-dark)",
                  padding: "13px 24px", borderRadius: "32px", fontSize: "0.88rem", fontWeight: 600,
                  textDecoration: "none", border: "2px solid var(--green-dark)", transition: "all 0.2s",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "var(--green-light)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
                >サービスを見る</a>
              </div>

              {/* 実績バッジ */}
              <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", marginTop: "24px", paddingTop: "20px", borderTop: "1px solid var(--border-color)" }}>
                {[
                  { num: "35年以上", label: "Web業界経験" },
                  { num: "全国対応", label: "オンライン（Zoom等）" },
                  { num: "¥5,000〜", label: "60分単発相談から" },
                ].map(({ num, label }) => (
                  <div key={label}>
                    <p style={{ fontSize: "1.2rem", fontWeight: 900, color: "var(--orange)", margin: 0, lineHeight: 1.2 }}>{num}</p>
                    <p style={{ fontSize: "0.72rem", color: "var(--text-sub)", margin: 0 }}>{label}</p>
                  </div>
                ))}
              </div>
            </FadeSection>

            {/* Hero illustration */}
            <FadeSection delay={100}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "12px", padding: "16px 0" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
                  <img src={IMG.mvSub3} alt="" style={{ width: "80px", height: "auto", opacity: 0.85 }} />
                  <img src={IMG.mvSub1} alt="" style={{ width: "80px", height: "auto", opacity: 0.85 }} />
                </div>
                <img src={IMG.mvImage} alt="打ち合わせをする2人" style={{ width: "min(260px, 55vw)", height: "auto", borderRadius: "12px" }} />
                <img src={IMG.mvSub2} alt="" style={{ width: "70px", height: "auto", opacity: 0.85 }} />
              </div>
            </FadeSection>
          </div>
        </div>
        <TownSkyline color="#d4ccc6" />
      </section>

      {/* ─── Tagline band ─── */}
      <section style={{ background: "var(--green-dark)", padding: "24px 20px" }}>
        <FadeSection>
          <p style={{ textAlign: "center", color: "#fff", fontSize: "clamp(0.9rem, 2.5vw, 1.2rem)", fontWeight: 700, lineHeight: 1.7 }}>
            Web業界35年の経験を持つ「MARORIRI」が<br />
            <span style={{ color: "#a8d5b0" }}>あなたのホームページの困りごとをお助けします。</span>
          </p>
        </FadeSection>
      </section>

      {/* ─── Cases ─── */}
      <section style={{ padding: "72px 20px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <FadeSection>
            <h2 style={{ textAlign: "center", fontSize: "clamp(1.2rem, 4vw, 1.8rem)", color: "var(--text-main)", marginBottom: "8px", fontWeight: 900 }}>
              こんな<span style={{ color: "var(--orange)" }}>お悩み</span>、ありませんか？
            </h2>
            <div className="section-accent-line" />
            <p style={{ textAlign: "center", fontSize: "0.88rem", color: "var(--text-sub)", marginBottom: "40px" }}>
              中小企業・個人事業主の方から、こんな声をよく聞きます。
            </p>
          </FadeSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginBottom: "40px" }}>
            {[
              { img: IMG.trouble1, case: "CASE 01", problem: "制作会社に頼んだら、言っていたことと全然違うものが出来上がってきた。修正を頼んでも「仕様です」と言われる。", solution: "制作会社との交渉に同席。あなたの意図を正確に伝えます。" },
              { img: IMG.trouble2, case: "CASE 02", problem: "ホームページはあるのに、お客さんが来ない。広告も出したけど効果がない。何が問題なのか誰も教えてくれない。", solution: "原因を一緒に診断し、今日からできる改善策を提案します。" },
            ].map((c, i) => (
              <FadeSection key={i} delay={i * 80}>
                <div style={{ background: "#fff", border: "1px solid var(--border-color)", borderRadius: "12px", overflow: "hidden" }}>
                  <div style={{ background: "var(--warm-white-2)", padding: "8px 18px", borderBottom: "1px solid var(--border-color)" }}>
                    <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", color: "var(--text-light)" }}>{c.case}</span>
                  </div>
                  <div style={{ padding: "20px" }}>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-sub)", lineHeight: "1.9", marginBottom: "16px" }}>{c.problem}</p>
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
                      <img src={c.img} alt="" style={{ height: "100px", width: "auto" }} />
                    </div>
                    <div style={{ background: "var(--orange)", borderRadius: "8px", padding: "10px 14px" }}>
                      <p style={{ fontSize: "0.85rem", color: "#fff", fontWeight: 700, lineHeight: 1.6 }}>✓ {c.solution}</p>
                    </div>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>

          {/* Visit image + keywords */}
          <FadeSection>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", padding: "32px 20px", background: "#fff", borderRadius: "16px", border: "1px solid var(--border-color)" }}>
              <img src={IMG.visitImage} alt="ホームページの一日助っ人" style={{ height: "80px", width: "auto" }} />
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
                {["使いやすい", "わかりやすい", "管理しやすい"].map(k => (
                  <span key={k} style={{ border: "2px solid var(--green-dark)", color: "var(--green-dark)", padding: "6px 16px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 700 }}>{k}</span>
                ))}
              </div>
              <p style={{ fontWeight: 900, fontSize: "clamp(1.1rem, 3vw, 1.5rem)", color: "var(--text-main)", textAlign: "center" }}>よりよいホームページへと導きます。</p>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section id="services" style={{ padding: "72px 20px", background: "#fff" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <FadeSection>
            <h2 style={{ textAlign: "center", fontSize: "clamp(1.2rem, 4vw, 1.8rem)", color: "var(--text-main)", marginBottom: "8px", fontWeight: 900 }}>
              「MARORIRI」は<span style={{ color: "var(--orange)" }}>こんなとき</span>に活用できます
            </h2>
            <div className="section-accent-line" />
            <p style={{ textAlign: "center", fontSize: "0.88rem", color: "var(--text-sub)", marginBottom: "40px" }}>
              「ちょっと聞きたい」から「継続的に伴走してほしい」まで、あなたの状況に合わせてお選びいただけます。
            </p>
          </FadeSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px", marginBottom: "32px" }}>
            {[
              { img: IMG.svc1, title: "制作会社に言われるがまま、なんとなく契約してしまいそう", body: "見積もりの内容が本当に必要なものか、第三者の目で一緒に確認します。「断れない空気」から守ります。" },
              { img: IMG.svc2, title: "ホームページを作ったのに、問い合わせが一件も来ない", body: "何が原因かを診断し、今すぐできる改善策を具体的にお伝えします。" },
              { img: IMG.svc3, title: "担当者が辞めて、ホームページのパスワードも更新方法も分からない", body: "引き継ぎが不完全な状態でも大丈夫。現状を整理して、次の一手を一緒に考えます。" },
              { img: IMG.svc4, title: "AIやSNSを使いたいけど、何から始めればいいか分からない", body: "流行に乗るためではなく、あなたの事業に本当に役立つ使い方だけを一緒に探します。" },
              { img: IMG.svc5, title: "補助金でホームページを作りたいが、業者の言っていることが信用できない", body: "補助金申請に関わる業者の見極め方や、適正な費用感をアドバイスします。" },
              { img: IMG.svc6, title: "ホームページのことで相談できる人が社内にいない", body: "「こんなこと聞いていいの？」という小さな疑問から、大きな判断まで。気軽に話せる専門家として伴走します。" },
            ].map((s, i) => (
              <FadeSection key={i} delay={i * 50}>
                <div style={{ background: "var(--warm-white)", border: "1px solid var(--border-color)", borderRadius: "12px", padding: "24px 18px", textAlign: "center", height: "100%", transition: "all 0.25s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 6px 20px rgba(0,0,0,0.08)"; (e.currentTarget as HTMLDivElement).style.borderColor = "var(--orange-light)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-color)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}
                >
                  <img src={s.img} alt={s.title} style={{ height: "72px", width: "auto", margin: "0 auto 14px" }} />
                  <h3 style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--green-dark)", marginBottom: "8px", lineHeight: 1.5 }}>{s.title}</h3>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-sub)", lineHeight: 1.8 }}>{s.body}</p>
                </div>
              </FadeSection>
            ))}
          </div>

          {/* k-snapstep誘導バナー */}
          <FadeSection>
            <div style={{ background: "linear-gradient(135deg, var(--green-dark) 0%, var(--green-mid) 100%)", borderRadius: "16px", padding: "28px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
              <div style={{ flex: 1, minWidth: "200px" }}>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "6px" }}>継続サポート</p>
                <h3 style={{ color: "#fff", fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)", fontWeight: 700, marginBottom: "8px" }}>思考整理と伴走支援「本来面目らぼ」</h3>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.83rem", lineHeight: 1.8 }}>「次の一手が決められない」という方へ。対話を通じて頭の中をほどき、自分で納得して選べる状態へ。</p>
              </div>
              <a href="https://k-snapstep.com/" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-block", background: "#fff", color: "var(--green-dark)",
                padding: "11px 22px", borderRadius: "24px", fontSize: "0.85rem", fontWeight: 700,
                textDecoration: "none", whiteSpace: "nowrap", transition: "all 0.2s", flexShrink: 0,
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}
              >詳細を見る →</a>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ─── About ─── */}
      <section id="about" style={{ padding: "72px 20px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <FadeSection>
            <h2 style={{ textAlign: "center", fontSize: "clamp(1.2rem, 4vw, 1.8rem)", color: "var(--text-main)", marginBottom: "40px", fontWeight: 900 }}>
              はじめまして！<span style={{ color: "var(--orange)" }}>MARORIRI</span>と申します
            </h2>
            <div className="section-accent-line" />
          </FadeSection>

          {/* Stack on mobile, 2col on desktop */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "40px", alignItems: "start" }}>
            <FadeSection>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "24px" }}>
                <img src={IMG.about} alt="片山まゆみ" style={{ width: "min(220px, 60vw)", height: "auto", borderRadius: "12px", boxShadow: "0 8px 24px rgba(0,0,0,0.1)" }} />
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--text-sub)", lineHeight: "2", marginBottom: "14px" }}>
                個人商店や小さめの中小企業を中心に「どうしたらいいの？」の解決に携わってきました。小さな疑問から大きな悩みまで、あなたの事業に寄り添ったアドバイスが可能です。
              </p>
              <p style={{ fontSize: "0.9rem", color: "var(--text-sub)", lineHeight: "2" }}>
                1990年代からWeb制作の現場に関わり、HTMLを手打ちしていた黎明期から、Flash、CMS、そして現在のAI活用まで、Webの変遷を最前線で経験してきました。
              </p>
            </FadeSection>

            <FadeSection delay={100}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "20px" }}>3つの立場からアドバイスができます</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  { img: IMG.feat1, tag: "技術者として", title: "35年の制作経験", body: "大手企業から個人事業主まで、幅広い現場での実務経験。「どうすれば解決するか」という方法を知っています。" },
                  { img: IMG.feat2, tag: "教育者として", title: "インストラクター経験", body: "有名専門学校でのWEB・DTPインストラクター経験。難しいことをかみ砕いて伝えることを大切にしています。" },
                  { img: IMG.feat3, tag: "経営者として", title: "新規事業立ち上げ経験", body: "経営者の悩みを自分事として理解。補助金申請の業者選びや、Webを営業にどう使うかまで相談できます。" },
                ].map((f, i) => (
                  <div key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <img src={f.img} alt={f.tag} style={{ width: "52px", height: "52px", objectFit: "contain", flexShrink: 0 }} />
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                        <span style={{ background: "var(--orange)", color: "#fff", fontSize: "0.68rem", fontWeight: 700, padding: "2px 10px", borderRadius: "12px" }}>{f.tag}</span>
                        <h4 style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--text-main)" }}>{f.title}</h4>
                      </div>
                      <p style={{ fontSize: "0.82rem", color: "var(--text-sub)", lineHeight: 1.85 }}>{f.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "24px", background: "#fff", border: "1px solid var(--border-color)", borderRadius: "12px", padding: "24px" }}>
                <h4 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "14px" }}>プロフィール ─ 片山まゆみ</h4>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                  {[
                    "都市銀行勤務後、凸版印刷へ転職。商業・パッケージデザインの基礎を習得。",
                    "大阪の印刷会社でDTP業務をしながらWeb制作に携わる。",
                    "在宅でDTP・Web制作を開始。多様なジャンルのWebサイト・印刷物を制作。",
                    "有名専門学校でWEB・DTPインストラクターとして勤務。",
                    "現在は制作・アドバイス・伴走支援を軸に活動中。",
                  ].map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: "8px", fontSize: "0.82rem", color: "var(--text-sub)", lineHeight: 1.8 }}>
                      <span style={{ color: "var(--orange)", fontWeight: 700, flexShrink: 0 }}>▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ─── Testimonial ─── */}
      <section style={{ padding: "72px 20px", background: "#fff" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <FadeSection>
            <h2 style={{ textAlign: "center", fontSize: "clamp(1.2rem, 4vw, 1.8rem)", color: "var(--text-main)", marginBottom: "8px", fontWeight: 900 }}>推薦の言葉</h2>
            <div className="section-accent-line" style={{ marginBottom: "28px" }} />
          </FadeSection>
          <FadeSection delay={80}>
            <div style={{ background: "var(--warm-white)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "32px 28px" }}>
              <div style={{ fontSize: "3.5rem", color: "var(--orange)", lineHeight: 1, marginBottom: "4px", fontFamily: "Georgia, serif", opacity: 0.4 }}>"</div>
              <blockquote style={{ fontSize: "0.92rem", color: "var(--text-main)", lineHeight: "2.1", marginBottom: "24px" }}>
                技術者、教育者、経営者。これら全ての視点が備わった総称が「助っ人」だということです。ホームページは、事業そのものを映し出す鏡のようなもの。だからこそ、ホームページでお困りな方がいましたら、私は迷わずマロリリさんを推薦します。ぜひ一度相談されてみてください！
              </blockquote>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <img src={IMG.comment} alt="山家誠司様" style={{ width: "52px", height: "52px", borderRadius: "50%", objectFit: "cover" }} />
                <div>
                  <p style={{ fontWeight: 700, fontSize: "0.92rem", color: "var(--text-main)" }}>山家 誠司 様</p>
                  <p style={{ fontSize: "0.78rem", color: "var(--text-sub)" }}>経営コンサルタント</p>
                </div>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ─── Flow ─── */}
      <section id="flow" style={{ padding: "72px 20px", background: "var(--warm-white)" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <FadeSection>
            <h2 style={{ textAlign: "center", fontSize: "clamp(1.2rem, 4vw, 1.8rem)", color: "var(--text-main)", marginBottom: "8px", fontWeight: 900 }}>ご利用の流れ</h2>
            <div className="section-accent-line" />
            <p style={{ textAlign: "center", fontSize: "0.88rem", color: "var(--text-sub)", marginBottom: "40px" }}>まとまっていない言葉のままで構いません。まずは現状をお知らせください。</p>
          </FadeSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px", marginBottom: "32px" }}>
            {[
              { num: "1", title: "お問い合わせ", body: "下記フォームより、現状のお悩みをご記入ください。「何が問題か分からない」という状態でも大丈夫です。" },
              { num: "2", title: "日程調整", body: "2営業日以内にご返信します。オンライン（Zoom等）またはオフライン（関西圏）でのお話しの日程を調整します。" },
              { num: "3", title: "お話をする", body: "現状の課題を一緒に整理し、あなたにとって最適な次の一手をご提案します。" },
            ].map((step, i) => (
              <FadeSection key={i} delay={i * 100}>
                <div style={{ textAlign: "center", padding: "24px 16px", background: "#fff", borderRadius: "12px", border: "1px solid var(--border-color)" }}>
                  <div style={{ width: "52px", height: "52px", background: "var(--orange)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", color: "#fff", fontSize: "1.3rem", fontWeight: 900, boxShadow: "0 4px 12px rgba(255,91,61,0.3)" }}>{step.num}</div>
                  <h4 style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-main)", marginBottom: "10px" }}>{step.title}</h4>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-sub)", lineHeight: "1.9" }}>{step.body}</p>
                </div>
              </FadeSection>
            ))}
          </div>

          <FadeSection delay={200}>
            <div style={{ textAlign: "center", padding: "20px", background: "#fff", borderRadius: "12px", border: "2px solid var(--orange)" }}>
              <p style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-main)" }}>60分 <span style={{ color: "var(--orange)", fontSize: "1.4rem" }}>¥5,000</span>（税込）</p>
              <p style={{ fontSize: "0.82rem", color: "var(--text-sub)", marginTop: "4px" }}>オンライン（Zoom等）またはオフライン（関西圏のみ）</p>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section id="contact" style={{ padding: "72px 20px", background: "#fff" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <FadeSection>
            <h2 style={{ textAlign: "center", fontSize: "clamp(1.2rem, 4vw, 1.8rem)", color: "var(--text-main)", marginBottom: "8px", fontWeight: 900 }}>
              まずはお話しして<span style={{ color: "var(--orange)" }}>みませんか</span>
            </h2>
            <div className="section-accent-line" />
            <p style={{ textAlign: "center", fontSize: "0.88rem", color: "var(--text-sub)", marginBottom: "36px", lineHeight: "2" }}>
              「相談内容が整理できていない」「どのメニューを選べばいいか分からない」という状態でも大丈夫です。まとまっていない言葉のままで、お気軽にどうぞ。
            </p>
          </FadeSection>

          <div className="contact-grid">
            <FadeSection>
              <div style={{ background: "var(--warm-white)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "32px 28px" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "20px" }}>こんなご相談が多いです</h3>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
                  {[
                    "ホームページを作ったのに、問い合わせが来ない",
                    "制作会社に言われるがまま契約してしまいそう",
                    "AIを使いたいけど何から始めればいいか分からない",
                    "担当者が辞めてパスワードも更新方法も分からない",
                    "まとまっていないけど、まず話を聞いてほしい",
                  ].map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: "10px", fontSize: "0.85rem", color: "var(--text-sub)", lineHeight: 1.7 }}>
                      <span style={{ color: "var(--orange)", fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div style={{ background: "#fff", border: "2px solid var(--orange)", borderRadius: "12px", padding: "20px", textAlign: "center" }}>
                  <p style={{ fontSize: "0.78rem", color: "var(--text-sub)", marginBottom: "4px" }}>単発相談</p>
                  <p style={{ fontSize: "1.4rem", fontWeight: 900, color: "var(--orange)", margin: "0 0 4px" }}>60分 ¥5,000</p>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-sub)" }}>オンライン（Zoom等）／関西圏オフライン</p>
                </div>
              </div>
            </FadeSection>

          <FadeSection delay={80}>
            <form onSubmit={handleSubmit}>
              {[
                { label: "お名前", name: "name", type: "text", placeholder: "山田 太郎", req: true },
                { label: "メールアドレス", name: "email", type: "email", placeholder: "sample@example.com", req: true },
                { label: "電話番号", name: "phone", type: "tel", placeholder: "090-1234-5678", req: false },
                { label: "社名・屋号", name: "company", type: "text", placeholder: "株式会社〇〇（個人事業主の場合は空欄可）", req: false },
              ].map(f => (
                <div key={f.name} style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-main)", marginBottom: "6px" }}>
                    {f.label}{f.req && <span style={{ color: "var(--orange)", marginLeft: "4px", fontSize: "0.72rem", fontWeight: 700 }}>必須</span>}
                  </label>
                  <input type={f.type} name={f.name} placeholder={f.placeholder} required={f.req}
                    style={{ width: "100%", padding: "11px 14px", background: "var(--warm-white)", border: "1.5px solid var(--border-color)", borderRadius: "8px", fontFamily: "inherit", fontSize: "0.88rem", color: "var(--text-main)", outline: "none", transition: "border-color 0.2s" }}
                    onFocus={e => { e.currentTarget.style.borderColor = "var(--orange)"; e.currentTarget.style.background = "#fff"; }}
                    onBlur={e => { e.currentTarget.style.borderColor = "var(--border-color)"; e.currentTarget.style.background = "var(--warm-white)"; }}
                  />
                </div>
              ))}

              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-main)", marginBottom: "6px" }}>ご希望のメニュー</label>
                <select name="menu" style={{ width: "100%", padding: "11px 14px", background: "var(--warm-white)", border: "1.5px solid var(--border-color)", borderRadius: "8px", fontFamily: "inherit", fontSize: "0.88rem", color: "var(--text-main)", outline: "none" }}>
                  <option value="">─ 選択してください（未定でも可）</option>
                  <option value="spot">単発相談（60分 ¥5,000）</option>
                  <option value="monthly">伴走支援「本来面目らぼ」について聞きたい</option>
                  <option value="training">Web担当者・クリエイター育成</option>
                  <option value="other">その他・まだ決まっていない</option>
                </select>
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-main)", marginBottom: "6px" }}>
                  ご相談内容<span style={{ color: "var(--orange)", marginLeft: "4px", fontSize: "0.72rem", fontWeight: 700 }}>必須</span>
                </label>
                <textarea name="content" required rows={5}
                  placeholder={"例）ホームページが古くなっているが、リニューアルすべきか判断できない。まず現状を見てもらいたい。\n\nまとまっていなくても大丈夫です。"}
                  style={{ width: "100%", padding: "11px 14px", background: "var(--warm-white)", border: "1.5px solid var(--border-color)", borderRadius: "8px", fontFamily: "inherit", fontSize: "0.88rem", color: "var(--text-main)", outline: "none", resize: "vertical", minHeight: "120px", transition: "border-color 0.2s" }}
                  onFocus={e => { e.currentTarget.style.borderColor = "var(--orange)"; e.currentTarget.style.background = "#fff"; }}
                  onBlur={e => { e.currentTarget.style.borderColor = "var(--border-color)"; e.currentTarget.style.background = "var(--warm-white)"; }}
                />
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-main)", marginBottom: "8px" }}>ご希望の対応方法</label>
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                  {["オンライン（Zoom等）", "オフライン（関西圏のみ）", "どちらでも可"].map((opt, i) => (
                    <label key={i} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", color: "var(--text-sub)", cursor: "pointer" }}>
                      <input type="radio" name="method" value={opt} defaultChecked={i === 0} style={{ accentColor: "var(--orange)" }} />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "20px", fontSize: "0.82rem", color: "var(--text-sub)" }}>
                <input type="checkbox" id="privacy" required style={{ marginTop: "3px", accentColor: "var(--orange)" }} />
                <label htmlFor="privacy" style={{ cursor: "pointer", lineHeight: 1.6 }}>
                  <a href="/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--orange)" }}>プライバシーポリシー</a>に同意する
                </label>
              </div>

              <button type="submit" disabled={formState === 'sending'} style={{
                width: "100%", padding: "15px", background: "var(--orange)", color: "#fff",
                border: "none", borderRadius: "32px", fontFamily: "inherit", fontSize: "1rem", fontWeight: 700,
                letterSpacing: "0.06em", boxShadow: "0 4px 14px rgba(255,91,61,0.35)", transition: "all 0.25s", cursor: "pointer",
                opacity: formState === 'sending' ? 0.6 : 1,
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.opacity = formState === 'sending' ? "0.6" : "0.88"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.opacity = formState === 'sending' ? "0.6" : "1"; }}
                onMouseDown={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(0.98)"; }}
                onMouseUp={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; }}
              >{formState === 'sending' ? '送信中...' : '送信する →'}</button>

              {formState === 'sent' && (
                <div style={{ background: 'var(--green-light)', border: '1px solid var(--green-dark)', borderRadius: '8px', padding: '16px', marginTop: '16px', textAlign: 'center', color: 'var(--green-dark)', fontWeight: 700 }}>
                  ✓ お問い合わせありがとうございます。2営業日以内にご返信いたします。
                </div>
              )}
              {formState === 'error' && (
                <div style={{ background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '8px', padding: '16px', marginTop: '16px', textAlign: 'center', color: '#991b1b', fontWeight: 700 }}>
                  送信に失敗しました。お手数ですが、時間をおいて再度お試しください。
                </div>
              )}
            </form>
          </FadeSection>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer style={{ background: "var(--green-dark)", padding: "40px 20px 28px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "28px", marginBottom: "24px" }}>
            <div>
              <img src={IMG.mvLogo} alt="MARORIRI" style={{ height: "44px", width: "auto", marginBottom: "10px", filter: "brightness(0) invert(1)", opacity: 0.9 }} />
              <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.6)", lineHeight: "1.8" }}>Webの困りごとを一緒に解決しましょう。<br />中小企業・個人事業主のWebの助っ人。</p>
            </div>
            <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                ["#services", "サービス", false],
                ["#about", "プロフィール", false],
                ["#flow", "ご相談の流れ", false],
                ["#contact", "お問い合わせ", false],
                ["https://k-snapstep.com/", "本来面目らぼ（k-snapstep.com）", true],
              ].map(([href, label, ext]) => (
                <a key={href as string} href={href as string} target={ext ? "_blank" : undefined} rel={ext ? "noopener noreferrer" : undefined}
                  style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.55)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.55)"; }}
                >{label as string}</a>
              ))}
            </nav>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: "18px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
            <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.35)" }}>© 2025 Katayama Mayumi / MARORIRI</span>
            <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.35)" }}>maroriri.com</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
