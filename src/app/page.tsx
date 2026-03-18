"use client";

import { useState } from "react";
import styles from "./page.module.css";

// ─── Figma Asset URLs ──────────────────────────────────────────────────────
const ASSETS = {
  logomark: "/images/a-logo.svg",
  logomarkWhite: "/images/logo-white.svg",
  logoText: "/images/logo-text.png",
  logoAssign: "/images/logo-assign.png",
  logoProcommit: "/images/logo-procommit.png",
  logoIzul: "/images/logo-izul.png",
  step01: "/images/step01.png",
  step02: "/images/step02.png",
  step03: "/images/step03.png",
  serviceIllustration: "/images/illustration.png",
  problemsIllustration: "/images/illustration-agent.png",
  solutionsIllustration: "/images/illustration-celebrate.png",
  heroBg: "/images/hero.jpg",
  heroVideo: "/images/hero-mov.mp4",
};

// ─── Sub-components ────────────────────────────────────────────────────────

function SectionLabel({ label }: { label: string }) {
  return (
    <div className={styles.sectionLabel}>
      <span className={styles.sectionLabelLine} />
      <span className={styles.sectionLabelText}>{label}</span>
    </div>
  );
}

function CtaButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="/registration"
      className={`${styles.ctaButton} ${className}`}
      style={{ background: "linear-gradient(90deg, #63ab3f 0%, #37db68 100%)" }}
    >
      <div className={styles.ctaBadge}>
        <span>登録</span>
        <span>1分</span>
      </div>
      <span className={styles.ctaLabel}>無料で相談する</span>
      <span className={styles.ctaArrow}>›</span>
    </a>
  );
}

function CtaButtonCenter({ className = "" }: { className?: string }) {
  return (
    <div className={styles.ctaCenter}>
      <CtaButton className={className} />
    </div>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        {/* Logo */}
        <a href="#" className={styles.headerLogo}>
          <img
            src={ASSETS.logomark}
            alt="エージェントの窓口 ロゴ"
            className={styles.headerLogomark}
          />
        </a>

        {/* Desktop Nav */}
        <nav className={styles.headerNav}>
          <a href="#service" className={styles.headerNavLink}>サービス概要</a>
          <a href="#solutions" className={styles.headerNavLink}>エージェントの窓口の強み</a>
          <a href="#flow" className={styles.headerNavLink}>ご利用の流れ</a>
          <a href="#agents" className={styles.headerNavLink}>紹介できるエージェント</a>
          <a href="#faq" className={styles.headerNavLink}>よくある質問</a>
          <a href="/business" className={styles.headerNavLink}>エージェントの皆様へ</a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={styles.hamburgerButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <div className={styles.hamburgerLines}>
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineOpen1 : ""}`} />
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineOpen2 : ""}`} />
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineOpen3 : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className={styles.mobileMenu}>
          <a href="#service" onClick={() => setMenuOpen(false)} className={styles.mobileMenuLink}>サービス概要</a>
          <a href="#solutions" onClick={() => setMenuOpen(false)} className={styles.mobileMenuLink}>エージェントの窓口の強み</a>
          <a href="#flow" onClick={() => setMenuOpen(false)} className={styles.mobileMenuLink}>ご利用の流れ</a>
          <a href="#agents" onClick={() => setMenuOpen(false)} className={styles.mobileMenuLink}>紹介できるエージェント</a>
          <a href="#faq" onClick={() => setMenuOpen(false)} className={styles.mobileMenuLink}>よくある質問</a>
          <a href="/business" onClick={() => setMenuOpen(false)} className={styles.mobileMenuLinkLast}>エージェントの皆様へ</a>
        </nav>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className={styles.heroSection}>
      {/* Background video */}
      <video
        className={styles.heroBg}
        src={ASSETS.heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Overlay */}
      <div className={styles.heroOverlay} />

      {/* Content */}
      <div className={styles.heroContent}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>
            いい仕事があれば、<br />転職したい。
          </h1>
          <div className={styles.heroSubLine}>
            <span className={styles.heroSubLineDash} />
            <p className={styles.heroSubText}>でも、転職できるかわからない。</p>
          </div>
          <CtaButton />
        </div>
      </div>
    </section>
  );
}

