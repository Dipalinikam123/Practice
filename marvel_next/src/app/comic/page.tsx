"use client"

import { fetchComicData } from "@/redux/actions/actions"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function Comic() {

  const [offset, setOffset] = useState(0);
  const [limit] = useState(8); // Number of items per page

  const data =useSelector((store:any)=>store.fetchApiReducer)
  console.log("----",data?.data)
  const dispatch=useDispatch()
  
    useEffect(()=>{
      dispatch(fetchComicData(0,12));
    },[offset, limit, dispatch])

    const handleScroll = () => {
      // Check if we are at the bottom of the page
      if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
  
        // console.log("----!data.loading ",!data.loading );
        // console.log("----!data.error ",!data.error );
        console.log("!data.loading && !data.error", !data.loading && !data.error);
        if (!data.loading && !data.error) {
          setOffset(prevOffset => prevOffset + limit);
        }
      }
    };
  
    useEffect(() => {
      // Add scroll event listener
      window.addEventListener('scroll', handleScroll);
      // Clean up event listener on component unmount
      return () => window.removeEventListener('scroll', handleScroll);
    }, [data.loading, data.error]); // Dependencies to manage listener re-attachment
    return (
        <div className="max-w-7xl h-full mx-auto ">
        <HoverEffect items={data?.data} />
      </div>
    )
  }
  