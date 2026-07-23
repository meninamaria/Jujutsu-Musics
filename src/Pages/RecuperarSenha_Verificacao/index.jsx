import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from 'react'
import styles from './style.module.css'
import Icone from "../../assets/icon_jujutsoMusics.svg"
import SetaVoltar from "../../assets/setaVoltar.svg"
import Background5 from "../../assets/background5.svg"
import Api from '../../services/api'
import Swal from 'sweetalert2'


function recuperarSenha_verificacao() {
    const [user, setUsers] = useState([]);
    const navigate = useNavigate();

    const inputLogin = useRef();

    async function verificarLogin(login) {
        try {
            const usuario = await Api.post(`/recuperarSenha/verificacao/${login}`)
            navigate('/recuperarSenha', { state: { usuario: usuario.data[0] } });
        } catch {
            Swal.fire({
                title: 'Error!',
                text: 'Nome de usuário inválido.',
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
    }

    return (
        <div className={styles.pagina}>

            <header className={styles.cabecalho}>
                <div><img src={Icone} className={styles.icon} /></div>
                <div><h1>Jujutso musics</h1></div> 
            </header>

             <Link to="/login">
                <img src={SetaVoltar} className={styles.setaVoltar} />
            </Link>
    
            <div className={styles.container}>
                <h1 className={styles.titulo}>Recuperar Senha</h1>
                <p className={styles.txt}>Informe seu login para recuperar sua senha.</p>
                <input placeholder="Login" type="text" name="login" className={styles.input} ref={inputLogin} />
                <button className={styles.bt_verificar} onClick={() => verificarLogin(inputLogin.current.value)} type="button">Verificar</button>
            </div>
    
            <img src={Background5} className={styles.background5}/>
        </div>
    )
}

export default recuperarSenha_verificacao