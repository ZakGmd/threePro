import SofaCard from "./sofaCard";


export default function  AddToCart ({onClose , state}: {onClose: () => void , state: boolean }) {


  return (
   <>
      <div className={`py-3 px-6 w-[640px] backdrop-blur-3xl bg-white/40 backdrop-contrast-125 ${state === true ? 'animate-fadeIn' : state ===false ?'animate-fadeOut' :''}  flex flex-col  shadow-sm border-2 border-black/10 rounded-lg top-[80px] fixed right-[16px] h-[840px]`}>
      
          <div className="flex flex-col items-start gap-5  w-full h-full ">
              <div className="text-center font-space-mono w-full tracking-[-0.12px] ">The Art of Selection</div>
              <SofaCard />
              <SofaCard />
              <SofaCard />
             
          </div>
          <div className="flex flex-col items-center justify-start border-t border-black/10 pt-4 gap-3 ">
                <div className="flex items-center justify-between w-full font-inter">
                    <div className="text-[16px]">Total</div>
                    <div className=" font-medium ">$39000</div>
                </div>
                <div className="flex flex-col items-start justify-start w-full font-inter gap-2">
                     <div className="text-[14px] text-[#0c0a0993]  font-space-mono">Tax and shipping not included </div>
                     <div className=" py-4 text-center w-full shadow-[0_2px_3px_rgba(0,0,0,0.4),inset_0px_1.5px_0px_rgba(255,255,255,0.3)]  bg-black brightness-125 text-white rounded-md hover:bg-black/90 transition-all duration-300 cursor-pointer">Continue</div>
                </div>
            </div>
      </div>
   </>
  )
}

