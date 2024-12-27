

import { useState } from 'react'
import './App.css'
import Scene from './components/scene'
import { NodeStructure, Sofa, SofaNode, SofaNodeMappings } from './types/types';
import SelectSofa from './components/selectedSofa';
import CustomizeMaterial from './components/customizeMaterial';
const sofas: Sofa[] = [
  {
    id: 1,
    name: "Monkey Sofa — Limited edition",
    dimensions: "3.5m x 2.4m with custom colors",
    modelPath: "/asofa.glb" 
  },
  {
    id: 2,
    name: "Victorian Sofa — Limited edition",
    dimensions: "3.5m x 2.4m with custom colors",
    modelPath: "/sofaa.glb" 
  },
  {
    id: 3,
    name: "Modern Sofa — Limited edition",
    dimensions: "3.5m x 2.4m with custom colors",
    modelPath: "/armchair.glb" 
  }
];

const sofaNodeMappings: SofaNodeMappings = {

  0: { 
    pillows: {
      right: {
        first: [],
        second: [] 
      },
      left: {
        first: [], 
        second: [] 
      }
    },
    frame: [], 
    seat: [],
    embroidery: []
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
    frame: [],
    seat: [],
    embroidery: []
  },
  2: { 
    pillows: {
      right: {
        first: [],
        second: []
      },
      left: {
        first: [], 
        second: [] 
      }
    },
    frame: [],
    seat: [],
    embroidery: []
  }
};
function App() {
  const [selectedSofa, setSelectedSofa] = useState<number>(0) ;
  const [currentStep, setCurrentStep] = useState<'select' | 'customize'>('select');
  const [materiales, setMaterial] = useState<SofaNode>({
    id: selectedSofa, 
    nodes: {
      frame: sofaNodeMappings[selectedSofa].frame,
      seat: sofaNodeMappings[selectedSofa].seat,
      pillows: sofaNodeMappings[selectedSofa].pillows,
      embroidery: sofaNodeMappings[selectedSofa].embroidery
    },
    customization: {
      frame: '' ,
      seatColor: '' ,
      pillowColor: '' ,
      embroideryColor: '' ,
      material: ''
    }
    });

  const handleSofaChange = (id: number) => {
    setSelectedSofa(id);
    setMaterial(prev =>({
      ...prev,
      id: id ,
      nodes: sofaNodeMappings[id]
    }))
  }
  const handleMaterialChange = (materialType: string, value: string ) => {
    setMaterial(prev => ({
      ...prev,
      customization: {
        ...prev.customization,
        [materialType]: value
      }
    }));
  };
  console.log('Mappings for selected sofa:', sofaNodeMappings[selectedSofa]);
  console.log('Materials :',materiales);

  const renderStepContent = () => {
    switch(currentStep){
      case 'select' :
        return(
          <SelectSofa 
            setSofa={handleSofaChange} 
            onNext={() => setCurrentStep('customize')} 
            sofas={sofas}
            selectedSofa={selectedSofa}
          />
        )
        case 'customize':
        return(
          <CustomizeMaterial 
            selectedSofa={sofas[selectedSofa]}
            onBack={() => setCurrentStep('select')} 
            materialChange={handleMaterialChange}  
            material={materiales.customization}        
          />
        )
    }
    }
  

  return (
    <>
     <div className='flex items-start gap-[10] h-[100vh] w-full overflow-hidden '>
      <div className='container h-full w-[700px] ml-[148px] pl-[32px] pr-[28px] border-r border-l border-gray-300 overflow-y-scroll  '>
        {renderStepContent()}
      </div>
      <div className='w-full h-full'>
        <Scene selectedModel={sofas[selectedSofa].modelPath} />
      </div>

     </div>
     
    </>
  )
}

export default App
