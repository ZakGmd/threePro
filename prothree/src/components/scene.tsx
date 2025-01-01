import { Suspense } from 'react'
import { Canvas} from '@react-three/fiber'
import {Backdrop, Environment, OrbitControls, ShadowAlpha, SoftShadows} from '@react-three/drei'
import Model from './model'
import { SofaNode } from '../types/types'
import Container from './container'
import Loader from './loader'
import FirstVase from './firtVase'
import FirstCadre from './firstCadre'
import SecondCadre from './secondCadre'
import SecondVase from './secondVase'

type SceneProps = {
    selectedModel: string;
    materials: SofaNode;
  }





export default function Scene({ selectedModel , materials }: SceneProps) {
  return (
      <Canvas
        shadows
        id="canvas-container"
        camera={{ position: [0, 0.5, 3], fov: 45, far: 300} }
        gl={{ preserveDrawingBuffer: true }} 
        style={{ width: '100%', height: '100%' , background: ''  }}
      
      >
       
        <Suspense fallback={<Loader />}>
       
        <directionalLight
          castShadow
          
          position={[10, 18, 11 ]}
          intensity={4}
          shadow-mapSize={[2048, 2048]}
          shadow-camera-far={800}
          shadow-camera-near={1}
          shadow-camera-left={-1}
          shadow-camera-right={10}
          shadow-camera-top={8}
          shadow-camera-bottom={-12}
          shadow-bias={-0.00001}
        >
          
        </directionalLight>
        <Environment preset="night" />
        <ambientLight intensity={1.3} castShadow />
        
          <Container />
          <FirstCadre />
          <SecondCadre />
          <FirstVase />
          <SecondVase />
          <Model modelPath={selectedModel} materials={materials} />
      
    
          <OrbitControls
            maxPolarAngle={Math.PI /2}
            minPolarAngle={Math.PI / 2 - 2}
            maxAzimuthAngle={Math.PI / 3.5}
            minAzimuthAngle={-Math.PI / 3.5}
           enableZoom={true}
           // minDistance={1} 
            // maxDistance={3}
           
          />
          
          <ShadowAlpha opacity={0.2} /> 
        </Suspense>
      </Canvas>
   
  )
}