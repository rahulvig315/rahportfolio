
const defaultAboutClasses = {
    section: "flex w-full h-screen justify-center text-center items-center bg-cover bg-top  top-0 z-0 bg-fixed  bg-[url('/background/bg-about.jpg')]",
}


type AboutProps = {
    classes?: typeof defaultAboutClasses;
}


export default function About({ classes = defaultAboutClasses }: AboutProps) {
    return (<section id="about" className={`${classes?.section}`}></section>)
}
