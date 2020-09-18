import React, { useCallback, useState, useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import "./home.css";

function Home() {
  // Set up state for the hovered and active state
  const [mousePos, setMousePos] = useState([]);
  const handleMouseMove = useCallback((e) => {
    var x = e.clientX;
    var y = e.clientY;

    setMousePos([x - window.innerWidth / 2, y - window.innerHeight / 2]);
  }, []);

  // Rotate mesh every frame, this is outside of React without overhead
  return (
    <>
      <header className="header">
        <div className="tagline">
          <Canvas
            onMouseMove={handleMouseMove}
            camera={{
              position: [0, 0, 100],
              near: 0.01,
              far: 10000,
              fov: 100,
            }}
          >
            <Stars pos={mousePos} />
          </Canvas>

          <div className="tag">
            <h5>I Love Creative Problem Solving And Building Websites</h5>
          </div>
          <div className="sub">
            <p>- PRANISH</p>
          </div>
        </div>
      </header>
    </>
  );
}

function Stars({ pos }) {
  const mesh = useRef();
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const light = useRef();

  const positions = useMemo(() => {
    let positions = [];
    for (let i = 0; i < 3000; i++) {
      const r = 6000;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.atanh(2 * Math.random() - 1);
      const x =
        r * Math.cos(theta) * Math.sin(phi) + (-3000 + Math.random() * 4000);
      const y =
        r * Math.sin(theta) * Math.sin(phi) + (-2000 + Math.random() * 4000);
      const z = r * Math.cos(phi) + (-1000 + Math.random() * 2000);
      positions.push(x);
      positions.push(y);
      positions.push(z);
    }
    return new Float32Array(positions);
  }, []);
  useFrame(() => {
    mesh.current.rotation.z += 0.0005;
    // light.current.position.set(pos[0] / aspect, -pos[1] / aspect, 0);
  });

  return (
    <>
      {/* <ambientLight intensity={10} distance={40} ref={light}></ambientLight> */}

      <points ref={mesh}>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attachObject={["attributes", "position"]}
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          attach="material"
          size={15}
          sizeAttenuation
          color="white"
          fog={false}
        />
      </points>
    </>
  );
}

export default Home;
