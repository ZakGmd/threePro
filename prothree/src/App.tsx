

import './App.css'

function App() {
 

  return (
    <>
     <div className='flex items-start gap-10 h-[100vh] w-full '>
      <div className='h-full ml-[168px] pl-[32px] pr-[28px] border-r border-l border-gray-300 '>
        <div className='flex flex-col items-baseline pt-[160px] gap-[180px]'>
           <div className='flex flex-col items-baseline gap-2'>
            <div className='text-black/60 text-[14px] font-normal uppercase leading-normal '>Your comfort matters.</div>
            <div className='text-[32px] tracking-[-0.32px] leading-normal '>Your sofa, your rules <br /> Design your dream seat</div>
           </div>
           <div className='flex flex-col items-  gap-2 w-full'>
            <div className='text-black/60 text-[14px] font-normal uppercase leading-normal'>Choose your Model</div>
            <div className='flex flex-col items-start  gap-3 w-full'>
              <div className='flex items-center gap-4 py-3 px-4 bg-[#F5F5F5] rounded-[6px] w-full  '>
                <input type="radio" name="inpt" id="redio" />
                <div className='flex flex-col items-baseline gap-2'>
                  <div className='text-[16px] leading-5'>Monkey Sofa — Limited edition</div>
                  <div>3.5m x 2.4m with custom colors</div>
                </div>
              </div>
              <div className='flex items-center gap-4 py-3 px-4 bg-[#F5F5F5] rounded-[6px] w-full  '>
                <input type="radio" name="inpt" id="redio" />
                <div className='flex flex-col items-baseline gap-2'>
                  <div className='text-[16px] leading-5'>Monkey Sofa — Limited edition</div>
                  <div>3.5m x 2.4m with custom colors</div>
                </div>
              </div>
              <div className='flex items-center gap-4 py-3 px-4 bg-[#F5F5F5] rounded-[6px] w-full  '>
                <input type="radio" name="inpt" id="redio" />
                <div className='flex flex-col items-baseline gap-2'>
                  <div className='text-[16px] leading-5'>Monkey Sofa — Limited edition</div>
                  <div>3.5m x 2.4m with custom colors</div>
                </div>
              </div>
            </div>
            <div className='mt-10 flex w-full justify-end'>
              <div className=' py-3 px-4 bg-black text-white rounded-[48px]'>
                <div>Next</div>
                <div></div>
              </div>
            </div>

           </div>
        </div>

      </div>
      <div>canvas</div>

     </div>
     
    </>
  )
}

export default App
