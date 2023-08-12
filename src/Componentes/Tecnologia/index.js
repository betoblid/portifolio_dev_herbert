import Html from "../../imgs/html.png"
import Css from "../../imgs/css.png"
import Js from "../../imgs/js.png"
import Git from "../../imgs/git.png"
import Boostrap from "../../imgs/R.png"
import Sass from "../../imgs/Sass-Logo-320x200.png"
import Github from "../../imgs/github.png"
import React from "../../imgs/react.png"

import style from "./Teclonogia.module.css"
export default function Tecnologia(){
    return(
        <>
            <h3 className={style.habilidade}>Tecnologias:
                <img src={Html} alt="Habilidades nessas Tecnlogia"/>
                <img src={Css} alt="Habilidades nessas Tecnlogia"/>
                <img src={Js} alt="Habilidades nessas Tecnlogia"/>
                <img src={React} alt="Habilidades nessas Tecnlogia"/>
                <img src={Boostrap} alt="Habilidades nessas Tecnlogia"/>
                <img src={Sass} alt="Habilidades nessas Tecnlogia"/>
                <img src={Git} alt="Habilidades nessas Tecnlogia"/>
                <img src={Github} alt="Habilidades nessas Tecnlogia"/>
            </h3>
        </>
    );
}