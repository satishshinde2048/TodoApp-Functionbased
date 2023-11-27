import { useState } from "react";
import {Todo} from "./Todo";
import {AddTodo} from "./Addtodo";

const Todos = () => {
    let [todos,setTodos]=useState(
        localStorage.getItem('todos')
        ?JSON.parse( localStorage.getItem('todos'))
        :[]
    )

    let AddNewTodo=(todoValue)=>{ 
       if(todoValue){
        let todosarr=[...todos];
        todosarr.push({
            id:new Date().getTime(),
            value:todoValue,
            isDone:false
        })
        setTodos(todosarr);
        localStorage.setItem('todosarr',JSON.stringify(todosarr));
    }
    };

    let onDelete=(todoId)=>{
    let todosarr=todos.filter((item)=>item.id!==todoId)
    setTodos(todosarr);
    localStorage.setItem('todosarr',JSON.stringify(todosarr));
   };

     let HandleDone=(todoId)=>{
           let todosarr=[...todos];
           todosarr.map((item)=>{
            if(item.id===todoId){
               item.isDone=!item.isDone;
            }
            return item;
           })
           setTodos(todosarr);
           localStorage.setItem('todosarr',JSON.stringify(todosarr)); 
     };

     let onEdit=(todo)=>{
        let todosarr=[...todos]; 
        todosarr.map((item)=>{
         if(item.id===todo.id){
            item.value=todo.value;
         }
         return item;
        })
        setTodos(todosarr);
        localStorage.setItem('todosarr',JSON.stringify(todosarr)); 
     }

    return (
        <div>
            {
        todos?.length===0
        ?<h2 className="mb-5" style={{textAlign:"center"}}>Todos not present</h2>
        :todos.map((Item,index)=>{
           return <Todo key={index} index={index+1} todo={Item}
           ondelete={onDelete} handledone={HandleDone} onedit={onEdit}></Todo>
        })
            }
        <AddTodo AddNewTodo={AddNewTodo}></AddTodo>
        </div>
    );

}
export {Todos};