'use client'

import Image from "next/image";
import logo from '../../public/logo.svg';
import profile from '../../public/in-logo.svg';
import sublogo from '../../public/icon-mu-shield.png';
import { IoMenu } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-black text-white border-b-[1px] border-b-gray-500">
        <div className="container  mx-auto flex items-center justify-between">
          {/* Left Section: Profile Icon / User */}
          <div className="flex items-center justify-center gap-1">
            <Image
              src={profile}
              alt="Profile Logo"
              className="bg-white rounded-full hidden md:block"
              width={22}
              height={20}
              priority
            />
            <span className="font-bold hidden md:block">User</span>
            {/* Mobile Menu Icon */}
            <IoMenu
              size={28}
              className="md:hidden cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>

          {/* Center: Logo */}
          <div className="lg:ps-20">
            <Image src={logo} alt="Main Logo" width={130} height={110} priority />
          </div>

          {/* Right Section: Search & Shield Logo */}
          <div className="flex justify-end items-center gap-2">
            {/* Shield Logo */}
            <Image
              src={sublogo}
              alt="Shield Logo"
              priority
              className="h-[32px] w-[24px] mt-2 me-2 hidden lg:block"
            />
            {/* Marvel Unlimited Text */}
            <div className="mt-1 hidden lg:block">
              <span className="text-xs font-extrabold">MARVEL UNLIMITED</span>
              <p className="text-xs text-center font-semibold">SUBSCRIBE</p>
            </div>
            {/* Search Icon for Mobile */}
            <BiSearch size={28} className="lg:hidden cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <Navlink />

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white font-bold py-2">
          <div className="flex flex-col items-center gap-10">
            <Link href="/">Home</Link>
            <Link href="/comic">Comic</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      )}
    </>
  );
}

// Navigation Links for Desktop
function Navlink() {
  return (
    <nav className="bg-black text-white font-bold w-full py-2 hidden md:block">
      <div className="container m-auto flex justify-center items-center gap-10 w-full">
        <Link href="/">Home</Link>
        <Link href="/comic">Comic</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
