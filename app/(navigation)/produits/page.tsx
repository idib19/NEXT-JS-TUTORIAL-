import { ListProduits } from "@/components/listeProduits";
import AjoutProduitForm from "@/components/ajoutProduitForm";

interface Produit {
  name: string;
  price: number
}


export default async function pagePrix() {

  const response = await fetch(`http://localhost:3000/api/produits`);

  const data = await response.json();

  const donnee: Produit[] = data.map((item: Produit) => ({
    name: item.name,
    price: item.price
  }))



  return (
    <div>
      <ListProduits data={donnee} />
      <AjoutProduitForm />
    </div>
  )
}
