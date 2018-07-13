var arr = ["blue", "red", "yellow", "gray", "pink", "indigo", "lightblue", "violet", "orange"];
function select(arr){
	var ran = Math.round(Math.random() * arr.length);
	return arr[ran];
}
document.querySelector('.vball1').addEventListener('click', function() {
	document.querySelector("body").style.background= select(arr);
});