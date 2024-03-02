import { Card } from "../Card/Card";
import { Item } from "shared/api/types";
import cls from "./Cards.module.scss";
import { FC } from "react";
import { withLoading } from "app/hoc/WithLoading/WithLoading";

interface CardsProps {
	cards: Item[];
}

const List: FC<CardsProps> = ({cards}) => {
	return ( 
		<ul className={cls["card-list"]}>
			{cards.map((el: Item) => <li key={el.id}> <Card id={el.id} name={el.product} price={el.price} brand={el.brand} />
			</li>)}
		</ul>
	);
};

export const Cards = withLoading<CardsProps>(List);
