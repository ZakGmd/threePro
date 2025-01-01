import * as THREE from 'three'
import { useGLTF, useTexture, } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'

import { useControls, folder } from 'leva'
import { SofaNode } from '../types/types';


type ModelProps = {
    modelPath: string;
    materials: SofaNode;
  }
  
  
export default function Model({ modelPath , materials  } : ModelProps) {
  const { nodes, scene } = useGLTF(modelPath)
  const modelRef = useRef<THREE.Group>(null)
  const [showHelpers, setShowHelpers] = useState(true)


  const frameTexture = useTexture(
    materials.customization?.texture || '/wood.jpg',
  );
 if(frameTexture){
  frameTexture.flipY = true ;
  frameTexture.wrapS = frameTexture.wrapT = THREE.RepeatWrapping ;
  frameTexture.anisotropy = 1 ;
  frameTexture.repeat.set(1,5);
 }

  useEffect(() => {
    if (!scene || !materials || !nodes ) return;

    
    materials.nodes?.frame?.forEach(nodeId => {
      const node = nodes[`Object_${nodeId}`];
      if (node && node instanceof THREE.Mesh) {
        const material = new THREE.MeshStandardMaterial({
          map: frameTexture,
          metalness: 1.2,
          roughness: 0.8
        });
        if (materials.customization.frame) {
          material.color = new THREE.Color(materials.customization.frame);
        }

        node.material = material;
      }
    });

    materials.nodes?.seat?.forEach(nodeId => {
      const node = nodes[`Object_${nodeId}`];
      if (node && node instanceof THREE.Mesh && materials.customization.seatColor) {
        if (!node.material.userData.original) {
          node.material.userData.original = node.material.clone();
        }
        const material = new THREE.MeshStandardMaterial({
          color: new THREE.Color(materials.customization.seatColor),
          metalness: materials.customization.material === 'Leather' ? 0.3 : 0.1,
          roughness: materials.customization.material === 'Velvet' ? 0.9 : 0.5
        });
        node.material = material;
      }
    });

    materials.nodes?.pillows && Object.values(materials.nodes.pillows).forEach(side => {
      Object.values(side).forEach(pillowGroup => {
        pillowGroup.forEach(nodeId => {
          const node = nodes[`Object_${nodeId}`];
          if (node && node instanceof THREE.Mesh && materials.customization.pillowColor) {
            if (!node.material.userData.original) {
              node.material.userData.original = node.material.clone();
            }
            const material = new THREE.MeshStandardMaterial({
              color: new THREE.Color(materials.customization.pillowColor),
             
            });
            node.material = material;
          }
        });
      });
    });

    materials.nodes?.embroidery?.forEach(nodeId => {
      const node = nodes[`Object_${nodeId}`];
      if (node && node instanceof THREE.Mesh && materials.customization.embroideryColor) {
        if (!node.material.userData.original) {
          node.material.userData.original = node.material.clone();
        }
        const material = new THREE.MeshStandardMaterial({
          color: new THREE.Color(materials.customization.embroideryColor),
         
        });
        node.material = material;
      }
    });
  }, [scene, materials, nodes,frameTexture]);


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
        value: { x: 0, y: -0.50, z: 0 },
        step: 0.1,
      }
    })
  })
  useEffect(() => {
    
    useGLTF.preload('/sofa.glb')
    useGLTF.preload('/sofaa.glb')
    useGLTF.preload('/armchair.glb')

    
  }, [])

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh ) {
          child.castShadow = true;
          child.receiveShadow = true;
          
        }
      });
    }
  }, [scene]);



  return (
    <>
      {showGrid && <gridHelper args={[30, 20]} />}
      {showAxes && <axesHelper args={[5]} />}
      
      <group 
        ref={modelRef}
        position={[modelPosition.x, modelPosition.y, modelPosition.z]}
        scale={modelScale}
     
        
      >
       
      
        <primitive 
          object={scene} 
          
        
        />

      </group>
    </>
  )
}

