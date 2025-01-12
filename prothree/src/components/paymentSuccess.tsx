import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function PaymentSuccess({total} : {total : number}){
    const [currentTime, setCurrentTime] = useState(new Date());
    const navigate = useNavigate();
    const handleContinue = () => {
       
        navigate('/');
      };

    const formatTime = (date : Date) => {
        return new Intl.DateTimeFormat('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: true,
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        }).format(date);
      };
    return (
        <>
        <div className="flex flex-col font-inter items-start gap-2 h-[500px] max-w-[580px] w-full ">
            <div className="px-4 py-5 flex flex-col bg-[#F9F9F9] items-center gap-4 rounded-xl w-full">
                <div className="relative w-[48px] h-[48px] bg-green-200/80 rounded-full flex items-center justify-center">
                   <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000" stroke-width="1"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM7.53044 11.9697C7.23755 11.6768 6.76268 11.6768 6.46978 11.9697C6.17689 12.2626 6.17689 12.7374 6.46978 13.0303L9.46978 16.0303C9.76268 16.3232 10.2376 16.3232 10.5304 16.0303L17.5304 9.03033C17.8233 8.73744 17.8233 8.26256 17.5304 7.96967C17.2375 7.67678 16.7627 7.67678 16.4698 7.96967L10.0001 14.4393L7.53044 11.9697Z" fill="#22c55e"></path></svg>
                </div>
                <div className="flex flex-col items-center gap-1 w-full">
                    <div className="text-[14px] tracking-[0.12px] leading-5 text-black/70">Payment Success!</div>
                    <div className="font-medium text-[20px]">USD {total.toLocaleString()}</div>
                </div>
            </div>
            <div className="px-4 py-5 flex bg-[#F9F9F9] flex-col items-start gap-4 rounded-xl w-full">
                <div className=" font-medium text-[#0A090B] text-[18px] leading-normal ">Payment Details</div>
                <div className="flex flex-col items-start gap-3 border-b border-dashed pb-4 border-black/10 w-full">
                    <div className="flex items-center justify-between w-full">
                        <div className="text-black/40">Ref Number</div>
                        <div className="font-medium text-[#0A090B] ">7001482910210</div>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <div className="text-black/40">Payment Status</div>
                        <div className="flex items-center gap-1">
                          <svg width="18px" className="mb-[1px]" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#3FD093" stroke-width="1"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM7.53044 11.9697C7.23755 11.6768 6.76268 11.6768 6.46978 11.9697C6.17689 12.2626 6.17689 12.7374 6.46978 13.0303L9.46978 16.0303C9.76268 16.3232 10.2376 16.3232 10.5304 16.0303L17.5304 9.03033C17.8233 8.73744 17.8233 8.26256 17.5304 7.96967C17.2375 7.67678 16.7627 7.67678 16.4698 7.96967L10.0001 14.4393L7.53044 11.9697Z" fill="#22c55e"></path></svg>
                          <div className="font-medium text-[#0A090B]">Success</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <div className="text-black/40">Payment Time</div>
                        <div className="font-medium text-[#0A090B]">{formatTime(currentTime)}</div>
                    </div>

                </div>
                <div className="flex items-center justify-between w-full ">
                    <div className="text-black/40">Total Payment</div>
                    <div className="font-medium text-[#0A090B]">${total.toLocaleString()}</div>

                </div>
            </div>
            <div className="px-4 py-5 flex bg-[#F9F9F9] hover:bg-[#E8E8E8]/50 transition-all duration-300 cursor-pointer items-center justify-between rounded-xl w-full">
                <div className="flex items-center gap-4 w-full">
                    <div className="flex items-center justify-center bg-black/5 rounded-full w-[52px] h-[48px]">
                    <svg width="32px" height="32px" stroke-width="0.8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000B3"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#000000B3" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 9C9 5.49997 14.5 5.5 14.5 9C14.5 11.5 12 10.9999 12 13.9999" stroke="#000000B3" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 18.01L12.01 17.9989" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>       
                    </div>
                    <div className="flex flex-col items-start gap-1 w-full">
                        <div className=" tracking-[-0.12px] ">Something Wrong With Your Payment?</div>
                        <div className="text-[14px] text-black/80 tracking-[-0.12px] leading-5">Our help team is ready to assist you!</div>
                    </div>
                </div>
                <div>
                <svg width="32px" height="32px" stroke-width="1.3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000B3"><path d="M9 6L15 12L9 18" stroke="#000000B3" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
            </div>
            <div onClick={handleContinue} className="mt-10 py-3 px-5 w-full flex items-center justify-center gap-2 rounded-lg bg-[#0A090B] text-white text-center cursor-pointer contrast-125">
                <div>Explore More Elegance</div>
                <svg className="mt-[1px]" width="18px" height="18px" viewBox="0 0 24 24" stroke-width="1.3" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5" stroke="#ffffff" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>

        </div>

        </>
    )
}