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

const HomePage: NextPage = () => {
  return (
    <div className=" mx-auto mb-20 mt-5 md:container md:w-2/3 lg:w-2/3 ">
      <nav className="flex items-center border border-none h-10 sm:w-screen md:container lg:container ">
        <div className=" border border-violet-500 w-36 hover:bg-violet-100 h-8 ml-6 rounded-md text-center text-xs text-slate-500 pt-2 md:ml-16">
          <Link href="/"> افتتاح حساب </Link>
        </div>
        <div className=" pl-5 text-violet-600 text-sm pb-1">
          <Link href="/"> ورود </Link>
        </div>
        <div className="flex text-xs md:justify-around lg:ml-auto lg:mr-10">
          <a href="/" className="p-1 sm:p-2">
            تماس با ما
          </a>
          <a href="/" className="p-1 sm:p-2">
            چرا ریکار
          </a>
          <a href="/" className="p-1 sm:p-2">
            درباره
          </a>
          <a href="/" className="p-1 sm:p-2">
            خانه
          </a>
        </div>
        <Image
          src="/assets/images/rekar-logotype.svg"
          alt="Picture of the author"
          width={80}
          height={50}
        />
      </nav>
      <div className=" mt-16 flex flex-wrap justify-center md:flex-nowrap lg:flex-nowrap lg:ml-10 ">
        <div className="border-2 border-none w-80 mr-7 text-center pt-14">
          <Image
            src="/assets/images/rekar-logo.svg"
            width={100}
            height={100}
            alt=""
          />
          <h1 className=" text-center font-bold text-purple-900 pt-4">
            {" "}
            دسترسی بینهایت به سیستم{" "}
          </h1>
          <p className="text-xs text-center text-slate-400">
            {" "}
            با افتتاح حساب در سیستم جامع حسابداری ریکار ، از هرجا و با استفاده
            از هر دیوایس میتوانید به راحتی وارد داشبورد حساب خود شده و به آسانی
            به تمامی داده ها دسترسی داشته باشی{" "}
          </p>
          <button className=" bg-violet-900 rounded-lg w-48 h-10 mt-6 text-white ">
            <Link href="/"> خرید حساب کاربری </Link>
          </button>
        </div>
        <div className="flex justify-end w-4/5 pt-10 pr-10">
          <Image
            src="/assets/images/bank-artwork.svg"
            width={500}
            height={400}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-16 md:flex-nowrap lg:justify-around mx-auto ">
        <Card
          Image="/assets/images/security-icon.svg"
          name=" امنیت "
          title=" سرورهای ریکار همواره با پشتیبان گیری و آپدیت های مداوم احتمال از دست رفتن اسناد را به صفر میرساند "
        />
        <Card
          Image="/assets/images/shuttle-icon.svg"
          name=" سرعت بالا "
          title=" سیستم ابری بدن نیاز به داشتن سیستم پیشرفته همواره از سرعت بالایی برخوردار است "
        />
        <Card
          Image="/assets/images/support-icon.svg"
          name=" پشتیبانی "
          title=" پشتیبانی سریع در 7 روز هفته 24 ساعته "
        />
      </div>
      <div>
        <div>
          <h1 className=" mt-16 text-center text-2xl font-bold pb-7 ">
            {" "}
            در باره ریکار{" "}
          </h1>
        </div>
        <div className=" mx-8 flex flex-wrap md:flex-nowrap ">
          <p className=" text-center text-sm text-slate-400 m-4 ">
            {" "}
            از جمله بخش های ریکار میتوان به سیستم حسابداری ِ انبار ِ فروشگاه
            و... اشاره کرد.در سیستم مبتنی بر وب کاربر بدن نیاز به نصب نرم افزار
            و تنها وارد شدن به داشبورد خود در هرجا و هر زمان با استفاده از هر
            دیوایسی می تواند به داده های خود دسترسی داشته باشد{" "}
          </p>
          <p className=" text-center text-sm m-4">
            {" "}
            ریکار یک سیستم حسابداری مبتنی بر وب هست که تمام داده های شرکت در
            سرورهای ریکار و در صورت نیاز به صورت لوکال روی سیستم مشتری نصب می
            ود. ریکار سعی دارد با تکیه بر دانش تیم نرم افزاری خود تمامی بخش های
            سیستم حسابداری را با ساده ترین راه حل های بصری پوشش داده و کار
            حسابداری را آسانتر نماید{" "}
          </p>
        </div>
      </div>
      <div className=" mt-8 ml-8">
        <Link href="/"> ... بیشتر </Link>
      </div>
      <div>
        <div className="mt-16 flex justify-center flex-wrap lg:flex-nowrap lg:justify-between">
          <div className=" mx-auto text-right lg:pt-14 lg:pl-14">
            <h1 className=" text-xl font-bold pt-14"> چرا ریکار؟ </h1>
            <h1 className=" text-4xl text-violet-800 font-bold pt-3">
              {" "}
              زیباترین <span className=" text-slate-700"> راه حل </span>{" "}
            </h1>
            <ul>
              <li className=" pt-6 text-sm">
                {" "}
                حذف پروسه نصب نرم افزار حسابداری{" "}
              </li>
              <li className=" pt-3 text-sm">
                {" "}
                دسترسی به سیستم از هرجا و در هر زمان{" "}
              </li>
              <li className=" pt-3 text-sm">
                {" "}
                طراحی کاربری فوق العاده مینیمال و کاربردی{" "}
              </li>
              <li className=" pt-3 text-sm"> پشتیبانی یک ساله </li>
            </ul>
          </div>
          <div className="mx-auto  lg:flex lg:justify-end">
            <Image
              src="/assets/images/people-artwork.svg"
              alt="people-artwork"
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
            placeholder=" ایمیل شما "
            required
            className=" text-right w-96 h-10 bg-slate-200 rounded-lg text-xs outline-none px-3 mx-auto"
          />
          <br />
          <input
            type="text"
            placeholder=" متن پیام "
            required
            className=" text-right w-96 h-32 bg-slate-200 mt-4 rounded-lg outline-none pb-24 px-3 text-xs mx-auto"
          />
          <br />
          <input
            type="submit"
            value=" ارسال "
            className=" border w-96 h-12 mt-4 rounded-lg bg-violet-900 text-white font-bold "
          />
        </form>
        <div className=" text-center pt-9 md:pl-10">
          <h1 className=" text-2xl font-bold sm:pl-4"> تماس با ما </h1>
          <p className=" text-slate-500 sm:pl-7">
            {" "}
            با استفاده از این فرم با ما در تماس باشید{" "}
          </p>
        </div>
      </div>
      <div className=" w-full my-16 bg-zinc-900 h-64 ">
        <footer className=" flex justify-around text-xs pt-16">
          <div className="col">
            <ul>
              <li className=" text-right text-white ">
                <a href="https://facebook.com"> فیسبوک </a>
                <br />
                <br />
                <a href="https://Twitter.com"> تویتر </a>
                <br />
                <br />
                <a href="https://Gmail.com">جی میل </a>
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
              <Link href="/"> لینک </Link>
              <br />
              <br />
              <Link href="/"> لینک </Link>
              <br />
              <br />
              <Link href="/"> لینک </Link>
              <br />
              <br />
              <Link href="/"> لینک </Link>
            </ul>
          </div>
          <div className="col ">
            <ul className=" text-right text-white pb-3">
              <Link href="/"> خانه </Link>
              <br />
              <br />
              <Link href="/"> درباره </Link>
              <br />
              <br />
              <Link href="/"> چرا ریکار </Link>
              <br />
              <br />
              <Link href="/"> تماس با ما </Link>
              <br />
              <br />
              <Link href="/"> ورود </Link>
              <br />
            </ul>
          </div>
          <div>
            <Image
              src="/assets/images/rekar-logo.svg"
              alt="rekar-logo"
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
              <Link href="/"> حریم خصوصی کاربری </Link>
              <> </>
            </div>
            <div className=" text-white text-xs pt-3">
              <Link href="/"> امنیت </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
