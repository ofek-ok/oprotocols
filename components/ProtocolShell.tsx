'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import {
  anatomyGroups,
  mobilityExercises,
  phases,
  strengthExercises,
  treatmentOptions
} from '@/lib/protocol';

const sections = [
  ['overview', 'סקירה'],
  ['anatomy', 'אנטומיה'],
  ['treatment', 'טיפול'],
  ['strength', 'חיזוק'],
  ['mobility', 'מוביליטי'],
  ['load', 'כאב ועומס']
] as const;

const protocols = ['כתף','צוואר','גב תחתון','גב עליון','מרפק','שורש כף יד','ירך','ברך','קרסול'];

const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL || '#booking';

const treatmentLevelLabels: Record<string, string> = {
  'CORE': 'ליבת התהליך',
  'ADJUNCT': 'כלי משלים',
  'CORE / ADJUNCT': 'ליבה / כלי משלים',
  'CLINICIAN ONLY': 'מקצועי בלבד',
  'NOT ROUTINE': 'לא טיפול שגרתי'
};

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
          <Link href="/" className="active">פרוטוקולים</Link>
          <Link href="/exercises">תרגילים</Link>
          <span className="nav-coming-soon">ידע <em>בקרוב</em></span>
        </nav>

        
      </header>

      <aside className="sidebar" aria-label="Protocol library">
        <div className="sidebar-title">פרוטוקולים</div>
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
          <span>דיוק קליני.</span>
          <span>ביצועים מיטביים.</span>
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
              <div className="eyebrow">כתף · מדריך מקצועי</div>
              <h1>פרוטוקול <span>כתף</span></h1>
              <h2>להבין את הכתף, לטפל בה ולבנות אותה מחדש</h2>
              <p>
                מדריך מלא לכתף: המבנה האנטומי, תפקיד השרירים והמפרקים, אפשרויות טיפול,
                חיזוק, מוביליטי וניהול עומס. המטרה היא לא רק להפחית כאב — אלא להחזיר
                לכתף יכולת תנועה, כוח וסבילות לעומס.
              </p>

              <div className="hero-actions">
                <button onClick={() => jumpTo('anatomy')}>התחל מהאנטומיה</button>
                <a href={BOOKING_URL}>קביעת טיפול</a>
              </div>

              <div className="hero-metrics">
                <div><strong>01</strong><span>הבנה</span></div>
                <div><strong>02</strong><span>טיפול</span></div>
                <div><strong>03</strong><span>בנייה מחדש</span></div>
              </div>
            </div>

            <aside className="hero-summary" aria-label="Protocol summary">
              <div className="summary-kicker">מה כולל המדריך</div>
              <div className="summary-row"><span>אנטומיה</span><strong>עצמות · מפרקים · שרירים</strong></div>
              <div className="summary-row"><span>טיפול</span><strong>ליבה + כלים משלימים</strong></div>
              <div className="summary-row"><span>חיזוק</span><strong>{strengthExercises.length} תרגילים</strong></div>
              <div className="summary-row"><span>מוביליטי</span><strong>{mobilityExercises.length} תרגילים</strong></div>
              <button onClick={() => jumpTo('strength')}>עבור לתרגילים</button>
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
              <div className="panel-kicker">מה הכתף צריכה</div>
              <h3>תנועה + שליטה + כוח + עומס</h3>
              <p>
                הכתף בנויה לטווח תנועה גדול. כדי שהיא תעבוד היטב היא צריכה שילוב בין
                תנועתיות של המפרק והשכמה, שליטה של השרוול המסובב, כוח של השרירים
                שסביבה ויכולת להתמודד עם עומס חוזר.
              </p>
              <div className="outcome-flow">
                <span>תנועה</span><i>→</i><span>שליטה</span><i>→</i><span>עומס</span><i>→</i><span>ביצוע</span>
              </div>
            </article>

            <article className="panel rules-panel">
              <div className="panel-kicker">עיקרון חשוב</div>
              <h3>אין טיפול אחד שמתאים לכולם</h3>
              <p>
                כאב כתף יכול להגיע ממקורות שונים ולהגיב אחרת לעומס. טיפול טוב מתחיל
                בהערכה וממשיך בבחירת הכלים הרלוונטיים — לא באוסף קבוע של טכניקות.
              </p>
            </article>
          </section>

          <section className="protocol-section" id="anatomy">
            <div className="section-heading">
              <span>02</span>
              <div><small>הבנת המבנה</small><h3>אנטומיית הכתף</h3></div>
            </div>

            <div className="anatomy-layout expanded">
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
                <div className="panel-kicker">מבנה הכתף</div>
                <h4>לא מפרק אחד — מערכת שלמה</h4>
                <p>
                  הכתף היא מערכת שמחברת בין הזרוע, השכמה, עצם הבריח ובית החזה.
                  טווח התנועה הגדול שלה נוצר בזכות שילוב בין מבנה גרמי, קפסולה,
                  רצועות ושליטה שרירית דינמית.
                </p>
              </div>
            </div>

            <div className="anatomy-groups">
              {anatomyGroups.map((group, groupIndex) => (
                <article className="anatomy-group" key={group.title}>
                  <div className="anatomy-group-head">
                    <span>{String(groupIndex + 1).padStart(2,'0')}</span>
                    <h4>{group.title}</h4>
                  </div>
                  <div className="anatomy-structure-list">
                    {group.items.map(([name, text]) => (
                      <div key={name}>
                        <strong>{name}</strong>
                        <p>{text}</p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="protocol-section" id="treatment">
            <div className="section-heading">
              <span>03</span>
              <div><small>אפשרויות טיפול</small><h3>איך מטפלים בכתף?</h3></div>
            </div>

            <div className="treatment-intro">
              <div>
                <h4>הטיפול נבחר לפי מה שמצאנו בהערכה</h4>
                <p>
                  המטרה של טיפול אינה "לשחרר" מבנה אחד, אלא להפחית מגבלות רלוונטיות,
                  לשפר תנועה ולבנות יכולת. חלק מהכלים הם ליבת התהליך וחלקם יכולים
                  לשמש כתוספת זמנית.
                </p>
              </div>
              <div className="treatment-legend">
                <span className="core">ליבת התהליך</span><b>המרכיב המרכזי</b>
                <span className="adjunct">כלי משלים</span><b>תוספת לפי צורך</b>
                <span className="clinician">מקצועי בלבד</span><b>לביצוע על ידי איש מקצוע מוסמך</b>
              </div>
            </div>

            <div className="treatment-grid">
              {treatmentOptions.map((item) => (
                <article className="treatment-card" key={item.title}>
                  <span className={'treatment-level ' + item.level.toLowerCase().replaceAll(' ','-').replaceAll('/','-')}>
                    {treatmentLevelLabels[item.level] ?? item.level}
                  </span>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <div className="booking-card" id="booking">
              <div>
                <small>OKONSKI PERFORMANCE · הערכת כתף</small>
                <h4>רוצה לבדוק מה מגביל את הכתף שלך?</h4>
                <p>
                  טיפול מתחיל בהערכה של תנועה, כוח ותגובה לעומס, ולאחריה בניית תוכנית
                  שמתאימה לממצאים שלך.
                </p>
              </div>
              <a href={BOOKING_URL}>קביעת טיפול ←</a>
            </div>
          </section>

          <section className="protocol-section" id="strength">
            <div className="section-heading">
              <span>04</span>
              <div><small>בניית כוח ויכולת</small><h3>חיזוק הכתף</h3></div>
            </div>

            <div className="exercise-section-intro">
              <h4>לא עושים את כל התרגילים יחד</h4>
              <p>
                בוחרים את התרגילים לפי הטווח, הכוח והתגובה לעומס. המינונים כאן הם
                נקודת פתיחה כללית לפרוטוקול וניתנים לשינוי בהתאם להערכה.
              </p>
            </div>

            <div className="protocol-exercise-grid">
              {strengthExercises.map((exercise, i) => (
                <article className="protocol-exercise-card" key={exercise.name}>
                  <div className="protocol-exercise-top">
                    <span>{String(i + 1).padStart(2,'0')}</span>
                    <small>{exercise.target}</small>
                  </div>
                  <h4>{exercise.name}</h4>
                  <p>{exercise.why}</p>
                  <div className="protocol-exercise-meta">
                    <div><small>מינון</small><strong>{exercise.dose}</strong></div>
                    <div><small>תדירות</small><strong>{exercise.frequency}</strong></div>
                  </div>
                  <a href={exercise.video} target="_blank" rel="noreferrer">צפה בסרטון YouTube ↗</a>
                </article>
              ))}
            </div>

            <div className="phase-note">
              <span>התקדמות קלינית</span>
              <p>
                ככל שהשליטה והכוח משתפרים, עוברים בהדרגה מהפעלת כוח בסיסית לעומס,
                טווח, נפח ומהירות גבוהים יותר.
              </p>
            </div>

            <div className="phase-stack compact-phases">
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
                  <div className="criteria inline-criteria">
                    <small>EXIT CRITERIA</small>
                    {phase.criteria.map((c) => <div key={c}>✓ {c}</div>)}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="protocol-section" id="mobility">
            <div className="section-heading">
              <span>05</span>
              <div><small>החזרת טווח תנועה</small><h3>מוביליטי וגמישות לכתף</h3></div>
            </div>

            <div className="exercise-section-intro">
              <h4>מוביליטי הוא כלי להשגת טווח נדרש</h4>
              <p>
                אין צורך למתוח כל מבנה בכתף. עובדים על טווחים או אזורים שמגבילים
                בפועל את התנועה הרלוונטית.
              </p>
            </div>

            <div className="protocol-exercise-grid mobility-cards">
              {mobilityExercises.map((exercise, i) => (
                <article className="protocol-exercise-card" key={exercise.name}>
                  <div className="protocol-exercise-top">
                    <span>{String(i + 1).padStart(2,'0')}</span>
                    <small>{exercise.target}</small>
                  </div>
                  <h4>{exercise.name}</h4>
                  <p>{exercise.why}</p>
                  <div className="protocol-exercise-meta">
                    <div><small>מינון</small><strong>{exercise.dose}</strong></div>
                    <div><small>תדירות</small><strong>{exercise.frequency}</strong></div>
                  </div>
                  <a href={exercise.video} target="_blank" rel="noreferrer">צפה בסרטון YouTube ↗</a>
                </article>
              ))}
            </div>
          </section>

          <section className="protocol-section load-grid" id="load">
            <article className="panel pain-panel">
              <div className="panel-kicker">מעקב כאב</div>
              <h3>שיטת הרמזור</h3>
              <div className="traffic">
                <div className="green"><b>0–2/10</b><span>ממשיכים</span></div>
                <div className="yellow"><b>3/10</b><span>ממשיכים רק אם יציב וללא החמרה</span></div>
                <div className="red"><b>4+/10</b><span>מורידים Load → Range → Volume</span></div>
              </div>
            </article>

            <article className="panel">
              <div className="panel-kicker">כלל 24 השעות</div>
              <h3>המינון הבא נקבע גם לפי מחר</h3>
              <p>
                אם הכאב גבוה ביותר מ־2 נקודות מה־baseline, הטווח ירד או הפעילות
                היומיומית קשה יותר — העומס הקודם היה גבוה מדי.
              </p>
              <div className="big-rule">−20–30% <span>Volume / Resistance</span></div>
            </article>
          </section>

          <div className="final-booking">
            <div>
              <small>OKONSKI PERFORMANCE</small>
              <h3>לא בטוח מאיפה להתחיל?</h3>
              <p>הערכה מסודרת מאפשרת לבחור את הטיפול והתרגילים לפי הכתף שלך.</p>
            </div>
            <a href={BOOKING_URL}>קביעת טיפול</a>
          </div>

          <footer>
            <Image src="/assets/logo.png" alt="OKONSKI Performance" width={34} height={34}/>
            <span>OKONSKI PERFORMANCE</span>
            <i />
            <small>טיפול מדויק. תנועה טובה יותר. ביצועים טובים יותר.</small>
          </footer>
        </div>
      </main>

      <div className="page-progress" style={{width: `${(progress / sections.length) * 100}%`}} />
    </div>
  );
}
