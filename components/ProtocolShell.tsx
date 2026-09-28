'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { phases } from '@/lib/protocol';

const sections = [
  ['overview', 'סקירה'],
  ['anatomy', 'אנטומיה'],
  ['assessment', 'Assessment'],
  ['phases', 'שלבי הפרוטוקול'],
  ['load', 'Pain & Load'],
  ['discharge', 'Discharge']
] as const;

const protocols = ['כתף','צוואר','גב תחתון','גב עליון','מרפק','שורש כף יד','ירך','ברך','קרסול'];

export default function ProtocolShell() {
  const [active, setActive] = useState('overview');
  const [mobileProtocolsOpen, setMobileProtocolsOpen] = useState(false);
  const progress = useMemo(
    () => sections.findIndex(([id]) => id === active) + 1,
    [active]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        rootMargin: '-150px 0px -55% 0px',
        threshold: [0.12, 0.3, 0.6]
      }
    );

    sections.forEach(([id]) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  const jumpTo = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <Link href="/" className="brand-lockup" aria-label="OKONSKI Performance Protocol Library">
          <Image src="/assets/logo.png" alt="OKONSKI Performance" width={44} height={44} className="logo" priority />
          <div className="brand-text">
            <strong>OKONSKI</strong>
            <span>PERFORMANCE</span>
          </div>
        </Link>

        <nav className="topnav" aria-label="Main navigation">
          <Link href="/" className="active">Protocols</Link>
          <Link href="/exercises">Exercises</Link>
          <span className="nav-coming-soon">Knowledge <em>בקרוב</em></span>
        </nav>

        <div className="status-pill">PROTOCOL LIBRARY · V1.0</div>
      </header>

      <aside className="sidebar" aria-label="Protocol library">
        <div className="sidebar-title">PROTOCOL LIBRARY</div>
        {protocols.map((item, i) => (
          <button
            key={item}
            className={i === 0 ? 'side-item active' : 'side-item disabled'}
            disabled={i !== 0}
            aria-current={i === 0 ? 'page' : undefined}
          >
            <span className="body-icon">{i === 0 ? '●' : '○'}</span>
            <span>{item}</span>
            {i === 0 ? <span className="side-arrow">←</span> : <small>בקרוב</small>}
          </button>
        ))}
        <div className="sidebar-card">
          <span>CLINICAL PRECISION.</span>
          <span>PEAK PERFORMANCE.</span>
          <i />
        </div>
      </aside>

      <main className="content">
        <div className="mobile-protocol-bar">
          <button
            type="button"
            onClick={() => setMobileProtocolsOpen((v) => !v)}
            aria-expanded={mobileProtocolsOpen}
          >
            <span>פרוטוקול נוכחי</span>
            <strong>כתף</strong>
            <b>{mobileProtocolsOpen ? '×' : '☰'}</b>
          </button>

          {mobileProtocolsOpen && (
            <div className="mobile-protocol-menu">
              {protocols.map((item, i) => (
                <div key={item} className={i === 0 ? 'current' : 'upcoming'}>
                  <span>{item}</span>
                  <small>{i === 0 ? 'פעיל' : 'בקרוב'}</small>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="content-inner">
          <section className="hero" id="overview">
            <div className="hero-copy">
              <div className="eyebrow">SHOULDER · MASTER PROTOCOL</div>
              <h1>Shoulder <span>Protocol</span></h1>
              <h2>פרוטוקול כתף — החזרת תנועה, שליטה ויכולת העמסה</h2>
              <p>
                פרוטוקול קליני סדור המבוסס על מדדים ברורים. מתקדמים כאשר הקריטריונים מתקיימים —
                לא רק משום שעבר זמן.
              </p>

              <div className="hero-actions">
                <button onClick={() => jumpTo('assessment')}>התחל ב־Assessment</button>
                <Link href="/exercises">פתח ספריית תרגילים</Link>
              </div>

              <div className="hero-metrics">
                <div><strong>01</strong><span>Restore Motion</span></div>
                <div><strong>02</strong><span>Build Control</span></div>
                <div><strong>03</strong><span>Build Capacity</span></div>
              </div>
            </div>

            <aside className="hero-summary" aria-label="Protocol summary">
              <div className="summary-kicker">PROTOCOL AT A GLANCE</div>
              <div className="summary-row"><span>שלבים</span><strong>3</strong></div>
              <div className="summary-row"><span>Reassessment</span><strong>7–14 ימים</strong></div>
              <div className="summary-row"><span>Home plan</span><strong>עד 5 תרגילים</strong></div>
              <div className="summary-row"><span>Progression</span><strong>Criteria based</strong></div>
              <button onClick={() => jumpTo('discharge')}>ראה קריטריוני סיום</button>
            </aside>
          </section>

          <div className="section-nav" aria-label="Protocol sections">
            {sections.map(([id, label], idx) => (
              <button
                key={id}
                onClick={() => jumpTo(id)}
                className={active === id ? 'active' : ''}
                aria-current={active === id ? 'true' : undefined}
              >
                <b>{String(idx + 1).padStart(2, '0')}</b>
                {label}
              </button>
            ))}
          </div>

          <section className="overview-grid">
            <article className="panel statement-panel">
              <div className="panel-kicker">TARGET OUTCOME</div>
              <h3>הגדרת הצלחה</h3>
              <p>
                טווח תנועה מלא וסימטרי, כאב שאינו מגביל תפקוד, יכולת הפקת כוח
                וסבילות לעומס ללא החמרה ב־24 השעות שלאחר הפעילות.
              </p>
              <div className="outcome-flow">
                <span>MOVE</span><i>→</i><span>CONTROL</span><i>→</i><span>LOAD</span><i>→</i><span>PERFORM</span>
              </div>
            </article>

            <article className="panel rules-panel">
              <div className="panel-kicker">NON-NEGOTIABLES</div>
              <h3>כללי עבודה</h3>
              <ul>
                <li>אין מעבר שלב ללא קריטריוני יציאה.</li>
                <li>לא משנים יותר ממשתנה עומס אחד בכל פעם.</li>
                <li>תגובת 24 שעות קובעת את המינון הבא.</li>
                <li>תוכנית בית: עד 5 תרגילים.</li>
              </ul>
            </article>
          </section>

          <section className="protocol-section" id="anatomy">
            <div className="section-heading">
              <span>02</span>
              <div><small>UNDERSTAND THE SYSTEM</small><h3>אנטומיית הכתף</h3></div>
            </div>

            <div className="anatomy-layout">
              <div className="anatomy-image">
                <Image src="/assets/shoulder-anatomy.png" alt="Shoulder anatomy illustration" fill sizes="(max-width: 900px) 100vw, 48vw" />
                <div className="anatomy-tags">
                  <span style={{top:'17%', right:'10%'}}>Clavicle</span>
                  <span style={{top:'36%', right:'4%'}}>Rotator Cuff</span>
                  <span style={{top:'56%', right:'13%'}}>Biceps Tendon</span>
                  <span style={{top:'72%', right:'24%'}}>Humerus</span>
                </div>
              </div>

              <div className="anatomy-copy">
                <p>
                  הכתף היא מערכת משולבת של מפרקים, עצמות, גידים, רצועות ושרירים.
                  מטרת ההערכה אינה למצוא "מבנה אשם", אלא להבין מה מגביל תנועה,
                  כוח ויכולת העמסה.
                </p>
                <div className="anatomy-list">
                  {[
                    ['Glenohumeral Joint','מפרק הכתף העיקרי'],
                    ['Rotator Cuff','ארבעה שרירים המייצבים ומכוונים את ראש הזרוע'],
                    ['Scapula','בסיס התנועה של חגורת הכתפיים'],
                    ['Labrum & Capsule','מבנים התורמים ליציבות'],
                    ['Biceps Tendon','גיד העובר בחלק הקדמי של הכתף']
                  ].map(([a,b]) => (
                    <div key={a}><strong>{a}</strong><span>{b}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="protocol-section" id="assessment">
            <div className="section-heading">
              <span>03</span>
              <div><small>BASELINE</small><h3>Entry Assessment</h3></div>
            </div>

            <div className="assessment-grid">
              {[
                ['PAIN','מנוחה, תנועה, לילה, מיקום ותגובה לעומס'],
                ['ROM','Flexion · Abduction · ER · IR'],
                ['STRENGTH','ER · IR · Scaption · Push · Pull'],
                ['CONTROL','הרמה, הורדה, Upward Rotation, Winging'],
                ['FUNCTION','פעולות מוגדרות שהלקוח רוצה לבצע ללא הגבלה'],
                ['24H RESPONSE','תגובה באותו יום ובבוקר שאחרי']
              ].map(([title,text]) => (
                <article className="metric-card" key={title}>
                  <small>{title}</small>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <div className="alert-panel">
              <strong>STOP / REFER</strong>
              <span>
                טראומה משמעותית עם ירידה מיידית בתפקוד · עיוות ברור · חשד לפריקה ·
                אובדן כוח חדש · סימנים נוירולוגיים חדשים · סימנים מערכתיים חריגים
              </span>
            </div>
          </section>

          <section className="protocol-section" id="phases">
            <div className="section-heading">
              <span>04</span>
              <div><small>PROGRESSION</small><h3>שלבי הפרוטוקול</h3></div>
            </div>

            <div className="phase-stack">
              {phases.map((phase) => (
                <article className="phase-card" key={phase.number}>
                  <div className="phase-head">
                    <div className="phase-number">{phase.number}</div>
                    <div>
                      <small>{phase.eyebrow}</small>
                      <h4>{phase.title}</h4>
                      <p>{phase.summary}</p>
                    </div>
                  </div>

                  <div className="phase-body">
                    <div className="exercise-table">
                      <div className="table-row table-head">
                        <span>Exercise</span><span>Dosage</span><span>Frequency</span>
                      </div>
                      {phase.exercises.map(([name,dose,freq]) => (
                        <div className="table-row" key={name}>
                          <span data-label="Exercise">{name}</span>
                          <span data-label="Dosage">{dose}</span>
                          <span data-label="Frequency">{freq}</span>
                        </div>
                      ))}
                    </div>

                    <div className="criteria">
                      <small>EXIT CRITERIA</small>
                      {phase.criteria.map((c) => <div key={c}>✓ {c}</div>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="protocol-section load-grid" id="load">
            <article className="panel pain-panel">
              <div className="panel-kicker">PAIN MONITORING</div>
              <h3>Traffic Light System</h3>
              <div className="traffic">
                <div className="green"><b>0–2/10</b><span>ממשיכים</span></div>
                <div className="yellow"><b>3/10</b><span>ממשיכים רק אם יציב וללא החמרה</span></div>
                <div className="red"><b>4+/10</b><span>מורידים Load → Range → Volume</span></div>
              </div>
            </article>

            <article className="panel">
              <div className="panel-kicker">24-HOUR RULE</div>
              <h3>המינון הבא נקבע מחר</h3>
              <p>
                אם הכאב גבוה ביותר מ־2 נקודות מה־baseline, הטווח ירד או הפעילות
                היומיומית קשה יותר — העומס הקודם היה גבוה מדי.
              </p>
              <div className="big-rule">−20–30% <span>Volume / Resistance</span></div>
            </article>
          </section>

          <section className="protocol-section" id="discharge">
            <div className="section-heading">
              <span>06</span>
              <div><small>ENDPOINT</small><h3>Discharge Criteria</h3></div>
            </div>

            <div className="discharge-card">
              {[
                'טווח תנועה מלא וסימטרי',
                'כאב במנוחה 0/10',
                'כאב בתנועה רגילה 0–1/10',
                'אין כאב שמגביל שינה',
                'אין מגבלה בפעולות שהוגדרו בתחילת התהליך',
                'אין פער תפקודי משמעותי בכוח',
                'עומס מלא אינו גורם להחמרה ב־24 שעות',
                'הלקוח מנהל עומס באופן עצמאי'
              ].map((x,i) => (
                <div key={x}><span>{String(i+1).padStart(2,'0')}</span><p>{x}</p></div>
              ))}
            </div>
          </section>

          <footer>
            <Image src="/assets/logo.png" alt="OKONSKI Performance" width={34} height={34}/>
            <span>OKONSKI PERFORMANCE</span>
            <i />
            <small>CLINICAL PRECISION. PEAK PERFORMANCE.</small>
          </footer>
        </div>
      </main>

      <div className="page-progress" style={{width: `${(progress / sections.length) * 100}%`}} />
    </div>
  );
}
