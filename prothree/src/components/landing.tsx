

type LandingProps = {
    onNext: () => void;
}
export default function Landing({onNext}:LandingProps) {

    return(
        <>
          <div className="flex flex-col items-start ml-[120px]  gap-10 ">
            <div className="flex flex-col items-baseline gap-2">
                <div className="text-black/60 text-[14px] font-normal uppercase leading-normal font-space-mono ">Design Your Heirloom</div>
                <div className="text-[32px] tracking-[-0.32px] leading-normal font-inter ">Consider our sofas an heirloom piece <br /> that will last for generations.</div>
            </div>
            <div className="flex items-center gap-3">
                <div className='py-1 px-5 border border-black rounded-md hover:bg-black/5 transition-colors cursor-pointer'>More</div>
                <div onClick={onNext} className='py-1 px-5 border border-transparent bg-black text-white border-black rounded-md hover:bg-black/90 transition-colors cursor-pointer'>Select</div>
            </div>

          </div>
        </>
    )
}