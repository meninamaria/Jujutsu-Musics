import { Link } from "react-router-dom";
import styles from './style.module.css'
import Icone from '../../assets/icon_jujutsoMusics.svg'
import setaVoltar from "../../assets/setaVoltar.svg"
import Background6 from "../../assets/background6.svg"

function Cadastro(){
    return (
        <div className={styles.pagina}>
            <header className={styles.cabecalho}>
                <img src={Icone} className={styles.img_icon}/>
                <h1>Jujutso Musics</h1>
            </header>
            
            <div>
                <Link to="/login">
                    <img src={setaVoltar} className={styles.setaVoltar} />    
                </Link>
            </div>

            <div className={styles.container}>
                <h1 className={styles.txtCadastro}>Cadastro</h1>

                <div className={styles.linha}>
                    <input placeholder="Nome" type="text" name="" className={styles.input} />
                    <input placeholder="Idade" type="int" name="" className={styles.input} />

                </div>

                <div className={styles.linha}>
                    <input placeholder="Telefone" type="text" name="" className={styles.input} />
                    <input placeholder="Login" type="text" name="" className={styles.input} />
                </div>

                <input placeholder="Senha" type="password" name="" className={styles.input} />

                <button className={styles.bt_cadastrar}>Cadastrar</button>
            </div>

            <div>
                <img src={Background6} className={styles.imgBackground6}/>
            </div>

        </div>
    )
}

export default Cadastro