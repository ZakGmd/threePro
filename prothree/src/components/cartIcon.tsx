import { ShoppingCart } from 'lucide-react';
import { useState } from 'react'
import AddToCart from './addToCard'

export default function CartIcon (){
  const [isCartOpen, setIsCartOpen] = useState(false)

 

  return (
    <div className="absolute right-4 top-7  ">
      <div className=' backdrop-blur-2xl bg-white/40 flex border backdrop-brightness-[0.80]  shadow-sm border-black/25 rounded-md hover:bg-white/30 transition-all duration-300 '>
        <button className='inline-flex items-center justify-center relative  pr-[14px] pl-3 py-2  '   onClick={() => setIsCartOpen(!isCartOpen)}>
        <ShoppingCart className="h-5 w-5 opacity-80 " color='black'/>
        <span className="absolute -top-1 -right-2 bg-[#f15c22] text-white  border border-black/25 rounded-full pb-[1.5px] pl-[0.5px] w-5 h-5 flex items-center justify-center text-[12px] ">
           1
          </span>
        
      </button>
      </div>
     
      {isCartOpen && <AddToCart onClose={() => setIsCartOpen(false)} state={isCartOpen} />}
    </div>
  )
}

