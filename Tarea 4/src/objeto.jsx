import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial } from "three";
import texturaImg from "./textura.jpg"
import { useLoader } from "@react-three/fiber";
import { TextureLoader, RepeatWrapping } from "three";

export default function objeto(props) {
  const { nodes} = useGLTF("./static/Table.glb");

  // Agregar un nuevo material y asignar la textura a él
  const texture = useLoader(TextureLoader, texturaImg);
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(4, 4);
  const material = useRef();
  material.current = new MeshStandardMaterial({ map: texture });

  return (
    <group {...props} 
    scale={1.2} 
    rotation-y={Math.PI / 4}

    position={[2, -1, -2]}>
      <mesh castShadow receiveShadow geometry={nodes.group1340905712.geometry} material={material.current} />
      <mesh castShadow receiveShadow geometry={nodes.group551916113.geometry} material={material.current} />
      <mesh castShadow receiveShadow geometry={nodes.group389690443.geometry} material={material.current} />
      <mesh castShadow receiveShadow geometry={nodes.group879578357.geometry} material={material.current} />
      <mesh castShadow receiveShadow geometry={nodes.group882506587.geometry} material={material.current} />
    </group>
  );
}
