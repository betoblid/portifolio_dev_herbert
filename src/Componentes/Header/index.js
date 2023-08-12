import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"

//imagens importadas do site

import Close from "../../imgs/icon-close.svg"
import Hamburg from "../../imgs/icon-hamburger.svg"

export default function Header() {

    const [ menu, setMenu ] = useState("hidden")
    const [imgmenu, setMenuImg ] = useState(Hamburg)

    const BtnMenu = () =>{
        menu === "hidden" ? setMenu("card_nav") : setMenu("hidden")
        imgmenu === Hamburg ? setMenuImg(Close) : setMenuImg(Hamburg)
    }

    return (
        <header>
            <div className="container">
                <div>
                <Link to="/"> 
                    <h1>HS</h1>
                </Link>
                   
                </div>

                <div className="btn_nave">

                    <button onClick={BtnMenu}>
                        <img src={imgmenu} alt="Menu"  />
                    </button>
                    
                </div>

                <div className={menu}>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/search">Pesquisa</Link>
                        <a href="/#Projetos">Projetos</a>
                        <a href="/#sobre">Sobre</a>
                    </nav>
                </div>
            </div>
        </header>
    );
}


