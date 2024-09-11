"use client";
import { useEffect, useState } from "react";
import "./ProductDeatil.css";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ProductDetail(params) {
  console.log("--params", params?.params?.product);
  const [singleProduct, setSingleProduct] = useState();
  const router= useRouter()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          `https://fakestoreapi.com/products/${params?.params?.product}`
        );
        const data2 = await data.json();
        console.log("====data", data2);
        setSingleProduct(data2); // Set the parsed JSON data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params?.params?.product]);

  // Function to generate stars based on rating
  const getStars = (rating) => {
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
      <div className="card-div2">
        <button onClick={()=>router.push('/product')}>Back To Home</button>
        {/* <img className="text-m" src={singleProduct?.image} alt={singleProduct?.title} /> */}
        {/* image optimization */}
        <Image src={singleProduct?.image} width={300} height={300}/>
        <div className="text-div">
          <p className="text-m">Title: {singleProduct?.title}</p>
          <p className="text-m">Price: ${singleProduct?.price}</p>
          <h4 className="text-m">Category: {singleProduct?.category}</h4>
          <p className="text-m">Description: {singleProduct?.description}</p>
          <p className="text-m">
            Rating: {getStars(singleProduct?.rating?.rate)} ({singleProduct?.rating?.rate}/5)
          </p>
        </div>
      </div>
    </div>
  );
}
