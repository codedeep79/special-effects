
function dealTime(num) {
	return num > 9 ? num + '' : '0' + num
}

function getTime() {
	let now = new Date()
	let h = now.getHours(), m = now.getMinutes(), s = now.getSeconds()
	let text = h > 12 ? 'pm' : 'am'

	h = dealTime(h)
	m = dealTime(m)
	s = dealTime(s)

	let result = h + ':' + m + ':' + s + ' ' + text
	document.getElementById('getTime').innerText = result

	setTimeout(getTime, 1000)
}
window.addEventListener('load', getTime)


