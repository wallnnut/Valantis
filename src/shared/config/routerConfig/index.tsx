import { AboutPageLazy } from "pages/AboutPage";
import { MainPageLazy } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";

import { RouteProps } from "react-router-dom";

export enum AppRoutes {
	MAIN_PAGE = "main_page",
	ABOUT = "about",
	NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN_PAGE]: "/",
	[AppRoutes.ABOUT]: "/about",
	[AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN_PAGE]: {
		path: RoutePath.main_page,
		element: <MainPageLazy />,
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath.about,
		element: <AboutPageLazy />,
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath.not_found,
		element: <NotFoundPage />,
	},
};