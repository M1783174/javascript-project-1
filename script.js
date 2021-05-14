const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const color = ['yellow','purple','green','#3b5998'];

colorBtn.addEventListener('click',changeColor);
function changeColor (){
	let random = Math.floor(Math.random()*color.length)
	bodyBcg.style.backgroundColor = color[random];
}