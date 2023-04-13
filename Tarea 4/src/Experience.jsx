import { OrbitControls } from '@react-three/drei'
import { useHelper } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Door from './Door'
import Floor from './Floor'
import { useRef } from 'react'
import { DirectionalLightHelper } from 'three'
import Objeto from './objeto';
import Prb from './Prb';




export default function Experience() {
    const directionalLightRef = useRef()

    // añadir hemisphereLight 


    useHelper(directionalLightRef, DirectionalLightHelper, 1)

    return <>
        <Perf position="top-left" />
        
        {/* LUCES */}
        {/* <hemisphereLight skyColor={0xffffff} groundColor={0x000000} intensity={0.5} /> */}
        <pointLight position={[0, 10, 0]} intensity={1.5} />
        {/* <rectAreaLight color={0x0000ff} intensity={100} width={100} height={10} position={[0, 10, 0]} rotation={[0, 0, 0]} /> */}
        {/* <spotLight position={[0, 10, 0]} intensity={1.5} /> */}
        <Objeto />
        <Prb />


        <OrbitControls makeDefault />

        <directionalLight  ref={directionalLightRef} castShadow position={[0, 10, -6]} intensity={1.5} />
        <ambientLight intensity={0.5} />
        <Door/>
        <Floor/>
    </>
}