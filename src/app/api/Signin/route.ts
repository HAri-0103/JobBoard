import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json();
        const {username,emailid,password}= reqBody;
        const check = await prisma.user.findFirst({
            where:{
                emailid
            }
        });
        if(check){
            return NextResponse.json({
                error:"User is already exist"
            },{status:400});
        }
        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password,salt);
        await prisma.user.create({
            data: {
                username,
                emailid,
                password:hashPassword,
            },
        });
        return NextResponse.json({ success: true }); 
    } catch (error) {
        console.error(error); 
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    } finally {
        await prisma.$disconnect(); 
    }
}
