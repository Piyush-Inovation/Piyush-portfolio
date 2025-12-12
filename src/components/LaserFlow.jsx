import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

function LaserFlow({
    color = '#00FF99',
    horizontalBeamOffset = 0.1,
    verticalBeamOffset = 0.1
}) {
    const canvasRef = useRef(null);
    const [isLowPerformance, setIsLowPerformance] = useState(false);

    useEffect(() => {
        // Detect low-end device
        const checkPerformance = () => {
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            const cores = navigator.hardwareConcurrency || 2;
            const memory = navigator.deviceMemory || 4;

            // Low performance if mobile, less than 4 cores, or less than 4GB RAM
            return isMobile || cores < 4 || memory < 4;
        };

        setIsLowPerformance(checkPerformance());
    }, []);

    useEffect(() => {
        if (!canvasRef.current) return;

        // Adjust particle count based on performance
        const particlesCount = isLowPerformance ? 300 : 1000;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            alpha: true,
            antialias: !isLowPerformance, // Disable antialiasing on low-end
            powerPreference: 'low-power' // Prefer battery life
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(1); // Lock to 1 to prevent scaling differences
        camera.position.z = 7;
        camera.fov = 75; // Lock field of view
        camera.updateProjectionMatrix();

        // Create particle system
        const particlesGeometry = new THREE.BufferGeometry();
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 7; i++) {
            posArray[i] = (Math.random() - 0.5) * 10;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: isLowPerformance ? 0.03 : 0.02,
            color: color,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // Animation with FPS throttling for low-end devices
        let animationId;
        let lastTime = 0;
        const targetFPS = isLowPerformance ? 30 : 60;
        const frameInterval = 1000 / targetFPS;

        const animate = (currentTime) => {
            animationId = requestAnimationFrame(animate);

            const deltaTime = currentTime - lastTime;

            if (deltaTime < frameInterval) return;

            lastTime = currentTime - (deltaTime % frameInterval);

            particlesMesh.rotation.y += 0.001;
            particlesMesh.rotation.x += 0.0005;

            // Animate particles (skip on low-end for better performance)
            if (!isLowPerformance) {
                const positions = particlesGeometry.attributes.position.array;
                for (let i = 0; i < positions.length; i += 3) {
                    positions[i + 1] += Math.sin(Date.now() * 0.001 + i) * 0.001;
                }
                particlesGeometry.attributes.position.needsUpdate = true;
            }

            renderer.render(scene, camera);
        };

        animate(0);

        // Handle resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
            renderer.dispose();
            particlesGeometry.dispose();
            particlesMaterial.dispose();
        };
    }, [color, horizontalBeamOffset, verticalBeamOffset, isLowPerformance]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 0,
                pointerEvents: 'none',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                willChange: 'transform',
                imageRendering: 'auto',
                WebkitTransform: 'translateZ(0)',
                WebkitFontSmoothing: 'antialiased'
            }}
        />
    );
}

export default LaserFlow;
