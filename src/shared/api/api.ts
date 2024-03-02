import axios, { AxiosResponse } from "axios";
import type { IdsRequestData, IdsResponseData, ItemsRequestData, ItemsResponseData, FieldRequestData, FieldResponseData, FilterRequestData, FilterResponseData} from "./types";
import md5 from "md5";
import axiosRetry from "axios-retry";

interface APIMethods {
	get_ids: (requestData: IdsRequestData) => Promise<IdsResponseData>;
	get_items: (requestData: ItemsRequestData) => Promise<ItemsResponseData>
	get_fields: (requestData: FieldRequestData) => Promise<FieldResponseData>
	filter: (requestData: FilterRequestData) => Promise<FilterResponseData>

}


const password = "Valantis";
const generateXAuth = (password: string) => {
	const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
	const authString = `${password}_${timestamp}`;
	return md5(authString);
};
const xAuth = generateXAuth(password);
const axiosInstance = axios.create({
	baseURL: "https://api.valantis.store:41000/",
	headers: {
		"Content-Type": "application/json",
		"X-Auth": xAuth,
	}
});
axiosRetry(axiosInstance, { 
	retries: 3,
	retryDelay: (...arg) => axiosRetry.exponentialDelay(...arg, 1000),
	retryCondition(error) {
		switch (error.response?.status) {
		case 500:
		case 501:
			return true;
		default:
			return false;
		}
	},
	onRetry: (retryCount, error) => {
		console.log(error.response?.status);
		console.log("retry count: ", retryCount);
		
	},
});


class API implements APIMethods {
	async get_ids(requestData: IdsRequestData) {
		const response: AxiosResponse<IdsResponseData> = await axiosInstance.post("", requestData);
		return response.data;
	}
	async get_items(requestData: ItemsRequestData) {
		const response: AxiosResponse<ItemsResponseData> = await axiosInstance.post("", requestData);
		return response.data;
	}
	async get_fields(requestData: FieldRequestData) {
		const response: AxiosResponse<FieldResponseData>= await axiosInstance.post("", requestData);
		return response.data;
	}
	async filter(requestData: FilterRequestData) {
		const response: AxiosResponse<FilterResponseData> = await axiosInstance.post("", requestData);
		return response.data;
	}
	
	
	
}

export const api = new API();