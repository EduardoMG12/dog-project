import Link from 'next/link'
import React from 'react'
import DogLogo from './SVGs/DogLogo'

const Header = () => {
  return (
    <header className="w-full h-11 flex items-center" style={{fontFamily: "'Fira Sans', sans-serif"}}>
    <div className="w-full px-8 md:px-32 flex flex-row items-center justify-between">
      <div className="flex justify-center items-center">
        <Link href={"/"}>
          <DogLogo fillLogo={"white"} />
        </Link>
      </div>
      <ul className="flex gap-8 text-xl items-center justify-center">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/breeds"}>Breeds</Link>
        </li>
        <li>
          <Link href={"/randomPhotos"}>Random Photos</Link>
        </li>
      </ul>
    </div>
  </header>
  )
}

export default Header