import { FC, memo} from "react";
import cls from "./TextField.module.scss";
import { classNames } from "shared/lib/classNames";
import { Label } from "../Label/Label";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	title?: string;
	handleInputChange: (target: {name: string, value: string}) => void;
}


export const TextField: FC<TextFieldProps> = memo((props) => {
	const {name, value, type,  title, handleInputChange, ...rest } = props;
	
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		handleInputChange({ name: event.target.name, value: event.target.value });
	};
	return (
		<div
			className={classNames(cls["input-group"], {}, [])}
		>
			{title && <Label htmlFor={name}>{title}</Label>}
			<input
				onChange={handleChange}
				{...rest}
				className={classNames(cls.input, {}, [])}
				value={value}
				type={type}
				name={name}
			/>
		</div>
	);
});

TextField.displayName = "InputField";

