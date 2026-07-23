import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from 'react'
import styles from './style.module.css'
import Icone from "../../assets/icon_jujutsoMusics.svg"
import SetaVoltar from "../../assets/setaVoltar.svg"
import Background5 from "../../assets/background5.svg"
import Api from '../../services/api'
import Swal from 'sweetalert2'


function RecuperarSenha(){
    const [user, setUsers] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const usuario = location.state?.usuario;

    const inputSenha = useRef();
    const inputSenha_repetida = useRef();

    async function atualizarSenha(id){
        console.log(id)
        if (inputSenha.current.value === inputSenha_repetida.current.value) {
            console.log(id);
            await Api.patch(`/recuperarSenha/${id}`, {
                senha: inputSenha_repetida.current.value
            });
            navigate('/login');
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'As senhas digitadas não são iguais.',
                icon: 'error',
                confirmButtonText: 'OK',
                customClass: {
                    confirmButton: styles.bt_OK,
                },
                buttonsStyling: false                     
            })
        }

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
                <h1 className={styles.titulo}>Atualize sua senha</h1>
                <p className={styles.txt}>Informe a nova senha.</p>
                <input placeholder="Nova senha" type="password" name="senha" className={styles.input} ref={inputSenha} />
                <input placeholder="Confirmar nova senha" type="password" name="senhaRepetida" className={styles.input} ref={inputSenha_repetida} />

                <button className={styles.bt_verificar} onClick={() => atualizarSenha(usuario?.id)} type="button">Salvar</button>
            </div>
    
            <img src={Background5} className={styles.background5}/>
        </div>
    )

}

export default RecuperarSenha