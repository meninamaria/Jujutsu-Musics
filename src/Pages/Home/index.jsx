import { useState } from 'react'
import { Link } from "react-router-dom";
import styles from './style.module.css'
import Icone from '../../assets/icon_jujutsoMusics.svg'
import ImageSlider from '../../components/ImageSlider.jsx'
import Banner1 from '../../assets/banner/background1.svg'
import Banner2 from '../../assets/banner/background2.svg'
import Banner3 from '../../assets/banner/background3.svg'


function Home() {

  return (
    <div>
      <header className={styles.cabecalho}>
        <img src={Icone} className={styles.img_icon} />
        <h1>Jujutso musics</h1>
        <Link to="/login">
          <button className={styles.bt_login}>Login</button>
        </Link>
      </header>

      <div>
          <ImageSlider images={[Banner1, Banner2, Banner3]} interval={4000} />
          <p className={styles.texto}>Ouça músicas e descreva o que cada uma transmite para você...</p>
      
      </div>

    </div>
  )

}

export default Home
