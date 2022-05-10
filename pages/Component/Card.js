import next from "next";


export default function Card (props) {
  return (
    <div className="border border-none w-56 h-72 ">
        <img src={props.img} className=" mx-auto mt-3" />
        <h2 className=" text-center mt-3 font-bold text-lg text-slate-500">{props.name}</h2>
        <h2 className="text-xs mt-3 text-center text-slate-700">{props.title}</h2>
    </div>
  )
}
