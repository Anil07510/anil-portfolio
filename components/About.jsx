import { HiExternalLink } from "react-icons/hi";
import Image from "next/image";
import about from "../public/assets/anil.jpg";
import styled from "styled-components";
import Link from "next/link";
// const AboutImg = styled.div`
//   & {
//   width:300px;
//   height:250px;
//   display:flex;
//   box-shadow:16px 16px 20px #0000008c;
//   border-radius:10px;
//   position:relative;
//   }
//   &::before{
//     content:"";
//     position:absolute;
//     background:linear-gradient(
//       315deg,#00ccff, #d400d4
//     );
//     height:120px;
//   }
//   &::after{
//     content:"Animation",
//     width:190px;
//     height:190px;
//     background:#101010;
//     position:absolute;
//     border-radius:10px;
//     display:flex;
//     justify-content:center;
//     align-items:center;
//     color:#ff0052;

//   }
// `;

const About = () => {
  return (
    <div
      id="about"
      className="w-full md-max-w[80%] max-h-full  my-10 py-16 px-1 flex items-center -z-10"
    >
      <div className="max-w-[1200px] m-auto  gap-8 sm:px-[0.1rem] mx-[2rem] md:mx-[5rem] ">
        <div className="block lg:flex gap-6">
          <div className="lg:max-w-[70%] min-w-[75%] gap-5">
            <p className="pre_heading">About <span className="text-[#0174BE] text-[150%]">.</span> </p>
            <h2 className="heading  text-5xl tracking-[0.10rem] py-3">
              Who I Am ?
            </h2>
            <p className="text-[20px] py-2 text-gray-600 overflow-hidden">
              Hello, Everyone !
            </p>
            <p className="text-[20px] py-3 text-gray-600">
              My self Anil Kumar, Student of CSE at RCET Bhilai.
            </p>
            <p className="text-[20px] py-3 text-gray-600">
              Currently I'm in third year, I started this journey on dec'22 with a dream. <br />
              At now I have completed my front end development and I'm also exporing new technologies and frameworks.
              I have solved more than 100 questions on DSA in diffrent plateform like Leetcode & GFG. 
            </p>
            <p className="text-[20px] py-3  text-gray-600 underline flex align-center text-center">
              <Link className="px-2 flex " href="/#">
                check out my resume <HiExternalLink />
              </Link>
            </p>
          </div>
          <div className="about_img w-full h-auto m-auto shadow-gray-400 ml-[-12px] rounded-xl flex justify-center items-center">
            <Image
              className="rounded-xl block bg-cover border-4  shadow-xl shadow-[#43fff2] border-[#0C356A] hover:scale-105"
              src={about}
              alt="about image"
              height="auto"
              width={250}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
