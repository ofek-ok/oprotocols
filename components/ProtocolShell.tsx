'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import {
  anatomyMap,
  mobilityExercises,
  strengthExercises,
  treatmentOptions
} from '@/lib/protocol';

const sections = [
  ['overview', 'סקירה'],
  ['anatomy', 'אנטומיה'],
  ['treatment', 'טיפול'],
  ['strength', 'חיזוק'],
  ['mobility', 'מוביליטי']
] as const;

const protocols = ['כתף','צוואר','גב תחתון','גב עליון','מרפק','שורש כף יד','ירך','ברך','קרסול'];

const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL || '#booking';

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
      { rootMargin: '-135px 0px -55% 0px', threshold: [0.15, 0.35, 0.6] }
    );

    sections.forEach(([id]) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  const jumpTo = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <Link href="/" className="brand-lockup" aria-label="OKONSKI Performance">
          <Image src="/assets/logo.png" alt="OKONSKI Performance" width={40} height={40} className="logo" priority />
          <div className="brand-text">
            <strong>OKONSKI</strong>
            <span>PERFORMANCE</span>
          </div>
        </Link>

        <nav className="topnav" aria-label="ניווט ראשי">
          <Link href="/" className="active">פרוטוקולים</Link>
          <Link href="/exercises">תרגילים</Link>
          <span>ידע <em>בקרוב</em></span>
        </nav>
      </header>

      <aside className="sidebar" aria-label="ספריית פרוטוקולים">
        <div className="sidebar-title">פרוטוקולים</div>
        {protocols.map((item, i) => (
          <button
            key={item}
            className={i === 0 ? 'side-item active' : 'side-item disabled'}
            disabled={i !== 0}
            aria-current={i === 0 ? 'page' : undefined}
          >
            <span>{item}</span>
            {i !== 0 && <small>בקרוב</small>}
          </button>
        ))}
      </aside>

      <main className="content">
        <div className="mobile-protocol-bar">
          <button
            type="button"
            onClick={() => setMobileProtocolsOpen((v) => !v)}
            aria-expanded={mobileProtocolsOpen}
          >
            <span>פרוטוקול</span>
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
            <div>
              <p className="eyebrow">פרוטוקול כתף</p>
              <h1>להבין את הכתף.<br />לטפל נכון.<br />לבנות אותה חזרה.</h1>
              <p className="hero-lead">
                מדריך מסודר להבנת המבנה האנטומי של הכתף, אפשרויות הטיפול,
                החיזוק והמוביליטי. המטרה היא לתת תמונה ברורה של מה קורה בכתף
                ומה עושים כדי להחזיר תנועה, כוח ויכולת.
              </p>
              <div className="hero-actions">
                <button onClick={() => jumpTo('anatomy')}>לאנטומיה</button>
                <a href={BOOKING_URL}>קביעת טיפול</a>
              </div>
            </div>
            <div className="hero-summary">
              <h2>מה תמצא כאן</h2>
              <ul>
                <li>מבנה הכתף והמרכיבים החשובים</li>
                <li>מה התפקיד של השרירים, הגידים והרצועות</li>
                <li>אילו אפשרויות טיפול קיימות ומתי משתמשים בהן</li>
                <li>תרגילי חיזוק עם מינון והסבר ביצוע</li>
                <li>תרגילי מוביליטי עם סרטוני הדגמה</li>
              </ul>
            </div>
          </section>

          <nav className="section-nav" aria-label="ניווט בתוך הפרוטוקול">
            {sections.map(([id, label]) => (
              <button
                key={id}
                onClick={() => jumpTo(id)}
                className={active === id ? 'active' : ''}
              >
                {label}
              </button>
            ))}
          </nav>

          <section className="protocol-section" id="anatomy">
            <div className="section-heading">
              <div>
                <span>01</span>
                <h2>אנטומיית הכתף</h2>
                <p>הכתף היא מערכת של עצמות, מפרקים, שרירים, גידים ורצועות שעובדים יחד.</p>
              </div>
            </div>

            <div className="anatomy-stage">
              <div className="anatomy-figure">
                <Image
                  src="/assets/shoulder-anatomy.png"
                  alt="איור אנטומי של הכתף"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  priority
                />
                {anatomyMap.map((item) => (
                  <span
                    className="anatomy-marker"
                    key={item.number}
                    style={{ top: item.position.top, left: item.position.left }}
                    aria-label={item.hebrew}
                  >
                    {item.number}
                  </span>
                ))}
              </div>

              <div className="anatomy-key">
                {anatomyMap.map((item) => (
                  <article key={item.number}>
                    <span className="anatomy-number">{item.number}</span>
                    <div>
                      <div className="anatomy-name-line">
                        <h3>{item.hebrew}</h3>
                        <small>{item.name}</small>
                      </div>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="protocol-section" id="treatment">
            <div className="section-heading">
              <div>
                <span>02</span>
                <h2>איך מטפלים בכתף?</h2>
                <p>
                  לא מתחילים מטכניקה. קודם מבינים מה מגביל את הכתף, ואז בוחרים את הכלים המתאימים.
                </p>
              </div>
            </div>

            <div className="treatment-list">
              {treatmentOptions.map((item, index) => (
                <article key={item.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="booking-card" id="booking">
              <div>
                <h3>רוצה לבדוק מה מגביל את הכתף שלך?</h3>
                <p>מתחילים בהערכה של תנועה, כוח ותגובה לעומס, ורק אחר כך בונים טיפול ותוכנית תרגול.</p>
              </div>
              <a href={BOOKING_URL}>קביעת טיפול</a>
            </div>
          </section>

          <section className="protocol-section" id="strength">
            <div className="section-heading">
              <div>
                <span>03</span>
                <h2>חיזוק הכתף</h2>
                <p>המטרה היא לבנות כוח ושליטה בהדרגה. לא צריך לבצע את כל התרגילים יחד.</p>
              </div>
            </div>

            <div className="exercise-list">
              {strengthExercises.map((exercise, index) => (
                <article key={exercise.name}>
                  <div className="exercise-index">{String(index + 1).padStart(2, '0')}</div>
                  <div className="exercise-main">
                    <div className="exercise-title">
                      <h3>{exercise.name}</h3>
                      <small>{exercise.target}</small>
                    </div>
                    <p>{exercise.why}</p>
                    <div className="exercise-how">
                      <strong>איך לבצע</strong>
                      <span>{exercise.execution}</span>
                    </div>
                    <div className="exercise-meta">
                      <span><small>מינון</small><b>{exercise.dose}</b></span>
                      <span><small>תדירות</small><b>{exercise.frequency}</b></span>
                    </div>
                    <a href={exercise.video} target="_blank" rel="noreferrer">סרטון הדגמה ב־YouTube</a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="protocol-section" id="mobility">
            <div className="section-heading">
              <div>
                <span>04</span>
                <h2>מוביליטי וטווח תנועה</h2>
                <p>עובדים רק על הטווחים שבאמת מוגבלים או נדרשים לתפקוד.</p>
              </div>
            </div>

            <div className="exercise-list">
              {mobilityExercises.map((exercise, index) => (
                <article key={exercise.name}>
                  <div className="exercise-index">{String(index + 1).padStart(2, '0')}</div>
                  <div className="exercise-main">
                    <div className="exercise-title">
                      <h3>{exercise.name}</h3>
                      <small>{exercise.target}</small>
                    </div>
                    <p>{exercise.why}</p>
                    <div className="exercise-how">
                      <strong>איך לבצע</strong>
                      <span>{exercise.execution}</span>
                    </div>
                    <div className="exercise-meta">
                      <span><small>מינון</small><b>{exercise.dose}</b></span>
                      <span><small>תדירות</small><b>{exercise.frequency}</b></span>
                    </div>
                    <a href={exercise.video} target="_blank" rel="noreferrer">סרטון הדגמה ב־YouTube</a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <div className="final-booking">
            <div>
              <h2>צריך עזרה עם הכתף?</h2>
              <p>אפשר להתחיל בהערכה מסודרת ולבנות תוכנית לפי מה שהכתף שלך באמת צריכה.</p>
            </div>
            <a href={BOOKING_URL}>קביעת טיפול</a>
          </div>
        </div>
      </main>

      <div className="page-progress" style={{ width: `${(progress / sections.length) * 100}%` }} />
    </div>
  );
}
