import React, { useState, useEffect } from 'react';
import '../App.css';

//get items from localstorage
const getLocalItems = () =>{
let list = localStorage.getItem('lists');
console.log(list);
if(list){
    return JSON.parse(localStorage.getItem('lists'));
}else{
    return([]);
}
}

const Todo = () => {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState(getLocalItems());

    const addItem = () => {
     if(!inputData){

     }else{
         setItems([...items, inputData]);
         setInputData('')
     }

    }
  
    const delItem = (id) =>{
        console.log(id);
      const updatedItems = items.filter((ele,ind) => {
       return ind != id;
      });
      setItems(updatedItems);
    }
// add data to local storage
useEffect(() => {
  localStorage.setItem('lists',JSON.stringify(items))
},[items]);

    return(
        <>
        <div className="main-div">
        <h1>Todo List</h1> 

        <div className="addItems">
          <input type="text" value={inputData} onChange={(e) => setInputData(e.target.value)} placeholder="add items" />
          <i className="fas fa-plus"onClick={addItem}></i>
        </div>

        <div className="showItems">

            {
                items.map((elem,ind)=> {
                  return(
                    <div className="eachItem" key={ind}>
                    <h4>{elem}</h4>
                    <i className="fas fa-trash-alt" onClick={() => delItem(ind)}></i>
                  </div>
                  )
                })
            }
       
        </div>

        {/* <div className="showItems">
            <button className="btn btn-secondary"><span>Remove all</span></button>
        </div> */}

        </div>
        </>
    )
}



export default Todo