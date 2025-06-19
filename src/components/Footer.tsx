import { dm_sans, inter } from "@/font";
import Link from "next/link";
import React from "react";
import {
  GrFacebookOption,
  GrInstagram,
  GrLinkedinOption,
  GrTwitter,
} from "react-icons/gr";

const Footer = () => {
  return (
    <div className=" relative overflow-hidden w-full flex flex-col items-center gap-4 pt-20 bg-no-repeat bg-cover bg-[url('/footer.png')]">
      
      <div className="w-full z-30 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 text-[#bcc9f3]  gap-5 sm:gap-10  px-10 md:px-20 pb-4">
        <div className="flex flex-col gap-4">
          <h1 className={`text-white font-bold text-lg ${dm_sans.className}`}>
            Legal
          </h1>
          <ul
            className={`flex flex-col gap-2 text-[15px] font-normal ${inter.className}`}
          >
            <Link className="hover:text-white text-[#CBCBCC]" href={"#"}>
              <li>Privacy Policy</li>
            </Link>
            <Link className="hover:text-white text-[#CBCBCC]" href={"#"}>
              <li>Term of Use</li>
            </Link>
  
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className={`text-white font-bold text-lg ${dm_sans.className}`}>
            Links
          </h1>
          <ul
            className={`flex flex-col gap-2 text-[15px] font-normal ${inter.className}`}
          >
            <Link className="hover:text-white text-[#CBCBCC]" href={"/"}>
              <li>Home</li>
            </Link>
            <Link className="hover:text-white text-[#CBCBCC]" href={"#"}>
              <li>About</li>
            </Link>
            <Link className="hover:text-white text-[#CBCBCC]" href={"#"}>
              <li>Blogs</li>
            </Link>
            <Link className="hover:text-white text-[#CBCBCC]" href={"#"}>
              <li>FAQS</li>
            </Link>
          </ul>
        </div>
       
    
        <div className="flex flex-col gap-4">
          <h1 className={`text-white font-bold text-lg ${dm_sans.className}`}>
            Contact
          </h1>
          <ul
            className={`flex flex-col gap-2 text-[15px] font-normal text-[#CBCBCC] ${inter.className}`}
          >
            <Link
              className="hover:text-white text-[#CBCBCC]"
              href={"mailto:support@tumeni.com"}
            >
              <li>support@tumeni.com</li>
            </Link>
            <li>4786 1st Avenue Suite, 103 Seatl, WA 98134 </li>
          </ul>
        </div>
      </div>

      <div className="w-[90%] h-2 border-b border-[#898A8C] z-30" />

      <div className="w-full z-30 text-white bg-tdeepblue flex flex-col md:flex-row gap-5 items-center justify-between py-5 px-5 md:px-20">
        <p className=" text-center text-sm">
          &copy;2025 Tumeni. All right reserved
        </p>

        <div className="flex items-center gap-4">
          <p className={`text-white text-[16px] sm:text-[18px] font-medium ${dm_sans.className}`}>Follow Us</p>
          <div className="flex items-center gap-4 ">
            <Link href="#" className=" size-8 sm:size-10 flex items-center justify-center rounded-full border border-[#898A8C]">
              <GrFacebookOption className="hover:text-[#898A8C] text-[#fff] size-3 sm:size-4" />
            </Link>
            <Link href="#" className=" size-8 sm:size-10 flex items-center justify-center rounded-full border border-[#898A8C]">
              <GrInstagram className="hover:text-[#898A8C] text-[#fff] size-3 sm:size-4" />
            </Link>
            <Link href="#" className=" size-8 sm:size-10 flex items-center justify-center rounded-full border border-[#898A8C]">
              <GrTwitter className="hover:text-[#898A8C] text-[#fff] size-3 sm:size-4" />
            </Link>
            <Link href="#" className=" size-8 sm:size-10 flex items-center justify-center rounded-full border border-[#898A8C]">
              <GrLinkedinOption className="hover:text-[#898A8C] text-[#fff] size-3 sm:size-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className=" absolute w-[20em] h-[20em] bg-[#000000]/30 blur-3xl rounded-full translate-y-30   -bottom-[150px]  "></div>
    </div>
  );
};

export default Footer;
