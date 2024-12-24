interface CustomizeViewProps {
    selectedSofa: {
      id: number;
      name: string;
      dimensions: string;
      modelPath: string;
    };
    onBack: () => void;
  }
  
  export default function CustomizeView({ selectedSofa, onBack }: CustomizeViewProps) {
    console.log('sofa',{selectedSofa})
    return (
      <div className='flex flex-col items-baseline pt-[160px] gap-[60px]'>
        <div className='flex flex-col items-baseline gap-2'>
          <div className='text-black/60 text-[14px] font-normal uppercase leading-normal font-space-mono'>
            Customize your sofa
          </div>
          <div className='text-[32px] tracking-[-0.32px] leading-normal font-inter'>
            Make it yours
          </div>
        </div>
        <div className='flex flex-col gap-8 w-full'>
          <div className='flex flex-col gap-4'>
            <div className='text-black/60 text-[14px] font-normal uppercase leading-normal font-space-mono'>
              Choose Color
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
          <div className='flex flex-col gap-4'>
            <div className='text-black/60 text-[14px] font-normal uppercase leading-normal font-space-mono'>
              Choose Material
            </div>
            <div className='flex flex-col gap-3'>
              {['Leather', 'Velvet', 'Linen', 'Cotton'].map((material) => (
                <button
                  key={material}
                  className='flex items-center gap-4 py-3 px-4 bg-[#F5F5F5] rounded-[6px] hover:bg-[#E5E5E5] transition-all'
                >
                  {material}
                </button>
              ))}
            </div>
          </div>
          <div className='mt-10 flex justify-between items-center w-full'>
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