import { EmployeeForm } from '@/components/employe-from'
import { FormWrapper } from '@/components/form-wrapper'
import React from 'react'

const EmployeeCreatePage = () => {
    return (
        <div className='flex justify-center items-center w-screen h-screen'>
            <FormWrapper title="Create a new Employee">
                <EmployeeForm/>
            </FormWrapper>
        </div>
    )
}

export default EmployeeCreatePage