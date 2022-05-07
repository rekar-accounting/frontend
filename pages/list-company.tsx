type propsLists = {
  handleLoginPage: () => void;
};

const ListCompany: React.FC<propsLists> = (props) => {
  return (
    <div className="fixed inset-0 z-50 bg-gray-600/40">
      <div
        dir="rtl"
        className="relative pt-6 mx-2 rounded-md shadow-xl top-48 h-72 left-[470px] w-[440px] bg-slate-100"
      >
        <div className="flex justify-between pb-5 ">
          <p className="mr-3 font-bold text-purple-500"> لیست شرکتها </p>
        </div>
        <div>
          <select className=" py-2.5   appearance-none rounded-lg  mb-5 w-[430px] mx-auto mt-3   bg-slate-100 border-[3px] border-purple-700">
            <option>(ثبت 2308)شرکت پاک تدبیر مکریان</option>
          </select>
        </div>
        <div>
          <select className="flex  py-2.5 appearance-none rounded-lg mb-5yarn w-[430px] mx-auto mt-2 bg-slate-100 border-[3px] border-purple-700">
            <option>سال مالی 1401</option>
          </select>
        </div>
        <div className="flex justify-between pb-2 pt-7">
          <button className="mb-3 mr-5 text-purple-500">انتخاب</button>
          <button
            onClick={props.handleLoginPage}
            className="mb-3 ml-5 text-black-500"
          >
            انصراف
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListCompany;
