import { custumizeSelectProps } from "../types/types";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SplitText from "gsap-trial/SplitText" ;
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText) ;

export default function SelectSofa({ selectedSofa ,setSofa,hasAnimationPlayed ,setHasAnimationPlayed ,  sofas , onNext ,onBack }: custumizeSelectProps){
  const container = useRef(null) ;
  
  useGSAP(()=>{
    if(hasAnimationPlayed) return ;


    const tl = gsap.timeline() ;
    var splitSecondText = new SplitText('.secondText',{type: "words"}) ;

    tl.from(".firstText",{
        y: 20,
        autoAlpha: 0,
        duration: 1 ,
         ease: 'power3.out'
      }).from(splitSecondText.words ,{
        duration: 0.58,    
        autoAlpha: 0 ,
        stagger: 0.099 ,
        ease: 'power2.in'
    },'-=0.75').from(".thirdText",{
      y: 20,
      autoAlpha: 0,
      duration: 0.5 ,
      ease: 'power3.out'
    },"-=0.4").fromTo(".cards",{
      y: -10 ,
      autoAlpha: 0 ,
    },{
     y: 0 ,
      autoAlpha:1 ,
      stagger: 0.12 ,
      duration: 0.4 ,
      ease: 'power4.in'
    },"<").from(".btns",{
      y:10 ,
      autoAlpha: 0,
      duration: 0.5 ,
       ease: 'power2.inOut',
       onComplete: ()=> setHasAnimationPlayed && setHasAnimationPlayed(true)
    },"-=0.5")
     
},{scope: container})

    return(
        <div className='flex flex-col items-baseline py-[180px] h-full  gap-[270px] ' ref={container}>
        <div className='flex flex-col items-baseline gap-2'>
         <div className='firstText   text-black/60 text-[14px] font-normal uppercase leading-normal font-space-mono '>Your comfort matters.</div>
         <div className='secondText text-[32px] tracking-[-0.32px] leading-normal font-inter '>Your sofa, your rules <br /> Design your dream seat</div>
        </div>
        <div className='flex flex-col items-baseline  gap-2 w-full'>
         <div className=' thirdText text-black/60 text-[14px] font-normal uppercase leading-normal  font-space-mono'>Choose your Model</div>
         <div className='flex flex-col items-start  gap-3 w-full font-inter'>
         {sofas.map((sofa, index) => (
             <div 
               key={sofa.id}
               onClick={() => setSofa(index)}
               className={`cards  flex items-center gap-4 py-3 px-4  rounded-[6px] w-full cursor-pointer transition-all duration-300 
                 ${selectedSofa === index ? 'border-2 border-[#DF521B]' : 'border-2 border-transparent bg-[#F5F5F5]'}
                 ${hasAnimationPlayed ? 'visible' : 'invisible'}
                 `}

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
          <div className="btns flex items-center w-full justify-between">
              <div onClick={onBack} className=' py-1 px-5   text-black border-black border cursor-pointer rounded-md hover:bg-black/5 transition-colors '  >
               Back
              </div>
              <div onClick={onNext} className=' py-1 px-5 border border-transparent  bg-black text-white cursor-pointer rounded-md'  >
               Next
              </div>
          </div>
           
         </div>

        </div>
     </div>
    )
}