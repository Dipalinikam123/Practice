
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ProductDetail({params}) {
  console.log("--params", params?.productdetail);
  const [singleProduct, setSingleProduct] = useState();
  const router= useRouter()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          `https://fakestoreapi.com/products/${params?.productdetail}`
        );
        const data2 = await data.json();
        console.log("====data", data2);
        setSingleProduct(data2); // Set the parsed JSON data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params?.productdetail]);

  // Function to generate stars based on rating
  const getStars = (rating:number) => {
    const fullStars = Math.floor(rating); // Full stars 4.3== 4
    const halfStar = rating % 1 !== 0; // Half star if there's a decimal  4.3 % 1  =0.3
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Remaining empty stars 5-4-0=1

    return (
        <span className="gold-stars">
        {"★".repeat(fullStars)} {/* Full Stars */}
        {halfStar && "☆"}
        {"☆".repeat(emptyStars)} {/* Empty Stars */}
      </span>
    );
  };

  return (
    <div>
      <div className="mt-36 mb-10 text-center">
        <button onClick={()=>router.push('/product')} className="m-4 border rounded-md py-1 px-2">Back To Home</button>
        {/* <img className="text-m" src={singleProduct?.image} alt={singleProduct?.title} /> */}
        {/* image optimization */}
        <Image src={singleProduct?.image} width={300} height={300} className="m-auto"/>
        <div className="text-div">
          <p className="m-3 font-bold">Title: {singleProduct?.title}</p>
          <p className="">Price: ${singleProduct?.price}</p>
          <h4 className="m-3">Category: {singleProduct?.category}</h4>
          <p className="md:w-[70%] m-auto">Description: {singleProduct?.description}</p>
          <p className="m-3">
            Rating: {getStars(singleProduct?.rating?.rate)} ({singleProduct?.rating?.rate}/5)
          </p>
        </div>
      </div>
    </div>
  );
}
