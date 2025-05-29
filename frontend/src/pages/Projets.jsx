import React from 'react';
import '../styles/Projets.css';

const projects = [
    {
        id: 1,
        image: "/assets/Projets/Foot/Logo_Exceloco.png",
        title: "Application de gestion pour clubs de football",
        description: `L'objectif est de créer un suivi complet des présences/absences et rendement des élèves et encadrants,
                    permettre la gestion des emplois de temps et de produire des reportings hebdomadaires. 
                    L'application offre des outils de visualisation, de calcul des indicateurs de performances.`,
        period: "09/2024 - 10/2024"
    },
    {
        id: 2,
        image: "/assets/Projets/Perfect_Engineering/Logo_Perfect.png",
        title: "Outil d'audit des valeurs énergétiques",
        description: `Le projet consiste à développer un système pour le calcul et la génération de rapports de 
                    consommation d'énergie. Il inclut l'importation de fichiers de saisie, la création de dossiers 
                    pour les différents gouvernerats et communes, l'analyse et la vérification des cohérences des données.
                    Le système permet d'exporter les informations via Access et générer des rapports Word détaillées. `,
        period: "06/2024 - 07/2024"
    },
    {
        id: 3,
        image: "/assets/Projets/Slate/Slate_Logo.jpg",
        title: "Application de choix de transporteurs et de tracking",
        description: `Le besoin est de créer un système pour importer les fichiers de ventes, extraire et transformer les données
                    selon une période choisie, évaluer la difficulté d'accès par zone et département. L'application intègre 
                    un calcul dynamique des montants, le choix du transporteur optimal, et la validation des commandes. 
                    Des atributs visuels ainsi qu'un système de tracking qui assure le suivi des envois. Exportation des données et intégrations des résultats.`,
        period: "Septembre 2024"
    },
    {
        id: 4,
        image: "/assets/Projets/Habitat_Littoral/Logo.png",
        title: "Application des gestion et de vérification des fiches de paie.",
        description: `L'application est cençue pour gérer et vérifier les fiches de paie, incluant la configuration 
                    des différentes caisses et régimes. Elle permet de créer des fiches dynamiques selon le profil 
                    des collaborateurs, de gérer les changements des SMIC, ainsi que les congés, maladies, maternité, 
                    paternité, accidents de travail et la loi fillion. `,
        period: "Décembre 2023"
    },
    {
        id: 5,
        image: "/assets/Projets/GD_France/Logo.png",
        title: "Reporting et tableau de bord commercial.",
        description: `Création d'une application commerciale pour un importateur spécialisé dans la mobilité.
                        Administration, import des différents fichiers isssus des exports web, transformation et nettoayge des données,
                        gestion des contrats et périodes, tableau de bord interactif.`,
        period: "Août 2023"
    },
    {
        id: 6,
        image: "/assets/Projets/Wolf/Logo.png",
        title: "Outil d'aide au dimensionnement des pompes à chaleur.",
        description: `L'outil a pour objectif de dimensionner les pompes à chaleurs, permettant aux installateurs et aux clients 
                    de saisir les données caractéristiques de construction. L'outil comporte des tables de correspondance, 
                    des calculs de chauffage, et un graphique dynamique visant la déperdition et la puissance.
                    L'outil permet également d'explorer les résultats en PDF pour plus de portabilité et comprend un 
                    système d'administration pour la gestion des données et valeurs.`,
        period: "Mai 2023"
    },
    {
        id: 7,
        image: "/assets/Projets/Refashion/Logo.png",
        title: "Outil de calcul de la recyclabilité.",
        description: `Mise en place d'un système de saisie intelligent et de calculs interactifs permettant d'évaluer la recyclabilité 
                    des produits textiles et chaussures, en fonction des matériaux et compositions. Il comprend un sytème 
                    d'administration pour gérer les composants et une échelle dynamique pour détecter le pourcentage de recyclabilité.`,
        period: "Avril 2023"
    },
    {
        id: 8,
        image: "/assets/Projets/Credit_Mutuel/Logo.png",
        title: "Planning et rétroplanning.",
        description: `Agenda interactif type Google Calendar, avec saisie et gestion d'évènements via des formulaires. 
                    Les plannings sont automatiquement générés avec de formes dynamiques et conditionnelles (taille, couleur, texte, icônes..).
                    L'application est multi-utilisateurs et permet l'ajout, la mise à jour et la suppression d'évènements en temps réel. `,
        period: "Février 2023"
    },
    {
        id: 9,
        image: "/assets/Projets/Foot/Logo_Exceloco.png",
        title: "Application de gestion de la planification.",
        description: `Outil Excel de planification des ressources avec gestion des profils utilisateurs, 
                    configuration dynamique des charges, système de souhaits personnel, validation hiéarchique, 
                    import automatisé des absences et génération de rapports statistiques. 
                     Application multi-utilisateurs.`,
        period: "Février 2023"
    }
];

const Projects = () => {
    return (
        <div className="projects-container">
            <div className='projects-row first-row-spacing'>
                {projects.map((project) => (
                    <div className='single-project-container' key={project.id}>
                        <div className='project-card'>
                            <div className='project-image'>
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className='Project-body'>
                                <div className='project-title'>
                                    <h3>{project.title}</h3>
                                </div>
                                <div className='project-description'>
                                    <p>{project.description}</p>
                                </div>
                                <div className='project-tail'>
                                    <div className='project-period'>
                                        <p>{project.period}</p>
                                    </div>
                                    <div className="project-button">
                                        <button>Voir plus</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
