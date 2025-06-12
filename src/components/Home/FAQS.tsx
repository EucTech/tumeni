import { inter, montserrat } from "@/font";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { Images } from "@/assets";

const FAQS = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-[#F7F5FD] gap-20 py-10 px-5 md:px-10 lg:px-20 2xl:px-40">
      <div className={`w-full lg:w-[60%] ${inter.className} py-2`}>
        <Accordion
          type="single"
          defaultValue="item-1"
          collapsible
          className="w-full flex flex-col gap-4"
        >
          <AccordionItem
            className="border border-[#5027FF] rounded-2xl p-2"
            value="item-1"
          >
            <AccordionTrigger
              className={` text-[#141011] font-[500] text-[16px] !no-underline ${montserrat.className}`}
            >
              How do I get my warehouse address?
            </AccordionTrigger>
            <AccordionContent className="text-[15px] font-[400] text-[#4E4E4E]">
              Just sign up — it&apos;s free. You&apos;ll get your unique U.S.
              address instantly.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            className="border border-[#5027FF] rounded-2xl p-2"
            value="item-2"
          >
            <AccordionTrigger
              className={` text-[#141011] font-[500] text-[16px] !no-underline ${montserrat.className}`}
            >
              How do I get my warehouse address?
            </AccordionTrigger>
            <AccordionContent className="text-[15px] font-[400] text-[#4E4E4E]">
              Just sign up — it&apos;s free. You&apos;ll get your unique U.S.
              address instantly.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            className="border border-[#5027FF] rounded-2xl p-2"
            value="item-3"
          >
            <AccordionTrigger
              className={` text-[#141011] font-[500] text-[16px] !no-underline ${montserrat.className}`}
            >
              How do I get my warehouse address?
            </AccordionTrigger>
            <AccordionContent className="text-[15px] font-[400] text-[#4E4E4E]">
              Just sign up — it&apos;s free. You&apos;ll get your unique U.S.
              address instantly.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            className="border border-[#5027FF] rounded-2xl p-2"
            value="item-4"
          >
            <AccordionTrigger
              className={` text-[#141011] font-[500] text-[16px] !no-underline ${montserrat.className}`}
            >
              How do I get my warehouse address?
            </AccordionTrigger>
            <AccordionContent className="text-[15px] font-[400] text-[#4E4E4E]">
              Just sign up — it&apos;s free. You&apos;ll get your unique U.S.
              address instantly.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="border border-[#5027FF] rounded-2xl p-2"
            value="item-5"
          >
            <AccordionTrigger
              className={` text-[#141011] font-[500] text-[16px] !no-underline ${montserrat.className}`}
            >
              How do I get my warehouse address?
            </AccordionTrigger>
            <AccordionContent className="text-[15px] font-[400] text-[#4E4E4E]">
              Just sign up — it&apos;s free. You&apos;ll get your unique U.S.
              address instantly.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className=" relative w-fit lg:w-[40%] ">
        <Image
          src={Images.faqs}
          alt="FAQ Image"
          width={1000}
          height={1000}
          quality={100}
          className="w-[500px]"
        />
        <div className="w-[90%] flex flex-col gap-3 absolute top-10 left-5  h-full p-3 text-[16px] font-inter font-[400]">
          <Image
            src={Images.star}
            alt="Star Image"
            width={1000}
            height={1000}
            quality={100}
            className="w-5"
          />
          <p className="text-[#FFFFFF]">
            Just sign up — it&apos;s free. You&apos;ll get your unique U.S. address
            instantly.
          </p>
          <p className="text-[#FFFFFF]">
            Whether you&apos;re a frequent shopper, reseller, or just buying a
            one-time item, our reliable and affordable international shipping
            ensures your packages arrive safely and on time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQS;
