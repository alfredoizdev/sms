import Banner from '@/component/ui/Banner/Banner'
import '@/styles/globals.scss'
import Head from './head'
import { Inter } from '@next/font/google'
import FooterComponent from '@/component/ui/Footer/Footer.component';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {

	return (
		<html lang="en">
			<Head />
			<body className={inter.className}>
				<Banner />
				{children}
				<FooterComponent />
			</body>
		</html>
	)
}
