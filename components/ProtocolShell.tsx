'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { phases } from '@/lib/protocol';

const sections = [
  ['overview', 'סקירה'],
  ['anatomy', 'אנטומיה'],
  ['assessment', 'Assessment'],
  ['phases', 'שלבי הפרוטוקול'],
  ['load', 'Pain & Load'],
  ['discharge', 'Discharge']
];

export default function ProtocolShell() {
  const [active, setActive] = useState('overview');
  const progress = useMemo(() => sections.findIndex(([id]) => id === active) + 1, [active]);

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-lockup">
          <Image src="/assets/logo.png" alt="OKONSKI Performance" width={48} height={48} className="logo" priority />
          <div className="brand-text"><strong>OKONSKI</strong><span>PERFORMANCE</span></div>
        </div>
        <nav className="topnav">
          <Link href="/">Protocols</Link>
          <Link href="/exercises">Exercises</Link>
          <span>Knowledge</span>
        </nav>
        <div className="status-pill">PROTOCOL LIBRARY · V1.0</div>
      </header>

      <aside className="sidebar">
        <div className="sidebar-title">PROTOCOL LIBRARY</div>
        {['כתף','צוואר','גב תחתון','גב עליון','מרפק','שורש כף יד','ירך','ברך','קרסול'].map((item, i) => (
          <button key={item} className={i === 0 ? 'side-item active' : 'side-item'}>
            <span className="body-icon">{i === 0 ? '◉' : '○'}</span><span>{item}</span><span className="side-arrow">←</span>
          </button>
        ))}
        <div className="sidebar-card"><span>CLINICAL PRECISION.</span><span>PEAK PERFORMANCE.</span><i /></div>
      </aside>

      <main className="content">
        <section className="hero" id="overview">
          <div className="hero-copy">
            <div className="eyebrow">SHOULDER · MASTER PROTOCOL</div>
            <h1>Shoulder <span>Protocol</span></h1>
            <h2>פרוטוקול כתף — החזרת תנועה, שליטה ויכולת העמסה</h2>
            <p>פרוטוקול קליני סדור המבוסס על מדדים אובייקטיביים. ההתקדמות מתבצעת לפי קריטריונים ברורים ולא לפי זמן בלבד.</p>
            <div className="hero-metrics">
              <div><strong>01</strong><span>Restore Motion</span></div>
              <div><strong>02</strong><span>Build Control</span></div>
              <div><strong>03</strong><span>Build Capacity</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <Image src="/assets/shoulder-anatomy.png" alt="Shoulder anatomy" fill priority sizes="(max-width: 900px) 100vw, 48vw" />
            <div className="visual-gradient" />
            <div className="anatomy-tags">
              <span style={{top:'17%',right:'10%'}}>Clavicle</span>
              <span style={{top:'36%',right:'4%'}}>Rotator Cuff</span>
              <span style={{top:'56%',right:'13%'}}>Biceps Tendon</span>
              <span style={{top:'72%',right:'24%'}}>Humerus</span>
            </div>
          </div>
        </section>

        <div className="section-nav" aria-label="Protocol sections">
          {sections.map(([id,label], idx) => <button key={id} onClick={() => {setActive(id); document.getElementById(id)?.scrollIntoView({behavior:'smooth', block:'start'});}} className={active === id ? 'active' : ''}><b>{String(idx+1).padStart(2,'0')}</b>{label}</button>)}
        </div>

        <section className="overview-grid">
          <article className="panel statement-panel">
            <div className="panel-kicker">TARGET OUTCOME</div>
            <h3>הגדרת הצלחה</h3>
            <p>טווח תנועה מלא וסימטרי, כאב שאינו מגביל תפקוד, יכולת הפקת כוח וסבילות לעומס ללא החמרה ב־24 השעות שלאחר הפעילות.</p>
            <div className="outcome-flow"><span>MOVE</span><i>→</i><span>CONTROL</span><i>→</i><span>LOAD</span><i>→</i><span>PERFORM</span></div>
          </article>
          <article className="panel rules-panel">
            <div className="panel-kicker">NON-NEGOTIABLES</div>
            <h3>כללי עבודה</h3>
            <ul><li>אין מעבר שלב ללא קריטריוני יציאה.</li><li>לא משנים יותר ממשתנה עומס אחד בכל פעם.</li><li>תגובת 24 שעות קובעת את המינון הבא.</li><li>תוכנית בית: עד 5 תרגילים.</li></ul>
          </article>
        </section>

        <section className="anatomy-section" id="anatomy">
          <div className="section-heading"><span>01</span><div><small>UNDERSTAND THE SYSTEM</small><h3>אנטומיית הכתף</h3></div></div>
          <div className="anatomy-layout">
            <div className="anatomy-image"><Image src="/assets/shoulder-anatomy.png" alt="Shoulder anatomy illustration" fill sizes="50vw" /></div>
            <div className="anatomy-copy">
              <p>הכתף היא מערכת משולבת של מפרקים, עצמות, גידים, רצועות ושרירים. מטרת ההערכה אינה למצוא "מבנה אשם" אלא להבין מה מגביל תנועה, כוח ויכולת העמסה.</p>
              <div className="anatomy-list">
                {[['Glenohumeral Joint','מפרק הכתף העיקרי'],['Rotator Cuff','ארבעה שרירים המייצבים ומכוונים את ראש הזרוע'],['Scapula','בסיס התנועה של חגורת הכתפיים'],['Labrum & Capsule','מבנים התורמים ליציבות'],['Biceps Tendon','גיד העובר בחלק הקדמי של הכתף']].map(([a,b]) => <div key={a}><strong>{a}</strong><span>{b}</span></div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="assessment">
          <div className="section-heading"><span>02</span><div><small>BASELINE</small><h3>Entry Assessment</h3></div></div>
          <div className="assessment-grid">
            {[['PAIN','מנוחה, תנועה, לילה, מיקום ותגובה לעומס'],['ROM','Flexion · Abduction · ER · IR'],['STRENGTH','ER · IR · Scaption · Push · Pull'],['CONTROL','הרמה, הורדה, Upward Rotation, Winging'],['FUNCTION','פעולות מוגדרות שהלקוח רוצה לבצע ללא הגבלה'],['24H RESPONSE','תגובה באותו יום ובבוקר שאחרי']].map(([title,text]) => <article className="metric-card" key={title}><small>{title}</small><p>{text}</p></article>)}
          </div>
          <div className="alert-panel"><strong>STOP / REFER</strong><span>טראומה משמעותית עם ירידה מיידית בתפקוד · עיוות ברור · חשד לפריקה · אובדן כוח חדש · סימנים נוירולוגיים חדשים · סימנים מערכתיים חריגים</span></div>
        </section>

        <section id="phases">
          <div className="section-heading"><span>03</span><div><small>PROGRESSION</small><h3>שלבי הפרוטוקול</h3></div></div>
          <div className="phase-stack">
            {phases.map((phase) => <article className="phase-card" key={phase.number}>
              <div className="phase-head"><div className="phase-number">{phase.number}</div><div><small>{phase.eyebrow}</small><h4>{phase.title}</h4><p>{phase.summary}</p></div></div>
              <div className="phase-body">
                <div className="exercise-table"><div className="table-row table-head"><span>Exercise</span><span>Dosage</span><span>Frequency</span></div>{phase.exercises.map(([name,dose,freq]) => <div className="table-row" key={name}><span>{name}</span><span>{dose}</span><span>{freq}</span></div>)}</div>
                <div className="criteria"><small>EXIT CRITERIA</small>{phase.criteria.map(c => <div key={c}>✓ {c}</div>)}</div>
              </div>
            </article>)}
          </div>
        </section>

        <section className="load-grid" id="load">
          <article className="panel pain-panel"><div className="panel-kicker">PAIN MONITORING</div><h3>Traffic Light System</h3><div className="traffic"><div className="green"><b>0–2/10</b><span>ממשיכים</span></div><div className="yellow"><b>3/10</b><span>ממשיכים רק אם יציב וללא החמרה</span></div><div className="red"><b>4+/10</b><span>מורידים Load → Range → Volume</span></div></div></article>
          <article className="panel"><div className="panel-kicker">24-HOUR RULE</div><h3>המינון הבא נקבע מחר</h3><p>אם הכאב גבוה ביותר מ־2 נקודות מה־baseline, הטווח ירד או הפעילות היומיומית קשה יותר — העומס הקודם היה גבוה מדי.</p><div className="big-rule">−20–30% <span>Volume / Resistance</span></div></article>
        </section>

        <section id="discharge">
          <div className="section-heading"><span>04</span><div><small>ENDPOINT</small><h3>Discharge Criteria</h3></div></div>
          <div className="discharge-card">
            {['טווח תנועה מלא וסימטרי','כאב במנוחה 0/10','כאב בתנועה רגילה 0–1/10','אין כאב שמגביל שינה','אין מגבלה בפעולות שהוגדרו בתחילת התהליך','אין פער תפקודי משמעותי בכוח','עומס מלא אינו גורם להחמרה ב־24 שעות','הלקוח מנהל עומס באופן עצמאי'].map((x,i) => <div key={x}><span>{String(i+1).padStart(2,'0')}</span><p>{x}</p></div>)}
          </div>
        </section>

        <footer><Image src="/assets/logo.png" alt="OKONSKI Performance" width={34} height={34}/><span>OKONSKI PERFORMANCE</span><i/> <small>CLINICAL PRECISION. PEAK PERFORMANCE.</small></footer>
      </main>
      <div className="page-progress" style={{width:`${(progress/sections.length)*100}%`}} />
    </div>
  );
}
