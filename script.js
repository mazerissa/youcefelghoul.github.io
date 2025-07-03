const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');
const languageSelect = document.getElementById('language-select');
const sections = document.querySelectorAll('.section');

// Translation dictionary
const translations = {
  en: {
    hero_title: "Hi, I'm Youcef El Ghoul",
    hero_subtitle: "Crafting seamless digital experiences with code and creativity.",
    projects_title: "Projects",
    project1_title: "Task Manager App",
    project1_desc: "A simple and clean app to track your time and tasks easily.",
    about_title: "About Me",
    about_text: "I'm Youcef El Ghoul, a passionate developer skilled in Python, HTML, CSS, and JavaScript. I build clean, efficient, and modern web solutions that solve real problems.",
    contact_title: "Contact",
    socials_title: "Socials"
  },
  fr: {
    hero_title: "Salut, je suis Youcef El Ghoul",
    hero_subtitle: "Concevoir des expériences numériques fluides grâce au code et à la créativité.",
    projects_title: "Projets",
    project1_title: "Application Gestionnaire de tâches",
    project1_desc: "Une application simple et propre pour suivre facilement votre temps et vos tâches.",
    about_title: "À propos de moi",
    about_text: "Je suis Youcef El Ghoul, développeur passionné maîtrisant Python, HTML, CSS et JavaScript. Je crée des solutions web modernes, propres et efficaces qui répondent à de vrais besoins.",
    contact_title: "Contact",
    socials_title: "Réseaux sociaux"
  },
  hu: {
    hero_title: "Szia, én vagyok Youcef El Ghoul",
    hero_subtitle: "Zökkenőmentes digitális élmények megalkotása kóddal és kreativitással.",
    projects_title: "Projektek",
    project1_title: "Feladatkezelő alkalmazás",
    project1_desc: "Egy egyszerű és letisztult alkalmazás az idő és a feladatok egyszerű nyomon követéséhez.",
    about_title: "Rólam",
    about_text: "Youcef El Ghoul vagyok, szenvedélyes fejlesztő, aki jártas Pythonban, HTML-ben, CSS-ben és JavaScriptben. Letisztult, hatékony és modern webes megoldásokat építek, amelyek valós problémákat oldanak meg.",
    contact_title: "Kapcsolat",
    socials_title: "Közösségi média"
  },
  de: {
    hero_title: "Hallo, ich bin Youcef El Ghoul",
    hero_subtitle: "Nahtlose digitale Erlebnisse gestalten – mit Code und Kreativität.",
    projects_title: "Projekte",
    project1_title: "Task-Manager-App",
    project1_desc: "Eine einfache und übersichtliche App zur einfachen Erfassung Ihrer Zeit und Aufgaben.",
    about_title: "Über mich",
    about_text: "Ich bin Youcef El Ghoul, ein leidenschaftlicher Entwickler mit Kenntnissen in Python, HTML, CSS und JavaScript. Ich erstelle saubere, effiziente und moderne Weblösungen, die echte Probleme lösen.",
    contact_title: "Kontakt",
    socials_title: "Soziale Netzwerke"
  },
  ar: {
    hero_title: "مرحباً، أنا يوسف الغول",
    hero_subtitle: "صنع تجارب رقمية سلسة باستخدام البرمجة والإبداع.",
    projects_title: "المشاريع",
    project1_title: "تطبيق مدير المهام ",
    project1_desc: "تطبيق بسيط ونظيف لتتبع وقتك ومهامك بسهولة.",
    about_title: "عني",
    about_text: "أنا يوسف الغول، مطور شغوف ماهر في Python وHTML وCSS وJavaScript. أبني حلول ويب نظيفة وفعالة وحديثة تحل مشاكل حقيقية.",
    contact_title: "تواصل",
    socials_title: "وسائل التواصل الاجتماعي"
  }
};

// Toggle mobile menu
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Smooth scroll and active nav highlight
navItems.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    navLinks.classList.remove('show');
    const targetId = item.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });

    navItems.forEach(link => link.classList.remove('active'));
    item.classList.add('active');
  });
});

// Language change handler
languageSelect.addEventListener('change', () => {
  const lang = languageSelect.value;

  // Change page direction for Arabic
  if (lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
  }

  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
});

// Animate sections on scroll
function revealSections() {
  const windowHeight = window.innerHeight;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', () => {
  revealSections();
  languageSelect.dispatchEvent(new Event('change')); // set default language text
});
