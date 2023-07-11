import Image from 'next/image';

const defaultLogoMeta = {
    alt: 'Rahul Vig Logo',
    src: '/RVLogo.svg',
    size: 100,
}

const defaultLandingClasses = {
    section: "w-screen h-screen border",
    header: "",
    backgroundImage: "object-cover object-left w-full h-full",
    content: "",
    logo: "",
    title: "",
    subtitle: "",
    button: "",
}

const defaultLandingImageMeta = {
    alt: 'Landing Background.',
    src: '/backgrounds/landing.jpg'
}

const defaultButtonMeta = {
    label: "Explore",
    icon: undefined,
    onClick: () => null,
}

const defaultLandingProps = {
    logoMeta: defaultLogoMeta,
    backgroundImageMeta: defaultLandingImageMeta,
    buttonMeta: {},
    classes: {
        ...defaultLandingClasses
    },
}

type LandingProps = {
    classes: {
        [elementClass: string]: string;
    },
    backgroundImageMeta: any;
    logoMeta: any;
    buttonMeta: any;
}

function Landing({
    classes = defaultLandingProps.classes,
    backgroundImageMeta = defaultLandingProps.backgroundImageMeta,
    logoMeta = defaultLandingProps.logoMeta,
    buttonMeta = defaultLandingProps.buttonMeta
}: Partial<LandingProps> = defaultLandingProps) {
    return (
        <section className={`${classes?.section}`}>
            <header className={classes?.header}>
                <Image src={backgroundImageMeta?.src} alt={backgroundImageMeta?.alt} className={classes?.backgroundImage} fill={true} />
                <div className={classes?.content}>
                    <Image src={logoMeta?.src} width={logoMeta?.size} height={logoMeta?.size} alt={logoMeta?.alt} className={classes?.logoMeta} />
                    <h1 className={classes?.title}>Welcome Friend</h1>
                    <h2 className={classes?.subtitle}>
                        Come learn about my journey as a professional{" "}
                        <span>developer</span>,{' '}<span>designer</span>,{''}
                        <span>illustrator</span>, <span>animator</span> & <span>technologist</span>.
                    </h2>
                </div>
            </header>
        </section >
    )
}

export default Landing
