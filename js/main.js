/**
 * Boubacar NDIR - Site Web CV & Portfolio Professionnel
 * Spécialiste Pilotage Stratégique, Data Analytics & IA
 * Dark Glassmorphism, Bilingue FR/EN, Export PDF, Modale d'Études de Cas
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dictionnaires de Traduction Bilingue (FR / EN) fidèles au CV officiel
  const translations = {
    fr: {
      navAbout: "Profil",
      navExperience: "Expériences",
      navSkills: "Compétences",
      navProjects: "Systèmes & Outils",
      navEducation: "Formation & Certifications",
      navContact: "Contact",
      btnDownloadPdf: "Télécharger CV",
      btnPrint: "Imprimer",
      heroStatus: "Resp. Suivi-Évaluation @ APROSI • Expert Data & IA",
      heroTitle1: "Boubacar NDIR",
      heroTitleRole: "Spécialiste Pilotage Stratégique, Data Analytics & IA",
      heroSubtitle: "Consciencieux et dynamique avec une expertise avancée en pilotage stratégique, suivi-évaluation, gestion des risques et systèmes décisionnels. Solide capacité à structurer, coordonner et optimiser des organisations complexes dans des environnements multisectoriels et internationaux",
      ctaDownloadCv: "Télécharger mon CV (PDF)",
      ctaContact: "Me contacter",
      metricM2: "Économétrie Appliquée (UADB)",
      metricSector: "Banque • Institutionnel • Bailleurs",
      metricData: "Power BI • Stata • R • Python",
      aboutTag: "Profil & Vision",
      aboutTitle: "Une expertise transversale et rigoureuse",
      aboutText1: "Spécialiste en pilotage de la performance institutionnelle, suivi-évaluation (S&E), gestion des risques et modélisation de données",
      aboutText2: "J'accompagne les directions générales, institutions bancaires et bailleurs internationaux (GIZ, USAID, Counterpart International, AFD) dans la structuration d'organisations data-driven, la gouvernance de la conformité et l'aide à la décision stratégique",
      val1: "Pilotage de systèmes de performance institutionnelle & KPI de Direction Générale",
      val2: "Dispositifs de suivi-évaluation complets & évaluations d'impact (Diff-in-Diff)",
      val3: "Gestion des risques opérationnels & financiers, conformité bancaire et contrôle permanent",
      val4: "Modélisation statistique avancée, Business Intelligence (Power BI) et Prompt Engineering IA",
      expTag: "Parcours Professionnel",
      expTitle: "Expériences Professionnelles",
      skillsTag: "Boîte à Outils & Savoir-Faire",
      skillsTitle: "Domaines de Compétences",
      eduTag: "Parcours Académique & Titres",
      eduTitle: "Formation & Certifications",
      projectsTag: "Systèmes Décisionnels",
      projectsTitle: "Réalisations & Outils de Pilotage",
      btnViewCase: "Détails",
      contactTag: "Coordonnées & Disponibilité",
      contactTitle: "Contactez-moi",
      contactDesc: "Disponible pour échanger sur vos projets de pilotage stratégique, dispositifs de suivi-évaluation, missions d'analyse de données ou transformation digitale",
      formName: "Votre nom et prénom / Organisation",
      formEmail: "Votre adresse email",
      formMessage: "Votre message ou opportunité",
      btnSend: "Envoyer le message",
      toastCopied: "Adresse email (boubacarndir7@gmail.com) copiée dans le presse-papier !"
    },
    en: {
      navAbout: "Profile",
      navExperience: "Experience",
      navSkills: "Competencies",
      navProjects: "Systems & Tools",
      navEducation: "Education & Certifications",
      navContact: "Contact",
      btnDownloadPdf: "Download CV",
      btnPrint: "Print",
      heroStatus: "Head of M&E @ APROSI • Data Analytics & AI Expert",
      heroTitle1: "Boubacar NDIR",
      heroTitleRole: "Strategic Management, Data Analytics & AI Specialist",
      heroSubtitle: "Conscientious and dynamic professional with advanced expertise in strategic leadership, monitoring & evaluation (M&E), risk management, and executive decision-support systems. Proven track record in structuring, coordinating, and optimizing complex institutions in multisectoral and international environments",
      ctaDownloadCv: "Download My Resume (PDF)",
      ctaContact: "Get in Touch",
      metricM2: "Applied Econometrics (UADB)",
      metricSector: "Banking • Public Agencies • Donors",
      metricData: "Power BI • Stata • R • Python",
      aboutTag: "Profile & Vision",
      aboutTitle: "Rigorous and Cross-Disciplinary Expertise",
      aboutText1: "Senior specialist in institutional performance management, monitoring and evaluation (M&E), risk management, and econometric modeling",
      aboutText2: "I support executive boards, banking institutions, and international donors (GIZ, USAID, Counterpart International, AFD) in building data-driven governance, regulatory compliance, and strategic decision frameworks",
      val1: "Institutional performance systems & executive KPI steering",
      val2: "End-to-end M&E system architecture & quasi-experimental impact evaluation (Diff-in-Diff)",
      val3: "Operational and financial risk management, banking compliance, and permanent controls",
      val4: "Advanced statistical modeling, executive Business Intelligence (Power BI), and AI Prompt Engineering",
      expTag: "Career Path",
      expTitle: "Professional Experience",
      skillsTag: "Core Expertise & Toolset",
      skillsTitle: "Core Competency Domains",
      eduTag: "Academic Background & Credentials",
      eduTitle: "Education & Certifications",
      projectsTag: "Executive Systems",
      projectsTitle: "Key Systems & Strategic Tools",
      btnViewCase: "Details",
      contactTag: "Contact & Availability",
      contactTitle: "Get in Touch",
      contactDesc: "Available for strategic leadership positions, monitoring & evaluation frameworks, data analytics consultancies, and digital transformation initiatives",
      formName: "Full Name / Organization",
      formEmail: "Email Address",
      formMessage: "Your Message or Inquiries",
      btnSend: "Send Message",
      toastCopied: "Email address (boubacarndir7@gmail.com) copied to clipboard!"
    }
  };

  let currentLang = 'fr';

  // 2. Gestion du Changement de Langue
  const langToggleBtn = document.getElementById('langToggle');
  function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
    if (langToggleBtn) {
      langToggleBtn.textContent = lang === 'fr' ? 'EN' : 'FR';
    }
    document.documentElement.lang = lang;
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'fr' ? 'en' : 'fr');
    });
  }

  // 3. Impression de la page CV
  const printPdfBtn = document.getElementById('printPdfBtn');
  if (printPdfBtn) {
    printPdfBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // 4. Cursor Spotlight Glow
  const cursorGlow = document.querySelector('.cursor-glow');
  if (cursorGlow && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', (e) => {
      cursorGlow.style.left = `${e.clientX}px`;
      cursorGlow.style.top = `${e.clientY}px`;
    });
  }

  // 5. Scroll Progress Bar
  const scrollProgressBar = document.querySelector('.scroll-progress');
  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    if (scrollProgressBar) {
      scrollProgressBar.style.width = `${progress}%`;
    }
  });

  // 6. Navigation Scroll Spy & Smooth Anchor
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // 7. Modale Détails des Réalisations (APROSI, Maarifa, Afrika Bank)
  const caseStudiesData = {
    aprosiCase: {
      title: "Pilotage Institutionnel & Tableaux de Bord @ APROSI",
      badge: "Direction Générale & APROSI",
      image: "assets/images/project-me-kpi.jpg",
      challenge: "Coordonner les directions opérationnelles de l'Agence d'Aménagement et de Promotion des Sites Industriels (APROSI) et structurer un système unifié de reporting de la performance institutionnelle pour la Direction Générale",
      solution: "Définition d'un référentiel d'indicateurs stratégiques (KPI), mise en place de tableaux de bord exécutifs automatisés et appui méthodologique transversal pour moderniser les outils de pilotage de l'agence",
      impact: "Visibilité accrue en temps réel sur l'avancement des sites industriels, alignement stratégique inter-directions et accélération des prises de décisions de la Direction Générale",
      tools: ["Pilotage KPI", "Tableaux de bord exécutifs", "Management par les résultats", "Coordination institutionnelle", "Power BI"]
    },
    maarifaCase: {
      title: "Évaluations & Enquêtes de Performance @ Maarifa Consulting",
      badge: "GIZ • USAID • Counterpart International",
      image: "assets/images/project-analytics.jpg",
      challenge: "Conduire des évaluations de performance complexes et des enquêtes multisectorielles rigoureuses pour des bailleurs internationaux exigeants dans des délais serrés",
      solution: "Déploiement de dispositifs de suivi-évaluation complets, collecte et contrôle rigoureux des données, modélisation statistique avancée et rédaction de notes d'aide à la décision stratégique pour les comités bailleurs",
      impact: "Validation de 100% des rapports d'évaluation par les bailleurs (GIZ, USAID, Counterpart), identification précise des leviers d'amélioration des programmes de développement",
      tools: ["Stata", "R", "Évaluation d'impact", "Enquêtes terrain", "Reporting bailleurs", "SIG / QGIS"]
    },
    bankCase: {
      title: "Contrôle des Risques & Conformité Bancaire @ Afrika Bank (ex BDK)",
      badge: "Secteur Bancaire • UMOA",
      image: "assets/images/project-fintech.jpg",
      challenge: "Assurer la conformité permanente des opérations bancaires et de marché aux exigences réglementaires de la commission bancaire UMOA et maîtriser les risques opérationnels et financiers",
      solution: "Supervision continue des flux de marché, cartographie et gestion des risques opérationnels, renforcement des protocoles de contrôle interne et production du reporting réglementaire prudentiel",
      impact: "Zéro anomalie réglementaire majeure constatée, fiabilisation des opérations de marché et renforcement de la gouvernance de conformité de l'institution",
      tools: ["Contrôle permanent", "Risques opérationnels", "Réglementation UMOA", "Reporting prudentiel", "Audit interne"]
    }
  };

  const modalBackdrop = document.getElementById('caseStudyModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalBadge = document.getElementById('modalBadge');
  const modalImg = document.getElementById('modalImg');
  const modalChallenge = document.getElementById('modalChallenge');
  const modalSolution = document.getElementById('modalSolution');
  const modalImpact = document.getElementById('modalImpact');
  const modalToolsList = document.getElementById('modalToolsList');

  document.querySelectorAll('.open-case-study').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = button.getAttribute('data-project');
      const data = caseStudiesData[projectId];
      if (data && modalBackdrop) {
        modalTitle.textContent = data.title;
        modalBadge.textContent = data.badge;
        modalImg.src = data.image;
        modalImg.alt = data.title;
        modalChallenge.textContent = data.challenge;
        modalSolution.textContent = data.solution;
        modalImpact.textContent = data.impact;
        
        modalToolsList.innerHTML = '';
        data.tools.forEach(tool => {
          const pill = document.createElement('span');
          pill.className = 'tech-pill';
          pill.textContent = tool;
          modalToolsList.appendChild(pill);
        });

        modalBackdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });

  // 8. Copie rapide de l'Email & Toast
  const copyEmailBtns = document.querySelectorAll('.copy-email-btn');
  const toastNotice = document.getElementById('toastNotice');
  const toastText = document.getElementById('toastText');

  function showToast(message) {
    if (toastNotice && toastText) {
      toastText.textContent = message;
      toastNotice.classList.add('show');
      setTimeout(() => {
        toastNotice.classList.remove('show');
      }, 3500);
    }
  }

  copyEmailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-email') || 'boubacarndir7@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        const msg = currentLang === 'fr' 
          ? `Email (${email}) copié dans le presse-papier !` 
          : `Email (${email}) copied to clipboard!`;
        showToast(msg);
      }).catch(() => {
        window.location.href = `mailto:${email}`;
      });
    });
  });

  // 9. Formulaire de contact fonctionnel
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value;
      const email = document.getElementById('contactEmail').value;
      const message = document.getElementById('contactMessage').value;

      const subject = encodeURIComponent(`Contact - ${name} via CV Web`);
      const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      
      showToast(currentLang === 'fr' 
        ? "Ouverture de votre messagerie..." 
        : "Opening your email client...");

      setTimeout(() => {
        window.location.href = `mailto:boubacarndir7@gmail.com?subject=${subject}&body=${body}`;
        contactForm.reset();
      }, 700);
    });
  }

  // 10. Mode d'Édition Directe
  const toggleEditModeBtn = document.getElementById('toggleEditModeBtn');
  const saveEditsBtn = document.getElementById('saveEditsBtn');
  let isEditMode = false;

  const savedCustomData = localStorage.getItem('boubacar_ndir_official_cv_data');
  if (savedCustomData) {
    try {
      const data = JSON.parse(savedCustomData);
      Object.keys(data).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = data[id];
      });
    } catch (e) {
      console.warn('Erreur lecture localStorage', e);
    }
  }

  if (toggleEditModeBtn) {
    toggleEditModeBtn.addEventListener('click', () => {
      isEditMode = !isEditMode;
      document.body.classList.toggle('edit-mode-active', isEditMode);
      
      const editableElements = document.querySelectorAll('[data-editable]');
      editableElements.forEach(el => {
        el.contentEditable = isEditMode ? 'true' : 'false';
      });

      toggleEditModeBtn.textContent = isEditMode 
        ? "Mode Édition: ACTIF" 
        : "Modifier mes textes";
      
      if (saveEditsBtn) {
        saveEditsBtn.style.display = isEditMode ? 'inline-flex' : 'none';
      }

      showToast(isEditMode 
        ? "Mode édition activé : vous pouvez cliquer sur n'importe quel texte pour l'éditer !" 
        : "Mode édition désactivé.");
    });
  }

  if (saveEditsBtn) {
    saveEditsBtn.addEventListener('click', () => {
      const customData = {};
      document.querySelectorAll('[data-editable]').forEach(el => {
        if (el.id) {
          customData[el.id] = el.innerHTML;
        }
      });
      localStorage.setItem('boubacar_ndir_official_cv_data', JSON.stringify(customData));
      showToast("Modifications enregistrées localement !");
    });
  }
});
