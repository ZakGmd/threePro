import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react';

export default function SecondVase() {

    const { nodes, scene } = useGLTF('/vase2.glb') ;
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
             position={[1.6,-0.5,-1]}
             scale={0.6}
             
                receiveShadow={true}
            />
        </>

    )
}

useGLTF.preload('/vase2.glb')