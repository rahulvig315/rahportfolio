import Image from 'next/image';
import styles from './Landing.module.css';


const logoMeta = {
    alt: 'Rahul Vig Logo',
    src: '/RVLogo.svg',
    width: 100,
    height: 100,
}
const logoAlt = 'Rahul Vig Logo';


function Landing() {
    return (
        <>        <section className={styles.landing}>
            <div className={styles.contentWrapper}>
                <Image src={logoMeta.src} alt={logoMeta.alt} width={logoMeta.width} height={logoMeta.height} className={styles.logo} />
            </div>
        </section >
            <section className={styles.landing}>
                <div className={styles.contentWrapper}>
                    <Image src={logoMeta.src} alt={logoMeta.alt} width={logoMeta.width} height={logoMeta.height} className={styles.logo} priority />
                </div>
            </section ></>
    )
}

export default Landing