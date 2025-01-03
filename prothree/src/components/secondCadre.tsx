
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react';

export default function SecondCadre() {

    const { nodes, scene } = useGLTF('/cadre2.glb') ;
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
             position={[1.3,1.34,-1.955]}
            scale={0.8}
             
                receiveShadow={true}
            />
        </>

    )
}

useGLTF.preload('/cadre2.glb')