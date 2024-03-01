import { NextRequest, NextResponse } from "next/server"
import { addUser, getUser } from "@/db-actions/user";

// INTERFACE USER 
interface User {
    first: string;
    last: string; 
    born: number;
}

// FONCTION GET 
export async function GET(req: NextRequest, res: NextResponse) {
    try {
        // Recuperation des donnees 
        const data = await getUser();

        // Transformation des donnees 
        const transformedData: User[] = data?.map((doc: any) => {
            const docData = doc.data(); // Assuming doc.data() returns the document's data
            return {
              first: docData.first,
              last: docData.last, //Assuming you want 'last' to map to 'name'
              born: docData.born
            };
          }) || [];

          //ENVOI DES DONNEES AU CLIENT 
        return NextResponse.json(transformedData)


    } catch (error) {
        console.log('[USERS_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }



}

// FONCTION POST 
export async function POST(req: NextRequest, res: NextResponse) {

    try {

        // Recuperation des donnees 
        const body = await req.json(); 

        let { first, last, born } = body

        // validation
        if (!first || !last || !born) {
            return new NextResponse("Il faut que tous les champs soient specifiees", { status: 404 })
        }

        //ECRITURE DANS LA BD 
        const docRef = addUser(first, last, born)

        // Respond with the newly added user
        return NextResponse.json(docRef);

    } catch (error) {
        console.log('[USERS_POST]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
}