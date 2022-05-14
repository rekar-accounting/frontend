import next from "next";
import React from "react";
import Image from "next/image";
import { Autoplay } from "swiper";



// export default function Card (props:any) {
//   return (
//     <div className="border border-none w-56 h-72 mx-auto ">
//         <Image src={props.Image} width={500} height={300} />
//         <h2 className=" text-center mt-3 font-bold text-lg text-slate-500">{props.name}</h2>
//         <h2 className="text-xs mt-3 text-center text-slate-700">{props.title}</h2>
//     </div>
//   )
// }

type Props = {
  Image:"Image"
  name:"name"
  title:"title"
};


const Card: React.FC<Props> = (props) => {
  return (
    <div className="border border-none w-56 h-72 mx-auto ">
        <Image src={props.Image} width={500} height={300} />
        <h2 className=" text-center mt-3 font-bold text-lg text-slate-500">{props.name}</h2>
        <h2 className="text-xs mt-3 text-center text-slate-700">{props.title}</h2>
    </div>
  )
}

export default Card;