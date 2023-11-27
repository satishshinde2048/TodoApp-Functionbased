import { useState } from "react";



const AddTodo = (props) => {
   let [value,setValue]=useState("");

   let onsubmit=(event)=>{
    event.preventDefault();
    props.AddNewTodo(value);
    setValue('');
   }
   
   let onchange=(event)=>{
    event.preventDefault();
    setValue(event.target.value);
   }

    return (
        <div className="container">
            <form onSubmit={onsubmit}>
                <div className="input-group">
            <input type="text" className="form-control" value={value} 
            onChange={onchange}></input>
            <div className="input-group-append">
                <button className="btn btn-success">Add Todo</button>
                </div>
                </div>
            </form>
        </div>
    );

}
export {AddTodo};