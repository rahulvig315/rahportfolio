
const defaultContactClasses = {
    section: "flex bg-fixed w-full h-screen bg-cover bg-center justify-center z-0  bg-[url('/background/bg-contact.jpg')]",
}


type ContactProps = {
    classes?: typeof defaultContactClasses;
}


export default function Contact({ classes = defaultContactClasses }: ContactProps) {
    return (<section id="contact" className={classes?.section}>Contact</section>)
}
