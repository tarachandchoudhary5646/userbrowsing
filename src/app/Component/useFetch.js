'use client'
import React, { useEffect, useState } from 'react'

function useFetch(url) {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(()=>{

        const fetchData = async () => {
            const data = await fetch(url)
            try{
                if(data.status == 200){
                    if(data.length == 0){
                        return setError('Data not found')
                    }
                    const result = await data.json();
                    setData(result)
                    setLoading(false)
                }else{
                    setLoading(false)
                    setError(data.statusText)
                }
                
            }catch{
                setError('Something went wrong')
            }
            
        }
        fetchData();

    }, [url])

    return {data, loading, error}
    
}

export default useFetch