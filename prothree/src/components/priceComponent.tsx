import { MaterialCustomization } from '../types/types';
import { calculateSofaPrice } from '../utils/utilities';


export default function CurrentPrice({material , basePrice } :{material: MaterialCustomization, basePrice: number;} ){
    const price = calculateSofaPrice(basePrice,{ frame: material.frame || '',seatColor: material.seatColor || '',material: material.material || ''}
    );
    
    return (
      <div className="pricing flex justify-between items-center gap-1 pt-1">
        <div className='flex gap-1 font-space-mono  items-baseline text-sm text-black/40'>
            <div > Base price:</div>
            <div className='font-inter'> ${basePrice.toLocaleString()}</div>
        </div>
        <div className='flex flex-col items-baseline gap-1 '>
          <div className="text-black/60 text-[14px] font-normal uppercase leading-normal font-space-mono">
          Current Price
          </div>
          <div className="text-2xl font-medium font-inter">
             ${price.toLocaleString()}
          </div>
        </div>

      </div>
    );
  };