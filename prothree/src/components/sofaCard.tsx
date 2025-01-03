

export default function SofaCard() {

    return(
       <>
          <div className="flex items-center gap-4 w-full border-b border-black/15 py-4">
            <div>
          <img src="/sofaa.png" alt="sofa img" width={180} height={180} />
            </div>
            <div className="flex  items-center justify-between w-full">
                <div className="flex flex-col gap-1 items-start font-inter text-[#0c0a09]">
                    <div className=" font-medium  ">Monkey Sofa</div>
                    <div className="text-[14px] leading-5">Classic Victorian sofa with light oak frame <br /> and khaki velvet. Handcrafted wooden details.</div>
                </div>
                <div className="flex flex-col items-start gap-2 justify-between font-inter ">
                    <div className=" font-medium ">Price:</div>
                    <div>$35000</div>
                </div>
            </div>
          </div>
       </>
    )
}