"use client";

import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import GUI from "lil-gui";
import { useEffect, useRef, useState } from "react";
import { Color, Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const PorscheV1: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [environment, setEnvironment] = useState<string | null>(null);
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
        <ambientLight intensity={0.3} />
        {environment && <Environment preset={environment as any} />}
        <PorscheModel
          environment={environment}
          isAnimating={isAnimating}
          setEnvironment={setEnvironment}
        />
      </Canvas>
    </>
  );
};

interface PorscheModelProps {
  isAnimating: boolean;
  environment: string | null;
  setEnvironment: React.Dispatch<React.SetStateAction<string | null>>;
}

export const PorscheModel: React.FC<PorscheModelProps> = ({
  isAnimating,
  environment,
  setEnvironment,
}) => {
  const porscheModel = useLoader(GLTFLoader, "/935.glb");
  const modelRef = useRef<Mesh>(null);

  const [lightParams, setLightParams] = useState({
    pointLight: {
      color: "#ffcc00",
      intensity: 0,
      distance: 50,
      position: [5, 10, 5],
    },
    ambientLight: { color: "#ffffff", intensity: 0 },
    directionalLight: {
      color: "#ffffff",
      intensity: 0,
      position: [-10, 20, 10],
    },
    spotLight: {
      color: "#ff00ff",
      intensity: 0,
      distance: 75,
      angle: 0.4,
      position: [10, 5, 10],
    },
  });

  useEffect(() => {
    const gui = new GUI();
    const envFolder = gui.addFolder("Environment");
    const environments = [
      "sunset",
      "dawn",
      "night",
      "city",
      "park",
      "studio",
      "forest",
    ];
    envFolder
      .add({ environment: environment || "none" }, "environment", [
        "none",
        ...environments,
      ])
      .onChange((value: any) =>
        setEnvironment(value === "none" ? null : value),
      );

    const pointLightFolder = gui.addFolder("Point Light");
    pointLightFolder
      .addColor(lightParams.pointLight, "color")
      .onChange((value: any) => {
        setLightParams((params) => ({
          ...params,
          pointLight: { ...params.pointLight, color: value },
        }));
      });
    pointLightFolder
      .add(lightParams.pointLight, "intensity", 0, 5000)
      .onChange((value: any) => {
        setLightParams((params) => ({
          ...params,
          pointLight: { ...params.pointLight, intensity: value },
        }));
      });
    pointLightFolder
      .add(lightParams.pointLight, "distance", 0, 100)
      .onChange((value: any) => {
        setLightParams((params) => ({
          ...params,
          pointLight: { ...params.pointLight, distance: value },
        }));
      });
    pointLightFolder
      .add(lightParams.pointLight.position, 0, 100)
      .name("Position X")
      .onChange((value: any) => {
        setLightParams((params) => ({
          ...params,
          pointLight: {
            ...params.pointLight,
            position: [
              value,
              params.pointLight.position[1],
              params.pointLight.position[2],
            ],
          },
        }));
      });
    pointLightFolder
      .add(lightParams.pointLight.position, 1, 100)
      .name("Position Y")
      .onChange((value: any) => {
        setLightParams((params) => ({
          ...params,
          pointLight: {
            ...params.pointLight,
            position: [
              params.pointLight.position[0],
              value,
              params.pointLight.position[2],
            ],
          },
        }));
      });
    pointLightFolder
      .add(lightParams.pointLight.position, 2, 100)
      .name("Position Z")
      .onChange((value: any) => {
        setLightParams((params) => ({
          ...params,
          pointLight: {
            ...params.pointLight,
            position: [
              params.pointLight.position[0],
              params.pointLight.position[1],
              value,
            ],
          },
        }));
      });

    const directionalLightFolder = gui.addFolder("Directional Light");
    directionalLightFolder
      .addColor(lightParams.directionalLight, "color")
      .onChange((value: any) => {
        setLightParams((params) => ({
          ...params,
          directionalLight: { ...params.directionalLight, color: value },
        }));
      });
    directionalLightFolder
      .add(lightParams.directionalLight, "intensity", 0, 5000)
      .onChange((value: any) => {
        setLightParams((params) => ({
          ...params,
          directionalLight: { ...params.directionalLight, intensity: value },
        }));
      });
    directionalLightFolder
      .add(lightParams.directionalLight.position, 0, 100)
      .name("Position X")
      .onChange((value: any) => {
        setLightParams((params) => ({
          ...params,
          directionalLight: {
            ...params.directionalLight,
            position: [
              value,
              params.directionalLight.position[1],
              params.directionalLight.position[2],
            ],
          },
        }));
      });
    directionalLightFolder
      .add(lightParams.directionalLight.position, 1, 100)
      .name("Position Y")
      .onChange((value: any) => {
        setLightParams((params) => ({
          ...params,
          directionalLight: {
            ...params.directionalLight,
            position: [
              params.directionalLight.position[0],
              value,
              params.directionalLight.position[2],
            ],
          },
        }));
      });
    directionalLightFolder
      .add(lightParams.directionalLight.position, 2, 100)
      .name("Position Z")
      .onChange((value: any) => {
        setLightParams((params) => ({
          ...params,
          directionalLight: {
            ...params.directionalLight,
            position: [
              params.directionalLight.position[0],
              params.directionalLight.position[1],
              value,
            ],
          },
        }));
      });

    const spotLightFolder = gui.addFolder("Spot Light");
    spotLightFolder
      .addColor(lightParams.spotLight, "color")
      .onChange((value: any) => {
        setLightParams((params) => ({
          ...params,
          spotLight: { ...params.spotLight, color: value },
        }));
      });
    spotLightFolder
      .add(lightParams.spotLight, "intensity", 0, 5000)
      .onChange((value: any) => {
        setLightParams((params) => ({
          ...params,
          spotLight: { ...params.spotLight, intensity: value },
        }));
      });
    spotLightFolder
      .add(lightParams.spotLight, "distance", 0, 100)
      .onChange((value: any) => {
        setLightParams((params) => ({
          ...params,
          spotLight: { ...params.spotLight, distance: value },
        }));
      });
    spotLightFolder
      .add(lightParams.spotLight, "angle", 0, Math.PI / 2)
      .onChange((value: any) => {
        setLightParams((params) => ({
          ...params,
          spotLight: { ...params.spotLight, angle: value },
        }));
      });
    spotLightFolder
      .add(lightParams.spotLight.position, 0, 100)
      .name("Position X")
      .onChange((value: any) => {
        setLightParams((params) => ({
          ...params,
          spotLight: {
            ...params.spotLight,
            position: [
              value,
              params.spotLight.position[1],
              params.spotLight.position[2],
            ],
          },
        }));
      });
    spotLightFolder
      .add(lightParams.spotLight.position, 1, 100)
      .name("Position Y")
      .onChange((value: any) => {
        setLightParams((params) => ({
          ...params,
          spotLight: {
            ...params.spotLight,
            position: [
              params.spotLight.position[0],
              value,
              params.spotLight.position[2],
            ],
          },
        }));
      });
    spotLightFolder
      .add(lightParams.spotLight.position, 2, 100)
      .name("Position Z")
      .onChange((value: any) => {
        setLightParams((params) => ({
          ...params,
          spotLight: {
            ...params.spotLight,
            position: [
              params.spotLight.position[0],
              params.spotLight.position[1],
              value,
            ],
          },
        }));
      });

    const ambientLightFolder = gui.addFolder("Ambient Light");
    ambientLightFolder
      .addColor(lightParams.ambientLight, "color")
      .onChange((value: any) => {
        setLightParams((params) => ({
          ...params,
          ambientLight: { ...params.ambientLight, color: value },
        }));
      });
    ambientLightFolder
      .add(lightParams.ambientLight, "intensity", 0, 5000)
      .onChange((value: any) => {
        setLightParams((params) => ({
          ...params,
          ambientLight: { ...params.ambientLight, intensity: value },
        }));
      });

    return () => {
      gui.destroy();
    };
  }, [setEnvironment, environment]);

  useFrame((_state, delta) => {
    if (isAnimating && modelRef.current) {
      modelRef.current.rotation.y += delta / 3;
    }
  });

  return (
    <>
      <ambientLight
        color={new Color(lightParams.ambientLight.color)}
        intensity={lightParams.ambientLight.intensity}
      />
      <directionalLight
        castShadow
        color={new Color(lightParams.directionalLight.color)}
        intensity={lightParams.directionalLight.intensity}
        position={
          lightParams.directionalLight.position as [number, number, number]
        }
      />
      <pointLight
        color={new Color(lightParams.pointLight.color)}
        intensity={lightParams.pointLight.intensity}
        distance={lightParams.pointLight.distance}
        position={lightParams.pointLight.position as [number, number, number]}
      />
      <spotLight
        color={new Color(lightParams.spotLight.color)}
        intensity={lightParams.spotLight.intensity}
        distance={lightParams.spotLight.distance}
        angle={lightParams.spotLight.angle}
        position={lightParams.spotLight.position as [number, number, number]}
        castShadow
      />
      <primitive
        ref={modelRef}
        object={porscheModel.scene}
        scale={0.5}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <primitive object={porscheModel.scene} ref={modelRef} />
    </>
  );
};
