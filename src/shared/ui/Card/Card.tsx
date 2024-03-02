import type { FC } from "react";
import cls from "./Card.module.scss";
import CardImage from "shared/assets/images/cardImage.png";

interface CardProps {
	id: string;
	name: string;
	brand: string | null;
	price: number;
}

export const Card: FC<CardProps> = (props) => {
	const {id, name, brand, price} = props;
	return (
		<div className={cls["card"]}>
			<ul className={cls["card-inner"]}>
				<h3>{name}</h3>
				<li >
					<img className={cls["card-image"]} src={CardImage} alt="" />
				</li>
				<li className={cls["card-text"]}>
					ID: {id}
				</li>
				<li>
					Бренд: {brand}
				</li>
				<li>
					Цена: {price}
				</li>
			</ul>
		</div>
	);
};
