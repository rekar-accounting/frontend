import { ChevronDownIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import ErrorModalHandler from "../components/ErrorModalHandler";
import { welcome as translate } from "../public/locales/fa.json";

type Props = {
  handleNextLoginPage: () => void;
};

const Welcome: React.FC<Props> = (props) => {
  const [testFirstName, setTestName] = useState<string | number>("");
  const [lastName, setLastName] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [companyAction, setCompanyAction] = useState<string>("");

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [check, setCheck] = useState<boolean>(false);

  const usernamechangehandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTestName(event.target.value);
  };

  const passwordchangehandler = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const companyNamechangehandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCompanyName(event.target.value);
  };

  const companyActionchangehandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCompanyAction(event.target.value);
  };

  const onLogin = (event: React.FormEvent) => {
    event.preventDefault();

    if (!testFirstName) {
      setCheck(true);
      setErrorMessage(translate.errorFirstName);
      return;
    }

    if (!lastName) {
      setCheck(true);
      setErrorMessage(translate.errorLastName);
      return;
    }

    if (!companyName) {
      setCheck(true);
      setErrorMessage(translate.errorNameCompany);
      return;
    }

    if (!companyAction) {
      setCheck(true);
      setErrorMessage(translate.errorCompanyActivity);
      return;
    }

    setCheck(false);
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
                    className="w-[400px] mb-6 font-semibold	  	 text-lg  focus:outline-none border-4 border-t-0 border-l-0 border-r-0 login border-b-fuchsia-500"
                    placeholder={translate.firstName}
                    onChange={usernamechangehandler}
                  />
                </div>
                <div dir="rtl">
                  <input
                    type="text"
                    className="w-[400px] border-4 mb-6 font-semibold		 text-lg focus:outline-none border-t-0 border-l-0 border-r-0 login border-b-fuchsia-500 "
                    placeholder={translate.lastName}
                    onChange={passwordchangehandler}
                  />
                </div>
                <div dir="rtl">
                  <input
                    type="text"
                    className="w-[400px] border-4 mb-6 font-semibold		 text-lg focus:outline-none border-t-0 border-l-0 border-r-0 login border-b-fuchsia-500 "
                    placeholder={translate.companyName}
                    onChange={companyNamechangehandler}
                  />
                </div>
                <div className="relative">
                  <div dir="rtl" className="flex">
                    <select className="w-[400px] border-4 mb-6 font-semibold appearance-none text-lg focus:outline-none border-t-0 border-l-0 border-r-0 login border-b-fuchsia-500  ">
                      <option value="">{translate["listCompany-first"]}</option>
                      <option value="">
                        {translate["listCompany-second"]}
                      </option>
                      <option value="">{translate["listCompany-third"]}</option>
                    </select>
                    <ChevronDownIcon className="absolute w-6 h-6 right-[370px] top-2 text-fuchsia-500" />
                  </div>
                </div>
                <div>{check && <ErrorModalHandler title={errorMessage} />}</div>
                <div className="mt-2 mr-12">
                  <button className="w-[72%] py-3 font-bold text-purple-700 border-2 border-purple-700 ">
                    {translate.login}
                  </button>
                </div>
              </div>
            </form>
            <div className="mx-auto mt-5 w-96">
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
