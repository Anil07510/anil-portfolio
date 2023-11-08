import html from "../public/assets/skills/html.png";
import css from "../public/assets/skills/css.png";
import bootstrap from "../public/assets/skills/bootstrap.png";
import tailwind from "../public/assets/skills/tailwind.png";
import github1 from "../public/assets/skills/github1.png";
import javascript from "../public/assets/skills/javascript.png";
import mongo from "../public/assets/skills/mongo.png";
import react from "../public/assets/skills/react.png";
import nextjs from "../public/assets/skills/nextjs.png";
import shopify from "../public/assets/skills/shopify.png";
import SkillsCard from "./SkillsCard";
const Skill = () => {
  return (
    <div id="skills" className="w-full max-h-full">
      <div className="max-w-[1240px] m-auto sm:mx-[2rem] md:mx-[5rem] my-10  flex flex-col justify-center h-full">
        <div className="mx-7 my-10">
          <p className="pre_heading font-bold text-2xl tracking-widest py-3">Skills <span className="text-[#0174BE] text-[150%]">.</span> </p>
          <h3 className="heading ">What I Can Do </h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 md:px-6 lg:px-1 gap-5 justify-center items-center">
          <SkillsCard ImgUrl={html} skillType={"html"} />
          <SkillsCard ImgUrl={css} skillType={"css"} />
          <SkillsCard ImgUrl={bootstrap} skillType={"bootstrap"} />
          <SkillsCard ImgUrl={tailwind} skillType={"tailwind css"} />
          <SkillsCard ImgUrl={javascript} skillType={"javascript"} />
          <SkillsCard ImgUrl={react} skillType={"react js"} />
          <SkillsCard ImgUrl={nextjs} skillType={"next js"} />
          <SkillsCard ImgUrl={github1} skillType={"github"} />
          <SkillsCard ImgUrl={mongo} skillType={"mongo db"} />
          <SkillsCard ImgUrl={shopify} skillType={"shopify"} />
        </div>
      </div>
    </div>
  );
};

export default Skill;
