import { useState } from 'react'
import './App.css'
import Scene from './components/scene'
import { CardItem, SofaNode} from './types/types';
import SelectSofa from './components/selectedSofa';
import CustomizeMaterial from './components/customizeMaterial';
import Landing from './components/landing';
import CartIcon from './components/cartIcon';
import { calculateSofaPrice, sofaNodeMappings, sofas } from './utils/utilities';
import { CurrentPrice } from './components/priceComponent';



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
  const [cartItems, setCartItems] = useState<CardItem[]>([]);
  const finalPrice = calculateSofaPrice(
      sofas[selectedSofa].basePrice,
      {
        frame: materiales.customization.frame || '',
        seatColor: materiales.customization.seatColor || '',
        material: materiales.customization.material || ''
      }
    );
  const handleAddToCart = () => {
  const newItem = {
    sofa: {
      id: selectedSofa,
      name: sofas[selectedSofa].name,
      modelPath: sofas[selectedSofa].modelPath,
      price: finalPrice
    },
    materials: materiales
  };
  setCartItems(prev => [...prev, newItem]);
};

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
            handleAddToCart={handleAddToCart}  
             PriceComponent={CurrentPrice}   
          />
        )
    }
    }
    const handleDeleteFromCart = (id: number) => {
      setCartItems(prev => prev.filter(item => item.sofa.id !== id));
    };
    
  return (
    <>
     <div className='relative flex items-start   h-[100vh] w-full overflow-hidden '>
     
      <div
          style={{border: currentStep === 'landing' ? 'none' : '' , 
                  marginLeft: currentStep === 'landing' ? '0px' : '' ,
                   paddingTop: currentStep === 'landing' ? '420px' : ''
                }}
          className='container h-full ml-[148px] w-full max-w-[720px] px-[32px]  border-r border-l border-gray-300 overflow-y-scroll  '>
        {renderStepContent()}
      </div>
      <div className='w-full h-full flex '>
        <Scene selectedModel={sofas[selectedSofa].modelPath} materials={materiales} />
      </div>
     <CartIcon cartItems={cartItems} onDeleteItem={handleDeleteFromCart} />
     </div>
     
    </>
  )
}

export default App
