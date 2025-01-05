import { Sofa, SofaNodeMappings } from "../types/types";


export const sofas: Sofa[] = [
  {
    id: 1,
    name: "Victorian Walnut Settee",
    dimensions: "1840mm x 900mm with custom colors",
    modelPath: "/asofa.glb" ,
    basePrice: 3500
  },
  {
    id: 2,
    name: "Victorian Mahogany Triple Camel Back Settee ",
    dimensions: "3.5m x 1.2m with custom colors",
    modelPath: "/sofaa.glb" ,
    basePrice: 5500
  },
  {
    id: 3,
    name: " Gent's Armchair",
    dimensions: "930mm x 730mm with custom colors",
    modelPath: "/armchair.glb" ,
    basePrice: 2500
  }
];
export const sofaNodeMappings: SofaNodeMappings = {

  0: { 
    pillows: {
      right: {
        first: [2],
        second: [46] 
      },
      left: {
        first: [26], 
        second: [41] 
      }
    },
    frame: [10,3,14,21,22,6,8,12,15,16,17,18,19,20,21,23,24,25,32,33,35,36,37,38,39,40,42,43,44,45,47], 
    seat: [4,5,7,27,28,31,9],
    embroidery: [11,13,29,34,30]
  },
  1: { 
    pillows: {
      right: {
        first: [93, 94],
        second: [106, 108, 109, 110]
      },
      left: {
        first: [104, 107], 
        second: [95, 96, 97, 98, 99, 100, 101, 102] 
      }
    },
    frame: [4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,
            30,31,32,35,37,40,42,45,46,48,49,50,54,51,52,53,54,55,57,58,59,60,61,63,
            64,65,66,67,69,70,71,72,73,74,75,76,78,79,80,81,82,83,84,86,87,88,89,90,
            91,92,103,32,33,34,36,41,43,44,47,56,68,77,85],
    seat: [3,2,5,62],
    embroidery: [96,97,98,99,102,109,110,38,39]
  },
  2: { 
    pillows: {
      right: {
        first: [60,62],
        second: []
      },
      left: {
        first: [], 
        second: [] 
      }
    },
    frame: [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,
            27,28,29,32,33,34,37,40,42,43,44,45,46,47,48,49,50,51,52,53,54,
            55,56,57,58,59,35 ,36 ,42 ,30,
    ],
    seat: [2,3,4,39],
    embroidery: [61,63,64,31,41,46]
  }
};
export const materialPrices = {
  frames: {
    '#a1662f5e': { name: 'Wood', price: 2000 },    
    '#e1e4e2': { name: 'Marble', price: 3500 },   
    '#d4af376e': { name: 'Gold', price: 5000 }    
  },
  seats: {
    '#D6C9AF': { name: 'Light Khaki', price: 500 },
    '#022c22': { name: 'Emerald Green', price: 700 },
    '#0c0a09': { name: 'Dark Charcoal', price: 600 }
  },
  material: {
    'Leather': { price: 1000 },
    'Velvet': { price: 800 }
  }
};
export function calculateSofaPrice (basePrice: number,customization: {frame: string;seatColor: string;material: string;}) {
  let totalPrice = basePrice;

  if (customization.frame && materialPrices.frames[customization.frame as keyof typeof materialPrices.frames]) {
    totalPrice += materialPrices.frames[customization.frame as keyof typeof materialPrices.frames].price;
  }

  if (customization.seatColor && materialPrices.seats[customization.seatColor as keyof typeof materialPrices.seats]) {
    totalPrice += materialPrices.seats[customization.seatColor as keyof typeof materialPrices.seats].price;
  }

  if (customization.material && materialPrices.material[customization.material as keyof typeof materialPrices.material]) {
    totalPrice += materialPrices.material[customization.material as keyof typeof materialPrices.material].price;
  }

  return totalPrice;
};