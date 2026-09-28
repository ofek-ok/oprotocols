export const anatomyMap = [
  {
    number: 1,
    name: 'Clavicle',
    hebrew: 'עצם הבריח',
    type: 'עצם',
    description: 'מחברת בין בית החזה לחגורת הכתפיים ומעבירה עומס מהזרוע אל מרכז הגוף.',
    position: { top: '18%', left: '47%' }
  },
  {
    number: 2,
    name: 'Acromion',
    hebrew: 'אקרומיון',
    type: 'עצם',
    description: 'שלוחה של השכמה שיוצרת את החלק העליון של הכתף ומתחברת לעצם הבריח.',
    position: { top: '28%', left: '57%' }
  },
  {
    number: 3,
    name: 'Humerus',
    hebrew: 'עצם הזרוע',
    type: 'עצם',
    description: 'ראש עצם הזרוע יוצר עם השכמה את מפרק הכתף המרכזי.',
    position: { top: '65%', left: '57%' }
  },
  {
    number: 4,
    name: 'Rotator Cuff',
    hebrew: 'השרוול המסובב',
    type: 'קבוצת שרירים',
    description: 'קבוצה של ארבעה שרירים — Supraspinatus, Infraspinatus, Teres Minor ו־Subscapularis. יחד הם מייצבים את ראש עצם הזרוע בתוך המפרק ומאפשרים שליטה מדויקת בזמן הרמה, סיבוב והעמסה.',
    position: { top: '39%', left: '51%' }
  },
  {
    number: 5,
    name: 'Deltoid',
    hebrew: 'שריר הדלתואיד',
    type: 'שריר',
    description: 'השריר הגדול שעוטף את הכתף. אחראי בעיקר על הרמת הזרוע ופועל יחד עם ה־Rotator Cuff.',
    position: { top: '42%', left: '70%' }
  },
  {
    number: 6,
    name: 'Supraspinatus',
    hebrew: 'סופרה־ספינטוס',
    type: 'שריר',
    description: 'אחד מארבעת שרירי ה־Rotator Cuff. מסייע בתחילת הרמת הזרוע ובייצוב ראש הזרוע.',
    position: { top: '31%', left: '48%' }
  },
  {
    number: 7,
    name: 'Infraspinatus / Teres Minor',
    hebrew: 'אינפרה־ספינטוס וטרס מינור',
    type: 'שרירים',
    description: 'שני שרירים מתוך ה־Rotator Cuff. מבצעים בעיקר External Rotation ותורמים ליציבות ולשליטה בחלק האחורי של הכתף.',
    position: { top: '46%', left: '43%' }
  },
  {
    number: 8,
    name: 'Subscapularis',
    hebrew: 'סאב־סקפולריס',
    type: 'שריר',
    description: 'השריר הקדמי של ה־Rotator Cuff. מבצע בעיקר Internal Rotation ותורם ליציבות קדמית.',
    position: { top: '45%', left: '53%' }
  },
  {
    number: 9,
    name: 'Long Head of Biceps',
    hebrew: 'הגיד הארוך של הבייספס',
    type: 'גיד',
    description: 'עובר בחלק הקדמי של הכתף ומשתתף בתפקוד הכתף והמרפק.',
    position: { top: '53%', left: '61%' }
  },
  {
    number: 10,
    name: 'Glenohumeral Ligaments',
    hebrew: 'רצועות המפרק',
    type: 'רצועות',
    description: 'מסייעות לייצב את ראש הזרוע ולרסן תנועה עודפת בקצוות הטווח.',
    position: { top: '38%', left: '56%' }
  }
] as const;

