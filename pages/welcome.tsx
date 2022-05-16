import { ChevronDownIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import { welcome as translate } from "../public/locales/fa.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  handleNextLoginPage: () => void;
};

const Welcome: React.FC<Props> = (props) => {
  const [testFirstName, setTestName] = useState<string | number>("");
  const [lastName, setLastName] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");

  const notify = (message: string) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
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
      <div className="fixed mx-auto mt-12 blur-sm">
        <Image
          src="/login-artwork.png"
          height={580}
          width={1260}
          alt={translate.alt}
          className="mx-auto scale-y-150 bg-white border-2 border-whitet "
        />
      </div>
      <div className="absolute  mx-auto mt-24 overflow-hidden h-[547px] flex-row  bg-white shadow-lg bottom-8 left-36 rounded-2xl ">
        <section className="grid grid-cols-2 px-2 pb-4 sm:gird-cols-1 sm sm:grid-rows-1">
          <div className="">
            <Image
              width={500}
              height={520}
              alt=""
              src="/login-artwork.png "
              className="object-cover w-full "
            />
          </div>
          <div className="w-56 pt-10 pr-10 text-right bg-white sm:w-full ">
            <p className="mb-3 text-2xl font-bold text-center text-purple-700 login">
              {translate.welcome}
            </p>

            <p className="text-lg text-center ">{translate.details}</p>
            <form onSubmit={onLogin}>
              <div className="pr-5 pt-7">
                <div dir="rtl">
                  <input
                    type="text"
                    className="w-[400px] mb-6 text-xs focus:outline-none border-2 border-t-0 border-l-0 border-r-0 login border-b-fuchsia-500"
                    placeholder={translate.firstName}
                    onChange={usernamechangehandler}
                  />
                </div>
                <div dir="rtl">
                  <input
                    type="text"
                    className="w-[400px] border-2 mb-6 text-xs focus:outline-none border-t-0 border-l-0 border-r-0 login border-b-fuchsia-500 "
                    placeholder={translate.lastName}
                    onChange={passwordchangehandler}
                  />
                </div>
                <div dir="rtl">
                  <input
                    type="text"
                    className="w-[400px] border-2 mb-6  first-letter:text-xs focus:outline-none border-t-0 border-l-0 border-r-0 login border-b-fuchsia-500 "
                    placeholder={translate.companyName}
                    onChange={companyNamechangehandler}
                  />
                </div>
                <div className="relative">
                  <div dir="rtl" className="flex">
                    <select className="w-[400px] border-2 mb-6  appearance-none text-xs focus:outline-none border-t-0 border-l-0 border-r-0 login border-b-fuchsia-500  ">
                      <option value="">{translate.listCompanyFirst}</option>
                      <option value="">{translate.listCompanySecond}</option>
                      <option value="">{translate.listCompanyThird}</option>
                    </select>
                    <ChevronDownIcon className="absolute w-6 h-6 right-[370px] top-0 text-fuchsia-500" />
                  </div>
                </div>
                <div className="mt-2 mr-12">
                  <button className="w-[72%] py-3  text-purple-700 border-2 border-purple-700 ">
                    {translate.login}
                  </button>
                  <ToastContainer />
                </div>
              </div>
            </form>
            <div className="mx-auto mt-5 w-96">
              <p className="text-xs ">{translate.TextConfirmation}</p>
            </div>
          </div>
        </section>
        <div className="w-full h-2 bg-gradient-to-r from-red-500 via-purple-500 to-pink-500"></div>
      </div>
    </>
  );
};

export default Welcome;
