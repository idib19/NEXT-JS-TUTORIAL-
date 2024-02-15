import { Produit } from "@/app/(navigation)/prix/page";
import { NextRequest, NextResponse } from "next/server";

//local array to simulate data stucture : could be a db 
const data = [
    { name: "Produit 1", price: 10.99 },
    { name: "Produit 2", price: 5.49 },
    { name: "Produit 3", price: 20.20 }
];


export async function GET(request: Request, response: Response) {

    return Response.json(data);
}


export async function POST(req : NextRequest , res: NextResponse){

    const body = await req.json(); // Assuming the new product's data is sent in the request body

    const {name, price } = body

    const newProduct = { name, price };

    // Optionally, validate newProduct's structure here
    if (!name || !price) {
        return new NextResponse('Le nom et le prix du produit sont obligatoire', {status : 400});
    }

    data.push(newProduct); // Add the new product to the data array

    console.log(data)
    return new NextResponse("sucess", {status: 201}); // Respond with the newly added product
}