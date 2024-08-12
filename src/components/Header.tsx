import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex  space-x-2 '>
        <Link href={"/"}>🏠</Link> <p>| </p>
        <Link href={"https://www.linkedin.com/in/keshav-baskar"} className='text-[#0077B5]'>linkedin</Link> <p> | </p>
        <Link href={"https://github.com/kesh-007" } className='text-[#0077B5]  '>github</Link>
        
    </div>
  )
}

export default Header