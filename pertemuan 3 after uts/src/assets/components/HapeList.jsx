import { useContext } from "react";
import { CartContext } from "../../App";
import { ShoppingCart } from "lucide-react";

export default function HapeList({hape}) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="flex gap-5 flex-wrap mt-12 justify-center">
      {hape.map((item) => (      
        <div key={item.id} className="flex flex-col gap-5 items-center bg-white shadow-2xl p-6 rounded-xl">
          <img
            src={item.photo}
            alt={item.name}
            className="mb-4 h-32 w-32"
          />
          <h2 className="text-lg font-bold text-gray-800 mb-2">{item.name}</h2>
          <p className="text-md text-gray-700 mb-2">{item.price}</p>
          <button
            className="bg-slate-300 text-black px-1 py-1 rounded mt-2"
            onClick={() => addToCart(item)}
          >
            <ShoppingCart />
          </button>
        </div>
      ))}
    </div>
  );
}
