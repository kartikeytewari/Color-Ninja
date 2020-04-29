var color_set={};
for (let i=0;i<=5;i++)
{
    let a=Math.floor((Math.random()*255)+1);
    let b=Math.floor((Math.random()*255)+1);
    let c=Math.floor((Math.random()*255)+1);
    color_set[i]={a,b,c};
}

var square=document.querySelectorAll(".square");
for (let i=0;i<=square.length-1;i++)
{
   square[i].style.background="rgb(" + color_set[i].a + ", " + color_set[i].b + ", " + color_set[i].c + ")";
}
