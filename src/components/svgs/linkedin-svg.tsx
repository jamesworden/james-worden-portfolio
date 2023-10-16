import React from 'react';
import cx from 'classnames';

interface LinkedInSvgProps {
	pathClass?: string;
}

export const LinkedInSvg: React.FC<LinkedInSvgProps> = ({ pathClass: svgClass }) => (
	<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 36 36'>
		<path
			id='Icon_simple-linkedin'
			data-name='Icon simple-linkedin'
			d='M30.67,30.678H25.34V22.324c0-1.992-.041-4.556-2.778-4.556-2.779,0-3.2,2.167-3.2,4.409v8.5H14.026V13.5h5.121v2.342h.069a5.618,5.618,0,0,1,5.055-2.775c5.4,0,6.4,3.555,6.4,8.183v9.429ZM8.005,11.149a3.1,3.1,0,1,1,3.1-3.1A3.093,3.093,0,0,1,8.005,11.149Zm2.673,19.528H5.332V13.5h5.346ZM33.338,0H2.657A2.625,2.625,0,0,0,0,2.593V33.406A2.624,2.624,0,0,0,2.657,36H33.333A2.634,2.634,0,0,0,36,33.407V2.593A2.635,2.635,0,0,0,33.333,0Z'
			className={cx('fill-rose-900 dark:fill-white', svgClass ? svgClass : '')}
		/>
	</svg>
);
