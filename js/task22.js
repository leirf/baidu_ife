/**
 * Created by hansneil on 20161005
 */
/**
 * 定义全局变量		
 */
var traversalObj = {
	//三种遍历顺序的数组
	threeTypeArr: [],
	//前序遍历节点的数组
	preOrderArr: [],
	//中序遍历节点的数组
	inOrderArr: [],
	//后序遍历节点的数组
	postOrderArr:[],
	//数组的索引号
	index: 0,
	//setTimeout返回的清除标志
	clearSign: ""
}
/**
 * 前序遍历函数
 * @param  {obj} node 根节点
 * @return {[type]}      [description]
 */		
function preOrderTraversalNode(node) {
	if (node !== null) {
		traversalObj.preOrderArr.push(node);
		preOrderTraversalNode(node.firstElementChild);
		preOrderTraversalNode(node.lastElementChild);
	}
}
/**
 * 中序遍历函数
 * @param  {obj} node 根节点
 * @return {[type]}      [description]
 */		
function inOrderTraversalNode(node) {
	if (node !== null) {
		inOrderTraversalNode(node.firstElementChild);
		traversalObj.inOrderArr.push(node);
		inOrderTraversalNode(node.lastElementChild);
	}
}
/**
 * 后序遍历函数
 * @param  {obj} node 根节点
 * @return {[type]}      [description]
 */		
function postOrderTraversalNode(node) {
	if (node !== null) {
		postOrderTraversalNode(node.firstElementChild);
		postOrderTraversalNode(node.lastElementChild);
		traversalObj.postOrderArr.push(node);
	}
}
/**
 * 初始化数据,获得三种遍历的数组
 * @return {} 
 */
function threeTraversalNode() {
	var root = document.querySelector('.level0');
	preOrderTraversalNode(root);
	inOrderTraversalNode(root);
	postOrderTraversalNode(root);
	traversalObj.threeTypeArr.push(traversalObj.preOrderArr,traversalObj.inOrderArr,traversalObj.postOrderArr);
}
/**
 * 清除正在执行的动画
 * @param  {array} arr 遍历的数组
 * @return {}     
 */
function clearPrevLoop(arr) {
	arr.forEach(function (item) {
		item.style.backgroundColor = "#fff";
	});
	traversalObj.index = 0;
	clearTimeOut(traversalObj.clearSign);
}
function gameLoop(arr) {
	
}
