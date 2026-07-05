// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "Francium_",
		imgurl: "https://cdn.luogu.com.cn/upload/usericon/762086.png",
		desc: "My Classmate",
		siteurl: "https://www.luogu.com.cn/user/762086",
		tags: ["Classmate"],
	},
	{
		id: 2,
		title: "TypeScript",
		imgurl: "https://avatars.githubusercontent.com/u/6154722?v=4&s=640",
		desc: "TypeScript is JavaScript with syntax for types",
		siteurl: "https://www.typescriptlang.org",
		tags: ["Language", "JavaScript"],
	},
	{
		id: 3,
		title: "zengyanbin",
		imgurl: "https://cdn.luogu.com.cn/upload/usericon//1390480",
		desc: "My Classmate & Friends",
		siteurl: "https://www.luogu.com.cn/user/1390480",
		tags: ["Classmate", "Friends"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
