import { useState } from "react";


const Sample = () => {
    let [number,setNumber]=useState(3);
    let [name,setName]=useState("raj");
    setTimeout(()=>{
       setNumber(4);
       setName("satish");
    },2000)
    return (
        <div>
         <h1>Number : {number}</h1>
         <h1>Name : {name}</h1>
        </div>
    );
}
export {Sample};

