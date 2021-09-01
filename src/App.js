import React, { useState } from "react";
import ToDo from './ToDo';

const App = () => {
    const [inputList,setInputList]=useState("");
    const itemEvent =(event)=>{
        setInputList(event.target.value);
    }
    const [Items, setIems]= useState([]);
    const listOfItems=()=>{
        setItem((oldItems)=>{
            return [...oldItems, inputList]
        })
        setInputList("");         
    }
    const [Item,setItem]=useState([]);
    const deleteItem=(id)=>{
        console.log('del');
        setItem((oldItems)=>{
            return oldItems.filter((arrElem, index)=>{
                return index !==id;
            })
        })
    }
    return (
       <div>
        <h1>ToDo Application</h1>
        <input type="text" placeholder="Provide a Item" value={inputList} onChange={itemEvent} />
        <button onClick={listOfItems}> + </button>
        <ul>
            {/* <li>{inputList}</li> */}
        {   Item.map((itemval, index)=>
        {
            return (<ToDo
                key={index}
                id={index}
                text={itemval}
                onSelect={deleteItem} />)
        })
        }  
        </ul>
        </div>
    )
}
export default App;