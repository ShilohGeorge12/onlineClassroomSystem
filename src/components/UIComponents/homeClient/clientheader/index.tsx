'use client';

import { useGlobals } from '@/context';
import { FaX } from 'react-icons/fa6';
import { FiMenu } from 'react-icons/fi';

interface HomeClientHeaderProps {
	username: string;
}

export function HomeClientHeader({ username }: HomeClientHeaderProps) {
	const {
		state: { menu },
		dispatch,
	} = useGlobals();

	const onMenu = () => {
		menu === 'close' ? dispatch({ type: 'menu_open' }) : dispatch({ type: 'menu_close' });
	};

	return (
		<>
			<section className='w-full flex gap-2 items-center py-1 justify-between md:px-4 px-1'>
				<span />
				<div className='flex items-center gap-2 md:gap-1 hover:scale-105 transition duration-500 ease-in-out'>
					<div className='w-full flex items-center justify-center '>
						<div className='size-7 border-[3px] bg-gray-200 border-gray-400 rounded-full flex items-center justify-center text-base font-bold text-gray-500'>
							{username[0]}
						</div>
					</div>
					<button
						type='button'
						name={`Toggle Menu Button`}
						className={`text-xl md:hidden flex`}
						onClick={onMenu}>
						{menu === 'close' ? <FiMenu /> : <FaX />}
					</button>
				</div>
			</section>
			{/* <hr className='w-[95%] border-[1.5px] mt-1 rounded mx-auto' /> */}
		</>
	);
}
