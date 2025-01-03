import SofaCard from "./sofaCard";


export default function  AddToCart ({onClose}: {onClose: () => void}) {


  return (
   <>
      <div className="py-3 px-5 w-[640px] backdrop-blur-xl border-2 border-black/10 rounded-lg top-[80px] fixed right-[16px] h-[840px]">
          <div className="flex flex-col items-start gap-5  ">
              <div className="text-center font-space-mono w-full ">The Art of Selection</div>
              <SofaCard />
          </div>
      </div>
   </>
  )
}

