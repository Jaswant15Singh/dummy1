"use client"
import React, { useEffect, useState } from "react";
import "../../style.css";

const page = (props) => {

    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [company,setCompany]=useState("");
    const [category,setCategory]=useState("");

useEffect(()=>{
getProd()
},[])
 //Git example
const getProd=async ()=>{
     let productId=props.params.update;
let data=await fetch("http://localhost:3000/api/products/65e3174c00de9c9319c9f4e5");
data=await data.json(); 
console.log(data);
if(data.success){
console.log("done");
setName(data.name);
setPrice(data.price);
setCompany(data.company);
setCategory(data.category);
}
}
  return (
    <div className="add_main">
      <h1>Add your game here</h1>

      <div className="input_box">
        <input type="text" placeholder="enter name"  value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <input type="text" placeholder="enter price" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
        <input type="text" placeholder="enter company" value={company} onChange={(e)=>{setCompany(e.target.value)}}/>
        <input type="text" placeholder="enter category" value={category} onChange={(e)=>{setCategory(e.target.value)}}/>

        <button>Add game</button>
      </div>
    </div>
  );
};

export default page;
