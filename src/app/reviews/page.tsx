"use client";

import { useState } from "react";
import styles from "./reviews.module.css";

const YEAR_OPTIONS = Array.from({ length: 10 }, (_, i) => `${new Date().getFullYear() - i}年`);

const PURPOSE_OPTIONS = ["転職活動のため", "求人情報収集のため", "キャリア相談のため", "その他"];

const RATING_OPTIONS = ["5（非常に良い）", "4（良い）", "3（普通）", "2（やや悪い）", "1（悪い）"];

const RESULT_OPTIONS = ["転職成功", "転職活動中", "転職せず継続", "転職活動を中断", "その他"];

const INDUSTRY_OPTIONS = ["IT・通信", "メーカー", "商社", "金融・保険", "不動産・建設", "コンサルティング", "医療・福祉", "教育", "サービス", "公務員・団体", "その他"];

const JOB_OPTIONS = ["営業職", "事務・アシスタント", "企画・マーケティング", "エンジニア・IT", "デザイン・クリエイティブ", "経営・コンサルティング", "財務・経理・法務", "人事・総務", "医療・介護・福祉", "教育・保育", "サービス・接客・販売", "その他"];

const AGE_OPTIONS = ["20代前半", "20代後半", "30代前半", "30代後半", "40代", "50代以上"];

const INCOME_OPTIONS = ["300万円以下", "400万円台", "500万円台", "600万円台", "700万円台", "800万円台", "900万円台", "1,000万円以上"];

