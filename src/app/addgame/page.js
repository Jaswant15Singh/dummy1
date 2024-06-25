"use client"
import React, { useState } from "react";
import "../../app/style.css";

const page = () => {

    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [company,setCompany]=useState("");
    const [category,setCategory]=useState("");

    const addGame=async()=>{
        let data=await fetch("http://localhost:3000/api/products",
        {
            method:"Post",
            body:JSON.stringify({name,price,company,category})
        })
        data=await data.json();
if(data.success){
    alert("game has been added");
}

if(data.success){
    setName("");
    setPrice("");
    setCompany("");
    setCategory("");
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

        <button onClick={addGame}>Add game</button>
      </div>
    </div>
  );
};

export default page;
