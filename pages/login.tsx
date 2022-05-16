import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import { login } from "../public/locales/fa.json";
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
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const onLogin = (event: React.FormEvent) => {
    event.preventDefault();

    if (!name) {
      notify(login.errorUserName);
      return;
    }

    if (!password) {
      notify(login.errorPassword);
      return;
    }

    if (password.length <= 6) {
      notify(login.errorPasswordLength);
      return;
    }
  };

  return (
    <>
      <div className="fixed mx-auto mt-12 blur-sm md:visible">
        <Image
          src="/login-artwork.png"
          height={580}
          width={1260}
          alt={login.alt}
          className="mx-auto scale-y-150 bg-white border-2 border-whitet "
        />
      </div>
      <div className="absolute mx-auto  max-w-[1050px] mt-24 overflow-hidden bg-white shadow-lg bottom-8 left-36 rounded-2xl ">
        <section className="flex flex-col-reverse ml-40 text-center  sm:w-[600px]  md:w-[1050px] md:mx-auto md:flex-row">
          <div className="w-[60%] md:[50%]">
            <Image
              width={500}
              height={520}
              alt={login.alt}
              src="/login-artwork.png"
              className=""
            />
          </div>
          <div className="w-[70%] md:w-[50%] pb-40 p:pb-0 md:pt-8">
            <p className="mb-8 text-2xl font-bold text-center text-purple-700 login">
              {login.welcome}
            </p>

            <p className="text-base text-center ">{login.details}</p>
            <form onSubmit={onLogin} className="text-center ">
              <div className="pr-5 pt-7">
                <div dir="rtl">
                  <input
                    type="text"
                    className="w-full md:w-[90%] mb-6 text-xs  border-2 border-t-0 border-l-0 border-r-0 focus:outline-none login border-b-fuchsia-500"
                    placeholder={login.userName}
                    onChange={usernamechangehandler}
                  />
                </div>
                <div dir="rtl">
                  <input
                    type="password"
                    className="w-full md:w-[90%] mb-6 text-xs  border-2 border-t-0 border-l-0 border-r-0 focus:outline-none login border-b-fuchsia-500"
                    placeholder={login.password}
                    onChange={passwordchangehandler}
                  />
                </div>
              </div>
              <div className="text-center pt-7">
                <button className="w-[68%] py-3 mr-5  text-purple-700 border-2 border-purple-700 ">
                  {login.login}
                </button>
                <ToastContainer />
              </div>
            </form>
            <div className="text-purple-700 mx-auto mt-12 text-[15px] text-center ">
              <a href="#" className="inline-block">
                {login.Register}
              </a>
              <p className="inline-block mx-1.5	">|</p>
              <a href="#" className="inline-block">
                {login.forgetPassword}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
