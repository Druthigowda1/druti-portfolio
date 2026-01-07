import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const vertexShader = `
uniform float time;
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vUv = uv;
  vPosition = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;

const fragmentShader = `
uniform sampler2D uDataTexture;
uniform sampler2D uTexture;
uniform vec4 resolution;
varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  vec4 offset = texture2D(uDataTexture, vUv);
  gl_FragColor = texture2D(uTexture, uv - 0.02 * offset.rg);
}`;

const GridDistortion = ({
    grid = 15,
    mouse = 0.1,
    strength = 0.15,
    relaxation = 0.9,
    imageSrc,
    className = ''
}) => {
    const containerRef = useRef(null);
    const sceneRef = useRef(null);
    const rendererRef = useRef(null);
    const cameraRef = useRef(null);
    const planeRef = useRef(null);
    const imageAspectRef = useRef(1);
    const animationIdRef = useRef(null);
    const resizeObserverRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;
        const container = containerRef.current;

        const scene = new THREE.Scene();
        sceneRef.current = scene;

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
        });

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);
        rendererRef.current = renderer;

        container.innerHTML = '';
        container.appendChild(renderer.domElement);

        const camera = new THREE.OrthographicCamera(0, 0, 0, 0, -1000, 1000);
        camera.position.z = 2;
        cameraRef.current = camera;

        const uniforms = {
            time: { value: 0 },
            resolution: { value: new THREE.Vector4() },
            uTexture: { value: null },
            uDataTexture: { value: null },
        };

        const textureLoader = new THREE.TextureLoader();
        textureLoader.load(imageSrc, (texture) => {
            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.LinearFilter;
            texture.wrapS = THREE.ClampToEdgeWrapping;
            texture.wrapT = THREE.ClampToEdgeWrapping;
            imageAspectRef.current = texture.image.width / texture.image.height;
            uniforms.uTexture.value = texture;
            handleResize();
        });

        const size = grid;
        const data = new Float32Array(4 * size * size);
        for (let i = 0; i < size * size; i++) {
            data[i * 4] = Math.random() * 255 - 125;
            data[i * 4 + 1] = Math.random() * 255 - 125;
        }

        const dataTexture = new THREE.DataTexture(
            data,
            size,
            size,
            THREE.RGBAFormat,
            THREE.FloatType
        );
        dataTexture.needsUpdate = true;
        uniforms.uDataTexture.value = dataTexture;

        const material = new THREE.ShaderMaterial({
            side: THREE.DoubleSide,
            uniforms,
            vertexShader,
            fragmentShader,
            transparent: true,
        });

        const geometry = new THREE.PlaneGeometry(1, 1, size - 1, size - 1);
        const plane = new THREE.Mesh(geometry, material);
        planeRef.current = plane;
        scene.add(plane);

        const handleResize = () => {
            const rect = container.getBoundingClientRect();
            if (!rect.width || !rect.height) return;

            renderer.setSize(rect.width, rect.height);

            const aspect = rect.width / rect.height;
            plane.scale.set(aspect, 1, 1);

            camera.left = -aspect / 2;
            camera.right = aspect / 2;
            camera.top = 0.5;
            camera.bottom = -0.5;
            camera.updateProjectionMatrix();

            uniforms.resolution.value.set(rect.width, rect.height, 1, 1);
        };

        resizeObserverRef.current = new ResizeObserver(handleResize);
        resizeObserverRef.current.observe(container);

        const mouseState = { x: 0, y: 0, prevX: 0, prevY: 0, vX: 0, vY: 0 };

        const handleMouseMove = (e) => {
            const rect = container.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = 1 - (e.clientY - rect.top) / rect.height;
            mouseState.vX = x - mouseState.prevX;
            mouseState.vY = y - mouseState.prevY;
            Object.assign(mouseState, { x, y, prevX: x, prevY: y });
        };

        container.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            animationIdRef.current = requestAnimationFrame(animate);

            const d = dataTexture.image.data;
            for (let i = 0; i < size * size; i++) {
                d[i * 4] *= relaxation;
                d[i * 4 + 1] *= relaxation;
            }

            dataTexture.needsUpdate = true;
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationIdRef.current);
            resizeObserverRef.current.disconnect();
            container.removeEventListener('mousemove', handleMouseMove);
            renderer.dispose();
            geometry.dispose();
            material.dispose();
            dataTexture.dispose();
        };
    }, [grid, mouse, strength, relaxation, imageSrc]);

    return (
        <div
            ref={containerRef}
            className={className}
            style={{
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                minWidth: 0,
                minHeight: 0,
            }}
        />
    );
};

export default GridDistortion;
