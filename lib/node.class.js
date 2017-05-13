"use strict";
/**
 * @description Data container in linked list
 */
class Node {
	constructor(value, next=null) {
		this.next = next;
		this.value = value;
	}
}

module.exports = Node;