

export default function roomComtainer() {
    const WALL_HEIGHT = 4;
    const ROOM_WIDTH = 10;
    const ROOM_DEPTH = 10;
    
    return (
      <group>
        <mesh 
          rotation={[-Math.PI / 2, 0, 0]} 
          position={[0, 0, 0]}
          receiveShadow
        >
          <planeGeometry args={[ROOM_WIDTH, ROOM_DEPTH]} />
          <meshStandardMaterial color="#f5f5f5" />
        </mesh>
        <mesh 
          position={[0, WALL_HEIGHT/2, -ROOM_DEPTH/2]}
          receiveShadow
        >
          <planeGeometry args={[ROOM_WIDTH, WALL_HEIGHT]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
  
        <mesh 
          rotation={[0, Math.PI/2, 0]}
          position={[-5, 2, 0]}
          receiveShadow
        >
          <planeGeometry args={[ROOM_DEPTH, WALL_HEIGHT]} />
          <meshStandardMaterial color="#fafafa" />
        </mesh>
        <mesh 
          rotation={[0, -Math.PI/2, 0]}
          position={[ROOM_WIDTH/2, WALL_HEIGHT/2, 0]}
          receiveShadow
        >
          <planeGeometry args={[ROOM_DEPTH, WALL_HEIGHT]} />
          <meshStandardMaterial color="#fafafa" />
        </mesh>
      </group>
    );
  }
  
