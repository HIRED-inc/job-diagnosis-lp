"use client";

import { useState } from "react";
import styles from "./business-registration.module.css";

const TOTAL_STEPS = 7;
const PROGRESS_VALUES = [14, 28, 42, 57, 71, 85, 100];

const COMPANY_SIZE_OPTIONS = ["1〜5名", "6〜10名", "11〜30名", "31〜100名", "101名以上"];

const JOB_TYPE_OPTIONS = [
  "営業職", "エンジニア・IT", "企画・マーケティング", "コンサルティング",
  "財務・経理・法務", "人事・総務", "医療・介護", "クリエイティブ", "その他",
];

const INCOME_RANGE_OPTIONS = [
  "300万円以下", "300〜500万円", "500〜700万円", "700〜1,000万円", "1,000万円以上",
];

const ANNUAL_INTRO_OPTIONS = ["1〜10件", "11〜30件", "31〜50件", "51〜100件", "101件以上"];

const PURPOSE_OPTIONS = [
  "求職者の母集団を増やしたい",
  "優秀な求職者にアクセスしたい",
  "採用コストを下げたい",
  "新しい採用チャネルを開拓したい",
  "その他",
];

export default function BusinessRegistrationPage() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);

  // Q1: 会社情報
  const [companyName, setCompanyName] = useState("");
  const [companySize, setCompanySize] = useState("");

  // Q2: 担当者情報
  const [contactName, setContactName] = useState("");
  const [contactKana, setContactKana] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  // Q3: 電話番号・設立年
  const [phone, setPhone] = useState("");
  const [founded, setFounded] = useState("");

  // Q4: 対応職種
  const [jobTypes, setJobTypes] = useState<string[]>([]);

  // Q5: 対応年収帯
  const [incomeRanges, setIncomeRanges] = useState<string[]>([]);

  // Q6: 年間紹介実績・利用目的
  const [annualIntros, setAnnualIntros] = useState("");
  const [purpose, setPurpose] = useState("");

  // Q7: 審査への同意
  const [agreed, setAgreed] = useState(false);

  const pct = done ? 100 : PROGRESS_VALUES[step - 1];
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail);

  function goNext() {
    setStep((s) => s + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goBack() {
    setStep((s) => s - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function toggleJobType(val: string) {
    setJobTypes((prev) => prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]);
  }

  function toggleIncomeRange(val: string) {
    setIncomeRanges((prev) => prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]);
  }

  function handleEmailChange(val: string) {
    setContactEmail(val);
    if (val) setEmailError(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val));
    else setEmailError(false);
  }

  function handleSubmit() {
    setDone(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>

        {/* Header */}
        <div className={styles.header}>
          <a href="/business" className={styles.logoWrap}>
            <img src="/images/a-logo.svg" alt="エージェントの窓口" width={120} />
          </a>
          <h1 className={styles.heading}>パートナー申し込みフォーム</h1>
          <p className={styles.subHeading}>エージェント審査へのお申し込み</p>
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
                  お申し込みありがとうございました。<br />
                  審査結果については、担当者より<br />
                  メールにてご連絡いたします。
                </p>
              </div>
            )}

            {/* Q1: 会社情報 */}
            {!done && step === 1 && (
              <div>
                <div className={styles.questionLabel}>
                  <span className={styles.qNum}>Q1</span>
                  <span className={styles.qText}>会社情報をお答えください。</span>
                </div>
                <div className={styles.qDivider} />
                <div className={styles.inputGroup}>
                  <label>会社名</label>
                  <input
                    type="text"
                    placeholder="例：株式会社〇〇キャリア"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>コンサルタント人数</label>
                  <select value={companySize} onChange={(e) => setCompanySize(e.target.value)}>
                    <option value="">選択してください</option>
                    {COMPANY_SIZE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className={styles.navButtons}>
                  <button className={styles.btnNext} disabled={!companyName || !companySize} onClick={goNext}>
                    次へ進む
                  </button>
                </div>
              </div>
            )}

            {/* Q2: 担当者情報 */}
            {!done && step === 2 && (
              <div>
                <div className={styles.questionLabel}>
                  <span className={styles.qNum}>Q2</span>
                  <span className={styles.qText}>担当者のお名前とメールアドレスをお答えください。</span>
                </div>
                <div className={styles.qDivider} />
                <div className={styles.inputGroup}>
                  <label>担当者氏名（漢字）</label>
                  <input type="text" placeholder="山田 太郎" value={contactName} onChange={(e) => setContactName(e.target.value)} />
                </div>
                <div className={styles.inputGroup}>
                  <label>フリガナ</label>
                  <input type="text" placeholder="ヤマダ タロウ" value={contactKana} onChange={(e) => setContactKana(e.target.value)} />
                </div>
                <div className={styles.inputGroup}>
                  <label>メールアドレス</label>
                  <input
                    type="email"
                    placeholder="taro@example.com"
                    value={contactEmail}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    autoComplete="email"
                  />
                  {emailError && <p className={styles.emailHint}>正しいメールアドレスの形式で入力してください。</p>}
                </div>
                <div className={styles.navButtons}>
                  <button className={styles.btnNext} disabled={!contactName || !contactKana || !isValidEmail} onClick={goNext}>次へ進む</button>
                  <button className={styles.btnBack} onClick={goBack}>前に戻る</button>
                </div>
              </div>
            )}

            {/* Q3: 電話番号・設立年 */}
            {!done && step === 3 && (
              <div>
                <div className={styles.questionLabel}>
                  <span className={styles.qNum}>Q3</span>
                  <span className={styles.qText}>電話番号と会社設立年をお答えください。</span>
                </div>
                <div className={styles.qDivider} />
                <div className={styles.inputGroup}>
                  <label>電話番号</label>
                  <input type="tel" placeholder="03-0000-0000" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className={styles.inputGroup}>
                  <label>設立年</label>
                  <input type="number" placeholder="2015" min={1900} max={new Date().getFullYear()} value={founded} onChange={(e) => setFounded(e.target.value)} />
                </div>
                <div className={styles.navButtons}>
                  <button className={styles.btnNext} disabled={!phone || !founded} onClick={goNext}>次へ進む</button>
                  <button className={styles.btnBack} onClick={goBack}>前に戻る</button>
                </div>
              </div>
            )}

            {/* Q4: 対応職種 */}
            {!done && step === 4 && (
              <div>
                <div className={styles.questionLabel}>
                  <span className={styles.qNum}>Q4</span>
                  <span className={styles.qText}>
                    対応している職種をお答えください。
                    <span className={styles.qNote}>複数選択可</span>
                  </span>
                </div>
                <div className={styles.qDivider} />
                <div className={styles.choices}>
                  {JOB_TYPE_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      className={`${styles.choiceBtn} ${jobTypes.includes(opt) ? styles.selected : ""}`}
                      onClick={() => toggleJobType(opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                <div className={styles.navButtons}>
                  <button className={styles.btnNext} disabled={jobTypes.length === 0} onClick={goNext}>次へ進む</button>
                  <button className={styles.btnBack} onClick={goBack}>前に戻る</button>
                </div>
              </div>
            )}

            {/* Q5: 対応年収帯 */}
            {!done && step === 5 && (
              <div>
                <div className={styles.questionLabel}>
                  <span className={styles.qNum}>Q5</span>
                  <span className={styles.qText}>
                    対応している求職者の年収帯をお答えください。
                    <span className={styles.qNote}>複数選択可</span>
                  </span>
                </div>
                <div className={styles.qDivider} />
                <div className={styles.choices}>
                  {INCOME_RANGE_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      className={`${styles.choiceBtn} ${incomeRanges.includes(opt) ? styles.selected : ""}`}
                      onClick={() => toggleIncomeRange(opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                <div className={styles.navButtons}>
                  <button className={styles.btnNext} disabled={incomeRanges.length === 0} onClick={goNext}>次へ進む</button>
                  <button className={styles.btnBack} onClick={goBack}>前に戻る</button>
                </div>
              </div>
            )}

            {/* Q6: 年間実績・利用目的 */}
            {!done && step === 6 && (
              <div>
                <div className={styles.questionLabel}>
                  <span className={styles.qNum}>Q6</span>
                  <span className={styles.qText}>年間紹介実績と利用目的をお答えください。</span>
                </div>
                <div className={styles.qDivider} />
                <div className={styles.inputGroup}>
                  <label>年間紹介実績（入社ベース）</label>
                  <select value={annualIntros} onChange={(e) => setAnnualIntros(e.target.value)}>
                    <option value="">選択してください</option>
                    {ANNUAL_INTRO_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className={styles.inputGroup}>
                  <label>ご利用目的</label>
                  <select value={purpose} onChange={(e) => setPurpose(e.target.value)}>
                    <option value="">選択してください</option>
                    {PURPOSE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className={styles.navButtons}>
                  <button className={styles.btnNext} disabled={!annualIntros || !purpose} onClick={goNext}>次へ進む</button>
                  <button className={styles.btnBack} onClick={goBack}>前に戻る</button>
                </div>
              </div>
            )}

            {/* Q7: 審査同意 */}
            {!done && step === 7 && (
              <div>
                <div className={styles.questionLabel}>
                  <span className={styles.qNum}>Q7</span>
                  <span className={styles.qText}>審査内容と個人情報の取り扱いをご確認ください。</span>
                </div>
                <div className={styles.qDivider} />
                <div className={styles.privacyBox}>
                  <p>お申し込みいただいた内容をもとに、弊社にて審査を行います。審査の結果、ご利用いただけない場合もございますので、あらかじめご了承ください。</p>
                  <br />
                  <p>また、<a href="#" target="_blank">個人情報の取り扱いについて</a>をご一読の上、同意いただけますようお願いいたします。</p>
                </div>
                <label className={styles.checkboxWrap}>
                  <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
                  <span>審査内容および個人情報の取り扱いに同意します。</span>
                </label>
                <div className={styles.navButtons}>
                  <button className={styles.btnSubmit} disabled={!agreed} onClick={handleSubmit}>申し込む</button>
                  <button className={styles.btnBack} onClick={goBack}>前に戻る</button>
                </div>
              </div>
            )}

          </div>
        </div>

        <p className={styles.note}>
          ご入力いただいた情報は、審査および弊社サービスの提供目的以外には使用いたしません。
        </p>
      </div>
    </div>
  );
}
