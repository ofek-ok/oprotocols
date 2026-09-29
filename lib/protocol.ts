export const anatomyMap = [
  {
    number: '1',
    label: 'עצם הבריח',
    name: 'Clavicle',
    hebrew: 'עצם הבריח',
    type: 'עצם',
    description: 'מחברת בין בית החזה לחגורת הכתפיים ומעבירה עומס מהזרוע אל מרכז הגוף.',
    position: { top: '18%', left: '47%' }
  },
  {
    number: '2',
    label: 'אקרומיון',
    name: 'Acromion',
    hebrew: 'אקרומיון',
    type: 'עצם',
    description: 'שלוחה של השכמה שיוצרת את החלק העליון של הכתף ומתחברת לעצם הבריח.',
    position: { top: '27%', left: '59%' }
  },
  {
    number: '3',
    label: 'עצם הזרוע',
    name: 'Humerus',
    hebrew: 'עצם הזרוע',
    type: 'עצם',
    description: 'ראש עצם הזרוע יוצר עם השכמה את מפרק הכתף המרכזי.',
    position: { top: '67%', left: '58%' }
  },
  {
    number: '4',
    label: 'השרוול המסובב',
    name: 'Rotator Cuff',
    hebrew: 'השרוול המסובב',
    type: 'קבוצת שרירים',
    description: 'השרוול המסובב (Rotator Cuff) הוא קבוצה של ארבעה שרירים קטנים שעוטפים את מפרק הכתף. יחד הם מייצבים את ראש עצם הזרוע ומאפשרים שליטה טובה בזמן הרמה, סיבוב והעמסה.',
    position: { top: '39%', left: '51%' }
  },
  {
    number: '4.1',
    label: 'Supraspinatus',
    parent: '4',
    name: 'Supraspinatus',
    hebrew: 'סופרה־ספינטוס',
    type: 'שריר',
    description: 'אחד מארבעת שרירי השרוול המסובב. עובר בחלק העליון של השכמה ומסייע בתחילת הרמת הזרוע ובייצוב ראש עצם הזרוע.',
    position: { top: '30%', left: '47%' }
  },
  {
    number: '4.2',
    label: 'Infraspinatus',
    parent: '4',
    name: 'Infraspinatus',
    hebrew: 'אינפרה־ספינטוס',
    type: 'שריר',
    description: 'אחד מארבעת שרירי השרוול המסובב. נמצא בחלק האחורי של השכמה ומסייע בעיקר בסיבוב חיצוני של הזרוע ובשליטה האחורית של ראש הזרוע.',
    position: { top: '43%', left: '42%' }
  },
  {
    number: '4.3',
    label: 'Teres Minor',
    parent: '4',
    name: 'Teres Minor',
    hebrew: 'טרס מינור',
    type: 'שריר',
    description: 'אחד מארבעת שרירי השרוול המסובב. מסייע בסיבוב חיצוני של הזרוע ובייצוב המפרק בזמן תנועה.',
    position: { top: '49%', left: '45%' }
  },
  {
    number: '4.4',
    label: 'Subscapularis',
    parent: '4',
    name: 'Subscapularis',
    hebrew: 'סאב־סקפולריס',
    type: 'שריר',
    description: 'אחד מארבעת שרירי השרוול המסובב. נמצא בצד הקדמי של השכמה, מבצע בעיקר סיבוב פנימי ותורם ליציבות הקדמית של מפרק הכתף.',
    position: { top: '44%', left: '54%' }
  },
  {
    number: '5',
    label: 'Deltoid',
    name: 'Deltoid',
    hebrew: 'שריר הדלתואיד',
    type: 'שריר',
    description: 'השריר הגדול שעוטף את הכתף. אחראי בעיקר על הרמת הזרוע ופועל יחד עם השרוול המסובב.',
    position: { top: '43%', left: '70%' }
  },
  {
    number: '6',
    label: 'גיד הבייספס',
    name: 'Long Head of Biceps',
    hebrew: 'הגיד הארוך של הבייספס',
    type: 'גיד',
    description: 'עובר בחלק הקדמי של הכתף ומשתתף בתפקוד הכתף והמרפק.',
    position: { top: '54%', left: '62%' }
  },
  {
    number: '7',
    label: 'רצועות המפרק',
    name: 'Glenohumeral Ligaments',
    hebrew: 'רצועות המפרק',
    type: 'רצועות',
    description: 'מסייעות לייצב את ראש הזרוע ולרסן תנועה עודפת בקצוות הטווח.',
    position: { top: '37%', left: '58%' }
  }
] as const;


