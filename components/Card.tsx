import React from "react";
import Image from "next/image";

type Props = {
  Image: any;
  name: string;
  title: string;
};

const Card: React.FC<Props> = (props) => {
  return (
    <div className="border border-none w-56 h-72 mx-auto ">
      <Image src={props.Image} width={500} height={300} alt="images card" />
      <h2 className=" text-center mt-3 font-bold text-lg text-slate-500">
        {props.name}
      </h2>
      <h2 className="text-xs mt-3 text-center text-slate-700">{props.title}</h2>
    </div>
  );
};

export default Card;
