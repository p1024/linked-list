const {List, Node} = require('../index.js');
const assert = require('assert');

describe('class::List', function () {
	let len = 20;
	let valList = Array
		.apply(null, {length: len})
		.map((val, idx)=>idx);
	let list = new List;

	describe('#add()', function() {

		let list = new List;

		it('should add values without error', function () {
			valList.forEach(val=>list.add(val));
		});
		
		it('should contains correct number of values', function () {
			assert.ok(list.length === len, `it should contain ${len} elements, actually ${list.length}`);
		});
	});

	beforeEach('free and refill the list', function () {
		list.empty();
		valList.forEach(val=>list.add(val));
	});

	describe('#find()', function () {

		// let list = new List;
		// valList.forEach(val=>list.add(val));

		it('should get the correct value', function () {
			let idx = Math.floor(len*Math.random());
			let value = list.find(idx);
			assert.ok(value === valList[idx], 'not equal');
		});

		it('should not get the value out of range', function () {
			// floor
			try {
				list.get(-1);
			} catch(e) {
				assert.ok(e.message === 'illegal range', 'not equal');
			}
			// ceil
			try {
				list.get(len);
			} catch(e) {
				assert.ok(e.message === 'illegal range', 'not equal');
			}
		});

	});


	describe('#valueList', function () {
		// let list = new List;
		// valList.forEach(val=>list.add(val));
		it('should return an array contains all the nodes', function () {
			let genValList = list.valueList;
			for(let i=0; i<len; i++) {
				assert.ok(genValList[i] === valList[i], 'node in genValList not equal to that in valList');
			}
			assert.ok(genValList.length === valList.length, 'node list length not equal');
		});
	});


	describe('#replace()', function () {
		// let list = new List;
		// valList.forEach(val=>list.add(val));
		it('should replace with specified value on the correct position', function () {
			let idx = Math.floor(len*Math.random());
			let newVal = 12;
			list.replace(idx, newVal);
			assert.ok(list.find(idx)===newVal, 'not replace the value successfully');
		});
	});


	describe('#before()', function () {
		// let list = new List;
		// valList.forEach(val=>list.add(val));
		it('should insert with specified value before the target value', function () {
			let idx = Math.floor(len*Math.random());
			let newVal = 12;
			list.before(idx, newVal);
			assert.ok(list.find(idx)===newVal, 'not insert before the idx successfully');
		});
	});


	describe('#after()', function () {
		// let list = new List;
		// valList.forEach(val=>list.add(val));
		it('should insert with specified value after the target value', function () {
			let idx = Math.floor(len*Math.random());
			let newVal = 12;
			list.after(idx, newVal);
			assert.ok(list.find(idx+1)===newVal, 'not insert after the idx successfully');
		});
	});
})