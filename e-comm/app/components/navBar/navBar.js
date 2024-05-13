"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const rightmenu = [
    {
      label: "Mens",
      href: "/all-products",
    },
    {
      label: "Womens",
      href: "/womens",
    },
    {
      label: "Accessories",
      href: "/accessories",
    },
    {
      label: "Footwear",
      href: "/footwear",
    },
    {
      label: "E-voucher",
      href: "/voucher",
    },
  ];

  return (
    <div>
      <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center lg:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-3 lg:block">
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  width={120}
                  height={80}
                  alt="logo"
                  className="focus:border-none active:border-none mb-2"
                />
              </Link>

              <div className="lg:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image
                      src="/icons/close.svg"
                      width={30}
                      height={30}
                      alt="close"
                    />
                  ) : (
                    <Image
                      src="/icons/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="menu"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center lg:block md:pb-0 md:mt-0 ${
                navbar ? " lg:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center lg:flex gap-5">
                {rightmenu.map((item, index) => (
                  <li key={index} className="pb-3 text-lg text-black cover-1-title py-2 md:px-4 text-center text-gray-900 hover:text-gray-500 transition duration-200 ease-in-out ">
                    <Link href={item.href} onClick={() => setNavbar(!navbar)}>
                      {item.label}
                    </Link>
                  </li>
                ))}

                <div className=" video-box-1 flex items-center justify-center">
                  <a
                    href="#"
                    className=" block rounded-md bg-black px-4  m-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Let’s Talk
                  </a>
                </div>

                <div className="px-2 py-4 flex items-center justify-center">
                  <a href="#">
                    <img src="/icons/cart.svg" alt="cart" width="25px" />
                  </a>
                </div>
                <div className=" px-2  py-4 flex items-center justify-center">
                  <a href="#">
                    <img src="/icons/search.svg" alt="search" width="25px" />
                  </a>
                </div>

                {/* <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    Projects
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
