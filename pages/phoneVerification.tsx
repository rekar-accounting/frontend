import type { NextPage } from "next";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import translate from "../public/locales/fa.json";
import { ToastContainer, toast } from "react-toastify";

const PhoneVerificationPage: NextPage = () => {
  const [phoneVerification, setPhoneVerification] = useState("");

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

  const userNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneVerification(event.target.value);
  };

  const onLogin = (event: React.FormEvent) => {
    event.preventDefault();

    if (!phoneVerification) {
      notify(translate.phoneVerification.errorConfirmVerification);
      return;
    }
  };

  return (
    <div>
      <div className="invisible md:visible">
        <Image
          src="/login-artwork.png"
          layout="fill"
          objectFit="fill"
          quality={100}
          alt={translate.phoneVerification.alt}
          className="mx-auto scale-y-150 bg-white border-2 border-whitet blur-lg"
        />
      </div>
      <div className="sticky my-10 overflow-hidden bg-white md:w-3/4 md:mx-auto rounded-2xl ">
        <section className="flex flex-col-reverse items-center justify-between shadow-xl md:flex-row md:items-center">
          <div className="">
            <Image
              width={640}
              height={600}
              alt={translate.phoneVerification.alt}
              src="/assets/images/verification-artwork.png  "
            />
          </div>
          <div className="w-[55%] md:w-[48%] pb-40 p:pb-0 md:pt-8 ">
            <p className="mb-8 text-2xl font-bold text-center text-purple-700 login">
              {translate.phoneVerification.title}
            </p>

            <p className="text-base text-center ">
              {translate.phoneVerification.confirmVerification}
            </p>
            <form onSubmit={onLogin} className="mb-5 text-center">
              <div className="pr-5 pt-7">
                <div dir="rtl">
                  <input
                    type="text"
                    className="w-full md:w-[70%] my-6 text-base border-[3px] border-t-0 border-l-0 border-r-0 focus:outline-none login border-b-fuchsia-500 "
                    placeholder={translate.phoneVerification.authenticationCode}
                    onChange={userNameChangeHandler}
                  />
                </div>
                <div className="pt-5 pb-8 mt-10 text-center">
                  <button className="w-[68%]  py-4 bg-purple-700 text-white border-2 border-purple-700">
                    {translate.phoneVerification.login}
                  </button>
                  <ToastContainer />
                </div>
              </div>
            </form>
          </div>
        </section>
        <div className="w-full h-2 bg-gradient-to-r from-red-500 via-purple-500 to-pink-500"></div>
      </div>
    </div>
  );
};

export default PhoneVerificationPage;
