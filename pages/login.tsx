import type { NextPage } from "next";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import translate from "../public/locales/fa.json";
import { ToastContainer, toast } from "react-toastify";

const LoginPage: NextPage = () => {
  const [name, setName] = useState<string>();
  const [password, setPassword] = useState<string>("");

  const userNamechangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

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

  const onLogin = (event: React.FormEvent) => {
    event.preventDefault();

    if (!name) {
      notify(translate.login.errorUserName);
      return;
    }

    if (!password) {
      notify(translate.login.errorPassword);
      return;
    }

    if (password.length <= 6) {
      notify(translate.login.errorPasswordLength);
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
          alt={translate.login.alt}
          className="mx-auto scale-y-150 bg-white border-2 border-whitet blur-lg"
        />
      </div>
      <div className="sticky my-10 overflow-hidden bg-white md:w-3/4 md:mx-auto rounded-2xl">
        <section className="flex flex-col-reverse items-center justify-between shadow-xl md:flex-row md:items-center">
          <div className="">
            <Image
              width={640}
              height={600}
              alt={translate.login.alt}
              src="/assets/images/login-artwork.png"
              className=""
            />
          </div>
          <div className="w-[55%] md:w-[55%] pb-40 p:pb-0 md:pt-8">
            <p className="mb-8 text-3xl font-bold text-center text-purple-700 login">
              {translate.login.welcome}
            </p>
            <p className="text-base text-center ">{translate.login.details}</p>
            <form onSubmit={onLogin} className="text-center ">
              <div className="pt-10 pr-5">
                <div dir="rtl">
                  <input
                    type="text"
                    className="w-full md:w-[70%]  mb-6 text-base  border-[3px] border-t-0 border-l-0 border-r-0 focus:outline-none login border-b-fuchsia-500"
                    placeholder={translate.login.userName}
                    onChange={userNamechangeHandler}
                  />
                </div>
                <div dir="rtl">
                  <input
                    type="password"
                    className="w-full md:w-[70%]   mb-6 text-base border-[3px] border-t-0 border-l-0 border-r-0 focus:outline-none login border-b-fuchsia-500"
                    placeholder={translate.login.password}
                    onChange={passwordChangeHandler}
                  />
                </div>
              </div>
              <div className="pt-10 text-center">
                <button className="w-[68%]  py-2 mr-5  bg-purple-700 text-white border-2 border-purple-700">
                  {translate.login.login}
                </button>
                <ToastContainer />
              </div>
            </form>
            <div className="text-purple-700 mx-auto mt-20 text-[15px] text-center ">
              <a href="#" className="inline-block">
                {translate.login.register}
              </a>
              <p className="inline-block mx-1.5	">|</p>
              <a href="#" className="inline-block">
                {translate.login.forgetPassword}
              </a>
            </div>
          </div>
        </section>
        <div className="w-full h-2 bg-gradient-to-r from-red-500 via-purple-500 to-pink-500"></div>
      </div>
    </>
  );
};

export default LoginPage;
