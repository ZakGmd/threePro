
export type ModelProps = {
    modelPath: string;
}
export interface MaterialCustomization{
    color?: string;
    material?: string;
}
export interface SofaNode {
  id: number;
  nodes: number[];
  customization: MaterialCustomization;
}
export interface Sofa {
    id: number;
    name: string;
    dimensions: string;
    modelPath: string;
  }
export interface CustomizeViewProps {
  selectedSofa: {
   id: number;
   name: string;
   dimensions: string;
   modelPath: string;
};
  onBack: () => void;
}
export interface custumizeSelectProps {
    setSofa: (index: number) => void;
    sofas: Sofa[];
    selectedSofa: number;
    onNext: () => void;
    
 
} 

    




 
  







const MaterialNodes = {
    right: {
      first: {
        id: 'right_pillow_1',
        nodes: [93, 94],
        customization: {
          color: '',
          roughness: 1,
          metalness: 0.2
        }
      },
      second: {
        id: 'right_pillow_2',
        nodes: [106, 108, 109, 110],
        customization: {
          color: '',
          roughness: 0.7,
          metalness: 0.1
        }
      }
    },
    left: {
      first: {
        id: 'left_pillow_1',
        nodes: [104, 107],
        customization: {
          color: '#0c0a09',
          roughness: 9,
          metalness: 0.1
        }
      },
      second: {
        id: 'left_pillow_2',
        nodes: [95, 96, 97, 98, 99, 100, 101, 102],
        customization: {
          color: '#022c22',
          roughness: 10,
          metalness: 0.01
        }
      }
    }
};
  

  

