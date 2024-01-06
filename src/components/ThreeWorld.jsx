import React, {useEffect, useRef} from 'react';
import {
    CircleGeometry,
    Group,
    Mesh,
    MeshBasicMaterial,
    FaceColors,
    ConeGeometry,
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
  } from 'three';

const SnowyMountainScene = () => {
    const mount = useRef();

    useEffect(() => {
        const scene = new Scene();
        const camera = new PerspectiveCamera(
                75, 
                window.innerWidth / window.innerHeight,
                0.1,
                1000,
            );
        const renderer = new WebGLRenderer();

        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const geometry = new ConeGeometry(10, 20, 50);
        const material = new MeshBasicMaterial({
            color: 0xFFFFFF,
            vertexColors: FaceColors,
        });
        const mountain = new Mesh(geometry, material);

        scene.add(mountain);
        mountain.position.set(0, -5, -30);

        // snow
        const snowParticles = new Group()
        const snowGeometry = new CircleGeometry(0.1, 6);
        const snowMaterial = new MeshBasicMaterial({
            color: 0xFFFFFF,
        });

        for (let i=0; i<1000; i++) {
            const snowflake = new Mesh(snowGeometry, snowMaterial);
            const x = (Math.random() - 0.5) * 50;
            const y = Math.random() * 20;
            const z = (Math.random() - 0.5) * 50;
            snowflake.position.set(x, y, z);
            snowParticles.add(snowflake);
        }

        scene.add(snowParticles);

        camera.position.z = 10;

        const animate = () => {
            requestAnimationFrame(animate);

            mountain.rotateOnWorldAxis.y += 0.005;

            snowParticles.children.forEach(flake => {
                flake.position.y -= 0.1;
                if (flake.position.y < 0) {
                    flake.position.y = 20;
                }
            });
            renderer.render(scene, camera);
        };

        const handleResize = () => {
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight;

            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(newWidth, newHeight);
        }

        window.addEventListener('resize', handleResize);

        animate();
        
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);

    return <div ref={mount} />;
}

export default SnowyMountainScene;
