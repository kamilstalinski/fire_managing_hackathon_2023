import Image from "next/image";

export default function Main() {
  return (
    <div className='h-full w-full flex items-center flex-col text-center relative'>
      <div className='w-full h-full absolute bottom-0 right-0 translate-y-12 z-0'>
        <Image src='/image 3.svg' fill alt='terrain' />
      </div>
      <div className='w-full px-[16px]'>
        <div className='flex items-center gap-[12px] mt-[24px] z-10 px-[8px] w-full'>
          <div>
            <Image src='/Ellipse 5.svg' width={60} height={60} alt='' />
          </div>
          <div>
            <h2 className='text-[20px] font-bold text-left'>Jason Williams</h2>
            <div className='flex items-center justify-start gap-[8px]'>
              <Image src='/Frame 102.svg' width={48} height={16} alt='' />
              <p className='text-[#4B4B4B] text-[15px]'>COM.FIRE Expert</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
