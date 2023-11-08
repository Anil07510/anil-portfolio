import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineGoogle,
  AiOutlineInstagram,
} from "react-icons/ai";
const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="flex flex-col max-w-[1240px] w-full h-full mx-auto justify-center items-center">
        <div className="">
          <p className="text-center uppercase text-gray-600 tracking-widest my-4">
            let's build somthing togher
          </p>
          <h1 className="my-4 text-gray-700">
            Hi I'am <span className="text-slate-700">Anil Kumar  <span className="text-[#0C356A] text-[150%]">.</span></span>
          </h1>
          <h1 className="text-gray-700">A front end developer</h1>
          <p className="my-4 max-w-[80%] m-auto">
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
        </div>
        <div className="my-10 min-w-[60%] m-auto">
          <ul className="flex flex-row justify-center items-center ">
            <li className="mx-4 text-[250%]  socialIcons">
              <a href="https://linktr.ee/aniraj07510">
                <AiOutlineLinkedin />
              </a>
            </li>
            <li className="mx-4 text-[250%] socialIcons">
              <a href="https://linktr.ee/aniraj07510">
                <AiOutlineGithub />
              </a>
            </li>
            <li className="mx-4 text-[250%]  socialIcons">
              <a href="https://linktr.ee/aniraj07510">
                <AiOutlineInstagram />
              </a>
            </li>
            <li className="mx-4 text-[250%] socialIcons">
              <a href="https://linktr.ee/aniraj07510">
                <AiOutlineGoogle />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
