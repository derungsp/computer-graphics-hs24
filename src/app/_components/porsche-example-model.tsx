"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const PorscheExampleModel: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const toggleAnimation = () => setIsAnimating(!isAnimating);

  return (
    <>
      <button onClick={toggleAnimation} className="absolute bottom-5 left-5">
        {isAnimating ? "Stop Animation" : "Start Animation"}
      </button>
      <Canvas
        style={{ height: "1000px", width: "100%" }}
        camera={{ position: [0, 1.3, 3.5] }}
      >
        <OrbitControls></OrbitControls>
        <PorscheModel isAnimating={isAnimating}></PorscheModel>
      </Canvas>
    </>
  );
};

interface PorscheModelProps {
  isAnimating: boolean;
}

export const PorscheModel: React.FC<PorscheModelProps> = ({ isAnimating }) => {
  const porscheModel = useLoader(GLTFLoader, "/porsche_911_gt3.glb");
  const modelRef = useRef<Mesh>(null);

  useFrame((_state, delta) => {
    if (isAnimating && modelRef.current) {
      modelRef.current.rotation.y += delta / 3;
    }
  });

  return (
    <>
      <pointLight position={[-10, -10, -10]} color="#48cc90" intensity={5000} />
      <pointLight position={[10, 10, 10]} color="#36e2e2" intensity={5000} />
      <primitive object={porscheModel.scene} ref={modelRef} />
    </>
  );
};
