import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%] ">
            <LiIcon reference={ref} />
            <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{position}&nbsp; <a href={companyLink} target="_blank" className="text-primary dark:text-primaryDark capitalize">@{company}</a></h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">{time}|{address}</span>
                <p className="font-medium w-full md:text-sm">{work}</p>
            </motion.div>
        </li>
    )
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 ">
                Experience
            </h2>
            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:md:left-[20px]" />
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <Details position="On-Campus Internship" company="Manav Rachna College"
                        time="Jan 2022- July 2021" address="Sector – 43, Aravalli Hills, Delhi – Surajkund Road, Faridabad – 121004, (Haryana), India"
                        work="Worked on a small scale projects using Html,Css,Javascript,Api,Php,Bootstrap. Worked in teams and individual projects to know more about web development." />
                    <Details position="Software Engineer" company="Pan India Consultants Pvt. Ltd."
                        time="Feb 2023-June 2023" address="105, Phase IV, Udyog Vihar, Gurugram - 122015, Haryana, India"
                        work="Worked on Company's official website with Reactjs and Sass.Used Strapi CDN for the data management.Worked with designing team for designing front end of the website." />
                    <Details position="Quality Analyst" company="Zuru-Sprinklr"
                        time="Dec 2023-Present" address="Work From Home"
                        work="Validated, created, and annotated datasets,Created validation Reports, Formulated checklists and test cases to enhance QA processes, formulating QA processes, and optimizing strategies for Sprinklr's ML projects." />
                </ul>
            </div>
        </div>
    );
};
export default Experience;
