import React from 'react';
import cx from 'classnames';

interface GithubSvgProps {
	pathClass?: string;
}

export const GithubSvg: React.FC<GithubSvgProps> = ({ pathClass: svgClass }) => (
	<svg width='32' height='23' viewBox='0 0 37.141 25.713'>
		<g
			id='Icon_ionic-ios-mail'
			data-name='Icon ionic-ios-mail'
			transform='translate(-3.375 -7.875)'
		>
			<path
				id='Path_5'
				data-name='Path 5'
				d='M40.212,10.369l-9.607,9.785a.173.173,0,0,0,0,.25l6.723,7.16a1.159,1.159,0,0,1,0,1.643,1.164,1.164,0,0,1-1.643,0l-6.7-7.133a.183.183,0,0,0-.259,0L27.1,23.734a7.188,7.188,0,0,1-5.125,2.161,7.333,7.333,0,0,1-5.232-2.223l-1.571-1.6a.183.183,0,0,0-.259,0l-6.7,7.133a1.164,1.164,0,0,1-1.643,0,1.159,1.159,0,0,1,0-1.643l6.723-7.16a.19.19,0,0,0,0-.25L3.679,10.369a.176.176,0,0,0-.3.125V30.073A2.865,2.865,0,0,0,6.232,32.93H37.659a2.865,2.865,0,0,0,2.857-2.857V10.494A.179.179,0,0,0,40.212,10.369Z'
				transform='translate(0 0.658)'
				className={cx('fill-rose-900 dark:fill-white', svgClass ? svgClass : '')}
			/>
			<path
				id='Path_6'
				data-name='Path 6'
				d='M21.716,24.222a4.854,4.854,0,0,0,3.491-1.464L39.215,8.5a2.806,2.806,0,0,0-1.768-.625H5.994A2.787,2.787,0,0,0,4.226,8.5L18.234,22.758A4.854,4.854,0,0,0,21.716,24.222Z'
				transform='translate(0.23)'
				className={cx('fill-rose-900 dark:fill-white', svgClass ? svgClass : '')}
			/>
		</g>
	</svg>
);
