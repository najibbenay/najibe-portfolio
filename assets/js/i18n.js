"use strict";

/*
 * Simple FR / EN / AR translation for the portfolio.
 * - French is the default: it is read from the HTML itself (no duplication).
 * - Every element with data-i18n="key" gets the translated content.
 * - Translations are static strings written here (never user input),
 *   so using innerHTML for the <br> / <span> tags is safe.
 */

const TRANSLATIONS = {
  en: {
    "meta.title": "Najibe Benay | Full Stack Developer",
    "meta.description": "Portfolio of Najibe Benay, Full Stack developer in Tangier: projects, skills and background.",

    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.journey": "Journey",
    "nav.certs": "Certifications",
    "nav.contactLink": "Contact",
    "nav.contact": 'Contact me <span aria-hidden="true">→</span>',

    "hero.status": "Open to opportunities · Tangier",
    "hero.title": "Full Stack Developer.<br>Web applications<br><span>that are clear and useful.</span>",
    "hero.desc": "I build websites and web applications with React, Node.js and PostgreSQL: responsive interfaces, REST APIs and secure dashboards.",
    "hero.note": "ISTA Tinghir graduate, 2026 · Based in Tangier",
    "btn.projects": 'See my projects <span aria-hidden="true">→</span>',
    "btn.cv": 'Download my CV <span aria-hidden="true">↓</span>',
    "feat.front": "Front-end<br><small>React · Tailwind</small>",
    "feat.back": "Back-end<br><small>Node · Express</small>",
    "feat.db": "Database<br><small>PostgreSQL</small>",
    "feat.sec": "Security<br><small>JWT authentication</small>",
    "badge.role": "Full Stack Developer",

    "skills.label": "My skills",
    "skills.title": "A complete skill set<br>from front-end to back-end.",
    "skills.intro": "The technologies and tools I use to build web applications, from the interface to the database.",
    "sk.front.t": "Front-End",
    "sk.front.p": "Modern, responsive interfaces.",
    "sk.back.t": "Back-End",
    "sk.back.p": "REST APIs, business logic and security.",
    "sk.db.t": "Databases",
    "sk.db.p": "Data modeling and management.",
    "sk.tools.t": "Tools",
    "sk.tools.p": "Version control, API testing and organization.",
    "about.label": "About",
    "about.title": "Who am I?",
    "about.intro": "I'm <span>Najibe Benay</span>, a junior Full Stack developer based in Tangier.",
    "about.p1": "I hold a Specialized Technician Diploma in Digital Development, Web Full Stack option (ISTA Tinghir, 2026). I build complete web applications: React interfaces, REST APIs with Node.js and Express, and PostgreSQL databases.",
    "about.p2": "As a freelancer, I spent 2 months building the showcase website and admin area of AMECO Professionnel. I'm now looking for a first job or an internship to keep growing within a team.",
    "about.stat1": "Full Stack projects",
    "about.stat2n": "2 months",
    "about.stat2": "freelance assignment",
    "about.stat3n": "2 years",
    "about.stat3": "of development training",
    "about.city": "Tangier, Morocco",
    "about.open": "Open to opportunities",
    "about.langs": "Arabic · French · English",
    "about.levels": "Native · Intermediate · Intermediate",
    "about.goal": "My goal",
    "about.goalText": "A first job or internship in full stack web development.",

    "projects.label": "My projects",
    "projects.title": "From need to code,<br>projects that come to life.",
    "btn.github": 'See my GitHub <span aria-hidden="true">↗</span>',
    "filter.all": "All",
    "filter.site": "Websites",
    "filter.app": "Applications",
    "board.title": "Ideas turned into applications.",
    "board.sub": "The challenge, the solution and the result of each project.",
    "case.challenge": "The challenge",
    "case.solution": "The solution",
    "case.result": "The result",
    "p1.meta": "Professional hygiene · Freelance · Tangier",
    "p1.challenge": "A professional hygiene products brand with no website to showcase its catalog and receive quote requests.",
    "p1.solution": "A multilingual showcase site (FR / EN / AR) and an admin area secured with JWT: quotes, products, statistics and Excel export.",
    "p1.result": "Website and admin area built in 2 months, as a freelancer.",
    "p1.status": "Client project",
    "p1.link": "See the assignment →",
    "p2.meta": "E-commerce · Personal project",
    "p2.challenge": "Tracking orders, stock and customers when a shop sells via WhatsApp, without a central tool.",
    "p2.solution": "A single dashboard: orders, stock, customers, status tracking and sales statistics, with data isolated per shop.",
    "p2.result": "Working application, code available on GitHub.",
    "btn.code": 'View the code <span aria-hidden="true">↗</span>',

    "journey.label": "My journey",
    "journey.title": "Experience and education.",
    "journey.intro": "A freelance assignment, an internship, a degree in digital development and a baccalaureate.",
    "j1.title": "Freelance Full Stack Developer",
    "j1.place": "AMECO Professionnel, Tangier · 2 months",
    "j1.text": "Worked with the client to define the needs, then built a showcase site and an admin area: REST API with Node.js, Express and PostgreSQL, quote requests and WhatsApp contact.",
    "j1.strong": "From the client's needs to the final product.",
    "j1.link": "See the project →",
    "j2.title": "IT Intern",
    "j2.place": "Kelaat M'Gouna Municipality · April – May 2026",
    "j2.text": "Took part in the municipality's IT and digital activities: managing digital data and documents, IT tools and technical support.",
    "j2.strong": "A first experience in an administrative environment.",
    "j3.title": "Specialized Technician in Digital Development",
    "j3.place": "ISTA Tinghir · 2024 – 2026",
    "j3.text": "Two-year program in digital development, Web Full Stack option.",
    "j3.strong": "Graduated in 2026.",
    "j4.title": "Baccalaureate in Physical Sciences",
    "j4.place": "Lycée El Worod · 2024",
    "j4.text": "Secondary education, Physical Sciences track.",
    "j4.strong": "Baccalaureate obtained in 2024.",

    "certs.label": "Certifications",
    "certs.title": "Additional training.",
    "certs.intro": "Two guided projects completed on Coursera.",
    "c1.meta": "Programming · October 2026",
    "c1.text": "Guided introduction to Python programming.",
    "c2.meta": "Web development · October 2026",
    "c2.text": "Building and customizing a WordPress site.",
    "btn.cert": 'View certificate <span aria-hidden="true">↗</span>',

    "contact.label": "Contact",
    "contact.title": "An opportunity or a project?<br><span>Let's talk.</span>",
    "contact.desc": "I'm available to talk about an internship, a job or a web project.",
    "btn.whatsapp": 'Contact me on WhatsApp <span aria-hidden="true">↗</span>',
    "contact.email": "Email",
    "contact.location": "Location",
    "footer.top": "Back to top ↑"
  },

  ar: {
    "meta.title": "Najibe Benay | مطوّر Full Stack",
    "meta.description": "معرض أعمال Najibe Benay، مطوّر Full Stack في طنجة: المشاريع والمهارات والمسار.",

    "nav.home": "الرئيسية",
    "nav.about": "من أنا",
    "nav.skills": "المهارات",
    "nav.projects": "المشاريع",
    "nav.journey": "المسار",
    "nav.certs": "الشهادات",
    "nav.contactLink": "تواصل",
    "nav.contact": 'تواصل معي <span aria-hidden="true">←</span>',

    "hero.status": "متاح لفرص العمل · طنجة",
    "hero.title": "مطوّر Full Stack.<br>تطبيقات ويب<br><span>واضحة ومفيدة.</span>",
    "hero.desc": "أصمّم وأطوّر مواقع وتطبيقات ويب باستخدام React وNode.js وPostgreSQL: واجهات متجاوبة، وواجهات REST API، ولوحات تحكم آمنة.",
    "hero.note": "خرّيج ISTA تنغير 2026 · مقيم في طنجة",
    "btn.projects": 'شاهد مشاريعي <span aria-hidden="true">←</span>',
    "btn.cv": 'تحميل سيرتي الذاتية <span aria-hidden="true">↓</span>',
    "feat.front": "الواجهة الأمامية<br><small>React · Tailwind</small>",
    "feat.back": "الواجهة الخلفية<br><small>Node · Express</small>",
    "feat.db": "قاعدة البيانات<br><small>PostgreSQL</small>",
    "feat.sec": "الأمان<br><small>مصادقة JWT</small>",
    "badge.role": "مطوّر Full Stack",

    "skills.label": "مهاراتي",
    "skills.title": "مهارات متكاملة<br>من الواجهة الأمامية إلى الخلفية.",
    "skills.intro": "التقنيات والأدوات التي أستخدمها لبناء تطبيقات الويب، من الواجهة إلى قاعدة البيانات.",
    "sk.front.t": "الواجهة الأمامية",
    "sk.front.p": "واجهات حديثة ومتجاوبة.",
    "sk.back.t": "الواجهة الخلفية",
    "sk.back.p": "واجهات REST API، منطق العمل والأمان.",
    "sk.db.t": "قواعد البيانات",
    "sk.db.p": "نمذجة البيانات وإدارتها.",
    "sk.tools.t": "الأدوات",
    "sk.tools.p": "إدارة الإصدارات، اختبار الواجهات البرمجية والتنظيم.",
    "about.label": "من أنا",
    "about.title": "من أكون؟",
    "about.intro": "أنا <span>Najibe Benay</span>، مطوّر Full Stack مبتدئ مقيم في طنجة.",
    "about.p1": "حاصل على دبلوم تقني متخصص في التطوير الرقمي، تخصص Web Full Stack (ISTA تنغير، 2026). أطوّر تطبيقات ويب متكاملة: واجهات بـ React، وواجهات REST API بـ Node.js وExpress، وقواعد بيانات PostgreSQL.",
    "about.p2": "كعمل حر، أنجزت خلال شهرين الموقع التعريفي ولوحة الإدارة لـ AMECO Professionnel. أبحث الآن عن أول وظيفة أو تدريب لمواصلة التطور ضمن فريق عمل.",
    "about.stat1": "مشاريع Full Stack",
    "about.stat2n": "شهران",
    "about.stat2": "من العمل الحر",
    "about.stat3n": "سنتان",
    "about.stat3": "من التكوين في التطوير",
    "about.city": "طنجة، المغرب",
    "about.open": "متاح لفرص العمل",
    "about.langs": "العربية · الفرنسية · الإنجليزية",
    "about.levels": "اللغة الأم · متوسط · متوسط",
    "about.goal": "هدفي",
    "about.goalText": "أول وظيفة أو تدريب في تطوير الويب Full Stack.",

    "projects.label": "مشاريعي",
    "projects.title": "من الحاجة إلى الكود،<br>مشاريع تتحوّل إلى واقع.",
    "btn.github": 'حسابي على GitHub <span aria-hidden="true">↖</span>',
    "filter.all": "الكل",
    "filter.site": "مواقع ويب",
    "filter.app": "تطبيقات",
    "board.title": "أفكار تحوّلت إلى تطبيقات.",
    "board.sub": "التحدي والحل والنتيجة لكل مشروع.",
    "case.challenge": "التحدي",
    "case.solution": "الحل",
    "case.result": "النتيجة",
    "p1.meta": "منتجات النظافة المهنية · عمل حر · طنجة",
    "p1.challenge": "علامة تجارية لمنتجات النظافة المهنية بدون موقع ويب لعرض منتجاتها واستقبال طلبات عروض الأسعار.",
    "p1.solution": "موقع تعريفي متعدد اللغات (FR / EN / AR) ولوحة إدارة مؤمّنة بـ JWT: عروض الأسعار، المنتجات، الإحصائيات والتصدير إلى Excel.",
    "p1.result": "تم إنجاز الموقع ولوحة الإدارة في شهرين، كعمل حر.",
    "p1.status": "مشروع لعميل",
    "p1.link": "تفاصيل المهمة ←",
    "p2.meta": "تجارة إلكترونية · مشروع شخصي",
    "p2.challenge": "تتبّع الطلبات والمخزون والعملاء عندما يبيع متجر عبر واتساب، دون أداة مركزية.",
    "p2.solution": "لوحة تحكم واحدة: الطلبات، المخزون، العملاء، تتبّع الحالات وإحصائيات المبيعات، مع فصل بيانات كل متجر.",
    "p2.result": "تطبيق يعمل، والكود متاح على GitHub.",
    "btn.code": 'عرض الكود <span aria-hidden="true">↖</span>',

    "journey.label": "مساري",
    "journey.title": "الخبرة والتكوين.",
    "journey.intro": "مهمة كعمل حر، وتدريب، ودبلوم في التطوير الرقمي، وشهادة الباكالوريا.",
    "j1.title": "مطوّر Full Stack مستقل",
    "j1.place": "AMECO Professionnel، طنجة · شهران",
    "j1.text": "التواصل مع العميل لتحديد احتياجاته، ثم تصميم موقع تعريفي ولوحة إدارة: REST API باستخدام Node.js وExpress وPostgreSQL، طلبات عروض الأسعار والتواصل عبر واتساب.",
    "j1.strong": "من احتياجات العميل إلى المنتج النهائي.",
    "j1.link": "شاهد المشروع ←",
    "j2.title": "متدرّب في المعلوميات",
    "j2.place": "جماعة قلعة مكونة · أبريل – ماي 2026",
    "j2.text": "المشاركة في الأنشطة المعلوماتية والرقمية للجماعة: تدبير البيانات والوثائق الرقمية، الأدوات المعلوماتية والدعم التقني.",
    "j2.strong": "أول تجربة في بيئة إدارية.",
    "j3.title": "تقني متخصص في التطوير الرقمي",
    "j3.place": "ISTA تنغير · 2024 – 2026",
    "j3.text": "تكوين لمدة سنتين في التطوير الرقمي، تخصص Web Full Stack.",
    "j3.strong": "حصلت على الدبلوم سنة 2026.",
    "j4.title": "باكالوريا العلوم الفيزيائية",
    "j4.place": "ثانوية الورود · 2024",
    "j4.text": "التعليم الثانوي، شعبة العلوم الفيزيائية.",
    "j4.strong": "حصلت على الباكالوريا سنة 2024.",

    "certs.label": "الشهادات",
    "certs.title": "تكوينات تكميلية.",
    "certs.intro": "مشروعان موجّهان على منصة Coursera.",
    "c1.meta": "البرمجة · أكتوبر 2026",
    "c1.text": "مشروع موجّه للتعرّف على البرمجة بلغة Python.",
    "c2.meta": "تطوير الويب · أكتوبر 2026",
    "c2.text": "إنشاء موقع WordPress وتخصيصه.",
    "btn.cert": 'عرض الشهادة <span aria-hidden="true">↖</span>',

    "contact.label": "تواصل",
    "contact.title": "لديك فرصة أو مشروع؟<br><span>لنتحدّث.</span>",
    "contact.desc": "أنا متاح للحديث عن تدريب أو وظيفة أو مشروع ويب.",
    "btn.whatsapp": 'تواصل معي عبر واتساب <span aria-hidden="true">↖</span>',
    "contact.email": "البريد الإلكتروني",
    "contact.location": "الموقع",
    "footer.top": "العودة إلى الأعلى ↑"
  }
};

