import { NextRequest, NextResponse } from "next/server"
import { addUser } from "@/db-actions/addUser";

export async function POST(req: NextRequest, res: NextResponse) {

    const body = await req.json(); // Assuming the new product's data is sent in the request body

    let { first, last, born } = body


    // validation
    if (!first || !last || !born) {
        return new NextResponse("Il faut que tous les champs soient specifiees", { status: 404 })
    }

    else {
        addUser(first, last, born)
    }



    return new NextResponse("Utilisateur Creer", { status: 200 }); // Respond with the newly added user
}