export default function ReviewsPage() {
  const [submitted, setSubmitted] = useState(false);

  // エージェント情報
  const [agentName, setAgentName] = useState("");
  const [usageYear, setUsageYear] = useState("");
  const [purpose, setPurpose] = useState("");

  // 評価
  const [starRating, setStarRating] = useState(0);
  const [hoverStar, setHoverStar] = useState(0);
  const [staffRating, setStaffRating] = useState("");
  const [jobRating, setJobRating] = useState("");
  const [supportRating, setSupportRating] = useState("");
  const [result, setResult] = useState("");

  // 口コミ内容
  const [goodPoints, setGoodPoints] = useState("");
  const [improvements, setImprovements] = useState("");
  const [otherComment, setOtherComment] = useState("");

  // 投稿者情報
  const [industry, setIndustry] = useState("");
  const [jobType, setJobType] = useState("");
  const [age, setAge] = useState("");
  const [income, setIncome] = useState("");

  // メディア掲載
  const [mediaConsent, setMediaConsent] = useState<"allow" | "deny" | "">("");

  const canSubmit = agentName && usageYear && purpose && starRating > 0 && goodPoints && mediaConsent;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.successScreen}>
            <div className={styles.successIconWrap}>🎉</div>
            <p className={styles.successTitle}>口コミを投稿しました</p>
            <div className={styles.successLine} />
            <p className={styles.successText}>
              ご投稿ありがとうございました。<br />
              内容を確認のうえ、審査の参考にさせていただきます。
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>

        {/* Header */}
        <header className={styles.header}>
          <div className={styles.logoWrap}>
            <img src="/images/a-logo.svg" alt="エージェントの窓口" className={styles.logo} />
            <span className={styles.logoText}>エージェントの窓口</span>
          </div>
          <p className={styles.headerDesc}>
            エージェントへの評価・ご感想をお寄せください。<br />
            皆さまの口コミは、エージェントの審査の参考にさせていただきます。
          </p>
          <div className={styles.headerDivider} />
        </header>

        <form onSubmit={handleSubmit} className={styles.form}>

          {/* ─── エージェント情報 ─── */}
          <section className={styles.section}>
            <div className={styles.sectionLabel}>
              <span className={styles.sectionLabelLine} />
              <span className={styles.sectionLabelText}>エージェント情報</span>
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>
                エージェント名 <span className={styles.required}>必須</span>
              </label>
              <input
                type="text"
                className={styles.input}
                placeholder="例：リクルートエージェント、dodaなど"
                value={agentName}
                onChange={(e) => setAgentName(e.target.value)}
              />
            </div>

            <div className={styles.row}>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>
                  ご利用時期 <span className={styles.required}>必須</span>
                </label>
                <select className={styles.select} value={usageYear} onChange={(e) => setUsageYear(e.target.value)}>
                  <option value="">年を選択</option>
                  {YEAR_OPTIONS.map((y) => <option key={y}>{y}</option>)}
                </select>
              </div>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>
                  利用目的 <span className={styles.required}>必須</span>
                </label>
                <select className={styles.select} value={purpose} onChange={(e) => setPurpose(e.target.value)}>
                  <option value="">目的を選択</option>
                  {PURPOSE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
            </div>
          </section>

          {/* ─── 評価 ─── */}
          <section className={styles.section}>
            <div className={styles.sectionLabel}>
              <span className={styles.sectionLabelLine} />
              <span className={styles.sectionLabelText}>評価</span>
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>
                総合評価 <span className={styles.required}>必須</span>
              </label>
              <div className={styles.stars}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    className={`${styles.star} ${n <= (hoverStar || starRating) ? styles.starActive : ""}`}
                    onMouseEnter={() => setHoverStar(n)}
                    onMouseLeave={() => setHoverStar(0)}
                    onClick={() => setStarRating(n)}
                    aria-label={`${n}星`}
                  >
                    ★
                  </button>
                ))}
              </div>
              <p className={styles.starHint}>★をクリックして評価してください（1〜5）</p>
            </div>

            <div className={styles.row}>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>担当者の対応</label>
                <select className={styles.select} value={staffRating} onChange={(e) => setStaffRating(e.target.value)}>
                  <option value="">評価を選択</option>
                  {RATING_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>求人の質・量</label>
                <select className={styles.select} value={jobRating} onChange={(e) => setJobRating(e.target.value)}>
                  <option value="">評価を選択</option>
                  {RATING_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>サポートの充実度</label>
                <select className={styles.select} value={supportRating} onChange={(e) => setSupportRating(e.target.value)}>
                  <option value="">評価を選択</option>
                  {RATING_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>利用結果</label>
                <select className={styles.select} value={result} onChange={(e) => setResult(e.target.value)}>
                  <option value="">結果を選択</option>
                  {RESULT_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
            </div>
          </section>

          {/* ─── 口コミ内容 ─── */}
          <section className={styles.section}>
            <div className={styles.sectionLabel}>
              <span className={styles.sectionLabelLine} />
              <span className={styles.sectionLabelText}>口コミ内容</span>
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>
                良かった点 <span className={styles.required}>必須</span>
              </label>
              <textarea
                className={styles.textarea}
                placeholder="担当者の丁寧な対応や、豊富な求人情報など、良かった点をご記入ください。"
                value={goodPoints}
                onChange={(e) => setGoodPoints(e.target.value)}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>改善してほしい点</label>
              <textarea
                className={styles.textarea}
                placeholder="サービス向上のため、改善点があればお聞かせください。"
                value={improvements}
                onChange={(e) => setImprovements(e.target.value)}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>その他コメント</label>
              <textarea
                className={styles.textarea}
                placeholder="その他、ご自由にお書きください。"
                value={otherComment}
                onChange={(e) => setOtherComment(e.target.value)}
              />
            </div>
          </section>

          {/* ─── 投稿者情報（任意） ─── */}
          <section className={styles.section}>
            <div className={styles.sectionLabel}>
              <span className={styles.sectionLabelLine} />
              <span className={styles.sectionLabelText}>投稿者情報（任意）</span>
            </div>

            <div className={styles.row}>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>業界</label>
                <select className={styles.select} value={industry} onChange={(e) => setIndustry(e.target.value)}>
                  <option value="">選択（任意）</option>
                  {INDUSTRY_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>職種</label>
                <select className={styles.select} value={jobType} onChange={(e) => setJobType(e.target.value)}>
                  <option value="">選択（任意）</option>
                  {JOB_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>年代</label>
                <select className={styles.select} value={age} onChange={(e) => setAge(e.target.value)}>
                  <option value="">選択（任意）</option>
                  {AGE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>年収（利用当時）</label>
                <select className={styles.select} value={income} onChange={(e) => setIncome(e.target.value)}>
                  <option value="">選択（任意）</option>
                  {INCOME_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
            </div>
          </section>

          {/* ─── メディア掲載 ─── */}
          <div className={styles.mediaDivider} />
          <div className={styles.mediaSection}>
            <p className={styles.mediaLabel}>転職メディア『転職BANK』への口コミ掲載</p>
            <div className={styles.radioGroup}>
              <label className={styles.radioLabel}>
                <input type="radio" name="media" value="allow" checked={mediaConsent === "allow"} onChange={() => setMediaConsent("allow")} />
                <span>掲載を許可する</span>
              </label>
              <label className={styles.radioLabel}>
                <input type="radio" name="media" value="deny" checked={mediaConsent === "deny"} onChange={() => setMediaConsent("deny")} />
                <span>掲載を許可しない</span>
              </label>
            </div>
          </div>

          {/* ─── Submit ─── */}
          <div className={styles.submitWrap}>
            <button type="submit" className={styles.submitBtn} disabled={!canSubmit}>
              <span>→</span> 口コミを投稿する
            </button>
            <p className={styles.submitNote}>
              投稿内容は、エージェントの窓口の審査時の参考にさせていただきます。<br />
              メディア掲載を許可してくださった方については、内容を確認のうえ掲載いたします。
            </p>
          </div>

        </form>

        {/* Footer */}
        <footer className={styles.footer}>
          <p>© エージェントの窓口 — All rights reserved.</p>
        </footer>

      </div>
    </div>
  );
}
