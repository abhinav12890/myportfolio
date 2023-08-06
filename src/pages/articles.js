import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import article1 from "../../public/images/articles/mlresearch.png";
import article2 from "../../public/images/articles/iotresearch.png";
import { motion, useMotionValue } from "framer-motion";
import article3 from "../../public/images/articles/htmlcert.png";
import article4 from "../../public/images/articles/csscert.png";
import article5 from "../../public/images/articles/pythoncert.png";
import article6 from "../../public/images/articles/pydatacert.png";
import article7 from "../../public/images/articles/webdevcert.png";
import { useRef } from "react";
import TransitionEffect from "@/components/TransitionEffect";
const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);
    function handleMouse(event) {
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10);
    }
    function handleMouseLeave(event) {
        imgRef.current.style.display = "none";
        x.set(0);
        y.set(0);
    }
    return (
        <Link href={link} target="_blank"
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className="capitalize text-xl font-semibold hover:underline">{title}</h2>
            <FramerImage ref={imgRef} src={img} alt={title} className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
                style={{ x: x, y: y }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
            />
        </Link>
    )
}

const FeaturedArticle = ({ img, title, time, summary, link }) => {
    return (
        <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative dark:bg-dark dark:border-light">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />

            <Link className="w-full inline-block cursor-pointer overflow-hidden rounded-lg" href={link} target="_blank">
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority sizes='(max-width:768px)100vw,(max-width:1200px)50vw,50vw'
                />
            </Link>
            <Link href={link} target="_blank" className="">
                <h2 className="my-2 mt-4 text-2xl font-bold hover:underline xs:text-lg">{title}</h2>
                <p className="text-sm mb-2">{summary}</p>
                <span className="text-primary dark:text-primaryDark font-semibold">{time}</span>
            </Link>
        </li>
    )
}
const Article = ({ img, title, date, link }) => {
    return (
        <motion.li className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col"
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            viewport={{ once: true }}
        >
            <MovingImg title={title} img={img} link={link} />
            <span className="text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">{date}</span>
        </motion.li>
    )
}

const articles = () => {
    return (
        <>
            <Head>
                <title>Abhinav | Articles Page </title>
                <meta name="description" content="my description" />
            </Head>
            <TransitionEffect />
            <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="Words Can Change The World!" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
                    <ul className="grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16">
                        <FeaturedArticle
                            title="MACHINE LEARNING AND ITS APPLICATION IN TEMPERATURE MONITORING"
                            summary="Machine Learning is going to change this present reality objects into wise virtual
                            items, which can think like a human and performs certain set of instructions based on
                            the given data by the sensors along with IoT (Internet of Things)."
                            time="9 min read"
                            link="https://drive.google.com/drive/folders/1ob2VXs115MmxxtfOJP1ZAGsrvS66Dc9T?usp=sharing"
                            img={article1}
                        />
                        <FeaturedArticle
                            title="IOT SECURITY WITH BLOCKCHAIN"
                            summary="Internet of Things (IoT) plays a very vital role in almost every field of technology. Its key elements of security are very much crucial elements which are to be maintained as it is used universally."
                            time="9 min read"
                            link="https://drive.google.com/drive/folders/1sipsjLCpUJJy_8h67V7-8eHCZJqdouAM?usp=drive_link"
                            img={article2}
                        />
                    </ul>
                    <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">My Certificates</h2>
                    <ul>
                        <Article
                            title="Python Basics for Data Science"
                            img={article6}
                            date="19/03/2022"
                            link="https://drive.google.com/drive/folders/1VgPT14re1KNFiNmXtTqu3R6AgEOchG0b?usp=sharing"
                        />
                        <Article
                            title="Web Development"
                            img={article7}
                            date="20/02/2021"
                            link="https://drive.google.com/drive/folders/1VgPT14re1KNFiNmXtTqu3R6AgEOchG0b?usp=sharing"
                        />

                        <Article
                            title="CSS3"
                            img={article4}
                            date="10/10/2020"
                            link="https://drive.google.com/drive/folders/1VgPT14re1KNFiNmXtTqu3R6AgEOchG0b?usp=sharing"
                        />
                        <Article
                            title="Python"
                            img={article5}
                            date="03/09/2020"
                            link="https://drive.google.com/drive/folders/1VgPT14re1KNFiNmXtTqu3R6AgEOchG0b?usp=sharing"
                        />
                        <Article
                            title="Html5"
                            img={article3}
                            date="31/08/2020"
                            link="https://drive.google.com/drive/folders/1VgPT14re1KNFiNmXtTqu3R6AgEOchG0b?usp=sharing"
                        />

                    </ul>
                </Layout>
            </main>
        </>
    );
};
export default articles;
