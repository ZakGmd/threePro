
export type ModelProps = {
    modelPath: string;
}

export interface MaterialCustomization {
  frame?: string;
  seatColor?: string;
  pillowColor?: string;
  embroideryColor?: string;
  material?: string;
  texture?: string;
}

export interface NodeStructure {
  frame?: number[];
  seat?: number[];
  embroidery?: number[];
  pillows?: {
    right: {
      first: number[];
      second: number[];
    };
    left: {
      first: number[];
      second: number[];
    };
  };
}

export interface SofaNode {
  id: number;
  nodes?: NodeStructure;
  customization: MaterialCustomization;
}
export interface SofaNodeMappings {
  [key: number]: NodeStructure;
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
  materialChange: (type: keyof MaterialCustomization, value: string) => void;
  material: SofaNode['customization'];
  onBack: () => void;
}
export interface custumizeSelectProps {
    setSofa: (index: number) => void;
    sofas: Sofa[];
    selectedSofa: number;
    onNext: () => void;
} 

    




 

  

