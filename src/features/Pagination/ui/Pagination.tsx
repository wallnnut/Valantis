import type { FC } from "react";
import cls from "./Pagination.module.scss";
import { classNames } from "shared/lib/classNames";
import { cardStore } from "entities";
import { calculateVisiblePages } from "shared/lib/calculateVisiblePages";

interface PaginationProps {
	totalPages: number;
	onPageChange: (index: number) => void;
	activePage: number;
	countVisiblePages: number;
}

export const Pagination: FC<PaginationProps> = (props) => {
	const {totalPages, onPageChange, activePage, countVisiblePages} = props;
	const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
	const visible = calculateVisiblePages(pageNumbers, countVisiblePages, totalPages, activePage);
	const active = cardStore.getActivePage;
	if (pageNumbers.length === 1) {return null;}
	return (
		<nav>
			<ul className={cls["pagination"]}>
				{visible.map(number => <li onClick={() => onPageChange(number)} className={classNames(cls["pagination-item"], {}, [number === active ? cls["active"] : ""])} key={number}>{number}</li>)}
			</ul>
		</nav>
	);
};
