import AjoutUserForm from "@/components/users/addUserForm";
import { ListUsers } from "@/components/users/listeUsers";

interface User {
    first: string;
    last: string;
    born: number
}


export default async function pageUsers() {

    const response = await fetch(`http://localhost:3000/api/users`, {
        method: 'GET',
        headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
        }
    });

    const data = await response.json();

    const donnee: User[] = data.map((item: User) => ({
        first: item.first,
        last: item.last,
        born: item.born
    }))



    return (
        <div>
            <ListUsers data={donnee} />
            <AjoutUserForm />
        </div>
    )
}
