import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

const config: DocsThemeConfig = {
	logo: (
		<span>
			<Image
				src="https://choyou.fr/_/codacy/2023/assets/img/logo_codacy.svg"
				width={100}
				height={90}
				alt="Picture of the author"
			/>
		</span>
	),
	project: {
		link: "https://github.com/shuding/nextra-docs-template",
	},
	chat: {
		link: "https://discord.com",
	},
	docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
	footer: {
		text: "Nextra Docs Template",
	},
};

export default config;
