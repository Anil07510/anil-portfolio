import ProjectItem from "./ProjectItem";
import project1 from "../public/assets/projects/crypto.jpg";
import project2 from "../public/assets/projects/property.jpg";
import project3 from "../public/assets/projects/twitch.jpg";
import project4 from "../public/assets/projects/netflix.jpg";
const Projects = () => {
  return (
    <div id="projects" className="w-full min-h-screen">
      <div className="max-w-[1240px] m-auto mx-8 md:mx-[4rem] pb-14">
        <div className=" my-10 mx-[2.4rem]">
          <p className="pre_heading font-bold text-2xl tracking-widest py-3">
            Projects <span className="text-[#0174BE] text-[150%]">.</span> 
          </p>
          {/* <Link href="/#projects"> */}
          <h3  className="heading">On Which I Have Worked</h3>
          {/* </Link> */}
         
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 justify-end items-center ">
          <ProjectItem imgURL={project1} title={"Todo List"} desc={"This application helps in storing todo list"}/>
          <ProjectItem imgURL={project2} title={"Movie Website"} desc={"This application provides latest movie release"}/>
          <ProjectItem imgURL={project1} title={"News Website"} desc={"This application helps in reading latest news on world"}/>
          <ProjectItem imgURL={project2} title={"Todo List"} desc={"This application helps in storing todo list"}/>
          <ProjectItem imgURL={project3} title={"Todo List"} desc={"This application helps in storing todo list"}/>
          <ProjectItem imgURL={project4} title={"Todo List"} desc={"This application helps in storing todo list"}/>
        </div>
      </div>
    </div>
  );
};

export default Projects;
