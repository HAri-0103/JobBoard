import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient()

export async function POST(req:NextRequest){
try {
    const reqBody = await req.json();
    const {username,password} = reqBody;

    const existuser = await prisma.user.findFirst({
        where:{
            username:username
        }
    })
    if(!existuser){
        return NextResponse.json({
            error:"user doesn't exist"
        },{status:400});
    }
    const validpassword = await bcryptjs.compare(password,existuser.password);
    if(!validpassword){
        return NextResponse.json({
            error:"Incorrect Password"
        },{status:400});
    }

    const tokenData = {
        id : existuser.id,
        username:existuser.username,
        emailid:existuser.emailid
    }
    const token = await jwt.sign(tokenData, process.env.Token_Key!, { expiresIn: "1d" });
    const response = NextResponse.json({
        message:"Login Successful",
        success:true,
    })
    response.cookies.set("token",token,{
        httpOnly:true
    })
    return response;
} catch (error) {
    return NextResponse.json({
        error
    },{status:400});
}finally{
    await prisma.$disconnect();
}

}