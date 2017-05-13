/**
 * @author p1024
 * @description This module is a realization of Linked list
 */
"use strict";

const Node = require('./node.class');


class LinkedList {

	constructor() {
		this.head = new Node(null);
		this.tail = this.head;
		this.length = 0;
	}


	/**
	 * add new node to the bottom of the linkedList
	 * @param  {object} node unit of linkedList
	 */
	add(node) {	
		this.tail.next = node;
		this.tail = this.tail.next;
		this.length += 1;
	}


	/**
	 * get the node of linkedList in specified position
	 * @param  {number} idx index of the node
	 * @return {object}     the node
	 */
	get(idx) {
		if(idx < 0) {
			throw new RangeError('illegal range');
		} else if(idx >= this.length) {
			return void 0;
		} else {
			let targetNode = this.head;
			for(let i=0; i<=idx; i++) {
				targetNode = targetNode.next;
			}

			return targetNode;
		}
	}


	/**
	 * modify the node in specified position
	 * @param {number} idx   the position of the node
	 * @param {object} node the new node
	 */
	replace(oldNode, newNode) {
		if(Object.prototype.toString.call(oldNode).slice(8,-1).toLowerCase() === 'number') {
			try {
				let prevNode = this.get(oldNode-1);
				let nextNode = prevNode.next.next;
				prevNode.next = newNode;
				if(nextNode !== null) {
					newNode.next = nextNode;
				}
			} catch(e) {
				throw new RangeError(`node in position ${oldNode} not exist`);
			}
		} else {
			let tmpNode = this.head;
			while(tmpNode!==null) {
				if(tmpNode.next === oldNode) {
					tmpNode.next = newNode;
					newNode.next = oldNode.next;
					break;
				} else {
					tmpNode = tmpNode.next;
				}
			}
		}
	}


	/**
	 * insert a new node after the target node
	 * @param  {object} node    the target node
	 * @param  {object} newNode the new node
	 */
	after(node, newNode) {
		if(node === this.tail) {
			this.tail = newNode;
		} else {
			newNode.next = node.next;
		}
		node.next = newNode;
		this.length += 1;
	}


	/**
	 * insert a node before the target node
	 * @param  {object} node    the target node
	 * @param  {object} newNode the new node
	 */
	before(node, newNode) {
		let tmpNode = this.head;
		while(tmpNode!==null) {
			if(tmpNode.next === node) {
				tmpNode.next = newNode;
				newNode.next = node;
				break;
			} else {
				tmpNode = tmpNode.next;
			}
		}
		this.length += 1;
	}


	/**
	 * remove the specified node
	 * @param  {number} idx the position of the node
	 * @return {boolean}    true stands for del the node successfully
	 */
	remove(idx) {

		let prevNode = this.head, currNode = prevNode.next, counter = 0;

		if(idx < 0 || idx > this.length) {
			throw new RangeError('out of range');
		} else {
			while(currNode && counter < idx) {
				prevNode = currNode;
				currNode = currNode.next;
				counter += 1;
			}

			if(currNode === this.tail) {
				this.tail = currNode.next;
			}
			prevNode.next = currNode.next;
			this.length -= 1;
		}

		return currNode;
	}


	/**
	 * return all the nodes in an array
	 * @return {array} a list of nodes
	 */
	get nodeList() {
		let node = this.head.next;
		let nodeList = [];
		while(node) {
			nodeList.push(node);
			node = node.next;
		}
		return nodeList;
	}

	/**
	 * empty the nodes
	 */
	empty() {
		this.head.next = null;
		this.length = 0;
		this.tail = this.head;
	}


	/**
	 * copy the linkedList
	 * @param  {object} linkedList another linkedlist
	 */
	copy(linkedList) {
		this.head = linkedList.head;
		this.tail = linkedList.current;
		this.length = linkedList.length;
	}
}

module.exports = LinkedList;