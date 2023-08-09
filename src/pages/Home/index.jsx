import Header from '../../components/Header'
import Footer from '../../components/Footer'
import img from '../../../public/img/imagem2.png'
import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import styles from './Home.module.css'

export default function Home() {
    return (
        <>
            <Header />
            <Container>
                <section className={styles.home}>
                    <div className={styles.apresentacao}>
                        <p>
                            Olá, sou <br />
                            <span>Celio Mariano</span><br />
                            Dev Full Stack
                        </p>
                        <Link to='/Sobre' className={styles.btn}>
                            Saiba mais sobre mim
                        </Link>
                    </div>
                    <figure>
                        <img className={styles.img} src={img} alt="Imagem principal" />
                    </figure>
                </section>
            </Container>
            <Footer />
        </>
    )
}