
const defaultAboutClasses = {
    section: "flex w-full h-screen justify-center text-center items-center bg-cover bg-top",
}


type AboutProps = {
    classes?: typeof defaultAboutClasses;
}


export default function About({ classes = defaultAboutClasses }: AboutProps) {
    return (<section id="about" className={`${classes?.section}
    bg-[url('/background/bg-about.jpg')]`}>About</section>)
}
