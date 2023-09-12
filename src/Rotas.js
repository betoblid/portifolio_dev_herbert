import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Pesquisa from "./Pages/Pesquisa";
import Error from "./Pages/404"

function AppRotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/search" element={<Pesquisa />} />
                 <Route exact path="*" element={<Error />} /> 
            </Routes>
        </BrowserRouter>
    );
}

export default AppRotas;