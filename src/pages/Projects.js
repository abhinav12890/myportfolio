import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import airclone from "../../public/images/projects/airclone.png";
import gclone from "../../public/images/projects/gclone.png";
import spotifyclone from "../../public/images/projects/spotifyclone.png";
import twitter from "../../public/images/projects/twitterclone.png";
import ytclone from "../../public/images/projects/ytclone.png";
import stallion from "../../public/images/projects/stallion.png";
import strings from "../../public/images/projects/strings.png";
import teamchat from "../../public/images/projects/teamchat.png";
import pricewise from "../../public/images/projects/pricewise.png";
import moviebox from "../../public/images/projects/moviebox.png";
import goldprice from "../../public/images/projects/goldprice.png";
import forecastexcel from "../../public/images/projects/forecastexcel.png";
import store from "../../public/images/projects/store.png";
import sqlclean from "../../public/images/projects/sqlclean.png";
import salesanalytics from "../../public/images/projects/salesanalytics.png";
import loanpred from "../../public/images/projects/loanpred.png";
import bikesales from "../../public/images/projects/bikesales.png";
import hrdash from "../../public/images/projects/hrdash.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import React, { useState } from "react";
const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className="w-full flex items-center justify-between rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
            <Link className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full" href={link} target="_blank">
                <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} priority sizes='(max-width:768px)100vw,(max-width:1200px)50vw,50vw' />
            </Link>
            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
                <div className="mt-2 flex items-center">
                    <Link href={github} target="_blank" className="w-10">
                        <GithubIcon />
                    </Link>
                    <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base">
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ type, title, img, link, github }) => {
    return (
        <article className="w-full flex flex-col items-center justify-between rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
            <Link className="w-full cursor-pointer overflow-hidden rounded-lg" href={link} target="_blank">
                <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} />
            </Link>
            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl">{title}</h2>
                </Link>
                <div className="w-full mt-2 flex items-center justify-between">
                    <Link href={link} target="_blank" className="text-lg font-semibold underline md:text-base">
                        Visit
                    </Link>
                    <Link href={github} target="_blank" className="w-8 marker:w-6">
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Projects = () => {
    const [showWebDevProjects, setShowWebDevProjects] = useState(true);

    // Event handler to switch to web dev projects
    const handleWebDevClick = () => {
        setShowWebDevProjects(true);
    };

    // Event handler to switch to data analyst projects
    const handleDataAnalystClick = () => {
        setShowWebDevProjects(false);
    };

    return (
        <>
            <Head>
                <title>Abhinav | Projects Page</title>
                <meta name="description" content="my description" />
            </Head>
            <TransitionEffect />
            <main className="flex mb-16 w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="From Vision to Reality: Diverse Project Showcase" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
                    <div className={`flex flex-row sm:flex-col items-center justify-center space-x-2 sm:space-x-0 sm:space-y-2 mb-8`}>
                        {/* Button to switch to web dev projects */}
                        <button onClick={handleWebDevClick} className={`px-4 py-2 rounded-full focus:outline-none text-base sm:text-lg ${showWebDevProjects ? "bg-primary text-light" : "bg-dark dark:bg-light dark:text-dark text-light"} min-w-[160px] w-auto sm:min-w-[196px] sm:w-auto h-[44px] sm:h-auto`}>
                            Web Development Projects
                        </button>
                        {/* Adding margin between the buttons */}
                        <div className="w-2 sm:w-4 h-2 sm:h-auto" />
                        {/* Button to switch to data analyst projects */}
                        <button onClick={handleDataAnalystClick} className={`px-4 py-2 rounded-full focus:outline-none text-base sm:text-lg ${showWebDevProjects ? "bg-dark dark:bg-light dark:text-dark text-light" : "bg-primary text-light"} min-w-[160px] w-auto sm:min-w-[196px] sm:w-auto h-[44px] sm:h-auto`}>
                            Data Analyst Projects
                        </button>
                    </div>
                    {/* Render web dev projects if showWebDevProjects is true, otherwise render data analyst projects */}
                    {showWebDevProjects ? (
                        // Render web dev projects here
                        <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                            {/* Web dev projects */}
                            {/* Your web dev projects go here */}
                            <div className="col-span-12">
                                <FeaturedProject
                                    title="Get Flats"
                                    img={airclone}
                                    summary="Get Flats combines cutting-edge technologies with intuitive design principles to deliver a feature-rich Airbnb clone that redefines the vacation rental experience. With its robust feature set, seamless user experience, and powerful tech stack, Get Flats is poised to revolutionize the way users discover and book accommodations worldwide."
                                    link="https://getflat.vercel.app/"
                                    type="Featured Project"
                                    github="https://github.com/abhinav12890/airbnb_clone"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-12"><Project
                                title="MusicalWay"
                                img={spotifyclone}
                                link="https://mymusical-way.vercel.app/"
                                type="Project"
                                github="https://github.com/abhinav12890/spotify-clone"
                            /></div>
                            <div className="col-span-6 sm:col-span-12"><Project
                                title="Pegion"
                                img={twitter}
                                link="https://pegion.vercel.app/"
                                type="Project"
                                github="https://github.com/abhinav12890/twitter-clone"
                            /></div>
                            <div className="col-span-6 sm:col-span-12"><Project
                                title="Youtube Clone"
                                img={ytclone}
                                link="https://abhi-ytclone.netlify.app/"
                                type="Project"
                                github="https://github.com/abhinav12890/ytclone"
                            /></div>
                            <div className="col-span-6 sm:col-span-12"><Project
                                title="Google Clone"
                                img={gclone}
                                link="https://abhi-doodleclone.netlify.app/"
                                type="Project"
                                github="https://github.com/abhinav12890/googleclone"
                            /></div>
                            <div className="col-span-6 sm:col-span-12"><Project
                                title="Stallion"
                                img={stallion}
                                link="https://stallion-tau.vercel.app/"
                                type="Project"
                                github="https://github.com/abhinav12890/stallion"
                            /></div>
                            <div className="col-span-6 sm:col-span-12"><Project
                                title="Strings"
                                img={strings}
                                link="https://strings-five.vercel.app/"
                                type="Project"
                                github="https://github.com/abhinav12890/social-app"
                            /></div>
                            <div className="col-span-6 sm:col-span-12"><Project
                                title="TeamChat"
                                img={teamchat}
                                link="https://team-chat-flame.vercel.app/"
                                type="Project"
                                github="https://github.com/abhinav12890/team-chat"
                            /></div>
                            <div className="col-span-6 sm:col-span-12"><Project
                                title="PriceWise"
                                img={pricewise}
                                link="https://pricewise-teal-phi.vercel.app/"
                                type="Project"
                                github="https://github.com/abhinav12890/pricewise"
                            /></div>
                            <div className="col-span-6 sm:col-span-12"><Project
                                title="MovieBox"
                                img={moviebox}
                                link="https://movie-box-lime-psi.vercel.app/auth"
                                type="Project"
                                github="https://github.com/abhinav12890/movie-box"
                            /></div>
                        </div>
                    ) : (
                        // Render data analyst projects here
                        <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                            {/* Data analyst projects */}
                            {/* Your data analyst projects go here */}
                            <div className="col-span-12">
                                <FeaturedProject
                                    title="HR Analytics Dashboard PowerBi"
                                    img={hrdash}
                                    summary="The HR Analytics Dashboard, utilizing Power BI and Excel, delivers actionable insights on key workforce metrics swiftly. With intuitive visuals and data manipulation capabilities, stakeholders can optimize HR strategies for enhanced organizational performance and employee engagement."
                                    link="https://github.com/abhinav12890/HR-Analytics-Dashboard_PowerBi"
                                    type="Featured Project"
                                    github="https://github.com/abhinav12890/HR-Analytics-Dashboard_PowerBi"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-12"><Project
                                title="Gold Price TimeSeriesForcasting"
                                img={goldprice}
                                link="https://github.com/abhinav12890/Gold_TimeSeriesForcasting"
                                type="Project"
                                github="https://github.com/abhinav12890/Gold_TimeSeriesForcasting"
                            /></div>
                            <div className="col-span-6 sm:col-span-12"><Project
                                title="YT_TimeSeriesForecasting_Excel"
                                img={forecastexcel}
                                link="https://github.com/abhinav12890/YT_TimeSeriesForecasting_Excel"
                                type="Project"
                                github="https://github.com/abhinav12890/YT_TimeSeriesForecasting_Excel"
                            /></div>
                            <div className="col-span-6 sm:col-span-12"><Project
                                title="Data Cleaning SQL"
                                img={sqlclean}
                                link="https://github.com/abhinav12890/Data-Cleaning-in-SQL"
                                type="Project"
                                github="https://github.com/abhinav12890/Data-Cleaning-in-SQL"
                            /></div>
                            <div className="col-span-6 sm:col-span-12"><Project
                                title="Music Store Data Analysis Project using SQL"
                                img={store}
                                link="https://github.com/abhinav12890/MusicStore_SQL_Analysis"
                                type="Project"
                                github="https://github.com/abhinav12890/MusicStore_SQL_Analysis"
                            /></div>
                            <div className="col-span-6 sm:col-span-12"><Project
                                title="Sales Analysis"
                                img={salesanalytics}
                                link="https://github.com/abhinav12890/SalesAnalytics"
                                type="Project"
                                github="https://github.com/abhinav12890/SalesAnalytics"
                            /></div>
                            <div className="col-span-6 sm:col-span-12"><Project
                                title="Loan Approval Prediction ML"
                                img={loanpred}
                                link="https://github.com/abhinav12890/Loan-Approval-Prediction-using-Machine-Learning"
                                type="Project"
                                github="https://github.com/abhinav12890/Loan-Approval-Prediction-using-Machine-Learning"
                            /></div>
                            <div className="col-span-6 sm:col-span-12"><Project
                                title="Bike Sales Dashboard Excel"
                                img={bikesales}
                                link="https://github.com/abhinav12890/BikeSales_ExcelDashboard"
                                type="Project"
                                github="https://github.com/abhinav12890/BikeSales_ExcelDashboard"
                            /></div>
                        </div>
                    )}
                </Layout>
            </main>
        </>
    );
};

export default Projects;
