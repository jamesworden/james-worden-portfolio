import React from 'react';
import { blogPostThumbnails } from '../data/blog-post-thumbnails';
import { Link } from 'gatsby';

export interface IBlogPostCard {
	slug: string;
	title: string;
	description: string;
	date: string;
	thumbnailId: string;
	githubUrl?: string;
	category?: string;
	keywords: string[];
	featured: boolean;
}

interface BlogCardProps {
	blogPostCard: IBlogPostCard;
}

export const BlogPostCard: React.FC<BlogCardProps> = ({ blogPostCard }) => {
	const image = blogPostThumbnails[blogPostCard.thumbnailId];

	return (
		<div className='rounded-lg ring-1 ring-slate-700/10 dark:bg-gray-700 shadow-xl md:ml-16 mt-16 md:mt-0 bg-gray-200 flex gap-8 py-6 dark:bg-slate-800 transition flex-col md:flex-row px-4 md:px-0 max-w-sm md:max-w-none'>
			<Link
				to={`/blog/${blogPostCard.slug}`}
				className='w-[320px] h-[213.3px] md:-ml-16 -mt-16 md:mt-0 z-2 h-[213px]'
			>
				<img
					src={image}
					className='rounded-lg shadow-xl hover:scale-105 transition max-w-2xs xs:max-w-xs'
				/>
			</Link>

			<div className='px-2'>
				<div className='flex gap-x-2'>
					{blogPostCard.featured && (
						<div className='bg-rose-600 dark:bg-emerald-600 rounded-lg py-1 px-2 text-white text-xs'>
							Featured
						</div>
					)}

					{blogPostCard.category && (
						<div className='bg-rose-700 dark:bg-emerald-700 rounded-lg py-1 px-2 text-white text-xs'>
							{blogPostCard.category}
						</div>
					)}
				</div>

				<div className='my-4'>
					<span className='font-semibold font-regular text-lg'>{blogPostCard.title}</span>
					<div className='text-sm'>{blogPostCard.date}</div>
				</div>

				<p className='mb-4 max-w-md'>{blogPostCard.description}</p>

				<div className='flex gap-4'>
					{blogPostCard.githubUrl && (
						<div className='flex flex-col justify-around'>
							<a
								href={blogPostCard.githubUrl}
								target='_blank'
								className='inline-block'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='32'
									height='32'
									viewBox='0 0 36 35.109'
								>
									<path
										id='Icon_simple-github'
										data-name='Icon simple-github'
										d='M18,.445a18,18,0,0,0-5.693,35.077c.9.169,1.23-.387,1.23-.866,0-.428-.015-1.56-.023-3.06-5.007,1.086-6.063-2.415-6.063-2.415a4.771,4.771,0,0,0-2-2.632c-1.63-1.116.126-1.094.126-1.094A3.774,3.774,0,0,1,8.333,27.31a3.836,3.836,0,0,0,5.243,1.5,3.838,3.838,0,0,1,1.14-2.407c-4-.45-8.2-2-8.2-8.9a6.944,6.944,0,0,1,1.852-4.83,6.4,6.4,0,0,1,.158-4.764s1.507-.483,4.95,1.845a16.97,16.97,0,0,1,9,0C25.9,7.428,27.4,7.911,27.4,7.911a6.577,6.577,0,0,1,.18,4.764,6.973,6.973,0,0,1,1.845,4.83c0,6.915-4.208,8.438-8.212,8.88a4.309,4.309,0,0,1,1.215,3.33c0,2.409-.022,4.344-.022,4.929,0,.472.315,1.035,1.237.855A17.978,17.978,0,0,0,18,.445'
										transform='translate(0 -0.446)'
										className='fill-gray-800 dark:fill-white'
									/>
								</svg>
							</a>
						</div>
					)}

					<div className='flex flex-col justify-around'>
						<Link to={`/blog/${blogPostCard.slug}`}>See post »</Link>
					</div>
				</div>

				{blogPostCard.keywords.length > 0 && (
					<>
						<div className='mt-6 flex gap-2 max-w-sm flex-wrap text-gray-600 dark:text-gray-300'>
							{blogPostCard.keywords.map((keyword, i) => (
								<span
									key={i}
									className='bg-gray-300 rounded-lg py-1 px-2 text-xs text-gray-700'
								>
									{keyword}
								</span>
							))}
						</div>
					</>
				)}
			</div>
		</div>
	);
};
