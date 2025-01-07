import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { CardItem } from "../types/types";
import Model from "./model";
import RoomContainer from "./roomContainer";
import FirstVase from "./firtVase";

interface MultiSofaSceneProps {
    cartItems: CardItem[];
  }
  
export const CheckOutScene = ({ cartItems }: MultiSofaSceneProps) => {
    const positions: [number, number, number][] = [
      [0, -2.492, -8],  
      [-11.3, -2.492, 0.4],  
      [10.6,-2.492, 0]  
    ];
    const rotations: [number, number , number][]= [
        [0,0, 0],
        [0,1.55, 0],
        [0,-1.55, 0],
    ]
  
    return (
      <div className="w-full h-full">
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 9], fov:45 }}>
          <Suspense fallback={null}>
            
          <directionalLight
            castShadow
            position={[10, 20, 15]}
            intensity={3.5}
            shadow-mapSize={[4096, 4096]}
            shadow-camera-far={50}
            shadow-camera-near={1}
            shadow-camera-left={-20}
            shadow-camera-right={20}
            shadow-camera-top={20}
            shadow-camera-bottom={-20}
            shadow-bias={-0.0001}
          />
          <directionalLight
            position={[-10, 20, -10]}
            intensity={2}
          />
                     
                  <FirstVase position={[-13,-2.98,-11.4]} scale={3}  />
                   <Environment preset="night" />
                   <ambientLight intensity={0.6} castShadow />
                   <RoomContainer />
              {cartItems.map((item, index) => (
                
                  <group key={item.sofa.id} position={positions[index]} rotation={rotations[index]} >
                    <Model modelPath={item.sofa.modelPath} materials={item.materials} scale={0.005} />
                  </group>
                
              ))}
          
            <OrbitControls 
              makeDefault
              minPolarAngle={0}
              maxPolarAngle={Math.PI / 2}
            />
          </Suspense>
        </Canvas>
      </div>
    );
  };

