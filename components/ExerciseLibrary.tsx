'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { exerciseLibrary } from '@/lib/protocol';

export default function ExerciseLibrary() {
  const [q,setQ] = useState('');
  const [filter,setFilter] = useState('All');
  const filtered = useMemo(() => exerciseLibrary.filter(e => (filter==='All' || e[1]===filter) && `${e[0]} ${e[1]} ${e[2]}`.toLowerCase().includes(q.toLowerCase())), [q,filter]);
  return <main className="library-page">
    <div className="library-top"><Link href="/" className="back">→ חזרה לפרוטוקול</Link><div><small>OKONSKI PERFORMANCE</small><h1>Exercise Library</h1><p>מאגר התרגילים של ספריית הפרוטוקולים.</p></div></div>
    <div className="filters"><input value={q} onChange={e=>setQ(e.target.value)} placeholder="חיפוש תרגיל..." />{['All','Mobility','Strength','Control','Capacity'].map(f=><button onClick={()=>setFilter(f)} className={filter===f?'active':''} key={f}>{f}</button>)}</div>
    <div className="exercise-grid">{filtered.map(([name,type,area,dose,freq],i)=><article key={name}><div className="ex-no">{String(i+1).padStart(2,'0')}</div><small>{type} · {area}</small><h2>{name}</h2><div className="exercise-meta"><span><b>{dose}</b>מינון</span><span><b>{freq}</b>תדירות</span></div></article>)}</div>
  </main>
}
