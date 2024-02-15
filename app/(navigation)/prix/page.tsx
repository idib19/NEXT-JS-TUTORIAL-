import { PageProduits } from "@/components/prix";
import ProductForm from "@/components/produitForm";


export interface Produit {
    name: string;
    price: number;
}
export default async function pagePrix() {


    const response = await fetch('http://localhost:3000/api/produits')
    const data = await response.json();
   
    console.log(data);

    const readyData: Produit[] = data.map((item : Produit) => ({
        name: item.name,
        price: item.price
    }))

    return (
        <div>

            <PageProduits data={readyData} />
            
            <ProductForm />

        </div>
    )
}
