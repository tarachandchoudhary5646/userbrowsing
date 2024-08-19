import React, { useEffect, useState } from 'react'

function Pagination({PagesNo, currentPage, changePage}) {

    const [pagesArr, setPagesArr] = useState([])

    useEffect(()=>{
        if(PagesNo> 0){
            console.log(PagesNo);
            
            let pagenoArr = []
            for(let i = 1; i <= PagesNo; i++){
                pagenoArr.push(i)
            }
            setPagesArr(pagenoArr)
        }
        
    },[PagesNo])

    if (pagesArr.length === 0) return null;

    const prevPage = ()=>{
        changePage(currentPage-1)
    }

    const nextPage = ()=>{
        changePage(currentPage+1)
    }

  return (
    <>
        <div className='my-5 flex justify-center'>
            <ul className='flex justify-center border border-slate-200 rounded-sm w-auto overflow-hidden'>
                <li className='border-r border-slate-200'>
                    <button onClick={prevPage} className={`${currentPage === 1 ? 'opacity-50 pointer-events-none' : 'opacity-100'} py-1 px-2 text-sm hover:bg-red-500 hover:text-white`}>Prev</button>
                </li>
                {
                    pagesArr.map((item, index)=>(
                        <li key={index} className='border-r border-slate-200'>
                            <button onClick={()=> changePage(item)} className={`${item == currentPage ? 'bg-red-600 text-white ' :  ' '}py-1 px-3 text-sm hover:bg-red-500 hover:text-white`}>{item}</button>
                        </li>
                    ))
                }
                <li>
                    <button onClick={nextPage} className={`${currentPage === pagesArr.length ? 'opacity-50 pointer-events-none ' : 'opacity-100 '} py-1 px-2 text-sm hover:bg-red-500 hover:text-white`}>Next</button>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Pagination