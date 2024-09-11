"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import {Roboto} from 'next/font/google'


  //font optimizing
  const roboto= Roboto({
    weight:'400',
    subsets:['latin'],
    display: 'swap'
  })
  
export default function Home() {
  const router = useRouter();

  // const navigate=(name)=>{
  //   router.push(name)
  // }
  return (
    <div className={styles.page}>
      <h2 className={roboto.className}>Basic Routing</h2> 
      <div className={styles.main}>
        <Link href="/login">
         Login
        </Link>
        <Link href="/about">
         About
        </Link>
        <Link href="/product">
         Product
        </Link>
      </div> 
      {/* <button onClick={() => navigate('/login')}>Go To Login</button>
      <button onClick={() => navigate('/about')}>Go To About</button> */}
    </div>
  );
}
