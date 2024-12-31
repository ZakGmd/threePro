import { Suspense } from 'react'
import { Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import Model from './model'
import { SofaNode } from '../types/types'
import Container from './container'
import Loader from './loader'
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
          intensity={8}
          shadow-mapSize={[2048, 2048]}
          shadow-camera-far={1000}
          shadow-camera-near={1}
          shadow-camera-left={-12}
          shadow-camera-right={10}
          shadow-camera-top={8}
          shadow-camera-bottom={-12}
          shadow-bias={-0.000000000001}
        />
        <ambientLight intensity={0.3} castShadow />
          
          <Container />
          
          
          <Model modelPath={selectedModel} materials={materials} />
      

          <OrbitControls
            maxPolarAngle={Math.PI /1.76}
            minPolarAngle={Math.PI / 2 - 2}
            maxAzimuthAngle={Math.PI / 3.5}
            minAzimuthAngle={-Math.PI / 3.5}
            enableZoom={true}
           
          />
          
        
        </Suspense>
      </Canvas>
   
  )
}