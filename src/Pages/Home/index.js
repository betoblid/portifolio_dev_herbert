import React, { useEffect, useState } from "react";
import Header from "../../Componentes/Header";
import Footer from "../../Componentes/Footer";

import style from "./Home.module.css"
import Tecnologia from "../../Componentes/Tecnologia";
import Perfil from "../../imgs/1679201623285.jpeg"
import Seta from "../../imgs/arrow.png"
import Load from "../../Componentes/Load"
//import Input from "../../Componentes/Input";
import dados from "../../dados/db.json"
import { Link } from "react-router-dom";
import Sobre from "../../Componentes/Sobre";
import Pesquisa from "../../Componentes/PesquisaHome";



export default function Home(){

    let data = new Date()
    let month = data.getMonth()
    let years = data.getFullYear()

    const [loading, setLoading] = useState(true)

    useEffect( () => {

        setTimeout(() => {
            setLoading(false)
        }, 1000);

    }, [])
    return(
        <>
            <Header />
                <section className={style.sessao}>
                <div className={style.container}>

                    <div className={style.card_conteudo}>
                        <h1>Herbert Souza</h1>
                        <h2>Desenvolvedor Front End</h2>
                        <p>Sou Herbert Souza, apaixonado por tecnologia Sou Desenvolvedor Front-end estudando para ser Full-Stack
                        sou freelancer e aceito proposta.</p>

                        <div>
                            <a href="https://www.linkedin.com/in/herbert-souza-220268268/" target="_blank">Linkedin</a>
                            <a href="https://github.com/betoblid" target="_blank">GitHub</a>
                        </div>
                        <Tecnologia />
                    </div>
                    <div className={style.perfil}>
                        <img src={Perfil} alt="Foto do Desenvolvedor 'Herbert'"/>
                    </div>
                </div>
                <div className={style.seta}>
                    <img src={Seta} alt="Seta para ir pro conteudo do Portifolio"/>
                </div>
                </section>
                <section>
                    <Sobre />
                </section>
                <section id="Projetos" className={style.projetos}>
                    <h2>Projetos</h2>
                    <p>Aqui se encontra 8 Projetos desenvolvidos em <span><em>{`${month - 1}/${years}`}</em></span> á <span><em>{`${month + 1}/${years}`}</em></span> para mais projetos click <Link to="/search">Ver mais</Link> ou no topo do site click em <strong>Pesquisar</strong></p>
                    {
                        loading ? <Load /> : <Pesquisa dado={dados} />
                    }
                </section>
            <Footer />
        </>
    );
}