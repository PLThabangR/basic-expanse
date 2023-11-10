import React from 'react'
import { categories } from './Expanse'
import {z} from 'zod';
import {zodResolver} from '@hook-form/resolvers/zod';
import {useForm} from 'react-hook-form'
const schema = z.object({
    description:z.string().min(3).max(50),
    amount:z.number().min(0.01).max(100_00),
    category:z.enum(categories)
})

type ExpanseFormData = z.infer<typeof schema>

const ExpanseForm = () => {
   const {register,handleSubmit,formState:{errors}} = useForm<ExpanseFormData>({resolver: zodResolver(schema)})
  return (
    <form>
        
        <input {...register('description')} id="description" type="text" placeholder="Description" className="form-control input input-bordered w-full max-w-xs p-2 m-2" />
        {
            errors.description && <div className="alert alert-error">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Error! Task failed successfully.</span>
          </div>

        }



        <select {...register('category')} id="category" className="select select-bordered w-full max-w-xs p-2 m-2" >
  <option value="" >All Category</option>
{   categories.map(category=>
     <option key={category} value={category}>{category}</option>
    )}
 
</select>
{
            errors.category && <div className="alert alert-error">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Error! Task failed successfully.</span>
          </div>

        }
        <input {...register('amount')} id="amount" type="Number" placeholder="Amount" className="form-control input input-bordered w-full max-w-xs p-2 m-2" />
        {
            errors.amount && <div className="alert alert-error">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Error! Task failed successfully.</span>
          </div>

        }
        <button className="btn btn-outline btn-primary w-full max-w-xs p-2 m-2">Submiut</button>
    </form>
  )
}

export default ExpanseForm