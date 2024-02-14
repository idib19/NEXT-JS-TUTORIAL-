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
                <Link href="/prix">
                    PRIX
                </Link>
            </button>
            <button>
                <Link href="/dashboard">
                    DASHBOARD
                </Link>
            </button>
        </div>
    )
}