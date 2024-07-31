import User from "@/schemas/userSchema";
import { connectToDB } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req : NextRequest) {
    try{
        const body = await req.json();
        
        const {username, ...rest } = body;
        
        await connectToDB();
        
        const userNameExists = await User.findOne({
            username
        });

        if(rest.email){
            const emailExists = await User.findOne({
                email: rest.email
            })

            console.log(emailExists);

            if(emailExists != null && emailExists.username != username ){
                return new NextResponse(JSON.stringify({success: false, error: "Email already exists"}), { status: 408 });
            }
            else if(emailExists != null && emailExists.username == username ){
                return new NextResponse(JSON.stringify({success: false, error: "Already registered"}), { status: 400 });
            }
            
        }

        if(userNameExists != null ){
            return new NextResponse(JSON.stringify({success: false, error: "Username already exists"}), { status: 409 });
        }

        const user = await User.create({
            username,
            ...rest
        }
    )
        return new NextResponse(JSON.stringify({
            user
        }), { status: 200 });
    }
    catch (error) {
        return new NextResponse(JSON.stringify(error), {
            status: 500,
        });
    }
}