export const treatmentOptions = [
  {
    title: 'הערכה ותכנון עומס',
    text: 'השלב הראשון הוא להבין מה מגביל את הכתף כרגע: כאב, טווח תנועה, כוח, שליטה או סבילות לעומס. ההערכה קובעת אילו כלים מתאימים ובאיזה סדר.'
  },
  {
    title: 'טיפול ידני ועיסוי',
    text: 'יכול לעזור להפחית רגישות ונוקשות ולשפר זמנית את תחושת התנועה. בדרך כלל משתמשים בו כדי לאפשר מעבר טוב יותר לתנועה ולתרגול אקטיבי.'
  },
  {
    title: 'מוביליזציות ומתיחות',
    text: 'מתאימות כאשר קיימת מגבלת טווח רלוונטית. המטרה היא לשפר תנועה שנדרשת בפועל ולא לייצר גמישות כללית ללא צורך.'
  },
  {
    title: 'כוסות רוח',
    text: 'יכולות לשמש ככלי משלים אצל חלק מהמטופלים לצורך שינוי זמני בתחושת כאב או נוקשות. הן אינן מחליפות חיזוק והעמסה.'
  },
  {
    title: 'דיקור יבש',
    text: 'כלי טיפולי פולשני שיכול לשמש במקרים נבחרים להפחתת כאב או רגישות מקומית. הוא מתאים רק לביצוע על ידי איש מקצוע שהוסמך לכך.'
  },
  {
    title: 'הקזת דם / Wet Cupping',
    text: 'אינה חלק שגרתי מפרוטוקול שיקום כתף. אם משתמשים בה, היא צריכה להיעשות במסגרת מקצועית מתאימה ולא במקום הערכה, תנועה וחיזוק.'
  },
  {
    title: 'חיזוק והעמסה מדורגת',
    text: 'זהו המרכיב המרכזי בבניית כתף חזקה לאורך זמן. מתקדמים מכוח בסיסי לשליטה, טווח, נפח ומהירות לפי היכולת והתגובה לעומס.'
  }
] as const;

export const strengthExercises = [
  {
    name: 'External Rotation Isometric',
    target: 'Rotator Cuff',
    dose: '4 × 30 שניות',
    frequency: '3 פעמים בשבוע',
    why: 'עבודה על כוח בסיבוב חיצוני בלי צורך בטווח תנועה גדול.',
    execution: 'מרפק צמוד לגוף, כתף נינוחה. לוחצים החוצה מול התנגדות קבועה בלי להזיז את הזרוע.',
    video: 'https://www.youtube.com/results?search_query=external+rotation+isometric+shoulder+exercise'
  },
  {
    name: 'Band External Rotation',
    target: 'Infraspinatus / Teres Minor',
    dose: '3 × 12–15',
    frequency: '3 פעמים בשבוע',
    why: 'חיזוק דינמי של הסיבוב החיצוני ושליטת ה־Rotator Cuff.',
    execution: 'המרפק נשאר קרוב לגוף. מסובבים את האמה החוצה בלי לפצות עם הגב או השכמה.',
    video: 'https://www.youtube.com/results?search_query=band+shoulder+external+rotation+exercise'
  },
  {
    name: 'Scaption',
    target: 'Deltoid + Rotator Cuff',
    dose: '3 × 10–12',
    frequency: '3 פעמים בשבוע',
    why: 'חיזוק הרמת הזרוע במישור שמתאים לעבודה טבעית של הכתף והשכמה.',
    execution: 'מרימים את הזרוע מעט קדימה מקו הגוף, בשליטה, בלי להרים את הכתף לכיוון האוזן.',
    video: 'https://www.youtube.com/results?search_query=scaption+exercise+shoulder'
  },
  {
    name: 'Push-Up Plus',
    target: 'Serratus Anterior',
    dose: '3 × 10–15',
    frequency: '3 פעמים בשבוע',
    why: 'שיפור שליטת השכמה ויכולת לדחוף אותה קדימה תחת עומס.',
    execution: 'מבצעים שכיבת סמיכה או גרסה על קיר, ובסיום ממשיכים לדחוף את בית החזה מהמשטח בלי לכופף מרפקים.',
    video: 'https://www.youtube.com/results?search_query=push+up+plus+serratus+exercise'
  },
  {
    name: 'Serratus Wall Slide',
    target: 'Serratus Anterior',
    dose: '3 × 10',
    frequency: '3 פעמים בשבוע',
    why: 'תרגול של upward rotation ושליטה בשכמה בזמן הרמת הידיים.',
    execution: 'האמות על הקיר. מחליקים כלפי מעלה תוך שמירה על לחץ קל לקיר וללא קשת מוגזמת בגב.',
    video: 'https://www.youtube.com/results?search_query=serratus+wall+slide+exercise'
  },
  {
    name: 'Single Arm Row',
    target: 'Scapular Retractors',
    dose: '3 × 8–12',
    frequency: '3 פעמים בשבוע',
    why: 'בניית כוח משיכה ושליטה בחגורת הכתפיים תחת עומס.',
    execution: 'מושכים את המרפק לאחור תוך שמירה על בית חזה יציב ותנועה חלקה של השכמה.',
    video: 'https://www.youtube.com/results?search_query=single+arm+row+shoulder+rehab'
  }
] as const;

