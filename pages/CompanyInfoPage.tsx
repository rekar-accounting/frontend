import Link from "next/link";
import Image from "next/image";
import type { NextPage } from "next";
import { useState } from "react";

const Company: NextPage = () => {
  const [count, setcount] = useState("هنوز هیچ فایلی انتخاب نشده");
  const file = () => {
    setcount("یک فایل انتخاب شد");
  };

  return (
    <div>
      <div className=" absolute mt-96 pt-20 md:ml-20 lg:ml-56  ">
        <Image
          src="/assets/images/gear.png"
          alt="image gear"
          width={160}
          height={250}
        />
      </div>
      <div className=" absolute mt-0 right-56 sm:right-0 sm:mt-0 md:mt-64 md:right-1 lg:right-32 xl:right-56 ">
        <Image
          src="/assets/images/operators.png"
          alt="image operators"
          width={170}
          height={300}
        />
      </div>
      <div className=" mx-auto md:container lg:container lg:w-2/3 xl:container xl:w-2/4 mb-10">
        <div className=" bg-gradient-to-r from-red-600 via-blue-600 to-yellow-300 h-1 rounded-lg mt-1 "></div>
        <div className=" mt-36">
          <h1 className=" text-center text-xl text-violet-800 ">
            {" "}
            راه اندازی سریع{" "}
          </h1>
          <h1 className=" text-center pt-2"> !مشخصات شرکت را وارد کنید </h1>
        </div>
        <form className="mt-4 mx-auto sm:p-4 md:w-4/5 lg:w-3/4 lg:p-3 lg:mx-auto">
          <div className="flex">
            <select className="border-b-4 border-violet-400 hover:border-violet-800 w-56 md:w-56 lg:w-60 mx-auto focus:outline-none text-slate-500">
              <option className=" text-right"> نوع شرکت </option>
              <option>..........</option>
              <option>...............</option>
            </select>
            <input
              type="text"
              placeholder=" نام شرکت "
              className="text-right pr-4 border-b-4 border-violet-400 hover:border-violet-800 focus:outline-none mx-auto w-56 md:w-56 lg:w-60"
            />
          </div>
          <div className="flex mt-5 ">
            <input
              type="tel"
              placeholder=" شماره تماس"
              className="text-right pr-4 border-b-4 border-violet-400 hover:border-violet-800 focus:outline-none mx-auto w-56 md:w-56 lg:w-60 "
            />
            <input
              type="tel"
              placeholder=" فکس "
              className="text-right pr-4 border-b-4 border-violet-400 hover:border-violet-800 focus:outline-none mx-auto w-56 md:w-56 lg:w-60 "
            />
          </div>
          <div className="flex mt-5">
            <input
              type="number"
              placeholder=" شناسه اقتصادی "
              className="text-right border-b-4 pl-2 border-violet-400 hover:border-violet-800 focus:outline-none mx-auto w-56 md:w-56 lg:w-60 "
            />
            <input
              type="number"
              placeholder=" شماره ثبت شرکت "
              className="text-right border-b-4 pl-10 border-violet-400 hover:border-violet-800 focus:outline-none mx-auto w-56 md:w-56 lg:w-60  "
            />
          </div>
          <div>
            <p className=" mt-4 text-center">
              {" "}
              ( svg | jpg | png فرمت های پشتیبانی شده ) بارگذاری لوگو شرکت{" "}
            </p>
          </div>
          <div className="flex mx-auto sm:ml-12 sm:mx-auto md:mx-auto md:flex lg:ml-6 mt-5">
            <input
              type="file"
              onChange={file}
              className=" text-sm text-gray-500 file:mr-4 file:py-2 w-96 file:border-0 file:text-sm file:bg-violet-800 file:text-white focus:outline-none pl-3 md:w-96 lg:w-96 lg:pl-12"
            />
            <div className=" sm:m-0 md:ml-10 lg:ml-14">
              <h1 className="text-right text-gray-400 text-sm border-b-4 pl-10 border-violet-400 hover:border-violet-800 focus:outline-none mr-3 mx-auto w-56 md:w-56 lg:w-60 xl:mr-6 ">
                {" "}
                {count}{" "}
              </h1>
            </div>
          </div>
          <div className=" mt-4">
            <input
              type="text"
              placeholder=" آدرس "
              className=" text-right px-4 w-full border-b-4 lg:w-px-700 border-violet-400 hover:border-violet-800 pr-4 pb-10 focus:outline-none"
            />
          </div>
          <div className=" mt-4 text-center pt-3 mx-auto border-2 border-violet-400 text-violet-500 hover:bg-violet-300 hover:text-black w-80 h-12">
            <Link href="//"> بعدی </Link>
          </div>
          <p className=" pt-4 text-violet-500 text-center">
            {" "}
            بیخیال ....{" "}
            <span className="text-black">
              {" "}
              بعدا این هارو پر میکنم. برو به داشبورد{" "}
            </span>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Company;
