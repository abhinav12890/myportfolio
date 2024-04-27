import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Layout from "./Layout";

const Footer = () => {
  const handleSayHello = () => {
    toast.success("Hello! Thank you for visiting my portfolio. Let's connect and discuss opportunities.", {
      position: "top-right",
      autoClose: 5000, // 5 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
        <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
          <span>{new Date().getFullYear()}&copy; All Rights Reserved.</span>
          <div className="flex items-center lg:py-2">
            Build with <span className="text-primary dark:text-primaryDark text-2xl px-1"> &#9825; </span>by &nbsp;
            <Link href="/about" className="underline underline-offset-2">Abhinav</Link>
          </div>
          <button onClick={handleSayHello} className="focus:outline-none underline underline-offset-2">Say Hello</button>
        </Layout>
      </footer>
      <ToastContainer />
    </>
  );
};

export default Footer;
