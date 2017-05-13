const {LinkedList, Node} = require('../index.js');
const assert = require('assert');

describe('class::LinkedList', function () {
	let len = 20;
	let nodeList = Array
		.apply(null, {length: len})
		.map((val, idx)=>new Node(idx));
	let linkedList = new LinkedList;

	describe('#add()', function() {

		let linkedList = new LinkedList;

		it('should add nodes without error', function () {
			nodeList.forEach(node=>linkedList.add(node));
		});
		
		it('should contains correct number of nodes', function () {
			assert.ok(linkedList.length === len, `it should contain ${len} elements, actually ${linkedList.length}`);
		});
	});

	beforeEach('free and refill the linkedList', function () {
		linkedList.empty();
		nodeList.forEach(node=>linkedList.add(node));
	});

	describe('#get()', function () {
		

		it('should get the correct node', function () {

			let idx = Math.floor(len*Math.random());
			let node = linkedList.get(idx);
			assert.ok(node === nodeList[idx], 'not equal');
		});

		it('should not get the node out of range', function () {
			// floor
			try {
				linkedList.get(-1);
			} catch(e) {
				assert.ok(e.message === 'illegal range', 'not equal');
			}
			// ceil
			try {
				linkedList.get(len);
			} catch(e) {
				assert.ok(e.message === 'illegal range', 'not equal');
			}
		});
	});


	describe('#nodeList', function () {

		it('should return an array contains all the nodes', function () {
			let linkedList = new LinkedList;
			nodeList.forEach(node=>linkedList.add(node));
			let genNodeList = linkedList.nodeList;
			for(let i=0; i<len; i++) {
				assert.ok(genNodeList[i] === nodeList[i], 'node in genNodeList not equal to that in nodeList');
			}
			assert.ok(genNodeList.length === nodeList.length, 'node list length not equal');
		});
	});


	describe('#remove()', function () {
		
		it('should remove the specified one and not affect other nodes', function () {
			let idx = Math.floor(len*Math.random());
			let removeNode = linkedList.remove(idx);
			assert.ok(removeNode === nodeList[idx], 'delete node is not the correct node');
			let leftNodeList= nodeList.filter(node=>!linkedList.nodeList.includes(node));
			assert.ok(leftNodeList.length === 1 && leftNodeList[0] === removeNode, 'not only the removed node')
		});
	});


	describe('#replace()', function () {
		
		it('should replace with specified node on the correct position', function () {
			let idx = Math.floor(len*Math.random());
			let oldNode = linkedList.get(idx);
			let newNode = new Node(12);
			linkedList.replace(oldNode, newNode);
			assert.ok(linkedList.get(idx)===newNode, 'not replace the node successfully');
		});
	});


	describe('#before()', function () {
		
		it('should insert with specified node before the target node', function () {
			let idx = Math.floor(len*Math.random());
			let oldNode = linkedList.get(idx);
			let newNode = new Node(12);
			linkedList.before(oldNode, newNode);
			assert.ok(linkedList.get(idx)===newNode, 'not insert before the node successfully');
		});
	});


	describe('#after()', function () {
		
		it('should insert with specified node after the target node', function () {
			let idx = Math.floor(len*Math.random());
			let oldNode = linkedList.get(idx);
			let newNode = new Node(12);
			linkedList.after(oldNode, newNode);
			assert.ok(linkedList.get(idx+1)===newNode, 'not insert after the node successfully');
		});
	});
});