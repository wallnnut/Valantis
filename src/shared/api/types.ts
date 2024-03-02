export enum Actions {
	GET_IDS = "get_ids",
	GET_ITEMS = "get_items",
	GET_FIELDS = "get_fields",
	FILTER = "filter",
}

export type IdsParams = {
	offset: number;
	limit: number;
}
export interface IdsRequestData {
	action: Actions.GET_IDS;
	params: IdsParams;
}
export type IdsResponseData = {
	result: string[];
}

// ++++++++++++++++++++++++++++++

export type Item = {
	brand: string | null;
    id: string;
	price: number;
	product: string;
}

export type ItemsParams = {
	ids: string[];
}
export interface ItemsRequestData {
	action: Actions.GET_ITEMS;
	params: ItemsParams;
}
export type ItemsResponseData = {
	result: Item[];
}

// ++++++++++++++++++++++++++++++

export type FieldParams = {
	field: string;
	offset: number;
	limit: number;
}
export interface FieldRequestData {
	action: Actions.GET_FIELDS;
	params?: FieldParams;
}
export type FieldResponseData = {
	result: string[];
}

// ++++++++++++++++++++++++++++++


export type FilterParams = {
	product?: string;
	price?: number;
	brand?: string | null;
}
export interface FilterRequestData {
	action: Actions.FILTER;
	params?: FilterParams;
}
export type FilterResponseData = {
	result: string[];
}

export type Options = {
	name: string;
	brand: string;
	price: number;
}

export type FilterData = {
	price?: string;
	brand?: string;
	product?: string;
}