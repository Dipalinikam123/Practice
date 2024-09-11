"use client"
import React from 'react'

export default function PriceButton({price}) {
  return (
    <div>
      <button onClick={()=>alert(price)}>Check Price</button>
    </div>
  )
}
