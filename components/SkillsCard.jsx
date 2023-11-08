import Image from "next/image";

const SkillsCard = (props) => {
  return (
    <div className="max-w-full m-auto h-100 mx-2  rounded-xl bg-white shadow-xl hover:scale-105">
      <div className="w-full h-full p-1 my-4 flex justify-around items-center gap-3">
        <div className="h-[100px] w-100 m-5">
          <Image src={props.ImgUrl} alt="img" width={100} height={100} />
        </div>
        <div>
          <h3 className="text-2xl flex items-center justify-center">
            <span className="uppercase">{props.skillType}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
