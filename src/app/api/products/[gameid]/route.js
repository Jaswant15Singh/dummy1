import { connectionStr } from "@/util/db";
import { Product } from "@/util/model/products";
import mongoose, { connect } from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request,content){

let productId=content.params.gameid;
let filter={_id:productId}
let payload=await request.json();
await mongoose.connect(connectionStr);
let data=await Product.findOneAndUpdate(filter,payload);
return NextResponse.json({result:"success"})
}



export async function GET(request,content){
let productId=content.params.gameid;
let value={_id:productId};
await mongoose.connect(connectionStr);
let data=await Product.findById(value);
return NextResponse.json(data,{result:"success"})
}


export async function DELETE(request,content){
    let productId=content.params.gameid;
    const value={_id:productId};
    await mongoose.connect(connectionStr);
    const data=await Product.deleteOne(value);
    return NextResponse.json({result:"success"})
}