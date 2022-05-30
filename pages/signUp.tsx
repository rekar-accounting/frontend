import { NextPage } from "next";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import translate from "../public/locales/fa.json";
import { ToastContainer, toast } from "react-toastify";

const SignUp: NextPage = () => {
  const [userName, setUserName] = useState<string | number>("");
  const [password, setPassword] = useState<string>("");
  const [passwordRepet, setPasswordRepet] = useState<string>("");
  const [phoneNumber, setphoneNumber] = useState<string>("");

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
    setUserName(event.target.value);
  };

  const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const passwordRepetChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordRepet(event.target.value);
  };

  const phoneNumberHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setphoneNumber(event.target.value);
  };

  const onLogin = (event: React.FormEvent) => {
    event.preventDefault();

    if (!userName) {
      notify(translate.signUp.errorName);
      return;
    }

    if (!password) {
      notify(translate.signUp.errorPassword);
      return;
    }
    if (password.length <= 6) {
      notify(translate.login.errorPasswordLength);
      return;
    }

    if (!passwordRepet) {
      notify(translate.signUp.errorPassword);
      return;
    }
    if (passwordRepet.length <= 6) {
      notify(translate.login.errorPasswordLength);
      return;
    }

    if (!phoneNumber) {
      notify(translate.signUp.errorPhoneNumber);
      return;
    }
  };

  return (
    <>
      <div className="invisible md:visible">
        <Image
          src="/assets/images/verification-artwork.png"
          layout="fill"
          objectFit="fill"
          quality={100}
          alt={translate.signUp.alt}
          className="mx-auto scale-y-150 bg-white border-2 border-whitet blur-2xl"
        />
      </div>
      <div className="sticky my-10 overflow-hidden bg-white md:w-3/4 md:mx-auto rounded-2xl ">
        <section className="flex flex-col-reverse items-center justify-between shadow-xl md:flex-row md:items-center">
          <div className="">
            <Image
              width={640}
              height={600}
              alt={translate.signUp.alt}
              src="/assets/images/verification-artwork.png"
              className=""
            />
          </div>
          <div className="w-[55%] md:w-[60%] pt-5 pb-16 p:pb-0 md:mt-8 ">
            <p className="mb-8 text-2xl font-bold text-center text-purple-700 login">
              {translate.signUp.welcome}
            </p>
            <p className="text-base text-center ">{translate.signUp.details}</p>
            <form onSubmit={onLogin} className="text-center ">
              <div className="pr-5 mt-10">
                <div dir="rtl">
                  <input
                    type="text"
                    className="w-full md:w-[70%] mb-6 text-base  border-[3px] border-t-0 border-l-0 border-r-0 focus:outline-none login border-b-fuchsia-500"
                    placeholder={translate.signUp.userName}
                    onChange={userNameChangeHandler}
                  />
                </div>
                <div dir="rtl">
                  <input
                    type="text"
                    className="w-full md:w-[70%] mb-6 text-base  border-[3px] border-t-0 border-l-0 border-r-0 focus:outline-none login border-b-fuchsia-500 "
                    placeholder={translate.signUp.password}
                    onChange={passwordChangeHandler}
                  />
                </div>
                <div dir="rtl">
                  <input
                    type="text"
                    className="w-full md:w-[70%] mb-6 text-base  border-[3px] border-t-0 border-l-0 border-r-0 focus:outline-none login border-b-fuchsia-500 "
                    placeholder={translate.signUp.passwordRepet}
                    onChange={passwordRepetChangeHandler}
                  />
                </div>
                <div dir="rtl">
                  <input
                    type="text"
                    className="w-full md:w-[70%] mb-6 text-base  border-[3px] border-t-0 border-l-0 border-r-0 focus:outline-none login border-b-fuchsia-500 "
                    placeholder={translate.signUp.phoneNumber}
                    onChange={phoneNumberHandler}
                  />
                </div>

                <div className="pt-5 pb-8 text-center">
                  <button className="w-[68%]  py-4  bg-purple-700 text-white border-2 border-purple-700">
                    {translate.signUp.Register}
                  </button>
                  <ToastContainer />
                </div>
              </div>
            </form>
            <div
              dir="rtl"
              className="mt-1 text-center md:w-[490px] md:mx-auto "
            >
              <p className="text-sm ">{translate.signUp.textConfirmation}</p>
            </div>
          </div>
        </section>
        <div className="w-full h-2 bg-gradient-to-r from-red-500 via-purple-500 to-pink-500"></div>
      </div>
    </>
  );
};

export default SignUp;
