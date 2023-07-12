
const defaultExperienceClasses = {
    section: "flex w-full h-screen justify-center text-center items-center",
}


type ExperienceProps = {
    classes?: typeof defaultExperienceClasses;
}


export default function Experience({ classes = defaultExperienceClasses }: ExperienceProps) {
    return (<section className={classes?.section}>Experience</section>)
}
