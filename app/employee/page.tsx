import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const EmployeePage = () => {
    return (
        <div className='flex flex-col items-center justify-center w-screen bg-[#f0f9f2] h-screen'>
            <div className='text-3xl font-sans font-bold mb-8'>Create a new Employee in dataBase</div>
            <Button asChild variant="outline" className='bg-[#2a7144] text-white w-40 text-center'>
            <Link href="/employee/create">
                Create
            </Link>
            </Button>
        </div>
    )
}

export default EmployeePage