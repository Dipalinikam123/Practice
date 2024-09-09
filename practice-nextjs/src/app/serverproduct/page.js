import React from 'react'
import './serverproduct.css'
async function apiData() {
    const data = await fetch("https://fakestoreapi.com/products")
    const data2 = await data.json()
    return data2
}
export default async function ServerProduct() {
    const product = await apiData()

    console.log("====product", product)


    return (
        <div className='main-div'>
            {
                product.map((e, i) => {
                    return (
                        <div key={i} className='card-div' role='button'>
                            <img src={e?.image}  />
                            <p>Title:- {e?.title}</p>
                            <h4>category:- {e?.category}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}
