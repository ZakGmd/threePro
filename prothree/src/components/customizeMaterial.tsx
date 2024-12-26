import { useState } from "react";
import { CustomizeViewProps } from "../types/types";


  export default function CustomizeMaterial({ selectedSofa, onBack }: CustomizeViewProps) {
    const [setMaterial , selectedMaterial] = useState<number>(0 )
    console.log('sofa',{selectedSofa})
    return (
      <div className='flex flex-col items-baseline pt-[160px] gap-[120px] '>
        <div className='flex flex-col items-baseline gap-2'>
          <div className='text-black/60 text-[14px] font-normal uppercase leading-normal font-space-mono'>
            Customize your sofa
          </div>
          <div className='text-[32px] tracking-[-0.32px] leading-normal font-inter'>
            Make it yours
          </div>
        </div>
        <div className='flex flex-col gap-7 w-full'>
          <div className='flex flex-col gap-2'>
            <div className='text-black/60 text-[14px] font-normal uppercase leading-normal font-space-mono'>
              Chose frame material 
            </div>
            <div className='flex gap-3'>
              {[{name:'Wood' , color: ' #A1662F'}, {name:'Marble', color: ''},  {name:'Gold', color: ''}].map((frame) => (
                <div
                  key={frame.name}
                  className={`px-2 py-1 text-[14px] font-inter  ${frame.name === 'Gold' ? 'px-[11px] hover:bg-[#d4af376e] ' : frame.name === 'Marble' ? 'hover:bg-[#e1e4e2]': 'hover:bg-[#a1662f5e]'} hover:shadow-md font-normal rounded-full border cursor-pointer border-black/20 hover:border-black/40 duration-300 transition-all`}
               
                >{frame.name} </div> 
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-black/60 text-[14px] font-normal uppercase leading-normal font-space-mono'>
              Chose seat color 
            </div>
            <div className='flex items-center gap-3'>
              {[{name:'Light Khaki' , color: ' #D6C9AF'}, {name:'Emerald Green', color: '#022c22'},  {name:'Dark Charcoal', color: '#0c0a09'}].map((frame) => (
                <div
                  key={frame.name}
                  className={`flex items-center font-inter  gap-1 px-2 py-1  ${frame.name === 'Emerald Green' ? ' hover:bg-[#022c2238] ' : frame.name === 'Dark Charcoal' ? 'hover:bg-[#0c0a0938]': 'hover:bg-[#d6c9af67]'} hover:shadow-md font-normal rounded-full border cursor-pointer border-black/20 hover:border-black/40 duration-300 transition-all`}
                  
                >
                 <div
                  className='w-3 h-3   rounded-full'
                  style={{ backgroundColor: frame.color }}
                  />
                  <div className="text-[14px]  leading-normal">{frame.name}</div>
                </div> 
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-black/60 text-[14px] font-normal uppercase leading-normal font-space-mono'>
              Chose pillow color 
            </div>
            <div className='flex items-center gap-3'>
              {[{name:'Light Khaki' , color: ' #D6C9AF'}, {name:'Emerald Green', color: '#022c22'},  {name:'Dark Charcoal', color: '#0c0a09'}].map((frame) => (
                <div
                  key={frame.name}
                  className={`flex items-center font-inter  gap-1 px-2 py-1  ${frame.name === 'Emerald Green' ? ' hover:bg-[#022c2238] ' : frame.name === 'Dark Charcoal' ? 'hover:bg-[#0c0a0938]': 'hover:bg-[#d6c9af67]'} hover:shadow-md font-normal rounded-full border cursor-pointer border-black/20 hover:border-black/40 duration-300 transition-all`}
                  
                >
                 <div
                  className='w-3 h-3   rounded-full'
                  style={{ backgroundColor: frame.color }}
                  />
                  <div className="text-[14px]  leading-normal">{frame.name}</div>
                </div> 
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-black/60 text-[14px] font-normal uppercase leading-normal font-space-mono'>
              Chose embroidery color 
            </div>
            <div className='flex items-center gap-3'>
              {[{name:'Metallic Gold' , color: '#D4AF37'}, {name:'Cool Silver', color: '#C0C0C0'},  {name:'Soft Cream', color: '#F9F9E0'}].map((frame) => (
                <div
                  key={frame.name}
                  className={`flex items-center font-inter  gap-1 px-2 py-1  ${frame.name === 'Emerald Green' ? ' hover:bg-[#022c2238] ' : frame.name === 'Dark Charcoal' ? 'hover:bg-[#0c0a0938]': 'hover:bg-[#d6c9af67]'} hover:shadow-md font-normal rounded-full border cursor-pointer border-black/20 hover:border-black/40 duration-300 transition-all`}
                  
                >
                 <div
                  className='w-3 h-3   rounded-full'
                  style={{ backgroundColor: frame.color }}
                  />
                  <div className="text-[14px]  leading-normal">{frame.name}</div>
                </div> 
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-black/60 text-[14px] font-normal uppercase leading-normal font-space-mono'>
              Choose Material
            </div>
            <div className='flex items-center gap-3'>
              {[{id:1 ,name:'Leather',imgPath:'./leather.jpg'}, {id:2 ,name:'Velvet',imgPath:'./velvet.jpg'}, {id:3 , name:'Linen',imgPath:'./linen.jpeg'}].map((material,index) => (
               <div 
                 key={material.id}
                 className="flex items-center gap-1 font-inter hover:shadow-md font-normal rounded-full border cursor-pointer border-black/20 hover:border-black/40 duration-300 transition-all px-2 py-1"
                 onClick={()=> selectedMaterial(index)}
                >
                 <img src={material.imgPath} className="h-3 w-3 rounded-full " />
                 <div className="text-[14px]  leading-normal">{material.name}</div>
               </div>
              ))}
            </div>
          </div>
          <div className='my-8 flex justify-between items-center w-full'>
            <button
              onClick={onBack}
              className='py-3 px-4 border border-black rounded-[48px] hover:bg-black/5 transition-colors'
            >
              Back
            </button>
            <button
              className='py-3 px-4 bg-black text-white rounded-[48px] hover:bg-black/80 transition-colors'
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    )
  }