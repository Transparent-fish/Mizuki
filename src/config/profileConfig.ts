import type { ProfileConfig } from "../types/config";

// 个人资料配置
export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.png", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
	name: "Hoshino",
	bio: "一名OIer，正在 OI 的道路上探索前行。",
	typewriter: {
		enable: true, // 启用个人简介打字机效果
		speed: 80, // 打字速度（毫秒）
	},
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/Transparent-fish",
		},
		{
			name: "Bilibili",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/3493107286936399",
		},
		{
			name: "Luogu",
			icon: "material-symbols:language",
			url: "https://www.luogu.com.cn/user/766220",
		},
		{
			name: "Email",
			icon: "material-symbols:mail",
			url: "mailto:luogu_dnj@outlook.com",
		},
		{
			name: "Blog",
			icon: "material-symbols:web",
			url: "https://cheese-zzz.cloud",
		},
	],
};
