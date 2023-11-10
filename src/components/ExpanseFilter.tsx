import React from 'react'
import { categories } from './Expanse';

interface Props{
    onSelectCategory : (category: string) =>void;
}
const ExpanseFilter = ({onSelectCategory}:Props) => {
  return (
    <div>
        <select className="select select-bordered w-full max-w-xs" onChange={(event)=> onSelectCategory(event.target.value)}>
  <option value="" >All Category</option>
{   categories.map(category=>
     <option key={category} value={category}>{category}</option>
    )}
 
</select>
    </div>
  )
}

export default ExpanseFilter