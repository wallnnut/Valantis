import { FC } from "react";
import cls from "./Overlay.module.scss";
import { classNames } from "shared/lib/classNames";

interface OverlayProps {
	isLoading: boolean;
}
export const Overlay: FC<OverlayProps> = (props) => {
	const {isLoading} = props;
	const mods: Record<string, boolean> = {
		[cls.opened]: isLoading,
	};
	return ( 
		<div className={classNames(cls.wrapper, mods)}>
			<div className={cls.overlay}>
			</div>
		</div>
	);
};
 