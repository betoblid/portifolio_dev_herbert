import Card from "../Card";
import style from "./VideoLint.module.css"
export default function VideoList({dados, heading}){
    return(
        <>
            <h2 className={style.sub}>{dados.length > 0 ? 'foi encontrado ' + dados.length + " Projetos" : heading}</h2>

            <div className={style.conteudo}>
                {
                    dados.map(dado => <Card img={dado.foto} nome={dado.nome} descricao={dado.description} link={dado.id}
                        tec1={dado.tec1} tec2={dado.tec2} tec3={dado.tec3} tec4={dado.tec4} tec5={dado.tec5} tec6={dado.tec6}/>)
                }
            </div>
        </>
    );
}