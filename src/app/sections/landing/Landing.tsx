"use client";
import { easeIn, motion } from 'framer-motion';
import Image from 'next/image';

const defaultLogoMeta = {
    alt: 'Rahul Vig Logo',
    src: '/RVLogo.svg',
    size: 400,
}

const defaultLandingClasses = {
    section: "flex h-screen bg-gray-500/30 overflow-y-hidden",
    backgroundImage: "z-[-1] object-cover object-center w-screen h-screen",
    content: "bg-white/30 lg:bg-transparent h-screen drop-shadow-2xl  shadow-amber-100 shadow-xl backdrop-blur-md flex flex-col justify-center items-center text-center max-w-[600px]",
    logo: "m-auto",
    title: "text-5xl lg:text-6xl font-extralight text-black",
    subtitle: "text-md lg:text-md p-5 leading-relaxed",
    link: "bg-zinc-900 rounded font-semibold text-slate-100 uppercase px-7 py-3",
    wrapper: 'flex flex-col justify-center items-center h-full',
    emphasis: 'underline font-semibold animate-pulse',
    divider: 'border-1 border-amber-100 w-full'
}

const defaultLandingImageMeta = {
    alt: 'Landing Background.',
    src: '/images/landing.jpg'
}

const defaultLinkMeta = {
    label: "Explore",
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
    backgroundImageMeta: defaultLandingImageMeta,
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
    backgroundImageMeta = defaultLandingProps.backgroundImageMeta,
    logoMeta = defaultLandingProps.logoMeta,
    linkMeta = defaultLandingProps.linkMeta,
    animations = defaultLandingProps.animations
}: Partial<LandingProps> = defaultLandingProps) {
    return (
        <section className={classes?.section}>
            <Image
                src={backgroundImageMeta?.src}
                alt={backgroundImageMeta?.alt}
                className={classes?.backgroundImage}
                priority
                fill={true}
            />
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
                <hr className={classes?.divider} />
                <motion.div
                    initial={animations.text.initial}
                    animate={animations.text.animate}
                    transition={animations.text.transition}
                    className={classes.wrapper}
                >
                    <h1 className={classes?.title}>Welcome Friend.</h1>
                    <p className={classes?.subtitle}>
                        Come learn about my journey as a{" "}
                        <span className={classes?.emphasis}>developer</span>,
                        {" "}<span className={classes?.emphasis}>designer</span>,{" "}
                        <span className={classes?.emphasis}>illustrator</span>,{" "}<span className={classes?.emphasis}>animator</span>{" "}&{" "}<span className={classes?.emphasis}>technologist</span>.
                    </p>
                    <a className={classes?.link} href={linkMeta.src}>
                        {linkMeta.label}
                    </a>
                </motion.div>
            </motion.div>
        </section >
    )
}

export default Landing
