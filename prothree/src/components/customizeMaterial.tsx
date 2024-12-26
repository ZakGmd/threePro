import { useState } from "react";
import { CustomizeViewProps } from "../types/types";


  export default function CustomizeMaterial({ selectedSofa, onBack }: CustomizeViewProps) {
    const [setMaterial , selectedMaterial] = useState<number>(0 )
    console.log('sofa',{selectedSofa})
    return (
      <div className='flex flex-col items-baseline pt-[160px] gap-[120px]'>
        <div className='flex flex-col items-baseline gap-2'>
          <div className='text-black/60 text-[14px] font-normal uppercase leading-normal font-space-mono'>
            Customize your sofa
          </div>
          <div className='text-[32px] tracking-[-0.32px] leading-normal font-inter'>
            Make it yours
          </div>
        </div>
        <div className='flex flex-col gap-7 w-full'>
          <div className='flex flex-col gap-4'>
            <div className='text-black/60 text-[14px] font-normal uppercase leading-normal font-space-mono'>
              Chose frame material 
            </div>
            <div className='flex gap-3'>
              {[{name:'Wood' , color: ' #A1662F'}, {name:'Marble', color: ''},  {name:'Gold', color: ''}].map((frame) => (
                <div
                  key={frame.name}
                  className={`px-2 py-1  ${frame.name === 'Gold' ? 'px-[11px] hover:bg-[#d4af376e] ' : frame.name === 'Marble' ? 'hover:bg-[#e1e4e2]': 'hover:bg-[#a1662f83]'} hover:shadow-md font-normal rounded-full border cursor-pointer border-black/20 hover:border-black/40 duration-300 transition-all`}
               
                >{frame.name} </div> 
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='text-black/60 text-[14px] font-normal uppercase leading-normal font-space-mono'>
             Want some color ideas ?
            </div>
            <div className='flex gap-4'>
              {['#000000', '#DF521B', '#4A90E2'].map((color) => (
                <button
                  key={color}
                  className='w-10 h-10 rounded-full border-2 border-transparent hover:border-black transition-all'
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-black/60 text-[14px] font-normal uppercase leading-normal font-space-mono'>
              Choose Material
            </div>
            <div className='flex flex-col gap-3'>
              {[{id:1 ,name:'Leather'}, {id:2 ,name:'Velvet'}, {id:3 , name:'Linen'}, {id:4, name:'Cotton'}].map((material,index) => (
                <button
                  key={material.id}
                  onClick={()=> selectedMaterial(index)}
                  className={`
                    flex items-center gap-4 py-3 px-4 
                     rounded-[6px] 
                     border-2
                    hover:border-[#df531b] transition-all
                     duration-300
                    ${setMaterial === index ? 'border-[#DF521B] ': 'border-gray-100 ' }
                    `}
                >
                  {material.name}
                </button>
              ))}
            </div>
          </div>
          <div className='mt-8 flex justify-between items-center w-full'>
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