// ─── Service ──────────────────────────────────────────────────────────────
function ServiceSection() {
  return (
    <section id="service" className={styles.serviceSection}>
      <div className={styles.sectionInner}>
        <div className={styles.serviceLayout}>
          {/* Text */}
          <div className={styles.serviceText}>
            <SectionLabel label="エージェントの窓口とは" />
            <h2 className={styles.serviceHeading}>
              無料の転職相談サービス
            </h2>
            <p className={styles.serviceBody}>
              エージェントの窓口は、<br className={styles.serviceBrHide} />
              あなたのキャリアを一緒に考える<br className={styles.serviceBrHide} />
              無料の転職相談サービスです。
            </p>
            <p className={styles.serviceNote}>
              ※本サービスは転職エージェントではありません。
            </p>
          </div>

          {/* Illustration */}
          <div className={styles.serviceIllustrationWrap}>
            <img
              src={ASSETS.serviceIllustration}
              alt="転職相談イラスト"
              className={styles.serviceIllustration}
            />
          </div>
        </div>

        <CtaButton className={styles.serviceCta} />
      </div>
    </section>
  );
}

// ─── Comparison ───────────────────────────────────────────────────────────

function PersonIcon() {
  return (
    <svg width="200" height="200" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="40" fill="#3d4f5c"/>
      <circle cx="40" cy="26" r="11" fill="white"/>
      <path d="M18 64 C18 50 28 43 40 43 C52 43 62 50 62 64" fill="white"/>
      <rect x="32" y="50" width="16" height="2.5" rx="1.5" fill="#3d4f5c"/>
      <rect x="32" y="55" width="16" height="2.5" rx="1.5" fill="#3d4f5c"/>
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg width="200" height="200" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="40" fill="#374151"/>
      <rect x="22" y="20" width="36" height="42" rx="2" fill="white"/>
      <rect x="28" y="28" width="8" height="8" fill="#374151"/>
      <rect x="44" y="28" width="8" height="8" fill="#374151"/>
      <rect x="28" y="42" width="8" height="8" fill="#374151"/>
      <rect x="44" y="42" width="8" height="8" fill="#374151"/>
      <rect x="34" y="54" width="12" height="8" fill="#374151"/>
    </svg>
  );
}

