import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react';

type VaseProps = {
  position: [number, number, number] ;
  scale: number ;
}
export default function FirstVase({position ,scale}: VaseProps) {
    const { nodes, scene } = useGLTF('/vase1.glb') ;
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

    return(
        <>
             <primitive 
             object={scene} 
             position={position}
             scale={scale}
             castShadow={true}
                receiveShadow={true}
            />
        </>

    )
}

useGLTF.preload('/vase1.glb')