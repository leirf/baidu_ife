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
};
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
	var root = document.querySelector('.level_0');
	console.log(root);
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
	clearTimeout(traversalObj.clearSign);
}

function gameLoop(arr) {
	if (traversalObj.index <= arr.length) {
		if (traversalObj.index != 0) {
			arr[traversalObj.index - 1].style.backgroundColor = "#fff";
		}
		if (traversalObj.index != arr.length) {
			arr[traversalObj.index].style.backgroundColor = "#365495";
		}
		traversalObj.index++;
		traversalObj.clearSign = setTimeout(function () {
			gameLoop(arr);
		},1000);
		console.log(traversalObj.clearSign);
	} else {
		traversalObj.index = 0;
	}
}

function init() {
	threeTraversalNode();
	console.log(traversalObj.threeTypeArr);
	var btns = document.querySelectorAll('button');
	console.log(btns);
	for (var i = 0; i < btns.length; i++) {
		(function (n) {
			Util.addEventHandler(btns[n],"click",function () {
				clearPrevLoop(traversalObj.threeTypeArr[n]);
				gameLoop(traversalObj.threeTypeArr[n]);
			});
		})(i);
	}
}

init();