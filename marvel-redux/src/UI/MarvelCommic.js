import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApiData } from '../Data/Action/action';

export default function MarvelCommic() {
    const data = useSelector((store)=>{
        return store?.fetchApiReducer;
    })
    const dispatch= useDispatch()
    console.log("-------",data);

    useEffect(()=>{
        dispatch(fetchApiData())
    },[dispatch])
  return (
    <>
    <div>MarvelCommic</div>
    {
      data?.loading &&<h1 className='App'>Loading....</h1>
    }
    
    </>
  )
}
