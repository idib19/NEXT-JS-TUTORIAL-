import { ListProduits } from "@/components/listeProduits";
import AjoutProduitForm from "@/components/ajoutProduitForm";

interface Produit {
  id: number;
  name: string;
  price: number
}


export default async function pagePrix() {

  const response = await fetch(`http://localhost:3000/api/produits`, {
    method: 'GET',
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    }
  });

  const data = await response.json();

  const donnee: Produit[] = data.map((item: Produit) => ({
    id: item.id,
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
