
export default function layout({children,right,left}) {
  const isSibebar=true
  return (
    <div>
    {/* {right} */}
    {children}
    {/* {left} */}

    {
      isSibebar ? right : left 
    }
    </div>
  )
}

