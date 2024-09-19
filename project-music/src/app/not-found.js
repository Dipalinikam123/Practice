import Link from "next/link";

export default function NotFound() {
  return (
    <div className='w-full flex flex-col justify-center items-center h-[70vh]'>
      <h1>THis Page Not Found</h1>
      <Link href='/' className='mt-4 border rounded-md px-3 py-1' >Go To Home</Link>
    </div>
  )
}
