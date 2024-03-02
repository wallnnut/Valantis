import { Item } from "shared/api/types";

export const paginate = (items: Item[], pageNumber:number, pageSize:number) => {
	const startIndex = (pageNumber - 1) * pageSize;
	return [...items].splice(startIndex, pageSize);
};