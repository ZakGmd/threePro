

import { useState } from 'react'
import './App.css'
import Scene from './components/scene'
import { Sofa } from './types/types';
import SelectSofa from './components/selectedSofa';
import CustomizeMaterial from './components/customizeMaterial';

function App() {
  const [selectedSofa, setSelectedSofa] = useState<number>(1) 
  const [currentStep, setCurrentStep] = useState<'select' | 'customize'>('select')
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
  ]
  const renderStepContent = () => {
    switch(currentStep){
      case 'select' :
        return(
          <SelectSofa 
            setSofa={setSelectedSofa} 
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
          />
        )
    }
    }
  

  return (
    <>
     <div className='flex items-start gap-[10] h-[100vh] w-full '>
      <div className='h-full w-[700px] ml-[148px] pl-[32px] pr-[28px] border-r border-l border-gray-300 '>
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
