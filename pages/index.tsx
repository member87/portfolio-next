import type { NextPage } from "next";
import Head from "next/head";
import HomeCard from "../components/HomeCard";
import Badge from "../components/Badge";
import HomeGitCard from "../components/HomeGitCard";
import TextSlider from "@/components/TextSlider";
import FloatingSquareLoader from "@/components/FloatingSquareLoader";
import Link from "next/link";
import Background from "@/components/Background";
import Experience from "@/components/Experience";

const badges = [
  "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
  "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
  "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white",
  "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
  "https://img.shields.io/badge/lua-%232C2D72.svg?style=for-the-badge&logo=lua&logoColor=white",
  "https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white",
  "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
  "https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white",
  "https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white",
  "https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white",
  "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
  "https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white",
  "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
  "https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D",
  "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
  "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
  "https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white",
  "https://img.shields.io/badge/NeoVim-%2357A143.svg?&style=for-the-badge&logo=neovim&logoColor=white",
  "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
  "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black",
  "https://img.shields.io/badge/Arch%20Linux-1793D1?logo=arch-linux&logoColor=fff&style=for-the-badge",
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jack | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-white overflow-hidden">
        <section>
          <Background>
            <div className="w-screen m-5 px-4 flex flex-col justify-center z-50 md:px-10 lg:max-w-4xl pointer-events-none">
              <h1 className="text-5xl flex-auto pb-5 md:text-[5em] tracking-wide font-semibold">
                <TextSlider text="Jack" delay={0} />
                <TextSlider text="Humes" delay={300} />
              </h1>

              <div className="flex text-gray-200 child:pointer-events-auto gap-2">
                <a
                  href="https://github.com/member87"
                  className="hover:text-accent duration-200"
                >
                  <i className="fa-brands fa-github mr-2 text-6xl"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/jackhumes"
                  className="hover:text-accent duration-200"
                >
                  <i className="fa-brands fa-linkedin mr-2 text-6xl"></i>
                </a>
              </div>
            </div>
            <FloatingSquareLoader />
          </Background>
        </section>

        <section className="bg-background-secondary pb-32 flex items-center justify-center z-20 relative">
          <div className="w-screen px-6 pt-32 md:w-3/4 lg:w-1/2 lg:max-w-4xl z-50">
            <div className="flex flex-col text-3xl gap-2 pb-5"></div>
            <h2 className="text-3xl font-semibold mb-6">Hi There!</h2>
            <p className="text-xl mb-6">
              I&apos;m Jack, a developer & cyber secutiy enthusiast with a focus
              on website development. I have worked on different projects which
              include a variety of different websites, game plugins, scripts and
              software development.
              <br className="mb-6" />
              This website is my porfolio to show some of my projects that I
              have worked on and to show my recent work. I&apos;m always working
              on new projects and creating new things.
            </p>

            <a
              className="mt-6 hover:bg-accent p-4 duration-200 ease-in-out rounded bg-background"
              href="mailto:contact@jackhumes.com"
            >
              <i className="fa-solid fa-envelope mr-2"></i>
              <span className="font-semibold">Send me a message</span>
            </a>
          </div>
        </section>

        <section className="bg-background-secondary flex items-center flex-col py-10">
          <h3 className="text-3xl font-semiblack uppercase tracking-widest mb-10">
            Work Experience
          </h3>

          <div className="">
            <Experience
              logo="/companies/imegamedia.jpg"
              name="Imegamedia"
              title="Junior Web Developer"
              start="August 203"
              end="Present"
              url="https://dorset.tech"
            >
              <i className="fa-brands fa-wordpress"></i>
              <i className="fa-brands fa-php"></i>
              <i className="fa-brands fa-html5"></i>
              <i className="fa-brands fa-css3-alt"></i>
            </Experience>
          </div>
        </section>

        <section className="bg-background-secondary min-h-screen flex items-center">
          <div className="py-8 bg-background w-full relative z-30 lg:skew-y-3">
            <div className="py-8 w-screening this mx-auto max-w-screen-2xl lg:-skew-y-3">
              <div className="text-center">
                <h3 className="text-3xl font-semiblack uppercase tracking-widest ">
                  GitHub Projects
                </h3>
                <h4 className="text-paragraph tracking-wide">
                  A couple of my open source GitHub projects
                </h4>
              </div>
              <div className="px-8 grid grid-cols-1 py-16 gap-20 mx-auto md:max-w-2xl lg:max-w-7xl lg:grid-cols-3 ">
                <HomeGitCard project="cam-finder" />
                <HomeGitCard project="eventtickets" />
                <HomeGitCard project="cam-finder-gui" />
              </div>
              <Link href="/github">
                <button className="mx-auto block border-2 px-8 py-3 border-accent">
                  GitHub Projects
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
