/* eslint-disable */
import { strict as assert } from "assert";

type Link = {
	title: string;
	url: string;
};

const microsoft: Link = {
	title: "microsoft",
	url: "microsoft.com",
};

const typescript: Link = {
	title: "TypeScript",
	url: "typescriptlang.org",
};

const links: Link[] = [microsoft, typescript];

const tsUrl = links[1].url;

links[0].title = "Microsoft";
