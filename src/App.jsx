import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./Pages/Cadastro/index";
import LoginSenha from "./Pages/LoginSenha/index";
import RecuperarSenha from "./Pages/RecuperarSenha/index";
import RecuperarSenha_Verificacao from "./Pages/RecuperarSenha_Verificacao/index";
import Inicio from "./Pages/Inicio/index"
import Home from "./Pages/Home/index"
import Api from './services/api'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<LoginSenha />} />
                <Route path="/recuperarSenha" element={<RecuperarSenha />} />
                <Route path="/recuperarSenha/verificacao" element={<RecuperarSenha_Verificacao/>}></Route>
                <Route path="/inicio" element={<Inicio />} />
            </Routes>
      </BrowserRouter>   
    )

}

export default App