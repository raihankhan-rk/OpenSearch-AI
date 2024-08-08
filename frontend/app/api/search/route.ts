import User from "@/schemas/userSchema";
import { connectToDB } from "@/utils/db";
import axios from "axios";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req : NextRequest) {
    try{
        const body = await req.json();
        const { query, user } = body;

        const session = await getToken({
          req,
          secret: process.env.NEXTAUTH_SECRET
        });

        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const response = await axios.post(`${process.env.RK_BACKEND_URL}/api/search`, {
            query: query,
            user: user
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'api-key': process.env.RK_API_KEY
            }
          });
        return new NextResponse(JSON.stringify(response.data), { status: 200 });
    }
    catch(err:any){
        return new NextResponse(JSON.stringify(err), { status: 500 });
    }    
}