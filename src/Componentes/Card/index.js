import style from "./Card.module.css";

function Card({ img, nome, descricao, tec1, tec2, tec3, tec4, tec5, tec6, link }){
    return(
        <div className={style.conteiner}>
            <div className={style.card}>
                <div>
                    <img src={img}/>
                </div>
                <div className={style.conteudo}>
                    <h2>{nome}</h2>
                    <p>{descricao}</p>
                </div>
                <div className={style.tec}>
                    <h4>
                        Tecnologias:
                        <img src={tec1}/>
                        <img src={tec2}/>
                        <img src={tec3}/>
                        <img src={tec4}/>
                        <img src={tec5}/>
                        <img src={tec6}/>
                    </h4>
                </div>
                <div className={style.link}>
                    <a href={`https://github.com/betoblid/${link}`} target="_blank">GitHub</a>
                    <a href={`https://betoblid.github.io/${link}/`} target="_blank">Ver</a>
                </div>
            </div>
        </div>
    )
}

export default Card;