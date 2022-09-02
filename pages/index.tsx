import type { NextPage } from 'next'
import Head from 'next/head'
import Typewriter from 'typewriter-effect';
import HomeCard from '../components/HomeCard';
import Badge from '../components/Badge';
import HomeGitCard from '../components/HomeGitCard';
import Link from 'next/link'

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Jack | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-white">
        <div className="h-screen flex bg-background justify-center items-center background-pattern">
          <div className="w-screen m-5 h-1/2 flex flex-col justify-center md:w-1/2">
            <div className="text-accent text-xl mb-8">Hello, my name is</div>
            <h1 className="text-6xl font-black">Jack</h1>
            <div className="text-xl my-4">
              <Typewriter
                options={{
                  strings: ['Software developer', 'Information Security', 'Full stack web developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <div>
              <Link href="/">
                <button className="mt-6 mr-2 inline-block py-3 px-4 border-2 border-accent bg-accent rounded shadow w-fit">
                  GitHub Projects
                </button>
              </Link>
              <a href="#aboutme" className="mt-6 inline-block py-3 px-4 border-2 border-accent rounded shadow w-fit">About me</a>
            </div>
          </div>
        </div>

        <div className="bg-background-secondary">
          <div className="grid grid-cols-1 w-full px-4 mx-auto py-40 lg:grid-cols-2 lg:space-x-20 lg:px-40" id="aboutme">
            <HomeCard title="About me">
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
            </HomeCard>

            <HomeCard title="Skills">
              <div className="space-y-4 space-x-4 flex flex-wrap">
                <span></span>
                <Badge url="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" />
                <Badge url="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" />
                <Badge url="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white" />
                <Badge url="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
                <Badge url="https://img.shields.io/badge/lua-%232C2D72.svg?style=for-the-badge&logo=lua&logoColor=white" />
                <Badge url="https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white" />
                <Badge url="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" />
                <Badge url="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white" />
                <Badge url="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" />
                <Badge url="https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white" />
                <Badge url="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
                <Badge url="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" />
                <Badge url="https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D" />
                <Badge url="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
                <Badge url="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
                <Badge url="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" />
                <Badge url="https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white" />
                <Badge url="https://img.shields.io/badge/NeoVim-%2357A143.svg?&style=for-the-badge&logo=neovim&logoColor=white" />
                <Badge url="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" />
              </div>
            </HomeCard>
          </div>
        </div>

        <div className="bg-background">
          <div className="py-40 px-8 w-full mx-auto lg:px-40 max-w-screen-2xl">
            <h3 className="text-2xl">GitHub Projects</h3>
            <h4>A few examples of my opensource github projects</h4>
            <div className="grid grid-cols-1 my-10 gap-5 lg:grid-cols-3">
              <HomeGitCard project="cam-finder" />
              <HomeGitCard project="portfolio-next" />
              <HomeGitCard project="dotfiles" />
            </div>
            <Link href="/">
              <button className="mx-auto w-fit block border-2 px-8 py-3 border-accent">
                GitHub Projects
              </button>
            </Link>

          </div>
        </div>
      </main>

    </>
  )
}

export default Home
