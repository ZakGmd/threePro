
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react';

export default function FirstCadre() {

    const { nodes, scene } = useGLTF('/cadre1.glb')
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
             position={[0,2.2,-1.96]}
            scale={1}
             
                receiveShadow={true}
            />
        </>

    )
}

useGLTF.preload('/cadre1.glb')