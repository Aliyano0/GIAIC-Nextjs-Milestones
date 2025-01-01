"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiShoppingCart } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const navLinksData = [
  {
    id: 1,
    name: "HOME",
    path: "/"
  },
  {
    id: 2,
    name: "ABOUT",
   path: "/about"
  },
  {
    id:3,
    name: "SHOP",
    path: "/shop"
  },
  {
    id: 4,
    name: "CONTACT",
    path: "/contact"
  },
] 

const Navbar = () => {
  const pathName = usePathname();
  const [showNav, setShowNav] = useState(false);
  const handleClick = () => {
    setShowNav(!showNav);
  }
  return (
    <header className="header w-full h-[90px] sticky top-0 bg-white border-b-[1px] border-b-[#ebebeb] flex justify-center items-center p-0 lg991:px-5 z-40">

      <nav className="navbar w-full xl:w-[1170px] h-full flex justify-between items-center">

        <div className="logo pacifico pl-[14px] lg991:pl-0">
        <Link href={"/"}>

        <h3 className="text-4xl font-bold text-black">Pompeo</h3>
        </Link>
        </div>
      <div className="navbtns flex items-center">
        <ul className="navlinks hidden justify-center items-center lg991:flex">
          {navLinksData.map((elem)=>{
            return(
              <li key={elem.id}  className="navli cursor-pointer text-xs font-medium py-[21px] px-5 leading-[22px] text-navLiColor tracking-[2px] hover:text-main-red">
                <Link className={pathName === elem.path ? "text-main-red" : ""} href={elem.path}>{elem.name}</Link> </li>
            )
          })}
        </ul>
        <div className="cart text-navLiColor text-sm libre-franklin flex items-center gap-[5px] my-[9px] mx-[15px] transition-[ease-in] duration-[4s] delay-[0.4ms] hover:border-l-[1px] border-l-navLiColor">
          <PiShoppingCart className="cartIcon text-[22px] xxs:text-[26px]"/>
          Cart
        </div>
        <div onClick={handleClick} className="hamburger flex items-center justify-center p-[18px] cursor-pointer text-[27px] xxs:text-3xl text-black lg991:hidden">
          <GiHamburgerMenu />
        </div>
        <div className={`mobileNav ${showNav ? "block opacity-100" : "opacity-0 hidden"} bg-black transition-all duration-[0.4s] delay-100 absolute top-0 left-0 w-full h-screen lg991:hidden`}>
            <div className="mobileNavHeader w-full p-[20px]">
            <div className="closeBtnContainer w-full text-right px-4 xs:px-7">
            <div onClick={handleClick} className="closeBtn inline-block text-white text-[32px] xxs:text-[40px] cursor-pointer">
              &times;
            </div>
            </div>
            <ul className="mobileNavLinks mt-10 w-full text-center flex flex-col items-center justify-center gap-[20px]">
            {navLinksData.map((elem)=>{
              return(
                <li key={elem.id}  className="navli text-xs xs:text-sm font-medium py-[21px] px-5 leading-[22px] text-white tracking-[2px] hover:text-main-red">
                  <Link onClick={handleClick} className={pathName === elem.path ? "text-main-red" : ""} href={elem.path}>{elem.name}</Link> </li>
              )
            })}
            </ul>
          </div>
        </div>
      </div>
      </nav>
    </header>
  )
}

export default Navbar
