import React from 'react'

export default function MultipleElement() {
  return (
    <>
    {/* getByRole */}
    <div>
        <button>click Me 1</button><br/>
        <button>click Me 2</button><br/>

        <label htmlFor='userName'>Name</label>
        <input type='text' id='userName'/><br/>
        <label htmlFor='userAge'>Age</label>
        <input type='text' id='userAge'/>
        <div role='dummy'>gjfkjh</div>
    </div>

{/* getAllByRole */}
    <div>
        <button>click</button>
        <button>click</button>
        <button>click</button>
        <button>click</button>
        <button>click</button>
        <button>click</button>
        <button>click</button>
    </div>
    </>
  )
}
