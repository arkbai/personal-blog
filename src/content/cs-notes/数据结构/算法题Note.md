### 1. 双指针法
> 对于数组，经常使用**不同步**的双指针来创建新数组
> 对于链表，经常使用**同步**的双指针来寻找结点

```c
// 删除顺序表L中所有值为x的元素
void del(SqList &L,ElemType x){
	int k=0,i;
	for(i=0;i<L.lenght;i++){ //i遍历
		if(L.data[i]!=x){
			L.data[k]=L.data[i];	//i与k不同步
			k++;
		}
	}
	L.length=k	//更新表长
}
/*
	1,2,x,4,5,6,x
	i持续向后搜索
	当i搜索到x时，k不增加，等搜索到4时，再执行L[2]=L[3]，把x替换成4
*/
```
> - 类似于插入排序，在数组前面部分放已经排好的元素
> - 存在表长length时，删除元素后，注意修改表长L.length
```c
// 从**有序表**删除值重复的元素
bool delete_same(SeqList &L){
	if(Length==0)return false
	int i,j;
	for(i=0,j=1;j<L.length;j++) //j遍历
		if(L.data[i]!=L.data[j])
			L.data[++i]=L.data[j];	//i与j不同步
	L.length=i+1;
	return true;
}

// 从**无序表**删除相同元素——使用散列表
```

```c
// 找链表倒数k个结点
/* 
	令q与p间隔k遍历，p到达尾巴时，q即是所求结点
*/
```
```c
// 两个链表共享结尾部分空间，即从公共结点a开始后续所有结点共用，求结点a位置
LNode* find(LNode *L1,*L2){
	int m,n;
	LNode *p,*q;
	m=ListLen(L1);		//遍历求链表长度
	n=ListLen(L2);
	for(p=L1;m>n;n--){	//for语句兼顾判断m与n大小
		p=p->next;
	}
	for(q=L2;m<n;m--){
		q=q->next;
	}
	//此时q与p后的剩余结点数量相同，只需一个尾结点判断即可
	while(p->next!=NULL && p->next!=q->next){	
		p=p->next;
		q=q->next;
	}
	return p->next;
}
/*
	1.求链表长度差k
	2.双指针间隔k遍历，当指针1->next==指针2->next时表示找到公共结点
*/
```
> 由于题目为共享‘空间’，直接判断结点是否为同一个即可，不必判断值
### 2. 数组的逆置

```c
// 将A[m+n]的前m项顺序表与后n项顺序表互换位置

void Reverse(int A[],int left,int right,int Size){	//逆置算法
	if(left>=right||right>=Size) return;	//Size仅用来检查数据异常
	int mid = (left+right)/2	//找到中间位置
	for(int i;i<=mid-left;i++)	//最左与最右元素交换
		int temp = A[left+i];
		A[left+i]=A[right-i];
		A[right-i]=temp;	
}
void Exchange(int A[],int m,int n,int Size){	//交换主函数
	Reverse(A,0,m+n-1,Size);
	Reverse(A,0,n-1,Size);		//前n项
	Reverse(A,n,m+n-1,Size);	//后m项
}

/*
	原数组->{ A[0]~A[m-1] | A[m]~A[m+n+1] }
	先整体逆置->A[m+n+1],A[m+n]...A[m] | A[m-1],A[m-2]...A[0]
	再分部逆置->A[m]...A[m+n],A[m+n+1] | A[0]...A[m-2],A[m-1]
	利用逆置算法，完成了保序互换
*/

```
> 普通思路：新建一个数组一个一个移动位置，时空间复杂度都为O(n)，不如两次逆置算法--时O(n)空O(1)

### 3. 递归
```c
// 斐波那契数列求解 
// 递归 时O(2^n)空O(n)
def fib_rec()
	if n<=1:
		return n;
	return fib_rec(n-1)+fib_rec(n-2)
// 非递归 时O(n)空O(1)
def fib_iter(n):
	a,b=0,1;
	for i in range(1,n)
		a,b=b,a+b
	return b
```
### 4. 二分法-折半查找
> 题目描述⬇
> 要求时间最短——折半查找，时O(log2n)空O(1)
> 尽可能高效——任意算法都有分

```c
// 长度为L的升序序列S，处在第[L/2]位置的数称为中位数，有两个长度相等的序列A，B，找出两个序列共同的中位数，时间空间尽可能高效

int search(int A[],int B[],int n){
	int l1=0,r1=n-1,m1,l2=0,r2n-1,m2;
	while(l1!=r1||l2!=r2){
		m1=(l1+r1)/2;
		m2=(l2+r2)/2;
		if(A[m1]==A[m2]) return A[m1];
		if(A[m1]<B[m2])
			if((l1+r1)%2==0)	//奇数
				l1=m1;
				r2=m2;
			else
				l1=m1+1;
				r2=m2
		else{...}
	}
	return A[l1]<B[l2]?A[l1]:B[l2]
}
/*
	1.m1==m2，算法结束
	2.m1<m2，舍弃A中较小的一半，舍弃B中较大一半，比较剩下部分的新m1,m2
	3.m1>m2，同上
	循环直到m1=m2或者A，B中只有一个数字为止
*/
```
### 5. 摩尔投票法
> 把**每一个主元素**和**任意一个非主元素**两两抵消，最终一定会至少剩余 1 个主元素，这就是投票抵消的底层逻辑，时O(n)空O(1)
> - 如果用哈希表统计次数，时间O(n)但空间O(n)，不如摩尔投票法节省空间；
> - 如果先排序再检查中位数，排序时间O(nlog n)，效率更低
```c
// 找到出现次数最多并且超过一半的‘主元素’
int Majority(int A[], int n) { 
	int candidate, count = 0; 
	// 第一步：筛选候选主元素 
	for (int i = 0; i < n; i++) { 
		if (count == 0)
			candidate = A[i]; 
			count = 1; 
		else
			if (A[i] == candidate) 
				count++; 
			else 
				count--; 
	// 第二步：验证候选元素 
	count = 0; 
	for (int i = 0; i < n; i++) 
		if (A[i] == candidate) count++;  
	if (count > n / 2) return candidate; 
	else return -1; // 无主元素 }
```
### 6. 贪心算法
> 每一步只选当前局部最优<-->动态规划：记录结果选择最优

