import { sendEmail } from "@/lib/sendMail";
import { NextResponse } from "next/server";

export async function GET(req,{params}){
    const {message}= params
    console.log(message);
    try {
        sendEmail({
            subject:message,
            body:'91Club Alert'
          })
        return NextResponse.json({message:"Send Alert Successful"},{status:200})
    } catch (error) {
        return NextResponse.json({message:"Send Alert Failed"},{status:500})        
    }
}