import Link from "next/link";
import { FC } from "react";
import BrandComponent from "../Brand/Brand.component";
import styles from "./Navbar.module.scss";
import { BsJustify } from "react-icons/bs";

interface NavarComponentProps {

}

const NavarComponent: FC<NavarComponentProps> = () => {
	return (<nav className={styles.nav}>
		<BrandComponent />
		<ol>
			<li>
				<Link href={"/"}>
					Home
				</Link>
			</li>
			<li>
				<Link href={"/"}>
					Services
				</Link>
			</li>
			<li>
				<Link href={"/"}>
					About Us
				</Link>
			</li>
		</ol>
		<button className={styles.mobileMenu}><BsJustify /></button>
	</nav>);
}

export default NavarComponent;