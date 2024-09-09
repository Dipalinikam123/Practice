"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import "./product.css"

export default function Product() {
    const [detail, setDetails] = useState([]);

    useEffect(() => {
        // Define an async function within useEffect
        const fetchData = async () => {
            try {
                const data = await fetch("https://fakestoreapi.com/products");
                const data2 = await data.json();
                console.log("====data", data2);
                setDetails(data2);  // Set the parsed JSON data
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <Link href='/'>GO TO HOME</Link><br/><br/>
            <div className='main-div'>
           
            {
                detail.map((e, i) => {
                    return (
                        <Link key={i}  href={`product/${e?.id}`}>
                            <div className='card-div'>
                                <img src={e?.image}/>
                                <p>Title:- {e?.title}</p>
                                <h4>category:- {e?.category}</h4>
                            </div>
                        </Link>
                    
                    )
                })
            }
        </div>
        </div>
    )
}

