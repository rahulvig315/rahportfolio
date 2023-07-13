'use client';
import { easeIn, motion } from 'framer-motion';
import Image from 'next/image';


const defaultLogoMeta = {
    alt: 'Rahul Vig Logo',
    src: '/RVLogo.svg',
    size: 300,
}


const defaultLandingClasses = {
    section: `w-full h-screen flex  bg-[url('/background/bg-landing.jpg')] bg-cover bg-bottom text-center justify-center  bg-fixed bg-cover bg-center`,
    content: 'bg-white/30 flex flex-col md:flex-row justify-center items-center shadow shadow-2xl drop-shadow-2xl rounded-b-xl w-fit h-fit backdrop-blur-sm',
    logo: 'm-auto border-b border-x rounded-b-xl md:rounded-b-none md:rounded-bl-xl border-gray-100/20 shadow shadow-2xl drop-shadow-2xl',
    title: 'text-3xl font-bold  text-zinc-900',
    subtitle: 'text-lg font-light',
    link: 'text-md bg-zinc-950  text-white uppercase rounded-lg px-5 py-2 font-bold',
    wrapper: 'max-w-[500px] flex flex-col gap-5 p-7',
    emphasis: 'italic',
    divider: 'border-black/10'
}

const defaultLinkMeta = {
    label: 'Explore',
    icon: undefined,
    src: '#about',
}

const animations = {
    content: {
        initial: {
            opacity: 0,
            y: '-75%',
        },
        animate: {
            opacity: 1,
            y: 0,
        },
        transition: {
            ease: easeIn,
            delay: 0.1,
            duration: 1,
        }
    },
    logo: {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
        },
        transition: {
            ease: easeIn,
            duration: 1,
            delay: 1
        }
    },
    text: {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1
        },
        transition: {
            ease: easeIn,
            delay: 1,
            duration: 1
        }
    }
}

const defaultLandingProps = {
    logoMeta: defaultLogoMeta,
    linkMeta: defaultLinkMeta,
    classes: { ...defaultLandingClasses },
    animations: {
        ...animations
    },
}


type LandingProps = {
    classes: {
        [elementClass: string]: string;
    },
    backgroundImageMeta: any;
    logoMeta: any;
    linkMeta: any;
    animations: any
}

function Landing({
    classes = defaultLandingProps.classes,
    logoMeta = defaultLandingProps.logoMeta,
    linkMeta = defaultLandingProps.linkMeta,
    animations = defaultLandingProps.animations
}: Partial<LandingProps> = defaultLandingProps) {
    return (
        <section className={`${classes?.section}`}>
            <motion.div
                initial={animations?.content?.initial}
                animate={animations?.content?.animate}
                transition={animations?.content?.transition}
                className={classes?.content}>
                <motion.div
                    initial={animations.logo.initial}
                    animate={animations.logo.animate}
                    transition={animations.logo.transition}
                >
                    <Image
                        src={logoMeta?.src}
                        width={logoMeta?.size}
                        height={logoMeta?.size}
                        alt={logoMeta?.alt}
                        className={classes?.logo}
                    />
                </motion.div>
                <motion.div
                    initial={animations.text.initial}
                    animate={animations.text.animate}
                    transition={animations.text.transition}
                    className={classes.wrapper}
                >
                    <h1 className={classes?.title}>Welcome Friend.</h1>
                    <hr className={classes?.divider} />
                    <p className={classes?.subtitle}>
                        Come learn about my journey as a{' '}
                        <span className={classes?.emphasis}>developer</span>,
                        {' '}<span className={classes?.emphasis}>designer</span>,{' '}
                        <span className={classes?.emphasis}>illustrator</span>,{' '}<span className={classes?.emphasis}>animator</span>{' '}&{' '}<span className={classes?.emphasis}>technologist</span>.
                    </p>
                    <hr className={classes?.divider} />
                    <a className={classes?.link} href={linkMeta.src}>
                        {linkMeta.label}
                    </a>
                </motion.div>
            </motion.div>
        </section >
    )
}

export default Landing
