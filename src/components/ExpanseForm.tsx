import React from 'react'
import { categories } from './Expanse'

const ExpanseForm = () => {
  return (
    <form>
        <input type="text" placeholder="Description" className="form-control input input-bordered w-full max-w-xs p-2 m-2" />
        <select className="select select-bordered w-full max-w-xs p-2 m-2" >
  <option value="" >All Category</option>
{   categories.map(category=>
     <option key={category} value={category}>{category}</option>
    )}
 
</select>
        <input type="text" placeholder="category" className="form-control input input-bordered w-full max-w-xs p-2 m-2" />
        <button className="btn btn-outline btn-primary w-full max-w-xs p-2 m-2">Submiut</button>
    </form>
  )
}

export default ExpanseForm