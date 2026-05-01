import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ProjectSlider.css';

export function ProjectSlider() {
    // ========================================================================
    // 1. SUA LISTA CURADA DE REPOSITÓRIOS
    // ========================================================================
    const projetosEscolhidos = [
        'AgenciaBabyCare-V2',
        'LandingPageInstrutor-V1',
        'SalvaCarteira-V2',
        'ProjetoVerao-V2'
    ];

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    // ========================================================================
    // 2. INTEGRAÇÃO DINÂMICA COM GITHUB
    // ========================================================================
    useEffect(() => {
        const fetchGitHubProjects = async () => {
            try {
                // Buscamos os repositórios do seu perfil
                const response = await fetch('https://api.github.com/users/DevEduSilva/repos?per_page=100');
                const data = await response.json();

                // Filtramos apenas os 4 que você selecionou
                const filteredRepos = data.filter(repo =>
                    projetosEscolhidos.includes(repo.name)
                );

                // Opcional: Ordenar para seguir a mesma ordem da sua lista acima
                const sortedRepos = filteredRepos.sort((a, b) =>
                    projetosEscolhidos.indexOf(a.name) - projetosEscolhidos.indexOf(b.name)
                );

                setProjects(sortedRepos);
            } catch (error) {
                console.error("Erro ao conectar com a API do GitHub:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchGitHubProjects();
    }, []);

    return (
        <section className="slider-section" id="projetos">
            <div className="slider-container">
                <h3 className='btnClass2'>PROJETOS</h3>
                <p className="projetos-subtitle">Explorando soluções através do código:</p>

                {loading ? (
                    <p style={{ textAlign: 'center', color: '#b0b0b0', padding: '50px' }}>
                        Carregando galáxia de repositórios...
                    </p>
                ) : (
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={true}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="mySwiper"
                    >
                        {projects.map((project) => (
                            <SwiperSlide key={project.id}>
                                <article className="card-projeto">
                                    <div className="hover-content">
                                        <h1 style={{ textTransform: 'uppercase', fontSize: '1.2rem' }}>
                                            {project.name.replace(/-/g, ' ')}
                                        </h1>

                                        <p>
                                            {project.description || "Exploração tecnológica em desenvolvimento."}
                                        </p>

                                        <div className="links-container">
                                            <a href={project.html_url} target="_blank" rel="noreferrer">REPOSITÓRIO</a>

                                            {project.homepage && (
                                                <>
                                                    <span className="divider">||</span>
                                                    <a href={project.homepage} target="_blank" rel="noreferrer">DEPLOY</a>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </section>
    );
}