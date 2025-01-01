import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react';

export default function FirstVase() {

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
             position={[-1.58,-0.5,-1]}
             scale={0.6}
             castShadow={true}
                receiveShadow={true}
            />
        </>

    )
}

useGLTF.preload('/vase1.glb')