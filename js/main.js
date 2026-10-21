/**
 * Boubacar NDIR - Site Web CV & Portfolio Professionnel
 * Spécialiste Pilotage Stratégique, Data Analytics & IA
 * Dark Glassmorphism, Trilingue FR / EN / 中文 (Mandarin), Export PDF, Modale d'Études de Cas
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dictionnaires de Traduction Trilingue (FR / EN / 中文)
  const translations = {
    fr: {
      navAbout: "Profil",
      navEducation: "Formation & Certifications",
      navExperience: "Expériences",
      navSkills: "Compétences",
      navProjects: "Systèmes & Outils",
      navContact: "Contact",
      btnDownloadPdf: "Télécharger CV",
      btnPrint: "Imprimer",
      heroStatus: "Resp. Suivi-Évaluation @ APROSI • Expert Data & IA",
      heroTitle1: "Boubacar NDIR",
      heroTitleRole: "Spécialiste Pilotage Stratégique, Data Analytics & IA",
      heroSubtitle: "Expertise pointue en pilotage stratégique, suivi-évaluation, gestion des risques et systèmes décisionnels. Capacité démontrée à structurer et optimiser des organisations complexes en contextes multisectoriels et internationaux.",
      ctaDownloadCv: "Télécharger mon CV (PDF)",
      ctaContact: "Me contacter",
      metricM2: "Économétrie Appliquée (UADB)",
      metricSector: "Banque • Institutionnel • Bailleurs",
      metricData: "Power BI • Stata • R",
      aboutTag: "Profil & Vision",
      aboutTitle: "Une expertise transversale et rigoureuse",
      aboutText1: "Spécialiste en pilotage de la performance institutionnelle, suivi-évaluation (S&E), gestion des risques et modélisation de données.",
      aboutText2: "J'accompagne les directions générales, institutions bancaires et bailleurs internationaux (GIZ, USAID, AFD) dans la structuration d'organisations, la gouvernance de la conformité et l'aide à la décision stratégique.",
      val1: "Pilotage de la performance institutionnelle & KPI de Direction Générale",
      val2: "Dispositifs de suivi-évaluation complets & évaluations d'impact",
      val3: "Gestion des risques opérationnels & financiers, conformité bancaire et contrôle permanent",
      val4: "Modélisation statistique avancée, Business Intelligence (Power BI) et outils d'IA",
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
      contactDesc: "Disponible pour échanger sur vos projets de pilotage stratégique, dispositifs de suivi-évaluation, missions d'analyse de données ou transformation digitale.",
      formName: "Votre nom et prénom / Organisation",
      formEmail: "Votre adresse email",
      formMessage: "Votre message ou opportunité",
      btnSend: "Envoyer le message",
      toastCopied: "Adresse email (boubacarndir7@gmail.com) copiée dans le presse-papier !"
    },
    en: {
      navAbout: "Profile",
      navEducation: "Education & Certifications",
      navExperience: "Experience",
      navSkills: "Competencies",
      navProjects: "Systems & Tools",
      navContact: "Contact",
      btnDownloadPdf: "Download CV",
      btnPrint: "Print",
      heroStatus: "Head of M&E @ APROSI • Data Analytics & AI Expert",
      heroTitle1: "Boubacar NDIR",
      heroTitleRole: "Strategic Steering, Data Analytics & AI Specialist",
      heroSubtitle: "Advanced expertise in strategic leadership, monitoring & evaluation (M&E), risk management, and decision systems. Proven track record in structuring and optimizing complex organizations in multisectoral and international environments.",
      ctaDownloadCv: "Download My Resume (PDF)",
      ctaContact: "Get in Touch",
      metricM2: "Applied Econometrics (UADB)",
      metricSector: "Banking • Public Agencies • Donors",
      metricData: "Power BI • Stata • R",
      aboutTag: "Profile & Vision",
      aboutTitle: "Rigorous and Cross-Disciplinary Expertise",
      aboutText1: "Senior specialist in institutional performance management, monitoring and evaluation (M&E), risk governance, and econometric modeling.",
      aboutText2: "I support executive boards, banking institutions, and international donors (GIZ, USAID, AFD) in institutional structuring, compliance governance, and strategic decision support.",
      val1: "Institutional performance systems & executive KPI steering",
      val2: "End-to-end M&E system architecture & rigorous impact evaluations",
      val3: "Operational and financial risk management, banking compliance, and permanent controls",
      val4: "Advanced statistical modeling, executive Business Intelligence (Power BI), and AI tools",
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
      contactDesc: "Available for strategic leadership positions, monitoring & evaluation frameworks, data analytics consultancies, and digital transformation initiatives.",
      formName: "Full Name / Organization",
      formEmail: "Email Address",
      formMessage: "Your Message or Inquiries",
      btnSend: "Send Message",
      toastCopied: "Email address (boubacarndir7@gmail.com) copied to clipboard!"
    },
    zh: {
      navAbout: "个人简介",
      navEducation: "教育与认证",
      navExperience: "工作经历",
      navSkills: "专业技能",
      navProjects: "决策系统",
      navContact: "联系方式",
      btnDownloadPdf: "下载简历",
      btnPrint: "打印简历",
      heroStatus: "监控与评估负责人 @ APROSI • 数据与AI专家",
      heroTitle1: "Boubacar NDIR",
      heroTitleRole: "战略规划、数据分析与人工智能专家",
      heroSubtitle: "精通战略规划、监控与评估（M&E）、风险管理及决策支持系统。具备在跨行业和国际多元环境中统筹、优化复杂机构的卓越能力。",
      ctaDownloadCv: "下载简历 (PDF)",
      ctaContact: "立即联系",
      metricM2: "应用计量经济学硕士 (UADB)",
      metricSector: "银行 • 公共机构 • 国际组织",
      metricData: "Power BI • Stata • R",
      aboutTag: "概况与愿景",
      aboutTitle: "跨领域、严谨务实的专业实力",
      aboutText1: "专注于机构绩效评估、监控与评估体系（M&E）、风险管理及数据计量建模的高级专家。",
      aboutText2: "深度服务高管决策层、银行机构及国际大型援助机构（GIZ、USAID、AFD等），提供治理、合规及战略决策支持。",
      val1: "机构绩效管理体系与高管KPI监控指标设计",
      val2: "端到端监控与评估（M&E）体系构建及影响评估",
      val3: "操作与财务风险管理、银行合规与常态化内控",
      val4: "高级统计建模、商业智能（Power BI）与AI工具应用",
      expTag: "职业历程",
      expTitle: "专业工作经历",
      skillsTag: "技能工具箱",
      skillsTitle: "核心专业领域",
      eduTag: "学术背景与资格",
      eduTitle: "教育与专业认证",
      projectsTag: "决策支持系统",
      projectsTitle: "战略成果与管理工具",
      btnViewCase: "查看详情",
      contactTag: "联系与沟通",
      contactTitle: "期待与您合作",
      contactDesc: "随时探讨战略规划、监控与评估体系、数据分析顾问或数字化转型等合作议题。",
      formName: "您的姓名 / 所属机构",
      formEmail: "您的电子邮箱",
      formMessage: "合作意向或留言内容",
      btnSend: "发送信息",
      toastCopied: "电子邮箱 (boubacarndir7@gmail.com) 已复制到剪贴板！"
    }
  };

  let currentLang = 'fr';

  // 2. Gestion du Changement de Langue (FR / EN / 中文)
  const langPills = document.querySelectorAll('.lang-pill');
  const langToggleBtn = document.getElementById('langToggle');

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    // Mise à jour de l'état actif des boutons
    langPills.forEach(pill => {
      pill.classList.toggle('active', pill.getAttribute('data-lang') === lang);
    });

    // Remplacement des textes avec data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    if (langToggleBtn) {
      const cycleMap = { fr: 'EN', en: '中文', zh: 'FR' };
      langToggleBtn.textContent = cycleMap[lang] || 'EN';
    }

    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
  }

  langPills.forEach(pill => {
    pill.addEventListener('click', () => {
      setLanguage(pill.getAttribute('data-lang'));
    });
  });

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const cycle = { fr: 'en', en: 'zh', zh: 'fr' };
      setLanguage(cycle[currentLang] || 'en');
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

  // 7. Modale Détails des Réalisations (APROSI, Maarifa, Afrika Bank) multilingue
  const caseStudiesData = {
    fr: {
      aprosiCase: {
        title: "Pilotage Institutionnel & Tableaux de Bord @ APROSI",
        badge: "Direction Générale & APROSI",
        image: "assets/images/project-me-kpi.jpg",
        challenge: "Coordonner les directions opérationnelles de l'Agence (APROSI) et structurer un système unifié de reporting de la performance pour la Direction Générale.",
        solution: "Définition d'un référentiel de KPI stratégiques, déploiement de tableaux de bord exécutifs automatisés et appui méthodologique transversal.",
        impact: "Visibilité accrue en temps réel sur les sites industriels, alignement stratégique inter-directions et accélération des décisions de la Direction Générale.",
        tools: ["Pilotage KPI", "Tableaux de bord exécutifs", "Management par les résultats", "Coordination institutionnelle", "Power BI"]
      },
      maarifaCase: {
        title: "Évaluations & Enquêtes de Performance @ Maarifa Consulting",
        badge: "GIZ • USAID • Counterpart International",
        image: "assets/images/project-analytics.jpg",
        challenge: "Conduire des évaluations de performance complexes et des enquêtes multisectorielles rigoureuses pour des bailleurs internationaux exigeants.",
        solution: "Déploiement de dispositifs de suivi-évaluation complets, collecte et contrôle rigoureux des données, modélisation statistique avancée et reporting stratégique.",
        impact: "Validation de 100% des rapports d'évaluation par les bailleurs (GIZ, USAID, Counterpart), identification précise des leviers de performance.",
        tools: ["Stata", "R", "Évaluation d'impact", "Enquêtes terrain", "Reporting bailleurs", "SIG / QGIS"]
      },
      bankCase: {
        title: "Contrôle des Risques & Conformité Bancaire @ Afrika Bank (ex BDK)",
        badge: "Secteur Bancaire • UMOA",
        image: "assets/images/project-fintech.jpg",
        challenge: "Assurer la conformité permanente des opérations bancaires aux exigences réglementaires UMOA et maîtriser les risques opérationnels et financiers.",
        solution: "Supervision continue des flux de marché, cartographie des risques opérationnels, renforcement du contrôle interne et reporting prudentiel.",
        impact: "Zéro anomalie réglementaire majeure constatée, fiabilisation des opérations de marché et renforcement de la gouvernance de conformité.",
        tools: ["Contrôle permanent", "Risques opérationnels", "Réglementation UMOA", "Reporting prudentiel", "Audit interne"]
      }
    },
    en: {
      aprosiCase: {
        title: "Institutional Performance & Executive Dashboards @ APROSI",
        badge: "Executive Leadership & APROSI",
        image: "assets/images/project-me-kpi.jpg",
        challenge: "Coordinate operational directorates across the agency and build a unified institutional performance reporting system for Executive Leadership.",
        solution: "Design of strategic KPI frameworks, deployment of automated executive dashboards, and cross-functional methodological support.",
        impact: "Real-time visibility on industrial parks progress, cross-departmental alignment, and accelerated strategic decision-making.",
        tools: ["KPI Steering", "Executive Dashboards", "Results-Based Management", "Institutional Coordination", "Power BI"]
      },
      maarifaCase: {
        title: "Performance Evaluations & Donor Surveys @ Maarifa Consulting",
        badge: "GIZ • USAID • Counterpart International",
        image: "assets/images/project-analytics.jpg",
        challenge: "Deliver rigorous multisectoral surveys and performance evaluations for leading international development partners under tight timelines.",
        solution: "Implementation of comprehensive M&E architectures, stringent data quality auditing, advanced statistical analysis, and executive donor reporting.",
        impact: "100% acceptance rate of evaluation reports by international donors (GIZ, USAID, Counterpart), pinpointing high-impact programmatic improvements.",
        tools: ["Stata", "R", "Impact Evaluation", "Field Surveys", "Donor Reporting", "GIS / QGIS"]
      },
      bankCase: {
        title: "Risk Control & Banking Compliance @ Afrika Bank (ex BDK)",
        badge: "Banking Industry • WAMU / UMOA",
        image: "assets/images/project-fintech.jpg",
        challenge: "Ensure permanent regulatory compliance with WAMU banking commission standards and mitigate operational and financial risks.",
        solution: "Continuous market desk surveillance, operational risk mapping, internal control reinforcement, and prudential regulatory reporting.",
        impact: "Zero major regulatory non-compliance issues recorded, strengthened market transaction reliability, and fortified institutional compliance.",
        tools: ["Permanent Control", "Operational Risk", "WAMU Regulations", "Prudential Reporting", "Internal Audit"]
      }
    },
    zh: {
      aprosiCase: {
        title: "APROSI 机构绩效管理与高管决策仪表板",
        badge: "最高管理层与 APROSI",
        image: "assets/images/project-me-kpi.jpg",
        challenge: "统筹工业园区开发与促进局（APROSI）各业务部门，为最高管理层构建统一的机构绩效报告体系。",
        solution: "制定战略KPI指标体系，部署自动化高管决策仪表板，提供全方位跨部门方法论指导。",
        impact: "实现工业园区推进态势实时可视化，强化部门间战略协同，全面提升高管决策效率。",
        tools: ["KPI管理", "高管仪表板", "成果导向管理", "机构协调", "Power BI"]
      },
      maarifaCase: {
        title: "Maarifa Consulting 国际组织绩效评估与调研",
        badge: "GIZ • USAID • Counterpart International",
        image: "assets/images/project-analytics.jpg",
        challenge: "为国际大型发展援助机构在紧迫周期内实施复杂的多部门绩效评估与数据调查。",
        solution: "部署完整的监控与评估（M&E）体系，严格把控数据质量，开展高级统计分析并输出战略备忘录。",
        impact: "评估报告100%通过出资方（GIZ、USAID、Counterpart）审定，精准识别发展项目改进关键点。",
        tools: ["Stata", "R", "影响评估", "实地调研", "出资方报告", "GIS / QGIS"]
      },
      bankCase: {
        title: "Afrika Bank 风险控制、银行合规与常态化内控",
        badge: "银行业 • 西非货币联盟 (UMOA)",
        image: "assets/images/project-fintech.jpg",
        challenge: "确保银行业务与金融市场交易始终符合西非货币联盟（UMOA）银行委员会的监管准则，严控各类风险。",
        solution: "对金融市场交易实施持续监督，构建操作风险地图，强化内部审计制度并编制审慎监管报告。",
        impact: "实现重大监管零违规，保障市场业务安全稳健，构筑坚实的机构合规治理体系。",
        tools: ["常态化内控", "操作风险", "UMOA监管法规", "审慎报告", "内部审计"]
      }
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
      const langDataset = caseStudiesData[currentLang] || caseStudiesData['fr'];
      const data = langDataset[projectId];
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
        const msg = currentLang === 'zh'
          ? `电子邮箱 (${email}) 已复制到剪贴板！`
          : (currentLang === 'fr' 
            ? `Email (${email}) copié dans le presse-papier !` 
            : `Email (${email}) copied to clipboard!`);
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
      
      const toastMsg = currentLang === 'zh'
        ? "正在打开您的邮件客户端..."
        : (currentLang === 'fr' 
          ? "Ouverture de votre messagerie..." 
          : "Opening your email client...");
      showToast(toastMsg);

      setTimeout(() => {
        window.location.href = `mailto:boubacarndir7@gmail.com?subject=${subject}&body=${body}`;
        contactForm.reset();
      }, 700);
    });
  }

  // 10. Mode d'Édition Directe (v2 sans cache obsolète)
  const toggleEditModeBtn = document.getElementById('toggleEditModeBtn');
  const saveEditsBtn = document.getElementById('saveEditsBtn');
  let isEditMode = false;

  const savedCustomData = localStorage.getItem('boubacar_ndir_official_cv_data_v2');
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
      localStorage.setItem('boubacar_ndir_official_cv_data_v2', JSON.stringify(customData));
      showToast("Modifications enregistrées localement !");
    });
  }
});