export const shoulderStructure = {
  bones: [
    {
      name: 'Clavicle',
      hebrew: 'עצם הבריח',
      text: 'מחברת בין עצם החזה לשכמה ומהווה חלק מחגורת הכתפיים.'
    },
    {
      name: 'Scapula',
      hebrew: 'עצם השכמה',
      text: 'הבסיס שעליו יושבים חלק גדול משרירי הכתף. תנועתה חיונית להרמת היד.'
    },
    {
      name: 'Humerus',
      hebrew: 'עצם הזרוע',
      text: 'ראש עצם הזרוע מתחבר לשכמה ויוצר את המפרק המרכזי של הכתף.'
    },
    {
      name: 'Acromion',
      hebrew: 'אקרומיון',
      text: 'שלוחה של השכמה שמרכיבה את החלק העליון של הכתף ומתחברת לעצם הבריח.'
    },
    {
      name: 'Coracoid Process',
      hebrew: 'הזיז הקורקואידי',
      text: 'זיז קדמי של השכמה המשמש נקודת חיבור לשרירים ולרצועות.'
    },
    {
      name: 'Glenoid',
      hebrew: 'המשטח המפרקי של השכמה',
      text: 'המשטח הרדוד שאליו מתחבר ראש עצם הזרוע.'
    },
    {
      name: 'Spine of Scapula',
      hebrew: 'קוץ השכמה',
      text: 'רכס גרמי בחלק האחורי של השכמה שמחלק בין אזורי שרירים חשובים.'
    }
  ],
  joints: [
    {
      name: 'Glenohumeral Joint',
      hebrew: 'המפרק הגלנוהומרלי',
      text: 'המפרק העיקרי של הכתף. מאפשר טווח תנועה גדול מאוד של הזרוע.'
    },
    {
      name: 'AC Joint',
      hebrew: 'מפרק אקרומיוקלביקולרי',
      text: 'החיבור בין האקרומיון לעצם הבריח.'
    },
    {
      name: 'SC Joint',
      hebrew: 'מפרק סטרנוקלביקולרי',
      text: 'החיבור בין עצם הבריח לעצם החזה. מחבר את חגורת הכתפיים לשלד המרכזי.'
    },
    {
      name: 'Scapulothoracic Articulation',
      hebrew: 'תנועת השכמה על בית החזה',
      text: 'אינה מפרק קלאסי, אבל חיונית לקצב ולשליטה של תנועת הכתף.'
    }
  ],
  passive: [
    {
      name: 'Joint Capsule',
      hebrew: 'קופסית המפרק',
      text: 'מעטפת רקמתית שמקיפה את המפרק ותורמת ליציבות תוך שמירה על חופש תנועה.'
    },
    {
      name: 'Glenoid Labrum',
      hebrew: 'הלברום',
      text: 'טבעת סחוסית שמעמיקה את השקע המפרקי ותורמת ליציבות.'
    },
    {
      name: 'Glenohumeral Ligaments',
      hebrew: 'הרצועות הגלנוהומרליות',
      text: 'מערכת רצועות שמגבילה תנועה עודפת ותומכת ביציבות המפרק.'
    },
    {
      name: 'Coracoacromial Ligament',
      hebrew: 'הרצועה הקורקואקרומיאלית',
      text: 'מחברת בין הזיז הקורקואידי לאקרומיון ויוצרת חלק מהקשת שמעל ראש הזרוע.'
    },
    {
      name: 'Subacromial Bursa',
      hebrew: 'הבורסה התת־אקרומיאלית',
      text: 'שק נוזלי קטן שמפחית חיכוך בין רקמות באזור העליון של הכתף.'
    }
  ]
} as const;

export const anteriorShoulderMuscles = [
  {
    name: 'Anterior Deltoid',
    hebrew: 'החלק הקדמי של הדלתואיד',
    location: 'בחלק הקדמי והחיצוני של הכתף.',
    function: 'מסייע בהרמת הזרוע קדימה ובסיבוב פנימי.'
  },
  {
    name: 'Subscapularis',
    hebrew: 'סאב־סקפולריס',
    location: 'על המשטח הקדמי של השכמה, עמוק מאחורי בית החזה.',
    function: 'מבצע בעיקר סיבוב פנימי ומייצב את ראש עצם הזרוע מלפנים.'
  },
  {
    name: 'Pectoralis Major',
    hebrew: 'החזה הגדול',
    location: 'נפרש מבית החזה אל עצם הזרוע ועובר בחלק הקדמי של הכתף.',
    function: 'מקרב את הזרוע לגוף, מסובב אותה פנימה ומסייע בתנועות דחיפה.'
  },
  {
    name: 'Pectoralis Minor',
    hebrew: 'החזה הקטן',
    location: 'עמוק מתחת לחזה הגדול ומתחבר לזיז הקורקואידי של השכמה.',
    function: 'משפיע על מנח ותנועת השכמה.'
  },
  {
    name: 'Long Head of Biceps',
    hebrew: 'הראש הארוך של הבייספס',
    location: 'הגיד עובר בחלק הקדמי של הכתף דרך החריץ הבין־גבשושי.',
    function: 'משתתף בכיפוף המרפק וגם תורם לתפקוד וליציבות של הכתף.'
  },
  {
    name: 'Coracobrachialis',
    hebrew: 'קורקוברכיאליס',
    location: 'יוצא מהזיז הקורקואידי ועובר בחלק הפנימי־קדמי של הזרוע.',
    function: 'מסייע בכיפוף ובקירוב הזרוע.'
  },
  {
    name: 'Serratus Anterior',
    hebrew: 'המסור הקדמי',
    location: 'לאורך הצלעות בצד בית החזה ומתחבר לשוליים הפנימיים של השכמה.',
    function: 'מצמיד את השכמה לבית החזה ומסייע בסיבוב שלה כלפי מעלה.'
  }
] as const;

