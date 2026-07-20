import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./Pages/Cadastro/index";
import LoginSenha from "./Pages/LoginSenha/index";
import RecuperarSenha from "./Pages/RecuperarSenha/index";
import Home from "./Pages/Home/index"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<LoginSenha />} />
                <Route path="/recuperacao" element={<RecuperarSenha />} />
            </Routes>
      </BrowserRouter>   
    )

}

export default App