function ComparisonSection() {
  const [activeTab, setActiveTab] = useState<0 | 1>(0);

  return (
    <section className={styles.comparisonSection}>
      <div className={styles.sectionInner}>
        {/* Header */}
        <div className={styles.comparisonHeader}>
          <SectionLabel label="従来のサービスとの違い" />
          <h2 className={styles.comparisonHeading}>これまでの転職サービスとの違い</h2>
          <p className={styles.comparisonDesc}>
            「求職者」と「エージェント」の間に立って、中立な立場で転職をサポートするサービスです。
          </p>
        </div>

        {/* Mobile tabs */}
        <div className={styles.comparisonTabs}>
          <button
            className={`${styles.comparisonTab} ${activeTab === 0 ? styles.comparisonTabActive : ""}`}
            onClick={() => setActiveTab(0)}
          >
            エージェントの窓口
          </button>
          <button
            className={`${styles.comparisonTab} ${activeTab === 1 ? styles.comparisonTabActiveDark : ""}`}
            onClick={() => setActiveTab(1)}
          >
            従来の転職サービス
          </button>
        </div>

        {/* 2-column grid */}
        <div className={styles.comparisonGrid}>

          {/* ── Left: エージェントの窓口 ── */}
          <div
            className={styles.comparisonCard}
            style={{ display: activeTab === 0 ? undefined : "none" } as React.CSSProperties}
            data-desktop-visible="true"
          >
            {/* Card header */}
            <div className={styles.comparisonCardHeader} style={{ backgroundColor: "#aa9473" }}>
              <span>エージェントの窓口</span>
            </div>

            {/* 求職者 badge */}
            <div className={styles.comparisonBadgeRow}>
              <span className={styles.comparisonBadgeOutline} style={{ borderColor: "#aa9473", color: "#aa9473" }}>
                求職者
              </span>
            </div>

            {/* Arrow */}
            <div className={styles.comparisonArrow}>
              <span className="material-icons">keyboard_arrow_down</span>
            </div>

            {/* Feature box */}
            <div className={styles.comparisonFeatureBox} style={{ borderColor: "#aa9473" }}>
              <div className={styles.comparisonFeatureTitle} style={{ backgroundColor: "#f3ede3" }}>
                <img src={ASSETS.logomark} alt="エージェントの窓口" className={styles.comparisonFeatureLogo} />
              </div>
              <ul className={styles.comparisonFeatureList}>
                {[
                  "転職すべきか、から相談できる",
                  "あなたに合ったサービスがわかる",
                  "希望者に優秀なエージェントを紹介",
                  "中立な立場で転職活動をサポート",
                ].map((text, i) => (
                  <li key={i} className={styles.comparisonFeatureItem}>
                    <span className={`${styles.comparisonCheck} material-icons`} style={{ color: "#aa9473" }}>check_circle</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Arrow */}
            <div className={styles.comparisonArrow}>
              <span className="material-icons">keyboard_arrow_down</span>
            </div>

            {/* エージェント badge */}
            <div className={styles.comparisonBadgeRow}>
              <span className={styles.comparisonBadgeFilled} style={{ backgroundColor: "#aa9473" }}>
                転職エージェント
              </span>
            </div>

            <p className={styles.comparisonAgentNote}>優秀な担当者をご紹介</p>

            {/* Agent cards */}
            <div className={styles.comparisonAgentCards}>
              {["A社担当者", "B社担当者", "C社担当者"].map((label, i) => (
                <div key={i} className={styles.comparisonAgentCard}>
                  <PersonIcon />
                  <span className={styles.comparisonAgentLabel}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: 従来の転職サービス ── */}
          <div
            className={styles.comparisonCard}
            style={{ display: activeTab === 1 ? undefined : "none" } as React.CSSProperties}
            data-desktop-visible="true"
          >
            {/* Card header */}
            <div className={styles.comparisonCardHeader} style={{ backgroundColor: "#9ca3af" }}>
              <span>従来の転職サービス</span>
            </div>

            {/* 求職者 badge */}
            <div className={styles.comparisonBadgeRow}>
              <span className={styles.comparisonBadgeOutline} style={{ borderColor: "#9ca3af", color: "#9ca3af" }}>
                求職者
              </span>
            </div>

            {/* Arrow */}
            <div className={styles.comparisonArrow}>
              <span className="material-icons">keyboard_arrow_down</span>
            </div>

            {/* Feature box */}
            <div className={styles.comparisonFeatureBox} style={{ borderColor: "#9ca3af" }}>
              <div className={styles.comparisonFeatureTitle} style={{ backgroundColor: "#f3f4f6", color: "#374151", textAlign: "center" }}>
                従来の転職サービス
              </div>
              <ul className={styles.comparisonFeatureList}>
                {[
                  "エージェントの相談は転職前提になる",
                  "どのサービスが合うかわからない",
                  "担当者の質にばらつきがある",
                  "自社求人を優先的に薦められる",
                ].map((text, i) => (
                  <li key={i} className={styles.comparisonFeatureItem}>
                    <span className={styles.comparisonCheck} style={{ color: "#374151" }}>▲</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Arrow */}
            <div className={styles.comparisonArrow}>
              <span className="material-icons">keyboard_arrow_down</span>
            </div>

            {/* エージェント badge */}
            <div className={styles.comparisonBadgeRow}>
              <span className={styles.comparisonBadgeFilled} style={{ backgroundColor: "#9ca3af" }}>
                転職エージェント
              </span>
            </div>

            <p className={styles.comparisonAgentNote}>基本的に担当者は選べない</p>

            {/* Agent cards */}
            <div className={styles.comparisonAgentCards}>
              {["A社", "B社", "C社"].map((label, i) => (
                <div key={i} className={styles.comparisonAgentCard}>
                  <BuildingIcon />
                  <span className={styles.comparisonAgentLabel}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.comparisonCta}>
          <CtaButton className={styles.comparisonCtaBtn} />
        </div>
      </div>
    </section>
  );
}

// ─── Problems ─────────────────────────────────────────────────────────────
const PROBLEMS = [
  {
    title: "今の会社に不満はないけど、\nこのままでいいのか不安",
    body: "今すぐ転職したいわけではないけど、このままでいいのか漠然と不安を感じている。",
  },
  {
    title: "転職したいけど、\n年収や待遇は下げたくない",
    body: "20代・30代のうちに転職したいけど、今より条件の良い会社に転職できるか不安。",
  },
  {
    title: "どの転職サービスを\n選べばいいかわからない",
    body: "自分に合った転職サービスを使いたいけど、どれがいいのかわからない。",
  },
  {
    title: "優秀な転職エージェントだけ\n使いたい",
    body: "担当によって当たり外れがあるから、最初から信頼できるエージェント担当者を使いたい。",
  },
];

function ProblemsSection() {
  return (
    <section className={styles.problemsSection}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionHeaderCenter}>
            <SectionLabel label="こんな悩み、ありませんか？" />
          </div>
          <h2 className={styles.sectionHeading}>
            こんな人におすすめ
          </h2>
        </div>

        <div className={styles.problemsLayout}>
          <div className={styles.sectionImgWrap}>
            <img
              src={ASSETS.problemsIllustration}
              alt="エージェントの窓口イラスト"
              className={styles.sectionIllustration}
            />
          </div>

          <div className={styles.problemsList}>
            {PROBLEMS.map((item, i) => (
              <div key={i}>
                <div className={styles.problemItem}>
                  <div className={styles.itemContent}>
                    <h3 className={styles.problemTitle}>
                      {item.title}
                    </h3>
                    <p className={styles.itemBody}>
                      {item.body}
                    </p>
                  </div>
                  <span className={styles.itemNumber}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                {i < PROBLEMS.length - 1 && (
                  <hr className={styles.itemDivider} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.sectionCta}>
          <CtaButton className={styles.problemsCtaBtn} />
        </div>
      </div>
    </section>
  );
}

// ─── Solutions ────────────────────────────────────────────────────────────
const SOLUTIONS = [
  {
    title: "専任コンサルタントが\n悩みを解決",
    body: "キャリアの悩みをヒアリングし、あなたに最適なアドバイスを行います。",
  },
  {
    title: "20代・30代の\nキャリアを徹底サポート",
    body: "若手からミドルまで、転職を熟知したコンサルタントがあなたをサポートします。",
  },
  {
    title: "転職希望者に\n優秀なエージェントを紹介",
    body: "エージェントの間にコンサルタントが入ってサポート。安心して利用できます。",
  },
  {
    title: "すべて無料で利用可能",
    body: "相談からサポートまで全て無料。中立な立場でアドバイスを行います。",
  },
];

function SolutionsSection() {
  return (
    <section id="solutions" className={styles.solutionsSection}>
      <div className={styles.sectionInner}>
        <div className={styles.solutionsLayout}>
          {/* Left: heading + solution list */}
          <div className={styles.solutionsLeft}>
            <SectionLabel label="転職の悩みを解決" />
            <h2 className={styles.solutionsHeading}>
              エージェントの窓口が<br />選ばれる理由
            </h2>
            <div className={styles.solutionsRight}>
              {SOLUTIONS.map((item, i) => (
                <div key={i}>
                  <div className={styles.solutionItem}>
                    <span className={styles.itemNumber}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className={styles.solutionTitle}>
                        {item.title}
                      </h3>
                      <p className={styles.itemBody}>
                        {item.body}
                      </p>
                    </div>
                  </div>
                  {i < SOLUTIONS.length - 1 && (
                    <hr className={styles.solutionsDivider} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: illustration */}
          <div className={styles.solutionsImgWrap}>
            <img
              src={ASSETS.solutionsIllustration}
              alt="エージェントの窓口イラスト"
              className={styles.solutionsIllustration}
            />
          </div>
        </div>

        <div className={styles.solutionsCta}>
          <CtaButton className={styles.solutionsCtaBtn} />
        </div>
      </div>
    </section>
  );
}

// ─── Steps ────────────────────────────────────────────────────────────────
const STEPS = [
  {
    num: "01",
    img: ASSETS.step01,
    title: "登録フォームに入力",
    body: "業界・職種・現在の状況・年収など、簡単な質問に答えるだけ。1分で完了します。",
  },
  {
    num: "02",
    img: ASSETS.step02,
    title: "コンサルタントが\n面談を実施",
    body: "面談で、転職のアドバイスや優秀なエージェントをご紹介します。",
  },
  {
    num: "03",
    img: ASSETS.step03,
    title: "あなたの\n転職活動をサポート",
    body: "面談後も転職の相談にLINEで対応。転職活動に伴走します。すべて無料です。",
  },
];

function StepsSection() {
  return (
    <section id="flow" className={styles.stepsSection}>
      <div className={styles.sectionInner}>
        <div className={styles.stepsHeader}>
          <div className={styles.sectionHeaderCenter}>
            <SectionLabel label="転職の悩みを相談する" />
          </div>
          <h2 className={styles.sectionHeading}>
            ご利用までの流れ
          </h2>
        </div>

        <div className={styles.stepsGrid}>
          {STEPS.map((step, i) => (
            <div key={i} className={styles.stepCard}>
              {/* Phone image */}
              <div className={styles.stepImgWrap}>
                <img
                  src={step.img}
                  alt={`ステップ${step.num}`}
                  className={styles.stepImg}
                />
              </div>

              {/* Step number + Title */}
              <div className={styles.stepHeader}>
                <p className={styles.stepNum}>{step.num}</p>
                <h3 className={styles.stepTitle}>
                  {step.title}
                </h3>
              </div>

              {/* Body */}
              <p className={styles.stepBody}>
                {step.body}
              </p>


            </div>
          ))}
        </div>

        <div className={styles.stepsCta}>
          <CtaButton className={styles.stepsCtaBtn} />
        </div>
      </div>
    </section>
  );
}

// ─── Agents ───────────────────────────────────────────────────────────────
const AGENTS = [
  {
    logo: ASSETS.logoAssign,
    alt: "アサイン",
    description: "社内MVPを受賞した優秀なキャリアアドバイザーが面談を担当します。本来は指名できない担当者をご紹介します。",
  },
  {
    logo: ASSETS.logoProcommit,
    alt: "ProCommit",
    description: "プロコミットキャリアの代表が面談を担当します。丁寧なキャリア面談と高い実績を持っています。",
  },
  {
    logo: ASSETS.logoIzul,
    alt: "イズル",
    description: "イズルの代表と社内のトップコンサルタントが面談を担当します。手厚い面談と年収アップが得意な転職エージェントです。",
  },
];

function AgentsSection() {
  return (
    <section id="agents" className={styles.agentsSection}>
      <div className={styles.sectionInner}>
        <div className={styles.agentsHeader}>
          <div className={styles.sectionHeaderCenter}>
            <SectionLabel label="厳選したエージェント" />
          </div>
          <h2 className={styles.sectionHeadingTight}>
            転職希望者に<br />エージェントをご紹介
          </h2>
        </div>
        <p className={styles.agentsSubText}>
          独自の審査を通過したエージェントからあなたに合った優秀な担当者を紹介します。
        </p>

        <div className={styles.agentsList}>
          {AGENTS.map((agent, i) => (
            <div key={i} className={styles.agentItemWrap}>
              <div className={styles.agentItem}>
                {/* Logo */}
                <div className={styles.agentLogoWrap}>
                  <img
                    src={agent.logo}
                    alt={agent.alt}
                    className={styles.agentLogo}
                  />
                </div>
                {/* Description */}
                <p className={styles.agentDescription}>
                  {agent.description}
                </p>
              </div>
              {i < AGENTS.length - 1 && (
                <hr className={styles.agentsDivider} />
              )}
            </div>
          ))}
        </div>

        <p className={styles.agentsNote}>
          審査通過率は約<span className={styles.agentsNoteHighlight}>30%</span>。厳しい基準を設けることで、求職者が安心して紹介を受けられるサービスを維持しています。
        </p>

        <div className={styles.agentsCta}>
          <CtaButton className={styles.agentsCtaBtn} />
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "すべて無料で利用できますか？",
    a: "はい、完全無料でご利用いただけます。ご相談に際して、利用者の方にご負担いただく費用は一切ありません。",
  },
  {
    q: "専任のコンサルタントはどんな人ですか？",
    a: "転職経験者かつ、人材業界出身者が担当します。求職者とエージェント、人事の立場が分かり、キャリアに対しても知見がある人を採用しています。",
  },
  {
    q: "相談回数やサポート期間はどれくらいですか？",
    a: "約3か月とさせていただいておりますが、対応期間については状況に応じて対応させていただきます。",
  },
  {
    q: "転職を考えていなくても利用できますか？",
    a: "全く転職を考えていない場合は、ご期待にあったサポートができない可能性がございます。「いつかは転職したい」「まだ情報収集段階」という方は、ぜひご利用ください。",
  },
  {
    q: "対応している職種・業界に制限はありますか？",
    a: "IT・Web、コンサル、金融、メーカー、医療・福祉など幅広い業界・職種に対応しています。まずはお気軽にご相談ください。",
  },
];

const DISCLAIMERS = [
  "※本サービスは転職エージェントではないため、求人紹介は行っておりません。",
  "※弊社コンサルタントが専属でサポートするため、利用枠に限りがございます。",
  "※ご経歴によってはエージェントのご紹介・サポートが難しい場合がございます。",
  "※転職の確約をお約束するものではございません。現職に残る選択を推奨する場合もございます。",
];

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionHeaderCenter}>
            <SectionLabel label="Q&A" />
          </div>
          <h2 className={styles.sectionHeading}>
            よくある質問
          </h2>
        </div>

        <div className={styles.faqList}>
          {FAQS.map((item, i) => (
            <div key={i} className={styles.faqItem}>
              <button
                className={styles.faqButton}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className={styles.faqQText}>{item.q}</span>
                <span className={`${styles.faqToggle} ${openIndex === i ? styles.faqToggleOpen : ""}`}>+</span>
              </button>

              {openIndex === i && (
                <div className={styles.faqAnswer}>
                  <p className={styles.faqAText}>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.faqCta}>
          <CtaButton className={styles.faqCtaBtn} />
        </div>

        {/* Disclaimers */}
        <div className={styles.disclaimers}>
          {DISCLAIMERS.map((text, i) => (
            <p key={i} className={styles.disclaimerText}>
              {text}
            </p>
          ))}
          <p className={styles.disclaimerText}>
            ※転職エージェントの口コミや評価も<a href="/reviews" className={styles.disclaimerLink}>こちら</a>で募集しています。皆さまの率直な感想をお寄せください。
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        {/* Logo + Copyright (shown left on desktop) */}
        <div className={styles.footerBottom}>
          <div className={styles.footerLogoWrap}>
            <img
              src={ASSETS.logomarkWhite}
              alt="エージェントの窓口"
              className={styles.footerLogomark}
            />
            <p className={styles.footerCopyright}>
              Copyright © HIRED inc All Rights Reserved.
            </p>
          </div>

          {/* Footer links */}
          <div className={styles.footerLinks}>
            <a href="#" className={styles.footerLink}>運営会社</a>
            <a href="#" className={styles.footerLink}>採用情報</a>
            <a href="#" className={styles.footerLink}>利用規約</a>
            <a href="#" className={styles.footerLink}>プライバシーポリシー</a>
            <a href="#" className={styles.footerLink}>お問い合わせ</a>
            <a href="#" className={styles.footerLink}>サイトマップ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────
export default function Page() {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main>
        <HeroSection />
        <ServiceSection />
        <ComparisonSection />
        <SolutionsSection />
        <ProblemsSection />
        <StepsSection />
        <AgentsSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
