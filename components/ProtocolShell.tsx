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
  const [guideSticky, setGuideSticky] = useState(false);
  const [anatomyView, setAnatomyView] = useState<'general' | 'cuff' | 'soft'>('general');
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

  useEffect(() => {
    const guide = document.getElementById('guide-nav-anchor');
    if (!guide) return;

    const stickyObserver = new IntersectionObserver(
      ([entry]) => setGuideSticky(!entry.isIntersecting),
      { rootMargin: `-${68}px 0px 0px 0px`, threshold: 0 }
    );

    stickyObserver.observe(guide);
    return () => stickyObserver.disconnect();
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
            <div className="hero-copy-simple">
              <h1>פרוטוקול כתף</h1>
              <p className="hero-lead">
                מדריך מעשי להבנת האנטומיה של הכתף, אפשרויות הטיפול,
                תרגילי החיזוק והמוביליטי.
              </p>
              <div className="hero-actions">
                <button onClick={() => jumpTo('anatomy')}>התחל מהאנטומיה</button>
                <a href={BOOKING_URL}>קביעת טיפול</a>
              </div>
            </div>

            <div className="hero-guide" id="guide-nav-anchor">
              <h2>מה תמצא כאן</h2>
              <div className="hero-guide-links">
                {sections.slice(1).map(([id, label]) => (
                  <button key={id} onClick={() => jumpTo(id)}>
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <nav className={guideSticky ? 'section-nav sticky-visible' : 'section-nav'} aria-label="ניווט בתוך הפרוטוקול">
            {sections.slice(1).map(([id, label]) => (
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

            <div className="anatomy-tabs" role="tablist" aria-label="תצוגות אנטומיה">
              <button
                type="button"
                className={anatomyView === 'general' ? 'active' : ''}
                onClick={() => setAnatomyView('general')}
              >
                מבט כללי
              </button>
              <button
                type="button"
                className={anatomyView === 'cuff' ? 'active' : ''}
                onClick={() => setAnatomyView('cuff')}
              >
                Rotator Cuff
              </button>
              <button
                type="button"
                className={anatomyView === 'soft' ? 'active' : ''}
                onClick={() => setAnatomyView('soft')}
              >
                רצועות וגידים
              </button>
            </div>

            <div className="anatomy-stage">
              <div className="anatomy-figure">
                {anatomyView === 'general' && (
                  <>
                    <Image
                      src="/assets/shoulder-anatomy.png"
                      alt="איור אנטומי כללי של הכתף"
                      fill
                      sizes="(max-width: 900px) 100vw, 50vw"
                      priority
                    />
                    {anatomyMap
                      .filter((item) => ['1','2','3','5'].includes(String(item.number)))
                      .map((item) => (
                        <span
                          className="anatomy-marker"
                          key={item.number}
                          style={{ top: item.position.top, left: item.position.left }}
                          aria-label={item.hebrew}
                        >
                          {item.number}
                        </span>
                      ))}
                  </>
                )}

                {anatomyView === 'cuff' && (
                  <div className="anatomy-schematic">
                    <div className="schematic-caption">איור סכמטי — מבט אחורי ומבט קדמי</div>
                    <svg viewBox="0 0 760 520" role="img" aria-label="איור סכמטי של שרירי השרוול המסובב">
                      <g transform="translate(30 40)">
                        <text x="150" y="20" className="svg-view-title">מבט אחורי</text>
                        <path d="M95 95 C125 48 220 45 264 92 C294 123 289 216 248 276 C218 319 144 320 105 277 C65 232 59 148 95 95Z" className="bone"/>
                        <path d="M258 125 C322 124 337 178 324 260 C316 311 296 357 282 411" className="humerus-line"/>
                        <path d="M112 88 C145 62 221 63 249 97 L227 123 C190 105 151 106 121 126Z" className="muscle muscle-a"/>
                        <path d="M110 133 C148 113 207 117 240 143 L224 229 C190 243 151 239 118 211Z" className="muscle muscle-b"/>
                        <path d="M122 219 C153 234 193 239 222 229 L210 271 C177 280 145 271 121 252Z" className="muscle muscle-c"/>
                        <circle cx="178" cy="91" r="16" className="marker-dot"/><text x="178" y="96" textAnchor="middle" className="marker-text">4.1</text>
                        <circle cx="175" cy="170" r="16" className="marker-dot"/><text x="175" y="175" textAnchor="middle" className="marker-text">4.2</text>
                        <circle cx="174" cy="238" r="16" className="marker-dot"/><text x="174" y="243" textAnchor="middle" className="marker-text">4.3</text>
                      </g>

                      <g transform="translate(390 40)">
                        <text x="150" y="20" className="svg-view-title">מבט קדמי</text>
                        <path d="M96 95 C128 48 221 45 264 92 C296 124 289 216 248 276 C217 319 144 320 105 277 C66 233 60 149 96 95Z" className="bone"/>
                        <path d="M258 125 C322 124 338 178 324 260 C316 311 297 357 282 411" className="humerus-line"/>
                        <path d="M108 118 C145 88 214 89 247 121 C257 159 251 213 227 251 C191 262 148 251 117 225 C102 191 99 151 108 118Z" className="muscle muscle-d"/>
                        <circle cx="176" cy="177" r="16" className="marker-dot"/><text x="176" y="182" textAnchor="middle" className="marker-text">4.4</text>
                      </g>
                    </svg>
                  </div>
                )}

                {anatomyView === 'soft' && (
                  <div className="anatomy-schematic">
                    <div className="schematic-caption">איור סכמטי — מבט קדמי</div>
                    <svg viewBox="0 0 760 520" role="img" aria-label="איור סכמטי של גיד הבייספס ורצועות הכתף">
                      <g transform="translate(145 38)">
                        <path d="M155 68 C205 45 293 60 324 118 C353 173 334 256 294 309 C257 357 192 367 146 333 C98 298 79 217 96 152 C106 113 126 83 155 68Z" className="bone"/>
                        <path d="M319 133 C383 132 410 183 399 270 C392 329 369 388 352 438" className="humerus-line"/>
                        <path d="M303 111 C330 131 339 160 337 191" className="ligament-line"/>
                        <path d="M276 128 C309 153 315 190 307 227" className="ligament-line"/>
                        <path d="M344 145 C343 196 337 254 332 319" className="tendon-line"/>
                        <circle cx="336" cy="232" r="17" className="marker-dot"/><text x="336" y="237" textAnchor="middle" className="marker-text">6</text>
                        <circle cx="305" cy="163" r="17" className="marker-dot"/><text x="305" y="168" textAnchor="middle" className="marker-text">7</text>
                      </g>
                    </svg>
                  </div>
                )}
              </div>

              <div className="anatomy-key">
                {anatomyMap
                  .filter((item) => {
                    const n = String(item.number);
                    if (anatomyView === 'general') return ['1','2','3','5'].includes(n);
                    if (anatomyView === 'cuff') return n === '4' || n.startsWith('4.');
                    return ['6','7'].includes(n);
                  })
                  .map((item) => {
                    const isRotatorChild = String(item.number).includes('.');
                    return (
                      <article key={item.number} className={isRotatorChild ? 'anatomy-subitem' : undefined}>
                        <span className={isRotatorChild ? 'anatomy-number anatomy-number-sub' : 'anatomy-number'}>
                          {item.number}
                        </span>
                        <div>
                          <div className="anatomy-name-line">
                            <h3>{item.hebrew}</h3>
                            <small>{item.name}</small>
                          </div>
                          <div className="anatomy-type">{item.type}</div>
                          <p>{item.description}</p>
                        </div>
                      </article>
                    );
                  })}
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
