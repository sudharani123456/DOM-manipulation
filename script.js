var para=document.getElementById('para')
para.addEventListener('mouseover',function(){
    para.style.color="red";

});
para.addEventListener('mouseout',function(){
    para.style.color="black";
});
var button=document.getElementById('button');
button.addEventListener('mouseover',function(){
    button.innerHTML='mouseover'
});
var button=document.getElementById('button')
button.addEventListener('mouseout',function(){
    button.innerHTML="mouseout";
});
var p=document.getElementById('paragraph');
var input=document.getElementById('input')
function updateval(){
    input.value=p.innerHTML;
}