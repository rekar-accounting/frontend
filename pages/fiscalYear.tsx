import React, { useState } from "react";
import { NextPage } from "next";
import Image from "next/image";
import JCalendar from "reactjs-persian-calendar";
import { ChevronDownIcon } from "@heroicons/react/solid";
import translate from "../public/locales/fa.json";

const FiscalYear: NextPage = () => {
  const [changeDate, setChangeDate] = useState(false);
  const [changeDateEnd, setChangeDateEnd] = useState(false);
  const [date, setDate] = useState();
  const [dateEnd, setDateEnd] = useState();

  const chagneCalendarStart = () => {
    setChangeDate((curDate) => !curDate);
  };

  const chagneCalendarEnd = () => {
    setChangeDateEnd((curDate) => !curDate);
  };

  const calendarStart = (value: any) => {
    setDate(value);
  };

  const calendarEnd = (value: any) => {
    setDateEnd(value);
  };

  return (
    <div>
      <div className="w-full h-1.5 rounded-sm bg-gradient-to-r from-red-500 via-purple-500 to-pink-500"></div>
      <div className="absolute invisible mt-16 xl:visible right-4 top-72">
        <Image
          src="/assets/images/gear.png"
          alt={translate.fiscalYear.alt}
          width={300}
          height={350}
        />
      </div>
      <div className="absolute invisible pt-1 xl:visible mt-44">
        <Image
          src="/assets/images/last.png"
          alt={translate.fiscalYear.alt}
          width={440}
          height={400}
        />
      </div>
      <div className="container mx-auto text-center">
        <div className="mt-20 md:mt-36">
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
                className=" w-[40%] my-6 text-base border-[3px] border-t-0 border-l-0 border-r-0 focus:outline-none login border-b-fuchsia-500 text-black "
                placeholder={translate.fiscalYear.fiscalName}
              />
            </div>
            <div className="flex justify-center gap-6" dir="rtl">
              <div className="relative w-[19%]">
                <ChevronDownIcon className="absolute w-8 h-6 right-20 2xl:right-64 text-fuchsia-500" />
                <input
                  type="text"
                  className="w-[100%] appearance-none text-base border-[3px] border-t-0 border-l-0 border-r-0 focus:outline-none login border-b-fuchsia-500 text-black "
                  placeholder={translate.fiscalYear.dateStart}
                  onClick={chagneCalendarStart}
                  value={date}
                />
                {changeDate && (
                  <div className="w-[80%]">
                    <JCalendar
                      size={28}
                      key={"fa"}
                      locale={"fa"}
                      color={"#000066"}
                      onClick={calendarStart}
                    />
                    <button
                      className="w-full text-white bg-blue-900 border-2 border-blue-900 md:w-full"
                      onClick={chagneCalendarStart}
                    >
                      {translate.fiscalYear.Confirmation}
                    </button>
                  </div>
                )}
              </div>
              <div className="relative w-[19%]">
                <ChevronDownIcon className="absolute w-8 h-6 right-20 xl:right-64 text-fuchsia-500" />
                <input
                  className="w-[100%] appearance-none text-base border-[3px] border-t-0 border-l-0 border-r-0 focus:outline-none login border-b-fuchsia-500 text-black"
                  placeholder={translate.fiscalYear.dateEnd}
                  onClick={chagneCalendarEnd}
                  value={dateEnd}
                />
                {changeDateEnd && (
                  <div className="w-[80%]">
                    <JCalendar
                      size={28}
                      key={"fa"}
                      locale={"fa"}
                      color={"#000066"}
                      onClick={calendarEnd}
                    />
                    <button
                      className="w-full text-white bg-blue-900 border-2 border-blue-900 md:w-full"
                      onClick={chagneCalendarEnd}
                    >
                      {translate.fiscalYear.Confirmation}
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="pt-3 pb-8 mt-10 text-center ">
              <button className="w-3/12 py-4 text-purple-700 border-2 border-purple-700 ">
                {translate.fiscalYear.login}
              </button>
            </div>
          </form>
          <div>
            <p>{translate.fiscalYear.nextStup}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiscalYear;
