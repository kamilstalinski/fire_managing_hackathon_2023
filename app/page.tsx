"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className='bg-white h-full w-full flex items-center flex-col'>
      <div className='logo mt-[25px]'>
        <Image src='/logo.svg' width={255} height={200} alt='COM.FIRE Logo' />
      </div>
      <div className='circlerounded-full mt-[55px] scale-[1.25]'>
        <Image src='/ellipse.png' alt='ellipse' width={255} height={255} />
      </div>
      <h1 className='font-bold text-[20px] mt-[83px]'>
        Welcome to the COM
        <span className='inline-block w-[7px] h-[14px] bg-black -translate-x-[2px] -translate-y-[.6px]'></span>
        .FIRE app
      </h1>
      <br />
      <p className='text-20px text-center'>
        Be aware of wildfires.
        <br />
        Be a part of the community
        <br />
        Be safe
      </p>
      <Link
        href='/register'
        className='text-center text-white w-[329px] px-[20px] py-[14px] bg-[#FF5F5F] rounded-[14px] mt-[83px]'
      >
        Register
      </Link>
      <Link
        href='/main'
        className='text-center w-[329px] px-[20px] py-[14px] bg-white rounded-[14px] mt-[10px]'
      >
        Login
      </Link>
    </div>
  );
}
