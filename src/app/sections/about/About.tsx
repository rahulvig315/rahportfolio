import Image from "next/image";

const defaultAboutClasses = {
    section: "flex bg-fixed w-full h-screen bg-cover bg-bottom justify-center z-0  bg-[url('/background/bg-about.jpg')]",
}


type AboutProps = {
    classes?: typeof defaultAboutClasses;
}


export default function About({ classes = defaultAboutClasses }: AboutProps) {
    return (<section id="about" className={`${classes?.section}`}>
        <div className="flex flex-col md:flex-row gap-5 justify-center items-center shadow-2xl drop-shadow-2xl h-fit rounded-2xl bg-white/70 sticky top-24 my-16 backdrop-blur-sm m-3">
            <Image src='/me1.png' width={150} height={150} alt="Rahul Vig" className="md:rounded-l-2xl h-fit w-fit" />
            <h2 className="max-w-[500px] font-light text-sm leading-relaxed p-3 text-center md:text-start">Hi there I’m Rahul. It’s a pleasure to have you visit. I hope that we can connect.

                I am a professional full stack developer with over 7 years of experience in the industry. I am known for being an excellent developer, a quick learner, a fast friend, stoic in nature
                and kind in my heart.

                Along with being a passionate coder, I’m also a passionate about mathematics, physics, astronomy, philosophy and uncovering the true nature of reality.

                I’ll never stop growing. I’ll never stop learning. I’ll never stop creating.</h2>



        </div>
    </section>)
}
