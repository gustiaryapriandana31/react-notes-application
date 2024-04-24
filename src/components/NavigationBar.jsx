export default function Navbar() {
    return (
        <nav className="w-full bg-yellow-600 text-white font-semibold">
            <div className="flex flex-row justify-between mx-16 items-center h-16">
                <h1 className="text-2xl font-bold">NOTES APPLICATION</h1>
                <ul className="flex flex-row justify-between items-center gap-5 text-lg mr-12">
                    <li className="p-3 hover:cursor-pointer hover:text-yellow-500 hover:bg-white hover:rounded-lg">About</li>
                    <li className="cursor-pointer bg-white text-yellow-500 p-3 rounded-lg">Login</li>
                </ul>
            </div>     
        </nav>
    )
}