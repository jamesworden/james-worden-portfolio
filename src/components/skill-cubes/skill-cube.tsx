import React from 'react';
import { Box, useTexture } from '@react-three/drei';
import { Triplet, useBox } from '@react-three/cannon';
import { BufferGeometry, Mesh } from 'three';

export interface SkillCube {
	rotation: Triplet;
	position: Triplet;
	image: any;
}

export const SkillCube = (props: SkillCube) => {
	const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useTexture([props.image]);

	const [ref] = useBox(() => ({
		mass: 1,
		position: props.position,
		rotation: props.rotation,
	}));

	return (
		<mesh ref={ref as React.RefObject<Mesh<BufferGeometry>>}>
			<Box castShadow receiveShadow>
				<meshStandardMaterial
					metalness={3}
					toneMapped
					map={colorMap}
					displacementMap={displacementMap}
					normalMap={normalMap}
					roughnessMap={roughnessMap}
					aoMap={aoMap}
					displacementScale={0.2}
				/>
			</Box>
		</mesh>
	);
};
