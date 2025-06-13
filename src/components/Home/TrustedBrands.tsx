import { Images } from "@/assets";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const TrustedBrands = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 py-20 px-5 sm:px-20 ">
      <Fade
        direction="up"
        duration={1000}
        fraction={0.5}
        delay={200}
        triggerOnce
      >
        <span className="w-fit bg-[#F5F1FE] font-inter font-[600] rounded-[20px] text-[#5236CE] flex items-center gap-2 py-[2px] px-4 ">
          Trusted by Global Brands
        </span>
      </Fade>

      <Fade
        direction="up"
        duration={1000}
        fraction={0.5}
        delay={400}
        triggerOnce
      >
        <p className="text-[#5E5D6F] font-inter text-center">
          Tired of asking family abroad to help you shop? Now you don&apos;t
          have to.
        </p>
      </Fade>

      <Fade
        direction="up"
        duration={1000}
        fraction={0.5}
        delay={600}
        triggerOnce
      >
        <Image
          src={Images.brands}
          alt="Hero Image"
          width={1000}
          height={1000}
          quality={100}
          className="w-[600px] sm:w-[500px]"
        />
      </Fade>
    </div>
  );
};

export default TrustedBrands;
