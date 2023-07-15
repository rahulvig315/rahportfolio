
const defaultSkillsClasses = {
    section: "flex bg-fixed  w-full h-screen bg-cover bg-bottom justify-center items-end z-0  bg-[url('/background/bg-skills.jpg')] p-16 bg-blend-difference",
}


type SkillsProps = {
    classes?: typeof defaultSkillsClasses;
}


export default function Skills({ classes = defaultSkillsClasses }: SkillsProps) {
    return (<section id="skills" className={classes?.section}>
        <div className="flex justify-around w-[200px] sticky bottom-16 flex-wrap">
            <div>
                1
            </div>
            <div>
                2
            </div>
            <div>
                3
            </div>
            <div>
                4
            </div>
            <div>
                1
            </div>
            <div>
                2
            </div>
            <div>
                3
            </div>
            <div>
                4
            </div>

        </div>
    </section>)
}
