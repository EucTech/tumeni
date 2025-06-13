import { Images } from "@/assets";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const WhyTumeni = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-10 bg-[#F7F5FD] py-10 sm:py-20 px-5 sm:px-10 lg:px-14 xl:px-20">
      <h3 className=" font-clashDisplay-bold text-[#141011] text-[30px] ">
        Why Tumeni
      </h3>
      <div className="flex flex-col lg:flex-row items-start gap-10 xl:gap-20 ">
        <div className=" w-full sm:w-[80%] md:w-[70%] h-fit flex-1 flex flex-col font-instrumentSans items-start gap-6">
          <div className="w-full flex min-h-[150px]">
            <div className="relative w-[1px]">
              <div className="absolute top-0 left-0 w-[1px] h-full bg-[#E7EBE6]" />
              <div className="absolute bottom-0 left-0 w-[1px] h-[12%] bg-[#5236CE]" />
            </div>
            <Fade
              direction="up"
              duration={1000}
              fraction={0.5}
              delay={400}
              triggerOnce
              className=""
            >
              <div className="flex flex-col items-start ml-4">
                <Image
                  src={Images.icon2}
                  alt="person image"
                  width={1000}
                  height={1000}
                  className="size-12"
                />
                <h1 className="text-[20px] text-[#141011] font-[700] mt-2">
                  Warehousing & Package Consolidation
                </h1>
                <p className="text-[#5E5D6F] text-[16px] mt-4 font-[400]">
                  We ship weekly by air and move your packages faster than
                  traditional freight services, no long delays.
                </p>
              </div>
            </Fade>
          </div>

          <div className="w-full flex min-h-[150px]">
            <div className="relative w-[1px]">
              <div className="absolute top-0 left-0 w-[1px] h-full bg-[#E7EBE6]" />
              <div className="absolute bottom-0 left-0 w-[1px] h-[12%] bg-[#5236CE]" />
            </div>
            <Fade
              direction="up"
              duration={1000}
              fraction={0.5}
              delay={400}
              triggerOnce
              className=""
            >
              <div className="flex flex-col items-start ml-4">
                <Image
                  src={Images.icon3}
                  alt="person image"
                  width={1000}
                  height={1000}
                  className="size-12"
                />
                <h1 className="text-[20px] text-[#141011] font-[700] mt-2">
                  Transparent Pricing
                </h1>
                <p className="text-[#5E5D6F] text-[16px] mt-4 font-[400]">
                  Flat rates starting at $14.99/kg or $6.80/lb, no surprises, no
                  hidden fees.
                </p>
              </div>
            </Fade>
          </div>

          <div className="w-full flex min-h-[150px]">
            <div className="relative w-[1px]">
              <div className="absolute top-0 left-0 w-[1px] h-full bg-[#E7EBE6]" />
              <div className="absolute bottom-0 left-0 w-[1px] h-[12%] bg-[#5236CE]" />
            </div>
            <Fade
              direction="up"
              duration={1000}
              fraction={0.5}
              delay={400}
              triggerOnce
              className=""
            >
              <div className="flex flex-col items-start ml-4">
                <Image
                  src={Images.icon4}
                  alt="person image"
                  width={1000}
                  height={1000}
                  className="size-12"
                />
                <h1 className="text-[20px] text-[#141011] font-[700] mt-2">
                  Made for the Diaspora
                </h1>
                <p className="text-[#5E5D6F] text-[16px] mt-4 font-[400]">
                  Born from the real frustrations of sending things home,
                  we&apos;re building the system we wish existed.
                </p>
              </div>
            </Fade>
          </div>

          <div className="w-full flex min-h-[150px]">
            <div className="relative w-[1px]">
              <div className="absolute top-0 left-0 w-[1px] h-full bg-[#E7EBE6]" />
              <div className="absolute bottom-0 left-0 w-[1px] h-[12%] bg-[#5236CE]" />
            </div>
            <Fade
              direction="up"
              duration={1000}
              fraction={0.5}
              delay={400}
              triggerOnce
              className=""
            >
              <div className="flex flex-col items-start ml-4">
                <Image
                  src={Images.icon4}
                  alt="person image"
                  width={1000}
                  height={1000}
                  className="size-12"
                />
                <h1 className="text-[20px] text-[#141011] font-[700] mt-2">
                  Supports Businesses & Nonprofits
                </h1>
                <p className="text-[#5E5D6F] text-[16px] mt-4 font-[400]">
                  We serve not just families, but small businesses and NGOs that
                  need timely, dependable delivery.
                </p>
              </div>
            </Fade>
          </div>
        </div>

        <div className="mx-auto lg:mx-0 w-[100%] sm:w-[500px] xl:w-[450px] 2xl:w-[600px] relative overflow-hidden">
           <Fade
              direction="left"
              duration={1000}
              fraction={0.5}
              delay={400}
              triggerOnce
            >
          <Image
            src={Images.whyimage}
            alt="person image"
            width={1000}
            height={1000}
            className="w-full"
          />
          </Fade>
           <Fade
              direction="right"
              duration={1000}
              fraction={0.5}
              delay={400}
              triggerOnce
              className="w-[200px] sm:w-[300px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
            >
          <Image
            src={Images.why2}
            alt="overlay image"
            width={1000}
            height={1000}
            className=""
          />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default WhyTumeni;
