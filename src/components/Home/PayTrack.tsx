import { Images } from "@/assets";
import { montserrat } from "@/font";
import Image from "next/image";
import React from "react";

const PayTrack = () => {
  return (
    <div className="bg-[#fff] flex flex-col lg:flex-row   gap-8 py-10 px-5 md:px-10 lg:px-16 xl:px-32">
      <div className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[65%] mx-auto lg:mx-0 h-full lg:h-[370px] flex flex-col lg:flex-row items-center justify-center gap-8 bg-[#4F35C8] rounded-[20px] p-8">
        <Image
          src={Images.pay}
          alt="Hero Image"
          width={1000}
          height={1000}
          quality={100}
          className="w-[300px] "
        />
        <div className="w-full lg:w-[50%] lg:text-start text-center flex flex-col gap-4">
          <h3 className={`text-[#FFFFFF] text-[28px] font-sf font-[700] ${montserrat.className}`}>
            Pay & Track
          </h3>
          <p className={`text-[#FFFFFF] font-instrumentSans font-[400] text-[17px] ${montserrat.className}`}>
            You&apos;ll get an instant notification and invoice. Once you pay,
            we ship and provide full tracking.
          </p>
        </div>
      </div>

      <div className=" w-[95%] sm:w-[90%] md:w-[80%] lg:w-[100%] mx-auto lg:mx-0 flex flex-col gap-6 lg:flex-1 bg-[#FFFCEA] rounded-[20px] p-8">
        <div className="size-[80px] flex items-center justify-center bg-[#D8DBF6] p-2 rounded-full">
          <Image
            src={Images.icon1}
            alt="Hero Image"
            width={1000}
            height={1000}
            quality={100}
            className="w-[30px]"
          />
        </div>

        <h3 className="text-[#141011] font-[700] font-sf text-[24px] sm:text-[26px] md:text-[30px]">
          Fast Delivery Across Africa
        </h3>
        <p
          className={`text-[#5E5D6F] font-[500] text-[15px] 2xl:text-[17px] ${montserrat.className}`}
        >
          We deliver to major cities in days, not weeks, handling customs on
          your behalf and last-mile logistics.
        </p>
      </div>
    </div>
  );
};

export default PayTrack;
