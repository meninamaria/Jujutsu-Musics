import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from 'react'
import styles from './style.module.css'
import Icone from "../../assets/icon_jujutsoMusics.svg"
import SetaVoltar from "../../assets/setaVoltar.svg"
import Background4 from "../../assets/background4.svg"
import Api from '../../services/api'
import Swal from 'sweetalert2'


function LoginSenha() {
    const [user, setUsers] = useState([]);
    const navigate = useNavigate();


    const inputLogin = useRef();
    const inputSenha = useRef();

    async function verificarLogin(login, senha) {        
        try {
            const usuario = await Api.post("/login", { login, senha });
                setUsers(usuario.data);
                navigate('/'); 
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Seu login ou senha está incorreto(a).',
                icon: 'error',
                confirmButtonText: 'OK',
                customClass: {
                    confirmButton: styles.bt_OK,
                },
                buttonsStyling: false 
            })
            limparCampos();
        }
    }

    async function limparCampos() {
        inputLogin.current.value = "";
        inputSenha.current.value = "";
    }


    return (
        <div className={styles.pagina}>
            <header className={styles.cabecalho}>
                <div><img src={Icone} className={styles.img_icon} /></div>
                <div><h1>Jujutso Musics</h1></div>
            </header>

            <div>            
                <Link to="/" className={styles.SetaVoltar}>
                    <img src={SetaVoltar} />
                </Link>
            </div>

            <div className={styles.container}>
                <h1 className={styles.txtLogin}>Login</h1>
                <input placeholder="Login" type="text" name="login" className={styles.input} ref={inputLogin}/>
                <input placeholder="Senha" type="password" name="senha" className={styles.input} ref={inputSenha} />
                <button type="button" onClick={() => verificarLogin(inputLogin.current.value, inputSenha.current.value)} className={styles.bt_entrar}>Entrar</button>  {/* usar o navigate() para verificar se os dados inseridos estão corretos*/} 
                <p className={styles.texto}>Ainda não possui cadastro?</p>
                
                <Link to="/cadastro">
                    <button type="button" className={styles.bt_Cadastrar}>Cadastra-se aqui</button>
                </Link>
            </div>

            <div> 
                <img src={Background4} className={styles.img_background4}/ > 
            </div>

        </div>
    )

}

export default LoginSenha

