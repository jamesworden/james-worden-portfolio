import { useState, useEffect } from 'react';

function useDimensions() {
	const [dimensions, setDimensions] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	useEffect(() => {
		function updateDimensions() {
			setDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}

		window.addEventListener('resize', updateDimensions);

		return () => {
			window.removeEventListener('resize', updateDimensions);
		};
	}, []);

	return dimensions;
}

export { useDimensions };
