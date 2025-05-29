import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import '../styles/CV.css';

const CV =() => {
    const experiences = [
        {
            title: "Chef de service – Caisse Nationale d'assurance Maladie (CNAM)",
            period: "11/2021 – Aujourd'hui",
            tasks: [
                "Développement d'applications sous Excel, analyse, extraction et transformation des données.",
                "Reporting, statistiques et apurements.",
                "Technologies : Excel VBA – Oracle forms – PL/SQL – SQL Developer"
            ]
        },
        {
            title: "Technicien support applicatif – Quanta (indépendant)",
            period: "06/2022 – 06/2023",
            tasks: [
                "Traiter les tickets sur Notion, ClickUp, Hubspot…",
                "Réponses aux mails, meeting clients pour fournir des réponses et guider les utilisateurs sur la plateforme.",
                "Connexion avec les développeurs afin de proposer des améliorations ou demander des détails.",
                "Élaboration de rapports et HealthChecks pour les différents utilisateurs"
            ]
        },
        {
            title: "Sous-chef de service – Caisse Nationale d’Assurance Maladie (CNAM)",
            period: "06/2008 – 12/2019",
            tasks: [
                "Gestion des demandes d’accord préalable.",
                "Gestion des demandes d’admission pour les affection prises en charge intégralement.",
                "Développement d’applications sous Excel / VBA (Suivi des présences, heures supplémentaires, congés… , gestion des demandes et édition des décisions de prises en charge pour dialyse péritonéale…)",
                "Formulaires et interfaces Oracle forms"
            ]
        },
        {
            title: "Data analyst et chargé de reporting – LaSer Contact",
            period: "08/2007 – 05/2008",
            tasks: [
                "Collecte, analyse et présentation des données.",
                "Statistiques - rapports journaliers, hebdomadaires, mensuels…",
                "Comité de pilotage et analyse décisionnelle.",
                "Planifications des équipes d'assistance et gestion des ressources humaines.",
                "Technologies : Access VBA – Excel VBA – SQL."
            ]
        },
        {
            title: "Technicien support applicatif N2 – LaSer Contact",
            period: "06/2007 – 08/2007",
            tasks: [
                "Réception d'appels clients.",
                "Dépannage des caisses enregistreuses et des appareils de paiement à distance.",
                "Contact, tri et mise en relation avec les équipes N3 et maintenance."
            ]
        }
    ];

    const [visibleExperiences, setVisibleExperiences] = useState(
        Array(experiences.length).fill(false)
    );

    const toggleDetails = (index) => {
        const newVisibility = [...visibleExperiences];
        newVisibility[index] = !newVisibility[index];
        setVisibleExperiences(newVisibility);
    };

    const projects = [
        {
            title: "Extraction des données et facturations restos selon une période donnée - KOOL",
            period : "11/2024",
            tasks: [
                "Création des critères de choix et d'extraction.",
                "Création du script d'extraction.",
                "Création des évènements de déclenchement.",
                "Correction des bugs et génération des factures automatiquement."
            ]
        },
        {
            title: "Application de gestion pour clubs de football – Exceloco",
            period : "09/2024 - 10/2024",
            tasks: [
                "Saisie et suivi des absences des élèves et des encadrants",
                "Saisie et suivi des emplois du temps pour les différentes classes.",
                "Suivi des présences et absences par élève.",
                "Reporting et suivi par club.",
                "Édition des bilans des différentes semaines, saisie interactive et enregistrement des données.",
                "Visualisation des détails des séances.",
                "Calcul des mesures de perception de l’effort.",
                "Calcul des différents indicateurs (impact physique, mental...).",
                "Extraction automatique des images sur les bilans et enregistrement des positions de chaque image.",
                "Interface de saisie des tests et des mesures.",
                "Récap et tableau de bord interactif avec des graphiques illustrant les résultats saisis.",
                "Administration : gestion des élèves, des encadrants, des clubs, des paramètres des absences, échelle de Borg, images…"
            ]
        },
        {
            title: "Application de choix de transporteurs et de tracking – Slate",
            period : "09/2024",
            tasks: [
                "Import du fichier source des ventes.",
                "Extraction et transformation des lignes de vente selon la période demandée.",
                "Détermination de la difficulté par zone et par département.",
                "Calcul dynamique des montants relatifs.",
                "Choix du transporteur le plus privilégié et le mode de transport le plus avantageux.",
                "Validation et préparation des commandes.",
                "Attributs visuels pour détection des produits spécifiques.",
                "Système de tracking.",
                "Préparation des fichiers d’export selon le choix du transporteur à charger sur les différentes plateformes.",
                "Enregistrement de l’historique et génération d’un numéro de tracking."
            ]
        },
        {
            title : "Outil d'audit des valeurs énergétiques - Perfect Engineering",
            period : "06/2024 - 07/2024",
            tasks: [
                "Calcul et génération des rapports de consommation d’énergie.",
                "Import des fichiers de saisie et fiches d’intervention.",
                "Création des dossiers et fichiers des gouvernorats et communes.",
                "Analyse et vérification de la cohérence des données saisies.",
                "Export des données sur les différentes tables Access.",
                "Préparation des données et calcul des différents KPI.",
                "Génération des rapports Word de chaque commune.",
                "Génération des rapports des différents gouvernorats."
            ]
        },
        {
            title : "Application de gestion et de vérification des fiches de paie – Habitat du Littoral",
            period : "12/2023",
            tasks :[
                "Mise en place des paramètres des différentes caisses et régimes.",
                "Mise en place de fiches de paie dynamiques selon profil collaborateur et son régime.",
                "Gestion du SMIC et autres modifications pertinentes.",
                "Gestion du personnel, des congés, des congés de maladie, maternité, paternité, accidents de travail et loi Fillon."
            ]
        },
        {
            title :"Outil d’aide au dimensionnement des pompes à chaleur – Wolf France",
            period : "05/2023",
            tasks : [
                "Interface de saisie installateur – client – lieu et température extérieure relative aux données géographiques.",
                "Saisie des informations de construction (année de construction, surface, hauteur, ventilation, isolation, mitoyenneté…)",
                "Mise en place des différentes tables de correspondances.",
                "Calcul et sélection des différents types de pompes (CHA – FHA).",
                "Calcul des résultats de chauffage, deltas de référence, débit de chauffage...",
                "Mise en place d’un graphique dynamique déterminant la déperdition, la puissance effective, le point de bivalence…",
                "Export en PDF pour envoi par mail et préparation des devis.",
                "Système d’administration pour la mise en place des différentes données et valeurs."
            ]
        },
        {
            title : "Outil de calcul de la recyclabilité – Refashion",
            period : "04/2023",
            tasks : [
                "Mise en place d’un système de calcul projetant la recyclabilité d’un produit en fonction de ses étoffes, ses fournitures, leurs masses et compositions.",
                "Un deuxième système de calcul de la recyclabilité des chaussures (Tiges, semelles et fournitures).",
                "Système d’administration pour la gestion des listes de composants.",
                "Système de détection du pourcentage de la recyclabilité avec une échelle dynamique en fonction des données renseignées."
            ]
        },
        {
            title : "Planning et rétroplanning – Crédit Mutuel",
            period : "02/2023",
            tasks :[
                "Création d’interfaces de saisie des évènements, des tâches…",
                "Création d’agenda du style Google Calendar sous Excel.", 
                "Gestion des formes pour insérer, mettre à jour et supprimer des évènements sur le planning et le rétroplanning.",
                "odification automatique de la taille, l’aspect, le texte et les icônes des formes en fonction de la durée et des données de chaque évènement.",
                "Application multi-utilisateur"
            ]
        }, 
        {
            title : "Outil de gestion de la planification – Exceloco",
            period : "2022 - 2023", 
            tasks :[
                "Privilèges dynamiques selon profil utilisateur.", 
                "Configuration des besoins en personnel pour couvrir la charge estimée.",
                "Système de souhaits au profit du personnel pour la saisie de leur temps et planning.",
                "Validation des temps et souhaits par les chefs d'équipes et administrateurs.",
                "Import des fichiers d'absences, transformation des données et intégration dans la base de planification.",
                "Reporting et statistiques.",
                "Application multi-utilisateur"
            ]
        },
        {
            title : "Système de saisie et de suivi des temps de projets – Panorama architecture",
            period : "2022",
            tasks :[
                "Formulaire de saisie des heures de travail des employés sur chaque projet.",
                "Création de fichiers collaborateurs dynamique sur le réseau.",
                "Onglet suivi du temps par projet et par phase de projet.", 
                "Système d'authentification et affichage dynamique selon le profil utilisateur.",
                "Onglet d’administration du personnel, des projets, des phases et des budgets."
            ]
        },
        {
            title : "Import des données depuis les fichiers PDF et contrôle des valeurs – VLDV",
            period : "2022",
            tasks : [
                "Extraction des données à partir des PDF envoyé par le laboratoire, les intégrer dans une table de données.",
                "Comparaison des données extraites et des résultats.",
                "Marqueurs visuels des bonnes ou mauvaises correspondances.", 
                "Process automatisé par quelques clics, gain de temps et remplacement de l’activité de saisie et opérations manuelles réduisant ainsi le temps de traitement de 90%."
            ]
        }
    ];

    const [visibleProjects, setVisibleProjects] = useState(
        Array(projects.length).fill(false)
    );

    const toggleProjectsDetails = (indexProject) => {
        const newVisibility = [...visibleProjects];
        newVisibility[indexProject] = !newVisibility[indexProject];
        setVisibleProjects(newVisibility);
    };

    const formations =[
        {
            title: "Formation Excel initiation",
            pdf: '../assets/Plan_de_formation_Excel_initiation.pdf'
        },
        {
            title : "Formation Excel avancé",
            pdf : '../assets/Plan_de_formation_Excel_avancé.pdf'
        },
        {
            title : "Formation Excel expert",
            pdf : '../assets/Plan_de_formation_excel_expert.pdf'
        },
        {
            title : "Formation Excel VBA",
            pdf : '../assets/Plan_de_formation_VBA.pdf'
        }
    ];

    const [visibleFormations, setVisibleFormations] = useState(
        Array(formations.length).fill(false)
    );

    const toogleFormationsDetails= (indexFormation) => {
        const newVisibility = [...visibleFormations];
        newVisibility[indexFormation] = !newVisibility[indexFormation];
        setVisibleFormations(newVisibility);
    }

    return(
        <div className='cv-container'>
            <div className='contact-section'>
                {/*<p>Oussama Berraies</p> */}
                <p>Bloc 23 App 1-3 Cité Romana 2062 Tunis</p>
                <p>
                    <FaWhatsapp className='icon' /> (+216) 99 44 28 79 
                </p>
                <p>
                    <FaEnvelope className="icon" />
                    <a href="mailto:oberrraies@gmail.com">oberrraies@gmail.com</a>
                </p>
                <p>
                    <FaLinkedin className="icon" />
                    <a href="https://www.linkedin.com/in/oussama-berraies" target="_blank" rel="noopener noreferrer">
                        Oussama Berraies
                    </a>
                </p>
            </div>
            <hr className="divider" />
            <div className='profil-section'>
                <div className='profil-left'>
                    <p>PROFIL</p>
                </div>
                <div className='profil-right'>
                    <p>Data Analyst et Développeur Excel VBA avec plus de 14 ans d'expérience en automatisation de processus 
                        et analyse de données. Expert en tableaux de bord interactifs, optimisation des flux 
                        et extraction de données complexes. Maîtrise de VBA, SQL et Excel pour transformer les données en insights 
                        exploitables, facilitant des décisions rapides et efficaces. Innovant, rigoureux et orienté résultats, 
                        je crée des solutions sur mesure pour optimiser la performance des équipes et entreprises.</p>
                </div>
            </div>
            <hr className="divider" />
            <div className='skills-section'>
                <div className='skills-left'>
                    <p>COMPÉTENCES ET CAPACITÉS</p>
                </div>
                <div className='skills-right'>
                    <ul>
                        <li>Gestion de projets – encadrement – formations – Consulting – Réalisation de projets sur mesures</li>
                        <li>Excel – VBA – SQL – Oracle Forms</li>
                    </ul>
                </div>
            </div>
            <hr className="divider" />
            <div className='formation-section'>
                <div className='formation-left'>
                    <p>FORMATIONS ET DIPLOMES</p>
                </div>
                <div className='formation-right'>
                    <p>FACULTE DES SCIENCES ECONOMIQUES ET DE GESTION – TUNIS – LICENCE FONDAMENTALE EN INFORMATIQUE APPLIQUEE A LA GESTION</p>
                </div>
            </div>
            <hr className="divider" />
            <div className='experience-Section'>
                <div className='experience-left'>
                    <p>EXPÉRIENCE</p>
                </div>
                <div className='experience-right'>
                {experiences.map((exp, index) => (
                    <div key={index} className="single-experience">
                        <div className="experience-title-container" onClick={() => toggleDetails(index)}>
                            <p className="experience-title">{exp.title}</p>
                            <button onClick={() => toggleDetails(index)} className="arrow-btn">
                                {visibleExperiences[index] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </button>
                        </div>
                        {visibleExperiences[index] && (
                            <div className="experience-details show">
                                <p className="Period">{exp.period}</p>
                                <ul>
                                    {exp.tasks.map((task, i) => (
                                        <li key={i}>{task}</li>
                                    ))}
                                </ul>
                                {/*<hr className="divider-right-only" />*/}
                                {index !== experiences.length - 1 && <hr className="divider-right-only" />}
                            </div>
                        )}
                    </div>
                ))}
                </div>
            </div>
            <hr className="divider" />
            <div className='project-Section'>
                <div className='project-left'>
                    <p>PROJETS</p>
                </div>
                <div className='project-right'>
                    {projects.map((prj, indexProject) => (
                        <div key={indexProject} className='single-project'>
                            <div className='project-title-container' onClick={() => toggleProjectsDetails(indexProject)}>
                                <p className='project-title'>{prj.title}</p>
                                <button onClick={() => toggleProjectsDetails(indexProject)} className="arrow-btn">
                                    {visibleProjects[indexProject] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                </button>
                            </div>
                            {visibleProjects[indexProject] && (
                                <div className="project-details show">
                                    <p className="Period">{prj.period}</p>
                                    <ul>
                                        {prj.tasks.map((task, i) => (
                                            <li key={i}>{task}</li>
                                        ))}
                                    </ul>
                                    {indexProject !== projects.length - 1 && <hr className="divider-right-only" />}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <hr className="divider" />
            <div className='Tool-Section'>
                <div className='Tool-Left'>
                    <p>OUTILS COLLABORATIFS</p>
                </div>
                <div className='Tool-Right'>
                    <ul>
                        <li><strong>Outils de communications : </strong>Microsoft teams - Google meet - Slack - Zoom - Discord - SharePoint...</li>
                        <li><strong>Outils de gestion de projets : </strong>Jira - Notion - ClickUp - Azure DevOps...</li>
                        <li><strong>Outils pour tests et déboggage : </strong>Rubberduck VBA - MZ-Tool - Postman...</li>
                    </ul>
                </div>
            </div>
            <hr className="divider" />
            <div className='Formateur-Section'>
                <div className='Formateur-Left'>
                    <p>FORMATIONS</p>
                </div>
                <div className='Formateur-Right'>
                    {formations.map((formation, indexFormation) => (
                        <div key={indexFormation} className='single-formation'>
                            <div className='formation-title-container' onClick={() => toogleFormationsDetails(indexFormation)}>
                                <p className='formation-title'>{formation.title}</p>
                                <button onClick={() => toogleFormationsDetails(indexFormation)} className='arrow-btn'>
                                    {visibleFormations[indexFormation] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                </button>
                            </div>
                            {visibleFormations[indexFormation] && (
                                <div className='formation-details show'>
                                    <button
                                        onClick={() => window.open(formation.pdf, '_blank')}
                                        className="view-details-btn"
                                    >
                                        Plan de la formation →
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CV;