
import { NextRequest, NextResponse } from "next/server";


//local array to simulate data stucture : could be a db 
const data = [
    { id: 1, name: "Produit 1", price: 10.99 },
    { id: 2, name: "Produit 2", price: 5.49 },
    { id: 3, name: "Produit 3", price: 20.20 }
];


export async function GET(request: Request, response: Response) {

    const url = new URL(request.url)
    const id = url.searchParams.get("id");

    if(id) {
      const produitId = parseInt(id,10);
      const product = data.find(p => p.id === produitId);

      if (!product){
        return new NextResponse("Nous n'avons pas trouver de produit pour cet id", {status :400})
      }

      return Response.json(product)
    }

    // SI aucun ID n'est specifie 
    else {
            return Response.json(data);
    }

}


export async function POST(req: NextRequest, res: NextResponse) {

    const body = await req.json(); // Assuming the new product's data is sent in the request body

    let { id, name, price } = body

    id = Math.floor(Math.random() * (20 - 10 + 1)) + 10;

    const newProduct = { id, name, price };

    // Optionally, validate newProduct's structure here
    if (!name || !price) {
        return new NextResponse('Le nom et le prix du produit sont obligatoire', { status: 400 });
    }

    data.push(newProduct); // Add the new product to the data array

    console.log(data)
    return new NextResponse("sucess", { status: 201 }); // Respond with the newly added product
}