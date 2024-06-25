import { connectionStr } from "@/util/db";
import { Product } from "@/util/model/products";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionStr);
    const data=await Product.find();
    return NextResponse.json({result:data});
}


export async function POST(request){
let payload=await request.json();
let product=new Product(payload);
let data=await product.save();
return NextResponse.json({result:"Added Successfully",success:true});
}