'use client'
import React, { useEffect, useState } from 'react'
import useFetch from '../useFetch';
import Link from 'next/link';

function Search() {

  const [inputVal, setInputVal] = useState('');
    const [searchData, setSearchData] = useState([]);
    const [show, setShow] = useState(false);
    const {data, loading, error} = useFetch('https://dummyjson.com/users');

    useEffect(()=>{
        if(!loading && data){
            const filterData = data.users.filter(item => item.firstName?.toLowerCase().includes(inputVal?.toLowerCase()))
            setSearchData(filterData)
            setShow(true)
        }else{
            setShow(true)
        }
        if(!inputVal){
            setSearchData([])
            setShow(false)
        }
    }, [data, inputVal, loading])

    const handleChange = (e)=>{
        const val = e.target.value
        if(val != ''){
            setShow(true)
            setInputVal(val)
        }else{
            setShow(false)
        }
    }

    
    

  return (
    <>
        
        <div className='max-w-[400px] md:absolute  md:left-1/2 md:-translate-x-1/2 w-full'>
            <div className=''>
                <input onChange={handleChange} placeholder='Search user' className='border border-slate-300 py-1 px-2 w-full text-sm md:text-md'/>
            </div>
                {
                    show?
                    <div className='bg-white shadow-sm w-full absolute top-full left-0 max-h-[100px]  overflow-y-auto'>
                        {
                            loading ? (<p>Loading...</p>):
                            error ? (<p>{error}</p>)
                            : <ul>
                                {
                                    searchData.length > 0 ?searchData.map((item, index)=>(
                                        <li key={index}>
                                            <Link className='border-b border-slate-200 py-2 px-2 block' onClick={()=>setShow(false)} href={`/${item.id}`}>{item.firstName} {item.middleName} {item.lastName}</Link>
                                        </li>
                                    ))
                                    : "Not found"
                                }
                            </ul>
                        }
                    </div>:''
                }
        </div>
    </>
  )
}

export default Search