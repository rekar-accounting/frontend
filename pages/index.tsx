import type { NextPage } from "next";
import Link from "next/link";
import Card from "./Component/Card";
import Hazhar from './Component/Slider24'
import { ImFacebook } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImGoogle } from "react-icons/im";



const Home: NextPage = () => {
  return (
    <div className="container mx-auto w-2/3 mb-20 sm:w-screen md:w-2/3 lg:w-2/3 ">
      <nav className="flex items-center border-2 border-none h-10 mt-4 border-box sm:w-container md:w-full lg:w-container">
        <div className=" border border-violet-500 w-36 hover:bg-violet-100 h-8 rounded-md text-center text-xs text-slate-500 pt-2 ml-10 box-border">
          <Link href="/"> افتتاح حساب </Link>
        </div>
        <div className=" pl-5 text-violet-600 text-sm pb-1">
          <Link href="/"> ورود </Link>
        </div>
        <div className=" flex text-xs sm:justify-around md:justify-end lg:ml-auto">
          <a href="/" className="p-2">{" "}تماس با ما{" "}</a>
          <a href="/" className="p-2">{" "}چرا ریکار{" "}</a>
          <a href="/" className="p-2">{" "}درباره{" "}</a>
          <a href="/" className="p-2">{" "}خانه{" "}</a>
        </div>
        <img src="IMG/rekar-logotype.svg" alt="rekarlogotype" />
      </nav>
      <div className=" flex mt-16 ml-8">
        <div className="border-2 border-none w-80 mr-7 text-center sm:col ">
          <img className=" mx-auto pt-14" src="IMG/rekar-logo.svg" />
          <h1 className=" text-center font-bold text-purple-900 pt-4"> دسترسی بینهایت به سیستم </h1>
          <p className="text-xs text-center text-slate-400"> با افتتاح حساب در سیستم جامع حسابداری ریکار ، از هرجا و با استفاده از هر دیوایس میتوانید به راحتی وارد داشبورد حساب خود شده و به آسانی به تمامی داده ها دسترسی داشته باشی </p>
          <button className=" bg-violet-900 rounded-lg w-48 h-10 mt-6 text-white ">
            <Link href='/'> خرید حساب کاربری </Link>
          </button>
        </div>
        <div className=" sm:flex sm:pr-16 lg:mx-auto lg:ml-auto">
          <img className=" mx-auto ml-16" src="IMG/bank-artwork.svg"/>
        </div>
      </div>
      <div className="flex justify-around mt-16">
        <Card img="IMG/security-icon.svg" name=" امنیت " title=" سرورهای ریکار همواره با پشتیبان گیری و آپدیت های مداوم احتمال از دست رفتن اسناد را به صفر میرساند " />
        <Card img="IMG/shuttle-icon.svg" name=" سرعت بالا " title=" سیستم ابری بدن نیاز به داشتن سیستم پیشرفته همواره از سرعت بالایی برخوردار است " />
        <Card img="IMG/support-icon.svg" name=" پشتیبانی " title=" پشتیبانی سریع در 7 روز هفته 24 ساعته " />
      </div>
      <div>
        <h1 className=" mt-16 text-center text-xl font-bold "> در باره ریکار </h1>
      </div>
      <div className=" flex mx-8">
        <p className=" text-center text-sm text-slate-400 m-4 "> از جمله بخش های ریکار میتوان به سیستم حسابداری ِ انبار ِ فروشگاه و... اشاره کرد.در سیستم مبتنی بر وب کاربر بدن نیاز به نصب نرم افزار و تنها وارد شدن به داشبورد خود در هرجا و هر زمان با استفاده از هر دیوایسی می تواند به داده های خود دسترسی داشته باشد </p>
        <p className=" text-center text-sm m-4"> ریکار یک سیستم حسابداری مبتنی بر وب هست که تمام داده های شرکت در سرورهای ریکار و در صورت نیاز به صورت لوکال روی سیستم مشتری نصب می ود. ریکار سعی دارد با تکیه بر دانش تیم نرم افزاری خود تمامی بخش های سیستم حسابداری را با ساده ترین راه حل های بصری پوشش داده و کار حسابداری را آسانتر نماید </p>
      </div>
      <div className=" mt-8 ml-8">
        <Link href='/'> ... بیشتر </Link>
      </div>
      <div className=" flex mt-16">
        <div className=" mx-auto text-right">
          <h1 className=" text-xl font-bold"> چرا ریکار؟ </h1>
          <h1 className=" text-4xl text-violet-800 font-bold pt-3"> زیباترین <span className=" text-slate-700"> راه حل </span> </h1>
          <ul>
            <li className=" pt-6 text-sm"> حذف پروسه نصب نرم افزار حسابداری </li>
            <li className=" pt-3 text-sm"> دسترسی به سیستم از هرجا و در هر زمان </li>
            <li className=" pt-3 text-sm"> طراحی کاربری فوق العاده مینیمال و کاربردی </li>
            <li className=" pt-3 text-sm"> پشتیبانی یک ساله </li>
          </ul>
        </div>
        <div className=" mx-auto w-1/2 my-auto">
          <img src="IMG/people-artwork.svg" alt="" />
        </div>
      </div>
      <div>
        <Hazhar />
      </div>
      <div className=" flex">
        <form action="">
          <input type="email" placeholder=" ایمیل شما " required className=" text-right w-96 h-10 bg-slate-200 rounded-lg text-xs outline-none px-3 mx-auto" /><br />
          <input type="text" placeholder=" متن پیام " required className=" text-right w-96 h-32 bg-slate-200 mt-4 rounded-lg outline-none pb-24 px-3 text-xs mx-auto" /><br />
          <input type="submit" value=" ارسال "  className=" border w-96 h-12 mt-4 rounded-lg bg-violet-900 text-white font-bold " />
        </form>
        <div className=" text-center mx-auto">
          <h1 className=" text-2xl font-bold"> تماس با ما </h1>
          <p className=" text-slate-500"> با استفاده از فرم روبه رو با ما در تماس باشید </p>
        </div>
      </div>
      <div className=" w-full my-16 bg-zinc-900 h-64 ">
        <footer className=" flex justify-around text-xs pt-16">
          <div className="col">
            <ul>
              <li className=" text-right text-white "> 
                <a href='#' > فیسبوک </a><br /><br />
                <a href='#' > تویتر </a><br /><br />
                <a href='#' >جی میل </a><br /><br />
              </li>
            </ul>
          </div>
          <div>
            <ul className=" text-white">
              <li className=" pt-1"> <ImFacebook /> </li>
              <li className=" pt-5"> <ImGoogle/> </li>
              <li className=" pt-5"> <ImTwitter/> </li>
            </ul>
          </div>
          <div className="col ">
            <ul className=" text-right text-white">
              <Link href='/' > لینک </Link><br /><br />
              <Link href='/' > لینک </Link><br /><br />
              <Link href='/' > لینک </Link><br /><br />
              <Link href='/' > لینک </Link>
            </ul>
          </div>
          <div className="col ">
            <ul className=" text-right text-white pb-3">
              <Link href='/' > خانه </Link><br /><br />
              <Link href='/' >  درباره </Link><br /><br />
              <Link href='/' > چرا ریکار </Link><br /><br />
              <Link href='/' > تماس با ما </Link><br /><br />
              <Link href='/' > ورود </Link><br />
            </ul>
          </div>
          <div className="col">
            <img src="IMG/rekar-logo.svg" alt="" />
          </div>
        </footer>
        <div className=" border border-none bg-zinc-600 h-12">
          <div className=" flex justify-around col">
            <p className=" text-xs text-white pt-3 pl-9"> Copyright @ 2020 , Rekar </p>
            <div className=" text-white text-xs pt-3 pl-44">
              <Link href="/"> حریم خصوصی کاربری </Link><> </>
            </div>
            <div className=" text-white text-xs pt-3">
              <Link href='/' > امنیت </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;