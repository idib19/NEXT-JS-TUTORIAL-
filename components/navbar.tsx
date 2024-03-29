import Link from "next/link"

export default function NavBar() {

    return (
        <div className="flex  space-x-4  text-white ">
            <button>
                <Link href="/">
                    HOME
                </Link>
            </button>
            <button>
                <Link href="/produits">
                    PRODUITS
                </Link>
            </button>
            <button>
                <Link href="/dashboard">
                    DASHBOARD
                </Link>
            </button>
            <button>
                <Link href="/inscription">
                    INSCRIPTION
                </Link>
            </button>
            <button>
                <Link href="/users">
                    UTILISATEURS
                </Link>
            </button>
        </div>
    )
}