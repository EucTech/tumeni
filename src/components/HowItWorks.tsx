import { Images } from "@/assets";
import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";

const HowItWorks = () => {
  return (
    <div className="w-full bg-[#F6F5FE] py-20 px-5 sm:px-10 lg:px-20 font-sf">
      <div className="w-full flex flex-col xl:flex-row  items-center xl:items-start justify-between gap-5">
        <div className="flex flex-col gap-3 items-center lg:items-start">
          <h3 className="text-[#000000] font-[700] text-[28px] sm:text-[30px] md:text-[40px] font-clashDisplay-bold">
            See what you can Ship
          </h3>
          <p className="text-[#5027FF] font-[700] text-[30px] underline font-sf">
            See how it works
          </p>
        </div>

        <div className="w-[100%] sm:w-[90%] md:w-[80%] lg:w-[35em] 2xl:w-[40em] rounded-[10px] lg:mx-0 bg-[#FFFFFF] flex sm:flex-row flex-col items-center gap-6 py-12 px-5 sm:px-10 sm:py-10">
          <div className="flex flex-col items-start gap-3">
            <span className="bg-[#343839] rounded-[20px] text-[#FFFFFF] flex items-center gap-2 py-[2px] px-4 ">
              <GoDotFill />
              <p>Get address</p>
            </span>
            <h3 className="text-[#343839] text-[24px] sm:text-[30px] font-[700]">
              Get Your Free Global Address
            </h3>
            <p className="text-justify text-[12px] font-inter">
              Sign up and receive a U.S., warehouse address to use when shopping
              online.
            </p>
          </div>

          <Image
            src={Images.how1}
            alt="How it works image"
            width={1000}
            height={1000}
            quality={100}
            className="w-[80%] sm:w-[200px]"
          />
        </div>
      </div>

      {/* second section */}
      <div className="flex items-center justify-between flex-col xl:flex-row gap-5 mt-10">
        <div className="w-[100%] sm:w-[90%] md:w-[80%] lg:w-[35em] 2xl:w-[40em] rounded-[10px] lg:mx-0 bg-[#5027FF] flex sm:flex-row flex-col items-center gap-6 py-12 px-5 sm:px-10 sm:py-10">
          <div className="flex flex-col items-start gap-3">
            <span className="bg-[#FFFFFF]/10 rounded-[20px] text-[#FFFFFF] flex items-center gap-2 py-[2px] px-4 ">
              <GoDotFill />
              <p>Using the app</p>
            </span>
            <h3 className="text-[#FFFFFF] text-[24px] sm:text-[30px] font-[700]">
              Set for Delivery
            </h3>
            <p className="text-justify text-[12px] font-inter text-[#FFFFFF]">
              Use your new address at checkout on Amazon, Shein, eBay, Temu, and
              more.
            </p>
          </div>

          <Image
            src={Images.how1}
            alt="How it works image"
            width={1000}
            height={1000}
            quality={100}
            className="w-[80%] sm:w-[200px]"
          />
        </div>

        <div className="w-[100%] sm:w-[90%] md:w-[80%] lg:w-[35em] 2xl:w-[40em] rounded-[10px] lg:mx-0 bg-[#FFFFFF] flex sm:flex-row flex-col items-center gap-6 py-12 px-5 sm:px-10 sm:py-10">
          <div className="flex flex-col items-start gap-3">
            <span className="bg-[#343839] rounded-[20px] text-[#FFFFFF] flex items-center gap-2 py-[2px] px-4 ">
              <GoDotFill />
              <p>Using the app</p>
            </span>
            <h3 className="text-[#343839] text-[24px] sm:text-[30px] font-[700]">
              We Receive & Consolidte
            </h3>
            <p className="text-justify text-[12px] font-inter">
              We&apos;ll notify you once your items arrive at our warehouse. You can
              combine multiple items into one shipment to save money. Pay for
              shipping and relax — we&apos;ll deliver your package to Lilongwe,
              Blantyre, Zomba, Mzuzu, and more.
            </p>
          </div>

          <Image
            src={Images.how1}
            alt="How it works image"
            width={1000}
            height={1000}
            quality={100}
            className="w-[80%] sm:w-[200px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
