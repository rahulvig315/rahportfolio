
const defaultExperienceClasses = {
    section: "flex bg-fixed w-full h-screen bg-cover bg-left justify-center z-0  bg-[url('/background/bg-experience.jpg')]",
}


type ExperienceProps = {
    classes?: typeof defaultExperienceClasses;
}


export default function Experience({ classes = defaultExperienceClasses }: ExperienceProps) {
    return (<section id="experience" className={classes?.section}>Experience</section>)
}
