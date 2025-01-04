import React from 'react';
import * as THREE from 'three';
import { useGLTF, useTexture } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { SofaNode } from '../types/types';

type ModelCartProps = {
  modelPath: string;
  materials: SofaNode;
  scale?: number;
};

export default function ModelCard({ modelPath, materials, scale = 0.004 }: ModelCartProps) {
  
  const gltf = useGLTF(modelPath);
  const scene = gltf.scene.clone();
  const nodes = gltf.nodes;
  const modelRef = useRef<THREE.Group>(null);

  const frameTexture = useTexture(
    materials.customization?.texture || '/wood.jpg',
  );
  
  if (frameTexture) {
    frameTexture.flipY = true;
    frameTexture.wrapS = frameTexture.wrapT = THREE.RepeatWrapping;
    frameTexture.anisotropy = 1;
    frameTexture.repeat.set(1, 5);
  }

  useEffect(() => {
    if (!scene || !materials || !nodes) return;

    materials.nodes?.frame?.forEach(nodeId => {
      const node = nodes[`Object_${nodeId}`];
      if (node && node instanceof THREE.Mesh) {
        const material = new THREE.MeshStandardMaterial({
          map: frameTexture,
          metalness: 1.2,
          roughness: 0.8
        });
        if (materials.customization.frame) {
          material.color = new THREE.Color(materials.customization.frame);
        }
        node.material = material;
      }
    });

    materials.nodes?.seat?.forEach(nodeId => {
      const node = nodes[`Object_${nodeId}`];
      if (node && node instanceof THREE.Mesh && materials.customization.seatColor) {
        const material = new THREE.MeshStandardMaterial({
          color: new THREE.Color(materials.customization.seatColor),
          metalness: materials.customization.material === 'Leather' ? 0.3 : 0.1,
          roughness: materials.customization.material === 'Velvet' ? 0.9 : 0.5
        });
        node.material = material;
      }
    });

    materials.nodes?.pillows && Object.values(materials.nodes.pillows).forEach(side => {
      Object.values(side).forEach(pillowGroup => {
        pillowGroup.forEach(nodeId => {
          const node = nodes[`Object_${nodeId}`];
          if (node && node instanceof THREE.Mesh && materials.customization.pillowColor) {
            const material = new THREE.MeshStandardMaterial({
              color: new THREE.Color(materials.customization.pillowColor),
            });
            node.material = material;
          }
        });
      });
    });

    materials.nodes?.embroidery?.forEach(nodeId => {
      const node = nodes[`Object_${nodeId}`];
      if (node && node instanceof THREE.Mesh && materials.customization.embroideryColor) {
        const material = new THREE.MeshStandardMaterial({
          color: new THREE.Color(materials.customization.embroideryColor),
        });
        node.material = material;
      }
    });
  }, [scene, materials, nodes, frameTexture]);

  return (
    <group 
      ref={modelRef}
      position={[0, -1.5, 0]}
      scale={scale}
      receiveShadow
     
    >
      <primitive object={scene} receiveShadow />
    </group>
  );
}