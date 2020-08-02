//creating an array with colors
var colors=[]; var number=6;
generateColors(number);
var styles=document.querySelectorAll('.square');//here styles becomes array of elements with square class
var button=document.getElementById("button");
for(let i=0;i<styles.length;i++)
{
    styles[i].style.backgroundColor=colors[i];
    styles[i].addEventListener('click',result);
}
var correctcolor=colors[Math.floor(Math.random()*colors.length)];
//deciding the result
function result(e)
{ 
   //if correct color is chosen
    if(e.target.style.backgroundColor==correctcolor)
    {document.getElementById("judgement").textContent="Pela! ;)" ;
    document.getElementById("title").style.backgroundColor=correctcolor;
    for(let i=0;i<number;i++)
{
    styles[i].style.backgroundColor=correctcolor;
}
button.textContent="Play Again!";
    } 
    else
    {document.getElementById("judgement").textContent="Hagga! ;(";
e.target.style.backgroundColor= "#323232";
}
}
//adding the correct code to title
document.getElementById('colorGame').textContent=correctcolor;
//function to generate colors
function generateColors(num)
{
    for(var  i=0;i<num;i++)
    {
        colors.push("rgb("+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+")");
    }
}
//when we press New colors
button.addEventListener("click",newcolors);
function newcolors()
{    colors=[];  //found
    generateColors(number); 
    correctcolor=colors[Math.floor(Math.random()*colors.length)];
    document.getElementById('colorGame').textContent=correctcolor;
    for(let i=0;i<colors.length;i++)//f
{     styles[i].style.backgroundColor=colors[i];
    styles[i].addEventListener('click',result);
}
for(let i=number;i<6;i++){ //f
    styles[i].style.backgroundColor="#323232";
}
button.textContent="New Colors";
document.getElementById("judgement").textContent="";
document.getElementById("title").style.backgroundColor="steelblue";
}
//for easy and hard modes
var modebutton=document.querySelectorAll(".mode"); //forms an array of all classes with mode
for(let i=0;i<modebutton.length;i++){
    modebutton[i].addEventListener("click",function(e){
        modebutton[0].classList.remove("selected");
        modebutton[1].classList.remove("selected");
        e.target.classList.add("selected");
        number=3*(i+1);
        newcolors();
    })
}
/*esybutton.addEventListener("click",function(){
    esybutton.classList.add("selected");
    document.querySelector(".hrdbtn").classList.remove("selected");
    number=3;
    newcolors();
});

document.querySelector(".hrdbtn").addEventListener("click",function(){
    esybutton.classList.remove("selected");
    document.querySelector(".hrdbtn").classList.add("selected");
    number=6;
    newcolors();
});*/
