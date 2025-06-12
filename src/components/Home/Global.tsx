import { Images } from "@/assets";
import Image from "next/image";
import React from "react";

const Global = () => {
  return (
    <div className="relative w-full flex lg:flex-row flex-col-reverse items-center justify-between gap-20 bg-[#101010] px-5 sm:px-10 md:px-20 pt-14 pb-10 sm:pb-5 overflow-hidden">
      <div className="w-[100%] md:w-[80%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] flex flex-col items-center lg:items-start lg:text-start text-center gap-10 z-30">
        <h3 className="text-[#FFFFFF] text-[22px] sm:text-[26px] md:text-[30px] font-clashDisplay-bold ">
          The future of <span className="text-[#FED449]">Global</span> shoping
          Experience
        </h3>

        <p className="text-[#fff]">
          Sign Up and Get Your Free Shipping Address Now No more shipping
          stress. Just shop, and we&apos;ll handle the rest.
        </p>

        <div className="flex  items-start sm:items-center gap-5">
          <button className="bg-[#090909] text-[#fff] py-[10px] px-6  rounded-[20px] cursor-pointer hover:opacity-80 ">
            Start shipping
          </button>
          <button className="bg-transparent border border-[#FFFFFF] text-[#fff] py-2 px-6  rounded-[20px] cursor-pointer hover:opacity-80 ">
            Watch Demo
          </button>
        </div>
      </div>

      <Image
        src={Images.c}
        alt="Tumeni Global Support"
        width={1000}
        height={1000}
        quality={100}
        className="w-[100%] sm:w-[300px] xl:w-[350px] z-30"
      />

        {/* Background Image */}
      <div className="absolute inset-0 bg-abouthero bg-cover bg-center"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#5027FF]/70 to-[#151F15]/30"></div>
      
    </div>
  );
};

export default Global;
