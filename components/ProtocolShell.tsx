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

            <div className="anatomy-stage simple-anatomy">
              <div className="anatomy-figure">
                <Image
                  src="/assets/shoulder-anatomy.png"
                  alt="איור אנטומי של הכתף"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  priority
                />
                {anatomyMap
                  .filter((item) => ['1','2','3','5'].includes(String(item.number)))
                  .map((item) => (
                    <span
                      className="anatomy-label-marker"
                      key={item.number}
                      style={{ top: item.position.top, left: item.position.left }}
                    >
                      {item.label}
                    </span>
                  ))}
              </div>

              <div className="anatomy-key">
                {anatomyMap
                  .filter((item) => ['1','2','3','4','4.1','4.2','4.3','4.4','5','6','7'].includes(String(item.number)))
                  .map((item) => {
                    const isCuffMuscle = String(item.number).startsWith('4.');
                    return (
                      <article
                        key={item.number}
                        className={isCuffMuscle ? 'anatomy-readable-item anatomy-cuff-muscle' : 'anatomy-readable-item'}
                      >
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

            <section className="rotator-focus rotator-focus-simple" aria-labelledby="rotator-focus-title">
              <div className="rotator-focus-copy">
                <span className="rotator-focus-kicker">מבט מקרוב</span>
                <h3 id="rotator-focus-title">השרוול המסובב</h3>
                <p>
                  השרוול המסובב מורכב מארבעה שרירים. כדי שיהיה ברור איפה כל אחד נמצא,
                  כל שריר מוצג כאן בנפרד ומודגש באדום.
                </p>
              </div>

              <div className="rotator-muscle-grid">
                {[
                  {
                    name: 'Supraspinatus',
                    hebrew: 'סופרה־ספינטוס',
                    view: 'מבט מאחור',
                    src: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Supraspinatus_muscle_back.png'
                  },
                  {
                    name: 'Infraspinatus',
                    hebrew: 'אינפרה־ספינטוס',
                    view: 'מבט מאחור',
                    src: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Infraspinatus_muscle_back.png'
                  },
                  {
                    name: 'Teres Minor',
                    hebrew: 'טרס מינור',
                    view: 'מבט מאחור',
                    src: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Teres_minor_muscle_back.png'
                  },
                  {
                    name: 'Subscapularis',
                    hebrew: 'סאב־סקפולריס',
                    view: 'מבט מלפנים',
                    src: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Subscapularis_muscle_frontal2.png'
                  }
                ].map((muscle) => (
                  <article className="rotator-muscle-card" key={muscle.name}>
                    <div className="rotator-muscle-visual">
                      <Image
                        src={muscle.src}
                        alt={`${muscle.name} מודגש באדום`}
                        fill
                        unoptimized
                        sizes="(max-width: 620px) 100vw, (max-width: 1000px) 50vw, 25vw"
                      />
                    </div>
                    <div className="rotator-muscle-card-copy">
                      <small>{muscle.view}</small>
                      <strong>{muscle.name}</strong>
                      <span>{muscle.hebrew}</span>
                    </div>
                  </article>
                ))}
              </div>

              <div className="rotator-source">
                השריר המודגש באדום · BodyParts3D / Anatomography · Wikimedia Commons
              </div>
            </section>
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
