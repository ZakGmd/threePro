import * as THREE from 'three'
import { useGLTF, } from '@react-three/drei'
import { useRef, useState } from 'react'

import { useControls, folder } from 'leva'

export default function Model() {
  const { nodes, scene } = useGLTF('/asofa.glb')
 
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



  return (
    <>
      {showGrid && <gridHelper args={[30, 20]} />}
      {showAxes && <axesHelper args={[5]} />}
      
      <group 
        
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

useGLTF.preload('/asofa.glb')