const COUNT_LABELS = {
  fr: n => `${n} projet${n > 1 ? "s" : ""} à explorer`,
  en: n => `${n} project${n > 1 ? "s" : ""} to explore`,
  ar: n => `عدد المشاريع: ${n}`
};

const SUPPORTED = ["fr", "en", "ar"];
const STORAGE_KEY = "portfolio-lang";

// French texts, captured from the HTML on load
const french = {};

let currentLang = "fr";


function readSavedLang() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function saveLang(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Storage blocked (private mode…): the choice is just not remembered.
  }
}

function translate(key) {
  if (currentLang === "fr") return french[key];
  return TRANSLATIONS[currentLang]?.[key] ?? french[key];
}

function updateProjectCount() {
  const counter = document.getElementById("projectCount");
  if (!counter) return;

  const visible = document.querySelectorAll(
    ".project-card[data-category]:not([hidden])"
  ).length;

  counter.textContent = COUNT_LABELS[currentLang](visible);
}

function applyLanguage(lang) {
  currentLang = SUPPORTED.includes(lang) ? lang : "fr";

  const root = document.documentElement;
  root.lang = currentLang;
  root.dir = currentLang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const value = translate(element.dataset.i18n);
    if (value !== undefined) element.innerHTML = value;
  });

  document.title = translate("meta.title");

  const description =
    document.querySelector('meta[name="description"]');
  if (description) description.content = translate("meta.description");

  document.querySelectorAll(".lang-switch [data-lang]").forEach(button => {
    const active = button.dataset.lang === currentLang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  updateProjectCount();
}


document.addEventListener("DOMContentLoaded", () => {

  // Capture the French content written in the HTML
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    if (!(key in french)) french[key] = element.innerHTML.trim();
  });

  french["meta.title"] = document.title;
  french["meta.description"] =
    document.querySelector('meta[name="description"]')?.content ?? "";

  document.querySelectorAll(".lang-switch [data-lang]").forEach(button => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.lang);
      saveLang(currentLang);
    });
  });

  applyLanguage(readSavedLang() ?? "fr");
});


// Used by main.js after filtering projects
window.portfolioI18n = { updateProjectCount };
