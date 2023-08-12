import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Pesquisa from "./Pages/Pesquisa";

function AppRotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/search" element={<Pesquisa />} />
                { //<Route exact path="*" element={<Pesquisa />} /> 
}
            </Routes>
        </BrowserRouter>
    );
}

export default AppRotas;