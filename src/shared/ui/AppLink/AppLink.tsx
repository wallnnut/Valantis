import { FC, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import cls from "./AppLink.module.scss";

interface AppLinkProp extends LinkProps {
	children: ReactNode;
	className?: string;
}
export const AppLink: FC<AppLinkProp> = (props) => {
	const {children, to} = props;
	return ( 
		<Link className={cls["app-link"]} to={to}>
			{children}
		</Link>
	);
};
 