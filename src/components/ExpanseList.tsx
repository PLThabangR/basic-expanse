import  {Expanse}  from './Expanse';

interface Props{
    expanses:Expanse[];
    onDelete:(id:number) => void;
}
const ExpanseList = ({expanses,onDelete}:Props) => {
   
  return (
    <div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>Description</th>
        <th>Amount</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {/* Rendering the array*/}
      

        {expanses.map( expanse => <tr key={expanse.id}>
            <td>{expanse.description}</td>
            <td>{expanse.amount}</td>
            <td>{expanse.category}</td>
              <td>
              <button className="btn btn-error" onClick={()=>onDelete(expanse.id)}>Delete</button>
                </td>  
           
        </tr>) }
       
      
       
       
      
        
     
     
    
    </tbody>
    <tfoot>
            <td>Total</td>
            <td>R{expanses.reduce((total,expense)=> expense.amount+total,0).toFixed(2)}</td>
            <td>Total</td>
            <td>Total</td>
            <td>Total</td>

    </tfoot>
  </table>
</div>



    </div>
  )
}

export default ExpanseList