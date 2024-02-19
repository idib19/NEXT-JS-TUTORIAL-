
export default async function Pageproduit({params} : {params : {produitId : string}}) {

const produitId = params.produitId

const response = await fetch(`http://localhost:3000/api/produits?id=${produitId}`,{
    method : 'GET',
    headers: {
        'Cache-Control' : 'no-cahe, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
    }
})

const data = await response.json();

    return (

        <div>
            <h1> Produit N : {data.id} </h1>
            <h1> Nom: {data.name}  </h1>
            <h2> Prix : {data.price} </h2>
        </div>

    )
}