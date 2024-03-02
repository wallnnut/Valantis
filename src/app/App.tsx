import "./styles/style.scss";
import {  type FC } from "react";
import AppRouter from "./providers/router/ui/AppRouter";

export const App: FC = () => {
	
	return (
		<div className="app">
			<AppRouter />
		</div>
	);
};
