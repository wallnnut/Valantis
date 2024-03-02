import cls from "./MainPageLayout.module.scss";
import { FC, ReactElement } from "react";

interface MainPageLayoutProps {
	header?: ReactElement;
	main: ReactElement;
	sidebar?: ReactElement;
	footer?: ReactElement;
}

export const MainPageLayout: FC<MainPageLayoutProps> = (props) => {
	const {header, main, footer, sidebar} = props;
	return ( 
		<div className={cls["main-layout"]}>
			<div className={cls["header"]}>{header}</div>
			<div className={cls["sidebar"]}>{sidebar}</div>
			<div className={cls["main"]}>{main}</div>
			<div className={cls["footer"]}>{footer}</div>
		</div>
	);
};