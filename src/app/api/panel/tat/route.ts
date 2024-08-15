import { NextResponse, NextRequest } from "next/server"

export async function GET(request: NextRequest){
    try {
        const response = await fetch('/api/panel/idb', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        return NextResponse.json({ "status": 200, response })
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