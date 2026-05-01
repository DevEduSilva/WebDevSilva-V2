import React, { useState } from 'react';
import './About.css';
import fotoPerfil from '../../assets/imgs/Eu.jpg';

export function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="about" className={isExpanded ? 'show' : ''}>
      <img
        id="euMesmo"
        src={fotoPerfil}
        alt="Eu, Eduardo, admirando o mar e pensando"
      />

      <div className="textAbout">
        <h3 className="btnClass">SOBRE MIM</h3>

        <h3 id="writingIntroduction">Olá, sou o Eduardo!</h3>

        <p id="textIntroduction">
          Atuo como desenvolvedor transformando ideias em soluções tecnológicas simplificadas e eficientes. Desenvolvo para resolver problemas reais, unindo facilidade e aprendizado contínuo para criar softwares eficazes.
        </p>

        <br />

        <p id="textMoreIntroduction" className={isExpanded ? 'show' : ''}>
          Sou graduado em Análise e Desenvolvimento de Sistemas e sigo estudando para superar meus próprios limites técnicos. Atuo como desenvolvedor autônomo criando Landing Pages, sempre buscando um toque de inovação em cada projeto.
          <br /><br />
          Atualmente, amplio meus horizontes com pós-graduações em Full Stack & Cloud Computing e em Inovação, IA & Robótica.
        </p>

        <button
          type="button"
          className="btnVerMais"
          id="btnVerMais"
          onClick={toggleExpand}
        >
          {isExpanded ? 'VER MENOS...' : 'VER MAIS...'}
        </button>
      </div>
    </section>
  );
}