import Image from "next/image";
import Link from "next/link";
import { AiOutlineGithub, AiOutlineFolder } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
const ProjectItem = (props) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#2E97A7] to-[#0174BE]  ease-in-out  ">
      <Image
        className="rounded-xl group-hover:opacity-10 "
        src={props.imgURL}
        alt="backgroundImg"
        height="100%"
        width="100%"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="project_icon flex justify-between  items-center m-1 lg:m-4">
          <span className="socialIcons bg-white lg:text-4xl  mx-5 my-2">
            <AiOutlineFolder />
          </span>
          <span className="socialIcons bg-white lg:text-4xl  mx-5 my-2">
            <AiOutlineGithub />
          </span>
          <span className="socialIcons bg-white lg:text-4xl  mx-5 my-2 ">
            <FiExternalLink />
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-2xl text-white tracking-wider text-center">
            {props.title}
          </h3>
          <p className="lg:pb-2 lg:pt-1 text-white text-center">{props.desc}</p>
          <Link href="/">
            <p className="text-center socialIcons max-w-[100%] lg:py-3 lg:px-5 rounded-lg bg-white hover:bg-[#0C356A] text-gray-700 font-bold lg:text-lg cursor-pointer">
              More Info
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
