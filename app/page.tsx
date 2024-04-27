import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
const Home = () => {
 
    return (
      <div className='flex flex-col items-center justify-center w-screen bg-[#f0f9f2] h-screen'>
          <div className='text-3xl font-sans font-bold mb-8'>IMPLEMENTING EMPLOYEE FORM AND CRUD OPERATION USING PRISMA POSTGRESQL</div>
          <Button asChild variant="outline" className='bg-[#2a7144] text-white w-40 text-center'>
          <Link href="/employee">
              Go to employes page
          </Link>
          </Button>
      </div>  )
}

export default Home