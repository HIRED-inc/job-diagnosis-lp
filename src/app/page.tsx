"use client";

import { useState } from "react";
import styles from "./page.module.css";

// ─── Figma Asset URLs ──────────────────────────────────────────────────────
const ASSETS = {
  logomark: "/images/a-logo.svg",
  logoText: "/images/logo-text.png",
  logoAssign: "/images/logo-assign.png",
  logoProcommit: "/images/logo-procommit.png",
  logoIzul: "/images/logo-izul.png",
  step01: "/images/step01.png",
  step02: "/images/step02.png",
  step03: "/images/step03.png",
  serviceIllustration: "/images/illustration.png",
  heroBg: "/images/hero.jpg",
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
    <button
      className={`${styles.ctaButton} ${className}`}
      style={{ background: "linear-gradient(90deg, #63ab3f 0%, #37db68 100%)" }}
    >
      <div className={styles.ctaBadge}>
        <span>登録</span>
        <span>1分</span>
      </div>
      <span className={styles.ctaLabel}>無料で相談する</span>
      <span className={styles.ctaArrow}>›</span>
    </button>
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
          <img
            src={ASSETS.logoText}
            alt="エージェントの窓口"
            className={styles.headerLogoText}
          />
        </a>

        {/* Desktop Nav */}
        <nav className={styles.headerNav}>
          <a href="#service" className={styles.headerNavLink}>サービス概要</a>
          <a href="#flow" className={styles.headerNavLink}>ご利用の流れ</a>
          <a href="#agents" className={styles.headerNavLink}>利用企業</a>
          <a href="#faq" className={styles.headerNavLink}>よくある質問</a>
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
          <a href="#flow" onClick={() => setMenuOpen(false)} className={styles.mobileMenuLink}>ご利用の流れ</a>
          <a href="#agents" onClick={() => setMenuOpen(false)} className={styles.mobileMenuLink}>利用企業</a>
          <a href="#faq" onClick={() => setMenuOpen(false)} className={styles.mobileMenuLinkLast}>よくある質問</a>
        </nav>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className={styles.heroSection}>
      {/* Background image */}
      <div
        className={styles.heroBg}
        style={{ backgroundImage: `url(${ASSETS.heroBg})` }}
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
            <CtaButton />
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
    title: "転職したいけど、\n今より年収を下げたくない",
    body: "転職はしたいけど、今より条件の良い会社に転職できるか不安がある。",
  },
  {
    title: "転職の相談を\nできる人が周りにいない",
    body: "転職はしたいけど、今より条件の良い会社に転職できるか不安がある。",
  },
  {
    title: "転職エージェントを使うのは、\nまだ早い気がする",
    body: "転職エージェントもいいけど、求人などではなく、キャリアの相談をしたい。",
  },
];

function ProblemsSection() {
  return (
    <section className={styles.problemsSection}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionHeaderCenter}>
            <SectionLabel label="こんな悩みはありませんか？" />
          </div>
          <h2 className={styles.sectionHeading}>
            よくある転職の悩み
          </h2>
        </div>

        <div className={styles.problemsList}>
          {PROBLEMS.map((item, i) => (
            <div key={i}>
              <div className={styles.problemItem}>
                <span className={styles.itemNumber}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className={styles.itemContent}>
                  <h3 className={styles.problemTitle}>
                    {item.title}
                  </h3>
                  <p className={styles.itemBody}>
                    {item.body}
                  </p>
                </div>
              </div>
              {i < PROBLEMS.length - 1 && (
                <hr className={styles.itemDivider} />
              )}
            </div>
          ))}
        </div>

        <div className={styles.sectionCta}>
          <CtaButtonCenter />
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
    <section className={styles.solutionsSection}>
      <div className={styles.sectionInner}>
        <div className={styles.solutionsLayout}>
          {/* Left: heading + illustration */}
          <div className={styles.solutionsLeft}>
            <SectionLabel label="エージェントの窓口でできること" />
            <h2 className={styles.solutionsHeading}>
              エージェントの窓口が<br />悩みを解決
            </h2>
            <div className={styles.solutionsImgWrap}>
              <img
                src={ASSETS.serviceIllustration}
                alt="エージェントの窓口イラスト"
                className={styles.solutionsIllustration}
              />
            </div>
          </div>

          {/* Right: solution list */}
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

            <div className={styles.solutionsCta}>
              <CtaButton />
            </div>
          </div>
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

              {/* Step number */}
              <p className={styles.stepNum}>{step.num}</p>

              {/* Title */}
              <h3 className={styles.stepTitle}>
                {step.title}
              </h3>

              {/* Body */}
              <p className={styles.stepBody}>
                {step.body}
              </p>

              {/* Arrow between steps */}
              {i < STEPS.length - 1 && (
                <span className={styles.stepArrow}>↓</span>
              )}
            </div>
          ))}
        </div>

        <div className={styles.stepsCta}>
          <CtaButtonCenter />
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
            <div key={i}>
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

          <p className={styles.agentsNote}>
            その他、厳選したエージェント約20社からあなたに合った担当者をご紹介します。
          </p>
        </div>

        <div className={styles.agentsCta}>
          <CtaButtonCenter />
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
                <div className={styles.faqQuestion}>
                  <span className={styles.faqQ}>Q</span>
                  <span className={styles.faqQText}>
                    {item.q}
                  </span>
                </div>
                <span
                  className={`${styles.faqToggle} ${openIndex === i ? styles.faqToggleOpen : ""}`}
                >
                  +
                </span>
              </button>

              {openIndex === i && (
                <div className={styles.faqAnswer}>
                  <div className={styles.faqAnswerInner}>
                    <span className={styles.faqA}>A</span>
                    <p className={styles.faqAText}>{item.a}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Disclaimers */}
        <div className={styles.disclaimers}>
          {DISCLAIMERS.map((text, i) => (
            <p key={i} className={styles.disclaimerText}>
              {text}
            </p>
          ))}
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
        {/* Footer links */}
        <div className={styles.footerLinks}>
          <a href="#" className={styles.footerLink}>利用規約</a>
          <a href="#" className={styles.footerLink}>プライバシーポリシー</a>
          <a href="#" className={styles.footerLink}>お問い合わせ</a>
          <a href="#" className={styles.footerLink}>運営会社</a>
        </div>

        {/* Logo + Copyright */}
        <div className={styles.footerBottom}>
          <img
            src={ASSETS.logomark}
            alt="エージェントの窓口"
            className={styles.footerLogomark}
          />
          <p className={styles.footerCopyright}>
            Copyright © HIRED inc All Rights Reserved.
          </p>
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
        <ProblemsSection />
        <SolutionsSection />
        <StepsSection />
        <AgentsSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
