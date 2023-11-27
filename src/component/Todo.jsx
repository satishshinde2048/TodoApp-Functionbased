import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const Todo = (props) => {
    
    let [show,setShow]=useState(false);
    let [value,setValue]=useState(props.todo.value);

    let onshow=(event)=>{
     setShow(true);
    }
    
    let onchange=(event)=>{
     props.handledone(props.todo.id);  
    }
   
    let onclick=(event)=>{
    props.ondelete(props.todo.id);
    }

    let onclick1=(event)=>{
        setShow(false);
    }

    let onclick2=(event)=>{
        setShow(false);
        props.onedit({
            id:props.todo.id,
            value:value
        })
    }
    
    let onchange1=(event)=>{
        setValue(event.target.value);
    }

    return (
        <div className="container">
        <div className="row mb-2"> 
           <div className="col-lg-1">
           {props.index}
           </div>
           <div className="col-lg-1">
           <input type="checkbox"  checked={props.todo.isDone} onChange={onchange}></input>
           </div>
           <div className="col-lg-6" style={{textDecoration: props.todo.isDone ?'line-through' :""}}>
           {props.todo.value}
           </div>
           <div className="col-lg-2">
           <button className="btn btn-warning" onClick={onshow}>edit</button>
           </div>
           <div className="col-lg-2"> 
           <button className="btn btn-danger" onClick={onclick}>delete</button>
           </div>
          
          
          <Modal show={show}>
            <Modal.Header>Edit Todo</Modal.Header>
            <Modal.Body>
                <input type="text " className="form-control" 
                placeholder={value} onChange={onchange1}></input>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-secondary" onClick={onclick1}>cancel</button>
                <button className="btn  btn-success" onClick={onclick2}>done</button>
            </Modal.Footer>
          </Modal>
        </div>
        </div>
    );

}
export {Todo};