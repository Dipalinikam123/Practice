"use client"
import React from 'react'

export default function  Lecture({params}) {
    console.log("----catch all segment",params)
  return (
    <div>
      <h2>Day {params.lecture[0]} of College</h2><br/>
      <h2>Lecture {params.lecture[1]}   </h2>
    </div>
  )
}
