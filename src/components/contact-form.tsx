import * as React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import TextareaAutosize from 'react-textarea-autosize';

const CONTACT_FORM_ENDPOINT = 'https://ex0av8epzj.execute-api.us-east-1.amazonaws.com/Production';

export interface ContactFormProps {}

enum MessageStatus {
	Ready = 'Ready',
	Errored = 'Errored',
	Sent = 'Sent',
	Pending = 'Pending',
}

interface FormData {
	name: string;
	email: string;
	message: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({}) => {
	const [messageStatus, setMessageStatus] = useState(MessageStatus.Ready);

	const {
		register,
		handleSubmit,
		formState: { errors },
		clearErrors,
		reset,
	} = useForm<FormData>();

	const onSubmit = (formData: FormData) => {
		clearErrors();
		setMessageStatus(MessageStatus.Pending);

		axios
			.post(CONTACT_FORM_ENDPOINT, formData)
			.then((_) => setMessageStatus(MessageStatus.Sent))
			.catch((_) => setMessageStatus(MessageStatus.Errored));
	};

	const handleSendAnother = () => {
		setMessageStatus(MessageStatus.Ready);
		reset();
	};

	return (
		<React.Fragment>
			{messageStatus === MessageStatus.Ready ? (
				<div>
					<h2 className='text-2xl'>james@jamesworden.com</h2>

					<form onSubmit={handleSubmit(onSubmit)} className='py-8 flex flex-col max-w-sm'>
						<div className='flex'>
							<label htmlFor='name' className='mr-4'>
								<h5>Name:</h5>
							</label>
							<input
								className='bg-transparent outline-none border-b border-slate-800 dark:border-gray-200 w-full'
								type='text'
								{...register('name', {
									required: 'This field is required.',
									maxLength: 96,
								})}
							/>
						</div>

						{errors.name && (
							<span className='text-rose-900 dark:text-gray-100 text-sm mt-1 transition'>
								{errors.name?.message}
							</span>
						)}

						<br />

						<div className='flex'>
							<label htmlFor='email' className='mr-4'>
								<h5>Email:</h5>
							</label>
							<input
								className='bg-transparent outline-none border-b border-slate-800 dark:border-gray-200 w-full'
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
							<span className='text-rose-900 dark:text-gray-100 text-sm mt-1 transition'>
								{errors.email?.message}
							</span>
						)}

						<br />

						<div className='flex'>
							<label htmlFor='message' className='mr-4'>
								<h5>Message:</h5>
							</label>
							<TextareaAutosize
								className='bg-transparent outline-none border-b border-slate-800 dark:border-gray-200 resize-none w-full'
								{...register('message', {
									required: 'This field is required.',
								})}
								minRows={1}
								maxRows={5}
							></TextareaAutosize>
						</div>

						{errors.message?.message && (
							<span className='text-rose-900 dark:text-gray-100 text-sm mt-1 transition'>
								{errors.message?.message}
							</span>
						)}

						<div>
							<button
								type='submit'
								className='uppercase px-8 py-2 tracking-widest dark:bg-emerald-900 bg-rose-900 transition text-white text-sm rounded-md shadow-xl tracking-widest mt-8'
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
							className='uppercase px-8 py-2 tracking-widest bg-rose-900 dark:bg-rose-900 transition text-white text-sm rounded-md shadow-xl tracking-widest mt-8'
							onClick={handleSendAnother}
						>
							Send another
						</button>
					</div>
				</div>
			)}
		</React.Fragment>
	);
};
