import { NextPage } from "next";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/solid";
import translate from "../public/locales/fa.json";

const FiscalYear: NextPage = () => {
  return (
    <div>
      <div className="w-full h-2 bg-gradient-to-r from-red-500 via-purple-500 to-pink-500"></div>

      <div className="absolute mt-16 right-4 top-[490px]">
        <Image
          src="/assets/images/gear.png"
          alt={translate.fiscalYear.alt}
          width={300}
          height={350}
        />
      </div>
      <div className="absolute pt-10 mt-52">
        <Image
          src="/assets/images/last.png"
          alt={translate.fiscalYear.alt}
          width={400}
          height={350}
        />
      </div>
      <div className="mx-auto text-center">
        <div className="mt-72">
          <div className="mb-6">
            <div className="mb-4">
              <h4 className="text-2xl text-purple-700 ">
                {translate.fiscalYear.fiscalYear}
              </h4>
            </div>
            <p>{translate.fiscalYear.descriptionNeeds}</p>
          </div>
          <form className="">
            <div dir="rtl" className="mb-5">
              <input
                type="text"
                className="w-[40%] my-6 text-base border-[3px] border-t-0 border-l-0 border-r-0 focus:outline-none login border-b-fuchsia-500 text-purple-400 "
                placeholder={translate.fiscalYear.fiscalName}
              />
            </div>
            <div className="relative flex justify-center " dir="rtl">
              <select className="w-[19%] ml-5  appearance-none  text-base  border-[3px] border-t-0 border-l-0 border-r-0 focus:outline-none login border-b-fuchsia-500 text-purple-400 ">
                <option>{translate.fiscalYear.dateStart}</option>
              </select>
              <ChevronDownIcon className="absolute w-8 h-6 ml-10 text-fuchsia-500" />
              <select className=" w-[19%]  appearance-none  text-base  border-[3px] border-t-0 border-l-0 border-r-0 focus:outline-none login border-b-fuchsia-500 text-purple-400 ">
                <option>{translate.fiscalYear.dateEnd}</option>
              </select>
              <ChevronDownIcon className="absolute w-8 h-6 left-[470px] text-fuchsia-500" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FiscalYear;
