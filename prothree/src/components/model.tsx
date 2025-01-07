import * as THREE from 'three'
import { useGLTF, useTexture, } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import { SofaNode } from '../types/types';
import { animateColorChange } from '../utils/utilities';

type ModelProps = {
    modelPath: string;
    materials: SofaNode;
    scale:number ;
  }
  
  
export default function Model({ modelPath , materials ,scale  } : ModelProps) {
  const { nodes, scene } = useGLTF(modelPath)
  const modelRef = useRef<THREE.Group>(null)


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

    if (scene) {
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh ) {
          child.castShadow = true;
          child.receiveShadow = true;
          
        }
      });
    }
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
       animateColorChange(node, materials.customization.seatColor, {
        metalness: materials.customization.material === 'Leather' ? 0.3 : 0.1,
        roughness: materials.customization.material === 'Velvet' ? 0.9 : 0.5
      });
      }
    });

    materials.nodes?.pillows && Object.values(materials.nodes.pillows).forEach(side => {
      Object.values(side).forEach(pillowGroup => {
        pillowGroup.forEach(nodeId => {
          const node = nodes[`Object_${nodeId}`];
          if (node && node instanceof THREE.Mesh && materials.customization.pillowColor) {
            animateColorChange(node, materials.customization.pillowColor);
            
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



  useEffect(() => {
    
    useGLTF.preload('/sofa.glb')
    useGLTF.preload('/sofaa.glb')
    useGLTF.preload('/armchair.glb')

    
  }, [])





  return (
    <>
      <group 
        ref={modelRef}
        position={[0, -0.50, 0]}
        scale={scale}
      >
        <primitive 
          object={scene} 
        />
      </group>
    </>
  )
}

