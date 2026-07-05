// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
	// Frontend Skills

	// Backend Skills
	{
		id: "go",
		name: "Go",
		description:
			"An efficient programming language developed by Google, suitable for cloud-native and microservices development.",
		icon: "logos:go",
		category: "backend",
		level: "intermediate",
		experience: { years: 0, months: 8 },
		projects: ["microservice-demo"],
		color: "#00ADD8",
	},
	{
		id: "cpp",
		name: "C++",
		description:
			"A high-performance systems programming language widely used in game development, system software, and embedded development.",
		icon: "logos:c-plusplus",
		category: "backend",
		level: "intermediate",
		experience: { years: 2, months: 0 },
		projects: ["game-engine", "system-optimization"],
		color: "#00599C",
	},
	{
		id: "typescript",
		name: "TypeScript",
		description:
			"A type-safe superset of JavaScript that enhances code quality and development efficiency.",
		icon: "logos:typescript-icon",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 2 },
		projects: ["mizuki-blog", "portfolio-website", "task-manager-app"],
		color: "#3178C6",
	},
	// Database Skills
	// Tools
	{
		id: "git",
		name: "Git",
		description:
			"A distributed version control system, an essential tool for code management and team collaboration.",
		icon: "logos:git-icon",
		category: "tools",
		level: "beginner",
		experience: { years: 1, months: 4 },
		color: "#F05032",
	},
	{
		id: "vscode",
		name: "VS Code",
		description:
			"A lightweight but powerful code editor with a rich plugin ecosystem.",
		icon: "logos:visual-studio-code",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 6 },
		color: "#007ACC",
	},
	{
		id: "goland",
		name: "GoLand",
		description:
			"A professional Go language IDE by JetBrains providing intelligent coding assistance and debugging tools.",
		icon: "logos:goland",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 5 },
		projects: ["go-microservice"],
		color: "#3D7BF7",
	},
	// {
	// 	id: "openresty",
	// 	name: "OpenResty",
	// 	description:
	// 		"A high-performance web platform based on Nginx and LuaJIT, supporting dynamic web application development.",
	// 	icon: "simple-icons:nginx",
	// 	category: "tools",
	// 	level: "beginner",
	// 	experience: { years: 0, months: 8 },
	// 	projects: ["api-gateway", "dynamic-routing"],
	// 	color: "#00A693",
	// },
	{
		id: "linux",
		name: "Linux",
		description:
			"An open-source operating system, the preferred choice for server deployment and development environments.",
		icon: "logos:linux-tux",
		category: "tools",
		level: "intermediate",
		experience: { years: 2, months: 0 },
		projects: ["server-management", "shell-scripting"],
		color: "#FCC624",
	},

	// Other Skills
];
