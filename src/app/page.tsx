"use client";

import { useState } from "react";

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
    <div className="flex items-center gap-4">
      <span className="block h-px w-14 bg-[#aa9473]" />
      <span className="text-[#aa9473] text-sm tracking-widest">{label}</span>
    </div>
  );
}

function CtaButton({ className = "" }: { className?: string }) {
  return (
    <button
      className={`flex items-center justify-between w-full max-w-[345px] h-[65px] rounded-sm overflow-hidden shadow-md hover:opacity-90 transition-opacity ${className}`}
      style={{ background: "linear-gradient(90deg, #63ab3f 0%, #37db68 100%)" }}
    >
      <div className="flex flex-col items-center justify-center w-[52px] h-full bg-white text-[#63ab3f] text-[10px] font-bold leading-tight shrink-0">
        <span>登録</span>
        <span>1分</span>
      </div>
      <span className="flex-1 text-white text-base font-bold tracking-wider text-center">
        無料で相談する
      </span>
      <span className="text-white text-xl font-bold pr-4">›</span>
    </button>
  );
}

function CtaButtonCenter({ className = "" }: { className?: string }) {
  return (
    <div className="flex justify-center">
      <CtaButton className={className} />
    </div>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-[1280px] mx-auto px-6 h-[60px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img
            src={ASSETS.logomark}
            alt="エージェントの窓口 ロゴ"
            className="h-8 w-auto"
          />
          <img
            src={ASSETS.logoText}
            alt="エージェントの窓口"
            className="h-5 w-auto hidden sm:block"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm text-[#1f1f1f]">
          <a href="#service" className="hover:text-[#aa9473] transition-colors">サービス概要</a>
          <a href="#flow" className="hover:text-[#aa9473] transition-colors">ご利用の流れ</a>
          <a href="#agents" className="hover:text-[#aa9473] transition-colors">利用企業</a>
          <a href="#faq" className="hover:text-[#aa9473] transition-colors">よくある質問</a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-[#1f1f1f] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <div className="flex flex-col gap-[5px]">
            <span className={`block w-6 h-0.5 bg-[#1f1f1f] transition-all ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#1f1f1f] transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#1f1f1f] transition-all ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 text-sm text-[#1f1f1f]">
          <a href="#service" onClick={() => setMenuOpen(false)} className="py-2 border-b border-gray-100">サービス概要</a>
          <a href="#flow" onClick={() => setMenuOpen(false)} className="py-2 border-b border-gray-100">ご利用の流れ</a>
          <a href="#agents" onClick={() => setMenuOpen(false)} className="py-2 border-b border-gray-100">利用企業</a>
          <a href="#faq" onClick={() => setMenuOpen(false)} className="py-2">よくある質問</a>
        </nav>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative w-full h-[500px] md:h-[560px] lg:h-[620px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ASSETS.heroBg})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 h-full flex flex-col justify-center">
        <div className="max-w-xl">
          <h1 className="text-white text-4xl md:text-5xl lg:text-[52px] font-medium leading-tight tracking-[2px] mb-6 font-serif">
            いい仕事があれば、<br />転職したい。
          </h1>
          <div className="flex items-center gap-3 mb-10">
            <span className="block h-px w-8 bg-white/80" />
            <p className="text-white/90 text-base md:text-lg font-serif font-semibold">でも、転職できるかわからない。</p>
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
    <section id="service" className="bg-[#f7f4ef] py-16 md:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text */}
          <div className="flex-1 w-full lg:max-w-[520px]">
            <SectionLabel label="エージェントの窓口とは" />
            <h2 className="mt-4 mb-6 text-2xl md:text-4xl font-medium text-[#1f1f1f] leading-tight font-serif">
              無料の転職相談サービス
            </h2>
            <p className="text-[#1f1f1f] text-base md:text-lg leading-relaxed mb-3">
              エージェントの窓口は、<br className="hidden md:block" />
              あなたのキャリアを一緒に考える<br className="hidden md:block" />
              無料の転職相談サービスです。
            </p>
            <p className="text-[#666] text-sm mb-10">
              ※本サービスは転職エージェントではありません。
            </p>
            <CtaButton />
          </div>

          {/* Illustration */}
          <div className="flex-1 flex justify-center items-center w-full max-w-[400px] lg:max-w-none">
            <img
              src={ASSETS.serviceIllustration}
              alt="転職相談イラスト"
              className="w-full max-w-[360px] lg:max-w-[440px] h-auto object-contain"
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
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex justify-center">
            <SectionLabel label="こんな悩みはありませんか？" />
          </div>
          <h2 className="mt-4 text-2xl md:text-4xl font-medium text-[#1f1f1f] font-serif">
            よくある転職の悩み
          </h2>
        </div>

        <div className="max-w-[820px] mx-auto">
          {PROBLEMS.map((item, i) => (
            <div key={i}>
              <div className="py-8 flex items-start gap-6">
                <span className="text-[#aa9473] text-sm font-medium mt-1 w-6 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-medium text-[#1f1f1f] leading-snug mb-3 whitespace-pre-line">
                    {item.title}
                  </h3>
                  <p className="text-[#555] text-sm md:text-base leading-relaxed text-left">
                    {item.body}
                  </p>
                </div>
              </div>
              {i < PROBLEMS.length - 1 && (
                <hr className="border-0 border-t border-[#e5e0d8]" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12">
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
    <section className="bg-[#f7f4ef] py-16 md:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* Left: heading + illustration */}
          <div className="lg:w-[380px] shrink-0">
            <SectionLabel label="エージェントの窓口でできること" />
            <h2 className="mt-4 mb-8 text-2xl md:text-4xl font-medium text-[#1f1f1f] leading-tight font-serif">
              エージェントの窓口が<br />悩みを解決
            </h2>
            <div className="flex justify-center lg:justify-start">
              <img
                src={ASSETS.serviceIllustration}
                alt="エージェントの窓口イラスト"
                className="w-full max-w-[280px] lg:max-w-[340px] h-auto object-contain"
              />
            </div>
          </div>

          {/* Right: solution list */}
          <div className="flex-1 w-full">
            {SOLUTIONS.map((item, i) => (
              <div key={i}>
                <div className="py-7 flex items-start gap-6">
                  <span className="text-[#aa9473] text-sm font-medium mt-1 w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#1f1f1f] leading-snug mb-2 whitespace-pre-line">
                      {item.title}
                    </h3>
                    <p className="text-[#555] text-sm md:text-base leading-relaxed text-left">
                      {item.body}
                    </p>
                  </div>
                </div>
                {i < SOLUTIONS.length - 1 && (
                  <hr className="border-0 border-t border-[#dbd6ce]" />
                )}
              </div>
            ))}

            <div className="mt-10">
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
    <section id="flow" className="bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center">
            <SectionLabel label="転職の悩みを相談する" />
          </div>
          <h2 className="mt-4 text-2xl md:text-4xl font-medium text-[#1f1f1f] font-serif">
            ご利用までの流れ
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 max-w-[900px] mx-auto">
          {STEPS.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              {/* Phone image */}
              <div className="mb-6 flex items-center justify-center h-[165px]">
                <img
                  src={step.img}
                  alt={`ステップ${step.num}`}
                  className="h-[165px] w-auto object-contain"
                />
              </div>

              {/* Step number */}
              <p className="text-[#aa9473] text-sm font-medium mb-2">{step.num}</p>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#1f1f1f] leading-snug mb-3 whitespace-pre-line">
                {step.title}
              </h3>

              {/* Body */}
              <p className="text-[#555] text-sm leading-relaxed text-left">
                {step.body}
              </p>

              {/* Arrow between steps */}
              {i < STEPS.length - 1 && (
                <div className="md:hidden text-[#aa9473] text-3xl mt-6">↓</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16">
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
    <section id="agents" className="bg-[#f7f4ef] py-16 md:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-4">
          <div className="flex justify-center">
            <SectionLabel label="厳選したエージェント" />
          </div>
          <h2 className="mt-4 text-2xl md:text-4xl font-medium text-[#1f1f1f] leading-tight font-serif">
            転職希望者に<br className="md:hidden" />エージェントをご紹介
          </h2>
        </div>
        <p className="text-center text-[#555] text-sm md:text-base mb-12 md:mb-16 max-w-[520px] mx-auto">
          独自の審査を通過したエージェントからあなたに合った優秀な担当者を紹介します。
        </p>

        <div className="max-w-[760px] mx-auto">
          {AGENTS.map((agent, i) => (
            <div key={i}>
              <div className="py-8 flex items-center gap-6 md:gap-8">
                {/* Logo */}
                <div className="shrink-0 w-[88px] md:w-[120px]">
                  <img
                    src={agent.logo}
                    alt={agent.alt}
                    className="w-full h-auto object-contain"
                  />
                </div>
                {/* Description */}
                <p className="flex-1 text-[#1f1f1f] text-sm md:text-base leading-relaxed">
                  {agent.description}
                </p>
              </div>
              {i < AGENTS.length - 1 && (
                <hr className="border-0 border-t border-[#dbd6ce]" />
              )}
            </div>
          ))}

          <p className="mt-8 text-center text-[#555] text-sm md:text-base">
            その他、厳選したエージェント約20社からあなたに合った担当者をご紹介します。
          </p>
        </div>

        <div className="mt-10 md:mt-12">
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
    <section id="faq" className="bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex justify-center">
            <SectionLabel label="Q&A" />
          </div>
          <h2 className="mt-4 text-2xl md:text-4xl font-medium text-[#1f1f1f] font-serif">
            よくある質問
          </h2>
        </div>

        <div className="max-w-[760px] mx-auto">
          {FAQS.map((item, i) => (
            <div key={i} className="border-b border-[#e5e0d8]">
              <button
                className="w-full text-left py-5 flex items-start justify-between gap-4 group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="flex items-start gap-4">
                  <span className="text-[#63ab3f] font-bold text-lg shrink-0">Q</span>
                  <span className="text-[#1f1f1f] text-base md:text-lg font-medium leading-snug">
                    {item.q}
                  </span>
                </div>
                <span
                  className={`shrink-0 text-[#aa9473] text-2xl transition-transform duration-200 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {openIndex === i && (
                <div className="pb-5 pl-8 pr-8">
                  <div className="flex items-start gap-4">
                    <span className="text-[#aa9473] font-bold text-lg shrink-0">A</span>
                    <p className="text-[#555] text-sm md:text-base leading-relaxed text-left">{item.a}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Disclaimers */}
        <div className="max-w-[760px] mx-auto mt-12 space-y-2">
          {DISCLAIMERS.map((text, i) => (
            <p key={i} className="text-[#888] text-xs md:text-sm leading-relaxed">
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
    <footer className="bg-[#1f1f1f] text-white">
      <div className="max-w-[1280px] mx-auto px-6 py-8">
        {/* Footer links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-white/70 mb-8">
          <a href="#" className="hover:text-white transition-colors">利用規約</a>
          <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
          <a href="#" className="hover:text-white transition-colors">お問い合わせ</a>
          <a href="#" className="hover:text-white transition-colors">運営会社</a>
        </div>

        {/* Logo + Copyright */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-4">
          <img
            src={ASSETS.logomark}
            alt="エージェントの窓口"
            className="h-8 w-auto opacity-80"
          />
          <p className="text-white/50 text-xs">
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
    <div className="min-h-screen font-sans antialiased">
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
