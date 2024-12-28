import { custumizeSelectProps } from "../types/types";


export default function SelectSofa({ selectedSofa ,setSofa , sofas , onNext ,onBack }: custumizeSelectProps){

    return(
        <div className='flex flex-col items-baseline pt-[160px] gap-[180px]'>
        <div className='flex flex-col items-baseline gap-2'>
         <div className='text-black/60 text-[14px] font-normal uppercase leading-normal font-space-mono '>Your comfort matters.</div>
         <div className='text-[32px] tracking-[-0.32px] leading-normal font-inter '>Your sofa, your rules <br /> Design your dream seat</div>
        </div>
        <div className='flex flex-col items-baseline  gap-2 w-full'>
         <div className='text-black/60 text-[14px] font-normal uppercase leading-normal  font-space-mono'>Choose your Model</div>
         <div className='flex flex-col items-start  gap-3 w-full font-inter'>
         {sofas.map((sofa, index) => (
             <div 
               key={sofa.id}
               onClick={() => setSofa(index)}
               className={`flex items-center gap-4 py-3 px-4  rounded-[6px] w-full cursor-pointer transition-all duration-300 
                 ${selectedSofa === index ? 'border-2 border-[#DF521B]' : 'border-2 border-transparent bg-[#F5F5F5]'}`}
             >
               <input 
                 type="radio" 
                 name="sofa" 
                 className="appearance-none w-4 h-4 rounded-full border-[2px] border-gray-300 
                   checked:bg-[#DF521B] checked:border-gray-100 checked:border-[4px] cursor-pointer transition-all duration-75
                 checked:outline outline-[#DF521B] outline-1 "
    
                 checked={selectedSofa === index}
                 onChange={() => setSofa(index)}
               />
               <div className='flex flex-col items-baseline gap-2'>
                 <div className='text-[16px] leading-5 font-normal tracking-[-0.16px]'>{sofa.name}</div>
                 <div className='text-[13px] font-normal leading-normal tracking-[-0.13px] text-black/70'>{sofa.dimensions}</div>
               </div>
             </div>
           ))}
         </div>
         <div className='mt-10 flex w-full justify-between '>
          <div className="flex items-center w-full justify-between">
              <div onClick={onBack} className=' py-3 px-4  text-black border-black border cursor-pointer rounded-[48px] hover:bg-black/5 transition-colors '  >
               Back
              </div>
              <div onClick={onNext} className=' py-3 px-4 bg-black text-white cursor-pointer rounded-[48px]'  >
               Next
              </div>
          </div>
           
         </div>

        </div>
     </div>
    )
}