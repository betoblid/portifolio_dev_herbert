import React from "react";
import { Link } from "react-router-dom";
import style from "./Error.module.css"

export default function Error(){


    return(
        <div className={style.container}>
            <h1>Pagina não existe volte para Pagina existente</h1>

                <div>
                    <h2>ERRO 404</h2>
                </div>

            <Link to="/">Voltar</Link>
        </div>
    )
}