import { useState} from 'react';
import { FormData, CheckoutProps, FormErrors } from '../types/types';

const CheckoutPage = ({ cartItems }: CheckoutProps) => {
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
    <div className="flex h-screen w-full ">
      
      <div className="w-1/2 h-full">
        <div className="h-full">
    
        </div>
      </div>
      <div className="w-1/2 font-inter flex flex-col h-full items-center gap-6 justify-center overflow-y-auto border-l border-gray-200">
        <div className="text-2xl font-space-mono  text-left max-w-[820px] text-[#0A090B] w-full">Payement Details</div>
      
        <form onSubmit={handleSubmit} className="max-w-[820px] flex flex-col gap-5  w-full">
          <div className="flex flex-col gap-2">
            <div className="text-[14px] font-inter font-medium leading-5 text-[#0A090B] tracking-tight">Contact Information</div>
            <div className="space-y-2">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className={`w-full py-2 pl-3  pr-2 border-[0.5px] rounded-[8px] outline-none  shadow-[0_0.2px_0px_rgba(0,0,0,0.1),inset_0px_0.3px_0.3px_rgba(0,0,0,0.1)] ${
                  errors.email ? 'border-red-500/60' : 'border-[#E6E6E6]'
                }`}
              />
              {errors.email && (
                <p className="text-red-500/90 text-sm">{errors.email}</p>
              )}
            </div>
          </div>
          
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="text-[14px] font-inter font-medium leading-5 text-[#0A090B] tracking-tight">Shipping Address</div>
            <div className='flex flex-col items-start gap-4 w-full'>
               <div className="grid grid-cols-2 gap-4 w-full">
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First name"
                  className={`w-full py-2 pl-3 pr-2 border-[0.5px] rounded-[8px] outline-none  shadow-[0_0.2px_0px_rgba(0,0,0,0.1),inset_0px_0.3px_0.3px_rgba(0,0,0,0.1)] ${
                    errors.firstName ? 'border-red-500/60' : 'border-[#E6E6E6]'
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-500/90 text-sm">{errors.firstName}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last name"
                  className={`w-full py-2 pl-3 pr-2 border-[0.5px] rounded-[8px] outline-none  shadow-[0_0.2px_0px_rgba(0,0,0,0.1),inset_0px_0.3px_0.3px_rgba(0,0,0,0.1)] ${
                    errors.lastName ? 'border-red-500/60' : 'border-[#E6E6E6]'
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500/90 text-sm">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className='w-full'>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Address"
                className={`w-full py-2 pl-3 pr-2 border-[0.5px] rounded-[8px] outline-none  shadow-[0_0.2px_0px_rgba(0,0,0,0.1),inset_0px_0.3px_0.3px_rgba(0,0,0,0.1)] ${
                  errors.address ? 'border-red-500/60' : 'border-[#E6E6E6]'
                }`}
              />
              {errors.address && (
                <p className="text-red-500/90 text-sm">{errors.address}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
              <div>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="City"
                  className={`w-full py-2 pl-3 pr-2 border-[0.5px] rounded-[8px] outline-none  shadow-[0_0.2px_0px_rgba(0,0,0,0.1),inset_0px_0.3px_0.3px_rgba(0,0,0,0.1)] ${
                    errors.city ? 'border-red-500/60' : 'border-[#E6E6E6]'
                  }`}
                />
                {errors.city && (
                  <p className="text-red-500/90 text-sm">{errors.city}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  placeholder="Postal code"
                  className={`w-full py-2 pl-3 pr-2 border-[0.5px] rounded-[8px] outline-none  shadow-[0_0.2px_0px_rgba(0,0,0,0.1),inset_0px_0.3px_0.3px_rgba(0,0,0,0.1)] ${
                    errors.postalCode ? 'border-red-500/60' : 'border-[#E6E6E6]'
                  }`}
                />
                {errors.postalCode && (
                  <p className="text-red-500/90 text-sm">{errors.postalCode}</p>
                )}
              </div>
            </div>  
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 w-full">
            <div className="text-[14px] font-inter font-medium leading-5 text-[#0A090B] tracking-tight">Payment Details</div>
            <div className='flex flex-col items-start gap-4 w-full' >
                 <div className='w-full'>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                placeholder="Card number"
                maxLength={19}
                className={`w-full py-2 pl-3 pr-2 border-[0.5px] rounded-[8px] outline-none  shadow-[0_0.2px_0px_rgba(0,0,0,0.1),inset_0px_0.3px_0.3px_rgba(0,0,0,0.1)] ${
                  errors.cardNumber ? 'border-red-500/60' : 'border-[#E6E6E6]'
                }`}
              />
              {errors.cardNumber && (
                <p className="text-red-500/90 text-sm">{errors.cardNumber}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
              <div>
                <input
                  type="text"
                  name="cardExpiry"
                  value={formData.cardExpiry}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                  maxLength={5}
                  className={`w-full py-2 pl-3 pr-2 border-[0.5px] rounded-[8px] outline-none  shadow-[0_0.2px_0px_rgba(0,0,0,0.1),inset_0px_0.3px_0.3px_rgba(0,0,0,0.1)] ${
                    errors.cardExpiry ? 'border-red-500/60' : 'border-[#E6E6E6]'
                  }`}
                />
                {errors.cardExpiry && (
                  <p className="text-red-500/90 text-sm">{errors.cardExpiry}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="cardCvc"
                  value={formData.cardCvc}
                  onChange={handleInputChange}
                  placeholder="CVC"
                  maxLength={4}
                  className={`w-full py-2 pl-3 pr-2 border-[0.5px] rounded-[8px] outline-none  shadow-[0_0.2px_0px_rgba(0,0,0,0.1),inset_0px_0.3px_0.3px_rgba(0,0,0,0.1)] ${
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

          <div className=" flex flex-col gap-7 border-gray-200 mt-4">
           
            <div className="flex flex-col justify-between font-medium text-lg pt-2">
            <div className="h-[0.5px] w-full bg-black/10 shadow-[0_0.2px_0px_rgba(0,0,0,0.1),inset_0px_0.2px_0.2px_rgba(0,0,0,0.1)] rounded-md"></div>
             <div className='flex  justify-between pt-4'>
             <div>Total</div>
             <div>${total.toLocaleString()}</div>
             </div>
            </div>
          </div>

          {errors.submit && (
            <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              {errors.submit}
            </div>
          )}

          <button 
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 bg-[#0A090B] text-white rounded-md transition-all duration-300 
              ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-black/90'}`}
          >
            {isSubmitting ? 'Processing...' : 'Complete'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;