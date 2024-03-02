import type webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { type BuildOptions } from "../types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
	const swcLoader = {
		test: /\.(ts|tsx)$/,
		exclude: /(node_modules)/,
		use: {
			loader: "swc-loader",
			options: {
				jsc: {
					parser: {
						syntax: "typescript",
						dynamicImport: true,
						tsx: true,
					},
				},
				minify: true,
			},
		},
	};
	const scssLoader = {
		test: /\.s[ac]ss$/i,

		use: [
			{
				loader: options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
			},
			{
				loader: "css-loader",
				options: {
					modules: {
						auto: (path: string) => Boolean(path.includes(".module.scss")),
						localIdentName: options.isDev
							? "[path][name]__[local]--[hash:base64:5]"
							: "[hash:base64:8]",
					},
				},
			},
			{ loader: "sass-loader" },
		],
	};
	const svgLoader = {
		test: /\.svg$/,
		use: ["@svgr/webpack"],
	};
	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: "file-loader",
			},
		],
	};
	return [swcLoader, scssLoader, svgLoader, fileLoader];
}
