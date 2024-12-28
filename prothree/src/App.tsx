import { useState } from 'react'
import './App.css'
import Scene from './components/scene'
import { Sofa, SofaNode, SofaNodeMappings } from './types/types';
import SelectSofa from './components/selectedSofa';
import CustomizeMaterial from './components/customizeMaterial';
import Landing from './components/landing';
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
function App() {
  const [selectedSofa, setSelectedSofa] = useState<number>(0) ;
  const [currentStep, setCurrentStep] = useState< 'landing' | 'select' | 'customize'>('landing');
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
      material: '' ,
      texture: ''
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
  
  console.log('Materials :',materiales);

  const renderStepContent = () => {
    switch(currentStep){
      case 'landing': 
        return(
          <Landing 
           onNext={() => setCurrentStep('select')} 
          />
        )
      case 'select' :
        return(
          <SelectSofa 
            setSofa={handleSofaChange} 
            onNext={() => setCurrentStep('customize')} 
            onBack={() => setCurrentStep('landing')}
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
     <div className='flex items-start  h-[100vh] w-full overflow-hidden '>
      <div
          style={{border: currentStep === 'landing' ? 'none' : '' , 
                  marginLeft: currentStep === 'landing' ? '0px' : '' ,
                   paddingTop: currentStep === 'landing' ? '360px' : ''
                }}
          className='container h-full ml-[148px] max-w-[720px] pl-[32px] pr-[28px] border-r border-l border-gray-300 overflow-y-scroll  '>
        {renderStepContent()}
      </div>
      <div className='w-full h-full flex '>
        <Scene selectedModel={sofas[selectedSofa].modelPath} materials={materiales} />
      </div>

     </div>
     
    </>
  )
}

export default App
