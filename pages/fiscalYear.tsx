import { NextPage } from "next";
import Image from "next/image";
import translate from "../public/locales/fa.json";

const FiscalYear: NextPage = () => {
  return (
    <div>
      <div className="w-full h-2 bg-gradient-to-r from-red-500 via-purple-500 to-pink-500"></div>

      <div className="absolute mt-16 right-4 top-[490px]">
        <Image
          src="/assets/images/gear.png"
          alt={translate.fiscalYear.alt}
          width={300}
          height={350}
        />
      </div>

      <div className="absolute pt-10 mt-52">
        <Image
          src="/assets/images/last.png"
          alt={translate.fiscalYear.alt}
          width={400}
          height={350}
        />
      </div>
      <div className="mx-auto text-center">
        <div className="mt-60">
          <h3 className="text-purple-700">{translate.fiscalYear.fiscalYear}</h3>
        </div>
      </div>
    </div>
  );
};

export default FiscalYear;
