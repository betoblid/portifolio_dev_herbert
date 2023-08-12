import style from "./Pesquisa.module.css";
import dados from "../../dados/db.json"


//importando componentes
import Input from "../../Componentes/Input";
import Header from "../../Componentes/Header";
import Footer from "../../Componentes/Footer"


export default function Pesquisa(){
    return(
        <>
            <Header />
            <section className={style.container}>

                <Input dados={dados}/>

            </section>

            <Footer />
        </>
    );
}