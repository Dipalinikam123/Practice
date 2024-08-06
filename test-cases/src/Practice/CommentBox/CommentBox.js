import React, { useState } from 'react'

export default function CommentBox({setComments}) {
    const [text,setText]= useState('')
    const [checked,setChecked]= useState(false)

    const commentHandler=()=>{
      setComments((prev)=>[...prev,{text}])
      setText('')
    }
  return (
    <div data-testid="commentDiv" >
        <form className=' w-50 m-auto'> 
        <input type='text' placeholder='Type comment here' value={text} className='w-100 p-1 mb-3' onChange={(e)=>setText(e?.target?.value)}/><br/>
        <input type='checkbox' id='checkbox1' defaultChecked={checked}  onChange={()=>setChecked(!checked)}/>
        <label htmlFor='checkbox1' className='mb-3'>I agree to terms and condition</label><br/>
        <button type='button' disabled={!checked || !text} onClick={commentHandler}>Comment</button>
        </form>
        
    </div>
  )
}
