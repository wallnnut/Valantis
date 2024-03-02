declare module "*.scss" {
	interface IClassNames {
		[className: string]: string;
	}
	const classNames: IClassNames;
	export = classNames;
}
declare module "*.png";
declare module "*.svg" {
	import React from "react";
	const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
	export default SVG;
}
declare module "async-busboy" {
	export default function asyncBusby(subString: unknown): Promise<unknown>;
}

declare module "*.json" {
	const value: any;
	export default value;
}