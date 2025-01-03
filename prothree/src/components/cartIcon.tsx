import { ShoppingCart } from 'lucide-react';
import { useState } from 'react'
import AddToCart from './addToCard'

export default function CartIcon (){
  const [isCartOpen, setIsCartOpen] = useState(true)

 

  return (
    <div className="absolute right-4 top-7  ">
     <button className='inline-flex items-center justify-center relative border border-black/25 rounded-md pr-[14px] pl-3 py-2 hover:bg-black/10 transition-all duration-300 '   onClick={() => setIsCartOpen(!isCartOpen)}>
        <ShoppingCart className="h-5 w-5 opacity-80 " />
        <span className="absolute -top-1 -right-2 bg-[#f15c22] text-white  border border-black/25 rounded-full pb-[1.5px] pl-[0.5px] w-5 h-5 flex items-center justify-center text-[12px] ">
           0
          </span>
        
      </button>
      {isCartOpen && <AddToCart onClose={() => setIsCartOpen(false)} />}
    </div>
  )
}

