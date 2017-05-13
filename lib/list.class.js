"use strict";

const LinkedList = require('./linkedList.class');
const Node = require('./node.class');

/**
 * list that use's linkedList
 */
class List extends LinkedList {

	constructor() {
		super();
	}


	/**
	 * add a new value
	 * @param  {all} value new value
	 */
	add(value) {
		let node = new Node(value);
		super.add(node);
	}


	/**
	 * find the value in specified position
	 * @param  {number} idx position in list
	 * @return {all}    value
	 */
	find(idx) {
		let node = super.get(idx);
		return node === void 0 ? node : node.value;
	}


	/**
	 * update value in specified position
	 * @param {number} idx    position
	 * @param {all}    value  the new value
	 */
	replace(idx, value) {
		let node = super.get(idx);
		if(node!== null) {
			node.value = value;
		}
	}


	/**
	 * insert a value before the target node
	 * @param  {number} idx   position of the target value
	 * @param  {all}    value the instered value
	 */
	before(idx, value) {
		let newNode = new Node(value);
		let oldNode = this.get(idx);
		super.before(oldNode, newNode);
	}


	/**
	 * insert a value after the target node
	 * @param  {number} idx   position of the target value
	 * @param  {all}    value the instered value
	 */
	after(idx, value) {
		let newNode = new Node(value);
		let oldNode = this.get(idx);
		super.after(oldNode, newNode);
	}


	/**
	 * return all the values in an array
	 * @return {array} all the values
	 */
	get valueList() {
		return super.nodeList.map(node=>node.value);
	}
}

module.exports = List;