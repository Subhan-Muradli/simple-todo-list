import { useState } from 'react'
import './App.css'

function App() {

  const [newItem, setNewItem] = useState("")
  const [items, setItems]=useState([])
const Add=()=>{
  const item={
    id: Math.floor(Math.random()*1000),
    value: newItem
  }
  setItems(oldItems =>[...oldItems, item])
  setNewItem("")
  console.log(item);
}
  return (
    <>
      <input
      style={{width:200, height:30, backgroundColor:'yellow'}}
      type='text'
      placeholder='add an item'
      value={newItem}
      onChange={(e)=>setNewItem(e.target.value)}
      />
      <button onClick={()=>Add()} style={{backgroundColor:'greenyellow', width:100, height:33, borderRadius:0, position:'relative', bottom:-2}}><span style={{position:'absolute', top:5, left:35}}>ADD</span></button>

      <ol type='A' style={{fontWeight:'bold'}}>
        
          {items.map(item=>{
            return <li key={item.id}>{item.value}</li>
            
            
          })}
        
      </ol>
    </>
  )
}

export default App
