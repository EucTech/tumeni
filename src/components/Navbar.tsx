import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Images } from "@/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeSheet = () => setIsOpen(false);

  const isActive = (path: string) =>
    pathname === path ? "border-b-blue border-b font-[600]" : "";

  return (
    <div className="fixed z-50 w-full h-[5em] bg-[#FDFDFF]/80 backdrop-blur-md font-instrumentSans flex items-center justify-between px-5 md:px-10 lg:px-20 ">
      <Link className="w-fit" href="/">
        <Image
          src={Images.logo}
          alt="Tumeni logo"
          width={100}
          height={100}
          quality={100}
          className="w-28"
        />
      </Link>

      <div className="hidden md:flex items-center text-nowrap gap-6 ">
        <ul className="flex items-center gap-6 text-[15px] text-[#000000] font-[600]">
          <Link
            className={`hover:text-blue transition-colors duration-300 ${isActive(
              "/"
            )}`}
            href="/home"
          >
            <li>Home</li>
          </Link>
          <Link
            className={`hover:text-blue transition-colors duration-300 ${isActive(
              "#"
            )}`}
            href="#"
          >
            <li>Company</li>
          </Link>
          <Link
            className={`hover:text-blue transition-colors duration-300 ${isActive(
              "#"
            )}`}
            href="#"
          >
            <li>FAQS</li>
          </Link>
          <Link
            className={`hover:text-blue transition-colors duration-300 ${isActive(
              "#"
            )}`}
            href="#"
          >
            <li>Blog</li>
          </Link>
        </ul>

        <Link href="#">
          <button className="flex items-center text-[15px] font-[600] cursor-pointer bg-blue text-white hover:bg-blue/60 transition-colors duration-300 px-8 py-[10px] gap-2 rounded-3xl">
            Start shipping
          </button>
        </Link>
      </div>

      <div className="md:hidden block">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            {/* <Button variant="outline"> */}
            <GiHamburgerMenu className="md:hidden block text-[30px] text-black" />
            {/* </Button> */}
          </SheetTrigger>
          <SheetContent side="left">
            <VisuallyHidden>
              <SheetTitle>Navbar List</SheetTitle>
              <SheetDescription>Navbar List</SheetDescription>
            </VisuallyHidden>
            <div className="grid gap-8 py-20 pl-6">
              <ul className="flex flex-col gap-6 text-[#000000] text-[15px] font-[600]">
                <Link href="/" className={`${isActive("/home")}`}>
                  <li className="hover:text-blue" onClick={closeSheet}>
                    Home
                  </li>
                </Link>
                <Link href="/company" className={`${isActive("/company")}`}>
                  <li className="hover:text-blue" onClick={closeSheet}>
                    Company
                  </li>
                </Link>
                <Link href="/faqs" className={`${isActive("/faqs")}`}>
                  <li className="hover:text-blue" onClick={closeSheet}>
                    FAQS
                  </li>
                </Link>
                <Link href="/blog" className={`${isActive("/blog")}`}>
                  <li
                    className="hover:text-blue cursor-pointer"
                    onClick={closeSheet}
                  >
                    Blog
                  </li>
                </Link>
              </ul>

              <Link href="#">
                <button className="flex items-center text-[15px] font-[600] cursor-pointer bg-blue text-white hover:bg-blue/60 transition-colors duration-300 px-8 py-[10px] gap-2 rounded-3xl">
                  Start shipping
                </button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
