'use client';
import Image from "next/image";
function Nav() {

  return (
    <nav className=" w-full sticky top-0  z-10 ">
      <button type='button' name="hamburger" className="md:hidden p-5">
        <svg viewBox='0 0 20 20' fill='currentColor' className='menu w-6 h-6'>
          <path fillRule='evenodd'
            d='M2 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 6a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm1 5a1 1 0 100 2h14a1 1 0 100-2H3z'
            clipRule='evenodd' />
        </svg>
      </button>
      <hr className="md:hidden" />
      <div className='hidden md:flex md:flex-row w-full h-fit backdrop-blur-xl justify-start items-center  text-center shadow-2xl drop-shadow-2xl bg-white/10  shadow-black text-md font-extralight rounded'>
        <Image src='/RVLogo.svg' width={50} height={50} alt={""} />

        <ul className="flex justify-around w-full cursor-pointer">
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Experience</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav