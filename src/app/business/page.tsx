"use client";

import { useState } from "react";
import styles from "./business.module.css";

const ASSETS = {
  logomark: "/images/a-logo.svg",
  logoAssign: "/images/logo-assign.png",
  logoProcommit: "/images/logo-procommit.png",
  logoIzul: "/images/logo-izul.png",
  heroVideo: "/images/hero-mov.mp4",
};

// ─── Header ───────────────────────────────────────────────────────────────
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <a href="/" className={styles.headerLogo}>
          <img src={ASSETS.logomark} alt="エージェントの窓口" className={styles.headerLogomark} />
        </a>

        <nav className={styles.headerNav}>
          <a href="#service" className={styles.headerNavLink}>サービス概要</a>
          <a href="#value" className={styles.headerNavLink}>導入メリット</a>
          <a href="#flow" className={styles.headerNavLink}>ご利用の流れ</a>
          <a href="#clients" className={styles.headerNavLink}>ご利用企業</a>
          <a href="#contact" className={styles.ctaNavBtn}>お問い合わせ</a>
        </nav>

        <button className={styles.hamburgerButton} onClick={() => setMenuOpen(!menuOpen)} aria-label="メニュー">
          <div className={styles.hamburgerLines}>
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.open1 : ""}`} />
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.open2 : ""}`} />
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.open3 : ""}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <nav className={styles.mobileMenu}>
          <a href="#service" onClick={() => setMenuOpen(false)} className={styles.mobileMenuLink}>サービス概要</a>
          <a href="#value" onClick={() => setMenuOpen(false)} className={styles.mobileMenuLink}>導入メリット</a>
          <a href="#flow" onClick={() => setMenuOpen(false)} className={styles.mobileMenuLink}>ご利用の流れ</a>
          <a href="#clients" onClick={() => setMenuOpen(false)} className={styles.mobileMenuLink}>ご利用企業</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className={styles.mobileMenuLinkLast}>お問い合わせ</a>
        </nav>
      )}
    </header>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <video
        className={styles.heroBg}
        src={ASSETS.heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <div className={styles.heroInner}>
          <p className={styles.heroEyebrow}>エージェントの窓口 — for Business</p>
          <h1 className={styles.heroTitle}>
            紹介される<br />エージェントになる。
          </h1>
          <p className={styles.heroSub}>
            優秀な求職者を発掘し、貴社のサービスに<br />登録が到来する求人サービスです。
          </p>
          <a href="#contact" className={styles.heroBtn}>お申し込み・お問い合わせ</a>
        </div>
      </div>
    </section>
  );
}

// ─── Service Overview ──────────────────────────────────────────────────────
const SERVICE_ITEMS = [
  {
    num: "01",
    title: "独自の審査基準をクリアした求職者のみをご紹介",
    body: "独自の審査基準をクリアした求職者のみが対象です。コンサルタントが状況を把握しながら、丁寧にご紹介いたします。",
  },
  {
    num: "02",
    title: "専任コンサルタントが面談し厳選した候補者のみを紹介",
    body: "コンサルタントが候補者と面談を実施し、マッチング精度の高い候補者のみをエージェントの皆様にご紹介します。",
  },
  {
    num: "03",
    title: "紹介後のサポートも継続対応",
    body: "エージェントの窓口のコンサルタントが、ご紹介後のフォローアップも継続してサポートいたします。",
  },
];

