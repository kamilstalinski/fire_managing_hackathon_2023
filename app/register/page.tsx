import Image from "next/image";
import Link from "next/link";

function Register() {
  return (
    <div className='h-full w-full flex items-center flex-col text-center'>
      <h1 className='font-bold text-[17px] mt-[12px]'>Localization</h1>
      <div className='w-full !h-[215px] mt-[162px] relative'>
        <Image
          src='/polygon.png'
          width={130}
          height={130}
          alt='polygon'
          className='absolute bottom-[10%] -left-[5%]'
        />
        <Image
          src='/polygon.png'
          width={130}
          height={130}
          alt='polygon'
          className='absolute bottom-[18%] left-[15%]'
        />
        <Image
          src='/polygon.png'
          width={215}
          height={215}
          alt='polygon'
          className='absolute top-0 right-0'
        />
        <Image
          src='/polygon.png'
          width={215}
          height={215}
          alt='polygon'
          className='absolute -top-[25px] -right-[25%]'
        />
      </div>
      <h2 className='font-bold text-[20px]'>Local emphasis</h2>
      <br />
      <p className='text-20px text-center max-w-[329px]'>
        Choose your localization to be better inform and be a part of your
        social community
      </p>
      <Link
        href='/main'
        className='text-center text-white w-[329px] px-[20px] py-[14px] bg-[#FF5F5F] rounded-[14px] mt-[83px]'
      >
        Continue
      </Link>
    </div>
  );
}

export default Register;
