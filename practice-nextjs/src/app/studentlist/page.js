import Link from 'next/link'
import React from 'react'

export default function StudentList() {
  return (
    <div>
      <ul>
        <li><Link href='studentlist/1'>abcd</Link></li>
        <li><Link href='studentlist/2'>efgh</Link></li>
        <li><Link href='studentlist/3'>ijkl</Link></li>
        <li><Link href='studentlist/4'>mnop</Link></li>
        <li><Link href='studentlist/5'>qrst</Link></li>
      </ul>
    </div>
  )
}
