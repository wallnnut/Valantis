import { type BuildOptions } from "./../types/config";
import { type ResolveOptions } from "webpack";

export function buildResolvers(options: BuildOptions): ResolveOptions {
	return {
		preferAbsolute: true,
		modules: [options.paths.src, "node_modules"],
		alias: {},
		extensions: [".tsx", ".ts", ".js", ".jsx"],
	};
}
