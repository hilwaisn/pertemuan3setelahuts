import { createContext } from "react";
import Header from "./assets/components/Header";
import { useState } from "react";
import HapeList from "./assets/components/HapeList";

const hape=[
  {
    id:1,
    photo: "https://images.samsung.com/is/image/samsung/p6pim/id/2202/gallery/id-galaxy-a53-5g-a536-sm-a536elbgxid-531435843?$650_519_PNG$",
    name:"Samsung Galaxy A53",
    price:"Rp. 2799000",
  },
  {
    id:2,
    photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThb8JkKqUlCB9KPbm16-F8t7C0omhUpeyR0g&s",
    name:"Samsung Galaxy A05",
    price:"Rp. 1999000",
  },
  {
    id:3,
    photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXNJ3oRi7XOqZq-XryAEsLsdlm_cwzNCN6qg&s",
    name:"Samsung Galaxy M33",
    price:"Rp. 1999000",
  },
];


export const CartContext = createContext();
export default function App() {
  const [itemCount, setItemCount] = useState([]);
  const addToCart = (item) => {
    setItemCount([...itemCount, item]);
  };
  return (
    // <CartContext.Provider value={itemCount}>
    //   <Header/>
    //   <button onClick={()=>{
    //     alert(`Angka ${numberRef.current}`);
    //     numberRef.current++;
    //   }}>
    //     Tampilkan Angka
    //   </button>
    //   <button onClick={() => setItemCount(itemCount+1)}>+</button>
    // </CartContext.Provider>
      <CartContext.Provider value={{ itemCount, addToCart }}>
        <Header />
        
        <HapeList hape={hape} /> 
      </CartContext.Provider>
    );
  }