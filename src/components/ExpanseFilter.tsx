import React from 'react'

interface Props{
    onSelectCategory : (category: string) =>void;
}
const ExpanseFilter = ({onSelectCategory}:Props) => {
  return (
    <div>
        <select className="select select-bordered w-full max-w-xs" onChange={(event)=> onSelectCategory(event.target.value)}>
  <option value="" >All Category</option>
  <option value="Entertainment">Entertainment</option>
  <option value="Clothes">Clothes</option>
  <option value="Utilities">Utilities</option>
</select>
    </div>
  )
}

export default ExpanseFilter