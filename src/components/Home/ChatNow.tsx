import { Images } from "@/assets";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const ChatNow = () => {
  return (
    <div className="relative w-full flex lg:flex-row flex-col items-center justify-center gap-20 bg-[#101010] px-5 sm:px-10 md:px-20 pt-14 pb-10 sm:pb-5 overflow-hidden">
      <Fade
        direction="up"
        duration={1000}
        fraction={0.5}
        delay={600}
        triggerOnce
        className=" w-[100%] lg:w-[400px] xl:w-[500px] z-30 "
      >
        <Image
          src={Images.agent}
          alt="Tumeni Live Agent"
          width={1000}
          height={1000}
          quality={100}
          className="w-full z-30"
        />
      </Fade>
      <div className="w-[100%] md:w-[80%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] flex flex-col items-start gap-5 z-30">
        <Fade
          direction="up"
          duration={1000}
          fraction={0.5}
          delay={200}
          triggerOnce
          className=""
        >
          <h3 className="text-[#FFFFFF] text-[22px] sm:text-[26px] md:text-[30px] font-clashDisplay-bold ">
            Dedicated Support? Chat with a Tumeni Live Agent{" "}
            <span className="text-[#5236CE]">Now!</span>
          </h3>
        </Fade>
        <Fade
          direction="up"
          duration={1000}
          fraction={0.5}
          delay={400}
          triggerOnce
          className="  "
        >
          <p className="text-[#CBCBCC] font-inter text-[15px] sm:text-[16px] font-[500]">
            Tumeni means &quot;Send Me&quot; and that&apos;s exactly what we
            do.Live support available 24/7 via WhatsApp, chat, or
            email.Multilingual agents. Real people. Real-time help.
          </p>
        </Fade>
        <Fade
          direction="up"
          duration={1000}
          fraction={0.5}
          delay={600}
          triggerOnce
          className=" "
        >
          <button className="bg-[#5236CE] text-[#fff] py-2 px-5  rounded-[10px] cursor-pointer hover:opacity-80 ">
            Chat Now
          </button>
        </Fade>
      </div>

      <div className=" absolute w-[16em] h-[10em] gradient-background blur-[100px] rounded-full left-10 bottom-0 z-10 "></div>
      <div className=" absolute w-[16em] h-[10em] gradient-background blur-[100px] rounded-full right-10 top-0 z-10 "></div>
      <div className=" absolute w-[16em] h-[10em] gradient-background blur-[100px] rounded-full left-[40em] bottom-0 z-10 "></div>
    </div>
  );
};

export default ChatNow;
