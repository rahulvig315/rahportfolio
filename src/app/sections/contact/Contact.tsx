
const defaultContactClasses = {
    section: "flex w-full h-screen justify-center text-center items-center",
}


type ContactProps = {
    classes?: typeof defaultContactClasses;
}


export default function Contact({ classes = defaultContactClasses }: ContactProps) {
    return (<section className={classes?.section}>Contact</section>)
}
