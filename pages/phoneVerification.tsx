import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import ErrorModalHandelr from "./ErrorModalHandelr";
import { phoneverification } from "../public/locales/fa.json";

const PhoneVerification = () => {
  const [testPhoneVerification, setTestPhoneVerification] = useState("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [check, setCheck] = useState<boolean>(false);

  const translate = phoneverification;

  const usernamechangehandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTestPhoneVerification(event.target.value);
  };

  const onLogin = (event: React.FormEvent) => {
    event.preventDefault();

    if (!testPhoneVerification) {
      setCheck(true);
      setErrorMessage(translate.errorConfirmVerification);
      return;
    }
    setCheck(false);
  };

  return (
    <React.Fragment>

      <div className="fixed mt-12 w-[1600px] mx-auto blur-sm">
        <Image
          src="/login-artwork.png"
          height={580}
          width={1260}
          alt="loginImage"
          className="mx-auto scale-y-150 bg-white border-2 border-whitet "
        />
      </div>
      <div className="absolute w-[1050px] mx-auto mt-24 overflow-hidden h-[547px]  bg-white shadow-lg bottom-8 left-36 rounded-2xl ">
        <section className="grid grid-cols-2 px-2 pb-4 sm:grid-rows-1">
          <div className="f">
            <Image
              width={500}
              height={520}
              alt="صفحه ورود"
              src="/login-artwork.png "
              className="object-cover w-full "
            />
          </div>
          <div className="w-full pt-32 pr-10 text-right bg-white ">
            <p className="mb-3 text-2xl font-bold text-center text-purple-700 login">
              {translate.title}
            </p>

            <p className="text-lg text-center ">
              {translate.confirmVerification}
            </p>
            <form onSubmit={onLogin}>
              <div className="pr-5 pt-7">
                <div dir="rtl">
                  <input
                    type="text"
                    className="w-[400px] mb-6  focus:outline-none border-4 border-t-0 border-l-0 border-r-0 login border-b-fuchsia-500"
                    placeholder={translate.authenticationCode}
                    onChange={usernamechangehandler}
                  />
                </div>

                <div className="mt-2 mr-12">
                  <button className="w-[72%] py-3  text-purple-700 border-2 border-purple-700 ">
                    {translate.login}
                  </button>
                </div>
                <div className="right-5">
                  {check && <ErrorModalHandelr title={errorMessage} />}
                </div>
              </div>
            </form>
          </div>
        </section>
        <div className="w-full h-2 bg-gradient-to-r from-red-500 via-purple-500 to-pink-500"></div>
      </div>
    </React.Fragment>
  );
};

export default PhoneVerification;
