

export default  function Container() {
    return (
      <group>

        <mesh 
          rotation={[-Math.PI / 2, 0, 0]} 
          position={[0, -0.5, 0]}
          receiveShadow
        >
          <planeGeometry args={[200, 200]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        <mesh 
          position={[0, 2.2, -2]}
          receiveShadow
        >
          <planeGeometry args={[200, 200]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </group>
    )
  }