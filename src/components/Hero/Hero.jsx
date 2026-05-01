import React from 'react';
import './Hero.css';

export function Hero() {
    return (
        <section className="background" id="inicio">
            <div className="principal">
                <div id="home">
                    <h1>DESENVOLVEDOR WEB</h1>
                    <h2 style={{ fontWeight: 400 }}>Eduardo Silva</h2>
                </div>

                <div className="containerNav2">
                    <a href="#about" className="hide-desktop">SOBRE MIM</a>
                    <a href="#projetos">PROJETOS</a>
                    <a href="#contato">CONTATO</a>
                </div>

            </div>
        </section>
    );
}