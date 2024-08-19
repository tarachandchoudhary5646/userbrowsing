import React from 'react'
import Search from './Search'
import Link from 'next/link'

function Header() {
  return (
    <>
        <header className='py-2 px-2 md:py-4 md:px-3 flex-col md:flex-row flex items-center justify-between relative border-b border-slate-200'>
            <Link href={'/'} className='font-semibold text-lg mb-2 md:mb-0'>Movie <span className='text-red-600 font-semibold text-xs cursor-pointer'>Logo</span></Link>
            <Search/>
        </header>
    </>
  )
}

export default Header