"use client"

import { fetchComicData, clearComicData } from "@/redux/actions/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function Comic() {
  const [offset, setOffset] = useState<number>(0);
  const [limit] = useState<number>(8); // Number of items per page

  const data = useSelector((store: any) => store.fetchApiReducer);
  const dispatch = useDispatch();

  console.log("----data",data)
  // Clear data and reset offset on mount
  useEffect(() => {
    dispatch(clearComicData()); // Clear the data when the component mounts
    setOffset(0); // Reset offset when component mounts
  }, [dispatch]);

  // Fetch data when offset or limit changes
  useEffect(() => {
    dispatch(fetchComicData(offset, limit));
  }, [offset, limit, dispatch]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      if (!data.loading && !data.error) {
        setOffset((prevOffset) => prevOffset + limit);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data.loading, data.error]);

  return (
    <div className="max-w-7xl h-full mx-auto mb-20">
     {data?.loading && <p className='text-center text-xl font-bold'>Loading...</p> }
     <HoverEffect items={data?.data} />
    </div>
  );
}
