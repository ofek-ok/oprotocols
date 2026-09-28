export const phases = [
  {
    number: '01',
    eyebrow: 'PHASE 1',
    title: 'Restore Motion',
    summary: 'החזרת טווח תנועה ושליטה בסיסית ללא החמרה בתסמינים.',
    criteria: ['טווח פעיל ≥ 90% מהצד השני', 'כאב בזמן ביצוע ≤ 3/10', 'אין החמרה מעבר ל־24 שעות'],
    exercises: [
      ['Shoulder Flexion Assisted', '2 × 12', 'פעם ביום'],
      ['Wall Slide', '2 × 10', 'פעם ביום'],
      ['Thoracic Rotation', '2 × 10 לכל צד', 'פעם ביום'],
      ['Cross Body Mobility', '3 × 30 שנ׳', 'פעם ביום'],
      ['Pec Stretch', '3 × 30 שנ׳', 'פעם ביום']
    ]
  },
  {
    number: '02',
    eyebrow: 'PHASE 2',
    title: 'Build Control',
    summary: 'בניית שליטה וכוח של השרוול המסובב, הדלתואיד ומייצבי השכמה.',
    criteria: ['טווח פעיל סימטרי', 'כאב בזמן עבודה ≤ 2/10', 'ER: ‏3 × 15 בשליטה מלאה', 'Push-Up Plus: ‏3 × 15 באיכות מלאה'],
    exercises: [
      ['External Rotation Isometric', '4 × 30 שנ׳', '3× בשבוע'],
      ['Band External Rotation', '3 × 12', '3× בשבוע'],
      ['Band Row', '3 × 12', '3× בשבוע'],
      ['Serratus Wall Slide', '3 × 10', '3× בשבוע'],
      ['Scaption', '3 × 10', '3× בשבוע'],
      ['Push-Up Plus', '3 × 12', '3× בשבוע']
    ]
  },
  {
    number: '03',
    eyebrow: 'PHASE 3',
    title: 'Build Capacity',
    summary: 'הגדלת יכולת הכתף להתמודד עם התנגדות, נפח וטווחים מלאים.',
    criteria: ['כאב ≤ 2/10 במהלך העבודה', 'אין ירידה בטווח למחרת', 'התקדמות של 5–10% בעומס בכל פעם'],
    exercises: [
      ['Dumbbell Scaption', '3 × 8–12', '3× בשבוע'],
      ['Cable / Band External Rotation', '3 × 10–15', '3× בשבוע'],
      ['Single Arm Row', '3 × 8–12', '3× בשבוע'],
      ['Incline Push-Up', '3 × 8–12', '3× בשבוע'],
      ['Landmine Press', '3 × 8–12', '3× בשבוע'],
      ['Farmer Carry', '3 × 30–60 שנ׳', '2–3× בשבוע']
    ]
  }
] as const;

export const exerciseLibrary = [
  ['Shoulder Flexion Assisted', 'Mobility', 'כתף', '2 × 12', 'פעם ביום'],
  ['Wall Slide', 'Mobility', 'כתף', '2 × 10', 'פעם ביום'],
  ['Thoracic Rotation', 'Mobility', 'בית חזה', '2 × 10/צד', 'פעם ביום'],
  ['Cross Body Mobility', 'Mobility', 'כתף', '3 × 30 שנ׳', 'פעם ביום'],
  ['Pec Stretch', 'Mobility', 'חזה', '3 × 30 שנ׳', 'פעם ביום'],
  ['External Rotation Isometric', 'Strength', 'Rotator Cuff', '4 × 30 שנ׳', '3× בשבוע'],
  ['Band External Rotation', 'Strength', 'Rotator Cuff', '3 × 12', '3× בשבוע'],
  ['Band Row', 'Strength', 'Scapula', '3 × 12', '3× בשבוע'],
  ['Serratus Wall Slide', 'Control', 'Scapula', '3 × 10', '3× בשבוע'],
  ['Scaption', 'Strength', 'Shoulder', '3 × 10', '3× בשבוע'],
  ['Push-Up Plus', 'Control', 'Serratus', '3 × 12', '3× בשבוע'],
  ['Farmer Carry', 'Capacity', 'Shoulder', '3 × 30–60 שנ׳', '2–3× בשבוע']
] as const;
