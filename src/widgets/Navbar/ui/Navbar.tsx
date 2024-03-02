import { type FC } from "react";
import { AppLink } from "shared/ui";
import cls from "./Navbar.module.scss";
import Logo from "shared/assets/images/logo1.png";

export const Navbar: FC = () => {
	return (
		<nav className={cls["nav-bar"]}>
			<ul className={cls["nav-bar__list"]}>
				<li><AppLink to="/">
					<img className={cls["nav-img"]} src={Logo} alt="" />	
				</AppLink></li>
				<li><AppLink to="/about">О проекте</AppLink></li>
			</ul>
		</nav>
	);
};
