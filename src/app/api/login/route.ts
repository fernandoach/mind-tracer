import { NextResponse, NextRequest } from "next/server"

type ResponseData = {
    status: number;
    message: string;
}

export async function GET(request: NextRequest) {
    try {
        return NextResponse.json({ status: 200, message: "Login page GET" })
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
}

    export async function POST(request: NextRequest) {
    try {
        
        return NextResponse.json({ "status": 200, "message": "Login page POST" })
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
}