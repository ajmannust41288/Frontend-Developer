const example=document.querySelector('.example');
const calculated=document.querySelector('.calculated');
let paddingTop=getComputedStyle(example).paddingTop;
calculated.textContent=paddingTop;
window.onresize=function(event){
    paddingTop=getComputedStyle(example).paddingTop;
    calculated.textContent=paddingTop;
};