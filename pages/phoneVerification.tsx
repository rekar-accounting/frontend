import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import { phoneVerification as translate } from "../public/locales/fa.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PhoneVerification = () => {
  const [phoneVerification, setPhoneVerification] = useState("");

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
    setPhoneVerification(event.target.value);
  };

  const onLogin = (event: React.FormEvent) => {
    event.preventDefault();

    if (!phoneVerification) {
      notify(translate.errorConfirmVerification);
      return;
    }
  };

  return (
    <div>
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
              alt="صفحه ورود"
              src="/login-artwork.png "
              className="object-cover w-full "
            />
          </div>
          <div className="w-full pt-32 pr-10 text-right bg-white ">
            <p className="mb-3 text-2xl font-bold text-center text-purple-700 login">
              {translate.title}
            </p>

            <p className="text-base text-center ">
              {translate.confirmVerification}
            </p>
            <form onSubmit={onLogin}>
              <div className="pr-5 pt-7">
                <div dir="rtl">
                  <input
                    type="text"
                    className="w-[400px] border-2 mb-6 	text-xs focus:outline-none border-t-0 border-l-0 border-r-0 login border-b-fuchsia-500"
                    placeholder={translate.authenticationCode}
                    onChange={usernamechangehandler}
                  />
                </div>

                <div className="mt-2 mr-2">
                  <button className="w-[72%] py-3 mr-5  text-purple-700 border-2 border-purple-700 ">
                    {translate.login}
                  </button>
                  <ToastContainer />
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PhoneVerification;
