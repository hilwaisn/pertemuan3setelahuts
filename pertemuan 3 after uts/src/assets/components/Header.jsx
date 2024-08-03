import Cart from "./Cart";

export default function Header() {
    return (
        <header className="flex items-center justify-between px-4 py-4 shadow-lg">
            <h1 className="text-blue-500 font-bold text-2xl">Getch Phone Store</h1>
            {/* <h1>Home</h1>
            <h1>About</h1> */}
            <div className="flex gap-4">
                <Cart />
                <button className="bg-blue-500 text-white font-bold px-4 h-8 rounded-xl">Login</button>
            </div>
        </header>
    );
}