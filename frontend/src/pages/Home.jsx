import React, { useState, useEffect } from "react";
import '../styles/Home.css';


// Fonction pour incrémenter les nombres
const CountUp = ({ target }) => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCount(prevCount => {
          if (prevCount < target) {
            return prevCount + 1;
          } else {
            clearInterval(interval);
            return target;
          }
        });
      }, 50); // Vitesse d'incrémentation en ms
  
      return () => clearInterval(interval); // Nettoyage
    }, [target]);
  
    return <span>{count}</span>;
};
const Home =() => {

    return(
        <div className="home">
            <div className="hero-text">
                <p>Bonjour, je suis Oussama Berraies, Data Analyst et Développeur Excel VBA. 
                    J&apos;excelle dans l&apos;automatisation des processus et la création de tableaux de bord interactifs, 
                    transformant des données complexes en insights exploitables pour des décisions rapides et efficaces.
                </p>
            </div>
            {/* Diviseur */}
            <div className="divider"></div>
            
            <div className="info-block">
                <div className="info-item">
                    <p>Années d'expériences</p>
                    <h3>+<CountUp target={14} /></h3>
                </div>
                <div className="info-item">
                    <p>Projets réalisés</p>
                    <h3>+<CountUp target={30} /></h3>
                </div>
                <div className="info-item">
                    <p>Couverture mondiale</p>
                    <h3>+<CountUp target={5} /></h3>
                </div>
            </div>

            <div className="divider"></div>
            <div className="intro-text">
                <p>Avec une solide expérience en analyse de données et en développement VBA, 
                    je mets mes compétences au service de vos projets pour optimiser vos processus et améliorer votre prise de décision.</p>
            </div>
        </div>
    );
}

export default Home;