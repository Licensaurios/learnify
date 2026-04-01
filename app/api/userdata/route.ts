import { NextResponse } from "next/server";
//no ocupa request parameters
export async function GET() {
    //fetch comun, nonparams
    const res = await fetch("https://api.openhands.space/api/community/my");
    const data = await res.json();
    //paque otra vez .json ni perra idea xD
    return NextResponse.json(data);
}
