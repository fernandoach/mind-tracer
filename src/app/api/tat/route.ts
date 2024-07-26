import { NextResponse, NextRequest } from "next/server"

export async function GET(request: NextRequest){
    try {
        return NextResponse.json({ "status": 200, "message": "TAT page GET" })
    } catch (error) {
        return NextResponse.json(error)
    }
}

export async function POST(request: NextRequest){
    try {
        return NextResponse.json({ "status": 200, "message": "TAT page POST" })
    } catch (error) {
        return NextResponse.json(error)
    }
}