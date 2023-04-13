import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";


export default function Prb() {
    const PATH = "/static/textures/Prb/"

    const props = useTexture({
        aoMap: PATH + 'AmbientOcclusion.jpg', // ambient occlusion
        map: PATH + "BaseColor.jpg", // diffuse color 
        normalMap: PATH + 'Normal.jpg', // normal map
        roughnessMap: PATH + 'Roughness.jpg', // 
        heightmap: PATH + 'Height.jpg', //
    })

    return (
        <mesh castShadow={true} receiveShadow={true} 
        position={[-2.5, 0, 0]}
        scale={0.5}
        rotation-y={Math.PI / -30}>
            <torusGeometry/>
            <meshStandardMaterial {...props} side={DoubleSide} />
        </mesh>
    )
}