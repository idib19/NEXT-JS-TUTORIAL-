
interface Produit {
    name: string;
    price: number;
  }

  interface listProduitsProps {
    data : Produit[];
  }

export const ListProduits : React.FC<listProduitsProps> = ({data}) => {

    return (

        <div className="max-w-4xl mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold text-white-800 mb-4">Liste des produits</h1>
            <ul className="bg-white rounded-lg border border-gray-200 w-full text-gray-900">
                {data.map((produit, index) => (
                    <li key={index} className="px-6 py-2 border-b border-red-200 w-full rounded-t-lg">{produit.name} - ${produit.price}</li>
                ))}
            </ul>
        </div>
    )
}