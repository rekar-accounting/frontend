import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import { login as translate } from "../public/locales/fa.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [name, setName] = useState<string>();
  const [password, setPassword] = useState<string>("");

  const usernamechangehandler = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const passwordchangehandler = (event: ChangeEvent<HTMLInputElement>) => {
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
      notify(translate.errorUserName);
      return;
    }

    if (!password) {
      notify(translate.errorPassword);
      return;
    }

    if (password.length <= 6) {
      notify(translate.errorPasswordLength);
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
      <div className="sticky my-20 overflow-hidden bg-white md:w-4/5 md:mx-auto rounded-2xl">
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
          <div className="w-[55%] md:w-[48%] pb-40 p:pb-0 md:pt-8">
            <p className="mb-8 text-3xl font-bold text-center text-purple-700 login">
              {translate.welcome}
            </p>

            <p className="text-base text-center ">{translate.details}</p>
            <form onSubmit={onLogin} className="text-center ">
              <div className="pt-10 pr-5">
                <div dir="rtl">
                  <input
                    type="text"
                    className="w-full md:w-[70%]  mb-6 text-base  border-[3px] border-t-0 border-l-0 border-r-0 focus:outline-none login border-b-fuchsia-500"
                    placeholder={translate.userName}
                    onChange={usernamechangehandler}
                  />
                </div>
                <div dir="rtl">
                  <input
                    type="password"
                    className="w-full md:w-[70%]   mb-6 text-base border-[3px] border-t-0 border-l-0 border-r-0 focus:outline-none login border-b-fuchsia-500"
                    placeholder={translate.password}
                    onChange={passwordchangehandler}
                  />
                </div>
              </div>
              <div className="pt-10 text-center">
                <button className="w-[68%]  py-4 mr-5  bg-purple-700 text-white border-2 border-purple-700">
                  {translate.login}
                </button>
                <ToastContainer />
              </div>
            </form>
            <div className="text-purple-700 mx-auto mt-20 text-[15px] text-center ">
              <a href="#" className="inline-block">
                {translate.Register}
              </a>
              <p className="inline-block mx-1.5	">|</p>
              <a href="#" className="inline-block">
                {translate.forgetPassword}
              </a>
            </div>
          </div>
        </section>
        <div className="w-full h-2 bg-gradient-to-r from-red-500 via-purple-500 to-pink-500"></div>
      </div>
    </>
  );
};

export default Login;
