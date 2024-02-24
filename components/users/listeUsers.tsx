import Link from "next/link";

interface User {
    first: string;
    last: string;
    born: number
  }

interface listUserProps {
    data: User[];
}

export const ListUsers: React.FC<listUserProps> = ({ data }) => {

    return (

        <div className="max-w-4xl mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold text-white-800 mb-4">Liste des utilisateurs</h1>
            <ul className="bg-white rounded-lg border border-gray-200 w-full text-gray-900">
                {data.map((user) => (
                    <Link href={`/produits/${user.first}`}>
                    
                        <li key={user.born} className="px-6 py-2 border-b border-red-200 w-full rounded-t-lg">
                            {user.first} - {user.last}
                        </li>
                        
                    </Link>
                ))}
            </ul>
        </div>
    )
}