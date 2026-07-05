---
title: Tarjan 学习笔记
published: 2025-11-16
description: Tarjan Study Notes
image: ./cover.jpg
tags: [StudyNotes]
category: Study Notes
draft: false
author: Hoshino
---

## 算法介绍：

### 概念：

1. **缩点：**

- **缩点**是指将有向图中的每个强连通分量（SCC）收缩为**一个节点**的过程，从而将原图转化为一个有向无环图（DAG）。

2. **强连通分量：**

- 强连通分量（SCC）是指在有向图中，如果任意两个节点 $u$ 和 $v$ 都互相可达（即存在从 $u$ 到 $v$ 的路径，也存在从 $v$ 到 $u$ 的路径），那么这些节点构成的子图称为一个强连通分量（SCC）。

3. **拓扑排序：**

- 拓扑排序是针对**有向无环图**排序算法，使得：

图中的每一条有向边 (从 $u$ 到 $v$)，$u$ 在排序中总是位于 $v$ 的前面。

## Tarjan：

在了解 Tarjan 是什么以前，我们先来看一个东西：

![](https://oi-wiki.org/graph/images/dfs-tree.svg)

这个东西叫做 DFS 生成树，这颗树由**四种**边组成：

1. 树边：

在示意图中表示为黑色。就是 DFS 在搜索到一个**未找到的点**时形成的边。

2. 返祖边：

在示意图中以红色表示。指的是指向**祖先节点**的边。

3. 前向边：

在示意图中以绿色表示。是指从**祖先节点**指向**后代节点**的**非树边**（即跳过某些中间节点的直接连接）。

4. 横叉边：

在示意图中以蓝色表示。是指连接**不同子树**的边（即从一个子树中的节点指向另一个已访问且不在当前 DFS 栈中的子树节点）。

> 注意：横叉边不形成环，也不改变现有的连通关系。

### Tarjan 的实现：

#### 概念：

> 一句话：Tarjan 算法通过 DFS 配合栈 的方式寻找 SCC。

看了以上的内容相信你对 DFS 生成树 因该有了一点概念，接下来，我们再引入几个概念：

1. 时间戳（代码中的 $dfn$ 数组）：

$dfn_x$ 表示节点 $x$ 在 DFS 遍历时的访问顺序。

2. 最小可达时间戳（代码中的 $low$ 数组）：

$low_x$ 表示节点 $x$ 通过 树边加上**最多一条返祖边或横叉边**能到达的最小 $dfn$ 值。我们用他来判环。

#### 实现：

1. DFS 遍历：

- 访问节点 $u$，初始化 $dfn_u = cnt + 1$，$low_u = cnt + 1$并压入栈。

2. 处理邻接节点 $v$：

- 情况 1：$v$ 未被访问：

递归搜索 $v$，并用 $low_v$ 更新 $low_u$。

- 情况 2：$v$ 已被访问且仍在栈中：

用 $dfn_v$ 更新 $low_u$（因为 $u$ 到 $v$ 形成环）。

- 情况 3：$v$ 已被访问但不在栈中：

说明 $v$ 属于另一个已处理的 SCC，无需操作。

3. 判断 SCC：

- 如果 $dfn_u = low_u$，说明 $u$ 是一个 SCC 的根节点。

- 将栈中从 $u$ 到栈顶的所有节点弹出，构成一个 SCC。

### 缩点：

~~终于写到缩点了。~~

先跑一遍 Tarjan 找 SCC，给每个 SCC 一个唯一编号 $id_u$。然后遍历原图中的所以边，如果 $id_u \ne id_v$ 则在缩点后的图中添加边 $id_u$ 到 $id_v$。
最后跑一下拓扑排序与 DP 完事。

## 正确性证明：

### Trajan 的正确性证明：

- $dfn_u = low_u$ 判定 SCC 根节点，当回溯到 $u$ 时，若 $dfn_u = low_u$，说明：
  - $u$ 无法通过返祖边或横叉边到达更早的节点。
  - 栈中 $u$ 之上的节点均属于以 $u$ 为根的 SCC。

### 缩点后 DAG 的性质：

- **无环性**：若存在环，则环上所有节点应属于同一个 SCC，与缩点矛盾。
- **可拓扑排序**：DAG 必然存在拓扑序。

### DP 状态转移的正确性：

定义 $f_i$ 表示以 SCC $i$ 为终点的最大点权和，则：

$$
f_v = \max(f_v, f_tmp + sum_v)
$$

#### 转移方程合理性：

- 由于拓扑序保证 $j$ 一定在 $i$ 之前处理，每个 SCC 内部权值已压缩为 $sum_i$。
- 最终答案即所有 $f_i$ 的最大值。

## 复杂度证明：

### Tarjan：

这部分用 DFS 实现：

- **节点处理**：每个节点被访问一次，执行入栈、出栈操作各一次，时间复杂度 $O(1)$。
- **边处理**：每条边被访问一次，用于更新 $low$ 值，时间复杂度 $O(1)$。
- **SCC 识别**：当发现一个 SCC 时，从栈中弹出节点的操作总次数不超过 $n$。

总复杂度：$O(n + m)$，其中 $n$ 是节点数，$m$ 是边数。

### 2. 构建缩点后的 DAG：

包括两个子步骤：

1. 合并 SCC 权值：

- 遍历所有节点，将其权值累加到所属 SCC。
- 每个节点处理一次，时间复杂度 $O(n)$。

2. 建立 DAG 边：

- 遍历原图所有边，检查两端点是否属于不同 SCC。

总复杂度：$O(n + m)$。

### 3. 拓扑排序和动态规划：

基于入度的队列实现：

- 初始化：计算每个 SCC 的入度，$O(k + e)$，$k$ 是 SCC 数量。
- 拓扑排序：每个 SCC 节点处理一次，每条 DAG 边处理一次。
- 动态规划：在拓扑序上递推，每个 SCC 节点处理一次。

总复杂度：$O(k + e)，其中k \leq n$，$e \leq m$，（因为 DAG 边数不超过原图边数）。

最后将各步骤复杂度相加：

$O(n + m) + O(n + m) + O(k + e) = O(n + m)$。

由于 $k \leq n$ 且 $e \leq m$，因此总复杂度为 $O(n + m)$。

## Code：

```cpp
#include <bits/stdc++.h>
using namespace std;
#define int long long
const int N = 1e4 + 5;
int n, m;
int ans;
int a[N];
int f[N], in[N];
int dfn[N], low[N], vis[N];
int id[N], sum[N];
int cnt, tot;
stack<int>s;
vector<int>e[N], g[N];

void tarjan(int x) {
	low[x] = dfn[x] = ++cnt;
	s.push(x);
	vis[x] = 1;
	for (int i = 0; i < e[x].size(); i++) {
		int v = e[x][i];
		if (!dfn[v]) {
			tarjan(v);
			low[x] = min(low[x], low[v]);
		} else if (vis[v]) {
			low[x] = min(low[x], dfn[v]);
		}
	}
	if (low[x] == dfn[x]) {
		int v;
		++tot;
		do {
			v = s.top();
			s.pop();
			vis[v] = 0;
			id[v] = tot;
			sum[tot] += a[v];
		} while (x != v);
	}
}

void topsort() {
	queue<int>q;
	for (int i = 1; i <= tot; i++) {
		if (in[i] == 0)
			q.push(i), f[i] = sum[i];
	}
	while (!q.empty()) {
		int tmp = q.front();
		q.pop();
		for (auto v : g[tmp]) {
			in[v]--;
			if (in[v] == 0)
				q.push(v);
			f[v] = max(f[v], f[tmp] + sum[v]);
		}
	}
}

signed main() {
	cin >> n >> m;
	for (int i = 1; i <= n; i++) {
		cin >> a[i];
	}
	for (int i = 1; i <= m; i++) {
		int x, y;
		cin >> x >> y;
		e[x].push_back(y);
	}
	for (int i = 1; i <= n; i++) {
		if (!dfn[i])
			tarjan(i);
	}
	for (int i = 1; i <= n; i++) {
		for (auto v : e[i]) {
			if (id[i] != id[v]) {
				g[id[i]].push_back(id[v]);
				in[id[v]]++;
			}
		}
	}
	topsort();
	for (int i = 1; i <= n; i++) {
		ans = max(ans, f[i]);
	}
	cout << ans;
	return 0;
}
```

## 参考资料：

[OI Wiki](https://oi-wiki.org/graph/scc/)。