"use server";

import { EmployeeForm } from "@/components/employe-from";
import { db } from "@/lib/db";
import { employeeSchema } from "@/schemas";
import { validData } from "@hookform/resolvers/arktype/src/__tests__/__fixtures__/data.js";
import { error } from "console";
import { z } from "zod";

export const createEmployee = async (values: z.infer<typeof employeeSchema>) => {
    console.log(values)

    const validatedFields = employeeSchema.safeParse(values);

    if(!validatedFields.success){
        return{
            error: 'invalid feilds'
        }
    }
    const employee = await db.employee.create({
        data:{
            firstname:validatedFields.data?.firstName,
            lastname : validatedFields.data?.lastName,
            email : validatedFields.data?.email,
            phone : validatedFields.data?.phoneNumber
        }
    })

    console.log(employee)
}
