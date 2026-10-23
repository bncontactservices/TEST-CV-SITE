/**
 * Boubacar NDIR - Site Web CV & Portfolio Professionnel
 * Spécialiste Pilotage Stratégique, Data Analytics & IA
 * Dark Glassmorphism, Trilingue FR / EN / 中文 (Mandarin), Export PDF, Modale d'Études de Cas
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dictionnaires de Traduction Trilingue Complets (FR / EN / 中文)
  const translations = {
    fr: {
      navAbout: "Profil",
      navEducation: "Formation & Certifications",
      navExperience: "Expériences",
      navSkills: "Compétences",
      navProjects: "Systèmes & Outils",
      navContact: "Contact",
      btnDownloadPdf: "Télécharger CV",
      heroStatus: "Resp. Suivi-Évaluation @ APROSI • Expert Data & IA",
      heroTitleRole: "Spécialiste Pilotage Stratégique, Data Analytics & IA",
      heroSubtitle: "Expertise pointue en pilotage stratégique, suivi-évaluation, gestion des risques et systèmes décisionnels. Capacité démontrée à structurer et optimiser des organisations complexes en contextes multisectoriels et internationaux.",
      ctaDownloadCv: "Télécharger mon CV (PDF)",
      ctaContact: "Me contacter",
      metricM2Val: "Master 2",
      metricM2: "Économétrie Appliquée (UADB)",
      metricSectorVal: "Multisectoriel",
      metricSector: "Banque • Institutionnel • Bailleurs",
      metricDataVal: "Data & IA",
      metricData: "Power BI • Stata • R",
      badgeKpi: "Pilotage KPI & Tableaux de bord",
      avatarBadge: "Suivi-Évaluation & IA",
      aboutTag: "Profil & Vision",
      aboutTitle: "Une expertise transversale et rigoureuse",
      aboutDesc: "Du pilotage stratégique de haut niveau à l'analyse statistique pointue et à l'intégration de l'IA",
      aboutCard1Title: "Synthèse Professionnelle",
      aboutText1: "Spécialiste en pilotage de la performance institutionnelle, suivi-évaluation (S&E), gestion des risques et modélisation de données.",
      aboutText2: "J'accompagne les directions générales, institutions bancaires et bailleurs internationaux (GIZ, USAID, AFD) dans la structuration d'organisations, la gouvernance de la conformité et l'aide à la décision stratégique.",
      aboutCard2Title: "Points Forts & Valeur Ajoutée",
      val1: "Pilotage de systèmes de performance institutionnelle & KPI de Direction Générale",
      val2: "Dispositifs de suivi-évaluation complets & évaluations d'impact",
      val3: "Gestion des risques opérationnels & financiers, conformité bancaire et contrôle permanent",
      val4: "Modélisation statistique avancée, Business Intelligence (Power BI) et outils d'IA",
      eduTag: "Parcours Académique & Titres",
      eduTitle: "Formation & Certifications",
      eduDesc: "Diplômes universitaires en économie appliquée et certifications professionnelles internationales",
      eduUniSectionTitle: "Formation Universitaire",
      eduM2Level: "Bac +5",
      eduM2Title: "Master 2 Économétrie Appliquée",
      eduM2Subtitle: "Économie du Développement",
      eduM2School: "Université Alioune Diop de Bambey (UADB)",
      eduM2Desc: "Modélisation économétrique avancée, évaluation des politiques publiques et analyse d'impact quantitatif.",
      tagEconometrics: "Économétrie",
      tagStats: "Statistiques",
      tagImpact: "Analyse d'impact",
      tagProjectMgmt: "Gestion de Projet",
      eduLicenceLevel: "Bac +3",
      eduLicenceTitle: "Licence Économie Appliquée",
      eduLicenceSubtitle: "Analyse et Politique Économique",
      eduLicenceSchool: "Université Alioune Diop de Bambey (UADB)",
      eduLicenceDesc: "Fondements théoriques et quantitatifs en analyse économique, macroéconomie et méthodes statistiques.",
      tagMacro: "Macroéconomie",
      tagMicro: "Microéconomie",
      tagPublicPolicy: "Politiques publiques",
      eduCertSectionTitle: "Certifications & Attestations Professionnelles",
      cert1Badge: "AFD",
      cert1Title: "Suivi et Évaluation de projets de développement",
      cert1Issuer: "Agence Française de Développement",
      cert1Desc: "Cadres logiques, indicateurs de performance, collecte et analyse de données pour projets de développement international.",
      cert2Title: "MEAL en situations d'urgence",
      cert2Issuer: "Save the Children International",
      cert2Desc: "Monitoring, Évaluation, Redevabilité et Apprentissage (MEAL) dans les contextes humanitaires et d'urgence.",
      cert3Badge: "UMOA",
      cert3Title: "Comptabilité bancaire UMOA",
      cert3Issuer: "Union Monétaire Ouest-Africaine",
      cert3Desc: "Réglementation prudentielle, normes comptables bancaires, opérations de marché et contrôle interne en zone UMOA.",
      cert4Title: "Microsoft Power BI",
      cert4Issuer: "Microsoft - Data Analytics",
      cert4Desc: "Data Modeling, DAX, Power Query, conception de tableaux de bord exécutifs interactifs et reporting décisionnel.",
      cert5Title: "Fondamentaux de la Gestion de Projet",
      cert5Issuer: "Planification & Management",
      cert5Desc: "Méthodologies projet, WBS, planification Gantt, pilotage budgétaire, gestion des risques et reporting de projet.",
      cert6Title: "Intelligence Artificielle appliquée",
      cert6Issuer: "Applications & Prompt Engineering",
      cert6Desc: "Outils IA génératifs, prompt engineering, automatisation intelligente et intégration de l'IA dans les flux décisionnels.",
      langSectionTitle: "Langues de travail",
      langSectionDesc: "Maîtrise pour contextes nationaux et internationaux",
      langFr: "Français",
      langFrLevel: "Langue maternelle - Courant",
      langEn: "Anglais",
      langEnLevel: "Professionnel - B2/C1",
      expTag: "Parcours Professionnel",
      expTitle: "Expériences Professionnelles",
      expDesc: "Trajectoire éprouvée au sein d'institutions publiques, banques de premier plan et cabinets internationaux",
      exp1Role: "Chef de Division / Responsable Suivi-Évaluation",
      exp1Company: "APROSI (Agence d'Aménagement et de Promotion des Sites Industriels)",
      exp1Date: "2022 - Présent",
      exp1Ach1: "Supervision du dispositif de suivi-évaluation et reporting de la Direction Générale",
      exp1Ach2: "Élaboration des plans d'action et tableaux de bord de performance stratégique",
      exp1Ach3: "Définition, suivi et fiabilisation des indicateurs clés de performance (KPI)",
      exp1Ach4: "Coordination des directions opérationnelles et animation des comités de revue",
      exp1Ach5: "Modernisation des outils de pilotage décisionnels et intégration de tableaux de bord Power BI",
      exp2Role: "Consultant Statisticien / Suivi-Évaluation",
      exp2Company: "Maarifa Consulting",
      exp2Date: "2020 - 2024",
      exp2Ach1: "Conduite d'évaluations et enquêtes pour de grands bailleurs (GIZ, USAID, Oxfam, Speak Up Africa, MEDA, Teranga Capital, etc.)",
      exp2Ach2: "Mise en place de systèmes de suivi-évaluation adaptés aux projets",
      exp2Ach3: "Collecte, traitement et analyse de données quantitatives et qualitatives",
      exp3Role: "Assistant Direction des Risques, Conformité & Contrôle Permanent",
      exp3Company: "Afrika Bank (ex BDK)",
      exp3Date: "2020 - 2022",
      exp3Ach1: "Contrôle permanent des opérations de marché et suivi des activités bancaires",
      exp3Ach2: "Gestion, cartographie et surveillance des risques opérationnels et financiers",
      exp3Ach3: "Élaboration du reporting réglementaire prudentiel et renforcement du contrôle interne",
      exp3Ach4: "Contribution active à la gouvernance d'entreprise et à la conformité institutionnelle UMOA",
      exp4Role: "Stage à Orabank - Direction de la clientèle",
      exp4Company: "Orabank",
      exp4Date: "Oct-Nov 2018",
      exp4Ach1: "Enquêtes de satisfaction, questionnaires clientèle et opérations d'OPV",
      exp4Ach2: "Traitement d'opérations bancaires sous le progiciel Sopra Banking Amplitude",
      skillsTag: "Boîte à Outils & Savoir-Faire",
      skillsTitle: "Domaines de Compétences",
      skillsDesc: "Expertises structurées en pilotage stratégique, suivi-évaluation, risques, data et IA",
      cat1Title: "Pilotage stratégique & Performance",
      cat1Skill1: "Définition et suivi des KPI stratégiques",
      cat1Skill2: "Tableaux de bord exécutifs & reporting",
      cat1Skill3: "Management par les résultats",
      cat1Skill4: "Analyse de performance organisationnelle",
      cat2Title: "Suivi-Évaluation & Projets",
      cat2Skill1: "Évaluation d'impact",
      cat2Skill2: "Suivi de projets multi-acteurs",
      cat2Skill3: "Coordination et aide à la décision",
      cat2Skill4: "Gestion de projets stratégiques",
      cat3Title: "Finance, Risques & Gouvernance",
      cat3Skill1: "Contrôle des risques opérationnels",
      cat3Skill2: "Conformité & contrôle permanent",
      cat3Skill3: "Analyse financière et opérationnelle",
      cat3Skill4: "Reporting réglementaire (UMOA)",
      cat4Title: "Data, Statistique & Outils",
      cat4Skill1: "Power BI (Modélisation DAX & Dashboards)",
      cat4Skill2: "Stata, R, SPSS, SAS",
      cat4Skill3: "Économétrie et statistique avancée",
      cat4Skill4: "SIG (QGIS) & MS Project",
      cat5Title: "Transformation organisationnelle & Digitale",
      cat5Val1: "Conduite du changement et optimisation des processus",
      cat5Val2: "Mise en place d'organisations axées sur les données",
      cat6Title: "IA - Intelligence Artificielle",
      cat6Val1: "Prompt engineering et intégration des flux d'analyse",
      cat6Val2: "Supports digitaux et automatisation décisionnelle",
      projectsTag: "Systèmes Décisionnels",
      projectsTitle: "Réalisations et Outils de Pilotage",
      projectsDesc: "Dispositifs opérationnels conçus pour la Direction Générale et les partenaires internationaux",
      proj1Badge: "Pilotage Institutionnel & Direction",
      proj1Title: "Système de Performance Institutionnelle & KPI",
      proj1Desc: "Conception et animation du système global de performance : définition des KPI stratégiques, consolidation des données multi-directions et dashboards exécutifs Power BI pour la Direction Générale.",
      proj1Status: "APROSI • En production",
      btnViewCase: "Détails",
      proj2Badge: "GIZ • USAID • Oxfam • Teranga",
      proj2Title: "Évaluations & Enquêtes de Performance Bailleurs",
      proj2Desc: "Conduite d'évaluations multisectorielles et d'enquêtes de performance pour de grands bailleurs internationaux : cadrage méthodologique, analyse quantitative et aide à la décision.",
      proj2Company: "Maarifa Consulting",
      proj3Badge: "Secteur Bancaire • BDK",
      proj3Title: "Contrôle des Opérations & Gestion des Risques",
      proj3Desc: "Supervision des opérations de marché, gestion des risques opérationnels et financiers, production du reporting prudentiel et contrôle permanent en conformité avec les normes UMOA.",
      proj3Company: "Afrika Bank (ex BDK)",
      contactTag: "Coordonnées & Disponibilité",
      contactTitle: "Contactez-moi",
      contactDesc: "Disponible pour échanger sur vos projets de pilotage stratégique, dispositifs de suivi-évaluation, missions d'analyse de données et transformation digitale.",
      labelLocation: "Localisation",
      valLocation: "Dakar, Sénégal",
      labelPhone: "Téléphone principal",
      labelPhone2: "Téléphone secondaire",
      labelEmail: "Email officiel",
      labelProfiles: "LinkedIn professionnel",
      valLinkedIn: "Profil de Boubacar NDIR",
      formName: "Votre nom et prénom / Organisation",
      formEmail: "Votre adresse email",
      formMessage: "Votre message ou opportunité",
      btnSend: "Envoyer le message",
      footerRights: "© 2026 Boubacar NDIR - Spécialiste Pilotage Stratégique, Data Analytics & IA - Tous droits réservés",
      modalChallengeLabel: "Cadre & Contexte Institutionnel",
      modalSolutionLabel: "Dispositif & Actions Réalisées",
      modalImpactLabel: "Impact & Valeur Ajoutée",
      modalToolsLabel: "Outils & Compétences Mobilisés",
      placeholderName: "Ex: Direction Générale / Partenaire",
      placeholderEmail: "contact@organisation.com",
      placeholderMessage: "Décrivez votre projet, vos besoins en suivi-évaluation ou votre opportunité...",
      toastCopied: "Email copié dans le presse-papier !",
      toastOpeningMail: "Ouverture de votre messagerie...",
      toastSaved: "Modifications enregistrées localement !",
      projPillKpi: "KPI Stratégiques",
      projPillExec: "Reporting Exécutif",
      projPillRbm: "Management par les résultats",
      projPillSurveys: "Enquêtes terrain",
      projPillDonors: "Reporting Bailleurs",
      projPillRisk: "Risques Opérationnels",
      projPillUmoa: "Conformité UMOA",
      projPillPerm: "Contrôle Permanent",
      projPillBank: "Reporting Banque",
    },
    en: {
      navAbout: "Profile",
      navEducation: "Education & Certifications",
      navExperience: "Experience",
      navSkills: "Skills",
      navProjects: "Systems & Tools",
      navContact: "Contact",
      btnDownloadPdf: "Download CV",
      heroStatus: "M&E Lead @ APROSI • Data & AI Expert",
      heroTitleRole: "Strategic Steering, Data Analytics & AI Specialist",
      heroSubtitle: "In-depth expertise in strategic steering, monitoring and evaluation (M&E), risk management, and executive decision-support systems. Proven track record in structuring and optimizing complex organizations across international and multisectoral environments.",
      ctaDownloadCv: "Download CV (PDF)",
      ctaContact: "Contact Me",
      metricM2Val: "Master's 2",
      metricM2: "Applied Econometrics (UADB)",
      metricSectorVal: "Multisectoral",
      metricSector: "Banking • Institutional • Donors",
      metricDataVal: "Data & AI",
      metricData: "Power BI • Stata • R",
      badgeKpi: "Strategic KPI Steering & Dashboards",
      avatarBadge: "M&E & AI Systems",
      aboutTag: "Profile & Vision",
      aboutTitle: "Cross-Disciplinary & Rigorous Expertise",
      aboutDesc: "From executive-level strategic steering to advanced statistical analysis and AI integration",
      aboutCard1Title: "Professional Summary",
      aboutText1: "Specialist in institutional performance steering, monitoring and evaluation (M&E), risk management, and quantitative data modeling.",
      aboutText2: "I support executive management, banking institutions, and major international development partners (GIZ, USAID, AFD, Oxfam, MEDA) in organizational structuring, compliance governance, and strategic decision support.",
      aboutCard2Title: "Key Strengths & Value Added",
      val1: "Institutional performance steering systems & Executive KPI frameworks",
      val2: "End-to-end monitoring and evaluation architectures & impact assessments",
      val3: "Operational & financial risk management, banking compliance, and permanent internal control",
      val4: "Advanced statistical modeling, Business Intelligence (Power BI), and AI integration",
      eduTag: "Academic Background & Credentials",
      eduTitle: "Education & Certifications",
      eduDesc: "University degrees in applied economics and international professional certifications",
      eduUniSectionTitle: "University Education",
      eduM2Level: "Bac +5 (MSc)",
      eduM2Title: "Master 2 in Applied Econometrics",
      eduM2Subtitle: "Development Economics",
      eduM2School: "Alioune Diop University of Bambey (UADB)",
      eduM2Desc: "Advanced econometric modeling, public policy evaluation, and quantitative impact analysis.",
      tagEconometrics: "Econometrics",
      tagStats: "Statistics",
      tagImpact: "Impact Analysis",
      tagProjectMgmt: "Project Management",
      eduLicenceLevel: "Bac +3 (BSc)",
      eduLicenceTitle: "Bachelor in Applied Economics",
      eduLicenceSubtitle: "Economic Analysis & Policy",
      eduLicenceSchool: "Alioune Diop University of Bambey (UADB)",
      eduLicenceDesc: "Theoretical and quantitative foundations in economic analysis, macroeconomics, and statistical methods.",
      tagMacro: "Macroeconomics",
      tagMicro: "Microeconomics",
      tagPublicPolicy: "Public Policy",
      eduCertSectionTitle: "Certifications & Professional Credentials",
      cert1Badge: "AFD",
      cert1Title: "Monitoring & Evaluation of Development Projects",
      cert1Issuer: "French Development Agency (AFD)",
      cert1Desc: "Logical frameworks, performance indicators, data collection and analysis for international development projects.",
      cert2Title: "MEAL in Emergency Contexts",
      cert2Issuer: "Save the Children International",
      cert2Desc: "Monitoring, Evaluation, Accountability, and Learning (MEAL) in humanitarian and crisis settings.",
      cert3Badge: "WAMU",
      cert3Title: "WAMU Banking Accounting",
      cert3Issuer: "West African Monetary Union (WAMU)",
      cert3Desc: "Prudential regulation, banking accounting standards, market operations, and internal control in the WAMU zone.",
      cert4Title: "Microsoft Power BI",
      cert4Issuer: "Microsoft - Data Analytics",
      cert4Desc: "Data Modeling, DAX, Power Query, interactive executive dashboards, and strategic decision reporting.",
      cert5Title: "Fundamentals of Project Management",
      cert5Issuer: "Planning & Management",
      cert5Desc: "Project methodologies, WBS, Gantt scheduling, budget steering, risk management, and project reporting.",
      cert6Title: "Applied Artificial Intelligence",
      cert6Issuer: "Applications & Prompt Engineering",
      cert6Desc: "Generative AI tools, prompt engineering, intelligent automation, and AI integration into decision-making workflows.",
      langSectionTitle: "Working Languages",
      langSectionDesc: "Fluency across national and international settings",
      langFr: "French",
      langFrLevel: "Native language - Fluent",
      langEn: "English",
      langEnLevel: "Professional proficiency - B2/C1",
      expTag: "Professional Career",
      expTitle: "Professional Experience",
      expDesc: "Proven track record within public institutions, leading commercial banks, and international advisory firms",
      exp1Role: "Division Head / Head of Monitoring & Evaluation",
      exp1Company: "APROSI (Agency for Industrial Development & Promotion)",
      exp1Date: "2022 - Present",
      exp1Ach1: "Supervision of the agency-wide M&E framework and reporting to Executive Management",
      exp1Ach2: "Formulation of action plans and strategic performance dashboards",
      exp1Ach3: "Definition, tracking, and validation of key performance indicators (KPIs)",
      exp1Ach4: "Coordination of operational directorates and facilitation of performance review committees",
      exp1Ach5: "Modernization of decision-support tools and integration of Power BI executive dashboards",
      exp2Role: "Statistical Consultant / M&E Specialist",
      exp2Company: "Maarifa Consulting",
      exp2Date: "2020 - 2024",
      exp2Ach1: "Conducting evaluations and surveys for major donors (GIZ, USAID, Oxfam, Speak Up Africa, MEDA, Teranga Capital, etc.)",
      exp2Ach2: "Design and implementation of tailored project monitoring and evaluation systems",
      exp2Ach3: "Collection, processing, and analysis of quantitative and qualitative microdata",
      exp3Role: "Assistant Directorate of Risk, Compliance & Permanent Control",
      exp3Company: "Afrika Bank (formerly BDK)",
      exp3Date: "2020 - 2022",
      exp3Ach1: "Permanent control of money market desk operations and banking transactions",
      exp3Ach2: "Management, mapping, and continuous surveillance of operational and financial risks",
      exp3Ach3: "Preparation of prudential regulatory reporting and reinforcement of internal controls",
      exp3Ach4: "Active contribution to corporate governance and institutional compliance under WAMU banking standards",
      exp4Role: "Internship at Orabank - Corporate Banking Division",
      exp4Company: "Orabank",
      exp4Date: "Oct-Nov 2018",
      exp4Ach1: "Customer satisfaction surveys, corporate questionnaires, and IPO operations support",
      exp4Ach2: "Processing banking transactions on Sopra Banking Amplitude core banking system",
      skillsTag: "Toolkit & Core Expertise",
      skillsTitle: "Core Competencies",
      skillsDesc: "Structured expertise in strategic steering, M&E, risk governance, data analytics, and AI",
      cat1Title: "Strategic Steering & Performance",
      cat1Skill1: "Definition and tracking of strategic KPIs",
      cat1Skill2: "Executive dashboards & decision reporting",
      cat1Skill3: "Results-Based Management (RBM)",
      cat1Skill4: "Organizational performance analysis",
      cat2Title: "Monitoring & Evaluation & Projects",
      cat2Skill1: "Impact evaluation",
      cat2Skill2: "Multi-stakeholder project monitoring",
      cat2Skill3: "Institutional coordination & decision support",
      cat2Skill4: "Strategic project management",
      cat3Title: "Finance, Risk & Governance",
      cat3Skill1: "Operational risk control",
      cat3Skill2: "Compliance & permanent internal control",
      cat3Skill3: "Financial & operational analysis",
      cat3Skill4: "Prudential regulatory reporting (WAMU)",
      cat4Title: "Data, Statistics & Tools",
      cat4Skill1: "Power BI (DAX Modeling & Dashboards)",
      cat4Skill2: "Stata, R, SPSS, SAS",
      cat4Skill3: "Advanced econometrics & statistics",
      cat4Skill4: "GIS (QGIS) & MS Project",
      cat5Title: "Organizational & Digital Transformation",
      cat5Val1: "Change management and process optimization",
      cat5Val2: "Establishing data-driven organizations",
      cat6Title: "AI - Artificial Intelligence",
      cat6Val1: "Prompt engineering and analytical workflow integration",
      cat6Val2: "Digital support tools and automated decision-making",
      projectsTag: "Decision Systems",
      projectsTitle: "Key Achievements & Steering Tools",
      projectsDesc: "Operational systems designed for Executive Leadership and international development partners",
      proj1Badge: "Institutional Steering & Leadership",
      proj1Title: "Institutional Performance & KPI System",
      proj1Desc: "Design and leadership of the overall performance framework: strategic KPI definition, multi-directorate data consolidation, and executive Power BI dashboards for General Management.",
      proj1Status: "APROSI • In Production",
      btnViewCase: "Details",
      proj2Badge: "GIZ • USAID • Oxfam • Teranga",
      proj2Title: "Donor Performance Evaluations & Surveys",
      proj2Desc: "Execution of multisectoral evaluations and performance surveys for international donors: methodological framing, quantitative data analysis, and strategic decision support.",
      proj2Company: "Maarifa Consulting",
      proj3Badge: "Banking Sector • BDK",
      proj3Title: "Operations Control & Risk Management",
      proj3Desc: "Surveillance of market desk operations, operational and financial risk mitigation, preparation of prudential reporting, and permanent internal control compliant with WAMU standards.",
      proj3Company: "Afrika Bank (formerly BDK)",
      projPillKpi: "Strategic KPIs",
      projPillExec: "Executive Reporting",
      projPillRbm: "Results-Based Management",
      projPillSurveys: "Field Surveys",
      projPillDonors: "Donor Reporting",
      projPillRisk: "Operational Risks",
      projPillUmoa: "WAMU Compliance",
      projPillPerm: "Permanent Control",
      projPillBank: "Bank Reporting",
      contactTag: "Contact & Availability",
      contactTitle: "Get In Touch",
      contactDesc: "Available to discuss your strategic steering projects, monitoring and evaluation frameworks, quantitative data missions, and digital transformation.",
      labelLocation: "Location",
      valLocation: "Dakar, Senegal",
      labelPhone: "Primary Phone",
      labelPhone2: "Secondary Phone",
      labelEmail: "Official Email",
      labelProfiles: "Professional LinkedIn",
      valLinkedIn: "Boubacar NDIR Profile",
      formName: "Your Full Name / Organization",
      formEmail: "Your Email Address",
      formMessage: "Your Message or Opportunity",
      btnSend: "Send Message",
      footerRights: "© 2026 Boubacar NDIR - Strategic Steering, Data Analytics & AI Specialist - All rights reserved",
      modalChallengeLabel: "Context & Institutional Framework",
      modalSolutionLabel: "Implementation & Core Actions",
      modalImpactLabel: "Impact & Added Value",
      modalToolsLabel: "Tools & Mobilized Competencies",
      placeholderName: "E.g.: Executive Management / Partner Organization",
      placeholderEmail: "contact@organization.com",
      placeholderMessage: "Describe your project, your M&E requirements, or your strategic opportunity...",
      toastCopied: "Email copied to clipboard!",
      toastOpeningMail: "Opening your email client...",
      toastSaved: "Changes saved locally!",
    },
    zh: {
      navAbout: "个人概况",
      navEducation: "教育与认证",
      navExperience: "职业履历",
      navSkills: "核心技能",
      navProjects: "系统与工具",
      navContact: "联系方式",
      btnDownloadPdf: "下载简历",
      heroStatus: "监控与评估负责人 @ APROSI • 数据与人工智能专家",
      heroTitleRole: "战略规划、数据分析与人工智能专家",
      heroSubtitle: "深耕战略规划、监控与评估（M&E）、风险管理及高管决策支持系统。具备在跨行业和国际多元环境中统筹、优化复杂机构的卓越专业能力。",
      ctaDownloadCv: "下载个人简历 (PDF)",
      ctaContact: "立即联系我",
      metricM2Val: "硕士 (Bac+5)",
      metricM2: "应用计量经济学 (UADB)",
      metricSectorVal: "跨领域履历",
      metricSector: "银行 • 政府机构 • 国际组织",
      metricDataVal: "数据与AI",
      metricData: "Power BI • Stata • R",
      badgeKpi: "战略KPI管理与高管决策看板",
      avatarBadge: "监控评估 (M&E) 与人工智能",
      aboutTag: "个人概况与愿景",
      aboutTitle: "跨领域、严谨务实的综合专业实力",
      aboutDesc: "从高层机构战略规划、严谨统计分析到前沿人工智能的深度融合",
      aboutCard1Title: "专业综述",
      aboutText1: "专注于机构绩效评估、监控与评估体系（M&E）、风险管理及定量数据建模的高级专家。",
      aboutText2: "深度赋能高管决策层、商业银行机构以及国际发展援助组织（GIZ、USAID、AFD、Oxfam、MEDA等），提供机构重塑、合规治理与战略决策支持。",
      aboutCard2Title: "核心优势与业务赋能",
      val1: "机构绩效管理体系建设与高管核心KPI指标监控",
      val2: "端到端监控与评估（M&E）体系构建与严谨影响评估",
      val3: "操作与金融风险管理、银行常态化内控与合规审计",
      val4: "高级统计建模、商业智能（Power BI）与现代AI分析工具",
      eduTag: "学术历程与专业资质",
      eduTitle: "教育与专业认证",
      eduDesc: "应用经济学高等学位及国际权威专业认证",
      eduUniSectionTitle: "大学高等教育",
      eduM2Level: "硕士学位 (Bac +5)",
      eduM2Title: "应用计量经济学硕士 (Master 2)",
      eduM2Subtitle: "发展经济学方向",
      eduM2School: "阿里乌恩·迪奥普大学 (UADB)",
      eduM2Desc: "高级计量经济学建模、公共政策评估与定量影响评估分析。",
      tagEconometrics: "计量经济学",
      tagStats: "统计学",
      tagImpact: "影响评估",
      tagProjectMgmt: "项目管理",
      eduLicenceLevel: "学士学位 (Bac +3)",
      eduLicenceTitle: "应用经济学学士 (Licence)",
      eduLicenceSubtitle: "经济分析与经济政策",
      eduLicenceSchool: "阿里乌恩·迪奥普大学 (UADB)",
      eduLicenceDesc: "经济分析、宏观经济学及统计学方法的深厚理论与定量基础。",
      tagMacro: "宏观经济学",
      tagMicro: "微观经济学",
      tagPublicPolicy: "公共政策",
      eduCertSectionTitle: "专业认证与资质证书",
      cert1Badge: "AFD",
      cert1Title: "发展项目监控与评估",
      cert1Issuer: "法国开发署 (AFD)",
      cert1Desc: "逻辑框架设计、绩效指标体系、国际发展项目数据采集与分析方法。",
      cert2Title: "紧急人道主义背景下的MEAL框架",
      cert2Issuer: "国际救助儿童会 (Save the Children)",
      cert2Desc: "监控、评估、问责与学习（MEAL）在人道主义紧急救援情境下的系统应用。",
      cert3Badge: "UMOA",
      cert3Title: "西非货币联盟银行会计（UMOA）",
      cert3Issuer: "西非货币联盟 (UMOA)",
      cert3Desc: "审慎监管准则、银行会计标准规范、金融市场交易及UMOA区域内部控制体系。",
      cert4Title: "Microsoft Power BI",
      cert4Issuer: "微软 (Microsoft) - 数据分析",
      cert4Desc: "数据建模、DAX、Power Query，设计高管层交互式战略决策仪表板与数据报告。",
      cert5Title: "项目管理基础与核心技能",
      cert5Issuer: "规划与项目管理",
      cert5Desc: "项目管理方法论、工作分解结构（WBS）、甘特图规划、预算管控、风险管理与项目汇报。",
      cert6Title: "人工智能 (AI) 实务应用",
      cert6Issuer: "AI应用与提示工程",
      cert6Desc: "生成式AI工具应用、提示工程（Prompt Engineering）、智能化流程自动化及AI集成决策支持。",
      langSectionTitle: "工作语言能力",
      langSectionDesc: "熟练胜任国家级与国际化多元工作环境",
      langFr: "法语",
      langFrLevel: "母语水平 - 流利精通",
      langEn: "英语",
      langEnLevel: "专业工作水平 - B2/C1",
      expTag: "职业履历",
      expTitle: "专业工作经验",
      expDesc: "在公共机构、大型商业银行及国际咨询机构积累的卓越职业履历",
      exp1Role: "处长 / 监控与评估负责人",
      exp1Company: "APROSI (工业园区开发与促进局)",
      exp1Date: "2022 - 至今",
      exp1Ach1: "全面监督机构监控与评估体系，直接向最高管理层汇报",
      exp1Ach2: "制定战略行动计划并构建战略绩效决策仪表板",
      exp1Ach3: "定义、追踪并核实核心关键绩效指标 (KPI)",
      exp1Ach4: "统筹各业务部门并主持定期的绩效评估与审议委员会",
      exp1Ach5: "现代化升级决策支持工具，深度融合Power BI交互式高管仪表板",
      exp2Role: "统计学顾问 / 监控与评估专员",
      exp2Company: "Maarifa Consulting",
      exp2Date: "2020 - 2024",
      exp2Ach1: "主导大型国际发展出资方（GIZ、USAID、Oxfam、Speak Up Africa、MEDA、Teranga Capital等）的评估与调查项目",
      exp2Ach2: "针对不同发展项目设计并落地适配的定制化监控与评估体系",
      exp2Ach3: "负责定性与定量微观数据的全流程采集、清洗、处理与深入统计分析",
      exp3Role: "风险管理、合规与常态化内控助理",
      exp3Company: "Afrika Bank (原 BDK达喀尔银行)",
      exp3Date: "2020 - 2022",
      exp3Ach1: "常态化监督货币资金市场交易及日常银行业务运营",
      exp3Ach2: "操作风险与金融风险的管理、风险地图绘制与全流程监控",
      exp3Ach3: "编制审慎监管报告并强化银行常态化内部控制体系",
      exp3Ach4: "积极参与企业治理及西非货币联盟（UMOA）银行机构合规建设",
      exp4Role: "Orabank 实习 - 客户业务部",
      exp4Company: "Orabank (奥拉银行)",
      exp4Date: "2018年10月 - 11月",
      exp4Ach1: "实施客户满意度调研、问卷调查及公开发行（OPV）业务支持",
      exp4Ach2: "在 Sopra Banking Amplitude 核心银行系统下处理日常银行业务",
      skillsTag: "专业工具箱与专长",
      skillsTitle: "专业技能领域",
      skillsDesc: "在战略规划、监控与评估、风险管理、数据分析与AI领域的系统专长",
      cat1Title: "战略规划与机构绩效",
      cat1Skill1: "战略KPI指标体系设计与追踪",
      cat1Skill2: "高管决策仪表板与绩效报告",
      cat1Skill3: "成果导向管理 (RBM)",
      cat1Skill4: "组织机构绩效深入分析",
      cat2Title: "监控与评估及项目管理",
      cat2Skill1: "项目影响评估",
      cat2Skill2: "多方协同项目全程监控",
      cat2Skill3: "机构统筹协调与高管决策支持",
      cat2Skill4: "战略级重大项目管理",
      cat3Title: "金融、风险与机构治理",
      cat3Skill1: "操作风险防控与管理",
      cat3Skill2: "合规管理与常态化内部控制",
      cat3Skill3: "财务与业务运营深度分析",
      cat3Skill4: "西非货币联盟 (UMOA) 审慎监管报告",
      cat4Title: "数据分析、统计学与专业工具",
      cat4Skill1: "Power BI (DAX高级建模与仪表板)",
      cat4Skill2: "Stata, R, SPSS, SAS",
      cat4Skill3: "高级计量经济学与多元统计学",
      cat4Skill4: "地理信息系统 (QGIS) 与 MS Project",
      cat5Title: "组织变革与数字化转型",
      cat5Val1: "变革管理与业务流程深度优化",
      cat5Val2: "构建数据驱动型高效组织架构",
      cat6Title: "人工智能 (AI) 实战应用",
      cat6Val1: "提示工程 (Prompt Engineering) 与分析工作流整合",
      cat6Val2: "数字化智能助手与决策自动化支持",
      projectsTag: "决策支持系统",
      projectsTitle: "代表性成果与决策工具",
      projectsDesc: "专为机构最高管理层与国际合作伙伴量身构建的实用运营系统",
      proj1Badge: "机构战略规划与高管决策",
      proj1Title: "机构绩效管理体系与KPI决策看板",
      proj1Desc: "设计并统筹全机构综合绩效体系：明确战略KPI框架、汇总整合各业务部门数据，并为最高管理层构建Power BI高管决策仪表板。",
      proj1Status: "APROSI • 稳定运行中",
      btnViewCase: "查看详情",
      proj2Badge: "GIZ • USAID • Oxfam • Teranga",
      proj2Title: "国际出资方绩效评估与调研体系",
      proj2Desc: "为主流国际大型发展援助机构主导实施多领域绩效评估与调查：制定方法论框架、开展定量统计分析并提供战略决策依据。",
      proj2Company: "Maarifa Consulting",
      proj3Badge: "银行业 • BDK",
      proj3Title: "业务合规控制与金融风险管理",
      proj3Desc: "金融市场资金交易日常监督、操作与金融风险防控、编制审慎监管报告，确保严格遵循西非货币联盟（UMOA）银行业监管标准。",
      proj3Company: "Afrika Bank (原 BDK)",
      projPillKpi: "战略KPI",
      projPillExec: "高管报告",
      projPillRbm: "成果导向管理",
      projPillSurveys: "实地调研",
      projPillDonors: "出资方报告",
      projPillRisk: "操作风险",
      projPillUmoa: "UMOA合规",
      projPillPerm: "常态化内控",
      projPillBank: "银行报告",
      contactTag: "联系方式与合作意向",
      contactTitle: "联系我",
      contactDesc: "期待就战略规划、监控与评估体系搭建、定量数据分析课题及机构数字化转型等项目与您深入交流。",
      labelLocation: "工作常驻地",
      valLocation: "塞内加尔 • 达喀尔",
      labelPhone: "主要联系电话",
      labelPhone2: "备用联系电话",
      labelEmail: "官方电子邮箱",
      labelProfiles: "领英 (LinkedIn) 职业主页",
      valLinkedIn: "Boubacar NDIR 个人主页",
      formName: "您的姓名 / 所属机构",
      formEmail: "您的电子邮箱",
      formMessage: "您的留言或合作意向",
      btnSend: "发送留言",
      footerRights: "© 2026 Boubacar NDIR - 战略规划、数据分析与人工智能专家 - 保留所有权利",
      modalChallengeLabel: "制度背景与工作框架",
      modalSolutionLabel: "实施举措与具体行动",
      modalImpactLabel: "实际成效与附加价值",
      modalToolsLabel: "运用工具与核心专业能力",
      placeholderName: "例如：机构高管层 / 国际合作伙伴",
      placeholderEmail: "contact@organization.com",
      placeholderMessage: "请描述您的项目需求、监控评估计划或战略合作机会...",
      toastCopied: "电子邮箱已复制到剪贴板！",
      toastOpeningMail: "正在打开您的邮件客户端...",
      toastSaved: "修改已保存在本地！",
    }
  };

  let currentLang = 'fr';
  let currentOpenProjectId = null;

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
      if (translations[lang] && translations[lang][key] !== undefined) {
        el.textContent = translations[lang][key];
      }
    });

    // Remplacement des placeholders avec data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang] && translations[lang][key] !== undefined) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });

    // Titre de page adapté
    const titles = {
      fr: "Boubacar NDIR | Spécialiste Pilotage Stratégique, Data Analytics & IA",
      en: "Boubacar NDIR | Strategic Steering, Data Analytics & AI Specialist",
      zh: "Boubacar NDIR | 战略规划、数据分析与人工智能专家"
    };
    if (titles[lang]) {
      document.title = titles[lang];
    }

    // Réactualiser la modale si elle est ouverte
    if (currentOpenProjectId && modalBackdrop && modalBackdrop.classList.contains('active')) {
      renderModal(currentOpenProjectId);
    }

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

  // 4. Barre de progression du scroll
  const scrollProgress = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0 && scrollProgress) {
      const progress = (window.scrollY / totalHeight) * 100;
      scrollProgress.style.width = `${progress}%`;
    }
  });

  // 5. Spotlight Curseur
  const cursorGlow = document.querySelector('.cursor-glow');
  if (cursorGlow) {
    window.addEventListener('mousemove', (e) => {
      cursorGlow.style.left = `${e.clientX}px`;
      cursorGlow.style.top = `${e.clientY}px`;
    });
  }

  // 6. Navigation fluide et lien actif au scroll
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.scrollY;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }}
    );
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
        badge: "GIZ • USAID • Oxfam • Speak Up Africa • MEDA • Teranga Capital",
        image: "assets/images/project-analytics.jpg",
        challenge: "Conduire des évaluations de performance complexes et des enquêtes multisectorielles rigoureuses pour des bailleurs et partenaires internationaux exigeants.",
        solution: "Déploiement de dispositifs de suivi-évaluation complets, collecte et contrôle rigoureux des données, modélisation statistique avancée et reporting stratégique.",
        impact: "Validation de 100% des rapports d'évaluation par les partenaires (GIZ, USAID, Counterpart, Oxfam, Speak Up Africa, MEDA, Teranga Capital), identification précise des leviers de performance.",
        tools: ["Stata", "R", "Évaluation d'impact", "Enquêtes terrain", "Reporting bailleurs", "KoboToolbox", "SIG / QGIS"]
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
        badge: "GIZ • USAID • Oxfam • Speak Up Africa • MEDA • Teranga Capital",
        image: "assets/images/project-analytics.jpg",
        challenge: "Deliver rigorous multisectoral surveys and performance evaluations for leading international development partners under tight timelines.",
        solution: "Implementation of comprehensive M&E architectures, stringent data quality auditing, advanced statistical analysis, and executive donor reporting.",
        impact: "100% acceptance rate of evaluation reports by international partners (GIZ, USAID, Counterpart, Oxfam, Speak Up Africa, MEDA, Teranga Capital), pinpointing high-impact programmatic improvements.",
        tools: ["Stata", "R", "Impact Evaluation", "Field Surveys", "Donor Reporting", "KoboToolbox", "GIS / QGIS"]
      },
      bankCase: {
        title: "Risk Control & Banking Compliance @ Afrika Bank (ex BDK)",
        badge: "Banking Industry • WAMU",
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
        badge: "GIZ • USAID • Oxfam • Speak Up Africa • MEDA • Teranga Capital",
        image: "assets/images/project-analytics.jpg",
        challenge: "为国际大型发展援助机构在紧迫周期内实施复杂的多部门绩效评估与数据调查。",
        solution: "部署完整的监控与评估（M&E）体系，严格把控数据质量，开展高级统计分析并输出战略备忘录。",
        impact: "评估报告100%通过合作伙伴（GIZ、USAID、Counterpart、Oxfam、Speak Up Africa、MEDA、Teranga Capital）审定，精准识别发展项目改进关键点。",
        tools: ["Stata", "R", "影响评估", "实地调研", "出资方报告", "KoboToolbox", "GIS / QGIS"]
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

  function renderModal(projectId) {
    currentOpenProjectId = projectId;
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
    }
  }

  document.querySelectorAll('.open-case-study').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = button.getAttribute('data-project');
      renderModal(projectId);
      if (modalBackdrop) {
        modalBackdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('active');
      document.body.style.overflow = '';
      currentOpenProjectId = null;
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

  // 8. Toast Notifications
  const toastNotification = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');
  let toastTimer = null;

  function showToast(message) {
    if (!toastNotification || !toastMessage) return;
    toastMessage.textContent = message;
    toastNotification.classList.add('active');
    
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastNotification.classList.remove('active');
    }, 3200);
  }

  // 9. Copie d'Email & Envoi de Formulaire
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = copyEmailBtn.getAttribute('data-email') || 'boubacarndir7@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        const msg = translations[currentLang]?.toastCopied || "Email copié dans le presse-papier !";
        showToast(msg);
      }).catch(() => {
        window.location.href = `mailto:${email}`;
      });
    });
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const message = document.getElementById('contactMessage').value.trim();

      const subject = encodeURIComponent(`Contact - ${name} via CV Web`);
      const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      
      const toastMsg = translations[currentLang]?.toastOpeningMail || "Ouverture de votre messagerie...";
      showToast(toastMsg);

      setTimeout(() => {
        window.location.href = `mailto:boubacarndir7@gmail.com?subject=${subject}&body=${body}`;
      }, 600);
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
        if (el) {
          el.innerHTML = data[id];
        }
      });
    } catch (e) {
      console.warn("Erreur chargement données locales:", e);
    }
  }

  if (toggleEditModeBtn && saveEditsBtn) {
    toggleEditModeBtn.addEventListener('click', () => {
      isEditMode = !isEditMode;
      document.body.classList.toggle('edit-mode-active', isEditMode);
      
      document.querySelectorAll('[data-editable]').forEach(el => {
        el.contentEditable = isEditMode ? 'true' : 'false';
      });

      toggleEditModeBtn.textContent = isEditMode ? "Quitter Édition" : "Mode Édition";
      toggleEditModeBtn.classList.toggle('active', isEditMode);
      saveEditsBtn.style.display = isEditMode ? 'inline-flex' : 'none';

      if (isEditMode) {
        showToast("Mode édition activé. Modifiez directement les textes.");
      }
    });

    saveEditsBtn.addEventListener('click', () => {
      const customData = {};
      document.querySelectorAll('[data-editable]').forEach(el => {
        if (el.id) {
          customData[el.id] = el.innerHTML;
        }
      });
      localStorage.setItem('boubacar_ndir_official_cv_data_v2', JSON.stringify(customData));
      const savedMsg = translations[currentLang]?.toastSaved || "Modifications enregistrées localement !";
      showToast(savedMsg);
    });
  }

  // 11. Carrousel Infini de Photos de Profil
  const avatarSlides = document.querySelectorAll('.avatar-slide');
  const avatarDots = document.querySelectorAll('.avatar-dot');
  const avatarWrapper = document.getElementById('avatarWrapper');
  let currentAvatarIdx = 0;
  let avatarTimer = null;

  function setAvatarSlide(index) {
    if (!avatarSlides.length) return;
    avatarSlides.forEach((slide, i) => {
      slide.classList.remove('active', 'prev');
      if (i === currentAvatarIdx && i !== index) {
        slide.classList.add('prev');
      }
    });

    currentAvatarIdx = (index + avatarSlides.length) % avatarSlides.length;
    avatarSlides[currentAvatarIdx].classList.add('active');

    avatarDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentAvatarIdx);
    });
  }

  function nextAvatar() {
    setAvatarSlide(currentAvatarIdx + 1);
  }

  function startAvatarLoop() {
    if (avatarTimer) clearInterval(avatarTimer);
    avatarTimer = setInterval(nextAvatar, 3800);
  }

  if (avatarSlides.length > 1) {
    startAvatarLoop();

    if (avatarWrapper) {
      avatarWrapper.addEventListener('click', () => {
        nextAvatar();
        startAvatarLoop();
      });
    }

    avatarDots.forEach((dot, idx) => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        setAvatarSlide(idx);
        startAvatarLoop();
      });
    });
  }
});
