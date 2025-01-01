
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

export default function FirstCadre() {

    const { nodes, scene } = useGLTF('/cadre1.glb')

    return(
        <>
             <primitive 
             object={scene} 
             position={[0,2.2,-1.9]}
            scale={1}
             
                receiveShadow={true}
            />
        </>

    )
}

useGLTF.preload('/cadre1.glb')