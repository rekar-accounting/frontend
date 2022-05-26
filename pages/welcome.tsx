import { NextPage } from "next";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import translate from "../public/locales/fa.json";
import { ToastContainer, toast } from "react-toastify";

const WelcomePage: NextPage = () => {
  const [testFirstName, setTestName] = useState<string | number>("");
  const [lastName, setLastName] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");

  const notify = (message: string) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  const userNameChangehandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTestName(event.target.value);
  };

  const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const companyNameChangehandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCompanyName(event.target.value);
  };

  const onLogin = (event: React.FormEvent) => {
    event.preventDefault();

    if (!testFirstName) {
      notify(translate.welcome.errorFirstName);
      return;
    }

    if (!lastName) {
      notify(translate.welcome.errorLastName);
      return;
    }

    if (!companyName) {
      notify(translate.welcome.errorNameCompany);
      return;
    }
  };

  return (
    <>
      <div className="invisible md:visible">
        <Image
          src="/assets/images/login-artwork.png"
          layout="fill"
          objectFit="fill"
          quality={100}
          alt={translate.welcome.alt}
          className="mx-auto scale-y-150 bg-white border-2 border-whitet blur-lg"
        />
      </div>
      <div className="sticky my-10 overflow-hidden bg-white md:w-3/4 md:mx-auto rounded-2xl ">
        <section className="flex flex-col-reverse items-center justify-between shadow-xl md:flex-row md:items-center">
          <div className="">
            <Image
              width={640}
              height={600}
              alt={translate.welcome.alt}
              src="/assets/images/login-artwork.png"
              className=""
            />
          </div>
          <div className="w-[55%] md:w-[60%] pt-5 pb-16 p:pb-0 md:mt-8 ">
            <p className="mb-8 text-2xl font-bold text-center text-purple-700 login">
              {translate.welcome.welcome}
            </p>
            <p className="text-base text-center ">
              {translate.welcome.details}
            </p>
            <form onSubmit={onLogin} className="text-center ">
              <div className="pr-5 mt-10">
                <div dir="rtl">
                  <input
                    type="text"
                    className="w-full md:w-[70%] mb-6 text-base  border-[3px] border-t-0 border-l-0 border-r-0 focus:outline-none login border-b-fuchsia-500"
                    placeholder={translate.welcome.firstName}
                    onChange={userNameChangehandler}
                  />
                </div>
                <div dir="rtl">
                  <input
                    type="text"
                    className="w-full md:w-[70%] mb-6 text-base  border-[3px] border-t-0 border-l-0 border-r-0 focus:outline-none login border-b-fuchsia-500 "
                    placeholder={translate.welcome.lastName}
                    onChange={passwordChangeHandler}
                  />
                </div>
                <div dir="rtl">
                  <input
                    type="text"
                    className="w-full md:w-[70%] mb-6 text-base  border-[3px] border-t-0 border-l-0 border-r-0 focus:outline-none login border-b-fuchsia-500 "
                    placeholder={translate.welcome.companyName}
                    onChange={companyNameChangehandler}
                  />
                </div>
                <div className="relative my-6">
                  <div dir="rtl" className="flex ">
                    <select className="w-full mx-auto md:w-[70%]  appearance-none  text-base  border-[3px] border-t-0 border-l-0 border-r-0 focus:outline-none login border-b-fuchsia-500  ">
                      <option value="">
                        {translate.welcome.listCompanyFirst}
                      </option>
                      <option value="">
                        {translate.welcome.listCompanySecond}
                      </option>
                      <option value="">
                        {translate.welcome.listCompanyThird}
                      </option>
                    </select>
                    <ChevronDownIcon className="absolute w-8 h-6 left-32 text-fuchsia-500" />
                  </div>
                </div>
                <div className="pt-5 pb-8 text-center">
                  <button className="w-[68%]  py-4  bg-purple-700 text-white border-2 border-purple-700">
                    {translate.welcome.login}
                  </button>
                  <ToastContainer />
                </div>
              </div>
            </form>
            <div dir="rtl" className="w-full mt-1 text-center md:mx-auto ">
              <p className="text-sm ">{translate.welcome.textConfirmation}</p>
            </div>
          </div>
        </section>
        <div className="w-full h-2 bg-gradient-to-r from-red-500 via-purple-500 to-pink-500"></div>
      </div>
    </>
  );
};

export default WelcomePage;
