"use client"
import React from 'react'

export default function Student({params}) {
    console.log('--param',params)
  return (
    <div>
      Student {params.student}  detail 
    </div>
  )
}
