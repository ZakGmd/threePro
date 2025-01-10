import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import { CardItem } from "../types/types";
import Model from "./model";
import RoomContainer from "./roomContainer";
import FirstVase from "./firtVase";
import gsap from "gsap";

interface MultiSofaSceneProps {
    cartItems: CardItem[];
    selectedSofaIndex: number | null;
  }

  const CameraController = ({ targetPosition,  selectedIndex}: { targetPosition: [number, number, number] | null,selectedIndex:number|null  }) => {
    const { camera } = useThree();
    
    useEffect(() => {
      if (targetPosition && selectedIndex !== null) {
        const positions: [number, number, number][] = [
          [0.2, -2.492, -8],    
          [-11.3, -2.492, 0],   
          [10.6, -2.492, 0]     
        ];
  
        let currentIndex = -1;
        const cameraPositions: [number, number, number][] = [
          [0, 0, 7],    
          [6, 0, 0],    
          [-6, 0, 0],   
        ];
        
        cameraPositions.forEach((pos, index) => {
          if (Math.abs(camera.position.x - pos[0]) < 0.1 &&
              Math.abs(camera.position.y - pos[1]) < 0.1 &&
              Math.abs(camera.position.z - pos[2]) < 0.1) {
            currentIndex = index;
          }
        });
 
        const timeline = gsap.timeline();
        const animateToPosition = (pos: [number, number, number], sofaPos: [number, number, number]) => {
          return {
            x: pos[0],
            y: pos[1],
            z: pos[2],
            duration: 0.75,
            ease: "power2.in",
            onUpdate: () => {
              camera.lookAt(sofaPos[0], sofaPos[1], sofaPos[2]);
            }
          };
        };
  
       
        if ((currentIndex === 1 && selectedIndex === 2) || 
            (currentIndex === 2 && selectedIndex === 1)) {
         
          timeline.to(camera.position, 
            animateToPosition(cameraPositions[0], positions[0])
          );
          timeline.to(camera.position, 
            animateToPosition(targetPosition, positions[selectedIndex])
          );
        } else {

          timeline.to(camera.position, 
            animateToPosition(targetPosition, positions[selectedIndex])
          );
        }
      }
    }, [targetPosition, selectedIndex, camera]);
  
    return null;
  };
  
  interface MultiSofaSceneProps {
    cartItems: CardItem[];
    selectedSofaIndex: number | null;
  }
export const CheckOutScene = ({ cartItems ,selectedSofaIndex  }: MultiSofaSceneProps) => {
  const positions: [number, number, number][] = [
    [0.2, -2.492, -8],
    [-11.3, -2.492, 0 ],
    [10.6, -2.492, 0]
  ];
  
  const rotations: [number, number, number][] = [
    [0, 0, 0],
    [0, 1.55, 0],
    [0, -1.55, 0],
  ];

  const cameraPositions: [number, number, number][] = [
    [0, 0, 7],     
    [6, 0, 0],   
    [-6, 0, 0],   
  ];


  const targetPosition = selectedSofaIndex !== null ? cameraPositions[selectedSofaIndex] : null;
    return (
      <div className="w-full h-full">
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 9], fov:45 }}>
          <Suspense fallback={null}>
          <CameraController 
            targetPosition={targetPosition} 
            selectedIndex={selectedSofaIndex}
          />
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

