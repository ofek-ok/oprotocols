'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { exerciseLibrary } from '@/lib/protocol';

const filters = ['All','Mobility','Strength','Control','Capacity'] as const;
const filterLabels: Record<(typeof filters)[number], string> = {
  All: 'הכול',
  Mobility: 'מוביליטי',
  Strength: 'חיזוק',
  Control: 'שליטה',
  Capacity: 'יכולת'
};

export default function ExerciseLibrary() {
  const [q, setQ] = useState('');
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');

  const filtered = useMemo(
    () =>
      exerciseLibrary.filter(
        (e) =>
          (filter === 'All' || e[1] === filter) &&
          `${e[0]} ${e[1]} ${e[2]}`.toLowerCase().includes(q.trim().toLowerCase())
      ),
    [q, filter]
  );

  return (
    <div className="library-shell">
      <header className="topbar library-header">
        <Link href="/" className="brand-lockup" aria-label="OKONSKI Performance Protocol Library">
          <Image src="/assets/logo.png" alt="OKONSKI Performance" width={44} height={44} className="logo" priority />
          <div className="brand-text">
            <strong>OKONSKI</strong>
            <span>PERFORMANCE</span>
          </div>
        </Link>

        <nav className="topnav" aria-label="Main navigation">
          <Link href="/">פרוטוקולים</Link>
          <Link href="/exercises" className="active">תרגילים</Link>
          <span className="nav-coming-soon">ידע <em>בקרוב</em></span>
        </nav>

        
      </header>

      <main className="library-page">
        <section className="library-hero">
          <div>
            <small>OKONSKI PERFORMANCE · ספריית תרגילים</small>
            <h1>ספריית תרגילים</h1>
            <p>
              מאגר התרגילים של הפרוטוקולים. חפש לפי שם, אזור או סוג תרגיל וקבל
              מיד את המינון והתדירות שנקבעו בפרוטוקול.
            </p>
          </div>
          <Link href="/" className="back">חזרה לפרוטוקול ←</Link>
        </section>

        <section className="library-controls" aria-label="Exercise filters">
          <div className="search-wrap">
            <label htmlFor="exercise-search">חיפוש</label>
            <input
              id="exercise-search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="לדוגמה: External Rotation, כתף, Scapula..."
            />
          </div>

          <div className="filter-wrap">
            <span>סוג תרגיל</span>
            <div className="filters">
              {filters.map((f) => (
                <button
                  type="button"
                  onClick={() => setFilter(f)}
                  className={filter === f ? 'active' : ''}
                  key={f}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </section>

        <div className="library-results-bar">
          <span>{filtered.length} תרגילים</span>
          {(q || filter !== 'All') && (
            <button
              type="button"
              onClick={() => {
                setQ('');
                setFilter('All');
              }}
            >
              איפוס סינון
            </button>
          )}
        </div>

        {filtered.length > 0 ? (
          <section className="exercise-grid" aria-live="polite">
            {filtered.map(([name,type,area,dose,freq],i) => (
              <article key={name} className="exercise-card">
                <div className="exercise-card-top">
                  <div>
                    <small>{type}</small>
                    <span>{area}</span>
                  </div>
                  <div className="ex-no">{String(i + 1).padStart(2,'0')}</div>
                </div>

                <h2>{name}</h2>

                <div className="exercise-meta">
                  <span><small>מינון</small><b>{dose}</b></span>
                  <span><small>תדירות</small><b>{freq}</b></span>
                </div>

                <div className="exercise-card-foot">
                  <span>משויך לפרוטוקול כתף</span>
                </div>
              </article>
            ))}
          </section>
        ) : (
          <section className="empty-state">
            <strong>לא נמצאו תרגילים</strong>
            <p>נסה חיפוש אחר או אפס את הסינון.</p>
            <button
              type="button"
              onClick={() => {
                setQ('');
                setFilter('All');
              }}
            >
              הצג את כל התרגילים
            </button>
          </section>
        )}
      </main>
    </div>
  );
}
