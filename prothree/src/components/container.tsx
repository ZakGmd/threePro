

export default  function Container() {
    return (
      <group>

        <mesh 
          rotation={[-Math.PI / 2, 0, 0]} 
          position={[0, -0.5, 0]}
          receiveShadow
        >
          <planeGeometry args={[500, 500]} />
          <meshStandardMaterial color="#ffffff11" />
        </mesh>
        <mesh 
          position={[0, 24.5, -15]}
          receiveShadow
        >
          <planeGeometry args={[500, 500]} />
          <meshStandardMaterial color="#ffffff11" />
        </mesh>
      </group>
    )
  }