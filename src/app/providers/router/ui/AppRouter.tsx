import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routerConfig";

const AppRouter = () => {
	return (
		<div className="page-wrapper">
			<Suspense fallback={"Loading..."}>
				<Routes>
					{Object.values(routeConfig).map(({ element, path }) => (
						<Route key={path} element={element} path={path} />
					))}
				</Routes>
			</Suspense>
		</div>
	);
};

export default AppRouter;