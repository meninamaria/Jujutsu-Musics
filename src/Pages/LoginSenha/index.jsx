import { Link } from "react-router-dom";
import styles from './style.module.css'
import Icone from "../../assets/icon_jujutsoMusics.svg"
import SetaVoltar from "../../assets/setaVoltar.svg"
import Background4 from "../../assets/background4.svg"


function LoginSenha() {



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
                <input placeholder="Login" type="text" name="" className={styles.input}/>
                <input placeholder="Senha" type="password" name="" className={styles.input}/>
                <button className={styles.bt_entrar}>Entrar</button>  {/* usar o navigate() para verificar se os dados inseridos estão corretos*/} 
                <p className={styles.texto}>Ainda não possui cadastro?</p>
                
                <Link to="/cadastro">
                    <button className={styles.bt_Cadastrar}>Cadastra-se aqui</button>
                </Link>
            </div>

            <div> 
                <img src={Background4} className={styles.img_background4}/ > 
            </div>

        </div>
    )

}

export default LoginSenha

