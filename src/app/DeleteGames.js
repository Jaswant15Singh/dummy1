"use client"
import React from 'react'

const DeleteGames = (props) => {
const  deleteGame=async()=>{
    let data=fetch("http://localhost:3000/api/products/"+props.id,{
        method:"Delete"
    });
    data=await (await data).json;
    console.log(data);
}


  return (
    <div>
   <button onClick={deleteGame}>Delete</button>

    </div>
  )
}

export default DeleteGames
