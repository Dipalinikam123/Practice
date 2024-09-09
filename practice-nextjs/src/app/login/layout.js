"use client"
import Link from 'next/link'
import React from 'react'
import './login.css'
import { usePathname } from 'next/navigation'
export default function Layout({ children }) {
    const pathName = usePathname();
    console.log("===", pathName)
    return (
        <div>
            {pathName !== "/login/teacherlogin" ? <ul className='login-menu'>
                <li>
                    <Link href='/login'>Login</Link>
                </li>
                <li>
                    <Link href='/login/studentlogin'>Student Login</Link>
                </li>
                <li>
                    <Link href='/login/teacherlogin'>Teacher Login</Link>
                </li>
            </ul> : 
            <Link href="/login">Go To Login</Link>
            }
            {children}
        </div>
    )
}
