"use client";

import { useState } from "react";
import styles from "./business.module.css";

const ASSETS = {
  logomark: "/images/a-logo.svg",
  logomarkWhite: "/images/logo-white.svg",
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
          <h1 className={styles.heroTitle}>
            紹介される<br />エージェントになる。
          </h1>
          <p className={styles.heroSub}>
            優秀な求職者を発掘し、貴社のサービスに<br />登録が到来する求人サービスです。
          </p>
          <a href="/business/registration" className={styles.heroBtn}>お申し込み・お問い合わせ</a>
        </div>
      </div>
    </section>
  );
}

// ─── Service Overview ──────────────────────────────────────────────────────
const SERVICE_ITEMS = [
  {
    num: "01",
    title: "自社にマッチする求職者にだけ会える",
    body: "御社の得意領域・年代・年収などを把握したアドバイザーが、御社が求める求職者をご紹介します。",
  },
  {
    num: "02",
    title: "専任コンサルタントが直接ご紹介",
    body: "エージェントの窓口のコンサルタントが、求職者とコミュニケーションを取り、御社と一緒にサポートします。",
  },
  {
    num: "03",
    title: "求職者を徹底サポート",
    body: "紹介後も求職者の転職活動をコンサルタントがサポートします。意向維持・不安解消を担い、御社の決定をサポートします。",
  },
];

function ServiceSection() {
  return (
    <section id="service" className={styles.section}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLabel}>
            <span className={styles.sectionLabelText}>SERVICE OVERVIEW</span>
          </div>
          <h2 className={styles.sectionHeading}>求職者に直接ご紹介</h2>
          <div className={styles.sectionIllustrationWrap}>
            <img src="/images/illustration-agent.png" alt="エージェントの窓口イラスト" className={styles.sectionIllustration} />
          </div>
          <p className={styles.serviceDesc}>
            コンサルタントが面談を行い、<br />御社にマッチした求職者をご紹介します。
          </p>
        </div>

        <div className={styles.serviceCardList}>
          {SERVICE_ITEMS.map((item, i) => (
            <div key={i} className={styles.serviceCard}>
              <span className={styles.serviceCardNum}>{item.num}</span>
              <div className={styles.serviceCardContent}>
                <h3 className={styles.serviceCardTitle}>{item.title}</h3>
                <p className={styles.itemBody}>{item.body}</p>
              </div>
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
    title: "紹介者の\n面談可否を選べる",
    body: "紹介した求職者との面談可否を選べます。紹介できる求人がない・エリア的に難しいと判断した場合は見送ることができます。",
  },
  {
    num: "02",
    title: "求職者の\n面談着席率が高い",
    body: "コンサルタントがじっくり面談して紹介するため、面談着席率が高いのが特徴です。",
  },
  {
    num: "03",
    title: "紹介費用は0円。\nコストを抑えて利用可",
    body: "紹介における費用は一切かかりません。決定報酬のみで利用できます。",
  },
];

function ValueSection() {
  return (
    <section id="value" className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLabel}>
            <span className={styles.sectionLabelText}>VALUE</span>
          </div>
          <h2 className={styles.sectionHeading}>
            コストを抑えて<br />マッチングを最大化
          </h2>
          <div className={styles.sectionIllustrationWrap}>
            <img src="/images/illustration-celebrate.png" alt="コスト削減イラスト" className={styles.sectionIllustration} />
          </div>
          <p className={styles.serviceDesc}>
            紹介に費用は掛かりません。面談可否を選択でき、高い着席率を実現します。
          </p>
        </div>

        <div className={styles.valueList}>
          {VALUE_ITEMS.map((item, i) => (
            <div key={i}>
              <div className={styles.valueItem}>
                <span className={styles.valueNum}>{item.num}</span>
                <div className={styles.itemContent}>
                  <h3 className={styles.valueTitle}>{item.title}</h3>
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
    alt: "izul",
    description: "イズルの代表と社内のトップコンサルタントが面談を担当します。手厚い面談と年収アップが得意な転職エージェントです。",
  },
];

function ClientsSection() {
  return (
    <section id="clients" className={styles.section}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLabel}>
            <span className={styles.sectionLabelText}>CLIENT</span>
          </div>
          <h2 className={styles.sectionHeading}>ご利用企業（一例）</h2>
        </div>

        <div className={styles.clientList}>
          {CLIENTS.map((c) => (
            <div key={c.alt} className={styles.clientItem}>
              <div className={styles.clientLogoWrap}>
                <img src={c.logo} alt={c.alt} className={styles.clientLogo} />
              </div>
              <p className={styles.clientDesc}>{c.description}</p>
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
          <span className={styles.sectionLabelText}>CONTACT</span>
        </div>
        <h2 className={styles.ctaHeading}>まずはお問い合わせください</h2>
        <p className={styles.ctaDesc}>
          サービスの詳細や審査基準について、お気軽にお問い合わせください。<br />
          担当者より2営業日以内にご連絡いたします。
        </p>
        <a href="/business/registration" className={styles.heroBtn}>
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
            <img src={ASSETS.logomarkWhite} alt="エージェントの窓口" className={styles.footerLogomark} />
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
