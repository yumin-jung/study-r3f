import { useBox, useSphere } from "@react-three/cannon"
import { Box, Plane, Sphere, TorusKnot } from "@react-three/drei"
import { useEffect } from "react";
import * as  THREE from "three"

export const Meshes = () => {
    const [planeRef] = useBox(() => ({
        args: [50, 1, 50],
        type: "Static",
        mass: 1,
        position: [0, 0, 0],
        material: {
            resitution: 1,
            friction: 0.5
        },
        onCollide: () => {
            console.log("바닥 충돌")
        }

    }));

    const [boxRef, api] = useBox(() => ({
        args: [1, 1, 1],
        mass: 1,
        position: [-1, 2, 0],
        material: {
            resitution: 0.4,
            friction: 0.2
        }
    }))

    const [sphereRef1, sphereApi] = useSphere(() => ({
        mass: 5,
        position: [0.5, 8, 0],
        material: {
            resitution: 0.4,
            friction: 0.2,
        }
    }))

    const [sphereRef2] = useSphere(() => ({
        mass: 0.2,
        position: [1, 5, 0],
        material: {
            resitution: 0.4,
            friction: 0.2,
        }
    }))

    useEffect(() => {
        api.applyForce([555, 50, 0], [1, 0, 0]);
        sphereApi.applyLocalForce([-2000, 0, 0], [1, 0, 0]);
    }, [api, sphereApi]);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            api.applyImpulse([0, 20, 0], [1, 0, 0]);
            sphereApi.applyImpulse([200, 10, 0], [0, 0, 0]);
        }, 3000)
        return () => {
            clearTimeOut(timeout);
        }
    }, [api, sphereApi]);

    return (
        <>
            <Box
                ref={planeRef}
                args={[50, 1, 50]}
            >
                <meshStandardMaterial
                    color={0xfefefe}
                    roughness={0.3}
                    metalness={0.8}
                />
            </Box>
            <Box
                ref={boxRef}
                args={[1, 1, 1]}
            >
                <meshStandardMaterial
                    color={0xff0000}
                    roughness={0.3}
                    metalness={0.8}
                />
            </Box >

            <Sphere
                ref={sphereRef1}
            >
                <meshStandardMaterial
                    color={0x9000ff}
                    roughness={0.3}
                    metalness={0.8}
                />
            </Sphere>

            <Sphere
                ref={sphereRef2}
            >
                <meshStandardMaterial
                    color={0xff00ff}
                    roughness={0.3}
                    metalness={0.8}
                />
            </Sphere>

            {/* <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshBasicMaterial color={0xff0000} />
            </mesh> */}
    // drei를 사용하면 내부적으로 bufferGeometry로 구현되므로
            // GPU를 더 효율적으로 사용하게 되어 성능, 코드적 이점이 있음
            {/* <Plane args={[40, 40]} rotation-x={-Math.PI / 2} receiveShadow>
                <meshStandardMaterial />
            </Plane> */}

            {/* <Box args={[1, 1, 1]} castShadow position-y={0.5}>
                <meshStandardMaterial color={0xff0000} />
            </Box>

            <Sphere
                args={[1]}
                position={[0, 1, 3]}
                material-color={0xffff00}
            />

            <Circle
                args={[1]}
                position={[0, 1, -3]}
                material-color={"violet"}
                material-side={THREE.DoubleSide}
            />

            <Cone
                args={[1, 2]}
                position={[3, 1, 3]}
                material-color={"brown"}
            />

            <Cylinder
                args={[2, 1, 2]}
                position={[3, 1, -3]}
                material-color={"pink"}
            />

            <Torus
                args={[1, 0.2]}
                position={[-3, 1.2, -3]}
                material-color={"hotpink"}
            /> */}

            {/* <TorusKnot
                args={[1, 0.2, 128, 128, 2, 3]}
                position={[3, 1.6, 0]}
                castShadow
                receiveShadow
            >
                <meshStandardMaterial
                    color={0xffff00}
                    roughness={0.2}
                    metalness={0.5}
                    emissive={0xffff00}
                    emissiveIntensity={2}
                />
            </TorusKnot> */}

            {/* <TorusKnot
                args={[1, 0.2, 128, 128, 2, 3]}
                position={[-7, 1.6, 0]}
                material-color={"teal"}
                castShadow
                receiveShadow
            >
                <meshLambertMaterial
                    color={0x0abff0}
                    emissive={0xff0000}
                    emissiveIntensity={0.5}
                />
            </TorusKnot>

            <TorusKnot
                args={[1, 0.2, 128, 128, 2, 3]}
                position={[-11, 1.6, 0]}
                material-color={"teal"}
                castShadow
                receiveShadow
            >
                <meshPhongMaterial
                    color={0xff0000}
                    emissive={0x00ff00}
                    emissiveIntensity={0.5}
                    specular={0x0000ff}
                    shininess={100}
                />
            </TorusKnot>

            <TorusKnot
                args={[1, 0.2, 128, 128, 2, 3]}
                position={[-15, 1.6, 0]}
                material-color={"teal"}
                castShadow
                receiveShadow
            >
                <meshDepthMaterial
                    opacity={0.5}
                />
            </TorusKnot> */}
        </>)
}