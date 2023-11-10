import React from 'react'
import { categories } from './Expanse'
import {z} from 'zod';
import {useForm} from 'react-hook-form'
const schema = z.object({
    description:z.string().min(3).max(50),
    amount:z.number().min(0.01).max(100_00),
    category:z.enum(categories)
})

type ExpanseFormData = z.infer<typeof schema>

const ExpanseForm = () => {
  return (
    <form>
        <input id="description" type="text" placeholder="Description" className="form-control input input-bordered w-full max-w-xs p-2 m-2" />
        <select id="category" className="select select-bordered w-full max-w-xs p-2 m-2" >
  <option value="" >All Category</option>
{   categories.map(category=>
     <option key={category} value={category}>{category}</option>
    )}
 
</select>
        <input id="amount" type="Number" placeholder="Amount" className="form-control input input-bordered w-full max-w-xs p-2 m-2" />
        <button className="btn btn-outline btn-primary w-full max-w-xs p-2 m-2">Submiut</button>
    </form>
  )
}

export default ExpanseForm