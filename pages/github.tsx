import type { NextPage } from "next";
import Head from "next/head";
import HomeCard from "../components/HomeCard";
import HomeGitCard from "../components/HomeGitCard";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jack | Github</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-white bg-background-secondary min-h-screen">
        <div className="bg-background">
          <div className="w-full px-5 md:w-5/6 md:px-0 lg:w-3/4 mx-auto">
            <div className="py-20">
              <h1 className="text-4xl pb-2">GitHub Projects</h1>
              <h2>A collection of my open source GitHub projects</h2>
              <Link href="/">
                <button className="mr-2 mt-4 text-paragraph">
                  <i className="fa-solid fa-arrow-left mr-2"></i>go back
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-background-secondary">
          <div className="grid grid-cols-1 gap-10 py-16 w-full px-10 md:w-5/6 md:grid-cols-2 lg:grid-cols-3 lg:w-full lg:max-w-7xl mx-auto">
            <HomeGitCard project="eventtickets" invert />
            <HomeGitCard project="portfolio-next" invert />
            <HomeGitCard project="portfolio" invert />
            <HomeGitCard project="cam-finder" invert />
            <HomeGitCard project="cam-finder-rust" invert />
            <HomeGitCard project="cam-finder-web" invert />
            <HomeGitCard project="rhul-attendance" invert />
            <HomeGitCard project="dotfiles" invert />
            <HomeGitCard project="nvim" invert />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
