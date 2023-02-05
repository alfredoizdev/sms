"use client"
import { FC } from "react";
import { useRouter } from "next/navigation";
import styles from './Button.module.scss';

interface ButtonComponentProps {
	text: string;
	target: string;
	variant?: "outline" | "full"
}

const ButtonComponent: FC<ButtonComponentProps> = ({ text, target, variant = "full" }) => {

	const route = useRouter();

	return (
		<button
			className={`${styles.button} ${variant === "full" ? styles.full : styles.outline}`}
			type="button"
			onClick={() => route.push(target)}
		>
			{text}
		</button>
	);
}

export default ButtonComponent;