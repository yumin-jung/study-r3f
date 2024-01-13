import { FirstPersonControls, FlyControls, OrbitControls, PointerLockControls, TrackballControls } from "@react-three/drei"

export const Controls = () => {
    return (
        // <OrbitControls
        //     enableDamping
        //     dampingFactor={0.03}
        //     autoRotate
        //     maxPolarAngle={Math.PI / 2}
        //     minPolarAngle={Math.PI / 4}
        //     maxAzimuthAngle={Math.PI / 4}
        //     minAzimuthAngle={-Math.PI / 2}
        // />
        // <FlyControls
        //     movementSpeed={1}
        //     rollSpeed={Math.PI / 20}
        // />
        // <FirstPersonControls
        //     lookSpeed={0.1}
        //     movementSpeed={1}
        //     lookVertical
        // />
        // <PointerLockControls />
        <TrackballControls
            rotateSpeed={2}
            zoomSpeed={1.5}
            panSpeed={0.1}
            noRotate={false}
            noZoom={false}
            noPan={false}
            staticMoving={false}
            dynamicDampingFactor={0.05}
        />
    )
}