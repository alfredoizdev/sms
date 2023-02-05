/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import Image from "next/image";
import styles from "./Banner.module.scss";
import NavarComponent from "../Navbar/Navbar.component";
import ButtonComponent from "../Button/Button.component";

interface BannerProps {

}

const Banner: FC<BannerProps> = () => {
	return (
		<div className={styles.banner}>
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="col">
							<NavarComponent />
						</div>
					</div>
				</div>
				<div className="row">
					<div className={`${styles.heroCopy} col`}>
						<h2>Let do your Marketing</h2>
						<p>{`Now is easy them ever to do you messages 's marketing`}</p>
						<div className={styles.heroAction}>
							<ButtonComponent variant="outline" text="Get in Touch" target="/" />
						</div>
					</div>
					<div className="col">
						<div className={styles.heroImg}>
							<img
								src="/banner/b1.png"
								alt="b1"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>);
}

export default Banner;