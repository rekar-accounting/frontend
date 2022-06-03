/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Card from "../components/Card";
import Slider from "../components/Slider";
import { ImFacebook } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImGoogle } from "react-icons/im";
import Image from "next/image";
import translate from "../public/locales/en.json";

const homePage: NextPage = () => {
  return (
    <div className=" mx-auto mb-20 mt-5 md:container md:w-2/3 lg:w-2/3 ">
      <nav className="flex items-center border border-none h-10 sm:w-screen md:container lg:container ">
        <div className=" border border-violet-500 w-36 hover:bg-violet-100 h-8 ml-6 rounded-md text-center text-xs text-slate-500 pt-2 md:ml-16">
          <Link href="/">{translate.home.openaccount}</Link>
        </div>
        <div className=" pl-5 text-violet-600 text-sm pb-1">
          <Link href="/">{translate.home.login}</Link>
        </div>
        <div className="flex text-xs md:justify-around lg:ml-auto lg:mr-10">
          <a href="/" className="p-1 sm:p-2">
            {translate.home.call}
          </a>
          <a href="/" className="p-1 sm:p-2">
            {translate.home.whyRekar1}
          </a>
          <a href="/" className="p-1 sm:p-2">
            {translate.home.about}
          </a>
          <a href="/" className="p-1 sm:p-2">
            {translate.home.house}
          </a>
        </div>
        <Image
          src="/assets/images/rekar-logotype.svg"
          alt={translate.home.logotype}
          width={80}
          height={50}
        />
      </nav>
      <div className=" mt-16 flex flex-wrap justify-center md:flex-nowrap lg:flex-nowrap lg:ml-10 ">
        <div className="border-2 border-none w-80 mr-7 text-center pt-14">
          <Image
            src="/assets/images/rekar-logo.svg"
            alt={translate.home.rekarlogo}
            width={100}
            height={100}
          />
          <h1 className=" text-center font-bold text-purple-900 pt-4">
            {translate.home.SystemAccess}
          </h1>
          <p className="text-xs text-center text-slate-400">
            {translate.home.access}
          </p>
          <button className=" bg-violet-900 rounded-lg w-48 h-10 mt-6 text-white ">
            <Link href="/">{translate.home.BuyAccount}</Link>
          </button>
        </div>
        <div className="flex justify-end w-4/5 pt-10 pr-10">
          <Image
            src="/assets/images/bank-artwork.svg"
            alt={translate.home.artwork}
            width={500}
            height={400}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-16 md:flex-nowrap lg:justify-around mx-auto ">
        <Card
          Image="/assets/images/security-icon.svg"
          name={translate.home.Security}
          title={translate.home.title1}
        />
        <Card
          Image="/assets/images/shuttle-icon.svg"
          name={translate.home.speed}
          title={translate.home.title2}
        />
        <Card
          Image="/assets/images/support-icon.svg"
          name={translate.home.Support}
          title={translate.home.title3}
        />
      </div>
      <div>
        <div>
          <h1 className=" mt-16 text-center text-2xl font-bold pb-7 ">
            {translate.home.aboutRekar1}
          </h1>
        </div>
        <div className=" mx-8 flex flex-wrap md:flex-nowrap ">
          <p className=" text-center text-sm text-slate-400 m-4 ">
            {translate.home.aboutRekar2}
          </p>
          <p className=" text-center text-sm m-4">
            {translate.home.aboutRekar3}
          </p>
        </div>
      </div>
      <div className=" mt-8 ml-8">
        <Link href="/">{translate.home.More}</Link>
      </div>
      <div>
        <div className="mt-16 flex justify-center flex-wrap lg:flex-nowrap lg:justify-between">
          <div className=" mx-auto text-right lg:pt-14 lg:pl-14">
            <h1 className=" text-xl font-bold pt-14">
              {translate.home.whyRekar2}
            </h1>
            <h1 className=" text-4xl text-violet-800 font-bold pt-3">
              {translate.home.thePrettiest}{" "}
              <span className=" text-slate-700">{translate.home.solution}</span>
            </h1>
            <ul>
              <li className=" pt-6 text-sm">{translate.home.delete}</li>
              <li className=" pt-3 text-sm">
                {translate.home.AccessApplication}
              </li>
              <li className=" pt-3 text-sm">{translate.home.Designing}</li>
              <li className=" pt-3 text-sm">{translate.home.Support1}</li>
            </ul>
          </div>
          <div className="mx-auto  lg:flex lg:justify-end">
            <Image
              src="/assets/images/people-artwork.svg"
              alt={translate.home.peopleartwork}
              width={600}
              height={500}
            />
          </div>
        </div>
      </div>
      <div>
        <Slider />
      </div>
      <div className=" flex flex-wrap justify-center md:flex-nowrap ">
        <form action="">
          <input
            type="email"
            placeholder={translate.home.email}
            required
            className=" text-right w-96 h-10 bg-slate-200 rounded-lg text-xs outline-none px-3 mx-auto"
          />
          <br />
          <input
            type="text"
            placeholder={translate.home.massageText}
            required
            className=" text-right w-96 h-32 bg-slate-200 mt-4 rounded-lg outline-none pb-24 px-3 text-xs mx-auto"
          />
          <br />
          <input
            type="submit"
            value={translate.home.send}
            className=" border w-96 h-12 mt-4 rounded-lg bg-violet-900 text-white font-bold "
          />
        </form>
        <div className=" text-center pt-9 md:pl-10">
          <h1 className=" text-2xl font-bold sm:pl-4">
            {translate.home.contactUs}
          </h1>
          <p className=" text-slate-500 sm:pl-7">{translate.home.callform}</p>
        </div>
      </div>
      <div className=" w-full my-16 bg-zinc-900 h-64 ">
        <footer className=" flex justify-around text-xs pt-16">
          <div className="col">
            <ul>
              <li className=" text-right text-white ">
                <a href="https://facebook.com">{translate.home.facebook}</a>
                <br />
                <br />
                <a href="https://Twitter.com">{translate.home.twitter}</a>
                <br />
                <br />
                <a href="https://Gmail.com">{translate.home.gmail}</a>
                <br />
                <br />
              </li>
            </ul>
          </div>
          <div>
            <ul className=" text-white">
              <li className=" pt-1">
                {" "}
                <ImFacebook />{" "}
              </li>
              <li className=" pt-5">
                {" "}
                <ImGoogle />{" "}
              </li>
              <li className=" pt-5">
                {" "}
                <ImTwitter />{" "}
              </li>
            </ul>
          </div>
          <div className="col ">
            <ul className=" text-right text-white">
              <Link href="/">{translate.home.link}</Link>
              <br />
              <br />
              <Link href="/">{translate.home.link}</Link>
              <br />
              <br />
              <Link href="/">{translate.home.link}</Link>
              <br />
              <br />
              <Link href="/">{translate.home.link}</Link>
            </ul>
          </div>
          <div className="col ">
            <ul className=" text-right text-white pb-3">
              <Link href="/">{translate.home.house}</Link>
              <br />
              <br />
              <Link href="/">{translate.home.about}</Link>
              <br />
              <br />
              <Link href="/">{translate.home.whyRekar1}</Link>
              <br />
              <br />
              <Link href="/">{translate.home.call}</Link>
              <br />
              <br />
              <Link href="/">{translate.home.login}</Link>
              <br />
            </ul>
          </div>
          <div>
            <Image
              src="/assets/images/rekar-logo.svg"
              alt={translate.home.rekarlogo}
              width={110}
              height={150}
            />
          </div>
        </footer>
        <div className=" border border-none bg-zinc-600 h-12">
          <div className=" flex justify-around col">
            <p className=" text-xs text-white pt-3 pl-9">
              {" "}
              Copyright @ 2020 , Rekar{" "}
            </p>
            <div className=" text-white text-xs pt-3 pl-44">
              <Link href="/">{translate.home.privacy}</Link>
              <> </>
            </div>
            <div className=" text-white text-xs pt-3">
              <Link href="/">{translate.home.Security}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default homePage;
