import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { type BuildEnv, type BuildPaths } from "./config/types/config";
import path from "path";

export default (env: BuildEnv) => {
	const mode = env.mode || "development";
	const isDev = mode === "development";
	const PORT = env.port || 3000;
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, "src", "index.tsx"),
		build: path.resolve(__dirname, "bundle"),
		html: path.resolve(__dirname, "public", "index.html"),
		src: path.resolve(__dirname, "src"),
	};

	const config = buildWebpackConfig({
		mode,
		paths,
		port: PORT,
		isDev,
	});
	return config;
};
