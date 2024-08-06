import React from 'react'

export default function CommentList({allComments}) {
  return (
    <div data-testid="commentListDiv" className='w-50 m-auto mt-3'>
        {
            allComments.length===0 && <h2>No Comments</h2>
        }
        
        <ul>
           {
            allComments.map((e)=>{
                return <li key={e?.id}>{e.text}</li>
            })
           }
        </ul>     
    </div>
  )
}
