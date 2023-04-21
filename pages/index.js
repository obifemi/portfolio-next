import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">developedByMert</h1>
            <ul className="flex items-center">
              <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              <li>
                {" "}
                <a
                  href="#"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                >
                  Resume
                </a>{" "}
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">Ali Mert Inal</h2>
            <h3>Frontend Developer and UX Designer/Researcher</h3>
            <p>
              Freelancer providing you solutions for your webdev problems,
              wishes, requests... Ask me from research to code, let me help you
              realize it!
            </p>
          </div>
          <div>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div>

          </div>
        </section>
      </main>
    </>
  );
}
