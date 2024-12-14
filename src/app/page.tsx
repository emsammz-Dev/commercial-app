"use client";

import { AiFillBug } from "react-icons/ai";
import Link from "next/link";

export default function Home() {
  // const parentVariable = {
  //   hidden: {
  //     opacity: 0,
  //   },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.2,
  //     },
  //   },
  // };

  // const childVariable = {
  //   hidden: {
  //     opacity: 0,
  //     x: -20,
  //   },
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //     transition: {
  //       duration: 0.5,
  //     },
  //   },
  // };

  return (
    <>
      {/* screen1 */}
      <div className="pt-16 h-screen bg-gray-950 flex flex-col justify-center items-center gap-4 text-5xl">
        <div className="flex flex-col items-center font-bold">
          <div>
            <span className="text-blue-200 italic hover:not-italic">
              EVOLVE
            </span>{" "}
            ENJOY
          </div>
          <div>
            EVERY{" "}
            <span className="text-blue-200 italic hover:not-italic">
              MOMENTS
            </span>
          </div>
        </div>
        <div className="text-lg text-center text-balance text-blue-300 italic">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit
        </div>
        <AiFillBug className="text-blue-900 bg-opacity-10 rounded-md hover:text-blue-400" />
        <div className="text-lg space-x-4">
          <button className="px-4 rounded-xl font-bold p-1 border-2 border-blue-600 bg-blue-400/50 hover:border-white">
            <Link href={"/product"}>EXPLORE</Link>
          </button>
          <button className="px-4 rounded-xl bg-blue-600/20 font-semibold italic p-1 border-2 border-blue-400 hover:border-white">
            BLOG
          </button>
        </div>
      </div>
      {/* screen 2 */}
      <div className="h-screen bg-gray-950 flex flex-col">
        <div className="flex-1 rounded-xl m-10 bg-gray-900 border-[0.2px] border-gray-900 shadow-xl shadow-gray-800"></div>
        <div className="flex-1 flex">
          <div className="flex-1 rounded-xl m-10 border-[0.2px] bg-gray-900 border-gray-900 shadow-xl shadow-gray-800"></div>
          <div className="flex-1 rounded-xl m-10 border-[0.2px] bg-gray-900 border-gray-900 shadow-xl shadow-gray-800"></div>
        </div>
      </div>
      {/* screen 3 */}
      <div className="h-screen bg-gray-950 text-blue-200 flex justify-center items-center text-5xl text-bold text-balance text-center">
        <div>
          <span className="text-fuchsia-300 uppercase font-bold">Lorem,</span>
          <span className="italic text-4xl">
            ipsum dolor sit amet consectetur adipisicing elit. Tempora doloribus
            esse dolore corporis voluptatum voluptate
          </span>
          <span className="text-fuchsia-300 uppercase font-bold">?</span>
        </div>
      </div>
    </>
  );
}
