import Image from 'next/image'
import styles from './page.module.scss'
import { TfiComments, TfiHeadphoneAlt, TfiMedall } from "react-icons/tfi";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { TfiEmail } from "react-icons/tfi";
import { TfiCheckBox } from "react-icons/tfi";



export default function Home() {
	return (
		<main className='container'>
			<div className={styles.serviceContainer}>
				<section className='row'>
					<article className='col'>
						<div className={styles.services}>
							<div className={styles.containerIcon}>
								<div className={styles.serviceIcon}>
									<TfiComments />
								</div>
							</div>
							<h2>{`Sms Campaing`}</h2>
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Sequi quidem consectetur temporibus ipsum quis omnis, facere,
								commodi earum sit
								illum numquam voluptates!</p>

						</div>
					</article>
					<article className='col'>
						<div className={styles.services}>
							<div className={styles.containerIcon}>
								<div className={styles.serviceIcon}>
									<TfiCommentsSmiley />
								</div>
							</div>
							<h2>{`What's up Campaing`}</h2>
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Sequi quidem consectetur temporibus ipsum quis omnis, facere,
								commodi earum sit
								illum numquam voluptates!</p>
						</div>
					</article>
					<article className='col'>
						<div className={styles.services}>
							<div className={styles.containerIcon}>
								<div className={styles.serviceIcon}>
									<TfiEmail />
								</div>
							</div>
							<h2>{`Email Campaing`}</h2>
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Sequi quidem consectetur temporibus ipsum quis omnis, facere,
								commodi earum sit
								illum numquam voluptates!</p>
						</div>
					</article>
				</section>
			</div>
			<section className={styles.aboutUsContainer}>
				<article className='row'>
					<div className='col'>
						<div className={styles.aboutUsImg}>
							<Image src='/3.png' alt='us' fill />
						</div>
					</div>
					<div className='col'>
						<div className={styles.copyAboutUs}>
							<h2>About us</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Saepe odit sed ut. Molestias incidunt maxime sint consequuntur
								sed nobis ex possimus culpa ut, id vel a assumenda aperiam explicabo! Quaerat!
							</p>
							<ol>
								<li>
									<div className={styles.icon}>
										<TfiCheckBox />
									</div>
									<div className={styles.copy}>
										<h3>First On Field</h3>
										<span>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Saepe odit sed ut.
										</span>
									</div>
								</li>
								<li>
									<div className={styles.icon}>
										<TfiHeadphoneAlt />
									</div>
									<div className={styles.copy}>
										<h3>24/7 Support</h3>
										<span>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Saepe odit sed ut.
										</span>
									</div>
								</li>
								<li>
									<div className={styles.icon}>
										<TfiMedall />
									</div>
									<div className={styles.copy}>
										<h3>Easy To Reach</h3>
										<span>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Saepe odit sed ut.
										</span>
									</div>
								</li>
							</ol>
						</div>
					</div>
				</article>
			</section>
		</main>
	)
}
