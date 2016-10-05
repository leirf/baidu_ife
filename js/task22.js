/**
 * Created by hansneil on 20161005
 */
/**
 * ����ȫ�ֱ���		
 */
var traversalObj = {
	//���ֱ���˳�������
	threeTypeArr: [],
	//ǰ������ڵ������
	preOrderArr: [],
	//��������ڵ������
	inOrderArr: [],
	//��������ڵ������
	postOrderArr:[],
	//�����������
	index: 0,
	//setTimeout���ص������־
	clearSign: ""
}
/**
 * ǰ���������
 * @param  {obj} node ���ڵ�
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
 * �����������
 * @param  {obj} node ���ڵ�
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
 * �����������
 * @param  {obj} node ���ڵ�
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
 * ��ʼ������,������ֱ���������
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
 * �������ִ�еĶ���
 * @param  {array} arr ����������
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
