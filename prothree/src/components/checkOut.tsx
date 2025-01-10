import { useState} from 'react';
import { FormData, CheckoutProps, FormErrors } from '../types/types';
import { CheckOutScene } from './checkoutScene';
import { SelectCountry } from './select';

export default function CheckoutPage({ cartItems }: CheckoutProps){
  const [formData, setFormData] = useState<FormData>({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } 

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    if (!formData.postalCode.trim()) {
      newErrors.postalCode = 'Postal code is required';
    }

    if (!formData.cardNumber) {
      newErrors.cardNumber = 'Card number is required';
    } 

    if (!formData.cardExpiry) {
      newErrors.cardExpiry = 'Expiry date is required';
    } 

    if (!formData.cardCvc) {
      newErrors.cardCvc = 'CVC is required';
    } 

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted successfully', formData);
    } catch (error) {
      console.error('Submission error:', error);
      setErrors(prev => ({
        ...prev,
        submit: 'An error occurred while processing your order. Please try again.'
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const total = cartItems.reduce((sum, item) => sum + (item.sofa.price || 0), 0);

  return (
    <div className="flex relative h-screen w-full  ">
      <div className=' py-2 px-3 left-[108px]  backdrop-blur-sm bg-white/5 backdrop-contrast-100 backdrop-brightness-100  flex items-center justify-center  shadow-sm border-2 border-white/5 rounded-lg bottom-[80px] absolute   z-40'>
        <div className='flex items-center gap-1  '> 
           {cartItems.map((item, index) => (
                
                
             <div key={index} className='px-2 py-1 rounded-lg cursor-pointer hover:backdrop-blur-3xl  hover:text-white transition-colors duration-200  text-white/60 font-inter '>{item.sofa.name}</div>
           ))}
        </div>
           
        </div>
      <div className="w-1/2 h-full relative">
        <div className="h-full">
            <CheckOutScene cartItems={cartItems} />
        </div>
        
      </div>
      <div className="w-1/2 font-inter flex flex-col h-full items-center justify-center overflow-y-auto border-l border-gray-200">
      <div className='flex flex-col items-start max-w-[680px] gap-5'>
         
         <div className={`w-full py-3 flex items-center justify-center gap-1 bg-[#0A090B] text-white rounded-[10px] transition-all duration-300 cursor-pointer `}>
            <img height={18} width={18} alt='apple icon' src='apple.svg' />
            <div className='text-[20px] leading-normal -tracking-normal'>Pay</div>
          </div>
         <div className="flex items-center gap-3 my-4 ">
            <div className="w-[190px] h-[0.5px] bg-black/20"></div>
            <div className="text-[16px] leading-5  font-normal text-black/50  ">Or pay with card</div>
            <div className="w-[190px] h-[0.5px] bg-black/20"></div>
         </div>
         <div className="text-xl font-medium  text-left max-w-[820px] text-[#2D2B32] ">Shipping information</div>
        <form onSubmit={handleSubmit} className="max-w-[680px] flex flex-col gap-5  w-full">
          <div className="flex flex-col gap-1">
            <div className="text-[14px] font-inter font-medium leading-5 text-[#0a090b] tracking-tight">Email</div>
            <div className={`w-full py-2 px-3 flex items-center gap-1  transition-all duration-300 ${errors.email ? 'border-red-500/60' : 'border-[#E6E6E6]'}  border-[0.5px] rounded-[8px] outline-none  shadow-[0_0.2px_0px_rgba(0,0,0,0.1),inset_0px_0.3px_0.3px_rgba(0,0,0,0.1)]`}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                
                className=" w-full text-sm placeholder:text-[16px] outline-none "
              />
              <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#0a090b71"><path d="M7 9L12 12.5L17 9" stroke="#0a090b71" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z" stroke="#0a090b71" stroke-width="1.5"></path></svg>              
            </div>
            {errors.email && (
                <p className="text-red-500/90 text-sm animate-fade">{errors.email}</p>
            )}
          </div>
          
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="text-[14px] font-inter font-medium leading-5 text-[#0A090B] tracking-tight">Shipping Address</div>
            
            <div className='flex flex-col items-start w-full gap-1'>
                <div className='flex flex-col items-start   w-full border-[#E6E6E6] border-b-0   rounded-[8px] shadow-[0_0.2px_0px_rgba(0,0,0,0.1),inset_0px_0.3px_0.3px_rgba(0,0,0,0.1)]'>
             
              <div className=' w-full  '>
                <SelectCountry />
              </div>  
            
              <div className='flex items-center w-full border-t border-[#E6E6E6]'>
                <div className={`w-full h-full py-2 border-r border-b border-l rounded-bl-[8px] border-[0.5px] border-t-0 border-[#E6E6E6] ${errors.firstName ? 'border-red-500/60 border-r-[#E6E6E6] ' : ''} transition-all duration-300  `}>
                  <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First name"
                  className={`w-full  pl-3 pr-2 text-sm placeholder:text-[16px]   outline-none   `}
                  />
              
                </div>
                <div className={`w-full h-full py-2 border-b border-r border-t-0 border-l-0 border-[0.5px] rounded-br-[8px] border-[#E6E6E6] ${errors.address ? 'border-red-500/60 ' : ''} transition-all duration-300  `}>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Address"
                className={`w-full  pl-3 pr-2 text-sm placeholder:text-[16px]   outline-none ${errors.address ? 'border-red-500/60' : 'border-[#E6E6E6]'} `}
              />
             
                </div>
              </div>
              
                </div>
                {errors.address ? <p className="text-red-500/90 text-sm">{errors.address}</p> : <p className="text-red-500/90 text-sm">{errors.firstName}</p>  }
            </div>
            
            <div className='text-[14px] font-inter font-medium leading-5 text-[#0a090b65] tracking-tight underline'>Enter adress manually</div>
          </div>

          <div className="flex flex-col items-start gap-2 w-full">
            <div className="text-[14px] font-inter font-medium leading-5 text-[#0A090B] tracking-tight">Payment Details</div>
            <div className='flex flex-col items-start w-full border-[#E6E6E6] border-[0.5px] rounded-[8px] shadow-[0_0.2px_0px_rgba(0,0,0,0.1),inset_0px_0.3px_0.3px_rgba(0,0,0,0.1)]' >
              <div className='w-full flex items-center pr-2  border-b pt-1 '>
                   <input
                    type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                placeholder="Card number"
                maxLength={19}
                className={`w-full py-2 pl-3 max-w-[350px] text-sm placeholder:text-[16px] pr-2  rounded-[8px] outline-none   ${
                  errors.cardNumber ? 'border-red-500/60' : 'border-[#E6E6E6]'
                    }`}
                  />
                  <div className='flex items-center justify-end w-full  gap-[4px]'>
                    <img src="visa.svg" alt="" height={32} width={32} />
                    <img src="amazon.svg" alt="" height={32} width={32} />
                    <img src="mastercard.svg" alt="" height={32} width={32} />
                    <img src="american-express.svg" alt="" height={32} width={32} />
                  </div>
                  {errors.cardNumber && (
                <p className="text-red-500/90 text-sm">{errors.cardNumber}</p>
                  )}
              </div>
            <div className="flex items-center w-full">
              <div className='w-1/2  py-2 border-r border-[#E6E6E6]'>
                <input
                  type="text"
                  name="cardExpiry"
                  value={formData.cardExpiry}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                  maxLength={5}
                  className={`w-full  pl-3 pr-2 text-sm placeholder:text-[16px]  rounded-[8px] outline-none   ${
                    errors.cardExpiry ? 'border-red-500/60' : 'border-[#E6E6E6]'
                  }`}
                />
                {errors.cardExpiry && (
                  <p className="text-red-500/90 text-sm">{errors.cardExpiry}</p>
                )}
              </div>
              <div className='w-1/2  py-2'>
                <input
                  type="text"
                  name="cardCvc"
                  value={formData.cardCvc}
                  onChange={handleInputChange}
                  placeholder="CVC"
                  maxLength={4}
                  className={`w-full  pl-3 pr-2 text-sm placeholder:text-[16px]  rounded-[8px] outline-none   ${
                    errors.cardCvc ? 'border-red-500/60' : 'border-[#E6E6E6]'
                  }`}
                />
                {errors.cardCvc && (
                  <p className="text-red-500/90 text-sm">{errors.cardCvc}</p>
                )}
              </div>
            </div>
            </div>
           
          </div>

          
          <div className=" flex flex-col gap-1 bg-amber-50/90 px-3 py-2 rounded-[8px] tracking-[-0.12px] text-amber-950/80 ">
              <div>This will be set as the default project <br />payment method.</div>
         </div>       
          {errors.submit && (
            <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              {errors.submit}
            </div>
          )}

          <button 
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4  bg-[#0A090B] text-white rounded-[10px] transition-all duration-300 
              ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-black/90'}`}
          >
            {isSubmitting ? 'Processing...' : `Pay $${total.toLocaleString()}`}
          </button>
         
        </form>
        <div className=" flex items-center justify-center w-full gap-1 bg-[#F9FBFC] px-3 py-2 rounded-[8px] tracking-[-0.12px] text-amber-950/80 ">
            <svg className='mb-[1px]' width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#0a090b71"><path d="M16 12H17.4C17.7314 12 18 12.2686 18 12.6V19.4C18 19.7314 17.7314 20 17.4 20H6.6C6.26863 20 6 19.7314 6 19.4V12.6C6 12.2686 6.26863 12 6.6 12H8M16 12V8C16 6.66667 15.2 4 12 4C8.8 4 8 6.66667 8 8V12M16 12H8" stroke="#0a090b71" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            <div className='text-[14px] font-inter font-medium leading-5 text-[#0A090B]/70 tracking-tight'>Payment are secure and encrypted</div>
        </div> 
      </div>
      
      </div>
    </div>
  );
};

