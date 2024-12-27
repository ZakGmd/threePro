import * as THREE from 'three'
import { useGLTF, useTexture, } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'

import { useControls, folder } from 'leva'

interface PillowCustomization {
  texture?: string;
  color?: string;
  material?: string;
  roughness?: number;
  metalness?: number;
}

interface PillowNode {
  id: string;
  nodes: number[];
  customization: PillowCustomization;
}
const PillowNodes = {
  right: {
    first: {
      id: 'right_pillow_1',
      nodes: [10,11,12,13 ,14,15],
      customization: {
        color: '#022c22',
        roughness: 10,
        metalness: 0.2
      }
    },
    second: {
      id: 'right_pillow_2',
      nodes: [],
      customization: {
        color: '',
        roughness: 10,
        metalness: 0.1
      }
    }
  },
  left: {
    first: {
      id: 'left_pillow_1',
      nodes: [],
      customization: {
        color: '#0c0a09',
        roughness: 9,
        metalness: 0.1
      }
    },
    second: {
      id: 'left_pillow_2',
      nodes: [],
      customization: {
        color: '#0c0a09',
        roughness: 10,
        metalness: 0.01
      }
    }
  }
};
type ModelProps = {
    modelPath: string;
  }
  
  
export default function Model({ modelPath } : ModelProps) {
  const { nodes, scene } = useGLTF(modelPath)
  const modelRef = useRef<THREE.Group>(null)
  
  const [showHelpers, setShowHelpers] = useState(true)


  useEffect(() => {
    if (scene) {
      Object.values(PillowNodes).forEach(side => {
        Object.values(side).forEach(pillow => {
          pillow.nodes.forEach(nodeId => {
            const node = nodes[`Object_${nodeId}`];
            if (node) {
              const { color, roughness, metalness } = pillow.customization;
              if (node instanceof THREE.Mesh) {
                node.material.color.set(color);
                node.material.roughness = roughness;
                node.material.metalness = metalness;
              }
            }
          });
        });
      });
    }
  }, [scene]);

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