export const mobilityExercises = [
  {
    name: 'Assisted Shoulder Flexion',
    target: 'Flexion',
    dose: '2 × 12',
    frequency: 'פעם ביום',
    why: 'החזרת טווח הרמה בעזרת תמיכה של היד השנייה או מקל.',
    execution: 'עולים לטווח נוח ומבוקר בלי לדחוף דרך כאב חד או פיצוי משמעותי.',
    video: 'https://www.youtube.com/results?search_query=assisted+shoulder+flexion+exercise'
  },
  {
    name: 'Wall Slide',
    target: 'Flexion + Scapular Upward Rotation',
    dose: '2 × 10',
    frequency: 'פעם ביום',
    why: 'משלב תנועה של הזרוע והשכמה ומאפשר לתרגל הרמה באופן נשלט.',
    execution: 'מחליקים את הידיים על הקיר כלפי מעלה תוך שמירה על נשימה ותנועה חלקה.',
    video: 'https://www.youtube.com/results?search_query=shoulder+wall+slide+exercise'
  },
  {
    name: 'Open Book',
    target: 'Thoracic Rotation',
    dose: '2 × 10 לכל צד',
    frequency: 'פעם ביום',
    why: 'שיפור תנועת בית החזה שיכולה להשפיע על היכולת להגיע מעל הראש.',
    execution: 'שוכבים על הצד עם ברכיים כפופות ומסובבים את בית החזה והזרוע העליונה לאחור בלי להזיז את האגן.',
    video: 'https://www.youtube.com/results?search_query=open+book+thoracic+rotation+exercise'
  },
  {
    name: 'Cross Body Shoulder Stretch',
    target: 'Posterior Shoulder',
    dose: '2–3 × 30 שניות',
    frequency: 'פעם ביום',
    why: 'יכול להתאים כאשר קיימת מגבלה בתנועה אופקית או תחושת נוקשות בחלק האחורי של הכתף.',
    execution: 'מקרבים את הזרוע לרוחב החזה בעזרת היד השנייה, בלי לסובב את כל הגוף.',
    video: 'https://www.youtube.com/results?search_query=cross+body+shoulder+stretch'
  },
  {
    name: 'Doorway Pec Stretch',
    target: 'Pectoralis',
    dose: '2–3 × 30 שניות',
    frequency: 'פעם ביום',
    why: 'יכול להתאים כאשר רקמות קדמיות מגבילות את מנח חגורת הכתפיים או את הטווח.',
    execution: 'מניחים אמה על המשקוף ומסובבים את הגוף בעדינות עד שמרגישים מתיחה בחזה.',
    video: 'https://www.youtube.com/results?search_query=doorway+pec+stretch'
  }
] as const;

export const exerciseLibrary = [
  ['Shoulder Flexion Assisted', 'Mobility', 'כתף', '2 × 12', 'פעם ביום'],
  ['Wall Slide', 'Mobility', 'כתף', '2 × 10', 'פעם ביום'],
  ['Open Book', 'Mobility', 'בית חזה', '2 × 10 לכל צד', 'פעם ביום'],
  ['Cross Body Shoulder Stretch', 'Mobility', 'כתף', '2–3 × 30 שניות', 'פעם ביום'],
  ['Doorway Pec Stretch', 'Mobility', 'חזה', '2–3 × 30 שניות', 'פעם ביום'],
  ['External Rotation Isometric', 'Strength', 'Rotator Cuff', '4 × 30 שניות', '3 פעמים בשבוע'],
  ['Band External Rotation', 'Strength', 'Rotator Cuff', '3 × 12–15', '3 פעמים בשבוע'],
  ['Serratus Wall Slide', 'Control', 'Scapula', '3 × 10', '3 פעמים בשבוע'],
  ['Scaption', 'Strength', 'Shoulder', '3 × 10–12', '3 פעמים בשבוע'],
  ['Push-Up Plus', 'Control', 'Serratus Anterior', '3 × 10–15', '3 פעמים בשבוע'],
  ['Single Arm Row', 'Strength', 'Scapula', '3 × 8–12', '3 פעמים בשבוע']
] as const;
