
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

export default function SecondCadre() {

    const { nodes, scene } = useGLTF('/cadre2.glb')

    return(
        <>
             <primitive 
             object={scene} 
             position={[1,1.34,-1.9]}
            scale={0.8}
             
                receiveShadow={true}
            />
        </>

    )
}

useGLTF.preload('/cadre2.glb')