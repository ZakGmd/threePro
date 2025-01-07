import { Suspense, useEffect, useRef} from 'react'
import { Canvas, useThree} from '@react-three/fiber'
import { Environment, OrbitControls, ShadowAlpha } from '@react-three/drei'
import Model from './model'
import { SofaNode } from '../types/types'
import Container from './container'
import Loader from './loader'
import FirstVase from './firtVase'
import FirstCadre from './firstCadre'
import SecondCadre from './secondCadre'
import SecondVase from './secondVase'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
gsap.registerPlugin(useGSAP)

type SceneProps = {
  selectedModel: string
  materials: SofaNode
}

function Animation() {
  const { camera } = useThree()
  const hasAnimated = useRef(false)
  const initialPosition = useRef({ x: 0, y: 15, z: 0 })
  const finalPosition = useRef({ x: 0, y: 0.1, z: 3 })

  useEffect(() => {
    if (hasAnimated.current) {
      camera.position.set(
        finalPosition.current.x,
        finalPosition.current.y,
        finalPosition.current.z
      )
      return
    }
    camera.position.set(
      initialPosition.current.x,
      initialPosition.current.y,
      initialPosition.current.z
    )

    const tl = gsap.timeline()
    tl.to(camera.position, {
      x: finalPosition.current.x,
      y: finalPosition.current.y,
      z: finalPosition.current.z,
      duration: 2.6,
      ease: "power4.inOut",
      onComplete: () => {
        hasAnimated.current = true
      }
    })

    return () => {
      tl.kill()
    }
  }, [])

  return null
}

export default function Scene({ selectedModel, materials }: SceneProps) {
  return (
    <Canvas
      shadows="soft"
      camera={{ position: [0, 15, 0], fov: 45, far: 300 }}
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: true
      }}
      style={{ width: '100%', height: '100%' }}
    >
      <Suspense fallback={<Loader />}>
        <Animation />
        <directionalLight
          castShadow
          position={[10, 18, 11]}
          intensity={3.4}
          shadow-mapSize={[4096, 4096]}
          shadow-camera-far={50}
          shadow-camera-near={0.1}
          shadow-camera-left={-15}
          shadow-camera-right={15}
          shadow-camera-top={15}
          shadow-camera-bottom={-15}
          shadow-bias={-0.001}
          shadow-radius={3}
        />
        <directionalLight
          position={[-5, 10, -5]}
          intensity={0.4}
        />
        <ambientLight intensity={0.8} />
        <Environment preset="night" />
        <Container />
        <FirstCadre />
        <SecondCadre />
        <FirstVase position={[-1.58, -0.5, -1]} scale={0.6} />
        <SecondVase />
        <Model 
          modelPath={selectedModel} 
          materials={materials} 
          scale={0.001}
        />

        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2 - 2}
          maxAzimuthAngle={Math.PI / 3.5}
          minAzimuthAngle={-Math.PI / 3.5}
          enableZoom={true}
        />
        
        <ShadowAlpha opacity={0.2} />
      </Suspense>
    </Canvas>
  )
}