"use client"
import React from 'react'
import {useRouter}  from "next/navigation";
import Link from 'next/link';


export default function Login() {
    const router=useRouter();
  return (
    <div>
      <h3>Login page</h3>
      <button onClick={()=>router.push('/')}>Go To Home</button><br/><br/>
      <Link href="/login/studentlogin">Student Login</Link><br/>
      <Link href="/login/teacherlogin">Teacher Login</Link>

    </div>
  )
}