function ServiceSection() {
  return (
    <section id="service" className={styles.section}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLabel}>
            <span className={styles.sectionLabelLine} />
            <span className={styles.sectionLabelText}>SERVICE OVERVIEW</span>
          </div>
          <h2 className={styles.sectionHeading}>求職者を直接ご紹介</h2>
          <div className={styles.sectionIllustrationWrap}>
            <img src="/images/illustration-agent.png" alt="エージェントの窓口イラスト" className={styles.sectionIllustration} />
          </div>
        </div>

        <div className={styles.itemList}>
          {SERVICE_ITEMS.map((item, i) => (
            <div key={i}>
              <div className={styles.item}>
                <span className={styles.itemNumber}>{item.num}</span>
                <div className={styles.itemContent}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemBody}>{item.body}</p>
                </div>
              </div>
              {i < SERVICE_ITEMS.length - 1 && <hr className={styles.itemDivider} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Value ─────────────────────────────────────────────────────────────────
const VALUE_ITEMS = [
  {
    num: "01",
    title: "通常の求人広告より掲載費用を大幅に抑えられる",
    body: "求人媒体への高額な掲載費用が不要。コストを抑えながら優秀な求職者へアプローチできます。",
  },
  {
    num: "02",
    title: "定額掲載と比べ掲載費用率が低い",
    body: "定額型の掲載サービスと比較して、費用対効果の高い採用活動を実現できます。",
  },
  {
    num: "03",
    title: "紹介手数料が0%、成功報酬型でご利用可能",
    body: "初期費用・紹介手数料は一切不要。採用が成立した場合のみ費用が発生する完全成功報酬型です。",
  },
];

function ValueSection() {
  return (
    <section id="value" className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLabel}>
            <span className={styles.sectionLabelLine} />
            <span className={styles.sectionLabelText}>VALUE</span>
          </div>
          <h2 className={styles.sectionHeading}>
            コストを抑えて<br />マッチングを最大化
          </h2>
        </div>

        <div className={styles.itemList}>
          {VALUE_ITEMS.map((item, i) => (
            <div key={i}>
              <div className={styles.item}>
                <span className={styles.itemNumber}>{item.num}</span>
                <div className={styles.itemContent}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemBody}>{item.body}</p>
                </div>
              </div>
              {i < VALUE_ITEMS.length - 1 && <hr className={styles.itemDivider} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Screening ─────────────────────────────────────────────────────────────
const SCREENING_ITEMS = [
  "担当者が求職者に専属で対応している",
  "求職者に真摯に向き合っている",
  "転職支援の経験・実績があるエージェント",
  "求職者のキャリアを最優先に考えている",
];

function ScreeningSection() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLabel}>
            <span className={styles.sectionLabelLine} />
            <span className={styles.sectionLabelText}>AGENCY SCREENING</span>
          </div>
          <h2 className={styles.sectionHeading}>ご利用には<br />審査があります</h2>
          <p className={styles.sectionDesc}>
            弊社エージェントの窓口では、求職者の利益を最優先に考えるエージェントのみと提携しています。以下の基準を満たすエージェント様にご利用いただけます。
          </p>
        </div>

        <ul className={styles.checkList}>
          {SCREENING_ITEMS.map((item, i) => (
            <li key={i} className={styles.checkItem}>
              <span className={`material-icons ${styles.checkIcon}`}>check_circle</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ─── Flow ──────────────────────────────────────────────────────────────────
const FLOW_ITEMS = [
  {
    num: "01",
    title: "お申し込み・お問い合わせ",
    body: "フォームよりお気軽にお申し込みください。担当者より折り返しご連絡いたします。",
  },
  {
    num: "02",
    title: "オンライン説明会の実施",
    body: "サービス内容や審査基準について、オンラインにて詳しくご説明いたします。",
  },
  {
    num: "03",
    title: "審査実施・求人ヒアリング",
    body: "審査を通過後、求人条件や希望する求職者の要件についてヒアリングを行います。",
  },
  {
    num: "04",
    title: "弊社コンサルタントが求職者をご紹介",
    body: "条件にマッチした求職者を、コンサルタントが直接ご紹介いたします。",
  },
  {
    num: "05",
    title: "コンサルタントが継続的に紹介後をサポート",
    body: "ご紹介後も弊社コンサルタントが継続的にフォローし、円滑な採用活動をサポートします。",
  },
];

function FlowSection() {
  return (
    <section id="flow" className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLabel}>
            <span className={styles.sectionLabelLine} />
            <span className={styles.sectionLabelText}>HOW IT WORKS</span>
          </div>
          <h2 className={styles.sectionHeading}>ご利用の流れ</h2>
        </div>

        <div className={styles.flowList}>
          {FLOW_ITEMS.map((item, i) => (
            <div key={i} className={styles.flowItem}>
              <div className={styles.flowNumWrap}>
                <span className={styles.flowNum}>{item.num}</span>
                {i < FLOW_ITEMS.length - 1 && <div className={styles.flowLine} />}
              </div>
              <div className={styles.itemContent}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemBody}>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Clients ───────────────────────────────────────────────────────────────
const CLIENTS = [
  { logo: ASSETS.logoAssign, alt: "アサイン" },
  { logo: ASSETS.logoProcommit, alt: "ProCommit" },
  { logo: ASSETS.logoIzul, alt: "izul" },
];

function ClientsSection() {
  return (
    <section id="clients" className={styles.section}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLabel}>
            <span className={styles.sectionLabelLine} />
            <span className={styles.sectionLabelText}>TRUST</span>
          </div>
          <h2 className={styles.sectionHeading}>ご利用企業（一例）</h2>
        </div>

        <div className={styles.clientLogos}>
          {CLIENTS.map((c) => (
            <div key={c.alt} className={styles.clientLogoWrap}>
              <img src={c.logo} alt={c.alt} className={styles.clientLogo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ───────────────────────────────────────────────────────────────────
function CtaSection() {
  return (
    <section id="contact" className={styles.ctaSection}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionLabel} style={{ justifyContent: "center" }}>
          <span className={styles.sectionLabelLine} />
          <span className={styles.sectionLabelText}>CONTACT</span>
          <span className={styles.sectionLabelLine} />
        </div>
        <h2 className={styles.ctaHeading}>まずはお問い合わせください</h2>
        <p className={styles.ctaDesc}>
          サービスの詳細や審査基準について、お気軽にお問い合わせください。<br />
          担当者より2営業日以内にご連絡いたします。
        </p>
        <a href="mailto:info@hired.co.jp" className={styles.heroBtn}>
          お問い合わせはこちら ›
        </a>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerBottom}>
          <div className={styles.footerLogoWrap}>
            <img src={ASSETS.logomark} alt="エージェントの窓口" className={styles.footerLogomark} />
            <p className={styles.footerCopyright}>
              Copyright © HIRED inc All Rights Reserved.
            </p>
          </div>
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

// ─── Page ──────────────────────────────────────────────────────────────────
export default function BusinessPage() {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main>
        <HeroSection />
        <ServiceSection />
        <ValueSection />
        <ScreeningSection />
        <FlowSection />
        <ClientsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
