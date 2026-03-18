"use client";

import { useState } from "react";
import styles from "./registration.module.css";

const TOTAL_STEPS = 7;
const PROGRESS_VALUES = [14, 28, 42, 57, 71, 85, 100];

const INCOME_OPTIONS = [
  "300万円以下", "350万円", "400万円", "450万円", "500万円",
  "550万円", "600万円", "650万円", "700万円", "750万円",
  "800万円", "850万円", "900万円", "950万円", "1,000万円以上",
];

const JOB_OPTIONS = [
  "営業職", "事務・アシスタント", "企画・マーケティング", "エンジニア・IT",
  "デザイン・クリエイティブ", "経営・コンサルティング", "財務・経理・法務",
  "人事・総務", "医療・介護・福祉", "教育・保育", "サービス・接客・販売",
  "物流・製造・工場", "建築・土木・不動産", "その他",
];

const SITUATION_OPTIONS = ["漠然とキャリアに迷っている", "転職活動するか迷っている", "転職サイトを利用している", "転職エージェントを利用している", "自己応募で転職活動している"];

export default function RegistrationPage() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);

  // Q1
  const [situations, setSituations] = useState<string[]>([]);
  // Q2
  const [age, setAge] = useState("");
  const [income, setIncome] = useState("");
  // Q3
  const [companies, setCompanies] = useState("");
  // Q4
  const [jobType, setJobType] = useState("");
  // Q5
  const [employment, setEmployment] = useState("");
  const [period, setPeriod] = useState("");
  // Q6
  const [nameKanji, setNameKanji] = useState("");
  const [nameKana, setNameKana] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  // Q7
  const [privacy, setPrivacy] = useState(false);

  const pct = done ? 100 : PROGRESS_VALUES[step - 1];

  function goNext() {
    setStep((s) => s + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goBack() {
    setStep((s) => s - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function toggleSituation(val: string) {
    setSituations((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
    );
  }

  function handleEmailChange(val: string) {
    setEmail(val);
    if (val) setEmailError(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val));
    else setEmailError(false);
  }

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  function handleSubmit() {
    setDone(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const needsPeriod = employment === "休職中" || employment === "離職中";

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.logo}>
            <img src="/images/a-logo.svg" alt="エージェントの窓口" width={140} />
          </div>
          <h1 className={styles.heading}>お申込みフォーム</h1>
        </div>

        {/* Progress */}
        <div className={styles.progressWrap}>
          <span className={styles.progressPct}>{pct}%</span>
          <div className={styles.progressTrack}>
            <div className={styles.progressBar} style={{ width: `${pct}%` }} />
          </div>
          <span className={styles.progressStep}>
            {done ? "完了" : `${step} / ${TOTAL_STEPS}`}
          </span>
        </div>

        {/* Card */}
        <div className={styles.card}>
          <div className={styles.cardTopBar} />
          <div className={styles.cardBody}>

            {/* Success */}
            {done && (
              <div className={styles.successScreen}>
                <div className={styles.successIconWrap}>🎉</div>
                <p className={styles.successTitle}>お申し込みが完了しました</p>
                <div className={styles.successLine} />
                <p className={styles.successText}>
                  お申込みありがとうございました。<br />
                  担当者よりメールにてご連絡いたしますので、<br />
                  お待ちください。
                </p>
              </div>
            )}

            {/* Q1 */}
            {!done && step === 1 && (
              <div>
                <div className={styles.questionLabel}>
                  <span className={styles.qNum}>Q1</span>
                  <span className={styles.qText}>
                    現在の状況についてお答えください。
                    <span className={styles.qNote}>複数選択可</span>
                  </span>
                </div>
                <div className={styles.qDivider} />
                <div className={styles.choices}>
                  {SITUATION_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      className={`${styles.choiceBtn} ${situations.includes(opt) ? styles.selected : ""}`}
                      onClick={() => toggleSituation(opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                <div className={styles.navButtons}>
                  <button className={styles.btnNext} disabled={situations.length === 0} onClick={goNext}>
                    次へ進む
                  </button>
                </div>
              </div>
            )}

            {/* Q2 */}
            {!done && step === 2 && (
              <div>
                <div className={styles.questionLabel}>
                  <span className={styles.qNum}>Q2</span>
                  <span className={styles.qText}>年齢と現在の年収をお答えください。</span>
                </div>
                <div className={styles.qDivider} />
                <div className={styles.inputGroup}>
                  <label>年齢</label>
                  <input type="number" placeholder="28" min={15} max={99} value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <div className={styles.inputGroup}>
                  <label>現在の年収</label>
                  <select value={income} onChange={(e) => setIncome(e.target.value)}>
                    <option value="">選択してください</option>
                    {INCOME_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className={styles.navButtons}>
                  <button className={styles.btnNext} disabled={!age || !income} onClick={goNext}>次へ進む</button>
                  <button className={styles.btnBack} onClick={goBack}>前に戻る</button>
                </div>
              </div>
            )}

            {/* Q3 */}
            {!done && step === 3 && (
              <div>
                <div className={styles.questionLabel}>
                  <span className={styles.qNum}>Q3</span>
                  <span className={styles.qText}>これまでの経験社数をお答えください。</span>
                </div>
                <div className={styles.qDivider} />
                <div className={`${styles.choices} ${styles.cols3}`}>
                  {["1社", "2社", "3社以上"].map((opt) => (
                    <button
                      key={opt}
                      className={`${styles.choiceBtn} ${companies === opt ? styles.selected : ""}`}
                      onClick={() => setCompanies(opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                <div className={styles.navButtons}>
                  <button className={styles.btnNext} disabled={!companies} onClick={goNext}>次へ進む</button>
                  <button className={styles.btnBack} onClick={goBack}>前に戻る</button>
                </div>
              </div>
            )}

            {/* Q4 */}
            {!done && step === 4 && (
              <div>
                <div className={styles.questionLabel}>
                  <span className={styles.qNum}>Q4</span>
                  <span className={styles.qText}>経験職種をお答えください。</span>
                </div>
                <div className={styles.qDivider} />
                <div className={styles.inputGroup}>
                  <label>職種</label>
                  <select value={jobType} onChange={(e) => setJobType(e.target.value)}>
                    <option value="">選択してください</option>
                    {JOB_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className={styles.navButtons}>
                  <button className={styles.btnNext} disabled={!jobType} onClick={goNext}>次へ進む</button>
                  <button className={styles.btnBack} onClick={goBack}>前に戻る</button>
                </div>
              </div>
            )}

            {/* Q5 */}
            {!done && step === 5 && (
              <div>
                <div className={styles.questionLabel}>
                  <span className={styles.qNum}>Q5</span>
                  <span className={styles.qText}>現在の就業状況をお答えください。</span>
                </div>
                <div className={styles.qDivider} />
                <div className={`${styles.choices} ${styles.cols3}`}>
                  {["就業中", "休職中", "離職中"].map((opt) => (
                    <button
                      key={opt}
                      className={`${styles.choiceBtn} ${employment === opt ? styles.selected : ""}`}
                      onClick={() => { setEmployment(opt); setPeriod(""); }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {needsPeriod && (
                  <div className={styles.inputGroup}>
                    <label>{employment === "休職中" ? "休職期間" : "離職期間"}</label>
                    <input type="text" placeholder="例：3ヶ月" value={period} onChange={(e) => setPeriod(e.target.value)} />
                  </div>
                )}
                <div className={styles.navButtons}>
                  <button
                    className={styles.btnNext}
                    disabled={!employment || (needsPeriod && !period.trim())}
                    onClick={goNext}
                  >
                    次へ進む
                  </button>
                  <button className={styles.btnBack} onClick={goBack}>前に戻る</button>
                </div>
              </div>
            )}

            {/* Q6 */}
            {!done && step === 6 && (
              <div>
                <div className={styles.questionLabel}>
                  <span className={styles.qNum}>Q6</span>
                  <span className={styles.qText}>お名前とメールアドレスをお答えください。</span>
                </div>
                <div className={styles.qDivider} />
                <div className={styles.inputGroup}>
                  <label>氏名（漢字）</label>
                  <input type="text" placeholder="山田 太郎" value={nameKanji} onChange={(e) => setNameKanji(e.target.value)} />
                </div>
                <div className={styles.inputGroup}>
                  <label>フリガナ</label>
                  <input type="text" placeholder="ヤマダ タロウ" value={nameKana} onChange={(e) => setNameKana(e.target.value)} />
                </div>
                <div className={styles.inputGroup}>
                  <label>メールアドレス</label>
                  <input type="email" placeholder="taro@example.com" value={email} onChange={(e) => handleEmailChange(e.target.value)} autoComplete="email" />
                  {emailError && (
                    <p className={styles.emailHint}>正しいメールアドレスの形式で入力してください。</p>
                  )}
                </div>
                <div className={styles.navButtons}>
                  <button className={styles.btnNext} disabled={!nameKanji || !nameKana || !isValidEmail} onClick={goNext}>次へ進む</button>
                  <button className={styles.btnBack} onClick={goBack}>前に戻る</button>
                </div>
              </div>
            )}

            {/* Q7 */}
            {!done && step === 7 && (
              <div>
                <div className={styles.questionLabel}>
                  <span className={styles.qNum}>Q7</span>
                  <span className={styles.qText}>個人情報の取り扱いについてご確認ください。</span>
                </div>
                <div className={styles.qDivider} />
                <div className={styles.privacyBox}>
                  お申し込みの前に、<a href="https://hired.co.jp/privacy_policy" target="_blank">個人情報の取り扱いについて</a>をご一読の上、同意いただけますようお願いいたします。
                </div>
                <label className={styles.checkboxWrap}>
                  <input type="checkbox" checked={privacy} onChange={(e) => setPrivacy(e.target.checked)} />
                  <span>個人情報の取り扱いに同意します。</span>
                </label>
                <div className={styles.navButtons}>
                  <button className={styles.btnSubmit} disabled={!privacy} onClick={handleSubmit}>登録する</button>
                  <button className={styles.btnBack} onClick={goBack}>前に戻る</button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
