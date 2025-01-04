import { CustomizeViewProps } from "../types/types";


  export default function CustomizeMaterial({ selectedSofa, onBack ,materialChange , material }: CustomizeViewProps) {
    const frames = [
      {
        id:1 ,
        name:'Wood', 
        color: '#a1662f5e',
        texture: '/woood.png'
      }, 
      {
        id: 2 ,
        name:'Marble', 
        color:'#e1e4e2',
        texture: '/marble.jpg'
      }, 
      {
        id: 3 ,
        name:'Gold', 
        color:'#d4af376e',
        texture: '/gold.jpeg'
      }
    ];
    const seatColors = [
      {
        id:1 ,
        name:'Light Khaki', 
        color:'#D6C9AF' , 
        bgClr: '#d6c9af67' 
      }, 
      {
        id: 2 ,
        name:'Emerald Green', 
        color:'#022c22', 
        bgClr:'#022c2238'
      }, 
      {
        id: 3 ,
        name:'Dark Charcoal', 
        color:'#0c0a09',
        bgClr:'#0c0a0938'
      }
    ];
    const pillowColors = [
      {
      id:1 ,
      name:'Light Khaki', 
      color:'#D6C9AF',
      bgClr: '#d6c9af67' 
    }, 
    {
      id: 2 ,
      name:'Emerald Green', 
      color:'#022c22' ,
      bgClr:'#022c2238'
    }, 
    {
      id: 3 ,
      name:'Dark Charcoal', 
      color:'#0c0a09' ,
      bgClr:'#0c0a0938' 
    }
  ];
    const embroideryColors = [
      {
        id:1 ,
        name:'Metallic Gold', 
        color:'#D4AF37' ,
        bgClr:'#d4af3754'
      }, 
      {
        id: 2 ,
        name:'Cool Silver', 
        color:'#C0C0C0' ,
        bgClr: '#c0c0c063'
      }, 
      {
        id: 3 ,
        name:'Soft Cream', 
        color:'#F9F9E0' ,
        bgClr:'#d6c9af67'
      }
    ];
    const materiales = [
      {
        id:1 ,
        name:'Leather',
        imgPath:'./leather.jpg'
      }, 
      {
        id:2 ,
        name:'Velvet',
        imgPath:'./velvet.jpg'
      }, 
      
    ]
   
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
               frame material 
            </div>
            <div className='flex gap-3'>
              {frames.map((frame) => (
                <div
                  key={frame.id}
                  className={`px-2 py-1 text-[14px] font-inter tracking-wide 
                     ${frame.name === 'Gold' ? 'px-[11px] hover:bg-[#d4af376e]  ' : frame.name === 'Marble' ? 'hover:bg-[#e1e4e2]': 'hover:bg-[#a1662f5e]'}
                     ${material.frame === frame.color ? `bg-[${frame.color}] shadow-md` : 'bg-trasparent'}
                     hover:shadow-md font-normal rounded-full border cursor-pointer border-black/20 hover:border-black/40 duration-300 transition-all`}
                  onClick={() => {
                    materialChange('frame', frame.color)
                    materialChange('texture', frame.texture)
                  }}
                  style={{ backgroundColor: material.frame === frame.color ? frame.color : '' }}
                >{frame.name} </div> 
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-black/60 text-[14px] font-normal uppercase leading-normal font-space-mono'>
               seat color 
            </div>
            <div className='flex items-center gap-3'>
              {seatColors.map((seat) => (
                <div
                  key={seat.id}
                  className={`
                  flex items-center font-inter  gap-1 px-2 py-1 
                  ${seat.name === 'Emerald Green' ? ' hover:bg-[#022c2238] ' : seat.name === 'Dark Charcoal' ? 'hover:bg-[#0c0a0938]': 'hover:bg-[#d6c9af67]'} 
                   ${material.seatColor === seat.color ? `  shadow-md` : ''}
                  hover:shadow-md font-normal rounded-full border cursor-pointer border-black/20 hover:border-black/40 duration-300 transition-all`}
                  style={{
                    backgroundColor: material.seatColor === seat.color ? seat.bgClr : ''
                  }}
                  onClick={() => materialChange('seatColor', seat.color)}
                >
                 <div
                  className={`w-5 h-5 mb-[1px]  ${seat.name === 'Light Khaki' ? '' : 'brightness-150' }   rounded-full`}
                  style={{ backgroundColor: seat.color ,
                    
                  }}
                  />
                  <div className="text-[14px] tracking-wide   leading-normal">{seat.name}</div>
                </div> 
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-black/60 text-[14px] font-normal uppercase leading-normal font-space-mono'>
               pillow color 
            </div>
            <div className='flex items-center gap-3'>
              {pillowColors.map((pillow) => (
                <div
                  key={pillow.name}
                  className={`flex items-center font-inter   gap-1 px-2 py-1  
                    ${pillow.name === 'Emerald Green' ? ' hover:bg-[#022c2238] ' : pillow.name === 'Dark Charcoal' ? 'hover:bg-[#0c0a0938]': 'hover:bg-[#d6c9af67]'} 
                     ${material.pillowColor === pillow.color ? `  shadow-md` : ''}
                    hover:shadow-md font-normal rounded-full border cursor-pointer border-black/20 hover:border-black/40 duration-300 transition-all`}
                  style={{ backgroundColor: material.pillowColor === pillow.color ? pillow.bgClr : '' ,
                  
                  }}
                  onClick={() => materialChange('pillowColor', pillow.color)}
                >
                 <div
                  className={`w-5 h-5 mb-[1px]  ${pillow.name === 'Light Khaki' ? '' : 'brightness-150' }  rounded-full`} 
                  style={{ backgroundColor: pillow.color ,
                     
                   }}
                  />
                  <div className="text-[14px] tracking-wide  leading-normal">{pillow.name}</div>
                </div> 
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-black/60 text-[14px] font-normal uppercase leading-normal font-space-mono'>
               embroidery color 
            </div>
            <div className='flex items-center gap-3'>
              {embroideryColors.map((embroidery) => (
                <div
                  key={embroidery.name}
                  style={{ backgroundColor: material.embroideryColor === embroidery.color ? embroidery.bgClr : '' }}
                  className={`flex items-center   font-inter  gap-1 px-2 py-1  
                    ${embroidery.name === 'Metallic Gold' ? ' hover:bg-[#d4af3762] ' : embroidery.name === 'Cool Silver' ? 'hover:bg-[#c0c0c063]': 'hover:bg-[#d6c9af67]'} 
                     ${material.embroideryColor === embroidery.color ? `  shadow-md` : ''}
                    hover:shadow-md font-normal rounded-full border cursor-pointer border-black/20 hover:border-black/40 duration-300 transition-all`}
                  onClick={() => materialChange('embroideryColor', embroidery.color)}
                >
                 <div
                  className={`w-5 h-5 mb-[1px] ${embroidery.name === 'Soft Cream' ? ' brightness-[0.97]  ' : ''}  rounded-full`}
                  style={{ backgroundColor: embroidery.color ,
                           filter: material.embroideryColor === '#F9F9E0' ? 'brightness(1.02)' : '' ,
                           transition: 'all 0.25s ease'
                 
                    
                  }}
                  />
                  <div className="text-[14px] tracking-wide   leading-normal">{embroidery.name}</div>
                </div> 
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-black/60 text-[14px] font-normal uppercase leading-normal font-space-mono'>
              Sofa Material
            </div>
            <div className='flex items-center gap-3'>
              {materiales.map((material,index) => (
               <div 
                 key={material.id}
                 className="flex items-center gap-1 font-inter hover:shadow-md font-normal  rounded-full border cursor-pointer border-black/20 hover:border-black/40 duration-300 transition-all px-2 py-1"
                 onClick={() => materialChange('material', material.name)}
                 

                >
                 <img src={material.imgPath} className="h-5 w-5 mb-[1px] rounded-full " />
                 <div className="text-[14px] tracking-wide leading-normal">{material.name}</div>
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