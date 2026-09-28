export const anatomyGroups = [
  {
    title: 'עצמות ומבנה גרמי',
    items: [
      ['Humerus', 'עצם הזרוע. ראש ההומרוס יוצר את המשטח הכדורי של מפרק הכתף.'],
      ['Scapula', 'השכמה מספקת את בסיס התנועה והיציבות של חגורת הכתפיים.'],
      ['Clavicle', 'עצם הבריח מחברת את חגורת הכתפיים לבית החזה ומעבירה עומס מהזרוע לגו.'],
      ['Acromion', 'שלוחה של השכמה היוצרת את הגג הגרמי מעל ראש הזרוע.'],
      ['Coracoid Process', 'נקודת אחיזה משמעותית לשרירים ורצועות בחלק הקדמי של הכתף.']
    ]
  },
  {
    title: 'מפרקים, קפסולה ולברום',
    items: [
      ['Glenohumeral Joint', 'המפרק העיקרי של הכתף. מאפשר טווח גדול מאוד ודורש שליטה שרירית גבוהה.'],
      ['AC Joint', 'המפרק בין האקרומיון לעצם הבריח. משתתף בתנועת השכמה ובהעברת עומס.'],
      ['SC Joint', 'החיבור הגרמי היחיד של חגורת הכתפיים לשלד הצירי.'],
      ['Labrum', 'טבעת סחוסית שמעמיקה את המכתש ותורמת ליציבות המפרק.'],
      ['Joint Capsule', 'מעטפת המפרק. מאפשרת תנועה אך גם מספקת יציבות פסיבית.']
    ]
  },
  {
    title: 'Rotator Cuff',
    items: [
      ['Supraspinatus', 'מסייע בהרמת הזרוע ודוחס את ראש ההומרוס למפרק במהלך העמסה.'],
      ['Infraspinatus', 'אחראי בעיקר על External Rotation ותורם לשליטה אחורית בראש הזרוע.'],
      ['Teres Minor', 'מסייע ב־External Rotation ובשליטה בזמן תנועות משיכה והרמה.'],
      ['Subscapularis', 'Rotator Cuff קדמי. אחראי בעיקר על Internal Rotation ויציבות קדמית.']
    ]
  },
  {
    title: 'שרירים ומייצבים מרכזיים',
    items: [
      ['Deltoid', 'המנוע המרכזי בהרמת הזרוע. עובד יחד עם ה־Rotator Cuff כדי לשמור על מסלול תנועה יעיל.'],
      ['Serratus Anterior', 'מסובב ומצמיד את השכמה לבית החזה, חשוב במיוחד בהרמה מעל הראש.'],
      ['Trapezius', 'Upper, Middle ו־Lower Trapezius תורמים לסיבוב, הרמה ושליטה של השכמה.'],
      ['Rhomboids', 'תורמים לשליטה במיקום השכמה ולתנועות משיכה.'],
      ['Pectoralis Major / Minor', 'משתתפים בתנועות דחיפה, קירוב וסיבוב פנימי ויכולים להשפיע על מנח חגורת הכתפיים.'],
      ['Latissimus Dorsi', 'שריר משיכה גדול המשפיע על Extension, Adduction ו־Internal Rotation.'],
      ['Long Head of Biceps', 'גיד העובר בחלק הקדמי של הכתף ותורם לתפקוד הכתף והמרפק.']
    ]
  },
  {
    title: 'רצועות ויציבות פסיבית',
    items: [
      ['Glenohumeral Ligaments', 'מערכת רצועות המסייעת להגביל תנועה עודפת בקצוות הטווח.'],
      ['Coracohumeral Ligament', 'תורמת ליציבות בחלק העליון של המפרק.'],
      ['Coracoacromial Arch', 'מבנה המורכב מהאקרומיון, הקורקואיד והרצועה ביניהם ויוצר את החלל העליון של הכתף.']
    ]
  }
] as const;

export const treatmentOptions = [
  {
    title: 'הערכה קלינית ותכנון עומס',
    level: 'CORE',
    text: 'הבסיס לכל טיפול. בודקים טווח, כוח, תנועות שמייצרות סימפטומים, תגובת עומס והמטרות התפקודיות של הלקוח. מכאן מחליטים מה צריך להפחית, לשמר ולבנות.'
  },
  {
    title: 'עיסוי וטיפול ידני',
    level: 'ADJUNCT',
    text: 'יכול לשמש להפחתת רגישות, שיפור תחושת תנועה והכנה לעבודה אקטיבית. הוא כלי עזר ולא תחליף לחיזוק והעמסה.'
  },
  {
    title: 'מוביליזציות ומתיחות',
    level: 'CORE / ADJUNCT',
    text: 'משתמשים כאשר קיימת מגבלת טווח רלוונטית. המטרה היא לשפר את התנועה הדרושה לתפקוד, לא ליצור "גמישות" כללית ללא יעד.'
  },
  {
    title: 'חיזוק והעמסה מדורגת',
    level: 'CORE',
    text: 'המרכיב המרכזי לטווח הארוך. בונים כוח של Rotator Cuff, Deltoid ומייצבי השכמה ומתקדמים לנפח, טווח ומהירות בהתאם ליכולת.'
  },
  {
    title: 'כוסות רוח',
    level: 'ADJUNCT',
    text: 'יכולות לשמש אצל חלק מהמטופלים ככלי זמני לשינוי תחושת כאב או נוקשות. אינן מחליפות תנועה, כוח והעמסה.'
  },
  {
    title: 'דיקור יבש',
    level: 'CLINICIAN ONLY',
    text: 'כלי פולשני שיכול לשמש במקרים נבחרים לשינוי קצר טווח בכאב או רגישות. מבוצע רק על ידי איש מקצוע שהוסמך לכך ובהתאם למסגרת המקצועית.'
  },
  {
    title: 'הקזת דם (Wet Cupping)',
    level: 'NOT ROUTINE',
    text: 'אינה חלק מליבת פרוטוקול הכתף ואינה מוצגת כטיפול סטנדרטי. אם נעשה בה שימוש בכלל, הוא חייב להיות במסגרת מקצועית מתאימה ולא במקום הערכה, תרגול והעמסה.'
  }
] as const;

