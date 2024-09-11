import React from 'react'

export default function page() {
  return (
    <div>
      <h1>Dynamic MetaData</h1>
    </div>
  )
}

//
export function generateMetadata(){
    return{
        title:'Dynamic MetaData'
    }
}