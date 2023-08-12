import style from "./Sobre.module.css";
import Matrix from "../../imgs/matrix-356024_1280.jpg"
export default function Sobre() {
    return (
        <section>
            <section id="sobre" className={style.container}>

                <div className={style.card_img}>
                    <img src={Matrix} alt="imagem de code" />
                </div>
                <div className={style.card}>
                    <h2>Sobre</h2>
                    <p>Sou Herbert Souza e tenho 20 anos, faço Faculdade de Análise e desenvolvimento de sistemas cursando o 2 Semestre e faço cursos livres voltados a
                    Desenvolvimento web e mobile, Sou apaixonado por Tecnologia e meu foco é dominar o front end com foco no usuário final. Sempre em busca de novos desafios para
                    aprimorar minhas habilidades. Trabalho em projetos de estudos pessoais, acadêmicos e boostcamp aprimorando meus conhecimentos adquirido em meus estudos.
                    Sou capaz de criar soluções incríveis para problemas do mundo real.</p>
                </div>
            </section>
        </section>
    );
}