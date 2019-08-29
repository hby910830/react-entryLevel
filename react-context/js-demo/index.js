let n = 100
function f1() {
	console.log(1);
	f2()
}

function f2() {
	console.log(2);
	f3()
}
n = 50
function f3() {
	console.log(3);
	f4()
}

function f4() {
	console.log(4, n)
}

setTimeout(() => {
	f1()
	console.log('done')
}, 0)

n = 0