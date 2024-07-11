import { log } from 'console';
import React, { useState } from 'react';
// we create an interface to include the name variable
interface props  {
     name:string
}
// we pass the props to the function greeting
const Greeting = ({ name }:props) => { 

const [value,setValue]=useState("")

const handleChange = (e:any)=> {
     setValue(e.target.value)
}
console.log(value);

return <div>
    <p>Hello, {name}!</p> 
    <select onChange={handleChange}>
     <option value="Tunis">Tunis</option>
     <option value="Sousse">Sousse</option>
     <option value="Bizerte">Bizerte</option>
    </select>
     </div>;
 };
 export default Greeting;
 