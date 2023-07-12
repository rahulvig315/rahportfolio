
const defaultProjectsClasses = {
    section: "flex w-full h-screen justify-center text-center items-center",
}


type ProjectsProps = {
    classes?: typeof defaultProjectsClasses;
}


export default function Projects({ classes = defaultProjectsClasses }: ProjectsProps) {
    return (<section className={classes?.section}>Projects</section>)
}
