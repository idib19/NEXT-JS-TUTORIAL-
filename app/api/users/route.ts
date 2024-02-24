import { NextRequest, NextResponse } from "next/server"
import { addUser, getUser } from "@/db-actions/user";

interface User {
    first: string;
    last: string; 
    born: number;
}

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const data = await getUser();

        const transformedData: User[] = data?.map((doc: any) => {
            const docData = doc.data(); // Assuming doc.data() returns the document's data
            return {
              first: docData.first,
              last: docData.last, // Assuming you want 'last' to map to 'name'
              born: docData.born
            };
          }) || [];


        return NextResponse.json(transformedData)

    } catch (error) {
        console.log('[USERS_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }



}

export async function POST(req: NextRequest, res: NextResponse) {

    try {

        const body = await req.json(); // Assuming the new product's data is sent in the request body

        let { first, last, born } = body

        // validation
        if (!first || !last || !born) {
            return new NextResponse("Il faut que tous les champs soient specifiees", { status: 404 })
        }


        const docRef = addUser(first, last, born)

        // Respond with the newly added user
        return NextResponse.json(docRef);

    } catch (error) {
        console.log('[USERS_POST]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
}