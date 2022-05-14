import { listCompany as translate } from "../public/locales/fa.json";

type propsList = {
  handleLoginPage: () => void;
};

const ListCompany: React.FC<propsList> = (props) => {
  return (
    <div className="fixed inset-0 z-50 bg-gray-600/40">
      <div
        dir="rtl"
        className="relative overflow-hidden pt-6 mx-2 rounded-md shadow-xl top-48 h-72 left-[470px] w-[440px] bg-slate-100"
      >
        <div className="flex justify-between pb-5 ">
          <p className="mr-3 font-bold text-purple-500">
            {translate.listCompanys}
          </p>
        </div>
        <div>
          <select className=" py-2.5 appearance-none rounded-lg  mb-5 w-[410px] mx-auto mt-3 mr-3   bg-slate-100 border-[3px] border-purple-700">
            <option>{translate.companys}</option>
          </select>
        </div>
        <div>
          <select className=" py-2.5 appearance-none rounded-lg  font-BNazanin mb-5 w-[410px] mx-auto mt-3 mr-3 bg-slate-100 border-[3px] border-purple-700">
            <option>{translate.fiscalYear}</option>
          </select>
        </div>
        <div className="flex justify-between pb-2 pt-7">
          <button className="mb-3 mr-5 font-bold text-purple-500">
            {translate.select}
          </button>
          <button
            onClick={props.handleLoginPage}
            className="mb-3 ml-5 font-bold text-black-500"
          >
            {translate.cancle}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListCompany;
