import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import Link from "next/link";
import ErrorModalHandler from "../components/errorModalHandelr";
import { useRouter } from "next/router";
import { loginPage } from "../public/locales/fa.json";
//import { en } from "../public/locales/en";

type propsList = {
  handleListCompany: () => void;
  handleLoginPage: () => void;
};

const LoginPage: React.FC<propsList> = (props) => {
  const [testName, setTestName] = useState<string | number>();
  const [testPassword, setTestPassword] = useState<string | number[]>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [check, setCheck] = useState<boolean>(false);

  let translate = loginPage;

  //////////////change Language

  //const { locale } = useRouter();
  //let router = useRouter();
  //const onChangeHandler = () => {
  // switch (locale) {
  //   case "fa":
  //   router.push("/", "/", { locale: "en-US" });
  //    break;
  //  case "en-US":
  //   router.push("/", "/", { locale: "fa" });
  //  break;
  // }
  // };

  const usernamechangehandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTestName(event.target.value);
  };

  const passwordchangehandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTestPassword(event.target.value);
  };

  const pageHandler = () => {
    props.handleLoginPage();
    console.log("hi ");
  };

  const onLogin = (event: React.FormEvent) => {
    event.preventDefault();

    if (!testName) {
      setCheck(true);
      setErrorMessage(translate.errorUserName);
      return;
    }

    if (!testPassword) {
      setCheck(true);
      setErrorMessage(translate.errorPassword);
      return;
    }

    if (testPassword.length <= 6) {
      setErrorMessage(translate.errorPasswordLength);
      return;
    }
    setCheck(false);

    if (testName != null && testPassword != null) {
      props.handleListCompany();
    }
  };

  return (
    <div>
      <div className="fixed mt-12 w-[1600px]  mx-auto blur-sm">
        <Image
          src="/login-artwork.png"
          height={580}
          width={1260}
          alt="loginImage"
          className="mx-auto scale-y-150 bg-white border-2 border-whitet "
        />
      </div>
      <div className="fixed  w-[1050px] mx-auto mt-24 overflow-hidden h-[547px] bg-white shadow-lg bottom-8 left-36 rounded-2xl ">
        <section className="grid grid-cols-2 px-2 pb-4 sm:grid-rows-1">
          <div className="">
            <Image
              width={500}
              height={520}
              alt="صفحه ورود"
              src="/login-artwork.png "
              className="object-cover w-full "
            />
          </div>
          <div className="w-full pt-10 pr-10 text-right bg-white ">
            <p className="mb-8 text-2xl font-bold text-center text-purple-700 login">
              {translate.welcome}
            </p>

            <p className="text-lg text-center ">{translate.details}</p>
            <form onSubmit={onLogin}>
              <div className="pr-5 pt-7">
                <div dir="rtl">
                  <input
                    type="text"
                    className="w-[400px] border-4 mb-6 font-semibold  text-lg focus:outline-none border-t-0 border-l-0 border-r-0 login border-b-fuchsia-500"
                    placeholder={translate.userName}
                    onChange={usernamechangehandler}
                  />
                </div>
                <div dir="rtl">
                  <input
                    type="password"
                    className="w-[400px] border-4 mb-6 font-semibold	text-lg focus:outline-none border-t-0 border-l-0 border-r-0 login border-b-fuchsia-500"
                    placeholder={translate.password}
                    onChange={passwordchangehandler}
                  />
                </div>
              </div>
              <div className="mt-16 mr-24">
                <button className="w-[72%] py-3 font-bold text-purple-700 border-2 border-purple-700 ">
                  {translate.login}
                </button>

                <button className="w-[72%] py-3 font-bold text-purple-700 border-2 border-purple-700 ">
                  {translate.loginTo}
                </button>
              </div>
            </form>
            <div>{check && <ErrorModalHandler title={errorMessage} />}</div>
            <div className="text-purple-700 mx-auto mt-8 text-[15px] text-center ">
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
    </div>
  );
};

export default LoginPage;
