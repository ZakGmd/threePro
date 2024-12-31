import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

export default function Room() {

    const { nodes, scene } = useGLTF('/room.glb')

    return(
        <>
             <primitive 
             object={scene} 
             position={[0,-0.4,0]}
             scale={0.8}
             
                receiveShadow={true}
            />
        </>

    )
}

useGLTF.preload('/room.glb')