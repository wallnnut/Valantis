import { AxiosError } from "axios";
import { makeAutoObservable, flow} from "mobx";
import { api } from "shared/api/api";
import { Item, ItemsRequestData, Actions, IdsRequestData, FieldRequestData, IdsResponseData, ItemsResponseData, FilterRequestData, FilterData, FilterResponseData, FieldParams, FieldResponseData } from "shared/api/types";

enum Status {
	FULFILLED = "fulfilled",
	REJECTED = "rejected",
	PENDING = "pending"
}

class CardStore {
	private status: string = "";
	private ids: string[] = [];
	private items: Item[] = [];
	private offset: number = 0;
	private limit: number = 100;
	private error: string = "";
	private fields: string[] = [];
	private isLoading: boolean = true;
	private activePage: number = 1;
	private limitPerPage: number = 50;
	private pageCount: number = 0;
	private brands: string[] = [];
	constructor() {
		makeAutoObservable(this, {
			fetchItems: flow,
			fetchIds: flow,
			fetchFields: flow,
			filter: flow,
			changePage: flow,
			fetchBrands: flow,
		});
	}
	private set setActivePage(page: number) {
		this.activePage = page;
	}
	private  set setStatus(status: string) {
		this.status = status;
	}
	public *fetchItems(ids: string[], filter: boolean) {
		this.setStatus = (Status.PENDING);
		this.isLoading = true;
		try {
			const requestData: ItemsRequestData = {
				action: Actions.GET_ITEMS,
				params: {ids: ids},
			};
			const data: ItemsResponseData = yield api.get_items(requestData);
			if(filter) {
				this.items = data.result;
			} else {
				this.items = [...this.items, ...data.result];
			}
			const uniqueIds = new Set();
			this.items = this.items.filter(obj => {
				if (!uniqueIds.has(obj.id)) {
					uniqueIds.add(obj.id);
					return true;
				}
				return false;
			});
			this.pageCount = Math.ceil(this.items.length / this.limitPerPage);
			this.setStatus = (Status.FULFILLED);
			this.isLoading = false;
		} catch (error) {
			const e = error as AxiosError;
			this.error = e.message;
			this.setStatus = (Status.REJECTED);
			this.isLoading = false;
			console.log(e.response?.status);
			console.log(this.error);
		}
	}
	public *fetchIds(reset: boolean) {
		this.setStatus = (Status.PENDING);
		this.isLoading = true;
		const requestData: IdsRequestData = {
			action: Actions.GET_IDS,
			params: {offset: this.offset, limit: this.limit}
		};
		try {
			const ids: IdsResponseData = yield api.get_ids(requestData);
			this.ids = [... new Set(ids.result)];
			this.offset += this.limit;
			this.setStatus = (Status.FULFILLED);
			this.isLoading = false;
			yield this.fetchItems(this.ids, reset);
		} catch (error) {
			const e = error as AxiosError;
			this.error = e.message;
			this.setStatus = (Status.REJECTED);
			this.isLoading = false;
			console.log(e.response?.status);
			console.log(this.error);
		}
	}
	public *fetchFields() {
		this.setStatus = (Status.PENDING);
		const requestData: FieldRequestData = {
			action: Actions.GET_FIELDS,
		};
		try {
			const fields: FieldResponseData = yield api.get_fields(requestData);
			this.fields = [...fields.result, ...this.fields];
			this.setStatus = (Status.FULFILLED);
		} catch (error) {
			const e = error as AxiosError;
			this.error = e.message;
			this.setStatus = (Status.REJECTED);
			console.log(e.response?.status);
			console.log(this.error);

		}
	}
	public *fetchBrands(params: FieldParams) {
		this.setStatus = (Status.PENDING);
		const requestData: FieldRequestData = {
			action: Actions.GET_FIELDS,
			params
		};
		try {
			const brands: FieldResponseData = yield api.get_fields(requestData);
			this.brands = [...new Set(brands.result)];
			const index = this.brands.findIndex(el => el === null);
			this.brands[index] = "Нет бренда";
			this.setStatus = (Status.FULFILLED);
		} catch (error) {
			const e = error as AxiosError;
			this.error = e.message;
			this.setStatus = (Status.REJECTED);
			console.log(e.response?.status);
			console.log(this.error);

		}
	}
	public *filter(params: FilterData) {
		this.setStatus = (Status.PENDING);
		const paramsToSend: FilterData = {};
		for (const key in params) {
			if(params[key as keyof FilterData] !== "") {
				paramsToSend[key as keyof FilterData] = params[key as keyof FilterData];
			}
		}
		const requestData: FilterRequestData = {
			action: Actions.FILTER,
			params: {...paramsToSend, price: Number(paramsToSend.price), brand: paramsToSend.brand === "Нет бренда" ? null : paramsToSend.brand},
		};
		try {
			const ids: FilterResponseData = yield api.filter(requestData);
			this.ids.splice(0, this.ids.length);
			this.ids = [...new Set(ids.result)];
			yield this.fetchItems(this.ids, true);
			this.activePage = 1;
			this.setStatus = (Status.FULFILLED);
		} catch (error) {
			const e = error as AxiosError;
			this.error = e.message;
			this.setStatus = (Status.REJECTED);
			console.log(e.response?.status);
			console.log(this.error);
		}
	}
	public *changePage(pageNumber: number){
		if (pageNumber >= this.pageCount) {
			yield this.fetchIds(false);
			yield this.fetchItems(this.ids, false);
			if (this.status === "fulfilled") {
				this.setActivePage = pageNumber;
			} 
		} else {
			this.setActivePage = pageNumber;
		}
		
	}
	public get getIdsLength() {
		return this.ids.length;
	}
	public get getBrands() {
		return this.brands;
	}
	public get getLoadingStatus() {
		return this.isLoading;
	}
	public get getLimitPerPage() {
		return this.limitPerPage;
	}
	public get getItems() {
		return this.items;
	}
	public get getActivePage() {
		return this.activePage;
	}
	public get getPageCount() {
		return this.pageCount;
	}
	
}

export const cardStore = new CardStore();