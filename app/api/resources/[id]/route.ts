import { NextResponse, NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const id = (await context.params).id;

  console.log(context)

  const res = await fetch(`https://api.openhands.space/resources/${id}`);
  const data = await res.json();
  return NextResponse.json(data);
}