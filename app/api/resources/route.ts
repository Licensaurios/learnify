import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1";

  const res = await fetch(`https://api.openhands.space/resources/?page=${page}`);
  const data = await res.json();

  return NextResponse.json(data);
}

export async function POST(request: Request) {
//  const { searchParams } = new URL(request.url);
//  const page = searchParams.get("page") || "1";

  try {
      const postData = await request.json(); 
      const res = await fetch(`https://api.openhands.space/resources`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(postData)
      });
      const data = await res.json();
    
      return NextResponse.json(data);
    
  } catch (error) {
    return NextResponse.json({ error: "Failed to create resource" }, { status: 500 });
  }
}