export const strengthExercises = [
  {
    name: 'External Rotation Isometric',
    target: 'Rotator Cuff',
    dose: '4 × 30 שניות',
    frequency: '3× בשבוע',
    why: 'בניית יכולת הפקת כוח בסיבוב חיצוני ללא צורך בטווח גדול.',
    video: 'https://www.youtube.com/watch?v=cVheIBttq1o'
  },
  {
    name: 'Band External Rotation',
    target: 'Infraspinatus / Teres Minor',
    dose: '3 × 12–15',
    frequency: '3× בשבוע',
    why: 'חיזוק דינמי של External Rotation ושליטה בראש הזרוע.',
    video: 'https://www.youtube.com/results?search_query=E3+Rehab+band+shoulder+external+rotation'
  },
  {
    name: 'Scaption',
    target: 'Deltoid + Rotator Cuff',
    dose: '3 × 10–12',
    frequency: '3× בשבוע',
    why: 'חיזוק הרמת הזרוע במישור נוח ופונקציונלי לכתף.',
    video: 'https://www.youtube.com/results?search_query=physiotherapy+scaption+exercise'
  },
  {
    name: 'Push-Up Plus',
    target: 'Serratus Anterior',
    dose: '3 × 10–15',
    frequency: '3× בשבוע',
    why: 'שיפור שליטת השכמה ויכולת protraction תחת עומס.',
    video: 'https://www.youtube.com/watch?v=RFbjeyq_ZPc'
  },
  {
    name: 'Serratus Wall Slide',
    target: 'Serratus + Lower Trapezius',
    dose: '3 × 10',
    frequency: '3× בשבוע',
    why: 'בניית upward rotation ושליטה בהרמה מעל הראש.',
    video: 'https://www.youtube.com/results?search_query=serratus+wall+slide+physical+therapy'
  },
  {
    name: 'Single Arm Row',
    target: 'Scapular Retractors',
    dose: '3 × 8–12',
    frequency: '3× בשבוע',
    why: 'בניית כוח משיכה ושליטה בשכמה תחת עומס.',
    video: 'https://www.youtube.com/results?search_query=single+arm+row+physical+therapy+shoulder'
  }
] as const;

export const mobilityExercises = [
  {
    name: 'Assisted Shoulder Flexion',
    target: 'Flexion ROM',
    dose: '2 × 12',
    frequency: 'פעם ביום',
    why: 'החזרת טווח הרמה בצורה מסייעת ומבוקרת.',
    video: 'https://www.youtube.com/watch?v=WABqE7oPM1g'
  },
  {
    name: 'Wall Slide',
    target: 'Flexion + Scapular Upward Rotation',
    dose: '2 × 10',
    frequency: 'פעם ביום',
    why: 'שילוב בין טווח הכתף לתנועת השכמה.',
    video: 'https://www.youtube.com/results?search_query=shoulder+wall+slide+physical+therapy'
  },
  {
    name: 'Open Book / Thoracic Rotation',
    target: 'Thoracic Rotation',
    dose: '2 × 10 לכל צד',
    frequency: 'פעם ביום',
    why: 'שיפור תנועת בית החזה שיכולה להשפיע על תנועה מעל הראש.',
    video: 'https://www.youtube.com/watch?v=OW6YHlxY6JI'
  },
  {
    name: 'Cross Body Shoulder Stretch',
    target: 'Posterior Shoulder',
    dose: '2–3 × 30 שניות',
    frequency: 'פעם ביום',
    why: 'עבודה על טווח אופקי אחורי כאשר קיימת מגבלה רלוונטית.',
    video: 'https://www.youtube.com/results?search_query=cross+body+shoulder+stretch+physiotherapy'
  },
  {
    name: 'Doorway Pec Stretch',
    target: 'Pectoralis',
    dose: '2–3 × 30 שניות',
    frequency: 'פעם ביום',
    why: 'עבודה על רקמות קדמיות כאשר הן מגבילות את מנח חגורת הכתפיים או הטווח.',
    video: 'https://www.youtube.com/watch?v=HcUrOtmzphg'
  }
] as const;

export const phases = [
  {
    number: '01',
    eyebrow: 'שלב 1',
    title: 'החזרת טווח תנועה',
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
    eyebrow: 'שלב 2',
    title: 'בניית שליטה',
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
    eyebrow: 'שלב 3',
    title: 'בניית יכולת',
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
