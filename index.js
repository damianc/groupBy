(function () {
	Object.defineProperty(
		Array.prototype, 'groupBy', {
			value: groupBy
		}
	);
	function groupBy(
		keyFactory,
		selector = item => item
	) {
		return this.reduce((acc,curr,idx) => {
			let key = curr[keyFactory];
			if (typeof keyFactory === 'function') {
				key = keyFactory(curr,idx);
			}
			if (!(key in acc)) acc[key] = [];
			const cc = {...curr};
			acc[key].push(selector(cc));
			return acc;
		}, {});
	}
})()
