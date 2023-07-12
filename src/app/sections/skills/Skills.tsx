
const defaultSkillsClasses = {
    section: "flex w-full h-screen justify-center text-center items-center",
}


type SkillsProps = {
    classes?: typeof defaultSkillsClasses;
}


export default function Skills({ classes = defaultSkillsClasses }: SkillsProps) {
    return (<section className={classes?.section}>Skills</section>)
}
