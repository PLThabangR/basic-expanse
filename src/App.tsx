import { useState } from 'react'

import './App.css'
import ExpanseList from './components/ExpanseList'

function App() {
 const [expenses,setExpanses] = useState ([
  {id:1,description:'Fridge',amount:7000,category:"Utilities"},
  {id:2,description:'SmartPhone',amount:2000,category:"Tech"},
  {id:3,description:'Shoes',amount:3000,category:"Clothing"}
 ])

  return (
    <>
       <ExpanseList expanses={expenses} onDelete={(id)=>{setExpanses(expenses.filter(e=> e.id !=id))}}/>
    </>
  )
}

export default App
