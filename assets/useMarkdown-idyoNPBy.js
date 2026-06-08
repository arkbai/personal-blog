import{J as e,S as t,X as n,a as r,c as i,k as a,l as o,o as s,r as c,x as l,y as u}from"./runtime-core.esm-bundler-dzcsAqqC.js";var d={class:`max-w-5xl mx-auto px-6 pt-28 pb-16`},f={class:`flex flex-col lg:flex-row gap-6 lg:gap-8`},p={class:`w-full lg:w-56 lg:shrink-0`},m={class:`lg:sticky lg:top-28 space-y-5 bg-white lg:bg-transparent rounded-2xl lg:rounded-none p-4 lg:p-0 shadow-sm lg:shadow-none border border-slate-100 lg:border-none`},ee={class:`relative`},te=[`value`,`placeholder`],ne={class:`space-y-4 max-h-64 lg:max-h-none overflow-y-auto`},re={class:`text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5`},ie={class:`space-y-0.5`},ae=[`onClick`],oe={key:0,class:`text-xs text-slate-400 text-center py-4`},se={key:1,class:`border-t border-slate-100 pt-4`},ce={class:`space-y-0.5`},le=[`href`],ue={key:0,class:`ml-3 space-y-0.5`},de=[`href`],fe={class:`flex-1 min-w-0`},pe={class:`prose-custom`},h={__name:`LayoutWithSidebar`,props:{placeholder:{type:String,default:`搜索笔记...`},tocItems:{type:Array,default:()=>[]},categories:{type:Array,default:()=>[]},searchQuery:{type:String,default:``},activeId:{type:String,default:``}},emits:[`update:searchQuery`,`selectPost`],setup(r,{emit:a}){let h=a;function me(e){h(`update:searchQuery`,e.target.value)}return(a,g)=>(u(),o(`div`,d,[s(`div`,f,[s(`aside`,p,[s(`nav`,m,[s(`div`,ee,[g[0]||=s(`svg`,{class:`absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-300`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`},[s(`path`,{"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`2`,d:`M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z`})],-1),s(`input`,{value:r.searchQuery,type:`text`,placeholder:r.placeholder,class:`w-full pl-8 pr-3 py-1.5 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-primary-300 focus:ring-1 focus:ring-primary-100 transition-all text-slate-500 placeholder-slate-300`,onInput:me},null,40,te)]),s(`div`,ne,[(u(!0),o(c,null,l(r.categories,([t,i])=>(u(),o(`div`,{key:t},[s(`h3`,re,n(t),1),s(`ul`,ie,[(u(!0),o(c,null,l(i,t=>(u(),o(`li`,{key:t.id},[s(`button`,{class:e([`text-left w-full text-sm py-1 px-2 rounded-md transition-colors truncate`,r.activeId===t.id?`bg-primary-50 text-primary-500 font-medium`:`text-slate-500 hover:bg-slate-50`]),onClick:e=>h(`selectPost`,t.id)},n(t.title),11,ae)]))),128))])]))),128))]),r.categories.length===0&&r.searchQuery?(u(),o(`p`,oe,` 无匹配笔记 `)):i(``,!0),r.tocItems.length>0?(u(),o(`div`,se,[g[1]||=s(`h3`,{class:`text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2`},`当前目录`,-1),s(`ul`,ce,[(u(!0),o(c,null,l(r.tocItems,e=>(u(),o(`li`,{key:e.id},[s(`a`,{href:`#${e.id}`,class:`block text-sm text-slate-500 hover:text-primary-500 transition-all py-1 px-2 rounded-md hover:bg-slate-100 active:bg-slate-200`},n(e.label),9,le),e.children?(u(),o(`ul`,ue,[(u(!0),o(c,null,l(e.children,e=>(u(),o(`li`,{key:e.id},[s(`a`,{href:`#${e.id}`,class:`block text-xs text-slate-400 hover:text-primary-500 transition-all py-0.5 px-2 rounded-md hover:bg-slate-100 active:bg-slate-200`},n(e.label),9,de)]))),128))])):i(``,!0)]))),128))])])):i(``,!0)])]),s(`article`,fe,[s(`div`,pe,[t(a.$slots,`content`,{},()=>[g[2]||=s(`div`,{class:`bg-white rounded-2xl border border-slate-100 p-8 shadow-sm`},[s(`p`,{class:`text-slate-400 text-center py-12`},`暂无内容`)],-1)])])])])]))}},me=`
## 一、绪论

### 1.什么是数据结构

数学，计算机硬件系统，软件系统的交叉学科

相互之间存在关系的数据元素的集合

**基本结构**

1. 集合
2. 线性结构
3. 树形结构
4. 图状结构（或网状结构）

（以上四个概念⬆️应该很好理解）

### 2.逻辑结构与存储结构

数据元素 是数据的基本单位

数据项 组成数据元素

数据对象 是性质相同的数据元素集合

数据的逻辑结构描述的是数据元素之间的逻辑关系；

存储结构是计算机中数据元素的表示和关系的表示；

1.顺序存储结构：顺序映像

2.链式存储结构：非顺序映像

### 3.数据类型

在高级程序语言中，用于刻画对象的特性。

**数据类型是一个值的集合和在这个集合上一组操作的总称。**

1. 原子类型：如c语言中的基本类型（整型等）
2. 结构类型：按某种结构组成，如数组中的分量可以是整型也可以是数组等

### 4.抽象数据类型（Abstract Data Type）

抽象数据类型和数据类型是一个概念，“抽象”的意义在于可以自己定义。

ADT可以用三元组表示（D，S，P）D：数据对象；S：关系集；P：操作集；

### 5.算法和算法分析

特性：有穷性，确定性，可行性，输入，输出

### **算法效率的度量**

时间复杂度O（ f(n) ）

时间复杂度判断例子

for()

for（）

→O(n^2)

for()

i = i * 2

→O(log2 n)

## 二、线性表

### 1.线性表的类型定义

| 姓名  | 学号  | 班级  | 性别  |     |     |     |
| --- | --- | --- | --- | --- | --- | --- |
| 小红  | 。。。 | 。。。 | 。。。 |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

每个学生为一个**记录**

由4个**数据项**组成

**顺序表**：地址连续，依次存放，随机存取，长度可变。

[数组：地址连续，依次存放，随机存取，长度不可变]

### 2.线性表的链式表示

线性表的链式存储结构用一组**任意**的存储单元存储数据。

**结点**的组成：

1. 数据域
2. 指针域

**循环链表**

**双向链表**

线性表举例：一元多项式的相加（每一个结点的数据域中储存系数与次数

## 栈和队列

### 1.栈

栈仅允许在表尾进行插入或删除操作（后进先出）

表尾=栈顶；表头=栈底

**顺序栈**

typedef struct{

T *base; 

T *top；#指向栈顶元素的下一个位置

int stacksize;

}

**链栈**

S指向栈顶

栈顶依次指向栈底

删除或修改元素时与线性表类似

### 2.队列

表尾（rear）插入

表头（front）删除

**循环队列**

入队：rear =（rear+1)%M

出队：front =(front+1)%M

(难以判断表是否已满）

 

### 串

字符组成的有限序列

BF算法：穷举——子串与主串匹配

**KMP算法**：部分匹配，主串指针不回溯

### 数组和广义表

### **1.数组**

定义：具有相同类型数据元素的集合

n维数组：元素也是数组

线性表是数组的特例；数组是线性表的拓展

数组定义后维数和长度不改变

矩阵的储存：二维数组 

特殊矩阵的储存（对称矩阵，三角矩阵，对角矩阵，稀疏矩阵）：压缩储存

### **2.广义表**

Lists = （a,(b , c),(d))

GetHead(): 第一个元素，可以是原子或表

GetTail()：除了表头元素以外所有元素构成的表

## 三、树和二叉树

树是一种非线性结构

定义：n个结点的有限集

度：子树（分支，后继）个数

结点数 = 分支数+1

## 1.二叉树

度最大为2

- 性质1:第i层上最多用2^i+1个结点
- 性质2:深度为k最多有2^k -1个结点
- 性质3:叶子结点数 = 度为2度结点数 + 1

**完全二叉树**：优先左满

**满二叉树**：全满

- n个节点的完全二叉树深度 = （log2 n）+1

顺序存储结构：从左到右，从上到下编号，空位置也要编号

链式存储结构：LChild—data—RChild

## 2.二叉树的遍历

遍历二叉树（先序，中序，后序）用递归方法

非递归则使用栈

二叉树的层次遍历：从左到右，从上到下访问结点

二叉树遍历算法应用：计算深度，结点数，叶子结点数

## 3.线索二叉树

LChild—LTag—data—RTag—RChild

LTag = 1时，LChild表示前驱，根据遍历的顺序（先序等）设置线索

LTag = 0时，LChild表示子树

## 4.树和森林

双亲表示法：data—parent（parent中存父节点的位置）

孩子表示法：data—firstchild→child.next→…

孩子兄弟表示法：data—firstchild—nextbrother

**树转化二叉树**

1.左孩子与兄弟结点连接

2.父节点与其他兄弟断开

3.旋转树

**森转化二叉树**

1.每棵树转化二叉树

2.根结点连接

3.第一颗树为根节点，旋转树

二叉树转化树/森林：逆过程

森林的遍历：从左至右

树

先序

后序

二叉树

先序

中序

森林

先序

中序

## 5.哈夫曼树

树的路径长度：树根到每一个叶子结点的路径长度之和

带权路径：每一段路径乘该叶子结点的权值

定义：**最优二叉树，带权路径（WPL）最短的二叉树**

构造哈夫曼树（自下而上）

1.选权值最小的2个结点，权值相加连接成新结点

2.重复步骤1，注意每次选择的是最小的结点

哈夫曼没有度为1度结点，从构造过程中可以看出

结点数 = 2n -1

## 四、图

图也是一种非线性结构

定义：顶点集V，边集E，G = （V，E）

分类：有向图，无向图，网（边有权值的图）

路径：一个顶点序列

路径长度:路径上权值的和

简单路径：顶点不重复

简单回路：顶点不重复的回路

连通图：对于任意顶点都有路径连接

## 1.图的存储结构

1.邻接矩阵

|  | A | B | C | D |
| --- | --- | --- | --- | --- |
| A | 0 | 1 | 1 | 0 |
| B |  | 0 | 0 | 1 |
| C |  |  | 0 | 0 |
| D |  |  |  | …… |

2.邻接表

1A→2→3(表示A与B，C相连）

2B……

3C

可以转化为有向图的邻接表

3.十字链表

## 2.图的遍历

**深度优先搜索（DFS）**

从某一起点出发，访问一个邻接点后，再访问它的邻接点，循环

时间复杂度O(n^2)

**广度优先搜索（BFS）**

用邻接矩阵，先访问起点的所有邻接点，再依次访问它们的邻接点

时间复杂度O(n^2)

## 3.图的应用

- **最小生成树**：

使得权值之和最小，所有顶点连接不存在回路的图

构造最小生成树的方法：

1.普里姆算法  (**稠密的网**）

时间 O(n2)

找编号为0点的最小的边，之后每次找联通的最小的边

2.克鲁斯卡尔算法

      一直找最短边

Dijistra算法

- 有向无环图(DAG)的应用

AOV网：顶点表示活动，弧表示关系

AOE网：弧表示活动，顶点表示开始或结束事件

**拓扑排序方法：依次删去“入度为0”的点，得到序列**

**关键路径：**AOE网中路径长度最长的路径

## 五、查找

查找表

静态查找表：仅查找（检索）

动态查找表：插入/删除

平均查找长度（ASL）= 关键字的平均比较次数

## 1.线性表的查找

- 线性查找（顺序）ASL = O(n)
- 二分查找
    
    二分查找判定树：n>0，mid = （n+1)/2
    
    具有n个结点的判定树的深度为(log2 n)+1   比较次数不超过深度
    
- 分块查找
    
    每个块独立，块内有序
    
    ASL = L1 + L2 （L1是找对应块，L2是找元素）
    

## 2.树表的查找

- 二叉排序树
    
    定义：所有左子树小于根结点，右子树大于根节点
    
    直接按输入顺序，生成、插入、删除
    
- **平衡二叉树**（AVL）
    
    是效率更高的二叉排序树
    
    平衡因子 = 左子树的高度 - 右子树的高度 = ±1或0
    
    平衡二叉树的调整：
    
    ![IMG_1927.jpeg](%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%2013024a26aea880948d01cb7af7730eac/IMG_1927.jpeg)
    
- B树
    
    平衡的多分树，一个结点内：data1，data2，……
    
    每个结点除根外，至少有m/2棵子树，最多有m棵子树
    
    所有叶结点都在同一层；关键字不重复；利用了局部访问性
    
    1.查找：从根节点沿着指针搜索结点，并在结点内查找
    
    2.插入：找到最底层，插入，若溢出则继续分裂
    
    （3阶b树）
    
    ![IMG_1929.jpeg](%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%2013024a26aea880948d01cb7af7730eac/IMG_1929.jpeg)
    
    3.删除：（过程复杂）
    
- B+树
    
    所有叶子结点包含了所有关键字，从小到大顺序连接
    
- 红黑树

**哈希表的查找**（hash：散列）

散列：面向**查找**的存储结构

对应关系：哈希函数 address（ai）= H（Ki）

设计原则：1.计算简单，2.散列地址分布均匀

1.直接地址法H = a*key + b

2.除留余数法H = key mod p

处理哈希表地址的冲突：

线性探测法，二次探测法，随机探测法，链地址法

## 六、排序

分类：

**1.比较排序（插入排序，交换排序，选择排序，归并排序）**

**2.基数排序**

稳定排序/不稳定排序：是否改变相同元素相对位置

不稳定：快速，希尔，堆

内序排序/外序排序：数据是否需要借助外存

## 1.插入排序

- 直接插入排序
    
    时间 O(n)
    
    前i个数据已经有序：有序序列←无序序列
    
- 二分插入排序
    
    时间 O(n2) 空间O(1)
    
    用二分法比较插入
    
- 希尔排序（多遍插入）
    
    分割若干个子序列，在子序列内直接插入排序，当整个序列记录基本有序时，对全体记录进行直接插入排序
    
    是一种**不稳定**的排序方法
    

## 2.交换排序

- 冒泡排序
    
    时间 O(n)~O(n2)
    
- 快速排序
    
    时间 划分过程O(n) 递归过程O(n*log2 n)———内序排序最好的
    
    1）选择一个轴值，大于轴值一组，其余一组
    
    2）重复1步骤，直至有序
    

## 3.选择排序

- 简单选择排序
    
    时间 O(n2)
    
- 堆排序
    
    堆是完全二叉树，小根堆：父<子；大根堆：父>子
    
    顺序序列存储堆：从左到右，从上到下
    
    **堆调整**
    
    时间 O(n*log2 n) 空间 O(1)
    
    ![IMG_1930.jpeg](%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%2013024a26aea880948d01cb7af7730eac/IMG_1930.jpeg)
    
    1.建立堆
    
    递归从下到上进行堆调整
    
    **最后一个非叶子结点的序号为 n/2**
    
    2.处理堆顶记录
    
    将最后一个结点放到堆顶，把堆顶放入序列(有序)中，进行堆调整
    

## 4.归并排序

时间 O(n*log2 n) 空间 O(n)  ——  需要占用与原序列相同数量的空间

定义：2个以上有序表组合成一个新的有序表

2-路归并排序：

把所有数据元素看作多个有序序列，两两合并，直至有序

5，（2，3），7，（1，2）

## 5.基数排序

时间 O(n)+ O(rd) 空间 O(n) + O(rd)

链式基数排序

借助分配和收集对单逻辑关键字排序，使用链表作为存储结构

1.设置10个队列

2.分配

3.收集

4.重复2，3步骤

![IMG_1931.jpeg](%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%2013024a26aea880948d01cb7af7730eac/IMG_1931.jpeg)

![IMG_1932.jpeg](%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%2013024a26aea880948d01cb7af7730eac/IMG_1932.jpeg)`,g=`# 一、基本概念
> 数据元素：是数据的基本单位
> 数据项：组成数据元素的最小单位
> 数据对象：是性质相同的数据元素的集合
> 数据结构：存在特定关系的数据元素的集合
### 数据结构三要素
- 逻辑结构：线性/非线性，数据元素之间的逻辑关系
	1. 线性结构：数组、队列、栈、串
	2. 树形结构
	3. 图状结构
	4. 集合
- 存储结构：（物理结构）计算机中数据元素的表示和关系的表示
	1. **顺序结构**：优点-可以随机存取；缺点：占用连续空间，会出现碎片
	2. **链式存储**：优点-不会出现碎片；缺点-指针会额外占用空间，并且只能顺序存取
	3. **索引存储**：优点-检索速度快；缺点-建立索引表需要额外空间，并且更新索引表需要额外时间开销
	4. **散列存储**：优点-增删改查快速；缺点-会出现哈希冲突
- 运算：逻辑上的定义，物理上的实现
### 数据类型
数据类型是一个值的集合和在这个集合上一组操作的总称，在高级程序语言中，用于刻画对象的特性。
1. 原子类型：最小不可再分的类型，如c语言中的基本类型（整型等）
2. 结构类型：按某种结构组成，如数组中的分量可以是整型也可以是数组
3. 抽象数据类型ADT
	（Abstract Data Type）和数据类型是一个概念，“抽象”的意义在于可以自己定义。
	ADT可以用三元组表示（D，S，P）D：数据对象；S：关系集；P：操作集；
# 二、算法
>求解问题的步骤

五种特性：<u>有穷性，确定性，可行性，输入，输出</u>
目标：正确性，可读性，健壮性，高效率与低存储

### 算法效率的度量
1. 时间复杂度O(n)
	- 只关注最高次：T(n)=3n+100=O(n) —— 只关注<u>最深层循环</u>部分
	- 最坏时间复杂度：在最不利情况下的运行时间，通常作为算法效率的评判标准
	- 平均时间复杂度：所有数据输入等概率时，期望运行时间
	- 加法规则：两段代码顺序-时间复杂度取最大者
	- 乘法规则：两段代码嵌套-时间复杂度相乘
$$O(1) < O(\\log_2 n) < O(n) < O(n \\log_2 n) < O(n^2) < O(n^3) < O(2^n) < O(n!) < O(n^n)$$

2. 空间复杂度S(n)=O(g(n))
	- 只关注算法额外使用的辅助空间（<u>递归调用栈、临时数组、指针</u>）【输入数据的空间与算法无关；指令、常数、与n无关的变量所占空间为固定开销】
	- 原地工作：所需内存空间不变，S(n)=O(1)
	- 例：
		test(int n){ int flag\\[n],int i ...}，S(n)=O(4n+4)=O(n)
		{flag\\[n]\\[n]...}，S(n)=O(n<sup>2</sup>)`,he=`# 一、线性表的定义
### 定义
表长为n的有限序列 L = (a<sub>1</sub>,...a<sub>n</sub>) 
- n为0时为空表
- 存在逻辑上的先后次序，位序从1开始
- 每个元素数据类型相同
- 表头元素、表尾元素、直接前驱、直接后继
- 基本操作：
	![653](../../A一次元/images/Pasted%20image%2020260408122242.png)
# 二、线性表的顺序表示
## 顺序表
>用顺序存储（<u>地址连续的存储单元</u>）的方式实现线性表，逻辑上相邻，物理上也相邻；c语言中，顺序表的物理结构用**数组**实现
- 随机访问：按序号查找O(1)，按值顺序查找O(n)，折半查找O(log<sub>2
	</sub>n)
- 拓展表长度&插入元素&删除元素：O(n)
- 优点：存储密度高（相对于链表不用存指针）
### 1. 静态分配
\`\`\`c
#define MaxSize 10
typedef struct{
	ElemType data[MaxSize];
	int length;
}SqList;

//初始化一个顺序表
void InitList(SqList &L){
	for(int i=0;i<MaxSize;i++)
	L.data[i]=0;    //将所有数据元素设置为默认初始值
	L.length=0；    //顺序表初始长度为0
}
\`\`\`
### 2. 动态分配
\`\`\`c
#define InitSize 10
typedef struct{
	ElemType *data;    //指针指向连续存储空间的地址
	int MaxSize;
	int length;
}SeqList;

//初始化
void InitList(SeqList &L){
	//用malloc函数申请一片连续的存储空间
	L.data=(int *)malloc(Initsize*sizeof(int));
	L.length=0；
	L.MaxSize=InitSize;
}

//用malloc增加动态数组的长度
void IncreaseSize(SeqList &L,int len){
	int *p=L.data;
	L.data=(int *)malloc((L.MaxSize+len)*sizeof(int)）;
	for(int i=0;i<L.length；i++){
		L.data[il=p[i];       //将数据复制到新区域
	}
	L.MaxSize=L.MaxSize+len;  //顺序表最大长度增加len
	free(p);                  //释放原来的内存空间
}
\`\`\`


# 三、线性表的链式表示
>用随机存储（<u>使用离散的存储单元</u>）实现线性表，不能随机存取，只能顺序访问
## 单链表
- 结点：数据 | 指针
- 头结点：不存放数据
- 头指针L：用于标识一个单链表，始终指向第一个结点（不管头结点是否存在）
- 求表长 & 按序号查找 & 按值查找：遍历链表，O(n)
### 1. 单链表的初始化
带头结点 / 不带头结点
![](../../A一次元/images/Pasted%20image%2020260409115613.png)
- 定义链表时
	- struct LNode{...}：将LNode定义为一个结构体
	- typedef struct{...}LNode：将结构体简写为LNode
	- malloc：分配内存给LNode类型的变量
\`\`\`c
// 定义一个单链表
typedef struct LNode{
	ElemType data;
	struct LNode *next;
}LNode, *LinkList;                      //两种名称都可用
// 带头结点
	L=(LNode*)malloc(sizeof(LNode));    //创建头结点
	L->next=NULL;
// 不带头结点
    L=NULL
\`\`\`
### 2. 插入结点
- **后插法**
\`\`\`c
//在p结点后插入元素 e
bool InsertNextNode (LNode *p,ElemType e){
	if (p==NULL)
		return false;
	LNode *S =(LNode *)malloc(sizeof(LNode));
	if (s==NULL)       //内存分配失败
		return false;
	s->data=e;       //用结点s保存数据元素e
	s->next=p->next;
	p->next=s;         //将结点s连到p之后
return true;
}
\`\`\`
- **头插法**：从头指针开始查找x的前驱结点
>扩展：在未知头指针的情况下，对某个结点进行前插操作
>![360](../../A一次元/images/Pasted%20image%2020260409113928.png)
>![255](../../A一次元/images/Pasted%20image%2020260409114131.png)
>复制数据到新结点中，将旧结点x作为前驱结点，指向新结点，从而实现了x的前插操作，且时间复杂度从O(n)降到O(1)

### 3. 删除结点
- q结点是一个临时结点，最后断开q时需要free(q)释放存储空间
\`\`\`c
//删除指定结点p
bool DeleteNode (LNode *p){
	if(p==NULL)
		return false;
	LNode_*q=p->next;       //令q指向*p的后继结点
	p->data=p->next->data;  //和后继结点交换数据域
	p->next=q->next;        //将*q结点从链中“断开”
	free(q);                //释放后继结点的存储空间
	return true;
}
\`\`\`
### 4. 尾插法建立新链表
在表尾结点后加入元素，O(n) 
\`\`\`c
LinkList List_TailInsert(LinkList &L){ //正向建立单链表
	int X;
	L=(LinkList)malloc(sizeof(LNode))  //建立头结点
	LNode *s,*r=L;                     //r为表尾指针
	scanf("%d",&x);                    //输入要插入的结点值
	while(x!=9999)
		s=(LNode *)malloc(sizeof(LNode));
		s->data=x;
		r->next=s;                     //令之前的表尾指向新插入的结点
		r=s;                           //修改表尾指针r指向新的表尾结点
		scanf("%d",&x);
	}
	r->next=NULL;                      //尾结点指针置空
return L;
}
\`\`\`
### 5. 头插法建立新链表
每次都在头结点后插入元素，O(n)
\`\`\`c
// 与尾插法大部分一致
	L->next=NULL;                       //初始空链表
	scanf(...);
	while(x!=9999){
		s=(LNode*)malloc(sizeof(LNode));
		s->data=x;
		s->next=L->next;
		L->next=s;                      //修改头指针指向新插入的结点
		scanf("%d",&x);
	}
\`\`\`
	
- **链表的逆置**：可以用头插法从链表中依次读取数据并建立新链表
## 双链表
- 头指针prior，尾指针next：方便从后往前遍历，遍历时间复杂度 O(n)
 1. 双链表的初始化
\`\`\`c
bool InitDLinkList(DLinklist &L){
	L = (DNode *) malloc(sizeof(DNode))；//分配一个头结点
	if (L==NULL)                        //内存不足，分配失败
		return false;
	L->prior =NULL;                      //头结点的prior永远指向NULL
	L->next =NULL;                       //头结点之后暂时还没有节点
	return true;
\`\`\`
 2. 双链表的插入
\`\`\`c
// 在p结点后插入结点s
bool InsertNextDNode(DNode *p，DNode *s){
	if(p==NULL || S==NULL)                //非法参数
		return false;
	s->next=p->next；
	if(p->next ！=NULL)                 //如果p结点有后继结点
		p->next->prior=s;
	S->prior=p;
	p->next=s;
	return true;
}
\`\`\`
![245](../../A一次元/images/Pasted%20image%2020260410232256.png)
 3. 双链表的删除
- 注意q结点为最后一个结点时，判断q->next!=NULL
\`\`\`c
bool DeleteNextDNode(DNode *p){
	if (p==NULL)
		return false;
	DNode *q = p->next;             //找到p的后继结点q
	if (q==NULL)
		return false;               //p没有后继
	p->next=q->next;
	if (q->next!=NULL)              //q结点不是最后一个结点
		q->next->prior=p;
	free(q);                        //释放结点空间
	return true;
}
\`\`\`
- 一般情况 / 最末结点的情况
![243](../../A一次元/images/Pasted%20image%2020260410232827.png)

## 循环链表
### 循环单链表
![](../../A一次元/images/Pasted%20image%2020260410233507.png)

###  循环双链表
1. 初始化：初始空表，prior和next都指向头结点L【非循环双链表 初始指向NULL】
\`\`\`c
typedef struct DNode{
	ElemType data;
	structDNode *prior,*next;
}DNode，*DLinklist;

bool InitDLinkList(DLinklist &L){
	L =(DNode *)malloc(sizeof(DNode));        //分配一个头结点
	if (L==NULL)                              //内存不足，分配失败
		return false;
	L->prior = L;                             //头结点的prior指向头结点
	L->next =L;                               //头结点的next指向头结点
	return true;
	
// 判断循环双链表是否为空
	if(L->next==L)
		return true;

// 判断结点p是否成为循环双链表的表尾结点
	if(p->next==L)
\`\`\`

2. 插入节点&删除结点：<u>相比单链表和双链表，不需要判断是否为头尾节点</u> <-- 循环，不会指向NULL
\`\`\`c
//在p结点之后插入s结点
bool InsertNextDNode(DNode *p，DNode *s){
	s->next=p->next;                         //将结点*s插入到结点*p之后
	p->next->prior=s;
	s->prior=p;
	p->next=s;
}

//删除p的后继结点q
...
	p->next=q->next;
	q->next->prior=p;
	free(q);
\`\`\`
## 静态链表
分配一段连续的内存，使用数组来表示链表，指针为指向元素的地址下标
# 四、顺序表和链表的比较
1. 存取方式：随机存取O(1) / 顺序存取O(n)
2. 逻辑结构；物理结构：逻辑上都是线性结构。物理上 顺序存储 / 链式存储
3. 查找、插入、删除
	- 按值查找：无序情况都是O(n)，若表有序，顺序表可以折半查找O(log<sub>2
	</sub>n)
	- 按序号查找：顺序表O(1) / 链表O(n)
	- 插入、删除：顺序表需要平均移动一半的元素 / 链表只需修改指针，但是仍需花O(n)查找到插入位置
4. 空间分配：顺序表定义时，过大会浪费，过小容易溢出 / 链表空间灵活性高，但是结点需要存储指针域，空间利用率低`,ge=`# 一、栈
### 栈的定义和基本操作
只允许在一端进行插入和删除操作的线性表，后进先出 LIFO
- 栈顶Top：允许操作的一端
- 栈底
- 空栈
- Push(&S,x)：进栈，若栈S未满，则将x加入使之成为新栈顶
- Pop(&S,&x)：出栈，若栈S非空，则弹出栈顶元素，并用x返回
- GetTop(&S,&x)：读栈顶元素
- 创建、销毁、增、删、改、查 都是O(1)（无需遍历表）

> 题型：判断栈可能的输出序列
> 卡特兰数：
> ![209](../../A一次元/images/4edf3896e931267773b52d1f423b859e.png)
> [【新定义数列】卡特兰数，最全最系统讲解，高考曾经考过！3种压轴情景，概率题压轴_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1ofLyzyEXp/?spm_id_from=333.337.search-card.all.click&vd_source=a71201b56b8104dbc40a094df804a731)
### 栈的顺序存储结构
1. 定义
\`\`\`c
#define MaxSize 10         //定义栈中元素的最大个数
typedef struct{
	ElemType data[MaxSize] //静态数组存放栈中元素
	int top;               //栈顶指针
}SqStack;

//初始化
void InitStack(SqStack &S){
	S.top=-1;              //top=1表示空栈
}
\`\`\`
2. 基本操作
\`\`\`c
//判断栈空
bool StackEmpty(SqStack S){
	if(S.top==-1)        
		return true;
	else
		return false;
//入栈	
bool Push(SqStack &S, ElemType x){
	if(S.top==MaxSize-1)   //栈满，报错
		return false;
	S.top=S.top+1;         //先加1再入栈
	S.data[S.top]=x;
	return true;
}
//出栈
bool Pop(SqStack &S, ElemType&x){
	if(S.top==-1)
		return false;
	x=S.data[S.top];        //先出栈再减1
	S.top=S.top-1;
	return true;
}
//读栈顶元素
...
	x = S.data[S.top];
\`\`\`
>简写：（注意top加减的前后顺序）
>![500](../../A一次元/images/Pasted%20image%2020260413220414.png)

### 栈的链式存储结构
- 与**单链表**类似，但是每次不移动指针，只对首个结点进行插入/删除
- 一般不带头结点，Lhead指向栈顶结点（有元素）
### 共享栈
> 两个栈共享同一片数组空间
> 可以防止上溢

- 初始-栈空：top0=-1，top1=maxsize
- 栈满：top0+1 == top1
![163](../../A一次元/images/Pasted%20image%2020260413220832.png)
# 二、队列
### 队列的定义和基本操作
只允许在一段进行插入，另一端进行删除的线性表，先进先出 FIFO
- 队首front：只允许删除
- 队尾rear：只允许插入
- 空队列
- EnQueue(&Q,x)：入队，若队列Q未满，将x加入，使之成为新的队尾
- DeQueue(&Q,&x)：出队，若队列Q非空，删除队头元素，并用x返回
- GetHead(Q,&x)：读队头元素
> 带取址符&的，会对队列元素进行修改，不带&的，只读
（对内存地址进行操作）
### 队列的顺序实现
1. 定义
\`\`\`c
#define MaxSize 10              //定义队列中元素的最大个数
typedef struct{
	ElemType data[MaxSizel];    //用静态数组存放队列元素
	int front,rear;             //队头指针和队尾指针
}SqQueue;

//初始化队列
void InitQueue(SqQueue &Q){
	Q.rear=Q.front=0;           //初始时队头、队尾指针指向0
\`\`\`
2. 基本操作
\`\`\`c
//判断队列是否为空【非循环队列】
boolQueueEmpty(SqQueueQ){
	if(Q.rear==Q.front)
		return true;
	else
		return false;
		
//入队-在队尾操作
bool EnQueue(SqQueue &Q,ElemType x){
	if((Q.rear+1)%MaxSize==Q.front) //判断非满
		return false;
	Q.data[Q.rear]=x;            //将x插入队尾
	Q.rear=(Q.rear+1)%MaxSize    //队尾指针后移【模运算-用于循环队列，避免溢出】
	return true;
}

//出队（删除一个队头元素，并用x返回）
boolDeQueue(SqQueue &Q,ElemType &x){
	if(Q.rear==Q.front)          //判断非空
		return false;
	x=Q.data[Q.front];
	Q.front=(Q.front+1)%MaxSize; //队头指针后移
	return true;
}

//读队头元素的值
...
	x=Q.data[Q.front];
\`\`\`


> **循环队列判断空/满的方法**:
> 1. 少用一个单元（rear标识的位置不存储数据）
> 队满：(Q.rear+1)%MaxSize\\==Q.front
> 队空：Q.front\\==Q.rear
> ![460](../../A一次元/images/Pasted%20image%2020260415230455.png)
> 2. 增加一个size变量，每次入队出队变化
> 队满：Q.size\\==MaxSize
> 队空：Q.size\\==0
> 3. 增加一个tag标志，出队后tag=0，入队后tag=1，此时若front\\==rear，则可以直接判断是队满还是队空
### 队列的链式实现
加了一个队尾指针的单链表
- 也区分带头结点 / 不带头结点
- 由于是单链表，需注意第一个元素入队 和 最后一个元素出队 之后队列的状态
- 链式存储可以自由增加元素，不用判断队满情况
1. 定义
\`\`\`c
typedef struct LinkNode{        //链式队列结点
	ElemType data;
	struct LinkNode *next;
}LinkNode;

typedef struct{                 //链式队列
	LinkNode *front,*rear;      //队列的队头和队尾指针
}LinkQueue;

//初始化队列（带头结点）
void InitQueue(LinkQueue &Q){   //初始时front、rear都指向头结点
	Q.front=Q.rear=(LinkNode*)malloc(sizeof(LinkNode));
	Q.front->next=NULL;
}

//初始化队列（不带头结点）
void InitQueue(LinkQueue &Q){   //初始时front、rear都指向NULL
	Q.front=NULL;
	Q.rear=NULL;
}
\`\`\`
2. 基本操作
\`\`\`c
//判断是否为空（带头结点）
	if(Q.front==Q.rear)
	
//判断是否为空（不带头结点）
	if(Q.front==NULL)
	
//新元素入队
void EnQueue(LinkQueue &Q,ElemType x){
	LinkNode*s=(LinkNode *)malloc(sizeof(LinkNode));
	s->data=x;
	s->next=NULL;
	/*不带头结点时，需要加入判断加入首个结点的情况（front还没定义）
		if(Q.front==NULL)
			Q.front=s;
			Q.rear=s;
		else ⬇
	*/
	Q.rear->next=s;             //新结点插入到rear之后
	Q.rear=s;                   //修改表尾指针
}

//队头元素出队（带头结点）
bool DeQueue(LinkQueue &Q,ElemType &x){
	if(Q.front==Q.rear)         //空队
		return false;
	LinkNode *p=Q.front->next; 
	x=p->data;
	Q.front->next=p->next;      //修改头结点的next指针，指向原来的第二个结点
	if(Q.rear==p){              //若此次是最后一个结点出队，将队列变为空队
		Q.rear=Q.front;
	}
	free(p);
	return true;
}

//出队（不带头结点）
...
	LinkNode *p=Q.front
	x=p->data;
	Q.front=p->next;
	if(Q.rear==p){
		Q.front=NULL;
		Q.rear=NULL;
	}
	free(p);
		
\`\`\`

### 双端队列
允许从两端插入/删除的线性表
- 输出 / 输入受限的双端队列
- 考点：不同双端队列，可能出现的输出序列

# 三、栈和队列的应用
## 栈的应用
1. **括号匹配问题**： 扫描表达式，扫描到左括号入栈，扫描到右括号就出栈
	匹配失败的情况：
	- 扫描到的 右括号 与 栈顶左括号 不匹配
	- 扫描完毕仍有左/右括号单独存在
2. **算术表达式求值**： 三种表达式：中缀 / 前缀 / 后缀（主要）
	1. 后缀表达式的计算：
		![600](../../A一次元/images/Pasted%20image%2020260416105612.png)
	2. 中缀表达式转后缀表达式：
		![580](../../A一次元/images/Pasted%20image%2020260416105948.png)
	3. 中缀表达式的计算（先转后缀，再计算后缀）
		 ![530](../../A一次元/images/Pasted%20image%2020260416110652.png)
3. **递归**：函数调用栈
	- 函数调用是LIFO，与栈相同
	- 递归必须定义：1. 递归体 2. 边界条件（递归出口）
	- 递归深度过大时，容易出现栈溢出
	- 例子：求阶乘；求斐波那契数列

## 队列的应用
1. 树的层次遍历
2. 图的广度优先遍历
3. 计算机系统中的应用：
	1. 打印机缓冲区服务
	2. cpu进程调度-先来先服务FCFS


# 四、数组和特殊矩阵
### 数组的存储结构
- 一维数组：直接映射一段连续的存储空间
- 二维数组：根据按行/列优先的原则，连续存储数组元素

>M行N列的二维数组b\\[M]\\[N]中，若按列优先存储，则
>b\\[i]\\[j]的存储地址=LOC+(j\\*M+i) \\* sizeof(ElemType)
![500](../../A一次元/images/Pasted%20image%2020260418102303.png)
### 矩阵的存储
> 注意区分：二维数组是按行/按列优先存储一维数据，矩阵是数学上的二维数据
> 数组从a\\[0]\\[0]开始，矩阵从a<sub>1,1</sub>开始

- 对称矩阵：只存储主对角线+上/下三角
	![320](../../A一次元/images/Pasted%20image%2020260418103401.png)
- 三角矩阵：只存储上/下三角【数组中增加一个常数项】
	![301](../../A一次元/images/Pasted%20image%2020260418103433.png)
- 三对角矩阵（带状矩阵）
	![180](../../A一次元/images/Pasted%20image%2020260418102742.png)
	![308](../../A一次元/images/Pasted%20image%2020260418103613.png)

- 稀疏矩阵：非零元素很少
	1. 三元组
		![163](../../A一次元/images/Pasted%20image%2020260418103004.png)
	2. **十字链表法**：行 | 列 | 值；<font color="#974806">同列下个元素</font>，<font color="#9bbb59">同行下个元素</font>
		![320](../../A一次元/images/Pasted%20image%2020260418103046.png)
> 稀疏矩阵压缩后会失去随机存取功能`,_e=`# 一、串的定义*
>这小节不在考纲范围

字符组成的有限序列
- 子串：连续的子序列【空串也是字串】
- 子串的位置：子串中第一个字符的位置
- 串的增删改查通常以子串为单位
- 子串的定位：找到符合子串的第一次出现位置
- 子串的比较：依次按字符比较ascll码

串的存储结构
- 顺序存储：用静态数组存储
- 链式存储：用单链表存储
- 块链存储：每个结点存储多个字符--提高存储密度
- 堆分配存储：每个结点按串长分配空间{char \\*ch,int length}

# 二、串的模式匹配
> 模式匹配：在主串中查找特定子串
> 简单模式（暴力）匹配算法：在长度为n的主串中找出所有长度为m的子串，O(nm)

## KMP算法
> 算法原理：分析**模式串**的结构，如果已匹配成功的序列中，存在后缀正好是模式串的前缀，则可以直接滑动模式串到对齐位置，无需回溯主串指针i
> - 利用已经求出的next数组进行模式匹配
> - O(m+n) = 求next数组O(m)+模式匹配最坏时间O(n)


![710](../../A一次元/images/Pasted%20image%2020260418110559.png)
### 1、KMP算法的原理
> - 前缀：除了末尾字符外的子串
> - 后缀：除了首个字符外的子串
> - 部分匹配值：前缀与后缀的 最长相等前后缀长度；计算方法：求出所有前后缀求交集，取交集中最长项的长度（或者直接观察最长重合）

**\\*部分匹配值表（PM表）**
- 计算方法：
	'a'，'ab'没有重合的前后缀，‘<mark style="background: #ADCCFFA6;">a</mark>b<font color="#c0504d">a</font>’ =1，'<mark style="background: #ADCCFFA6;">ab</mark><font color="#c0504d">ab</font>' =2，'<mark style="background: #ADCCFFA6;">ab<font color="#c0504d">a</font></mark><font color="#c0504d">ba</font>' =3
	模式串：a b a b a
	PM表： 0 0 1 2 3
- 含义：
	在匹配失败时，右滑位数=已匹配数-最后匹配项的PM值
	（如，已匹配aba，则右滑3-1=2，模式串向右滑动2格）

**next数组**
- 固定：<u>next\\[0]不存储，next\\[1]=0，next\\[2]=1</u>
- 计算方法：（手算）
	匹配失败时，若j=5，可知主串中已经有子串‘abab’，则可以令j=3，从第二个‘ab’继续进行匹配运算；同理观察出匹配失败时的不同情况，得出next表
	![259](../../A一次元/images/Pasted%20image%2020260418120907.png)
- 含义：
	在匹配失败时，主串指针i不变，模式串指针j变为失配项的next值

>next与PM表的转换：next\\[j] = PM\\[j-1]+1，PM最后一位舍去


### 2、\\*求next数组

### 3、KMP的进一步优化
优化next数组->nextval数组，其他算法不变
![297](../../A一次元/images/Pasted%20image%2020260423113758.png)
![297](../../A一次元/images/Pasted%20image%2020260423113818.png)
- nextval\\[1]=0，nextval\\[2]=1
- j=3时失配，因为j=1 **【由next\\[3]=1得到】** 都是’a‘，令nextval\\[3] = nextval \\[next\\[3]]=0，
- j=4时失配，因为j=2也是‘b’，令nextval\\[4] = nextval \\[next\\[4]]=1
- j=5时失配，因为j=3也是'a'，令nextval\\[5] = nextval \\[next\\[5]]=0 
- j=6时失配，由于j=6与j=4不相等，所以不变
>逻辑推理过程（参考）：主串’abax‘，模式串’abab‘，且x不等于b，没必要令j=2的’b‘与x比较，但是x有可能等于’a‘，所以将j修改成1，nextval=1




`,ve=`# 一、树
> - 根结点
> - 叶子结点
> - 子树
> - 深度：根结点-第1层
> - 结点的度：有几个分支
> - 树的度：最大的 结点的度
> - 有序树/无序树：子树是否可以交换
> - 森林
> - 路径长度：从一个结点到另一个结点

**树的性质**
1. 树的结点数 = 所有结点的度数和 +1
2. 度为m的树：至少有m+1个结点
3. m叉树：最多有m个结点【分支可以是空树】
	![310](../../A一次元/images/Pasted%20image%2020260423220106.png)
4. 度为m的树，第i层最多有m<sup>i-1</sup>个结点
5. 高度为h的m叉树，总共最多有(m<sup>h</sup>-1)/(m-1)个结点【1+m+m<sup>2</sup>+...】；最少有h个结点
6. 高度为h的，度为m的树，至少有h+m-1个结点 
7. 具有n个结点的m叉树的最小高度为 log<sub>m</sub>(n(m-1)+1)
# 二、二叉树
> 二叉树是有序树，有左子树和右子树

- **二叉树的类型**
	1. 满二叉树：结点为2<sup>h</sup>-1
		- 结点i的左孩子为2i，右孩子为2i+1
	2. 完全二叉树： 
		![202](../../A一次元/images/Pasted%20image%2020260423221358.png)
	3. 二叉排序树：左<右，O(n)
	4. 平衡二叉树：左右子树的深度差最多为1

- **二叉树的性质**
	1. 设度为0，1，2的结点个数为n<sub>0</sub>，n<sub>1</sub>，n<sub>2</sub>，则n<sub>0</sub>=n<sub>2</sub>+1
	2. 高度为h，第i层至多有2<sup>i-1</sup>个结点；总共最多有2<sup>h</sup>-1个结点

- **二叉树的存储**
	- 顺序：完全/满二叉树可以直接用数组存储，非完全二叉树中会有大量空结点
	- 链式：左右孩子指针（可定义父指针方便查找）

## 完全二叉树的性质：
- 只有最底2层有叶子结点
- 最多只有一个度为1的结点
- n个结点，h=\\[log<sub>2</sub>(n+1)] 【向上取整】或 \\[log<sub>2</sub>n]+1【向下取整】
- 已知n个结点可以推导出n<sub>0</sub>，n<sub>1</sub>，n<sub>2</sub>
> 几个重要常考的基本操作：
> - i的左孩子——2i
> - i的右孩子——2i+1
> - i的父节点——\\[i/2]
> 
> 若完全二叉树中共有n个结点，则
> - 判断i是否有左孩子？——2i≤n？
> - 判断i是否有右孩子?——2i+1≤n?
> - 判断i是否是叶子/分支结点？——i>\\[n/2]？ 
> 	- i<=\\[n/2]为分支结点，i>\\[n/2]为叶子结点

## 二叉树的遍历
1. 前序
2. 后序
3. 中序
\`\`\`c
/// 中序遍历的递归算法 -- 左中右
void InOrder(BitTree T){
	if(T!=NULL){
		InOrder(T->lchild);
		visit(T);
		InOrder(T->rchild);
	}
}
\`\`\`
4. 层次遍历：从左到右遍历同一层的结点
	- 设置队列，每次访问结点，都令其左右孩子入队，最后遍历队列
	![390](../../A一次元/images/Pasted%20image%2020260423224340.png)

**由遍历序列反向构造二叉树**
【必须需要有中序序列】
![640](../../A一次元/images/Pasted%20image%2020260423224741.png)

## 线索二叉树
> 一般二叉树没有前驱，遍历时只能从根节点开始，不方便
> 线索二叉树：按特定规则将二叉树中所有结点排列成一个线性序列

### 中序线索二叉树
![670](../../A一次元/images/9c4822e034026ba5730552cb093b6d4d.png)
- 存储结构：线索链表
	![320](../../A一次元/images/Pasted%20image%2020260423225836.png)
- 前序与后续线索二叉树
	![280](../../A一次元/images/Pasted%20image%2020260423230201.png)

### 二叉树的线索化
- 中序线索化：进行中序遍历的同时，进行线索化
![720](../../A一次元/images/Pasted%20image%2020260424101346.png)
\`\`\`c
//中序线索化二叉树T 主过程
void CreateInThread(ThreadTree T){
	pre=NULL;                //全局变量pre初始为NULL
	if(T!=NULL){             //非空二叉树
		InThread(T);
		if(pre->rchild==NULL)
			pre->rtag=1;     //处理遍历的最后一个结点
	}
}
\`\`\`

- 先序/后序线索化：和中序类似，通过遍历的过程进行线索化
### 线索二叉树的遍历
![442](../../A一次元/images/Pasted%20image%2020260424105507.png)
- 先序/后序--在结点中加入前驱指针，或者从根结点遍历
- 中序：
\`\`\`c
// 找到以P为根的子树中，第一个被中序遍历的结点
ThreadNode *Firstnode(ThreadNode*p){      //循环找到最左下结点
	while(p->ltag==0） p=p->lchild;
	return p;
}

// 找到结点p的后继结点
ThreadNode *Nextnode(ThreadNode *p){      
	//p=0时，rchild指向右孩子，后继结点为右子树的最左结点
	if(p->rtag==0) return Firstnode(p->rchild);  
	else return p->rchild;                //rtag==1直接返回后继线索
}

// 找到结点p的前驱结点
ThreadNode *Prenode(ThreadNode *p){
	//p=0时，lchild指向左孩子，前驱结点为左子树的最右结点
	if(p->ltag==0) return Lastnode(p->lchild);	
	else return p->lchild;     //ltag==1直接返回前驱线索
}

// 中序遍历（利用线索实现的非递归算法） 空间复杂度O(1)
voidInorder(ThreadNode *T){
	for(ThreadNode *p=Firstnode(T);p!=NULL;p=Nextnode(p))
		visit(p);
}
\`\`\`

# 三、树与森林
### 树的存储结构
> 这三种方法也可以存储森林
1. 双亲表示法
	- 数组 {ElemType data; int parent} //父结点的数组下标
	- 根节点为-1
	- 查找双亲方便
2. 孩子表示法
	- 顺序+链式
	- 每个结点用链表记录 孩子节点的位置 与 指向下一个孩子结点的指针
	- 查找该结点的孩子结点方便
	![240](../../A一次元/images/Pasted%20image%2020260424110452.png)
3. 孩子兄弟表示法
	- 左孩子+右兄弟
	- 相当于把树->二叉树
		![340](../../A一次元/images/Pasted%20image%2020260424111034.png)

### 树、二叉树、森林的转换
1. 树->二叉树：孩子兄弟表示法⬆
	![480](../../A一次元/images/Pasted%20image%2020260424111626.png)
2. 森林->二叉树：与树相似，把各树的根结点视为兄弟结点
3. 二叉树->树/森林：逆推导，结果唯一

### 树和森林的遍历
<u>对应关系：可以将树和森林转化为二叉树来遍历</u>
![440](../../A一次元/images/Pasted%20image%2020260424112902.png)
- 树的遍历：与二叉树类似
	- 先根，后根，层次遍历
- 森林的遍历
	- 先序遍历：等同于依次对子树进行先序遍历
	- 中序遍历：等同于依次对子树进行后根遍历

# 四、树与二叉树的应用
### 带权路径长度
- 结点的带权路径长度：路径长度 x 结点权值
- 树的**带权路径长度WPL**：所有叶子节点的 带权路径长度 之和
- 加权平均长度：WPL / 各叶子节点的权值之和
### 哈夫曼树
> 最优二叉树，WPL最小的二叉树

**哈夫曼树的构造与性质**
![](../../A一次元/images/132f953dfe54eaf9d7b3bb05eb2e56ab.png)

**哈夫曼编码**
- 前缀编码（编码互相不为前缀，防止译码错误）
- 数据的压缩：由于C的频次高，可以使其编码变短来缩短平均编码长度
![273](../../A一次元/images/Pasted%20image%2020260425102136.png)——>![139](../../A一次元/images/Pasted%20image%2020260425110250.png)
A：00；B：01；C：10；D：11 ——>A：10；B：111；C：0；D：110


### 并查集
> 用森林来表示集合
> 双亲表示法：方便修改双亲结点

- 并：将两个集合合并为一个（修改根节点的parent从-1为 另一棵树根结点的下标）
- 查：指定一个元素的所属集合（求根结点）
- 对并的优化：令高度小树合并到较大的树中，可以提高查的效率

\`\`\`c
//Union“并”操作，小树合并到大树
void Union(int S[l,int Rootl,int Root2)(
	if(Rootl==Root2) return;
	if(S[Root2]>S[Root1]){     //Root2结点数更少
		S[Root1] += S[Root2];  //累加结点总数
		S[Root2]=Root1;        //小树合并到大树
	}else {
		S[Root2] += S[Root1]； //累加结点总数
		S[Root1]=Root2；       //小树合并到大树
	}
}
\`\`\`

- 对查的优化：压缩路径--对一个元素进行查找，找到根结点后，将查找路径上的所有结点都挂到根结点下，优化后查找的时间复杂度<=O(4)
\`\`\`c
//Find“查”操作优化，先找到根节点，再进行“压缩路径”
int Find(int S[],int x)(
	int root = x;
	while(S[root]>=0)  root=s[root]：//循环找到根
	while(x!=root){     //压缩路径
		int t=S[x];     //t指向x的父节点
		S[x]=root;      //x直接挂到根节点下
		x=t;
	}
	return root;        //返回根节点编号
}
\`\`\`

![660](../../A一次元/images/Pasted%20image%2020260425105335.png)`,ye=`# 一、图的基本概念
G=（V，E）其中V表示顶点集，E表示边集
> - |V|表示图G中顶点个数，|E|表示边的个数
> - 顶点集V是非空集，边集可以是空集
> - 路径：一点到另一点的顶点序列
> - 回路（环）：首尾相同的路径
> - 简单路径 / 简单回路：顶点不重复的路径/回路

1. 无向图
	- 顶点的度：顶点连接的边数；<u>所有顶点度的和 = 边数x2</u>
	- 连通图：任意两个结点都是连通的
	- 连通分量：无向图的**极大连通子图**【无向图中可能有多个不连通的连通分量】
2. 有向图：有向边称为弧，E={<A,B>}
	- 入度之和 = 出度之和 = 边数（=ID(v)=OD(v)）
	- 强连通：两个点之间来回都有路径
	- 强连通图；强连通分量
3. 生成子图：包含所有顶点，但是删去部分边的子图
4. 生成树：无向图中，包含所有顶点的一个**极小联通子图**【保证连通，点边尽可能少】
	- 一个无向图可以有多种生成树
	- 生成树加上一条边，就会形成回路
5. 生成森林：多个连通分量的组合
6. 带权图
7. 无向/有向完全图：任意两点都有边/双向边
8. 有向树：一个顶点入度为0，其他结点入度都为1

# 二、图的存储及基本操作
> 主要为**邻接矩阵**与**邻接表**，十字链表与多重表理解原理
![650](../../A一次元/images/Pasted%20image%2020260428113601.png)
### 邻接矩阵
无向图/有向图的区别：是否对称【无向图的邻接矩阵为对称矩阵，可以压缩】
![148](../../A一次元/images/9a96d1208e9809fc0ab85cc7b6ff3c3b.png)    ![149](../../A一次元/images/Pasted%20image%2020260428105059.png)
- 带权值的邻接矩阵：把1替换为路径长度，0换成无穷大
- <u>邻接矩阵的n次</u>：A<sup>n</sup>的\\[i]\\[j]位置上的元素表示顶点i到顶点j的长度为n的路径个数
![103](../../A一次元/images/Pasted%20image%2020260428105807.png)![600](../../A一次元/images/Pasted%20image%2020260428105734.png)
### 邻接表
> 顺序+链式
> **邻接表不唯一**，即结点顺序可能不同，如A-B-C也可作A-C-B
> 无向图：2|E|个结点（每条边有重复记录）有向图：|E|个结点

![271](../../A一次元/images/Pasted%20image%2020260428110416.png)
### 十字链表-有向
横向表示出度，纵向表示入度
![590](../../A一次元/images/Pasted%20image%2020260428112225.png)
### 邻接多重表-无向
横向表示与A相连的所有顶点
纵向表示与B相连的所有顶点
![510](../../A一次元/images/9d9f81f7a6dd810e2feed28bcc7f7ce7.png)

# 三、图的遍历
### 广度优先遍历BFS
> 类似树的层次遍历   ~~菌毯~~
> 空间复杂度：辅助队列O(|V|)
> 时间复杂度：与图存储的空间复杂度相等【邻接矩阵-O(|V|<sup>2</sup>)，有向邻接矩阵-O(|V|+|E|) 】

> 1. 找到一个与顶点相邻的所有顶点
> 2. 标记被访问过的结点
> 3. 使用辅助队列记录遍历顺序
\`\`\`c
bool visited[MAX_NUM];    //访问标记数组初始为false

// 对图G进行广度优先遍历（对于非连通图，如果存在2个连通分量，则进行2次BFS操作）
void BFSTraverse(GraphG){
	for(i=0;i<G.vexnum;++i)
		visited[i]=FALSE; //访问标记数组初始化
	InitQueue(Q);         //初始化辅助队列Q
	for(i=0;i<G.vexnum;++i)//从0号顶点开始遍历
		if(!visited[i])   //对每个连通分量调用一次BFS
			BFS(G,i);     //vi未访问过，从vi开始BFS
			
//广度优先遍历
void BFS(Graph G,int v){         //从顶点V出发，广度优先遍历图G
	visit(v);             //访问初始顶点v
	visited[v]=TRUE;      //对v做已访问标记
	Enqueue(Q,v);         //顶点v入队列Q
	while(!isEmpty(Q)){
		DeQueue(Q,v);     //顶点v出队列
		for(w=FirstNeighbor(G,v);w>=0;w=NextNeighbor(G,V,w))
			//用一个visited数组 检测v所有邻接点
			if(!visited[w]){     //w为v的尚未访问的邻接顶点
				visit(w);        //访问顶点w
				visited[w]=TRUE; //对w做已访问标记
				EnQueue(Q,w)     //顶点w入队列
			}
		}
	}
}
\`\`\`

### 深度优先遍历DFS
> 类似树的先根遍历
> 空间复杂度：递归调用栈-最坏O(|V|)
> 时间复杂度：与BFS一样，与存储方式有关

\`\`\`c
bool visited[MAX_VERTEX_NUM];//访问标记数组
//对图G进行深度优先遍历（对于非连通图，如果存在2个连通分量，则进行2次DFS操作）
void DFSTraverse(Graph_G){
	for(v=0;v<G.vexnum;++v)
		visited[v]=FALSE;    //初始化已访问标记数据
	for(v=0;v<G.vexnum;++v)
		if(!visited[v])
			DFS(G,V);
}
//从顶点v出发，深度优先遍历图G
void DFS(Graph G,int v){     
	visit(v);                //访问顶点v
	visited[v]=TRUE;         //设已访问标记
	for(w=FirstNeighbor(G,v);w>=0;w=NextNeighor(G,V,w))
		if(!visited[w]){     //w为u的尚未访问的邻接顶点
			DFS(G,W);        //递归
		}
}
\`\`\`
### 广度优先/深度优先 生成树
可以将遍历的过程写成一颗生成树 / 生成森林【若用邻接表存储，由于邻接表的不唯一性，生成树也不唯一】

# 四、图的应用
## 最小生成树
> MST：无向连通图转化为生成树时，边的权值之和最小的生成树，非连通图只能转化成生成森林
> - 若有权值相等边，最小生成树可能不唯一，但是总权值相等

生成树的创建--了解原理⬇
1. **prim算法**-边稠密图
	从某一个顶点开始构建生成树，每次将代价最小的新顶点纳入生成树，直到所有顶点都纳入为止

2. **Kruskal算法**-边稀疏但顶点多图
	每次选择一条权值最短的边，如果两个顶点原本不连通，使其连通，直到所有顶点都连通为止
## 最短路径问题
![570](../../A一次元/images/Pasted%20image%2020260507164146.png)
### BFS
> 只适用于无权图，时间复杂度O(|V|<sup>2</sup>)
![](../../A一次元/images/Pasted%20image%2020260507131249.png)
\`\`\`c
//求顶点u到其他顶点的最短路径
void BFS_MIN_Distance(Graph G,int u){
	//d[i]表示从u到i结点的最短路径
	for(i=0;i<G.vexnum;++i){
		d[i]=♾;//初始化路径长度（无穷大表示没有路径）
		path[i]=-1；//最短路径从哪个顶点过来（前驱结点）
	}
	d[u]=0;
	visited[u]=TRUE;
	EnQueue(Q,u);
	while(!isEmpty(Q)){
		DeQueue(Q,u);//队头元素u出队
		for(w=FirstNeighbor(G,u);w>=0;w=NextNeighbor(G,u,w))
			if(!visited[wl){//w为u的尚未访问的邻接顶点
				d[w]=d[u]+1;//路径长度加1
				path[w]=u;//最短路径应从u到w
				visited[w]=TRUE;//设已访问标记
				EnQueue(Q,w);//顶点w入队
			}
		}
}
\`\`\`
### Dijkstra
> 带权图/无权图，时间复杂度O(|V|<sup>2</sup>)
> 带权的广度优先遍历
> 每次遍历处理final\\[i]=false且dist最短的结点，将final\\[i]=ture且更新dist值，
> -  [迪杰斯特拉 dijkstra算法](https://www.bilibili.com/video/BV1QESyYGE55/?share_source=copy_web&vd_source=47bc448facac6ed847a6836372d368c3)

![290](../../A一次元/images/Pasted%20image%2020260507135844.png)

### Floyd
> 动态规划，时间复杂度O(n<sup>3</sup>)，空间复杂度O(n<sup>2</sup>)
> 遍历每一对顶点，迭代生成A<sup>(-1)</sup>~A<sup>(n)</sup>判断加入中间结点会不会缩短路径
>-  [弗洛伊德 Floyd算法]( https://www.bilibili.com/video/BV1iiksYCEgf/?share_source=copy_web&vd_source=47bc448facac6ed847a6836372d368c3)

![149](../../A一次元/images/Pasted%20image%2020260507163844.png)
![330](../../A一次元/images/Pasted%20image%2020260507161122.png)
\`\`\`c
//.....准备工作，根据图的信息初始化矩阵A和中转矩阵path⬆
for (int k=0; k<n; k++){         //考虑以VK作为中转点
	for(inti=0；i<n；i++){       //遍历整个矩阵，i为行号，j为列号
		for (int j=0; j<n; j++){
			if (A[i][j]>A[i][k]+A[k][j]){ //以Vk为中转点的路径更短
				A[i][j]=A[i][k]+A[k][j];  //更新最短路径长度
				path[illj]=k;             //中转点
			}              
.....
\`\`\`


## 有向无环图DAG
节省空间
![310](../../A一次元/images/Pasted%20image%2020260507165601.png)

## 拓扑排序 
> 有向无环图的顶点构成的序列，表示工程中每个活动的顺序
> 拓扑排序 /逆拓扑 序列不唯一
> 若有环则不存在拓扑排序

- AOV网：用**有向无环图**表示工程，顶点表示活动，有向边表示活动的先后
	![270](../../A一次元/images/Pasted%20image%2020260508102026.png)
- 拓扑排序的实现：
	1.  从AOV网中选择一个没有前驱（入度为O）的顶点并输出。
	2. 从网中删除该顶点和所有以它为起点的有向边。
	3. 重复①和②直到当前的AOV网为空或当前网中不存在无前驱的顶点为止。
\`\`\`c
// 基于邻接表的拓扑排序（优先删除入度为0的点）
bool TopologicalSort(Graph G){
	InitStack(S);        //初始化栈，存储入度为0的顶点
	for(int i=0;i<G.vexnum;i++)
		if(indegree[i]==0)
			Push(S,i);   //将所有入度为0的顶点进栈
	int count=0;         //计数，记录当前已经输出的顶点数
	while(!IsEmpty(S)){  //栈不空，则存在入度为0的顶点
		Pop(S,i);        //栈顶元素出栈
		print[count++]=i;//输出顶点i
		for(p=G.vertices[i].firstarc;p:p=p->nextarc){
			//将所有i指向的顶点的入度减1，并且将入度减为0的顶点压入栈s
			V=p->adjvex;
			if(!(--indegree[vl))
				Push(S,V);//入度为0，则入栈
		}
	}
	if(count<G.vexnum) 
		return false;     //排序失败，有向图中有回路
	else 
		return  true;     //拓扑排序成功
\`\`\`
- DFS实现**逆拓扑排序**（优先删除出度为0的点）
	深度优先遍历，依次入栈，优先输出最深的结点
## 关键路径
- AOE网：用有向边表示活动，顶点表示事件
	![260](../../A一次元/images/Pasted%20image%2020260508102056.png)
- 关键路径：具有最大路径长度的路径，关键路径上的活动称为关键活动【工程至少需要的时间】【活动可并行发生】
	1. 事件的最早发生时间
	2. 事件的最晚发生时间
	3. 活动的最早开始时间
	4. 活动的最晚开始时间
	5. 活动的时间余量 = 最晚 - 最早；活动a可以拖延的时间`,be=`## 基本概念
- 查找表：静态查找表/动态查找表--是否修改数据
- 关键字：唯一标识元素的值
- 查找长度：对关键字的比较次数
- 平均查找长度ASL【ASL的数量级反映了时间复杂度】

# 一、顺序查找与二分查找
### 顺序查找
- O(n)
- ASL=(n+1)/2
- 有序表的顺序查找【查找判定树⬇】		![|420](A一次元/images/Pasted%20image%2020260509112608.png)
### 二分查找
- （有序表）
- 时间复杂度O(log<sub>2</sub>n)
\`\`\`c
//折半查找
int Binary_Search(SSTable L,ElemType key){
	int low=0,high=L.TableLen-1,mid;
	while(low<=high){
		mid=(low+high)/2;    	//取中间位置
		if(L.elem[mid]==key)
			return mid;
		//查找成功则返回所在位置
		else if(L.elem[mid]>key)
			high=mid-1;       	//从前半部分继续查找
		else
			low=mid+1;			//从后半部分继续查找
		}
		return -1;				//查找失败，返回-1
\`\`\`
- 二分查找判定树
	- 一定是平衡二叉树，右子树-左子树=0或1
	- h=\\[log<sub>2</sub>(n+1)]
	![|490](A一次元/images/Pasted%20image%2020260514133529.png)
### 分块查找 
- （ *选择题* ）
- 1.索引查找 2.块内查找
- 索引区间有序，块内可以无序
- 如果在块内找不到则查找失败
![|460](A一次元/images/Pasted%20image%2020260514134421.png)
- 均匀分块时（顺序索引）的ASL = (b块+1)/2 + (s个+1)/2
- 块大小最优值：s=√n时，ASL最小，为√n +1
# 二、树形查找
> 树形数据的查询复杂度往往与**高度**有关
> 自平衡树（self-balance）可以自动调整结构：AVL，红黑树，B树
### 二叉排序树BST
1. 定义：有序，左<根<右
2. 插入：直接按大小插入在叶子结点
3. 建立：依次插入，根据序列顺序不同，排序树不同
4. 删除：1.叶结点-直接删除  2.有左或右子树-直接上移  3.同时有左子树和右子树：<u>找到直接后继/前驱替换根节点</u>（中序遍历的上一个/下一个，保持有序）
	![|191](A一次元/images/Pasted%20image%2020260516205829.png)
5. ASL=log<sub>2</sub>n；最坏情况（只有左子树或右子树）ASL=(n+1)/2 *顺序*
### 平衡二叉树AVL
1. 定义：高度差（平衡因子）=左子树高度-右子树高度<=1
2. 插入：维持平衡
	- 最小不平衡树：
		 ![|270](A一次元/images/Pasted%20image%2020260514150938.png)
	- 调整最小不平衡子树【插入操作导致该子树h+=1，调整后整体恢复平衡】
		![|360](A一次元/images/Pasted%20image%2020260514150758.png)
		![|620](A一次元/images/Pasted%20image%2020260514151332.png)
		![|600](A一次元/images/Pasted%20image%2020260514151651.png)
3. 删除：与插入相同，调整最小不平衡子树
4. 最大深度h=log<sub>2</sub>n —>时间复杂度 O(log<sub>2</sub>n)
5. 递推公式：（构造h层所需最少结点）n<sub>h</sub>=1+n<sub>h-1</sub>+n<sub>h-2</sub> （n0=0，n1=1）

### 红黑树RBT
> 平衡二叉树每次插入都需要调整平衡，时间开销大 - 查找频繁
> 红黑树RBT的插入删除一般不会破坏‘红黑’特性 - 增删频繁
> *不考代码*

1. 定义：【根叶黑、左根右、不红红、黑路同】
	1. 根节点黑色
	2. 叶节点（失败结点NULL）黑色
	3. 不存在相邻的红结点（父黑-红-子黑）
	4. 结点到任意叶结点的简单路径上，所含黑色结点的数量相同
2. 性质
	- 黑高bh：结点到任意叶结点经过的黑色结点数量（不含本体）
		- 总高度h，黑高>=h/2，非叶结点数n>=2<sup>h/2</sup>-1⤵
	- 红黑树高度h<=2log<sub>2</sub>(n+1)【—>查找效率O(log<sub>2</sub>n)】
	- 从根到叶结点的最长路径<=最短路径x2【相对于AVL，允许左右子树高度差达2倍】
	
3. 插入
	- 新插入的结点**初始为红色**，并且按序插入在左子树或右子树上
	【插入黑色时必然破坏性质4，插入红色时可能会破坏性质3】
	- 插入重复结点时，插在左边右边都可以
	- 变新操作时，若爷结点是红色结点，只需考虑是否破坏性质3
	- 调整，维持性质1~4⬇

> 1. 新结点是根——染黑色
> 2. 新结点不是根——染红色
> 	- 若直接满足性质1~4，结束
> 	- 若不满足，则根据父节点的兄弟结点（叔结点）做出调整
> 		- 叔结点黑色：旋转--染色
> 				1. LL：父结点替换爷结点，染色
> 				2. RR：父结点替换爷结点，染色
> 				3. LR：子结点替换爷结点，染色
> 				4. RL：子结点替换爷结点，染色
> 		- 叔结点红色：染色--变新
> 
> 旋转--染色：进行替换的两个结点反色
>  ![|580](A一次元/images/Pasted%20image%2020260515104121.png)
> 染色--变新：父-叔-爷，三个结点反色，并且将爷结点视为新插入的结点
> - 违反’根叶红‘
> ![|600](A一次元/images/Pasted%20image%2020260515104728.png)
> - 违反’不红红‘，然后又违反’根叶红‘
> ![](A一次元/images/Pasted%20image%2020260515110047.png)

> 动画演示网站 [Red/Black Tree Visualization](https://www.cs.usfca.edu/~galles/visualization/RedBlack.html)

4. 红黑树的删除*
# 三、B树 与 B+树
> 难度高
> *不考代码*

### B树
>  又称多路平衡查找树，B树中所有结点的孩子个数的最大值称为B树的阶，通常用m表示（B树可能为空树）5阶⤵
>  核心特性：尽可能满（至少分\\[m/2]叉，充分利用空间），绝对平衡（所有子树高度相等），有序（左子树<关键字<右子树）

![|670](A一次元/images/Pasted%20image%2020260516210326.png)
1. 性质：
	1. 树中每个结点：至多有m棵子树，至多有m-1个关键字
	2. 除根结点外的所有非叶结点：至少有\\[m/2]棵子树，至少有\\[m/2]-1个关键字
		【向上取整，5叉树至少有3个分支，2个关键字】
	3. 若根结点不是终端结点（只有根），则至少有两棵子树【绝对平衡】
	4. 所有叶结点都出现在同一层，并且不带信息【可以视为外部结点或类似于折半查找判定树的查找失败结点，实际上这些结点不存在，指向这些结点的指针为空】
	5. 非叶结点的结构：
		![|560](A一次元/images/Pasted%20image%2020260516211416.png)
		- K<sub>i</sub>（i=1,2,..,n）为结点的关键字，且满足K<sub>1</sub><K<sub>2</sub><...<K<sub>n</sub>；【结点内有序】
		- P<sub>i</sub>（i=0,1,..,n）为指向子树根结点的指针，且指针P<sub>i-1</sub>所指子树中所有结点的关键字均小于K<sub>i</sub>；P<sub>i</sub>所指子树中所有结点的关键字均大于K<sub>i</sub>，
		- n为结点中关键字的个数（\\[m/2]-1<= n <=m-1)

2. 高度
	最小高度：h>=log<sub>m</sub>(n+1)
	——n<=(m-1)(1+m+m<sup>2</sup>+...+m<sup>h-1</sup>)=m<sup>h</sup>-1【每层尽可能满】
	最大高度：h<=log<sub>[m/2]</sub>((n+1)/2)+1
	——n+1>=2(\\[m/2])<sup>h-1</sup>【每层分叉最少】
	- n个关键字有n+1个叶子结点，即n+1个数据域
3. B树的查找：多路分支
4. B树的插入
	1. 定位：查找终端结点
	2. 分裂：当插入后关键字超出上限（m-1）时
		- 把中间结点\\[m/2]放到父结点
		- 从中间位置将结点分为两颗子树，若父结点也超出上限则递归分裂 
5. B树的删除
	- 位于非终端结点：直接用直接前驱/后继来替换
	- 位于终端结点：
		1. 结点关键字个数>=\\[m/2]：直接删除
		2. 结点关键字不足&兄弟结点足够时，父-兄-子交换（中序相邻）
			![|210](A一次元/images/Pasted%20image%2020260517110826.png)——>![210](A一次元/images/Pasted%20image%2020260517110911.png)
		3. 结点关键字不足&兄弟结点也不足，父-兄-子合并为一个结点
			(若父结点在合并后<\\[m/2])
			![210](A一次元/images/Pasted%20image%2020260517111530.png)——>![210](A一次元/images/Pasted%20image%2020260517111626.png)
### B+树
![](A一次元/images/Pasted%20image%2020260517112557.png)
> 非叶节点不存信息，使得一个磁盘块可以包含更多关键字，从而使树高度降低，提高了查找效率
> 典型应用：索引，mysql
### B树与B+树的比较
1. B树n个结点对应n+1课子树；B+树n个结点对应n棵子树
2. B树根节点\\[1，m-1]，其他结点关键字\\[\\[m/2]-1,m-1]；
	B+树根节点\\[1，m]，其他结点关键字\\[\\[m/2],m]；
3. B树关键字不重复
	B+树叶节点包含所有关键字，并且可能在多个结点中重复出现
4. B树的结点中有关键字对应的信息（或者信息的存储地址）叶结点表示查找失败
	B+树中只有叶结点包含信息，非叶结点仅用于检索
5. B+树中叶结点是一个线性链表，可以顺序查找
![|560](A一次元/images/Pasted%20image%2020260517113910.png)
# 四、散列（哈希）表
> 哈希函数：Addr=Hash(key)
> 冲突：插入地址已有元素
> 同义词：不同关键字有相同地址
### 散列函数的构造
> 条件：1.定义域何值域覆盖所有关键字和散列表 2.尽可能减少冲突 3.散列函数尽可能简单

1. 余数法：H(key) = key%p（p选取质数）
2. 直接地址：H(key) = a\\*key+p
3. 数字分析：（手机后四位）
4. 平方取中：（平方后取中间几位数，相对不会重复）
### 处理冲突
1. 拉链法：把同义词组织成**链表**
2. 开放地址法：让空闲地址存储冲突元素，使用探测序列查找下一个空闲地址
	- 删除元素时，不能直接把被删元素空间置空，否则会截断同义词的查找路径，应该标记元素为‘已删除’
	1. 线性探测法：顺序存至下一个单元
	2. 平方探测法：探测序列—1,-1,4,-4...k,-k<sup>2</sup>
	3. 双散列法：用第二个hash函数计算探测序列，H<sub>i</sub>=(H(key)+i\\*H<sub>2</sub>(key))%m，当H<sub>2</sub>(key)与m互质时，可以保证双散列法探测所有单元
	4. 伪随机法：探测序列是伪随机数
### 散列表的性能分析
> 以线性探测法为例

- ASL计算
	![|560](A一次元/images/Pasted%20image%2020260518101339.png)		
	- ASL<sub>失败</sub>与表中元素的数量有关（遍历后仍未找到）
		![|430](A一次元/images/Pasted%20image%2020260518101730.png)
	- 删除一个元素后，不影响其他元素的查找长度
		![|550](A一次元/images/Pasted%20image%2020260518102317.png)

- **装填因子**：a = 表中元素个数n / 哈希表长度m
	装填因子越大越容易发生冲突，导致插入查找效率降低，ASL增大
- **堆积现象**：几个初始地址不同的元素争夺同一个空闲地址（线性探测法经常出现）
	可以使用平方探测法减少堆积现象`,xe=`> 算法可视化：https://www.cs.usfca.edu/~galles/visualization/Algorithms.html
### 基本概念
- 排序的稳定性：若经过排序后，**关键字相同的元素**在排序前后的**相对位置**不变，则称这种排序算法是稳定的
- 内部排序：数据都在内存中——让时/空间复杂度尽可能低
- 外部排序：还需关注读写磁盘次数更少
# 一、插入排序
> 每次将一个待排序的记录插入一个已经排好序的子序列中，直到每个元素都插入完成
> - 最坏时间复杂度：O(n<sup>2</sup>)（遍历x插入）
> - 最好时间复杂度：O(n)（原本有序）
> - 空间复杂度：O(1)
> - 稳定排序
### 直接插入排序
\`\`\`c
//直接插入排序(前i位为已排序子序列)
void InsertSort(int A[],int n){
	int i,j,temp;
	for(i=1;i<n;i++){		//将各元素插入已排好序的序列中
		if(A[i]<A[i-1]){	//若A[i]关键字小于前驱
			temp=A[i];		//用temp暂存A[i]
			for(j=i-1;j>=0&&A[j]>temp;--j)	//检查所有前面已排好序的元素
				A[j+1]=A[j];//所有大于temp的元素都向后挪位
			A[j+1]=temp;	//复制到插入位置
\`\`\`
### 折半插入排序
- 在每次新元素插入时，使用折半查找的方式找插入位置
\`\`\`c
//折半插入排序
void InsertSort(int A[l,int n){
	int i,j,low,high,mid;
	for(i=2;i<=n;i++){			//依次将A[2]~A[n]插入前面的已排序序列
		A[0]=A[i];				//将A[i]暂存到A[0]【哨兵法】
		low=1;high=i-1;			//设置折半查找的范围
		while(low<=high){		//折半查找（默认递增有序）
			mid=(low+high)/2;	
			if(A[mid]>A[0]) high=mid-1；//查找左半子表
			else low=mid+1;		//查找右半子表
		}
		for(j=i-1;j>=high+1;--j)
			A[j+1]=A[j];		//统一后移元素，空出插入位置
		A[high+1]=A[0];			//插入操作
}
\`\`\`
> 哨兵法：让A\\[0]存放待比较元素，简化循环条件，即不用判断j<0的情况（<u>遍历到自身时循环自然结束</u>）
### 希尔排序
> 对一个基本有序的序列进行直接插入排序，可以提高效率
> - 时间复杂度：优于直接插入
> - 空间复杂度：O(1)
> - 不稳定

通过逐步缩小增量的方式，对相隔一定距离的元素构成的子串进行多次直接插入排序
![|500](A一次元/images/Pasted%20image%2020260519091007.png)
![|500](A一次元/images/Pasted%20image%2020260519091107.png)
第三趟：d<sub>3</sub>=1，即对原表进行插入排序
 \`\`\`c
//希尔排序
void ShellSort(int A[l,int n){
	int d,i,j;
	//A[0]只是暂存单元，不是哨兵，当j<=0时，插入位置已到
	for(d=n/2;d>=1;d=d/2)		//步长变化
		for(i=d+1; i<=n; ++i)
			if(A[i]<A[i-d]){	//需将A[i]插入有序增量子表
				A[0]=A[i];		//暂存在A[0]
				//将i与i+d,i+2d...当作子表来进行插入排序
				for(j= i-d; j>0 &&A[0]<A[j]; j-=d)
					A[j+d]=A[j];//记录后移，查找插入的位置
				A[j+d]=A[0];	//插入
 \`\`\`
# 二、交换排序 

### 冒泡排序
> 多次遍历，每次遍历都对相邻的两个元素进行排序交换
> - 时间复杂度：O(n<sup>2</sup>)（遍历x交换）
> - 空间复杂度：O(1)
> - 稳定
> - 可以用于链表
\`\`\`c
//冒泡排序
void BubbleSort(int A[l,int n){
	for(int i=0;i<n-1;i++){
		bool flag=false;	 	//表示本趟冒泡是否发生交换的标志
		for(int j=n-l;j>i;j--)	//一趟冒泡过程
		if(A[j-1]>A[j]){		//若为逆序【相等时不交换,稳定排序】
			swap(A[j-1],A[j])；	//交换函数，用中间变量temp
			flag=true;
		}
	if(flag==false)
	return;//本趟遍历后没有发生交换，说明表已经有序
\`\`\`

### 快速排序
> 使用一个枢轴量，通过一次划分将表分成左子表<右子表，然后递归划分
> - 最坏时间复杂度：O(n<sup>2</sup>)
> - 最好/平均时间复杂度：O(nlog<sub>2</sub>n)（n\\*递归层数）
> - 最坏空间复杂度：O(n)
> - 最好/平均空间复杂度：O(log<sub>2</sub>n)（递归层数）
> 	1. 若每次划分刚好一半，则递归栈层数为log<sub>2</sub>n，最坏为n-1⤴
> 	2. 把排好序的表元素组织成二叉树，二叉树的层数就是递归层数（\\[log<sub>2</sub>n]+1~n)
> - 不稳定
> - 仅顺序存储

\`\`\`c
//用第一个元素将待排序序列划分成左右两个部分
int Partition(int A[l,int low,int high){
	int pivot=A[low];	//第一个元素作为枢轴
	while(low<high){	//用low、high搜索枢轴的最终位置
		while(low<high&&A[high]>=pivot)  --high;
			A[low]=A[high];		//比枢轴小的元素移动到左端
		while(low<high&&A[low]<=pivot)   ++low;
			A[high]=A[low];		//比枢轴大的元素移动到右端
	}
	A[low]=pivot;		//枢轴元素存放到最终位置
	return low;			//返回存放枢轴的最终位置
}	

//快速排序--递归
void QuickSort(int A[l,int low,int high){
	if(low<high){//递归跳出的条件
		intpivotpos=Partition(A,low,high);//划分
		QuickSort(A,low,pivotpos-1)；//划分左子表
		QuickSort(A,pivotpos+1,high)；//划分右子表
}
\`\`\`
1. 第一次对主表的划分：
	- 第一个元素49作为枢轴，high=49不移动，high=27<49移动
		![|246](A一次元/images/Pasted%20image%2020260519094407.png)
	- low=38<49不移动，low=65>49移动
		![|243](A一次元/images/Pasted%20image%2020260519094455.png)
	- 第一次划分结果：
		![|400](A一次元/images/Pasted%20image%2020260519095317.png)
2. 对左右子表分别进行递归划分



> [快速排序-递归工作栈的过程原理-详解](https://www.bilibili.com/video/BV1b7411N798/?spm_id_from=333.788.player.switch&vd_source=a71201b56b8104dbc40a094df804a731&p=94)
# 三、选择排序
### 简单选择排序
> 在待排序元素中选取最小的加入有序子序列
> - 时间复杂度O(n<sup>2</sup>)，比较次数为n(n-1)/2与序列初始状态无关
> - 空间复杂度O(1)
> - 不稳定（swap）

\`\`\`c
//简单选择排序
void SelectSort(int A[l,int n){
	for(int i=0;i<n-l;i++){		//一共进行n-1趟
		int min=i;				//记录最小元素位置
	for(int j=i+l;j<n;j++)		//在A[i...n-1]中选择最小的元素
		if(A[j]<A[min])min=j;	//更新最小元素位置
		if(min!=i)	swap(A[i],A[min]);
		//swap函数，把最小数放在待排序序列最前
	}
\`\`\`
### 堆排序
> 完全二叉树中，可以方便判断根与左右孩子的关系（ i的左孩子—2i  /右孩子—2i+1  ）所以堆使用顺序存储的完全二叉树
> - 大根堆：根>=左右子树
> - 小根堆：根<=左右子树
> - 时间复杂度：O(nlog<sub>2</sub>n)
> 	- 建立堆O(n)--关键字比较次数<=4n
> 	- 堆的调整O(log<sub>2</sub>n)--关键字下坠调整复杂度不超过O(h)，h=\\[log<sub>2</sub>n]+1
> - 空间复杂度：O(1)
> - 不稳定（swap）
	
1. 堆的建立：遍历所有非终端结点，如果不满足定义则将父结点与子结点交换
\`\`\`c
//建立大根堆
void BuildMaxHeap(int A[],int len){
	for(int i=len/2;i>0;i--)	//从后往前调整所有非终端结点
	HeadAdjust(A,i,len);
}
//将以k为根的子树调整为大根堆 【较小根k不断下坠】
void HeadAdjust(int A[],int k,int len){
	A[0]=A[k];					//A[0]暂存子树的根结点【类似标兵】
	for(int i=2*k;i<=len;i*=2){	//沿key较大的子结点向下筛选
		if(i<len && A[i]<A[i+1])
			i++;				//取key较大的子结点的下标
		if(A[0]>=A[i])	break;	//筛选结束
		else{
			A[k]=A[i];			//将A[i]调整到双亲结点上
			k=i;				//修改k值，以便继续向下筛选
		}
	}
	A[k]=A[0];	//被筛选结点的值放入最终位置
}
\`\`\`
> 元素‘下坠’过程中，关键字比较次数
> - 有两个孩子比较2次，只有一个孩子则比较1次（i\\==len时直接到else⤴）
> - 总次数<=4n


2. 堆排序：每一趟将堆顶元素加入有序子序列
	【将堆顶与最后一个元素互换，然后将其排除在外，重新进行堆的调整】
	最后大根堆-->递增序列
	![|230](A一次元/images/Pasted%20image%2020260528103801.png)![|230](A一次元/images/Pasted%20image%2020260528103949.png)
\`\`\`c
//建立大根堆
void BuildMaxHeap(int A[],int len)

//将以k为根的子树调整为大根堆
void HeadAdjust(int A[],int k,int len)

//堆排序的完整逻辑
void HeapSort(int A[],int len)(
	BuildMaxHeap(A,len);		//初始建堆
	for(int i=len;i>l;i--){		//n-1趟的交换和建堆过程
		swap(A[i],A[1]);		//堆顶元素和堆底元素交换
		HeadAdjust(A,1,i-1);	//把剩余的待排序元素整理成堆
\`\`\`
3. 堆的插入与删除
- 插入：新结点放在表尾，与父结点对比，并不断交换’上升‘
- 删除：待删除结点与表尾元素进行交换，然后将待删除结点排除在外，调整堆，表尾元素‘下坠’
# 四、归并排序 基数排序 计数排序
### 归并排序
> 将序列中每个元素两两归并，再将归并完的子序列两两归并（二路）
>
> - 时间复杂度O(nlog<sub>2</sub>n) 
> 	- 一趟的复杂度O(n)，最多比较n-1次
> 	- 归并树高\\[log<sub>2</sub>n]
>  - 空间复杂度O(n)
>  - 稳定

- 二路归并：两个序列合并为一个
	![|380](A一次元/images/Pasted%20image%2020260531103029.png)
- 归并排序：递归进行二路归并
	![|390](A一次元/images/Pasted%20image%2020260531103411.png)

\`\`\`c
int *B=(int*)malloc(n*sizeof(int))；//辅助数组B

//A[low...mid]和A[mid+...high]各自有序，将两个部分归并
void Merge(int A[],int low,int mid,int high){
	int i,j,k;	
	for(k=low;k<=high;k++)
		B[K]=A[K];				//将A中所有元素复制到B中
	for(i=low,j=mid+1,k=i;i<=mid&&j<=high;k++){
		if(B[i]<=B[j])
			A[K]=B[i++];//将较小值复制到A中
		else
			A[k]=B[j++];
	//将左半或者右半剩余部分放到序列后部
	while(i<=mid)	A[k++]=B[i++];
	while(j<=high)	A[k++]=B[j++];

//递归处理 直到当左右都只剩一个元素时，mergesort不处理，跳到merge进行归并
void MergeSort(int A[],int low,int high){
	if(low<high){
		int mid=(low+high)/2;		//从中间划分
		MergeSort (A,low,mid);		//对左半部分归并排序
		MergeSort(A,mid+1,high)；	//对右半部分归并排序
		Merge(A,low,mid,high);

\`\`\`
### 基数排序
> 不基于比较的排序算法
> - 时间复杂度O(d*(n+r))：
> 	- r表示关键字可能的取值0~9 -->辅助队列Q\\[9]~Q\\[0]
> 	- d表示三位数，需要3趟‘分配’
> 	- n表示总共有n个元素，需要遍历‘收集’
> - 空间复杂度O(r)：辅助队列（链式存储）
> - 稳定

1. 第一趟：让个位相对有序
	![|480](A一次元/images/Pasted%20image%2020260601102414.png)
	![|470](A一次元/images/Pasted%20image%2020260601102506.png)
2. 第二趟：十位相对有序（十位相同的个位依然有序）
	![|420](A一次元/images/Pasted%20image%2020260601102900.png)
	![|460](A一次元/images/Pasted%20image%2020260601102942.png)
3. 第三趟：同上
- 应用：年月日排序
- 关键字取值r较小，元素数量n较大
### \\*计数排序
<u>【不在考纲中，但是排序思想多次出现】</u>
> 整型，元素在0~k-1之间取值
> - 用空间换时间
> - 时间复杂度O(n+k)
> 	- 排序效率与元素取值k有关，k=n
> - 空间复杂度O(n+k)
> - 稳定

待排序数组：
![|246](A一次元/images/Pasted%20image%2020260601105547.png)
1. 创建一个计数数组C\\[k]，表示数i在待排序序列出现的次数
2. 更新数组C\\[i]，统计小于等于i的元素个数【累加法】
	![|470](A一次元/images/Pasted%20image%2020260601105804.png)
3. 对原数组进行排序，存入新数组中，使用C\\[i]-1表示数i的新位置
	A\\[1]=4，C\\[A\\[1]]=8，C\\[4]-1-->7，B\\[C\\[4]]=4
	![|300](A一次元/images/Pasted%20image%2020260601110027.png)

\`\`\`c
//计数排序
void CountSort(int A[], int B[],int n, int k){
	int i,C[k];				//辅助数组c的长度取决于待排F
	for(i=0;i<k;i++)		//初始化计数数组
		C[i]=0;
	for(i=0;i<n;i++)		//1. 遍历待排序数组，统计i出现次数
		C[A[i]]++;
	for(i=l;i<k;i++)		//2. 更新计数数组
		C[i]=C[i]+C[i-1];	//累加法 C[i]保存 小于或等于i元素个数
	for(i=n-l;i>=0;i--){	//3. 利用辅助数组c实现排序
		C[A[i]]=C[A[i]]-1;
		B[C[A[i]]]=A[i]；	//将元素A[i]放在输出数组B[]

\`\`\`
# 五、各种排序算法的比较及应用

# 六、外部排序
### 外部排序
> 外存与内存之间的数据交换
> <u>利用内存中的输入缓冲区作为辅助空间，对外存中的数据进行归并排序</u>
> - 外部排序时间开销 = 读写外存时间+内部排序时间+内部归并时间

![|620](A一次元/images/Pasted%20image%2020260601212600.png)
- 多路归并：增加内存中的缓冲区数量，进行多路归并排序
	- 减少了归并趟数，从而减少磁盘读取次数
- **k路平衡归并**
	1. 最多只能有k个归并段
	2. 每一趟归并中，若有m个归并段参与归并，则经过这一趟处理得到\\[m/k]个新的归并段【平衡性】
		eg:\\[8/4]=2，但是第一趟产生三个归并段，所以不是平衡的⤵
		![|420](A一次元/images/Pasted%20image%2020260601213026.png)
### 败者树
> 增加归并路数k，导致每次都需要从k个归并段中进行k-1次对比
> <u>通过败者树对于数据（归并段）大小的记忆性，减少对比次数</u>

1. 第一轮比赛：构建败者树，得到最小数1——来自**归并段3**
![|630](A一次元/images/Pasted%20image%2020260601213603.png)
2. 第二轮比赛：归并段3的下一个元素，与上一轮的比赛结果进行比较，得到第二轮的最小数2——来自**归并段5**
	![|570](A一次元/images/Pasted%20image%2020260601214155.png)
- 第二轮及以后的比赛都只需要比较3次，即败者树的高：\\[log<sub>2</sub>k]
	- eg:五路败者树，左边比较\\[log<sub>2</sub>5]=3次，右边比较log4=2次
		![|221](A一次元/images/Pasted%20image%2020260601214748.png)
### 置换-选择排序
### 最佳归并树`,Se=`>1. 概述
>2. 应用层
>3. 传输层
>4. 网络层-数据平面/控制平面
>5. 链路层
>6. （物理层）
>7. （无线网络和移动网络）
>8. （网络安全）

期末考点：
1. http ACK计算 状态码 RTT 请求方法 
2. DNS原理 
3. TCP可靠机制原理 
4. TCP与UDP不同 
5. port，IP地址，MAC地址 
6. 流量控制GBN 
7. 拥塞控制 
8. RIP，OSPF 
9. IP地址，子网划分 
10. IP分片/重组 CIDR 汇聚 
11. Router 
12. CRC 
13. CSMA 
14. ARP 
15. DHCP NAT 
# 第一章 概述
### 网络的组成
>硬件，软件，协议
- *边缘部分⬇*
1. **端系统**: 
    - 主机host，也称为端系统end systems
    - 在网络边缘运行软件，通过ISP（服务商）接入互联网
- *核心部分⬇*
2. **分组交换机**: 转发数据包（数据块）
    - <u>路由器Router</u>
    - <u>链路层交换机</u>
3. **通信链路**
    - 光纤、铜缆、无线电、卫星
    - 传输速率：带宽 = 
### 网络的分层
1. OSI参考模型：应用层 = 应用、表示、会话
2. TCP/IP模型： <u>网络接口层</u> = 数据链路层 + 物理层
3. 五层模型
> **NOTE** 根据因特网协议栈：
> 1. 应用层：HTTP（web文档），SMTP（邮件），FTP（文件）DNS（域名）DHCP（动态分配）
> 2. 运输层（报文）：TCP（连接），UDP（无连接）
> 3. 网络层（分组）：IP
> 4. 链路层（帧frame）：以太网，WiFi
> 5. 物理层（bit流）

 >封装：一个应用层报文在传输时，**运输层、网络层、链路层**依次给数据增加首部信息，逐步构成**运输层报文段、网络层报文分组（包）、链路层帧**，分别对应**报文交换，分组交换，电路交换**
 
 数据封装的过程（SDU+PCI ->下一层的PDU）![Pasted image 20260108222628.png](/personal-blog/images/obsidian/Pasted-image-20260108222628.png)
### 三种交换方式
- **电路交换**：端到端，传输效率高；但建立连接开销大，灵活性差，不支持差错控制
- **报文交换**（message）：数据以报文为单位在交换机上存储转发，通信线路可以灵活分配；但报文长度不定，不方便管理，存储转发开销大
- **分组交换**（packet）：将报文定长分为多个分组，每个分组有首部信息（header）；但首部占用少量存储，分组容易失序，丢失
	![Pasted image 20260104232701.png](/personal-blog/images/obsidian/Pasted-image-20260104232701.png)
- 【虚电路交换：基于分组交换，建立虚拟电路，通信后释放连接，可以保证分组可靠；但现代计算机性能强大，可以在端系统上处理丢包问题】
![Pasted image 20260104232500.png](/personal-blog/images/obsidian/Pasted-image-20260104232500.png)
### 性能分析
>信道（Channel）：表示一个方向上信息的通道，有发送信道和接收信道
>
1. 速率（bps）：比特率、数据传输速率
2. 带宽（Mbps）：
	- 频带宽度Hz * 最高速率bit/s；
	- 数据量 / 时间；某信道允许通过的<u>最高数据率</u>
（*带宽（Hz）*：表示频分复用FDM中信道频率的范围）
3. 吞吐量（MB/s）：单位时间内通过的<u>实际数据量</u>
4. 时延：数据（报文、分组、bit）端到端传输的时间
	1. 传输时延（发送时延）：
		数据长度为L *bit*，传输速率为R *bit/s*，通信链路条数为N
$$
t_{\\text{trans}}=N\\frac{L}{R}
$$
	2. 处理时延：主机和路由器处理分组的时间
	3. 排队时延：很小
	4. 传播时延：很小 电线长度 / 电磁波速度
5. 时延带宽积：传播时延 x 带宽；已经发出但未到达的比特
6. 往返时延RTT：表示发送完后，发送方接收到<u>确认</u>的时间
	![Pasted image 20260108195834.png](/personal-blog/images/obsidian/Pasted-image-20260108195834.png)
7. 信道利用率：有数据通过的时间 / 总时间
	- 太高会浪费资源
	- 太低会堵塞

### 分类与历史：
- 按范围分：广域网WAN，MAN，局域网LAN（<u>以太网技术</u>），PAN
- 按技术分：广播式，点对点
- 按拓扑结构分：总线型（集线器)，环形(令牌），星型（局域网单交换机），网状（广域网多路由器）
- 按介质分：有线，无线
- ARPAnet->Internet
### 端口：
HTTP：80
DNS：53
FTP：21/20
SMTP：25
pop3：110
DHCP服务器：67；客户端：68

# 第二章 应用层
## 2.1 应用层协议原理
### 网络应用程序体系结构
1. CS架构
2. P2P架构：端到端连接
### 进程通信
进程通信：**进程**通过网络交换**报文**，进程与网络的接口是套接字Socket
进程寻址：主机地址IP，目的主机接受进程的目的端口号port
![image-20221208205802541.png](/personal-blog/images/obsidian/image-20221208205802541.png)
### 运输协议服务
应用程序运输服务要求：可靠数据传输，吞吐量，低延时，安全（加密、数据完整性）

TCP服务：
- **面向连接**的服务：报文开始流动之前，TCP让客户和服务器互相交换运输层控制信息（三次握手），握手阶段后，一条TCP连接就在两条进程的套接字之间建立；
- 可靠的数据传送服务：无差别、按适当顺序交付所有发送的数据；
- **拥塞控制机制**（congestion control）
- 安全套接字层**SSL**：提供了进程到进程的安全性服务->https

UDP服务：
- 提供一种不可靠数据传送服务
- 用到UDP的协议：DNS，SNMP，DHCP

### 网络应用
Web、电子邮件、流式视频、P2P
### 应用层协议
定义了运行在不同端系统上的应用程序进程如何相互传递报文。HTTP，DHCP

## 2.2 Web和HTTP
### HTTP
>**Web的应用层协议**是超文本传输协议HTTP，它是Web的核心
- Web页面是由对象组成。一个对象（object）只是一个文件，诸如一个HTML文件、一个JPEG图片、一个Java小程序等等；
- 多数Web页面包含HTML基本文件以及几个引用对象；
- **Web浏览器（Web browser）** 实现了HTTP的客户端；**Web服务器（Web server）** 实现了HTTP的服务器端；
- HTTP使用**TCP**作为它的支撑运输协议；
- 因为HTTP服务器并不保存关于客户的任何信息，所以我们会说HTTP是一个**无状态协议**；
- HTTP1.1支持持久lm j连接

非持续/持续连接:TCP开启，一个/多个对象通过连接发送，TCP关闭
![image-20221208223457565.png](/personal-blog/images/obsidian/image-20221208223457565.png)
往返时间RTT：指一个短分组从客户到服务器然后在返回客户所需要的时间；

### HTTP报文
- 请求报文：请求行=方法（GET，POST）+URL+HTTP版本； 首部行
	- 首部行：提供首部字段，如HOST：xxx；cookie：xxx
- 响应报文：初始状态行=协议版本+状态码+状态信息；首部行；实体行
	- \`200 OK\`：请求成功；
	- \`301 Moved Permanently\`：请求对象以及被永久转移；
	- \`400 Bad Request\`：一个通用差错代码，该请求不能被服务器理解；
	- \`404 Not Found\`：被请求的文档不在服务器上；
	- \`505 HTTP Version Not Support\`：服务器不支持请求报文使用的HTTP协议版本；

### cookie：用户与服务器的交互
- HTTP响应报文的cookie首部行；
- HTTP请求报文的cookie首部行；
- 用户端系统中保留一个cookie文行；
- 位于Web站点的一个后端数据库；
![image-20221208231952595.png](/personal-blog/images/obsidian/image-20221208231952595.png)
### Web缓存（代理服务器）
> 把最近的请求/响应保存，客户访问时先请求代理

请求过程：
1. 浏览器创建一个到Web缓存器的TCP连接，并向Web缓存器中的对象发送一个HTTP请求；
2. Web缓存器进行检查，看看本地是否存储该对象副本。如果有，Web缓存器向客户返回该对象；
3. 如果缓存器中没有该对象，它就打开一个与该对象的初始服务器的TCP连接。Web缓存器向初始服务器发送请求，并得到初始服务器的响应；
4. 当Web缓存器接受对象后，在本地创建给对象的副本，并向客户发送响应报文返回该对象
## 2.3 邮件传输协议SMTP
>电子邮件：用户代理+邮件服务器+SMTP协议
- HTTP主要是一个**拉协议（pull protocol）**，TCP连接是由想接受文件的机器发起的；SMTP是一个**推协议（push protocol）**，TCP连接是由发送文件的机器发起；
## 2.4 域名系统DNS
>域名系统：**主机名**到**IP地址**转换的目录服务
>DNS既代表一个DNS服务器实现的数据库，也代表一个应用层协议
### 分布式，层次数据库
- DNS缓存
![image-20230206160128655.png](/personal-blog/images/obsidian/image-20230206160128655.png)
- 根DNS服务器
- 顶级域服务器TLD
- 权威DNS服务器
- 本地DNS服务器
### 查询方式
1. 递归查询：从请求主机到本地的DNS服务器的查询是**递归**的
2. 迭代查询：向根服务器查询
主机->本地DNS服务器->根服务器 ——>顶级域->权威->本地

## 2.5 P2P文件分发
- P2P
- Bittorent
## 2.6 视频流与内容分发网CDN

## 2.7 套接字Socket编程

# 第三章 运输层
## 3.1 概述
>因特网提供两种不同的运输层协议。**UDP**，为调用它的应用程序提供了一种不可靠、无连接的服务；**TCP**，为调用它的应用程序提供了一种可靠的、面向连接的服务。

因特网网络层协议有一个协议叫IP，即网际协议，IP的服务模型是**尽力而为交付服务**，同时IP被称为**不可靠服务**。

UDP和TCP最基本的责任是，将 两个端系统间IP的交付服务 扩展为 运行在**端系统**上的两个**进程**之间的交付服务，即多路复用与多路分解

## 3.2 多路复用与多路分解
>一个进程有一个或多个套接字（socket）
- 多路分解（Demultiplexing）：在接收端，运输层检查这些字段，标识出接收**套接字**，进而将报文段定向到该套接字，即将运输层报文段的数据**交付**到正确的套接字的工作
- 多路复用（Multiplexing）：在源主机从不同套接字中收集数据块，并为每个数据块**封装**上首部信息从而生成报文段，然后将报文传递到网络层
### 端口
端口号是一个16比特的数
UDP socket：二元组表示👉(源端口， 目的端口)
TCP的socket：四元组表示👉(源IP地址， 源端口号， 目的IP地址， 目的端口号)
## 3.3 UDP：无连接运输
### UDP报文结构
1. 首部（8B）：

| 2   | 2    | 2   | 2   |
| --- | ---- | --- | --- |
| 源端口 | 目的端口 | 长度  | 检验和 |
2.  数据
### UDP检验和
>2B = 16bit
>溢出位会回卷，加到最低位

![image-20230208143928024.png](/personal-blog/images/obsidian/image-20230208143928024.png)
接收方和应是全1，如果出现0则认为该分组错误
## 3.4 TCP：面向连接的运输
### 特征
- **面向连接**：相互发送预备报文段，以建立确保数据传输的参数；
- **全双工服务**：如果一台主机上的进程A与另一台主机上的进程B存在一条TCP连接，那么应用层数据就可以在从进程B流向进程A的同时，也从进程A流向进程B；
- **点对点**：即在单个发送方与单个接收方之间的连接；
- **三次握手**：\\[SYN]，\\[ACK,SYN]，\\[ACK]
- **四次挥手**：\\[FIN]，\\[ACK]，\\[FIN，ACK]，\\[ACK]
### 可靠数据传输原理
1. 可靠数据传输协议rdt1.0
2. 停止等待协议rdt2.0：纠正比特差错
		**自动重传请求协议ARQ**
	- **差错检测**：发送方发送检验和
	- **接收方反馈**：肯定确认ACK与否定确认NAK
	- **重传**：收到有差错的分组时，发送方将重传该分组文
	- rdt2.1：冗余ACK分组，防止ACK与NAK受损
3. 比特交替协议rdt3.0：计时器，解决丢包问题
4. 流水可靠数据传输协议
- 流水线差错恢复方法：GBN，SR
- **利用率** = 
	$$
	U_{sender}=\\frac{L/R}{RTT+L/R}	$$

- 停止等待 vs 流水线：
![image-20230212213158363.png](/personal-blog/images/obsidian/image-20230212213158363.png)
### 回退N步：GBN协议
>滑动窗口协议

窗口长度N，序号范围 = \\[0，N-1]
### 选择重传：SR协议
### TCP报文结构
首部（固定20B + 4\\*n B可变）（宽度32bit）
1. 源端口 | 目的端口
2. **序号**：标识本报文
3. **确认号**：期望收到下一个报文段的序号
4. 首部长度（以32bit为单位）| 保留 | ...... | 接受窗口
5. 检验和 | 紧急指针
6. 可选字段option
![image-20230213141152970.png](/personal-blog/images/obsidian/image-20230213141152970.png)
### 可靠数据运输
1. 以字节为单位的**滑动窗口**
	- 发送缓存
	- 接受缓存
	![image-20230213140246196.png](/personal-blog/images/obsidian/image-20230213140246196.png)
2. 超时重传/**快速重传**
3. **选择确认** SACK：仅重传漏传的数据
### 往返时间的估计
- 加权平均往返时间：
$$
EstimatedRTT=(1-\\alpha)\\times EstimatedRTT+\\alpha\\times SampleRTT
$$
- RTT偏差值：（用于估计SampleRTT偏RTT<sub>E
</sub>的程度）
$$
DevRTT=(1-\\beta)\\times DevRTT+\\beta\\times |SampleRTT-EstimatedRTT|
$$
- 重传时间：
$$
TimeoutInterval = EstimatedRTT + 4\\times DevRTT
$$
### TCP流量控制
>TCP是全双工通信，在连接两端的发送方都各自维护一个接收窗口

控制发送速率，使得接受窗口rwnd = 接受缓存 - 已接受KB
![image-20230214112628843.png](/personal-blog/images/obsidian/image-20230214112628843.png)
## 3.5 TCP拥塞控制
发送窗口 = min（接受窗口rwnd，拥塞窗口cwnd）
cwnd=1：可以发大小为1个MSS的包
拥塞判断：
1. 重传超时——**超时重传** sshresh = cwnd/2，cwnd = 1
2. 收到3个ACK——**快速重传** ssthresh = cwnd = cwnd/2
- **慢启动**
- **拥塞避免**
- **快速恢复**
![IMG_2270.jpg](/personal-blog/images/obsidian/IMG_2270.jpg)
# 第四章 网络层
## 4.1 概述
### 转发和路由选择
- 转发（数据平面）
- 路由选择Routing（控制平面）
- SDN方法（软件定义网络）：从路由器物理上分离的另一种方法，远程控制器计算和分发转发表以供每台路由器所使用
### 网络服务模型
>尽力尽为服务：传送的分组既不能保证以它们发送顺序接收，也不能保证它们最终交付；既不能保证端到端时延，也不能保证最小的带宽。

分组交换机：
- **链路层交换机**：基于链路层帧中的字段值，属于链路层
- **路由器（router）**：基于网络层数据报中的首部字段值做出转发决定，路由器是网络层设备

## 4.2 网际协议IP
### IPv4编址
- 点分十进制记法：192.168.0.1（总长32bit，每个十进制数最大255）
- **接口**
![image-20230215223524888.png](/personal-blog/images/obsidian/image-20230215223524888.png)
- **子网划分**

- **子网掩码**：
![image-20230215224605590.png](/personal-blog/images/obsidian/image-20230215224605590.png)
### 无分类编址CIDR
>Internet的地址分配策略
### 远程动态主机配置协议DHCP
>给某个主机分配一个临时的IP地址

![image-20230215231917425.png](/personal-blog/images/obsidian/image-20230215231917425.png)
### 网络地址转换NAT
>本地网络中的所有设备只共享一个IPv4地址。

使用NAT路由器上的NAT转换表，表项中有IP地址与端口号，

NAT转换过程：

![image-20230215233757896.png](/personal-blog/images/obsidian/image-20230215233757896.png)

### IPv4数据报文格式
![image-20230215164825113.png](/personal-blog/images/obsidian/image-20230215164825113.png)
 版本号：规定了数据报的IP协议版本；
- 首部长度：在无选项首部时，IP具有==**20字节**==的首部；
- 服务类型：不同类型的数据报可以相互区分；
- 数据报长度：IP数据报的总长度（首部加上数据），以字节计数；
- 标识、标志、片漂移（Fragmentation offset）：用于IP分片；
- 寿命：确保数据段不会永远在网络中循环；
- 上层协议：指示IP数据报应交付给哪个运输层协议；
- 首部检验和
- 源IP地址和目的IP地址
- 选项：允许IP首部被扩展；
- 数据：运输层报文段；
### IPv6报文格式
![image-20230215234715846.png](/personal-blog/images/obsidian/image-20230215234715846.png)
- 删掉分片/重新组装；
- 取消首部检验和；
- 将变长选项字段由下一个首部指出；

v4迁移到v6：建隧道
## 4.3 IP相关协议
### ARP地址解析协议
>跨网络层和链路层的协议，实现IP地址与MAC地址（物理地址、LAN地址）的转换
>**广播请求，单播回复**
### ICMP因特网控制报文协议
>如ping、tracert指令
### IGMP网际组管理协议
## 4.4 路由选择算法
>自治系统AS
>自治系统之间ISP

- Dijkstra算法
- **LS算法**（链路状态广播）：全局，路由振荡
- **DV算法**（距离向量）：分布式，基于Dijkstra，如**RIP**

比较：LS更加复杂，健壮，并且快

### 内部网关协议：RIP
>DV 

### AS内部的路由选择：OSPF
>IP内封装，LS 开放最短路优先协议

### ISP的路由选择：BGP
>TCP内封装，边界网关协议

从邻居AS获得前缀的可达性信息，并确认到达该前缀最好的路由

- eBGP：外部BGP
- iBGP：内部BGP

### 热土豆路由选择
确定最好路由，
### IP任播
1. 在许多分散的不同地理位置，替换不同服务器上的相同内容；
2. 让每个用户从最靠近的服务器访问内容；
## 4.5 SDN体系
- 基于流的转发
- 数据平面与控制平面分离
- 网络控制功能
- 可编程网络
## 4.6 简单网络管理协议SNMP

# 第五章 链路层
## 5.1 概述
>数据链路层使用物理层提供的”比特传输“服务，将网络层的IP数据报分装成帧

- 物理链路：传输介质+物理层
- 逻辑链路：抽象的数据链路

功能：
1. 封装（**组帧**）：帧定界，透明传输
2. 差错控制：奇偶校验码，CRC校验码，海明校验码
3. 可靠传输：帧的丢失/重复/失序
4. 流量控制
5. 介质访问控制：广播-需要 / 点对点信道-不需要
## 5.2 循环冗余检测==CRC==
![Pasted image 20260108223541.png](/personal-blog/images/obsidian/Pasted-image-20260108223541.png)
模2除（相当于异或）直至与最后3位对齐，得到校验位001（R=3位）

## 5.3 多路访问协议
网络链路类型：
- 点对点链路
- 广播链路

多路访问协议类型：
### 1. 信道划分协议（移动通信）
- 时分多路复用TDM
- 频分多路复用FDM
- 码分多址**CDMA**
### 2. 随机接入协议（以太网）
- 时隙ALOHA
- ALOHA
- 载波帧听多路访问**CSMA**（carrier sensing Multiple Access）
碰撞检测**CSMA/CD**
碰撞避免**CSMA/CA**
### 3. 轮流协议（蓝牙）

## 5.4 交换局域网
### 地址解析协议ARP
>MAC地址（LAN、物理地址）
>局域网每个接口都有一个IP和一个MAC地址，也有一个对应的ARP模块和适配器

***ARP工作原理***：
A向B发送数据报，A先在其ARP高速缓冲中查找B的IP地址。
若是找到，则查出对应的硬件地址，把这个硬件地址写入MAC帧，通过局域网把该MAC帧发往此硬件地址。
若是没有找到B，A自动运行ARP，按以下步骤找出B的硬件地址：
1. 在本局域网上广播发送一个**ARP请求分组**，包含自己的IP地址和硬件地址，和B的IP地址。
2. 在本局域网上的所有主机运行的ARP进程都收到此ARP请求分组。
3. 主机B的IP地址与查询的一致时，收下这个请求分组，并向A发送**ARP响应分组**。
4. 主机A收到B的相应分组，在其ARP缓存中写入B的IP地址到硬件地址的映射。
为了减少网络通信量，B收到ARP请求分组时，把A的这一地址映射写入自己的ARP高速缓存中，下次B向A发送数据报就很方便了。
### 以太网Ethernet
以太网帧结构：

| 前同步码 | 目的地址 | 源地址 | 类型  | 数据  | CRC |
| ---- | ---- | --- | --- | --- | --- |
| 8字节  | 6    | 6   | 2   |     | 4   |
以太网最大传输单元**MTU = 1500B**
### 链路层交换机
转发和过滤
自学习
### 虚拟局域网VLAN
# 第六章 物理层
## 6.1 通信基础
- 信源：信号发送方
- 信宿：信号接收方
- 信道：通道
- 码元：每一个信号对应的二进制单位，如四进制码元00/01/10/11
- 波特率Baud：码元 / 秒，1码元=log<sub>2</sub> 比特

**奈氏定理**：信道无噪声，极限波特率=2 x 带宽（Hz）
**香农定理**：有噪声，极限比特率=带宽 x log<sub>2</sub> （1+S/N）
- 信噪比S/N = 100000 = 50 分贝（db）【10log<sub>10</sub>】

**编码方法**
- 不归零编码（NRZ)
- 归零编码(RZ）
- 反向非归零编码（NRZI)
- 曼彻斯特编码
- 差分曼彻斯特编码

**调制方法**
- 调幅（AM)
- 调频(FM)
- 调相（PM)
- 正交幅度调制(QAM)

## 6.2 传输介质
![Pasted image 20260108221506.png](/personal-blog/images/obsidian/Pasted-image-20260108221506.png)
## 6.3 物理层设备
![Pasted image 20260108221738.png](/personal-blog/images/obsidian/Pasted-image-20260108221738.png)`;function _(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var v=_();function y(e){v=e}var b={exec:()=>null};function x(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(S.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var Ce=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),S={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,`i`),blockquoteBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}>`)},we=/^(?:[ \t]*(?:\n|$))+/,Te=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Ee=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,C=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,De=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,w=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,T=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,E=x(T).replace(/bull/g,w).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),Oe=x(T).replace(/bull/g,w).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),D=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,ke=/^[^\n]+/,O=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Ae=x(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,O).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),je=x(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,w).getRegex(),k=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,A=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Me=x(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,A).replace(`tag`,k).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),j=x(D).replace(`hr`,C).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,k).getRegex(),M={blockquote:x(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,j).getRegex(),code:Te,def:Ae,fences:Ee,heading:De,hr:C,html:Me,lheading:E,list:je,newline:we,paragraph:j,table:b,text:ke},N=x(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,C).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,k).getRegex(),Ne={...M,lheading:Oe,table:N,paragraph:x(D).replace(`hr`,C).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,N).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,k).getRegex()},Pe={...M,html:x(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,A).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:b,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:x(D).replace(`hr`,C).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,E).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},Fe=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Ie=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,P=/^( {2,}|\\)\n(?!\s*$)/,Le=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,F=/[\p{P}\p{S}]/u,I=/[\s\p{P}\p{S}]/u,L=/[^\s\p{P}\p{S}]/u,Re=x(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,I).getRegex(),ze=/(?!~)[\p{P}\p{S}]/u,Be=/(?!~)[\s\p{P}\p{S}]/u,Ve=/(?:[^\s\p{P}\p{S}]|~)/u,He=x(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,Ce?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),Ue=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,We=x(Ue,`u`).replace(/punct/g,F).getRegex(),Ge=x(Ue,`u`).replace(/punct/g,ze).getRegex(),Ke=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,qe=x(Ke,`gu`).replace(/notPunctSpace/g,L).replace(/punctSpace/g,I).replace(/punct/g,F).getRegex(),Je=x(Ke,`gu`).replace(/notPunctSpace/g,Ve).replace(/punctSpace/g,Be).replace(/punct/g,ze).getRegex(),Ye=x(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,L).replace(/punctSpace/g,I).replace(/punct/g,F).getRegex(),Xe=x(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,F).getRegex(),Ze=x(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,L).replace(/punctSpace/g,I).replace(/punct/g,F).getRegex(),Qe=x(/\\(punct)/,`gu`).replace(/punct/g,F).getRegex(),$e=x(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),et=x(A).replace(`(?:-->|$)`,`-->`).getRegex(),tt=x(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,et).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),R=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,nt=x(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,R).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),rt=x(/^!?\[(label)\]\[(ref)\]/).replace(`label`,R).replace(`ref`,O).getRegex(),it=x(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,O).getRegex(),at=x(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,rt).replace(`nolink`,it).getRegex(),ot=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,z={_backpedal:b,anyPunctuation:Qe,autolink:$e,blockSkip:He,br:P,code:Ie,del:b,delLDelim:b,delRDelim:b,emStrongLDelim:We,emStrongRDelimAst:qe,emStrongRDelimUnd:Ye,escape:Fe,link:nt,nolink:it,punctuation:Re,reflink:rt,reflinkSearch:at,tag:tt,text:Le,url:b},st={...z,link:x(/^!?\[(label)\]\((.*?)\)/).replace(`label`,R).getRegex(),reflink:x(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,R).getRegex()},B={...z,emStrongRDelimAst:Je,emStrongLDelim:Ge,delLDelim:Xe,delRDelim:Ze,url:x(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,ot).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:x(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,ot).getRegex()},ct={...B,br:x(P).replace(`{2,}`,`*`).getRegex(),text:x(B.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},V={normal:M,gfm:Ne,pedantic:Pe},H={normal:z,gfm:B,breaks:ct,pedantic:st},lt={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},ut=e=>lt[e];function U(e,t){if(t){if(S.escapeTest.test(e))return e.replace(S.escapeReplace,ut)}else if(S.escapeTestNoEncode.test(e))return e.replace(S.escapeReplaceNoEncode,ut);return e}function dt(e){try{e=encodeURI(e).replace(S.percentDecode,`%`)}catch{return null}return e}function ft(e,t){let n=e.replace(S.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(S.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(S.slashPipe,`|`);return n}function W(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function G(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&S.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function pt(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function mt(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function ht(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`);r.state.inLink=!0;let c={type:e[0].charAt(0)===`!`?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function gt(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return r.length>=i.length?e.slice(i.length):e}).join(`
`)}var K=class{options;rules;lexer;constructor(e){this.options=e||v}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:G(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=gt(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=W(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:W(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:W(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=W(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o;for(o=0;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`)break;if(u?.type===`blockquote`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.blockquote(a);i[i.length-1]=o,n=n.substring(0,n.length-t.raw.length)+o.raw,r=r.substring(0,r.length-t.text.length)+o.text;break}else if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=mt(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items){this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]);let t=e.tokens[0];if(e.task&&(t?.type===`text`||t?.type===`paragraph`)){e.text=e.text.replace(this.rules.other.listReplaceTask,``),t.raw=t.raw.replace(this.rules.other.listReplaceTask,``),t.text=t.text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}let n=this.rules.other.listTaskCheckbox.exec(e.raw);if(n){let t={type:`checkbox`,raw:n[0]+` `,checked:n[0]!==`[ ]`};e.checked=t.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:`paragraph`,raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&=!1;if(!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=G(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:W(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=ft(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:W(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(ft(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:W(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=W(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=pt(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),ht(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return ht(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=0,c=r[0][0]===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+n);(r=c.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=[...i].length,r[3]||r[4]){o+=a;continue}else if((r[5]||r[6])&&n%3&&!((n+a)%3)){s+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+s);let t=[...r[0]][0].length,c=e.slice(0,n+r.index+t+a);if(Math.min(n,a)%2){let e=c.slice(1,-1);return{type:`em`,raw:c,text:e,tokens:this.lexer.inlineTokens(e)}}let l=c.slice(2,-2);return{type:`strong`,raw:c,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},q=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||v,this.options.tokenizer=this.options.tokenizer||new K,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:S,block:V.normal,inline:H.normal};this.options.pedantic?(t.block=V.pedantic,t.inline=H.pedantic):this.options.gfm&&(t.block=V.gfm,this.options.breaks?t.inline=H.breaks:t.inline=H.gfm),this.tokenizer.rules=t}static get rules(){return{block:V,inline:H}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(S.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(S.tabCharGlobal,`    `).replace(S.spaceLine,``));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(n=>(i=n.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let n=t.at(-1);i.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let a=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(a=e.substring(0,t+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let r=t.at(-1);n&&r?.type===`paragraph`?(r.raw+=(r.raw.endsWith(`
`)?``:`
`)+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):t.push(i),n=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e,r=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(n))!==null;)e.includes(r[0].slice(r[0].lastIndexOf(`[`)+1,-1))&&(n=n.slice(0,r.index)+`[`+`a`.repeat(r[0].length-2)+`]`+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(n))!==null;)n=n.slice(0,r.index)+`++`+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(n))!==null;)i=r[2]?r[2].length:0,n=n.slice(0,r.index+i)+`[`+`a`.repeat(r[0].length-i-2)+`]`+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let a=!1,o=``,s=1/0;for(;e;){if(e.length<s)s=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}a||(o=``),a=!1;let r;if(this.options.extensions?.inline?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length);let n=t.at(-1);r.type===`text`&&n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(i)){e=e.substring(r.raw.length),r.raw.slice(-1)!==`_`&&(o=r.raw.slice(-1)),a=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},J=class{options;parser;constructor(e){this.options=e||v}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(S.notSpaceStart)?.[0],i=e.replace(S.endingNewline,``)+`
`;return r?`<pre><code class="language-`+U(r)+`">`+(n?i:U(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:U(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${U(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=dt(e);if(i===null)return r;e=i;let a=`<a href="`+e+`"`;return t&&(a+=` title="`+U(t)+`"`),a+=`>`+r+`</a>`,a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=dt(e);if(i===null)return U(n);e=i;let a=`<img src="${e}" alt="${U(n)}"`;return t&&(a+=` title="${U(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:U(e.text)}},Y=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},X=class e{options;renderer;textRenderer;constructor(e){this.options=e||v,this.options.renderer=this.options.renderer||new J,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Y}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},Z=class{options;block;constructor(e){this.options=e||v}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?q.lex:q.lexInline}provideParser(e=this.block){return e?X.parse:X.parseInline}},Q=new class{defaults=_();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=X;Renderer=J;TextRenderer=Y;Lexer=q;Tokenizer=K;Hooks=Z;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new J(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new K(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new Z;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];Z.passThroughHooks.has(n)?t[r]=e=>{if(this.defaults.async&&Z.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:t[r]=(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return q.lex(e,t??this.defaults)}parser(e,t){return X.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?q.lex:q.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?X.parse:X.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?q.lex:q.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?X.parse:X.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+U(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function $(e,t){return Q.parse(e,t)}$.options=$.setOptions=function(e){return Q.setOptions(e),$.defaults=Q.defaults,y($.defaults),$},$.getDefaults=_,$.defaults=v,$.use=function(...e){return Q.use(...e),$.defaults=Q.defaults,y($.defaults),$},$.walkTokens=function(e,t){return Q.walkTokens(e,t)},$.parseInline=Q.parseInline,$.Parser=X,$.parser=X.parse,$.Renderer=J,$.TextRenderer=Y,$.Lexer=q,$.lexer=q.lex,$.Tokenizer=K,$.Hooks=Z,$.parse=$,$.options,$.setOptions,$.use,$.walkTokens,$.parseInline,X.parse,q.lex,$.setOptions({breaks:!0,gfm:!0});function _t(e){let t=a([]),n=a(!0),i=a(null),o=a(``);function s(e){let t=/<h([23])[^>]*id="([^"]*)"[^>]*>(.*?)<\/h[23]>/g,n=[],r;for(;(r=t.exec(e))!==null;){let e=parseInt(r[1]),t=r[2],i=r[3].replace(/<[^>]*>/g,``);e===2?n.push({id:t,label:i,children:[]}):e===3&&n.length>0&&n[n.length-1].children.push({id:t,label:i})}return n}function c(){try{let n=Object.assign({"/src/content/cs-notes/数据结构/数据结构-408.md":me,"/src/content/cs-notes/数据结构/第1章 绪论.md":g,"/src/content/cs-notes/数据结构/第2章 线性表.md":he,"/src/content/cs-notes/数据结构/第3章 栈、队列、数组.md":ge,"/src/content/cs-notes/数据结构/第4章 串.md":_e,"/src/content/cs-notes/数据结构/第5章 树与二叉树.md":ve,"/src/content/cs-notes/数据结构/第6章 图.md":ye,"/src/content/cs-notes/数据结构/第7章 查找.md":be,"/src/content/cs-notes/数据结构/第8章 排序.md":xe,"/src/content/cs-notes/计算机网络/计算机网络-期末.md":Se}),r=e.replace(/\/\*$/,``),i=[];for(let[e,t]of Object.entries(n)){if(!e.startsWith(r))continue;let n=e.replace(r,``).replace(/^\//,``).split(`/`),a=n.pop().replace(`.md`,``),o=n.length>0?n.join(`/`):``,c=t.replace(/==(.+?)==/g,`<mark>$1</mark>`),l=$.parse(c);i.push({id:e,title:a,category:o,html:l,toc:s(l)})}t.value=i.sort((e,t)=>e.category===t.category?e.title.localeCompare(t.title):e.category.localeCompare(t.category))}catch(e){console.error(`Failed to load markdown files:`,e)}n.value=!1}c();let l=r(()=>t.value.find(e=>e.id===i.value)||t.value[0]),u=r(()=>l.value?.toc||[]),d=r(()=>{let e=new Map;for(let t of f.value){let n=t.category||`未分类`;e.has(n)||e.set(n,[]),e.get(n).push(t)}return[...e.entries()].sort((e,t)=>e[0]===`未分类`?1:t[0]===`未分类`?-1:e[0].localeCompare(t[0]))}),f=r(()=>{let e=o.value.trim().toLowerCase();return e?t.value.filter(t=>t.title.toLowerCase().includes(e)):t.value});function p(e){i.value=e}return{posts:t,loading:n,activePost:l,tocItems:u,categories:d,searchQuery:o,filteredPosts:f,selectPost:p}}export{h as n,_t as t};