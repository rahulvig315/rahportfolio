
const defaultAboutClasses = {
    section: "flex w-full h-screen justify-center text-center items-center",
}


type AboutProps = {
    classes?: typeof defaultAboutClasses;
}


export default function About({ classes = defaultAboutClasses }: AboutProps) {
    return (<section className={classes?.section}>About</section>)
}
