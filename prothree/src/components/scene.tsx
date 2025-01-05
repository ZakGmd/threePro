import { Suspense} from 'react'
import { Canvas, useThree} from '@react-three/fiber'
import { Environment, OrbitControls, ShadowAlpha,} from '@react-three/drei'
import Model from './model'
import { SofaNode } from '../types/types'
import Container from './container'
import Loader from './loader'
import FirstVase from './firtVase'
import FirstCadre from './firstCadre'
import SecondCadre from './secondCadre'
import SecondVase from './secondVase'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
gsap.registerPlugin(useGSAP);

type SceneProps = {
    selectedModel: string;
    materials: SofaNode;
  }


  function Animation() {
    const { camera } = useThree();
  
    useGSAP(() => {
      camera.position.set(0, 15, 8);
      
      const tl = gsap.timeline();
  
      tl.to(camera.position, {
        x: 0,
        y: 0,
        z: 3,
        duration: 2.5,
        ease: "power2.inOut"
      });
      return () => tl.kill();
    }, []); 
  
    return null;
  }


export default function Scene({ selectedModel , materials }: SceneProps) {

 
  return (
      <Canvas
        shadows
        id="canvas-container"
        camera={{ position: [0, 3, 3], fov: 45, far: 300} }
        gl={{ preserveDrawingBuffer: true }} 
        style={{ width: '100%', height: '100%' , background: ''  }}
      
      >
         
        <Suspense fallback={<Loader />}>
        <Animation />
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
            //maxPolarAngle={Math.PI /2}
           // minPolarAngle={Math.PI / 2 - 2}
           // maxAzimuthAngle={Math.PI / 3.5}
            //minAzimuthAngle={-Math.PI / 3.5}
           //enableZoom={true}
           // minDistance={1} 
            // maxDistance={3}
           
          />
          
          <ShadowAlpha opacity={0.2} /> 
        </Suspense>
      </Canvas>
   
  )
}