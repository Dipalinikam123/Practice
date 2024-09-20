"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleData } from "@/redux/actions/actions";
import { useRouter } from "next/navigation";
import { MdArrowLeft } from "react-icons/md";


interface SinglePageProps {
  params: {
    id: number;
  };
}
export default function SinglePage(params:SinglePageProps) {
  const data = useSelector((store:any) => store.fetchSinglePage);
  const id = params.params.id;
  const dispatch = useDispatch();
  const router = useRouter();  // Use router for navigation

  console.log("--data",data)
  useEffect(() => {
    dispatch(fetchSingleData(id));
  }, [dispatch, id]);

  const imageUrl =
    data?.data?.thumbnail?.path && data?.data?.thumbnail?.extension
      ? `${data.data?.thumbnail?.path}.${data.data?.thumbnail?.extension}`
      : "/images/placeholder.png"; // Fallback image

  return Object.values(data?.data)?.length === 0 || data?.data.length === 0 ? (
    <div className="text-center" style={{ height: "60vh" }}>
      Loading....
    </div>
  ) : (
    <div className="container m-auto mb-3 mt-4">
          <button
            className="flex items-center px-2 mt-8 py-2 text-black backdrop-blur-sm border border-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-sm transition duration-200"
            onClick={() => router.push("/comic")}
          > <MdArrowLeft size={30}/>
            Back To Series
          </button>
        
      <div className=" flex flex-wrap justify-evenly items-center mt-10">
        
          <Image
            src={imageUrl.startsWith('http') ? imageUrl : '/images/placeholder.png'}  // Ensure it's an absolute URL
            width={450}
            height={450}
            objectFit="contain"
            className="  rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
      
       
          <div className="flex flex-col justify-center items-center gap-5">
            <h2 className="card-title font-bold mt-3 md:text-xl">{data?.data?.title}</h2>
            <p className="font-bold ">
              Creator: {data?.data?.creators?.items[0]?.name}
            </p>
            <p className="font-bold ">Series: {data?.data?.series?.name}</p>
            <p className="card-text">
              Available Stories: {data?.data?.stories?.available}
            </p>
            {data?.data?.stories?.items?.map((e, i) => (
              <p key={i} className="card-text">
                {e.name} - Type: {e.type}
              </p>
            ))}
          </div>
        
      </div>
    </div>
  );

  



}
