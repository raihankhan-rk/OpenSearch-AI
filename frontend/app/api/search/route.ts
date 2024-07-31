import User from "@/schemas/userSchema";
import { connectToDB } from "@/utils/db";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req : NextRequest) {
    try{
        const body = await req.json();
        const { query, user } = body;
        const response = await axios.post('https://opensearch-ai-production.up.railway.app/api/search', {
            query: query,
            user: user
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'api-key': 'HellYeaH'
            }
          });
          console.log(response.data);
        return new NextResponse(JSON.stringify(response.data), { status: 200 });
    }
    catch(err:any){
        return new NextResponse(JSON.stringify(err), { status: 500 });
    }    
}