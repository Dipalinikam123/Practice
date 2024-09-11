"use client"
import Script from 'next/script'
import React from 'react'

export default function UserDetailLocation() {
  return (
    <div>
        <Script src='/location.js' onLoad={()=>{
            console.log("location loaded")
        }}/>
      <h1>Get User Location</h1>
    </div>
  )
}
