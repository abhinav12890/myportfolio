import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skill = ({ name }) => {
    return (
        <div className="skill-circle flex items-center justify-center bg-dark p-2 rounded-full m-4">
            <img src={`images/skills/${name.toLowerCase()}.png`} alt={name} className="w-16 h-16 rounded-full" />
        </div>
    );
};

const Skills = () => {
    const skills = ["CSS", "HTML", "JS", "MongoDB", "Next", "Prisma", "Python", "React", "Tailwind", "Sql", "Excel", "Powerbi", "Tableau", "ThreeJs", "TypeScript", "Git", "Java", "C++", "Nodejs", "Postgresql", "Mysql", "ExpressJs", "Bootstrap", "Pandas", "Numpy", "Firebase", "Supabase", "Stripe", "Strapi", "RestApi", "Django", "Flask", "Aspnet", "Gatsby", "Webrtc", "Websockets", "Azure"];

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, scale: 1, transition: { duration: 1 } });
        }
    }, [inView, controls]);

    return (
        <div className="skills-container w-full min-h-screen flex flex-col items-center justify-center py-12">
            <h2 className="font-bold text-8xl mb-16 w-full text-center md:text-6xl xs:text-4xl">Skills</h2>
            <div className="flex flex-wrap justify-center mx-4" ref={ref}>
                {skills.map((skill, index) => (
                    <motion.div key={index} className="skill-circle" whileHover={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }} initial={{ opacity: 0, scale: 0 }} animate={controls}>
                        <Skill name={skill} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