export const posteriorShoulderMuscles = [
  {
    name: 'Posterior Deltoid',
    hebrew: 'החלק האחורי של הדלתואיד',
    location: 'בחלק האחורי־חיצוני של הכתף.',
    function: 'מסייע בהבאת הזרוע לאחור ובתנועה אופקית לאחור.'
  },
  {
    name: 'Infraspinatus',
    hebrew: 'אינפרה־ספינטוס',
    location: 'בחלק האחורי של השכמה, מתחת לקוץ השכמה.',
    function: 'מבצע בעיקר סיבוב חיצוני ותורם לייצוב האחורי של ראש הזרוע.'
  },
  {
    name: 'Teres Minor',
    hebrew: 'טרס מינור',
    location: 'בחלק האחורי של השכמה, מתחת לאינפרה־ספינטוס.',
    function: 'מסייע בסיבוב חיצוני ובייצוב הכתף.'
  },
  {
    name: 'Teres Major',
    hebrew: 'טרס מייג׳ור',
    location: 'בחלק התחתון־אחורי של השכמה.',
    function: 'מסייע בקירוב הזרוע, הורדתה וסיבובה פנימה.'
  },
  {
    name: 'Latissimus Dorsi',
    hebrew: 'הרחב גבי',
    location: 'שריר גדול של הגב שמתחבר לחלק הקדמי של עצם הזרוע.',
    function: 'מסייע במשיכה, קירוב, הורדת הזרוע וסיבוב פנימי.'
  },
  {
    name: 'Trapezius',
    hebrew: 'טרפז',
    location: 'מהצוואר והגב העליון אל השכמה ועצם הבריח.',
    function: 'שולט בהרמה, הורדה, קירוב וסיבוב כלפי מעלה של השכמה.'
  },
  {
    name: 'Rhomboids',
    hebrew: 'רומבואידים',
    location: 'בין עמוד השדרה לשכמה.',
    function: 'מקרבים ומייצבים את השכמה לכיוון עמוד השדרה.'
  },
  {
    name: 'Levator Scapulae',
    hebrew: 'מרים השכמה',
    location: 'מהצוואר אל הזווית העליונה של השכמה.',
    function: 'מרים את השכמה ומשפיע על מנחה.'
  },
  {
    name: 'Long Head of Triceps',
    hebrew: 'הראש הארוך של הטרייספס',
    location: 'יוצא מהשכמה ועובר מאחורי הזרוע.',
    function: 'מסייע ביישור המרפק וגם בתנועת הזרוע לאחור ובקירובה.'
  }
] as const;

export const shoulderFunction = [
  {
    title: 'תנועה ויציבות יחד',
    text: 'לכתף יש טווח תנועה גדול מאוד, ולכן היא תלויה בתיאום מתמשך בין שרירים, גידים, רצועות והמפרקים.'
  },
  {
    title: 'השרוול המסובב ממרכז את ראש הזרוע',
    text: 'ארבעת שרירי השרוול המסובב מייצבים את ראש עצם הזרוע בתוך השקע בזמן שהשרירים הגדולים מייצרים תנועה וכוח.'
  },
  {
    title: 'השכמה חייבת לנוע',
    text: 'הרמת היד דורשת תנועה מתואמת של עצם הזרוע ושל השכמה על בית החזה. Trapezius ו־Serratus Anterior מרכזיים בתהליך הזה.'
  },
  {
    title: 'השרירים הגדולים מייצרים כוח',
    text: 'Deltoid, Pectoralis Major, Latissimus Dorsi ושרירים נוספים מייצרים את עיקר הכוח בתנועות דחיפה, משיכה והרמה.'
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
