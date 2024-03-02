type Mods = Record<string, boolean | string>;

export const classNames = (cls: string, mods?: Mods, add?: string[]) => {
	let additional: string[] = [];
	let md: string[] = [];
	if (add) {
		additional = add?.filter(Boolean);
	}
	if (mods) {
		md = Object.entries(mods)
			.filter(([, value]) => Boolean(value))
			.map(([key]) => key);
	}
	return [cls, ...md, ...additional].join(" ");
};