'use client'
import React, { useEffect, useState } from 'react'
import useFetch from '../Component/useFetch'
import Link from 'next/link'
import Image from 'next/image'
import Loader from '../Component/Loader'
import Pagination from './Pagination'

function UserListing() {

    const [pageNo, setPageNo] = useState(1)
    const limitItems = 30
    const {data, loading, error} = useFetch(`https://dummyjson.com/users?limit=${limitItems}&skip=${pageNo == 1 ? 0 : (pageNo-1)*limitItems}`);
    const [totalPages, setTotalPages] = useState(0);
    

    useEffect(()=>{
        if(data && data.users){
            console.log(data);
            setTotalPages(Math.ceil(data.total/limitItems))
        }
    },[data])

    if(loading){
        return(
            <>
                <div className='flex items-center justify-center py-52'>
                    <Loader/>
                </div>
            </>
        )
    }

    if(error){
        return <p>{error}</p>
    }

    const pageChangeFun = (pageno)=>{
        setPageNo(pageno)
    }

  return (
    <>
        <section className='py-2 md:py-4'>
            <div className='max-w-[1200px] mx-auto w-full px-2'>
                <h2 className='text-center font-semibold text-md md:text-xl mt-2'>User listing</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mt-3 md:mt-5'>
                    {
                        data?.users.map((item, index)=>(
                            <div key={index} className='flex items-center flex-col bg-white shadow-dm p-3 cursor-pointer rounded-md'>
                                <Image width={70} height={70} alt={item.firstName} src={item.image} loading='lazy'/>
                                <h2 className='text-sm font-semibold my-2'>{item.firstName} {item.middleName} {item.lastName}</h2>
                                <Link href={`/${item.id}`} className='bg-red-600 mt-2 rounded-[5px] px-2 py-1 font-semibold text-sm text-white'>View more</Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
        <Pagination PagesNo={totalPages} changePage={pageChangeFun} currentPage={pageNo} />
    </>
  )
}

export default UserListing