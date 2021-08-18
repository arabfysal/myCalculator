function displayInput(e) {
	const display = document.getElementById('display')
	const value = e.target.value;
	const oldVal = display.innerHTML
	display.innerHTML = `${oldVal}${value}`
	// return display;
}
function computeTotal() {
	const display = document.getElementById('display')
	const total = display.innerHTML;
	display.innerHTML = eval(total)
}
function clearScreen() {
	const display = document.getElementById('display')
	display.innerHTML = ''
}