import React from 'react'

export  function TestJsQuery() {
  return (
    <>
    <div id='div-id'>TestJsQuery</div>
    <div className='class-id'>Hello, purvi</div>
    </>
  )
}

export  function QueryingWithinEle(params) {
    //child element testing with parent element using Within keyWord

    return(
        <div>hello world
            <p>hii</p>
            <span>bye</span>
            <p>see you</p>
        </div>
    )
}