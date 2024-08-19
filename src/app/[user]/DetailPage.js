'use client'


import useFetch from '@/app/Component/useFetch'
import React from 'react'
import Loader from '../Component/Loader';
import Image from 'next/image';

function DetailPage({props}) {

    const {data, loading, error} = useFetch(`https://dummyjson.com/users/${props.params.user}`)
    console.log(data);
    

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

  return (
    <>
        <section className='py-4 mt-8'>
          <div className='max-w-[600px] bg-white shadow-sm p-4 mx-auto'>
            <div className='mb-4'>
              <Image alt={data.firstName} src={data.image} width={80} height={80}/>
            </div>
            <div className='border border-slate-200 '>
              <div className='flex flex-wrap border-b border-slate-200'>
                <div className='w-1/4 p-2 border-r border-slate-200 font-semibold text-sm'>Name</div>
                <div className='w-3/4 p-2 text-sm'>
                  {data.firstName} {data.lastName}
                </div>
              </div>
              <div className='flex flex-wrap border-b border-slate-200'>
                <div className='w-1/4 p-2 border-r border-slate-200 font-semibold text-sm'>Email</div>
                <div className='w-3/4 p-2 text-sm'>
                  {data.email}
                </div>
              </div>
              <div className='flex flex-wrap border-b border-slate-200'>
                <div className='w-1/4 p-2 border-r border-slate-200 font-semibold text-sm'>Age</div>
                <div className='w-3/4 p-2 text-sm'>
                  {data.age}
                </div>
              </div>
              <div className='flex flex-wrap border-b border-slate-200'>
                <div className='w-1/4 p-2 border-r border-slate-200 font-semibold text-sm'>Birth Date</div>
                <div className='w-3/4 p-2 text-sm'>
                  {data.birthDate}
                </div>
              </div>
              <div className='flex flex-wrap border-b border-slate-200'>
                <div className='w-1/4 p-2 border-r border-slate-200 font-semibold text-sm'>Phone</div>
                <div className='w-3/4 p-2 text-sm'>
                  {data.phone}
                </div>
              </div>
              <div className='flex flex-wrap border-b border-slate-200'>
                <div className='w-1/4 p-2 border-r border-slate-200 font-semibold text-sm'>Address</div>
                <div className='w-3/4 p-2 text-sm'>
                  {data.address.address}, {data.address.city} {data.address.state} {data.address.postalCode}, {data.address.country}
                </div>
              </div>
              <div className='flex flex-wrap border-b border-slate-200'>
                <div className='w-1/4 p-2 border-r border-slate-200 font-semibold text-sm'>Role</div>
                <div className='w-3/4 p-2 text-sm'>
                  {data.role}
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default DetailPage