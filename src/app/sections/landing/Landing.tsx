import Image from 'next/image';

const defaultLogoMeta = {
    alt: 'Rahul Vig Logo',
    src: '/RVLogo.svg',
    size: 400,
}

const defaultLandingClasses = {
    section: "flex w-full h-screen justify-center text-center items-center",
    header: "border border-black",
    backgroundImage: "",
    content: "max-w-[600px]",
    logo: "m-auto",
    title: "text-3xl lg:text-5xl font-thin",
    subtitle: "text-lg font-extralight m-3 line-clamp-3",
    button: "bg-black text-white px-3 py-1 m-3 rounded",
}

const defaultLandingImageMeta = {
    alt: 'Landing Background.',
    src: '/backgrounds/landing.png'
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
                {/* <Image src={backgroundImageMeta?.src} alt={backgroundImageMeta?.alt} className={classes?.backgroundImage} fill={true} /> */}
                <div className={classes?.content}>
                    <Image src={logoMeta?.src} width={logoMeta?.size} height={logoMeta?.size} alt={logoMeta?.alt} className={classes?.logo} />
                    <h1 className={classes?.title}>Welcome Friend</h1>
                    <h2 className={classes?.subtitle}>
                        Come learn about my journey as a professional{" "}
                        <span>developer</span>,{" "}<span>designer</span>,{" "}
                        <span>illustrator</span>,{" "}<span>animator</span>{" "}& <span>technologist</span>.
                    </h2>
                    <button className={classes?.button}>Explore</button>
                </div>
            </header>
        </section >
    )
}

export default Landing
