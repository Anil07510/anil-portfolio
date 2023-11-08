"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineAlignRight,
  AiOutlineClose,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineGoogle,
} from "react-icons/ai";
import { SiLinktree } from "react-icons/si";
import { useState } from "react";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [space, setSpace] = useState(false);

  const spaceHande = () => {
    setSpace(!space);
  };

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className=" w-full h-20 px-[1rem] lg:px-[8rem] shadow-xl sticky top-0 bg-white z-10 ">
      <div className="flex flex-row justify-between items-center w-full h-full px-2 ">
        <h3
          onClick={spaceHande}
          className={
            !space
              ? "font-bold text-2xl tracking-tight cursor-pointer"
              : "font-bold text-2xl hover:tracking-[0.3rem] cursor-pointer "
          }
        >
          <Link href="/#">anil kumar</Link>
        </h3>
        <ul className="hidden md:flex">
          <Link href="/">
            <li id="#" className="navLink">
              home
            </li>
          </Link>
          <Link href="/#about">
            <li className="navLink">about</li>
          </Link>
          <Link href="/#skills">
            <li className="navLink">skill</li>
          </Link>
          <Link href="/#projects">
            <li className="navLink">project</li>
          </Link>
          <Link href="/#contact">
            <li className="navLink">contact</li>
          </Link>
        </ul>
        <div onClick={handleNav} className="md:hidden cursor-pointer">
          <AiOutlineAlignRight size={35} />
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden  fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] md:w-[45%] sm:w-[60%] h-screen bg-[#ecf0f3] ease-in duration-500"
              : "fixed left-[-100%] top-0 w-[75%] ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full py-3 px-5 items-center justify-between">
              <h3
                onClick={spaceHande}
                className={
                  !space
                    ? "font-bold text-2xl tracking-tight cursor-pointer"
                    : "font-bold text-2xl hover:tracking-[0.3rem] cursor-pointer"
                }
              >
                anil kumar
              </h3>

              <div onClick={handleNav} className="socialIcons ">
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4 text-center ml-8">
              <p className="w-[95%] md:w-[100%] my-4">
                let's build somthing togher
              </p>
            </div>
            <div className="py-4 uppercase ml-8 ">
              <ul className="flex-col">
                <Link href="/#">
                  <li
                    onClick={() => setNav(false)}
                    className="my-4 py-2 px-2 text-sm uppercase hover:border-b"
                  >
                    home
                  </li>
                </Link>
                <Link href="/#about">
                  <li
                    onClick={() => setNav(false)}
                    className="my-4 py-2 px-2 text-sm uppercase hover:border-b "
                  >
                    about
                  </li>
                </Link>
                <Link href="/#skills">
                  <li
                    onClick={() => setNav(false)}
                    className="my-4 py-2 px-2 text-sm uppercase hover:border-b"
                  >
                    skill
                  </li>
                </Link>
                <Link href="/#projects">
                  <li
                    onClick={() => setNav(false)}
                    className="my-4 py-2 px-2 text-sm uppercase hover:border-b "
                  >
                    projects
                  </li>
                </Link>
                <Link href="/#contact">
                  <li
                    onClick={() => setNav(false)}
                    className="my-4 py-2 px-2 text-sm uppercase hover:border-b"
                  >
                    contact
                  </li>
                </Link>
              </ul>
              <div className="py-[3rem] ">
                <p>let's connect with me</p>
                <ul className="flex items-center justify-around ml-[-1rem] my-4 w-full sm:w-[80%]">
                  <Link href="https://www.linkedin.com/in/anil-kumar-90b8641a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <li className="socialIcons">
                      <AiOutlineLinkedin size={25} />
                    </li>
                  </Link>
                  <Link href="https://github.com/Anil07510">
                    <li onClick={() => setNav(false)} className="socialIcons">
                      <AiOutlineGithub size={25} />
                    </li>
                  </Link>
                  <Link href="https://linktr.ee/aniraj07510">
                    <li className="socialIcons">
                      <SiLinktree size={25} />
                    </li>
                  </Link>
                  <Link href="https://techzcrafter.com/">
                    <li className="socialIcons">
                      <AiOutlineGoogle size={25} />
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
