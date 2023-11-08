import Image from "next/image";
import Link from "next/link";
import Button from "@mui/material/Button";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineGoogle,
} from "react-icons/ai";
import { SiLinktree } from "react-icons/si";
import contact from "../public/assets/contact.jpg";
// import resume from "../public/assets/Resume.pdf";
const Contact = () => {
  return (
    <div id="contact" className="min-h-screen max-w-full">
      <div className="max-h-[1240px] m-auto mx-4 lg:mx-[4rem] my-4">
        <div className=" my-10 mx-[2.4rem]">
          <p className="pre_heading ">
            Contact <span className="text-[#0174BE] text-[150%]">.</span>{" "}
          </p>
          <h3 className="heading">Get in touch</h3>
        </div>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="grid col-span-3 lg:col-span-2 h-full w-full ">
            <div className="about_section ">
              <Image className="rounded-lg" src={contact} alt="contact img" />
              <div className="mx-4 my-4">
                <h3 className="heading text-4xl tracking-widest">
                  Anil Kumar{" "}
                  <span className="text-[#0C356A] text-[150%]">.</span>{" "}
                </h3>
                <p className="text-2xl tracking-widest">Front End Developer</p>
                <p className="text-xl tracking-wider">
                  I am available for intern and full time position <br />
                  contact me or let's talk
                </p>

                <div className="py-[1rem] ">
                  <p className="text-md">let's connect with me</p>
                  <ul className="flex items-center justify-around ml-[-1rem] my-4 w-full sm:w-[80%]">
                    <Link href="https://www.linkedin.com/in/anil-kumar-90b8641a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                      <li className="socialIcons text-[250%]">
                        <AiOutlineLinkedin />
                      </li>
                    </Link>
                    <Link href="https://github.com/Anil07510">
                      <li className="socialIcons text-[250%]">
                        <AiOutlineGithub />
                      </li>
                    </Link>
                    <Link href="https://linktr.ee/aniraj07510">
                      <li className="socialIcons text-[250%]">
                        <SiLinktree />
                      </li>
                    </Link>
                    <Link href="https://techzcrafter.com/">
                      <li className="socialIcons text-[250%]">
                        <AiOutlineGoogle />
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="contact_section grid col-span-3 lg:col-span-3 h-full w-full">
            <div className="flex flex-col justify-center items-center max-w-xl m-auto gap-6">
              <h2 className="heading tracking-widest">Get In Toutch</h2>
              <p className="text-center  tracking-wide">
                Although I’m not currently looking for any new opportunities, my
                inbox is always open. Whether you have a question or just want
                to say hi, I’ll try my best to get back to you!
              </p>
              <div className="flex justify-center items-center ">
                <Button
                  className="socialIcons px-4 py-2 mx-3 border-2 hover:scale-110 hover:bg-[#0C356A] hover:text-white"
                  variant="outlined"
                >
                  <a href="mailto:aniraj07510@gmail.com" target="_blank">
                    say hello
                  </a>
                </Button>
                <Button
                  className="socialIcons px-4 py-2 mx-3 border-2 hover:scale-110 hover:bg-[#0C356A] hover:text-white"
                  variant="outlined"
                >
                  {/* <a href={resume}>Sales Figures</a> */}
                  resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
