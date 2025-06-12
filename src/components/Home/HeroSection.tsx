import { Images } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className=" relative w-full min-h-[34em] flex flex-col items-center text-center justify-center gap-10 bg-[#F6F5FE] py-10 px-5 sm:px-10 md:px-20 lg:px-40 ">
      <h1 className="w-[90%] md:w-[80%] font-clashDisplay-semibold font-[600] text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-[#000000] leading-[1.2]">
        From Cart to Home We Bring Africa Closer
      </h1>
      <p className="w-[90%] md:w-[80%] xl:w-[60%] font-sf font-[400] text-[#343839] text-[16px] md:text-[18px] ">
        Whether you&apos;re shopping online, sending gifts to loved ones, or
        restocking your business back home; Tumeni delivers your packages from
        the U.S. to Africa fast, affordably, and reliably.
      </p>

      <div className="flex items-center justify-center flex-col md:flex-row gap-4">
        <Link href="#">
          <button className="flex items-center text-[15px] font-[600] cursor-pointer bg-[#5236CE] text-white hover:bg-[#5236CE]/60 transition-colors duration-300 px-8 py-[10px] gap-2 rounded-3xl">
            Ship Now
          </button>
        </Link>

        <Link href="#">
          <button className="flex items-center text-[15px] font-[600] cursor-pointer border border-[#5236CE] text-[#5236CE] hover:bg-[#5236CE] hover:text-white transition-colors duration-300 px-8 py-[10px] gap-2 rounded-3xl">
            Watch how it works
          </button>
        </Link>
      </div>

      <Image
      src={Images.h1}
      alt="Hero Image"
      width={500}
      height={500}
      quality={100}
      className="w-10 md:w-20 left-5 md:left-16 top-10 md:top-20 absolute"
      />

      <Image
      src={Images.h4}
      alt="Hero Image"
      width={500}
      height={500}
      quality={100}
      className="w-20 md:w-40 left-1 md:left-7 top-40 absolute"
      />

      <Image
      src={Images.h3}
      alt="Hero Image"
      width={500}
      height={500}
      quality={100}
      className="w-10 md:w-20 left-5 md:left-16 bottom-44 absolute"
      />

      <Image
      src={Images.h2}
      alt="Hero Image"
      width={500}
      height={500}
      quality={100}
      className="w-10 md:w-20 right-5 md:right-12 top-10 md:top-20 absolute"
      />
      <Image
      src={Images.h1}
      alt="Hero Image"
      width={500}
      height={500}
      quality={100}
      className="w-10 md:w-20 right-7 md:right-20 bottom-20 absolute"
      />
      
    </div>
  );
};

export default HeroSection;
