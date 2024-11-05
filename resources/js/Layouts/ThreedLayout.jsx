import { useState } from "react";

import Experience from "@/Components/Threed/Experience";
import Interface from "@/Components/Threed/Interface";
import ScrollManager from "@/Components/Threed/ScrollManger";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import LoadingScreen from "@/Components/Threed/LoadingScreen";
const ThreedLayout = ({ children }) => {
    const [section, setSection] = useState(0);
    const [started, setStarted] = useState(false);
    return (
        <>
            <LoadingScreen started={started} setStarted={setStarted} />
            <MotionConfig
                transition={{
                    type: "spring",
                    mass: 5,
                    stiffness: 500,
                    damping: 50,
                    restDelta: 0.0001,
                }}
            >
                <div
                    style={{
                        width: "100vw",
                        height: "100vh",
                        overflow: "hidden",
                    }}
                >
                    <Canvas
                        z
                        shadows
                        camera={{ position: [0, 3, 10], fov: 42, zoom: 2 }}
                    >
                        {/* <color attach="background" args={["ececec"]} /> */}
                        <ScrollControls pages={4} damping={0.1}>
                            <ScrollManager
                                section={section}
                                onChangeSection={setSection}
                            />
                            <Scroll>
                                <Experience section={section} />
                            </Scroll>

                            <Scroll html>{children}</Scroll>
                        </ScrollControls>
                    </Canvas>
                </div>
            </MotionConfig>
        </>
    );
};

export default ThreedLayout;
