{
	let context = {}  //局部的全局变量
	window.setContext = function (key, value) {
		context[key] = value
	}


	window.f1 = function () {
		console.log(1);
		f2()
	}

	function f2() {
		console.log(2);
		f3()
	}

	function f3() {
		console.log(3);
		f4()
	}

	function f4() {
		console.log(4, context.n)
	}
}
// console.log(context); 报错，无法访问，context是局部变量
setContext('n', 20)
setTimeout(() => {
	f1()
	console.log('done')
}, 0)