```c
// 定义三元组距离:D=|a-b|+|a-c|+|b-c|，找出有序数组A、B、C中的最短距离三元组

// 求三个数的最小值对应的下标
int minIdx(int a, int b, int c) {
    if(a <= b && a <= c) return 0;
    else if(b <= a && b <= c) return 1;
    else return 2;
}

int findMinDistance(int A[], int n1, int B[], int n2, int C[], int n3) {
    int i = 0, j = 0, k = 0;
    int Dmin = INT_MAX;
    
    while(i < n1 && j < n2 && k < n3) {
        int x = A[i], y = B[j], z = C[k];
        // 计算当前距离
        int D = abs(x-y) + abs(y-z) + abs(z-x);
        if(D < Dmin) {
            Dmin = D;
        }
        // 移动最小值对应的指针
        int idx = minIdx(x, y, z);
        if(idx == 0) i++;
        else if(idx == 1) j++;
        else if(idx == 2) k++;
    }
    return Dmin;
}
/*
	1. 数学性质：D=|a-b|+|a-c|+|b-c|=L1+L2+L3 =2L3【最长段】
	   	数轴⤵
	   	a—L1—b——L2——c
		|————L3—————|		   
		因此每次只要找a与c即可，令a增大逼近c
	2. 贪心算法：每次遍历只有最小值的指针移动
	   时间T(n)=O(3*n)=O(n)
	如果采用暴力枚举，时间复杂度会达到O(n^3)
*/
```
### 7. 单链表的逆置
> 1-头插法 2-指针反转

```c
//1
LinkList Reverse(Linklist L){
	LNode *p=L->next,*r;	
	L->next=NULL;		//把头指针->空
	while(p!=NULL){		
		r=p->next;		//r用来记录p.next，辅助遍历
		p->next = L->next;	//结点p插入到L后
		L->next = p;
		p=r
	}
	return L;
}
//2
LinkList Reverse(LinkList L){
	LNode *pre,*p=L->next,*r=p->next;
	p->next=NULL;		//处理第一个结点
	while(r!=NULL){		
		pre=p;	p=r;  r=r->next;
		p->next=pre;	//指针反向
	}
	L->next=p;			//处理最后一个结点
	return L;
}
```
> 注意while循环体⤴根据判断条件的不同，是否需要判断头尾结点，会有多种写法，具体情况具体推导
### 8. 双链表的对称判断
```c
// 注意遍历时分奇数/偶数
...
	while(p!=q&&q->next!=p)	//p从前往后，q从后往前
//偶数时，让q在p前面才能说明遍历完全，误写成p->next!=q会少遍历一组
```
### 9. 快慢指针法
> 1-判断有环 2-找到中间某个结点（1/2、1/3处）
```c
// 判断单链表是否有环，并且返回环的入口
LNode* findloop(LNode *head){
	LNode *fast=head,*slow=head;	//设置快慢指针
	while(fast!=NULL&&fast->next!=NULL){	//fast找到尾结点的条件
		slow=slow->next;
		fast=fast->next->next;		//fast指针每次遍历两格
		if(fast==slow) break;
	}
	// 无环
	if(fast==NULL||fast->next==NULL){	
		return NULL;
	}
	// 有环，找入口结点
	LNode *p1=head, *p2=slow;		//此时slow为相遇点
	while(p1!=p2){
		p1=p1->next;
		p2=p2->next;
	}
	return p1;
}
/*	
	当快慢指针在一个环中移动时，最终fast和slow一定会相遇，此时说明链表有环
	当确认有环时，从head与相遇点进行同步遍历，新相遇点即是入口点【数学推导】
	时O(n)空O(1)
*/
```
> 快指针遍历条件：fast!=NULL&&fast->next!=NULL
> 考虑到单链表长度的奇偶性
```c
// 逆置链表后半段——找到链表的中间点
int pair(...){
	LNode *fast=L->next,*slow=L;
	while(fast!=NULL&&fast->next!=NULL){
		slow=slow->next;
		fast=fast->next->next;	//2倍速	
	}
	//逆置法2：指针反向法
	Lnode *pre = NULL, *p = slow->next, *temp; 
	while(p!=NULL) { 
		temp=p->next; 
		p->next = pre; 
		pre=p; 
		p=temp; 
	} 
	slow->next = pre;
}
```
### 10. 空间换时间-哈希表
> ’时间上尽可能高效‘；空间无要求
```c
// 保留单链表中第一次出现的数，删除数值相等的其他结点，且数值data<n
// 使用辅助数组int a[n]——0表示未出现1表示已出现
```

