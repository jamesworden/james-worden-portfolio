import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import headshot from '../images/headshot.jpg';
import { Layout } from '../components/layout';
import { SectionDivider } from '../components/section-divider';
import { ResumeTimeline } from '../components/resume-timeline';
import { resumeEntries } from '../data/resume-entries';
import TextareaAutosize from 'react-textarea-autosize';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

enum MessageStatus {
	Ready = 'Ready',
	Errored = 'Errored',
	Sent = 'Sent',
	Pending = 'Pending',
}

interface IFormData {
	name: string;
	email: string;
	message: string;
}

const IndexPage: React.FC<PageProps> = () => {
	const [messageStatus, setMessageStatus] = useState(MessageStatus.Ready);

	const {
		register,
		handleSubmit,
		formState: { errors },
		clearErrors,
		reset,
	} = useForm<IFormData>();

	const onSubmit = (formData: IFormData) => {
		clearErrors();
		setMessageStatus(MessageStatus.Pending);

		axios
			.post('https://ex0av8epzj.execute-api.us-east-1.amazonaws.com/Production', formData)
			.then((_) => setMessageStatus(MessageStatus.Sent))
			.catch((_) => setMessageStatus(MessageStatus.Errored));
	};

	const handleSendAnother = () => {
		setMessageStatus(MessageStatus.Ready);
		reset();
	};

	return (
		<Layout contactSectionId='#contact-section'>
			<section className='flex justify-between my-8 md:mt-36 mb-40 flex-col md:flex-row flex'>
				<div className='pt-[50px] flex flex-col mb-8'>
					<div className='pb-8'>
						<h1 className='text-4xl pb-2'>I'm James Worden.</h1>
						<span>I strive to build simple and</span>
						<br />
						<span>intuitive software.</span>
					</div>

					<div>
						<button className='uppercase px-8 py-2 tracking-widest bg-rose-900 text-white text-sm rounded-md shadow-2xl tracking-widest'>
							My Projects
						</button>
					</div>
				</div>

				<div className='flex justify-end'>
					<div className='relative mr-4 md:w-[360px] md:h-[240px] w-[320px] h-[213.3px]'>
						<img alt='Headshot' src={headshot} className='rounded-3xl absolute z-10' />
						<div className='absolute top-[20px] left-[20px] w-full md:h-full bg-rose-900 rounded-3xl z-2 shadow-2xl h-[213px]' />
					</div>
				</div>
			</section>

			{/* <SectionDivider displayName='About' displayNumber='00'></SectionDivider>

			<section className='md:columns-2 my-16'>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
					nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
					fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
					amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
					adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
					ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
					elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
					sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
					adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
					ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
					elit.
				</p>
			</section> */}

			<SectionDivider displayName='Skills' displayNumber='01'></SectionDivider>

			<section className='flex flex-wrap justify-between my-16'>
				<div className='max-w-xs p-2'>
					<h3 className='text-xl mb-2 border-b'>Frontend</h3>
					<p>
						Angular, React, Gatsby, TypeScript, JavaScript, HTML, CSS, SASS, Bootstrap,
						TailwindCSS, NX, RXJS, NPM, Adobe XD
					</p>
				</div>
				<div className='max-w-xs p-2'>
					<h3 className='text-xl mb-2 border-b'>Backend</h3>
					<p>C#, Java, NodeJS, PostgreSQL, MongoDB, Redis, RabbitMQ</p>
				</div>
				<div className='max-w-xs p-2'>
					<h3 className='text-xl mb-2 border-b'>Testing & Infrastructure</h3>
					<p>Playwright, Cypress, Jest, Postman, AWS, Docker, Git, Bitbucket, Bamboo</p>
				</div>
			</section>

			<SectionDivider displayName='Resume' displayNumber='02'></SectionDivider>

			<section className='flex justify-around my-16'>
				<ResumeTimeline resumeEntries={resumeEntries}></ResumeTimeline>
			</section>

			<SectionDivider displayName='Contact' displayNumber='03'></SectionDivider>

			<section className='flex justify-around flex-col my-16' id='contact-section'>
				{messageStatus === MessageStatus.Ready ? (
					<div>
						<h2 className='text-2xl'>james@jamesworden.com</h2>

						<form
							onSubmit={handleSubmit(onSubmit)}
							className='py-8 flex flex-col max-w-sm'
						>
							<div className='flex'>
								<label htmlFor='name' className='mr-4'>
									<h5>Name:</h5>
								</label>
								<input
									className='bg-transparent outline-none border-b border-slate-800 w-full'
									type='text'
									{...register('name', {
										required: 'This field is required.',
										maxLength: 96,
									})}
								/>
							</div>

							{errors.name && (
								<span className='text-rose-900 text-sm mt-1'>
									{errors.name?.message}
								</span>
							)}

							<br />

							<div className='flex'>
								<label htmlFor='email' className='mr-4'>
									<h5>Email:</h5>
								</label>
								<input
									className='bg-transparent outline-none border-b border-slate-800 w-full'
									type='text'
									{...register('email', {
										required: 'This field is required.',
										maxLength: 96,
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
											message: 'Invalid email address.',
										},
									})}
								/>
							</div>

							{errors.email?.message && (
								<span className='text-rose-900 text-sm mt-1'>
									{errors.email?.message}
								</span>
							)}

							<br />

							<div className='flex'>
								<label htmlFor='message' className='mr-4'>
									<h5>Message:</h5>
								</label>
								<TextareaAutosize
									className='bg-transparent outline-none border-b border-slate-800 resize-none w-full'
									{...register('message', {
										required: 'This field is required.',
									})}
									minRows={1}
									maxRows={5}
								></TextareaAutosize>
							</div>

							{errors.message?.message && (
								<span className='text-rose-900 text-sm mt-1'>
									{errors.message?.message}
								</span>
							)}

							<div>
								<button
									type='submit'
									className='uppercase px-8 py-2 tracking-widest bg-rose-900 text-white text-sm rounded-md shadow-2xl tracking-widest mt-8'
								>
									Send
								</button>
							</div>
						</form>
					</div>
				) : messageStatus === MessageStatus.Errored ? (
					<h3 className='text-xl'>
						There was an error trying to send your message - try emailing me directly
						instead. Sorry!
					</h3>
				) : messageStatus === MessageStatus.Pending ? (
					<h3 className='text-xl'>Sending your message...</h3>
				) : (
					<div className='flex flex-col'>
						<h3 className='text-xl mb-2'>Your message was sent.</h3>
						<span>Thanks for reaching out!</span>
						<div>
							<button
								className='uppercase px-8 py-2 tracking-widest bg-rose-900 text-white text-sm rounded-md shadow-2xl tracking-widest mt-8'
								onClick={handleSendAnother}
							>
								Send another
							</button>
						</div>
					</div>
				)}
			</section>
		</Layout>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
