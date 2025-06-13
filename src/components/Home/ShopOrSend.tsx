import { Images } from "@/assets";
import { montserrat } from "@/font";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const ShopOrSend = () => {
  return (
    <div className="bg-[#fff] flex flex-col lg:flex-row gap-8 py-10 px-5 md:px-10 lg:px-16 xl:px-32 overflow-hidden">
      <Fade
        direction="up"
        duration={1000}
        fraction={0.5}
        delay={200}
        triggerOnce
        className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[65%] lg:h-[370px]"
      >
        <div className=" mx-auto lg:mx-0 h-full  flex flex-col lg:flex-row items-center justify-center gap-8 bg-[#F6F1FE] rounded-[20px] p-8">
          <div className="w-full lg:w-[50%] lg:text-start text-center flex flex-col gap-4">
            <h3 className="text-[#141011] text-[28px] font-sf font-[700]">
              Shop or Send
            </h3>
            <p className="text-[#5E5D6F] font-instrumentSans font-[400] text-[17px]">
              Buy from your favorite U.S. stores, Amazon, Shein, Walmart, eBay,
              or send items directly to us
            </p>
          </div>

          <Image
            src={Images.h8}
            alt="Hero Image"
            width={1000}
            height={1000}
            quality={100}
            className="w-[300px] "
          />
        </div>
      </Fade>

      <Fade
        direction="up"
        duration={1000}
        fraction={0.5}
        delay={400}
        triggerOnce
        className=" w-[95%] sm:w-[90%] md:w-[80%] lg:w-[100%] lg:flex-1 "
      >
        <div className="h-full mx-auto lg:mx-0 flex flex-col gap-6  bg-[#F6F1FE] rounded-[20px] p-8">
          <div className="size-[80px] flex items-center justify-center bg-[#2D38A8]/10 p-2 rounded-full">
            <Image
              src={Images.shopify}
              alt="Hero Image"
              width={1000}
              height={1000}
              quality={100}
              className="w-[100px]"
            />
          </div>

          <h3 className="text-[#141011] font-[700] font-sf text-[24px] sm:text-[26px] md:text-[30px]">
            We Handle It All
          </h3>
          <p
            className={`text-[#5E5D6F] font-[500] text-[15px] 2xl:text-[17px] ${montserrat.className}`}
          >
            We receive your items, consolidate them, repack if needed, and
            prepare for secure shipping to Africa.
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default ShopOrSend;
