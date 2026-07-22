import { Link, useNavigate} from "react-router-dom";
import { useEffect, useState, useRef } from 'react'
import styles from './style.module.css'
import Icone from '../../assets/icon_jujutsoMusics.svg'
import setaVoltar from "../../assets/setaVoltar.svg"
import Background6 from "../../assets/background6.svg"
import Api from '../../services/api'
import Swal from 'sweetalert2'

function Cadastro(){
    const [user, setUsers] = useState([]);

    const navigate = useNavigate();

    const inputNome = useRef();
    const inputIdade = useRef();
    const inputTelefone = useRef();
    const inputLogin = useRef();
    const inputSenha = useRef();

    async function cadastrarUser() {
        try {
            await Api.post('/cadastro', {
                nome: inputNome.current.value,
                idade: Number(inputIdade.current.value),
                telefone: inputTelefone.current.value,
                login: inputLogin.current.value,
                senha: inputSenha.current.value
            });

            navigate('/login');
        } catch (error) {
            const status = error.response?.status;
            if (status === 402) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Esse login já está em uso.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    customClass: {
                        confirmButton: styles.bt_OK,
                    },
                    buttonsStyling: false 
                })
                limparCampos();
            } else if (status === 403) {
                Swal.fire({
                    title: 'Alerta!',
                    text: 'Campo vazio! Preencha todos os campos',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    customClass: {
                        confirmButton: styles.bt_OK,
                    },
                    buttonsStyling: false 
                })
            } else {
                 Swal.fire({
                    title: 'Error!',
                    text: 'Erro ao cadastrar usuário.',
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

    }

    async function limparCampos(){
        inputNome.current.value = "";
        inputIdade.current.value = "";
        inputTelefone.current.value = "";
        inputLogin.current.value = "";
        inputSenha.current.value = "";
    }

    return (
        <div className={styles.pagina}>
            <header className={styles.cabecalho}>
                <img src={Icone} className={styles.img_icon}/>
                <h1>Jujutso musics</h1>
            </header>
            
            <Link to="/login">
                <img src={setaVoltar} className={styles.setaVoltar} />    
            </Link>

            <div className={styles.container}>
                <h1 className={styles.txtCadastro}>Cadastro</h1>

                <div className={styles.linha}>
                    <input placeholder="Nome" type="text" name="nome" className={styles.input} ref={inputNome}/>
                    <input placeholder="Idade" type="number" name="idade" className={styles.input} ref={inputIdade}/>

                </div>

                <div className={styles.linha}>
                    <input placeholder="Telefone" type="text" name="telefone" className={styles.input} ref={inputTelefone}/>
                    <input placeholder="Login" type="text" name="login" className={styles.input} ref={inputLogin}/>
                </div>

                <input placeholder="Senha" type="password" name="senha" className={styles.input} ref={inputSenha}/>

                <button onClick={cadastrarUser} className={styles.bt_cadastrar}>Cadastrar</button>
            </div>

            <div>
                <img src={Background6} className={styles.imgBackground6}/>
            </div>

        </div>
    )
}

export default Cadastro