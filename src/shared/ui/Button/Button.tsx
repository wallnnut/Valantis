import { FC, MouseEvent, useState, useEffect, useLayoutEffect } from "react";
import cls from "./Button.module.scss";
import { classNames } from "shared/lib/classNames";

type Variant = "contained" | "text" | "outlined";


interface ButtonProp extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
	variant?: Variant;
}


export const Button: FC<ButtonProp> = (props) => {
	const { children, type, onClick, disabled, ...otherProps } = props;
	const isDisabled = disabled ? "disabled" : "";
	const [coords, setCoords] = useState({ x: -1, y: -1 });
	const [isRippling, setIsRippling] = useState(false);
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const a = e.target as HTMLElement;
		const rect = a.getBoundingClientRect();
		setCoords({
			x: e.clientX - rect.left,
			y: e.clientY - rect.top,
		});
		onClick && onClick(e);
	};

	useLayoutEffect(() => {
		if (coords.x !== -1 && coords.y !== -1) {
			setIsRippling(true);
			setTimeout(() => setIsRippling(false), 1500);
		} else setIsRippling(false);
	}, [coords]);

	useEffect(() => {
		if (!isRippling) setCoords({ x: -1, y: -1 });
	}, [isRippling]);

	return (
		<button
			onClick={handleClick}
			type={type}
			disabled={disabled}
			className={classNames(cls.button, {}, [
				cls[isDisabled],
			])}
			{...otherProps}
		>
			{children}
			{isRippling ? (
				<span
					className={cls.ripple}
					style={{
						left: coords.x,
						top: coords.y,
					}}
				/>
			) : (
				""
			)}
		</button>
	);
};
 