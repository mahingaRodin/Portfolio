import { navLinks } from "@/constant/constant"
import Link from "next/link"
import React from 'react'

const MobileNav = () => {
  return (
      <div>
          {/* Overlay */}
          <div className="fixed inset-0 z-[1000] bg-black opacity-70 w-full h-screen"></div>
          {/* Nav links */}
          <div className="text-white fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] sm:w-[60%] bg-[#0f0175]
          space-x-6 z-[10000]">
              {navLinks.map((navlink) => {
                  return (
                      <Link key={navlink.id} href={navlink.url}>
                          <p className="nav__link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]">
                              {navlink.label}
                          </p>
                      </Link>
                  )
              })}
        </div>
    </div>
  )
}

export default MobileNav