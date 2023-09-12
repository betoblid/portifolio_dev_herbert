import { useEffect, useState } from "react";
import style from "./Input.module.css";
import VideoList from "../VideoList";
import Load from "../../Componentes/Load";

//function que irar filtrar todo o json e achar toda palavra que for indentificada no nome do projeto ou tecnologia

function filtros(dados, pesquisa){
    return dados.filter(dado => dado.cate.toLocaleLowerCase().includes(pesquisa.toLocaleLowerCase()) || dado.tec.toLocaleLowerCase().includes(pesquisa.toLocaleLowerCase()))
}
export default function Input({dados}){

    //useState onde sera setado tudo que for digitado e salvo em pesquisa
    const [pesquisa, setPesquisa ] = useState("");
    //essa constante filtro vai salvar os dados da function filtros
    const filtro = filtros(dados, pesquisa);

    //usestate para poder criar uma interface de load onde useEffect define depois de alguns seguns false onde o efeito acaba e os cards aparecem
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])
    return(

        <div className={style.input}>
            <h1>Pesquisa</h1>
            {/*input responsavel por receber entrada de usuario salvar em uma variavel de stados e mostra para o usuario o que esta cendo digitado */}
            <input 
                type="text"
                maxLength={20}
                placeholder="Pesquisar..."
                value={pesquisa}
                onChange={e => setPesquisa(e.target.value)}
            />

            <p>Pesquise por nome de Projeto ou Tecnologia utilizada no Projeto...</p>
            {/*os dados filtrados sera mandado para video lista que sera responsavel por lista todos os cards filtrados */}
            {
                loading === true ? <Load /> : <VideoList dados={filtro} heading={`não a projetos com "${pesquisa}"`}/>
            }


        </div>
    );
}