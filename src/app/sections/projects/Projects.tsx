
const defaultProjectsClasses = {
    section: "flex bg-fixed w-full h-screen bg-cover bg-bottom justify-center z-0  bg-[url('/background/bg-projects.jpg')]",
}


type ProjectsProps = {
    classes?: typeof defaultProjectsClasses;
}


export default function Projects({ classes = defaultProjectsClasses }: ProjectsProps) {
    return (<section id="projects" className={classes?.section}>Projects</section>)
}
