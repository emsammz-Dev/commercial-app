"use client";
import { TfiMenu } from "react-icons/tfi";
import {
  easeInOut,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";

import Link from "next/link";

function NavBar() {
  const { scrollY } = useScroll();
  const [navOpen, setNavOpen] = useState(1);
  const [navOpenY, setNavOpenY] = useState(0);
  const [scrollValue, setScrollValue] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log(latest);
    // console.log("value", scrollValue);
    if (latest >= scrollValue) {
      setNavOpen(0);
      setNavOpenY(56);
    } else {
      setNavOpen(1);
      setNavOpenY(0);
    }
    setScrollValue(latest);
  });

  return (
    <>
      <motion.div
        className="flex fixed top-0 left-0 right-0 h-16 text-xl font-sans px-2 max-md:px-4 bg-blue-700 bg-opacity-10 backdrop-blur-md z-50 shadow-md shadow-black"
        initial={{ opacity: 1, y: navOpenY }}
        animate={{ opacity: navOpen, y: -navOpenY }}
        transition={{ duration: 1, ease: easeInOut }}
      >
        {/* nav search
        <div className="flex flex-1 items-center justify-center">
          <div className="flex items-center flex-1">
            <input
              className="rounded-2xl px-2 flex-1 h-8 shadow-2xl bg-slate-200 bg-opacity-80 hover:bg-gray-200 text-black"
              placeholder="Search Product Here...."
              type="search"
            />
            <button type="submit">
              <FaSearch className="w-10" />
            </button>
          </div>
        </div> */}
        {/* nav cart */}
        <div className="flex-1 flex justify-start items-center">
          <Link href={"/"}>
            <div>NUE-COMM</div>
          </Link>
        </div>
        <div className="max-md:hidden flex-1 flex justify-end items-center gap-4">
          <Link href={"/"}>HOME</Link>
          <Link href={"/product"}>PRODUCTS</Link>
          <Link href={"/blog"}>BLOG</Link>

          <Link href={"/contact/"}>CONTACT</Link>
        </div>
        <div className="md:hidden flex-1 flex justify-end items-center">
          <div>
            <TfiMenu />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default NavBar;
