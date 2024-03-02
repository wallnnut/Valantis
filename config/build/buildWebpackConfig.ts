import type webpack from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { type BuildOptions } from "../types/config";
import { buildDevServer } from "./buildDevServer";
export function buildWebpackConfig(
	options: BuildOptions,
): webpack.Configuration {
	return {
		mode: options.mode,
		entry: options.paths.entry,
		devtool: options.isDev ? "inline-source-map" : undefined,
		output: {
			filename: "[name].[contenthash].js",
			path: options.paths.build,
			clean: true,
		},
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(options),
		plugins: buildPlugins(options.paths),
		devServer: options.isDev ? buildDevServer(options) : undefined,
	};
}
