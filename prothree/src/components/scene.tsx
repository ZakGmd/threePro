import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Model from './model'
import { SofaNode } from '../types/types'
type SceneProps = {
    selectedModel: string;
    materials: SofaNode;
  }


export default function Scene({ selectedModel , materials }: SceneProps) {
  return (
      <Canvas
        shadows
        id="canvas-container"
        camera={{ position: [0, 0.5, 3], fov: 45, far: 5000} }
        gl={{ preserveDrawingBuffer: true }} 
        style={{ width: '100%', height: '100%' , background: '#fafafa'  }}
      
      >
        <Suspense fallback={null}>
      
        <directionalLight 
            castShadow 
            position={[1, 12, 9]} 
            intensity={8} 
            shadow-mapSize={[1024, 1024]}
          >
            <orthographicCamera attach="shadow-camera" args={[-14, 10, 10, -10]} />
          </directionalLight>
         

          <Model modelPath={selectedModel} materials={materials}/>

          <OrbitControls

            enableZoom={true}
           
          />
          
        
        </Suspense>
      </Canvas>
   
  )
}