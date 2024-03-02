import { FC, ReactNode } from "react";
import cls from "./AboutPageLayout.module.scss";
interface AboutPageLayoutProps {
	header?: ReactNode;
	main: ReactNode;
	footer?: ReactNode;
}

export const AboutPageLayout:FC<AboutPageLayoutProps> = (props) => {
	const {header, main, footer} = props;
	return (
		<div className={cls["about-layout"]}>
			<div className={cls["header"]}>{header}</div>
			<div className={cls["main"]}>{main}</div>
			<div className={cls["footer"]}>{footer}</div>
		</div>
	);
};
 