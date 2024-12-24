import * as THREE from 'three'
import { useGLTF, } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'

import { useControls, folder } from 'leva'

type ModelProps = {
    modelPath: string;
  }
  
export default function Model({ modelPath } : ModelProps) {
  const { nodes, scene } = useGLTF(modelPath)
  const modelRef = useRef<THREE.Group>(null)
  const [showHelpers, setShowHelpers] = useState(true)

  const {
    showGrid,
    showAxes,
    showBoundingBox,

    modelScale,
    modelPosition,
  } = useControls('Debug Controls', {
    helpers: folder({
      showGrid: true,
      showAxes: true,
      showBoundingBox: true,
      
    }),
    model: folder({
      modelScale: {
        value: 0, 
        min: 0.001,
        max: 1,
        step: 0.001,
      },
      modelPosition: {
        value: { x: 0, y: -0.3, z: 0 },
        step: 0.1,
      }
    })
  })
  useEffect(() => {
    
    useGLTF.preload('/sofa.glb')
    useGLTF.preload('/sofaa.glb')
    useGLTF.preload('/armchair.glb')

    
  }, [])

console.log({nodes})

  return (
    <>
      {showGrid && <gridHelper args={[30, 20]} />}
      {showAxes && <axesHelper args={[5]} />}
      
      <group 
        ref={modelRef}
        position={[modelPosition.x, modelPosition.y, modelPosition.z]}
        scale={modelScale}
      >
        {showBoundingBox && (
          <primitive object={new THREE.BoxHelper(scene, 0xff0000)} />
        )}
        
        <primitive 
          object={scene} 
          castShadow
          receiveShadow
        />

      </group>
    </>
  )
}

