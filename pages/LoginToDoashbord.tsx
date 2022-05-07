import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import ErrorModalHandelr from "./ErrorModalHandelr";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { loginToDashbord } from "../public/locales/fa.json";

type propsList = {
  handleNextLoginPage: () => void;
};

const LoginToDoashbord: React.FC<propsList> = (props) => {
  const [testFirstName, setTestName] = useState<string | number>("");
  const [testLastName, setTestLastName] = useState<string | number>("");
  const [testCompanyName, setTestCompanyName] = useState<string | number>("");
  const [testCompanyAction, setTestCompanyAction] = useState<string | number>(
    ""
  );

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [check, setCheck] = useState<boolean>(false);

  let translate = loginToDashbord;

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
    setTestLastName(event.target.value);
  };

  const companyNamechangehandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTestCompanyName(event.target.value);
  };

  const companyActionchangehandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTestCompanyAction(event.target.value);
  };

  const onLogin = (event: React.FormEvent) => {
    event.preventDefault();

    if (!testFirstName) {
      setCheck(true);
      setErrorMessage(translate.errorFirstName);
      return;
    }

    if (!testLastName) {
      setCheck(true);
      setErrorMessage(translate.errorLastName);
      return;
    }

    if (!testCompanyName) {
      setCheck(true);
      setErrorMessage(translate.errorNameCompany);
      return;
    }

    if (!testCompanyAction) {
      setCheck(true);
      setErrorMessage(translate.errorCompanyActivity);
      return;
    }

    setCheck(false);

    //if (testName != null && testPassword != null) {
    //props.handleListCompany();
    //}
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
            <p className="mb-3 text-2xl font-bold text-center text-purple-700 login">
              {translate.welcome}
            </p>

            <p className="text-lg text-center ">{translate.details}</p>
            <form onSubmit={onLogin}>
              <div className="pr-5 pt-7">
                <div dir="rtl">
                  <input
                    type="text"
                    className="w-[400px] mb-6  focus:outline-none border-4 border-t-0 border-l-0 border-r-0 login border-b-fuchsia-500"
                    placeholder={translate.firstName}
                    onChange={usernamechangehandler}
                  />
                </div>
                <div dir="rtl">
                  <input
                    type="password"
                    className="w-[400px] border-4 mb-6 focus:outline-none border-t-0 border-l-0 border-r-0 login border-b-fuchsia-500 "
                    placeholder={translate.lastName}
                    onChange={passwordchangehandler}
                  />
                </div>
                <div dir="rtl">
                  <input
                    type="password"
                    className="w-[400px] border-4 mb-6 focus:outline-none border-t-0 border-l-0 border-r-0 login border-b-fuchsia-500 "
                    placeholder={translate.companyName}
                    onChange={companyNamechangehandler}
                  />
                </div>
                <div className="relative">
                  <div dir="rtl">
                    <input
                      type="password"
                      className="w-[400px] border-4 mb-6 focus:outline-none border-t-0 border-l-0 border-r-0 login border-b-fuchsia-500 "
                      placeholder={translate.CompanyActivity}
                      onChange={companyActionchangehandler}
                    />
                  </div>
                  <ChevronDownIcon className="absolute top-0 w-6 h-7 left-16 text-fuchsia-400" />
                </div>
                <div>{check && <ErrorModalHandelr title={errorMessage} />}</div>
                <div className="mt-2 mr-12">
                  <button className="w-[72%] py-3  text-purple-700 border-2 border-purple-700 ">
                    {translate.login}
                  </button>
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
    </React.Fragment>
  );
};

export default LoginToDoashbord;
