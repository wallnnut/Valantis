import { FC } from "react";
import cls from "./Label.module.scss";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label: FC<LabelProps> = (props) => {
	const { htmlFor, children } = props;
	
	return ( 
		<label className={cls["label"]} htmlFor={htmlFor}>{children}</label>
	);
};
 