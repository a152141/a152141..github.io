var esico = document.getElementById('icolist').getElementsByTagName('li');

var eicolist = document.querySelector('#icolist');

var eimglist = document.querySelector('#imglist');

var etest = document.querySelector('#test');

var eprev = document.querySelector('.prev');

var enext = document.querySelector('.next');

var left = 0;

var timer;

esico[2].style.backgroundColor = 'red';

run();

function run(){

if (left <= -3520) {

left = 0;

}

var m = Math.floor(-left/880) ;

imglist.style.marginLeft = left + 'px';
// 变量n，滚完一张图停1200毫秒
var n = (left % 880 == 0) ? n = 1200 : n = 6;
// 轮播速度
left -= 5;

icochange(m);

timer = setTimeout(run,n);

}

function icochange(m){

for (let index = 0; index < esico.length; index++) {

esico[index].style.backgroundColor = '';

}

if (m < esico.length) {

esico[m].style.backgroundColor = 'white';

}

}
// 图片定位函数
function imgchange(n){

let lt = - (n  * 800)

imglist.style.marginLeft = lt + 'px';

left = lt;

}

eprev.onclick = function(){

let prevgo = Math.floor(-left/800)-1;

if (prevgo == -1) {

prevgo =3;

}

imgchange(prevgo);

icochange(prevgo);

}

enext.onclick = function(){

let nextgo = Math.floor(-left/800)+1;

if (nextgo == 4) {

nextgo =0;

}

imgchange(nextgo);

icochange(nextgo);

}

eicolist.onclick = function(){

var tg = event.target;

let ico = tg.innerHTML - 1;

imgchange(ico);

icochange(ico);

}

eimglist.onmouseover = function(){

clearTimeout(timer);

}

eimglist.onmouseout = function(){

run();

}