import { FC } from "react";
import { Label } from "../Label/Label";
import cls from "./RadioField.module.scss";
export type Option = {
	name: string;
	value: string;
}

interface RadioFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	handleRadionChange: (target: {name: string, value: string}) => void;
	options: Option[];
	label: string;
}
export const RadioField: FC<RadioFieldProps> = (props) => {
	const { type = "radio", options, label, name, handleRadionChange, value } = props;
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		handleRadionChange({ name: event.target.name, value: event.target.value });
	};
	return (
		<div className={cls["wrapper"]}>
			<Label>{label}</Label>
			<div className={cls["options-list"]}>
				{options.map((option) => (
					<div
						className={cls["options-wrapper"]} 
						key={option.name + "_" + option.value}
					>
						<input
							type={type}
							name={name}
							id={option.name + "_" + option.value}
							checked={option.value === value}
							value={option.value}
							onChange={handleChange}
						/>
						<Label
							htmlFor={option.name + "_" + option.value}
						>
							{option.name}
						</Label>
					</div>
				))}
			</div>
		</div>
	);
};

