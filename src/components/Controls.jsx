import { FirstPersonControls, FlyControls, OrbitControls, PointerLockControls, TrackballControls } from "@react-three/drei"

export const Controls = () => {
    return (
        <OrbitControls />
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
        // <TrackballControls
        //     rotateSpeed={2}
        //     zoomSpeed={1.5}
        //     panSpeed={0.1}
        //     noRotate={false}
        //     noZoom={false}
        //     noPan={false}
        //     staticMoving={false}
        //     dynamicDampingFactor={0.05}
        // />
    )
}