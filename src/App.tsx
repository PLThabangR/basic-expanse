import { useState } from 'react'

import './App.css'
import ExpanseList from './components/ExpanseList'
import ExpanseFilter from './components/ExpanseFilter'
import ExpanseForm from './components/ExpanseForm'

function App() {
 
  const [selectedCategory,setSelectedCategory]=useState('')
 const [expenses,setExpanses] = useState ([
  {id:1,description:'Fridge',amount:7000,category:"Utilities"},
  {id:2,description:'SmartPhone',amount:2000,category:"Entertainment"},
  {id:3,description:'Shoes',amount:3000,category:"Clothes"}
 ])
 const expanseValue = selectedCategory ? expenses.filter(e => e.category ===selectedCategory): expenses;
  return (
    <>  
    <div className='container'>
    <ExpanseFilter onSelectCategory={category=>setSelectedCategory(category)}/>
    <ExpanseList expanses={expanseValue} onDelete={(id)=>{setExpanses(expenses.filter(e=> e.id !=id))}}/>
       <ExpanseForm/>
    </div>
    
     
    </>
  )
}

export default App
