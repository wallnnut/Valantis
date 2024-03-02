import { type FC } from "react";
import cls from "./Loader.module.scss";
export const Loader: FC = () => {
	return (
		<div className={cls["loader-wrapper"]}>
			<span className={cls.loader}></span>
		</div>
		
	);
};
