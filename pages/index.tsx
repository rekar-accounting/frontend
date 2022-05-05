import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto w-2/3">
      <nav className="flex items-center border-2 border-none h-10 mt-4 ">
        <div className=" border-2 border-violet-500 w-36 hover:bg-violet-100 h-8 rounded-md text-center text-sm text-slate-500 pt-1 ml-10">
          <Link href='/' > افتتاح حساب </Link>
        </div>
        <div className=" pl-5 text-violet-600 text-sm pb-1">
          <Link href='/'> ورود </Link>
        </div>
        <div className=" flex ml-auto text-xs p-5">
          <a href='/' className="p-2"> تماس با ما </a>
          <a href='/' className="p-2"> چرا ریکار </a>
          <a href='/' className="p-2"> درباره </a>
          <a href='/' className="p-2"> خانه </a>
        </div>
        <img src="IMG/rekar-logotype.svg" alt="" />
      </nav>
    </div>
  );
};

export default Home;Link