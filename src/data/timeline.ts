import type { TimelineItem } from "../components/features/timeline/types";

export const timelineData: TimelineItem[] = [
	{
		id: "Recognize-OI",
		title: "开始学习 OI",
		description:
			"参加夏令营",
		type: "education",
		startDate: "2022-08-13",
		endDate: "2022-08-20",
		skills: ["C++"],
		icon: "material-symbols:school",
		color: "#059669",
		featured: false,
	},
	{
		id: "off-site training",
		title: "前往浙大集训",
		description:
			"第一次出省集训",
		type: "education",
		startDate: "2025-07-13",
		endDate: "2025-07-31",
		color: "#105fde8b",
		featured: false,
	},
	{
		id: "off-site training",
		title: "前往北京研学 + 打百度之星",
		description:
			"外出游玩",
		type: "education",
		startDate: "2025-12-06",
		endDate: "2025-12-12",
		color: "#105fde8b",
		featured: false,
	},
	{
		id: "off-site training",
		title: "前往上实集训",
		description:
			"第一次到上海欸",
		type: "education",
		startDate: "2026-08-03",
		endDate: "2025-08-22",
		color: "#105fde8b",
		featured: false,
	},
	{
		id: "study-OI",
		title: "正式学习 OI",
		description:
			"来到一中",
		type: "education",
		startDate: "2024-09-01",
		organization: "My School",
		skills: ["C++"],
		icon: "material-symbols:school",
		color: "#d61d20",
		featured: true,
	},
];
