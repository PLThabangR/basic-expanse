import React from 'react'
import  Expanse  from './Expanse';

const ExpanseList = () => {
    interface Props{
        expanse:string[]
    }
  return (
    <div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Description</th>
        <th>Amount</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
        <td>
        <button className="btn btn-error">Delete</button>
        </td>
        
      </tr>
     
    
    </tbody>
  </table>
</div>



    </div>
  )
}

export default ExpanseList