import { useContext, useState } from "react"
import { CartContext } from "../../App"
import { ShoppingCart, X } from "lucide-react"

export default function Cart(){
    const {itemCount}=useContext(CartContext);
    const [showPopup, setShowPopup] = useState(false);
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className="relative">
          <div className="relative">
            {itemCount.length > 0 && (
              <div className="absolute top-2 left-4 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                {itemCount.length}
              </div>
            )}
            <ShoppingCart className="cursor-pointer" onClick={togglePopup} />
          </div>
          {showPopup && (
            <div className="absolute right-0 bg-white shadow-lg rounded-lg z-1 p-3">
              <button className="absolute top-1 right-2" onClick={togglePopup}>
                <X className="text-red-700 w-4 h-4" />
              </button>
              {itemCount.length === 0 ? (
                <p className="text-black">Tidak ada hp</p>
              ) : (
                itemCount.map((item) => (
                  <div key={item.id} className="flex mb-1 gap-5 bg-white shadow-2xl rounded-xl">
                    <div className="h-12 w-12 rounded items-center">
                      <img src={item.photo} alt={item.name} />
                    </div>
                    <p className="font-bold text-gray-800">{item.name}</p>
                    <p className="text-gray-700 text-xs">{item.price}</p>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      );
    }