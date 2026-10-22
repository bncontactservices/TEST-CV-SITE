/**
 * Boubacar NDIR - Site Web CV & Portfolio Professionnel
 * Spécialiste Pilotage Stratégique, Data Analytics & IA
 * Dark Glassmorphism, Trilingue FR / EN / 中文 (Mandarin), Export PDF, Modale d'Études de Cas
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dictionnaires de Traduction Trilingue Complets (FR / EN / 中文)
  const translations = {
    fr: {
      // Navigation
      navAbout: "Profil",
      navEducation: "Formation & Certifications",
      navExperience: "Expériences",
      navSkills: "Compétences",
      navProjects: "Systèmes & Outils",
      navContact: "Contact",
      btnDownloadPdf: "Télécharger CV",

      // Hero
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

      // Profil & Vision
      aboutTag: "Profil & Vision",
      aboutTitle: "Une expertise transversale et rigoureuse",
      aboutDesc: "Du pilotage stratégique de haut niveau à l'analyse statistique pointue et à l'intégration de l'IA",
      aboutCard1Title: "Synthèse Professionnelle",
      aboutText1: "Spécialiste en pilotage de la performance institutionnelle, suivi-évaluation (S&E), gestion des risques et modélisation de données.",
      aboutText2: "J'accompagne les directions générales, institutions bancaires et bailleurs internationaux (GIZ, USAID, Oxfam, MEDA) dans la structuration d'organisations, la gouvernance de la conformité et l'aide à la décision stratégique.",
      aboutCard2Title: "Points Forts & Valeur Ajoutée",
      val1: "Pilotage de systèmes de performance institutionnelle & KPI de Direction Générale",
      val2: "Dispositifs de suivi-évaluation complets & évaluations d'impact",
      val3: "Gestion des risques opérationnels & financiers, conformité bancaire et contrôle permanent",
      val4: "Modélisation statistique avancée, Business Intelligence (Power BI) et outils d'IA",

      // Formation & Certifications
      eduTag: "Parcours Académique & Titres",
      eduTitle: "Formation & Certifications",
      eduDesc: "Excellence académique en économétrie, finance et analyse de données avec certifications internationales",
      eduUniSectionTitle: "Formation Universitaire",
      eduM2Title: "Master 2 - Économétrie Appliquée",
      eduM2Level: "Niveau Bac + 5",
      eduM2School: "UADB - Université Alioune Diop de Bambey",
      eduM2Subtitle: "Spécialisation : Suivi-Évaluation, Modélisation Économétrique & Analyse de Politiques Publiques",
      eduM2Desc: "Formation d'excellence axée sur la modélisation statistique avancée, l'économétrie des séries temporelles, les méthodes d'évaluation d'impact rigoureuses, l'économie du développement et le management stratégique de projets.",
      tagEconometrics: "Économétrie",
      tagStats: "Statistiques avancées",
      tagImpact: "Évaluation d'impact",
      tagPublicPolicy: "Politiques publiques",
      tagProjectMgmt: "Gestion de Projet",
      eduLicenceTitle: "Licence - Sciences Économiques & Gestion",
      eduLicenceLevel: "Niveau Bac + 3",
      eduLicenceSchool: "UADB - Université Alioune Diop de Bambey",
      eduLicenceSubtitle: "Option : Économie Appliquée & Analyse Quantitative",
      eduLicenceDesc: "Fondements théoriques solides en microéconomie, macroéconomie, probabilités, statistiques inférentielles, mathématiques financières, analyse budgétaire et comptabilité de gestion.",
      tagMicro: "Microéconomie",
      tagMacro: "Macroéconomie",
      eduCertSectionTitle: "Certifications Internationales & Spécialisations",
      cert1Title: "Analyste Financier",
      cert1Issuer: "Institut de Formation Bancaire • Dakar",
      cert1Desc: "Analyse financière approfondie, diagnostic de rentabilité, évaluation d'entreprises et modélisation de bilans.",
      cert2Title: "Évaluation des Risques Financiers & Opérationnels",
      cert2Issuer: "AFGES • Académie Française de Formation Bancaire",
      cert2Desc: "Cartographie des risques opérationnels, réglementation prudentielle Bâle II/III et contrôle interne bancaire.",
      cert3Title: "Audit Interne & Conformité Réglementaire",
      cert3Issuer: "IFACI / Cabinet d'Audit International",
      cert3Desc: "Méthodologie d'audit interne, conformité LCB-FT, gouvernance institutionnelle et gestion des délégations.",
      cert4Title: "Spécialisation Power BI & Business Intelligence",
      cert4Issuer: "Certification Professionnelle Microsoft / DataCamp",
      cert4Desc: "Modélisation DAX avancée, création de pipelines Power Query et dashboards décisionnels exécutifs.",
      cert5Title: "Statistiques & Modélisation Économétrique avec Stata & R",
      cert5Issuer: "DataCamp / Enseignement Supérieur",
      cert5Desc: "Traitement de données d'enquêtes, régressions avancées, économétrie de panel et visualisations complexes.",
      cert6Title: "Intelligence Artificielle & Automatisation des Données",
      cert6Issuer: "Certification Spécialisée Data & IA",
      cert6Desc: "Prompt engineering pour analystes, automatisation de workflows décisionnels et intégration de modèles d'IA.",
      langSectionTitle: "Langues de travail",
      langSectionDesc: "Capacité à conduire des missions, animer des réunions stratégiques et rédiger des rapports techniques",
      langFr: "Français",
      langFrLevel: "Langue maternelle / bilingue professionnel (rédaction de rapports institutionnels, animation de comités stratégiques)",
      langEn: "Anglais",
      langEnLevel: "Pratique professionnelle (rédaction de synthèses de projets, interaction avec bailleurs de fonds internationaux)",

      // Expériences Professionnelles
      expTag: "Parcours Professionnel",
      expTitle: "Expériences Professionnelles",
      expDesc: "Trajectoire éprouvée au sein d'agences publiques, d'institutions bancaires de premier plan et de cabinets de conseil internationaux",
      exp1Role: "Responsable Suivi-Évaluation (S&E)",
      exp1Company: "APROSI - Agence d'Aménagement et de Promotion des Sites Industriels (Dakar)",
      exp1Date: "Fév. 2025 - Présent",
      exp1Ach1: "Conception et déploiement du dispositif global de suivi-évaluation de l'agence",
      exp1Ach2: "Mise en place de tableaux de bord de pilotage stratégique sous Power BI pour la Direction Générale",
      exp1Ach3: "Définition, suivi et analyse des indicateurs de performance (KPI) des parcs et zones industrielles",
      exp1Ach4: "Coordination de la collecte des données d'activités auprès des différentes directions opérationnelles",
      exp1Ach5: "Production des rapports périodiques de performance et notes d'aide à la décision stratégique",
      exp2Role: "Consultant Suivi-Évaluation & Analyse de Données",
      exp2Company: "Maarifa Consulting (Dakar)",
      exp2Date: "Mars 2023 - Fév. 2025",
      exp2Ach1: "Conduite d'évaluations et enquêtes pour de grands bailleurs (GIZ, USAID, Counterpart International, Oxfam, Speak Up Africa, MEDA, Teranga Capital)",
      exp2Ach2: "Mise en place de systèmes de suivi-évaluation adaptés aux projets",
      exp2Ach3: "Collecte, traitement et analyse de données quantitatives et qualitatives",
      exp3Role: "Chargé du Contrôle des Opérations de Marché & Risques",
      exp3Company: "Afrika Bank (ex-Banque de Dakar - BDK, Dakar)",
      exp3Date: "Nov. 2021 - Mars 2023",
      exp3Ach1: "Contrôle permanent des opérations de trésorerie, change et titres pour assurer la conformité réglementaire UMOA",
      exp3Ach2: "Surveillance des limites de risques (contrepartie, liquidité, taux) et production des reportings prudentiels",
      exp3Ach3: "Identification des anomalies opérationnelles et formulation de recommandations pour fiabiliser les processus",
      exp3Ach4: "Participation aux travaux de conformité réglementaire et d'audit interne sur les activités de marché",
      exp4Role: "Analyste Risques Financiers & Crédit (Stage)",
      exp4Company: "Banque Régionale / Institution Financière (Dakar)",
      exp4Date: "Janv. 2021 - Oct. 2021",
      exp4Ach1: "Analyse financière de dossiers de crédit aux entreprises et évaluation de solvabilité",
      exp4Ach2: "Contribution à la revue périodique du portefeuille de contreparties et suivi des engagements",

      // Domaines de Compétences
      skillsTag: "Boîte à Outils & Savoir-Faire",
      skillsTitle: "Domaines de Compétences",
      skillsDesc: "Une combinaison unique de vision stratégique de haut niveau et de maîtrise technique opérationnelle des outils modernes de données",
      cat1Title: "Pilotage Stratégique & Gouvernance",
      cat1Skill1: "Pilotage de la performance & KPI",
      cat1Skill2: "Tableaux de bord de Direction Générale",
      cat1Skill3: "Planification stratégique & opérationnelle",
      cat1Skill4: "Coordination institutionnelle",
      cat2Title: "Suivi-Évaluation & Impact",
      cat2Skill1: "Systèmes de suivi-évaluation complets",
      cat2Skill2: "Méthodologies d'évaluation d'impact",
      cat2Skill3: "Enquêtes terrain & collecte mobile",
      cat2Skill4: "Reporting pour bailleurs internationaux",
      cat3Title: "Risques, Conformité & Contrôle",
      cat3Skill1: "Contrôle permanent & audit opérationnel",
      cat3Skill2: "Cartographie des risques & conformité",
      cat3Skill3: "Réglementation prudentielle bancaire",
      cat3Skill4: "Gouvernance des procédures & conformité",
      cat4Title: "Data Analytics & Outils Décisionnels",
      cat4Skill1: "Power BI (DAX, Power Query, Datamarts)",
      cat4Skill2: "Stata (Économétrie, Panel, Micro-données)",
      cat4Skill3: "R (Modélisation, ggplot2, tidyverse)",
      cat4Skill4: "KoboToolbox & ODK (Collecte de données)",
      cat5Title: "Économétrie & Modélisation",
      cat5Val1: "Économétrie appliquée, séries temporelles & panels",
      cat5Val2: "Analyses de régression avancées & simulations",
      cat6Title: "Intelligence Artificielle Appliquée",
      cat6Val1: "Intégration d'outils d'IA pour l'analyse de données",
      cat6Val2: "Automatisation de synthèses & reporting augmenté",

      // Réalisations et Outils de Pilotage
      projectsTag: "Systèmes Décisionnels",
      projectsTitle: "Réalisations et Outils de Pilotage",
      projectsDesc: "Découvrez les dispositifs décisionnels et cadres analytiques conçus et mis en œuvre au cours de mon parcours",
      proj1Badge: "Direction Générale & APROSI",
      proj1Title: "Dispositif Global de Suivi-Évaluation & KPI Stratégiques",
      proj1Desc: "Conception intégrale du cadre méthodologique et déploiement de tableaux de bord automatisés sous Power BI pour piloter l'avancement des parcs industriels au Sénégal.",
      proj1Status: "En production • Déploiement actif",
      proj2Badge: "GIZ • USAID • Oxfam • Speak Up Africa",
      proj2Title: "Systèmes de Suivi-Évaluation & Évaluations Bailleurs",
      proj2Company: "Maarifa Consulting • Bailleurs internationaux",
      proj2Desc: "Conduite d'enquêtes terrain d'envergure, traitement statistique rigoureux sous Stata & R et rédaction de rapports stratégiques d'aide à la décision.",
      proj3Badge: "Secteur Bancaire • UMOA",
      proj3Title: "Dispositif de Contrôle Permanent & Surveillance des Risques",
      proj3Company: "Afrika Bank (ex-Banque de Dakar - BDK)",
      proj3Desc: "Supervision quotidienne des opérations de marché de trésorerie et de change, contrôle de la conformité réglementaire UMOA et fiabilisation des flux financiers.",
      btnViewCase: "Détails",

      // Contact & Coordonnées
      contactTag: "Coordonnées & Disponibilité",
      contactTitle: "Travaillons ensemble",
      contactDesc: "Disponible pour échanger sur vos projets de pilotage stratégique, dispositifs de suivi-évaluation, missions d'analyse de données ou transformation digitale.",
      labelLocation: "Localisation",
      valLocation: "Dakar, Sénégal (Mobilité internationale)",
      labelPhone: "Téléphone",
      labelPhone2: "Téléphone direct",
      labelEmail: "Email direct",
      labelProfiles: "Réseaux professionnels",
      valLinkedIn: "Profil certifié Boubacar NDIR",
      formName: "Votre nom et prénom / Organisation",
      formEmail: "Votre adresse email",
      formMessage: "Votre message ou opportunité",
      placeholderName: "Ex: Moussa Diop - Directeur Général / Bailleur",
      placeholderEmail: "Ex: contact@organisation.org",
      placeholderMessage: "Décrivez votre projet, vos besoins en suivi-évaluation ou votre opportunité...",
      btnSend: "Envoyer le message",

      // Footer
      footerRights: "© 2026 Boubacar NDIR - Spécialiste Pilotage Stratégique, Data Analytics & IA - Tous droits réservés",

      // Modal Headers
      modalChallengeLabel: "Cadre & Contexte Institutionnel",
      modalSolutionLabel: "Dispositif & Actions Réalisées",
      modalImpactLabel: "Impact & Valeur Ajoutée",
      modalToolsLabel: "Outils & Compétences Mobilisés",

      // Toasts
      toastCopied: "Adresse email (boubacarndir7@gmail.com) copiée dans le presse-papier !",
      toastOpeningMail: "Ouverture de votre messagerie..."
    },

    en: {
      // Navigation
      navAbout: "Profile",
      navEducation: "Education & Certifications",
      navExperience: "Experience",
      navSkills: "Skills",
      navProjects: "Systems & Tools",
      navContact: "Contact",
      btnDownloadPdf: "Download CV",

      // Hero
      heroStatus: "Head of M&E @ APROSI • Data Analytics & AI Expert",
      heroTitleRole: "Strategic Steering, Data Analytics & AI Specialist",
      heroSubtitle: "Advanced expertise in strategic leadership, monitoring & evaluation (M&E), risk governance, and decision-support systems. Demonstrated ability to structure and optimize complex organizations across multisectoral and international environments.",
      ctaDownloadCv: "Download My Resume (PDF)",
      ctaContact: "Get in Touch",
      metricM2Val: "Master 2",
      metricM2: "Applied Econometrics (UADB)",
      metricSectorVal: "Multisectoral",
      metricSector: "Banking • Public Agencies • Donors",
      metricDataVal: "Data & AI",
      metricData: "Power BI • Stata • R",
      badgeKpi: "KPI Steering & Executive Dashboards",
      avatarBadge: "Monitoring & Evaluation & AI",

      // Profil & Vision
      aboutTag: "Profile & Vision",
      aboutTitle: "Rigorous and Cross-Disciplinary Expertise",
      aboutDesc: "From high-level strategic steering to advanced statistical analysis and artificial intelligence integration",
      aboutCard1Title: "Professional Summary",
      aboutText1: "Senior specialist in institutional performance management, monitoring and evaluation (M&E), risk governance, and econometric modeling.",
      aboutText2: "I support executive boards, banking institutions, and international donors (GIZ, USAID, Oxfam, MEDA) in organizational structuring, compliance governance, and strategic decision support.",
      aboutCard2Title: "Key Strengths & Value Added",
      val1: "Institutional performance systems & executive KPI steering",
      val2: "End-to-end M&E system architecture & rigorous impact evaluations",
      val3: "Operational and financial risk management, banking compliance, and permanent controls",
      val4: "Advanced statistical modeling, executive Business Intelligence (Power BI), and modern AI tools",

      // Formation & Certifications
      eduTag: "Academic Background & Credentials",
      eduTitle: "Education & Certifications",
      eduDesc: "Academic excellence in econometrics, finance, and data analytics complemented by international certifications",
      eduUniSectionTitle: "University Education",
      eduM2Title: "Master 2 - Applied Econometrics",
      eduM2Level: "5-Year Higher Degree (MSc Equivalent)",
      eduM2School: "UADB - Alioune Diop University of Bambey",
      eduM2Subtitle: "Specialization: Monitoring & Evaluation, Econometric Modeling & Public Policy Analysis",
      eduM2Desc: "Advanced curriculum focused on multivariate statistical modeling, time-series econometrics, rigorous impact evaluation methods, development economics, and strategic project management.",
      tagEconometrics: "Econometrics",
      tagStats: "Advanced Statistics",
      tagImpact: "Impact Evaluation",
      tagPublicPolicy: "Public Policy",
      tagProjectMgmt: "Project Management",
      eduLicenceTitle: "Bachelor's Degree - Economics & Management",
      eduLicenceLevel: "3-Year Degree (BSc Equivalent)",
      eduLicenceSchool: "UADB - Alioune Diop University of Bambey",
      eduLicenceSubtitle: "Major: Applied Economics & Quantitative Analysis",
      eduLicenceDesc: "Strong theoretical foundations in microeconomics, macroeconomics, probability, inferential statistics, financial mathematics, budgetary analysis, and managerial accounting.",
      tagMicro: "Microeconomics",
      tagMacro: "Macroeconomics",
      eduCertSectionTitle: "International Certifications & Specializations",
      cert1Title: "Financial Analyst",
      cert1Issuer: "Banking Training Institute • Dakar",
      cert1Desc: "Comprehensive financial statement analysis, profitability diagnostics, business valuation, and balance-sheet modeling.",
      cert2Title: "Financial & Operational Risk Assessment",
      cert2Issuer: "AFGES • French Banking Training Academy",
      cert2Desc: "Operational risk mapping, Basel II/III prudential banking regulations, and internal banking control architectures.",
      cert3Title: "Internal Audit & Regulatory Compliance",
      cert3Issuer: "IFACI / International Audit Firm",
      cert3Desc: "Internal audit methodology, AML-CFT compliance, institutional governance, and delegation framework management.",
      cert4Title: "Power BI & Business Intelligence Specialization",
      cert4Issuer: "Microsoft / DataCamp Professional Certification",
      cert4Desc: "Advanced DAX modeling, automated Power Query data pipelines, and executive strategic decision dashboards.",
      cert5Title: "Statistics & Econometric Modeling with Stata & R",
      cert5Issuer: "DataCamp / Higher Education Academic Program",
      cert5Desc: "Survey microdata processing, multivariate regressions, panel data econometrics, and publication-ready visualizations.",
      cert6Title: "Artificial Intelligence & Automated Data Analytics",
      cert6Issuer: "Data & AI Specialized Certification",
      cert6Desc: "Prompt engineering for quantitative analysts, analytical workflow automation, and predictive AI model integration.",
      langSectionTitle: "Working Languages",
      langSectionDesc: "Proven ability to conduct international missions, lead executive committees, and author technical reports",
      langFr: "French",
      langFrLevel: "Native / professional bilingual (institutional reports, strategic steering committees, ministerial presentations)",
      langEn: "English",
      langEnLevel: "Professional working proficiency (project synthesis, technical reporting, donor relations & international audits)",

      // Expériences Professionnelles
      expTag: "Career Path",
      expTitle: "Professional Experience",
      expDesc: "Proven track record in public development agencies, premier banking groups, and international consulting firms",
      exp1Role: "Head of Monitoring & Evaluation (M&E)",
      exp1Company: "APROSI - Industrial Parks Development & Promotion Agency (Dakar)",
      exp1Date: "Feb. 2025 - Present",
      exp1Ach1: "Design and deployment of the agency's overall institutional monitoring & evaluation architecture",
      exp1Ach2: "Creation of executive Power BI strategic steering dashboards for the Director General",
      exp1Ach3: "Definition, tracking, and econometric analysis of performance indicators (KPIs) for industrial zones",
      exp1Ach4: "Cross-departmental activity data consolidation across all technical and operational directorates",
      exp1Ach5: "Production of quarterly institutional performance reports and executive decision memos",
      exp2Role: "Monitoring & Evaluation and Data Analytics Consultant",
      exp2Company: "Maarifa Consulting (Dakar)",
      exp2Date: "Mar. 2023 - Feb. 2025",
      exp2Ach1: "Conducted evaluations and field surveys for international donors (GIZ, USAID, Counterpart International, Oxfam, Speak Up Africa, MEDA, Teranga Capital)",
      exp2Ach2: "Built tailored monitoring & evaluation systems adapted to complex multi-stakeholder programs",
      exp2Ach3: "Carried out large-scale quantitative and qualitative data collection, cleaning, and statistical modeling",
      exp3Role: "Market Operations & Risk Control Officer",
      exp3Company: "Afrika Bank (formerly Banque de Dakar - BDK, Dakar)",
      exp3Date: "Nov. 2021 - Mar. 2023",
      exp3Ach1: "Permanent internal control of treasury, foreign exchange, and securities operations under WAMU/UMOA banking regulations",
      exp3Ach2: "Monitored financial exposure limits (counterparty, liquidity, interest rates) and authored prudential regulatory reports",
      exp3Ach3: "Identified operational anomalies and formulated actionable risk mitigation recommendations to secure processes",
      exp3Ach4: "Contributed to banking compliance audits, internal control missions, and market desk risk governance",
      exp4Role: "Financial & Credit Risk Analyst (Internship)",
      exp4Company: "Regional Banking Group / Financial Institution (Dakar)",
      exp4Date: "Jan. 2021 - Oct. 2021",
      exp4Ach1: "Corporate credit risk assessments, financial statements appraisal, and solvency diagnostics",
      exp4Ach2: "Participated in quarterly counterparty portfolio reviews and monitored commercial lending commitments",

      // Domaines de Compétences
      skillsTag: "Core Toolset & Know-How",
      skillsTitle: "Core Competency Domains",
      skillsDesc: "A unique balance of high-level institutional strategic vision and hands-on operational mastery of modern data tools",
      cat1Title: "Strategic Steering & Institutional Governance",
      cat1Skill1: "Institutional performance & KPI steering",
      cat1Skill2: "Executive Director General dashboards",
      cat1Skill3: "Strategic & multi-year operational planning",
      cat1Skill4: "Cross-functional institutional coordination",
      cat2Title: "Monitoring, Evaluation & Impact",
      cat2Skill1: "End-to-end M&E system architecture",
      cat2Skill2: "Rigorous impact evaluation methodologies",
      cat2Skill3: "Field surveys & digital data collection",
      cat2Skill4: "International donor reporting standards",
      cat3Title: "Risks, Banking Compliance & Control",
      cat3Skill1: "Permanent control & operational auditing",
      cat3Skill2: "Risk mapping & compliance monitoring",
      cat3Skill3: "Prudential banking regulatory framework",
      cat3Skill4: "Standard operating procedures & governance",
      cat4Title: "Data Analytics & Business Intelligence",
      cat4Skill1: "Power BI (Advanced DAX, Power Query, Datamarts)",
      cat4Skill2: "Stata (Econometrics, Panel Data, Micro-surveys)",
      cat4Skill3: "R (Data Modeling, ggplot2, tidyverse)",
      cat4Skill4: "KoboToolbox & ODK (Digital Data Collection)",
      cat5Title: "Econometrics & Quantitative Modeling",
      cat5Val1: "Applied econometrics, time series & panel regressions",
      cat5Val2: "Multivariate regression analyses & statistical simulations",
      cat6Title: "Applied Artificial Intelligence",
      cat6Val1: "AI tools integration for analytical workflows",
      cat6Val2: "Automated report generation & augmented insights",

      // Réalisations et Outils de Pilotage
      projectsTag: "Executive Systems",
      projectsTitle: "Key Systems & Strategic Tools",
      projectsDesc: "Explore the executive decision-support systems and analytical frameworks designed and deployed throughout my career",
      proj1Badge: "Executive Leadership & APROSI",
      proj1Title: "Comprehensive M&E System & Strategic KPI Architecture",
      proj1Desc: "Full design of the institutional M&E framework and deployment of automated Power BI executive dashboards to monitor industrial park developments in Senegal.",
      proj1Status: "In Production • Active Deployment",
      proj2Badge: "GIZ • USAID • Oxfam • Speak Up Africa",
      proj2Title: "Program M&E Systems & International Donor Evaluations",
      proj2Company: "Maarifa Consulting • International Donors",
      proj2Desc: "Executed extensive field surveys, rigorous econometric data modeling with Stata & R, and authored high-impact donor evaluation reports.",
      proj3Badge: "Banking Sector • WAMU / UMOA",
      proj3Title: "Permanent Internal Control & Market Risk Monitoring System",
      proj3Company: "Afrika Bank (formerly Banque de Dakar - BDK)",
      proj3Desc: "Daily surveillance of treasury and forex market operations, regulatory compliance audits, and financial flow risk mitigation.",
      btnViewCase: "Details",

      // Contact & Coordonnées
      contactTag: "Contact & Availability",
      contactTitle: "Let's Work Together",
      contactDesc: "Available to discuss strategic leadership roles, monitoring & evaluation frameworks, data analytics consultancies, or digital transformation initiatives.",
      labelLocation: "Location",
      valLocation: "Dakar, Senegal (International Mobility)",
      labelPhone: "Phone",
      labelPhone2: "Direct Line",
      labelEmail: "Direct Email",
      labelProfiles: "Professional Profiles",
      valLinkedIn: "Verified Profile: Boubacar NDIR",
      formName: "Full Name / Organization",
      formEmail: "Email Address",
      formMessage: "Your Message or Opportunity",
      placeholderName: "E.g.: John Doe - Executive Director / International Donor",
      placeholderEmail: "E.g.: contact@organization.org",
      placeholderMessage: "Describe your project, monitoring & evaluation needs, or strategic opportunity...",
      btnSend: "Send Message",

      // Footer
      footerRights: "© 2026 Boubacar NDIR - Strategic Steering, Data Analytics & AI Specialist - All Rights Reserved",

      // Modal Headers
      modalChallengeLabel: "Institutional Framework & Context",
      modalSolutionLabel: "System Architecture & Implemented Actions",
      modalImpactLabel: "Impact & Tangible Value Added",
      modalToolsLabel: "Tools & Mobilized Competencies",

      // Toasts
      toastCopied: "Email address (boubacarndir7@gmail.com) copied to clipboard!",
      toastOpeningMail: "Opening your email client..."
    },

    zh: {
      // Navigation
      navAbout: "个人简介",
      navEducation: "教育与专业认证",
      navExperience: "工作经历",
      navSkills: "核心专业技能",
      navProjects: "决策系统与工具",
      navContact: "联系方式",
      btnDownloadPdf: "下载简历",

      // Hero
      heroStatus: "监控与评估负责人 @ APROSI • 数据与人工智能专家",
      heroTitleRole: "战略规划、数据分析与人工智能专家",
      heroSubtitle: "精通战略规划、监控与评估（M&E）、风险管理及决策支持系统。具备在跨行业和国际多元环境中统筹、优化复杂机构的卓越能力。",
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

      // Profil & Vision
      aboutTag: "个人概况与愿景",
      aboutTitle: "跨领域、严谨务实的综合专业实力",
      aboutDesc: "从高层机构战略规划、严谨统计分析到前沿人工智能的深度融合",
      aboutCard1Title: "专业综述",
      aboutText1: "专注于机构绩效评估、监控与评估体系（M&E）、操作与金融风险管理及计量数据建模的高级专家。",
      aboutText2: "深度赋能高管决策层、商业银行机构以及国际发展援助组织（GIZ、USAID、Oxfam、MEDA等），提供机构重塑、合规治理与战略决策支持。",
      aboutCard2Title: "核心优势与业务赋能",
      val1: "机构绩效管理体系建设与高管核心KPI指标监控",
      val2: "端到端监控与评估（M&E）体系构建与严谨影响评估",
      val3: "操作与金融风险管理、银行常态化内控与合规审计",
      val4: "高级统计建模、商业智能（Power BI）与现代AI分析工具",

      // Formation & Certifications
      eduTag: "学术历程与专业资质",
      eduTitle: "教育与专业认证",
      eduDesc: "计量经济学、金融与数据分析领域的深厚学术底蕴，兼备多项权威国际专业认证",
      eduUniSectionTitle: "大学高等教育",
      eduM2Title: "应用计量经济学硕士 (Master 2)",
      eduM2Level: "五年制研究生学历 (Bac+5)",
      eduM2School: "UADB - 阿里乌恩·迪奥普大学 (班贝)",
      eduM2Subtitle: "专业方向：项目监控与评估、计量经济建模与公共政策分析",
      eduM2Desc: "高水平学术培养，深入掌握高级多元统计建模、时间序列计量经济学、微观计量影响评估方法、发展经济学以及战略项目管理。",
      tagEconometrics: "计量经济学",
      tagStats: "高级统计学",
      tagImpact: "影响评估",
      tagPublicPolicy: "公共政策",
      tagProjectMgmt: "项目管理",
      eduLicenceTitle: "经济学与管理学学士 (Licence)",
      eduLicenceLevel: "三年制本科学历 (Bac+3)",
      eduLicenceSchool: "UADB - 阿里乌恩·迪奥普大学 (班贝)",
      eduLicenceSubtitle: "专业方向：应用经济学与定量分析",
      eduLicenceDesc: "扎实的理论与定量基础，涵盖微观经济学、宏观经济学、概率论与推断统计、金融数学、预算分析与管理会计。",
      tagMicro: "微观经济学",
      tagMacro: "宏观经济学",
      eduCertSectionTitle: "国际专业认证与专题进修",
      cert1Title: "金融分析师专业认证",
      cert1Issuer: "银行培训学院 • 达喀尔",
      cert1Desc: "深入财务报表分析、盈利能力诊断、企业估值建模与资产负债管理。",
      cert2Title: "金融与操作风险评估认证",
      cert2Issuer: "AFGES • 法国银行培训学院",
      cert2Desc: "操作风险地图编制、巴塞尔协议 II/III 审慎监管准则与银行内部控制体系。",
      cert3Title: "内部审计与法规合规认证",
      cert3Issuer: "IFACI / 国际权威审计机构",
      cert3Desc: "内部审计工作方法论、反洗钱与反恐融资 (AML-CFT) 合规、机构治理及授权机制管理。",
      cert4Title: "Power BI 与商业智能 (BI) 专业进修",
      cert4Issuer: "微软 (Microsoft) / DataCamp 官方认证",
      cert4Desc: "高级 DAX 复杂建模、自动化 Power Query 数据清洗管线及高管战略决策仪表板构建。",
      cert5Title: "Stata 与 R 语言高级统计与计量建模",
      cert5Issuer: "DataCamp / 高等教育学术培养项目",
      cert5Desc: "调查微观数据清洗与处理、高级回归模型、面板数据计量分析及高质量学术图表呈现。",
      cert6Title: "人工智能 (AI) 与数据自动化应用",
      cert6Issuer: "数据与人工智能专题研修认证",
      cert6Desc: "面向数据分析师的提示工程 (Prompt Engineering)、分析工作流自动化及预测性AI模型整合。",
      langSectionTitle: "工作语言能力",
      langSectionDesc: "具备主导国际化任务、主持高管战略委员会及撰写高规格技术备忘录的语言能力",
      langFr: "法语",
      langFrLevel: "母语级 / 专业双语（精通撰写高规格官方报告、主持战略董事会与部委汇报）",
      langEn: "英语",
      langEnLevel: "专业工作水准（熟练撰写项目评估全英文报告、对接国际大型多边援助机构）",

      // Expériences Professionnelles
      expTag: "职业发展历程",
      expTitle: "专业工作经历",
      expDesc: "在国家级公共开发机构、领先商业银行集团及国际咨询机构积累了深厚的实务管理经验",
      exp1Role: "监控与评估负责人 (Responsable S&E)",
      exp1Company: "APROSI - 塞内加尔工业园区建设与促进局 (达喀尔)",
      exp1Date: "2025年2月 - 至今",
      exp1Ach1: "全面负责全局性监控与评估（M&E）制度的框架设计与落地推行",
      exp1Ach2: "基于 Power BI 为最高管理层构建全自动化机构战略决策看板",
      exp1Ach3: "制定、监控并计量分析各工业园区与经济特区的核心绩效指标 (KPI)",
      exp1Ach4: "统筹协调局内各业务部门开展常态化业务数据采集、清洗与汇总",
      exp1Ach5: "撰写定期机构绩效评估报告并为局长提供关键战略决策支持备忘录",
      exp2Role: "监控与评估及数据分析顾问",
      exp2Company: "Maarifa Consulting 咨询公司 (达喀尔)",
      exp2Date: "2023年3月 - 2025年2月",
      exp2Ach1: "为主流国际出资机构（GIZ、USAID、Counterpart International、Oxfam、Speak Up Africa、MEDA、Teranga Capital）执行多项大型项目评估与实地调研",
      exp2Ach2: "为复杂多利益相关方发展项目定制构建全套监控与评估（M&E）体系",
      exp2Ach3: "高效开展大规模定量与定性调查数据采集、清洗、统计分析与计量建模",
      exp3Role: "金融市场交易内控与风险管理专员",
      exp3Company: "Afrika Bank 商业银行 (原达喀尔银行 - BDK, 达喀尔)",
      exp3Date: "2021年11月 - 2023年3月",
      exp3Ach1: "对资金营运、外汇及证券交易实施常态化内控，严格保障西非货币联盟（UMOA）银行法规合规",
      exp3Ach2: "实时监控金融交易风险限额（交易对手、流动性、利率风险）并编制审慎监管报告",
      exp3Ach3: "排查操作风险异常，针对业务痛点提出切实可行的内控优化与流程加固建议",
      exp3Ach4: "全程参与金融市场业务合规审查、常态化内部审计以及操作风险治理",
      exp4Role: "金融与信贷风险分析师 (实习)",
      exp4Company: "西非区域商业银行 / 金融机构 (达喀尔)",
      exp4Date: "2021年1月 - 2021年10月",
      exp4Ach1: "对企业信贷申请进行深度财务报表分析、偿债能力评估与信用评级",
      exp4Ach2: "参与交易对手资产组合的定期合规审查，动态跟踪商业授信业务风险敞口",

      // Domaines de Compétences
      skillsTag: "专业技能工具箱",
      skillsTitle: "核心能力领域",
      skillsDesc: "融合高水准机构宏观战略思维与现代数据工具的扎实操作能力",
      cat1Title: "战略规划与机构治理",
      cat1Skill1: "机构绩效管理与战略KPI指标",
      cat1Skill2: "最高管理层决策仪表板架构",
      cat1Skill3: "战略与多年期运营规划统筹",
      cat1Skill4: "跨部门与机构多利益方协同",
      cat2Title: "监控评估 (M&E) 与影响评估",
      cat2Skill1: "端到端监控与评估完整体系",
      cat2Skill2: "严谨科学的项目影响评估方法",
      cat2Skill3: "实地调研设计与数字化移动采集",
      cat2Skill4: "符合国际出资方标准的专业报告",
      cat3Title: "风险管理、合规与内控",
      cat3Skill1: "常态化内部控制与运营业务审计",
      cat3Skill2: "风险地图绘制与法规合规监管",
      cat3Skill3: "银行审慎监管准则与风险指标",
      cat3Skill4: "作业流程规范治理与内控加固",
      cat4Title: "数据分析与商业智能 (BI)",
      cat4Skill1: "Power BI (高级DAX、Power Query、数据建模)",
      cat4Skill2: "Stata (计量分析、面板数据、微观调查)",
      cat4Skill3: "R 语言 (统计建模、ggplot2、tidyverse)",
      cat4Skill4: "KoboToolbox 与 ODK (数字化数据采集)",
      cat5Title: "计量经济学与定量建模",
      cat5Val1: "应用计量经济学、时间序列与面板数据模型",
      cat5Val2: "多元回归推断分析与经济预测模拟",
      cat6Title: "人工智能 (AI) 行业应用",
      cat6Val1: "AI工具与分析工作流的深度整合应用",
      cat6Val2: "数据洞察自动化提炼与智能报告生成",

      // Réalisations et Outils de Pilotage
      projectsTag: "决策支持系统",
      projectsTitle: "战略成果与管理工具",
      projectsDesc: "深入了解在职业生涯中主导设计并落地实施的核心决策支持系统与分析模型",
      proj1Badge: "最高管理层与 APROSI",
      proj1Title: "全套机构级监控与评估体系及战略KPI架构",
      proj1Desc: "完整主导方法论框架设计，基于 Power BI 部署全自动化高管战略决策仪表板，实现塞内加尔全国工业园区推进态势动态监控。",
      proj1Status: "已投产运行 • 全面应用中",
      proj2Badge: "GIZ • USAID • Oxfam • Speak Up Africa",
      proj2Title: "项目监控评估体系与国际组织调研评估",
      proj2Company: "Maarifa Consulting • 国际出资机构",
      proj2Desc: "组织实施大规模实地调研，运用 Stata 和 R 开展深度计量统计建模，出具高质量决策咨询报告。",
      proj3Badge: "银行业界 • 西非货币联盟 (UMOA)",
      proj3Title: "常态化内部控制与金融市场风险监控系统",
      proj3Company: "Afrika Bank 商业银行 (原达喀尔银行 - BDK)",
      proj3Desc: "实时监督银行资金池与外汇市场交易，确保西非货币联盟（UMOA）法规合规，全面筑牢资金链风险防线。",
      btnViewCase: "查看详情",

      // Contact & Coordonnées
      contactTag: "联系沟通与合作意向",
      contactTitle: "期待与您携手合作",
      contactDesc: "随时期待就机构战略规划、监控与评估体系搭建、专业数据分析咨询或数字化转型开展深入探讨。",
      labelLocation: "常驻工作地点",
      valLocation: "塞内加尔·达喀尔 (支持国际出差与派遣)",
      labelPhone: "联系电话",
      labelPhone2: "直拨联系电话",
      labelEmail: "直接电子邮箱",
      labelProfiles: "专业社交网络",
      valLinkedIn: "领英 (LinkedIn) 认证主页: Boubacar NDIR",
      formName: "您的姓名 / 所属机构",
      formEmail: "您的电子邮箱",
      formMessage: "合作意向或留言内容",
      placeholderName: "例如：张总 - 执行总裁 / 国际机构代表",
      placeholderEmail: "例如：contact@organization.org",
      placeholderMessage: "请简要描述您的项目需求、监控评估咨询或战略合作意向...",
      btnSend: "发送联络信息",

      // Footer
      footerRights: "© 2026 Boubacar NDIR - 战略规划、数据分析与人工智能专家 - 保留所有权利",

      // Modal Headers
      modalChallengeLabel: "机构背景与面临挑战",
      modalSolutionLabel: "实施方案与执行举措",
      modalImpactLabel: "成效产出与战略增值",
      modalToolsLabel: "所运用工具与专业技能",

      // Toasts
      toastCopied: "电子邮箱 (boubacarndir7@gmail.com) 已成功复制到剪贴板！",
      toastOpeningMail: "正在启动您的邮件客户端..."
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
        const msg = (translations[currentLang] && translations[currentLang].toastCopied) 
          ? translations[currentLang].toastCopied 
          : `Email (${email}) copié !`;
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
      
      const toastMsg = (translations[currentLang] && translations[currentLang].toastOpeningMail) 
        ? translations[currentLang].toastOpeningMail 
        : "Ouverture de votre messagerie...";
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
