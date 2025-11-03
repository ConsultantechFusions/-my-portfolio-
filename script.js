// Translation dictionaries for English and Arabic.
const translations = {
  en: {
    hero_title: 'Mostafa Abu El Yazeid',
    hero_subtitle: 'Elite Google Developer & AI Pioneer',
    who_title: 'Who I Am',
    who_body:
      "I am a seasoned developer with more than a decade of experience, building innovative solutions using advanced technologies like Google’s Gemini API. Since joining the Google Developer Program, I have earned over twenty badges, reflecting my leadership at the forefront of AI and cloud innovation. My mission is to push the boundaries of technology and inspire others to do the same.",
    badges_title: 'Google Badges',
  },
  ar: {
    hero_title: 'مصطفى أبو اليزيد',
    hero_subtitle: 'مطور جوجل النخبة ورائد الذكاء الاصطناعي',
    who_title: 'من أنا',
    who_body:
      'أنا مطور متمرس مع أكثر من عقد من الخبرة في بناء حلول مبتكرة باستخدام تقنيات متقدمة مثل واجهة جيميني من جوجل. منذ انضمامي إلى برنامج مطوري جوجل، حصلت على أكثر من عشرين شارة، مما يعكس قيادتي في طليعة الابتكار السحابي والذكاء الاصطناعي. مهمتي هي دفع حدود التقنية وإلهام الآخرين لفعل الشيء نفسه.',
    badges_title: 'شارات جوجل',
  },
};

