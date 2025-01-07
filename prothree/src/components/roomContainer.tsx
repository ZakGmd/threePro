

export default function Container() {
    const WALL_HEIGHT = 50;
    const ROOM_WIDTH = 50;
    const ROOM_DEPTH = 50;
    
    return (
      <group>
        {/* Floor */}
        <mesh 
          rotation={[-Math.PI / 2, 0, 0]} 
          position={[0, -3, 0]}
          receiveShadow
        >
          <planeGeometry args={[ROOM_WIDTH, ROOM_DEPTH]} />
          <meshStandardMaterial color="#09090b" />
        </mesh>
  
        {/* Back Wall */}
        <mesh 
          position={[0, 2, -12.5]}
          receiveShadow
        >
          <planeGeometry args={[ROOM_WIDTH, WALL_HEIGHT]} />
          <meshStandardMaterial color="#09090b" />
        </mesh>
  
        {/* Left Wall */}
        <mesh 
          rotation={[0, Math.PI/2, 0]}
          position={[-14, 2, 0]}
          receiveShadow
        >
          <planeGeometry args={[ROOM_DEPTH, WALL_HEIGHT]} />
          <meshStandardMaterial color="#09090b" />
        </mesh>
  
        {/* Right Wall */}
        <mesh 
          rotation={[0, -Math.PI/2, 0]}
          position={[12.5, 1.9, 0]}
          receiveShadow
        >
          <planeGeometry args={[ROOM_DEPTH, WALL_HEIGHT]} />
          <meshStandardMaterial color="#09090b" />
        </mesh>
      </group>
    );
  }
  
