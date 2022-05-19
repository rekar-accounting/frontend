import { ChevronDownIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import { welcome as translate } from "../public/locales/fa.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Welcome = () => {
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

  const usernamechangehandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTestName(event.target.value);
  };

  const passwordchangehandler = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const companyNamechangehandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCompanyName(event.target.value);
  };

  const onLogin = (event: React.FormEvent) => {
    event.preventDefault();

    if (!testFirstName) {
      notify(translate.errorFirstName);
      return;
    }

    if (!lastName) {
      notify(translate.errorLastName);
      return;
    }

    if (!companyName) {
      notify(translate.errorNameCompany);
      return;
    }
  };

  return (
    <>
      <div className="invisible md:visible">
        <Image
          src="/login-artwork.png"
          layout="fill"
          objectFit="fill"
          quality={100}
          alt={translate.alt}
          className="mx-auto scale-y-150 bg-white border-2 border-whitet blur-lg"
        />
      </div>
      <div className="sticky my-20 overflow-hidden bg-white md:w-4/5 md:mx-auto rounded-2xl ">
        <section className="flex flex-col-reverse items-center justify-between shadow-xl md:flex-row md:items-center">
          <div className="">
            <Image
              width={640}
              height={660}
              alt={translate.alt}
              src="/login-artwork.png"
              className=""
            />
          </div>
          <div className="w-[55%] md:w-[48%] pb-32 p:pb-0 md:mt-8 ">
            <p className="mb-8 text-2xl font-bold text-center text-purple-700 login">
              {translate.welcome}
            </p>
            <p className="text-base text-center ">{translate.details}</p>
            <form onSubmit={onLogin} className="text-center ">
              <div className="pr-5 mt-10">
                <div dir="rtl">
                  <input
                    type="text"
                    className="w-full md:w-[70%] mb-6 text-base  border-[3px] border-t-0 border-l-0 border-r-0 focus:outline-none login border-b-fuchsia-500"
                    placeholder={translate.firstName}
                    onChange={usernamechangehandler}
                  />
                </div>
                <div dir="rtl">
                  <input
                    type="text"
                    className="w-full md:w-[70%] mb-6 text-base  border-[3px] border-t-0 border-l-0 border-r-0 focus:outline-none login border-b-fuchsia-500 "
                    placeholder={translate.lastName}
                    onChange={passwordchangehandler}
                  />
                </div>
                <div dir="rtl">
                  <input
                    type="text"
                    className="w-full md:w-[70%] mb-6 text-base  border-[3px] border-t-0 border-l-0 border-r-0 focus:outline-none login border-b-fuchsia-500 "
                    placeholder={translate.companyName}
                    onChange={companyNamechangehandler}
                  />
                </div>
                <div className="relative my-6">
                  <div dir="rtl" className="flex ">
                    <select className="w-full mx-auto md:w-[70%]  appearance-none  text-base  border-[3px] border-t-0 border-l-0 border-r-0 focus:outline-none login border-b-fuchsia-500  ">
                      <option value="">{translate.listCompanyFirst}</option>
                      <option value="">{translate.listCompanySecond}</option>
                      <option value="">{translate.listCompanyThird}</option>
                    </select>
                    <ChevronDownIcon className="absolute w-8 h-6 left-32 text-fuchsia-500" />
                  </div>
                </div>
                <div className="pt-5 pb-8 text-center">
                  <button className="w-[68%]  py-4  bg-purple-700 text-white border-2 border-purple-700">
                    {translate.login}
                  </button>
                  <ToastContainer />
                </div>
              </div>
            </form>
            <div dir="rtl" className="w-full mt-1 text-center md:mx-auto ">
              <p className="text-sm ">{translate.TextConfirmation}</p>
            </div>
          </div>
        </section>
        <div className="w-full h-2 bg-gradient-to-r from-red-500 via-purple-500 to-pink-500"></div>
      </div>
    </>
  );
};

export default Welcome;
