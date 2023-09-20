import { usePlane } from '@react-three/cannon';
import { Plane, SoftShadows } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React from 'react';
import { useState, useEffect } from 'react';
import { Mesh } from 'three';

export const Floor = () => {
	const [scrollY, setScrollY] = useState(window.scrollY);

	const initialRotationX = -Math.PI / 2;
	const initialRotationY = -scrollY / 1000 + 0.075;

	const [ref, api] = usePlane<Mesh>(() => ({
		rotation: [initialRotationX, initialRotationY, 0],
	}));

	useEffect(() => {
		const onScroll = () => setScrollY(window.scrollY);
		window.removeEventListener('scroll', onScroll);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	useFrame(() => {
		api.rotation.set(
			ref.current!.rotation.x,
			ref.current!.rotation.y + initialRotationY,
			ref.current!.rotation.z
		);
	});

	SoftShadows({
		focus: 5,
		size: 5,
	});

	return (
		<mesh ref={ref}>
			<Plane receiveShadow args={[1009, 1000]}>
				<shadowMaterial attach='material' color='#171717' />
			</Plane>
		</mesh>
	);
};
