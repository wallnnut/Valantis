import { Button, RadioField, TextField } from "shared/ui";
import cls from "./Filter.module.scss";
import { FormEvent, useState } from "react";
import { type FilterData } from "shared/api/types";
import { cardStore } from "entities";
import { observer } from "mobx-react-lite";
import { Option } from "shared/ui/RadioField/RadioField";


export const Filter = observer(() => {
	const [data, setData] = useState<FilterData>({
		price: "",
		brand: "",
		product: "",
	});

	const options: Option[] = [];
	cardStore.getBrands.forEach(el => {
		options.push({name: el, value: el});
	});

	
	const handleChange = (target: {name: string, value: string}) => {
		setData((prevState) => ({
			...prevState,
			[target.name]: target.value,
		}));
	};
	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		cardStore.filter(data);
		
	};
	const handleReset = () => {
		setData(
			{price: "",
				brand: "",
				product: "",});
		cardStore.fetchIds(true);
	};
	return ( 
		<div className={cls["filters"]}>
			<h2 className={cls["filters-header"]}>Фильтры</h2>
			<form className={cls["form"]} onSubmit={handleSubmit} action="">
				<ul className={cls["filters-list"]}>
					<li>
						<TextField handleInputChange={handleChange}  name="price" value={data.price} type="text" title="Цена"/>
					</li>
					<li>
						<RadioField value={data.brand} label="Бренд" handleRadionChange={handleChange} name="brand" options={options}/>
					</li>
					<li>
						<TextField handleInputChange={handleChange} name="product" value={data.product} type="text" title="Название"/>
					</li>
				</ul>
				<Button>Применить</Button>
				<Button onClick={handleReset} type="button">Сбросить фильтр</Button>
			</form>
		</div>
	);
});
 