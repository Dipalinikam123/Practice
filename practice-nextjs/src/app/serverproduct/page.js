import React from 'react'
import './serverproduct.css'
import PriceButton from './pricebutton'
import Link from 'next/link'
async function apiData() {
    const data = await fetch("https://fakestoreapi.com/products")
    const data2 = await data.json()
    return data2
}
export default async function ServerProduct() {
    const product = await apiData()

    console.log("====product", product)


    return (
        <div className='server-div'>
            <Link href="/">Go To Home</Link>
            <div className='main-div'>
                {
                    product.map((e, i) => {
                        return (
                            <div key={i} className='card-div' role='button'>
                                <img src={e?.image} className='text-m' />
                                <p className='text-m'>Title:- {e?.title}</p>
                                <h4 className='text-m'>category:- {e?.category}</h4>
                                <PriceButton price={e?.price} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
