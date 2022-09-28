import type { NextPage } from "next";
import Head from "next/head";
import HomeCard from "../components/HomeCard";
import Badge from "../components/Badge";
import HomeGitCard from "../components/HomeGitCard";
import TextSlider from "@/components/TextSlider";
import FloatingSquareLoader from "@/components/FloatingSquareLoader";
import Link from "next/link";

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

      <main className="text-white overflow-hidden relative">
        <section className="h-screen flex flex-col bg-background justify-center items-center background-pattern relative">
          <div className="w-screen m-5 px-10 h-1/2 flex flex-col justify-center z-50 md:w-1/2 md:px-0">
            <h1 className="text-5xl md:text-[5em] tracking-wide font-semibold">
              <TextSlider text="Jack" delay={0} />
              <TextSlider text="Humes" delay={300} />
            </h1>
            <div className="py-6 px-4 flex text-paragraph child:mr-8 text-3xl">
              <a
                href="https://github.com/member87"
                className="hover:text-white">
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                href="mailto:contact@jackhumes.com"
                className="hover:text-white">
                <i className="fa-regular fa-envelope"></i>
              </a>

              <a href="https://jackhumes.com" className="hover:text-white">
                <i className="fa-solid fa-globe"></i>
              </a>
            </div>
          </div>
          <FloatingSquareLoader />
          <div className="w-screen top-3/4 bottom-0 absolute bg-gradient-to-b from-transparent to-background-secondary"></div>
        </section>

        <section className="bg-background-secondary pb-64 flex items-center justify-center z-50 relative">
          <div className="w-screen px-6 pt-32 md:w-3/4 lg:w-1/2 lg:max-w-4xl z-50">
            <h2 className="text-3xl font-semibold mb-6">Hi there</h2>
            <p className="text-xl mb-6">
              I&apos;m Jack, a developer & cyber secutiy enthusiast with a focus
              on website development. My projects that I have worked on include
              a variety of different websites, game plugins, scripts and
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

            <div className="flex flex-wrap justify-center pt-24 child:mr-2 child:mb-2">
              {badges.map((v, k) => {
                return <Badge url={v} key={k} child={k} />;
              })}
            </div>
          </div>
        </section>

        <section className="bg-background-secondary h-screen flex items-center">
          <div className="bg-background skew-y-6 w-full overflow-hidden">
            <div className="py-40 w-screen mx-auto lg:px-40 max-w-screen-2xl -skew-y-6">
              <div className="text-center pb-8 px-4">
                <h3 className="text-3xl font-semiblack uppercase tracking-widest ">
                  GitHub Projects
                </h3>
                <h4 className="text-paragraph tracking-wide">
                  A couple of my open source GitHub projects
                </h4>
              </div>
              <div className="px-4 grid grid-cols-1 my-10 gap-5 lg:grid-cols-3">
                <HomeGitCard project="cam-finder" />
                <HomeGitCard project="portfolio-next" />
                <HomeGitCard project="cam-finder-web" />
              </div>
              <Link href="/github">
                <button className="mx-auto w-fit block border-2 px-8 py-3 border-accent">
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
