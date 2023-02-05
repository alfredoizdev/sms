import Link from "next/link";
import { FC } from "react";
import styles from './Footer.module.scss'

interface FooterComponentProps {

}

const FooterComponent: FC<FooterComponentProps> = () => {
	return (<div className={styles.footer}>
		<div className={styles.footerMenu}>
			<h2>Menu</h2>
			<ol>
				<li>
					<Link href={"/"}>Home</Link>
				</li>
				<li>
					<Link href={"/"}>Service</Link>
				</li>
				<li>
					<Link href={"/"}>About</Link>
				</li>
			</ol>
		</div>
		<div className={styles.footerLocation}>
			<h2>Contact</h2>
			<p><b>Cell:</b> 294-423-6789</p>
			<p><b>Fax:</b> 294-423-6789</p>
			<p><b>address:</b> 8990 W tomball TX,7727</p>
		</div>
	</div>);
}

export default FooterComponent;