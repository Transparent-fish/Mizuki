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
