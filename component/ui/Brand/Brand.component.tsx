import { FC } from "react";
import styles from './Brand.module.scss';

const BrandComponent: FC = () => {
	return (<div className={styles.brand}>
		<h2>A&<span>D</span></h2>
	</div>)
}

export default BrandComponent