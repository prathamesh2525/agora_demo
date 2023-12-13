"use client"

import Link from "next/link"
import { FaAngleDown } from "react-icons/fa"
import { IoMdMenu } from "react-icons/io"
import { useState } from "react"

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const [isServicesShow, setShowServices] = useState(false)
  const [isEventsShow, setShowEvents] = useState(false)
  return (
    <div className="relative">
      <nav
        className={
          isServicesShow || isEventsShow
            ? `flex bg-white md:bg-black border-b border-gray-800 md:px-28 lg:px-44 xl:px-60 justify-between items-center p-3`
            : `flex bg-white md:bg-transparent md:px-28 lg:px-44 xl:px-60 justify-between items-center p-3`
        }
      >
        <Link
          href="/"
          className="z-10 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-red-600"
        >
          Agora&apos;s
        </Link>
        <div className="hidden md:flex gap-6 text-sm font-bold uppercase">
          <Link className="text-red-500 active:text-red-500" href="/">
            Home
          </Link>
          <div className="flex gap-1 items-center hover:text-red-500 active:text-red-500 cursor-pointer">
            <Link
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
              href={"/services"}
            >
              Services
            </Link>
            <FaAngleDown />
          </div>
          <div className="flex gap-1 items-center hover:text-red-500 active:text-red-500 cursor-pointer">
            <Link
              onMouseEnter={() => setShowEvents(true)}
              onMouseLeave={() => setShowEvents(false)}
              href={"/events"}
            >
              Events
            </Link>
            <FaAngleDown />
          </div>
          <Link
            className="hover:text-red-500 active:text-red-500"
            href="/services"
          >
            Contact Us
          </Link>
        </div>

        {menu && (
          <div className="absolute top-0 left-0 bg-white h-72 w-full text-black">
            <div className="flex flex-col gap-4 absolute top-16 mx-4 uppercase text-sm font-semibold">
              <Link className="text-red-500" href={"/"}>
                Home
              </Link>
              <Link className="hover:text-red-500" href={"/services"}>
                Services
              </Link>
              <Link className="hover:text-red-500" href={"/events"}>
                Events
              </Link>
              <Link className="hover:text-red-500" href={"/contact"}>
                Contact Us
              </Link>
            </div>
          </div>
        )}
        <div className={`md:hidden z-10`}>
          <div className="cursor-pointer" onClick={() => setMenu(!menu)}>
            <IoMdMenu color="red" size={32} />
          </div>
        </div>
      </nav>
      {isServicesShow && (
        <div
          onMouseEnter={() => setShowServices(true)}
          onMouseLeave={() => setShowServices(false)}
          className="bg-black absolute top-12 left-0 h-52 w-full pt-6"
        >
          <div className="absolute right-0 sm:pr-72 md:pr-84 lg:pr-96">
            <div className="flex flex-col gap-3 text-sm">
              <Link className="hover:text-red-500" href={"/services"}>
                Private Investor Meeting
              </Link>
              <Link className="hover:text-red-500" href={"/services"}>
                Events
              </Link>
              <Link className="hover:text-red-500" href={"/services"}>
                Private Events
              </Link>
              <Link className="hover:text-red-500" href={"/services"}>
                Market Research
              </Link>
              <Link className="hover:text-red-500" href={"/services"}>
                Event Management
              </Link>
            </div>
          </div>
        </div>
      )}
      {isEventsShow && (
        <div className="bg-black absolute top-12 left-0 h-52 w-full pt-3">
          <div
            onMouseEnter={() => setShowEvents(true)}
            onMouseLeave={() => setShowEvents(false)}
            className="absolute right-0 sm:pr-56 md:pr-72 lg:pr-[310px]"
          >
            <div className="flex flex-col gap-3 text-sm">
              <Link className="hover:text-red-500" href={"/events"}>
                Upcoming Events
              </Link>
              <Link className="hover:text-red-500" href={"/events"}>
                Past Events
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