// Badge definitions. Each badge includes image path and multilingual text.
const badges = [
  {
    image: 'assets/badges/B_01.png',
    title_en: 'Fall 2025 The Android Show',
    title_ar: 'عرض أندرويد لخريف 2025',
    date_en: 'Nov 2 2025',
    date_ar: '٢ نوفمبر ٢٠٢٥',
    desc_en:
      'Attended the Fall 2025 Android Show to absorb deep‑dive content on modern Android development and performance optimisation.',
    desc_ar:
      'حضرت عرض أندرويد لخريف ٢٠٢٥ للاستفادة من المحتوى المتعمق حول تطوير أندرويد الحديث وتحسين الأداء.',
    category: 'event',
  },
  {
    image: 'assets/badges/B_02.png',
    title_en: 'Learning Milestone',
    title_ar: 'إنجاز تعليمي',
    date_en: 'Nov 2 2025',
    date_ar: '٢ نوفمبر ٢٠٢٥',
    desc_en:
      'Participated in a learning session to explore new Google technologies and celebrate early progress.',
    desc_ar:
      'شاركت في جلسة تعليمية لاستكشاف تقنيات جوجل الجديدة والاحتفال بالتقدم المبكر.',
    category: 'learning',
  },
  {
    image: 'assets/badges/B_03.png',
    title_en: 'Google Developer Group discovery',
    title_ar: 'اكتشاف مجموعة مطوري جوجل',
    date_en: 'Oct 30 2025',
    date_ar: '٣٠ أكتوبر ٢٠٢٥',
    desc_en: 'Discovered the Google Developer Group community and connected with local developers.',
    desc_ar: 'اكتشفت مجتمع مجموعة مطوري جوجل وتواصلت مع المطورين المحليين.',
    category: 'community',
  },
  {
    image: 'assets/badges/B_04.png',
    title_en: 'Google Developer Group on‑Campus member',
    title_ar: 'عضو مجموعة مطوري جوجل في الحرم الجامعي',
    date_en: 'Oct 30 2025',
    date_ar: '٣٠ أكتوبر ٢٠٢٥',
    desc_en: 'Joined the on‑campus developer group to collaborate with peers and share knowledge.',
    desc_ar: 'انضممت إلى مجموعة مطوري جوجل في الحرم الجامعي للتعاون مع الزملاء ومشاركة المعرفة.',
    category: 'community',
  },
  {
    image: 'assets/badges/B_05.png',
    title_en: 'Google Developer Group member',
    title_ar: 'عضو مجموعة مطوري جوجل',
    date_en: 'Oct 29 2025',
    date_ar: '٢٩ أكتوبر ٢٠٢٥',
    desc_en: 'Became a member of the Google Developer Group, fostering collaboration and community.',
    desc_ar: 'أصبحت عضوًا في مجموعة مطوري جوجل لتعزيز التعاون والمجتمع.',
    category: 'community',
  },
  {
    image: 'assets/badges/B_06.png',
    title_en: 'Firebase Studio Developer Community',
    title_ar: 'مجتمع مطوري Firebase Studio',
    date_en: 'Jul 21 2025',
    date_ar: '٢١ يوليو ٢٠٢٥',
    desc_en: 'Engaged with the Firebase Studio developer community to build real‑time applications.',
    desc_ar: 'انخرطت مع مجتمع مطوري Firebase Studio لبناء تطبيقات في الزمن الحقيقي.',
    category: 'community',
  },
  {
    image: 'assets/badges/B_07.png',
    title_en: 'Gemini Code Assist agents Private Preview',
    title_ar: 'معاينة خاصة لوكلاء Gemini Code Assist',
    date_en: 'Jul 21 2025',
    date_ar: '٢١ يوليو ٢٠٢٥',
    desc_en: 'Invited to the private preview of Gemini Code Assist agents, experimenting with AI‑assisted coding.',
    desc_ar: 'دعيت إلى المعاينة الخاصة لوكلاء مساعد كود جيميني، وتجربة البرمجة المدعومة بالذكاء الاصطناعي.',
    category: 'learning',
  },
  {
    image: 'assets/badges/B_08.png',
    title_en: 'Google Cloud & NVIDIA community member',
    title_ar: 'عضو مجتمع جوجل كلاود وإنفيديا',
    date_en: 'Jul 21 2025',
    date_ar: '٢١ يوليو ٢٠٢٥',
    desc_en: 'Joined the Google Cloud and NVIDIA community to explore GPU‑accelerated cloud workflows.',
    desc_ar: 'انضممت إلى مجتمع جوجل كلاود وإنفيديا لاستكشاف عمليات السحابة المعتمدة على المعالجات الرسومية.',
    category: 'community',
  },
  {
    image: 'assets/badges/B_09.png',
    title_en: 'Google Maps Platform Innovators',
    title_ar: 'مبتكرو منصة خرائط جوجل',
    date_en: 'Jul 21 2025',
    date_ar: '٢١ يوليو ٢٠٢٥',
    desc_en: 'Part of the Google Maps Platform Innovators programme, gaining early access to mapping APIs.',
    desc_ar: 'جزء من برنامج مبتكري منصة خرائط جوجل للحصول على وصول مبكر إلى واجهات برمجة الخرائط.',
    category: 'innovation',
  },
  {
    image: 'assets/badges/B_10.png',
    title_en: 'Women Techmakers member',
    title_ar: 'عضو Women Techmakers',
    date_en: 'Jul 21 2025',
    date_ar: '٢١ يوليو ٢٠٢٥',
    desc_en: 'Support diversity and mentor peers through the Women Techmakers programme.',
    desc_ar: 'أدعم التنوع وأرشد الزملاء من خلال برنامج Women Techmakers.',
    category: 'community',
  },
  {
    image: 'assets/badges/B_11.png',
    title_en: 'Google Developer Experts follower',
    title_ar: 'متابع خبراء مطوري جوجل',
    date_en: 'Jul 16 2025',
    date_ar: '١٦ يوليو ٢٠٢٥',
    desc_en: 'Follow the Google Developer Experts community to stay inspired by industry leaders.',
    desc_ar: 'أتابع مجتمع خبراء مطوري جوجل للبقاء ملهمًا من قبل قادة المجال.',
    category: 'community',
  },
  {
    image: 'assets/badges/B_12.png',
    title_en: 'Developer Explorer',
    title_ar: 'مستكشف المطور',
    date_en: 'May 7 2025',
    date_ar: '٧ مايو ٢٠٢٥',
    desc_en: 'Explored new developer tools and resources, expanding technical horizons.',
    desc_ar: 'استكشفت أدوات وموارد المطورين الجديدة، مما وسّع الآفاق التقنية.',
    category: 'learning',
  },
  {
    image: 'assets/badges/B_13.png',
    title_en: 'Started the AI‑powered Travel app solution',
    title_ar: 'بدأت حل تطبيق السفر المدعوم بالذكاء الاصطناعي',
    date_en: 'Apr 12 2025',
    date_ar: '١٢ أبريل ٢٠٢٥',
    desc_en: 'Initiated the AI‑powered travel app project, laying the foundation for personalised itineraries.',
    desc_ar: 'بدأت مشروع تطبيق السفر المدعوم بالذكاء الاصطناعي، ووضع أساس المسارات الشخصية.',
    category: 'project',
  },
  {
    image: 'assets/badges/B_14.png',
    title_en: 'Explored the AI‑powered Travel app solution',
    title_ar: 'استكشاف حل تطبيق السفر المدعوم بالذكاء الاصطناعي',
    date_en: 'Apr 12 2025',
    date_ar: '١٢ أبريل ٢٠٢٥',
    desc_en: 'Researched feasibility and design for the AI‑powered travel app solution.',
    desc_ar: 'بحثت في جدوى وتصميم حل تطبيق السفر المدعوم بالذكاء الاصطناعي.',
    category: 'project',
  },
  {
    image: 'assets/badges/B_15.png',
    title_en: 'Launched the code for the AI‑powered Travel app solution',
    title_ar: 'إطلاق الشفرة لحل تطبيق السفر المدعوم بالذكاء الاصطناعي',
    date_en: 'Apr 12 2025',
    date_ar: '١٢ أبريل ٢٠٢٥',
    desc_en: 'Launched the code base for the AI‑powered travel app solution, marking a key milestone.',
    desc_ar: 'أطلقت قاعدة الشفرة لحل تطبيق السفر المدعوم بالذكاء الاصطناعي، مما يمثل محطة رئيسية.',
    category: 'project',
  },
  {
    image: 'assets/badges/B_16.png',
    title_en: 'I/O 2025 – Registered',
    title_ar: 'مسجل في I/O 2025',
    date_en: 'Apr 12 2025',
    date_ar: '١٢ أبريل ٢٠٢٥',
    desc_en: 'Registered for Google I/O 2025 to gain insights into future technologies.',
    desc_ar: 'سجلت لحضور Google I/O 2025 للحصول على رؤى حول تقنيات المستقبل.',
    category: 'event',
  },
  {
    image: 'assets/badges/B_17.png',
    title_en: 'Google Cloud Innovator',
    title_ar: 'مبتكر جوجل كلاود',
    date_en: 'Apr 6 2025',
    date_ar: '٦ أبريل ٢٠٢٥',
    desc_en: 'Recognised as a Google Cloud Innovator for expertise in cloud technologies.',
    desc_ar: 'حصلت على لقب مبتكر جوجل كلاود لخبرتي في تقنيات السحابة.',
    category: 'innovation',
  },
  {
    image: 'assets/badges/B_18.png',
    title_en: 'Next 25 Attendee',
    title_ar: 'حضور مؤتمر نكست 25',
    date_en: 'Apr 6 2025',
    date_ar: '٦ أبريل ٢٠٢٥',
    desc_en: 'Participated in Google Cloud Next ’25, engaging with the latest trends.',
    desc_ar: 'شاركت في مؤتمر جوجل كلاود نكست 25، واطلعت على أحدث الاتجاهات.',
    category: 'event',
  },
];

