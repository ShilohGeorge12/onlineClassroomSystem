import { AppLayout } from '@/components/UIComponents/appLayout';
// import { Spinner } from '@/components/UIComponents/loadingSpinner';
import { MenuClient } from '@/components/UIComponents/menuClient';
// import Image from 'next/image';

export default async function Settings() {
	return (
		<AppLayout>
			<section className='w-full h-full flex flex-col'>
				<MenuClient />
				{/* <Spinner /> */}
			</section>
		</AppLayout>
	);
}