// Current language state. Start with English.
let currentLang = 'en';

// Utility to play a short sound using the Web Audio API.
function playSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(660, ctx.currentTime); // A pleasant tone
    gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
    osc.connect(gainNode).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.15);
  } catch (e) {
    // Audio context might fail on unsupported browsers
  }
}

// Render the badges grid based on current language.
function renderBadges() {
  const grid = document.getElementById('badge-grid');
  grid.innerHTML = '';
  badges.forEach((badge) => {
    const card = document.createElement('div');
    card.className = 'badge-card';
    // Create image element
    const img = document.createElement('img');
    img.src = badge.image;
    img.alt = badge.title_en;
    card.appendChild(img);
    // Title
    const title = document.createElement('div');
    title.className = 'badge-title';
    title.textContent = currentLang === 'ar' ? badge.title_ar : badge.title_en;
    card.appendChild(title);
    // Date
    const date = document.createElement('div');
    date.className = 'badge-date';
    date.textContent = currentLang === 'ar' ? badge.date_ar : badge.date_en;
    card.appendChild(date);
    // Description
    const desc = document.createElement('div');
    desc.className = 'badge-desc';
    desc.textContent = currentLang === 'ar' ? badge.desc_ar : badge.desc_en;
    card.appendChild(desc);
    // Toggle on click
    card.addEventListener('click', (e) => {
      card.classList.toggle('active');
      playSound();
    });
    grid.appendChild(card);
  });
}

// Update all translatable text in the document.
function updateLanguage() {
  const html = document.documentElement;
  html.lang = currentLang;
  html.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  // Update button label
  const toggle = document.getElementById('lang-toggle');
  toggle.textContent = currentLang === 'ar' ? 'English' : 'عربي';
  // Iterate over elements with data-key
  document.querySelectorAll('[data-key]').forEach((el) => {
    const key = el.getAttribute('data-key');
    const translation = translations[currentLang][key];
    if (translation) {
      el.textContent = translation;
    }
  });
  // Re-render badges
  renderBadges();
}

// Initialize page when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Set up language toggle
  document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    updateLanguage();
    playSound();
  });
  // Initial render
  updateLanguage();
});