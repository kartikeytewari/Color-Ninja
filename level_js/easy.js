let square=document.querySelectorAll(".square");
let red_display=document.querySelector(".red_display");
let green_display=document.querySelector(".green_display");
let blue_display=document.querySelector(".blue_display");
let score_display=document.querySelector(".score_display");
let color={};
let listen={};

let min=1;
let max=255;
for (let i=0;i<=square.length-1;i++)
{
    let r=Math.floor((Math.random()*max)+min);
    let g=Math.floor((Math.random()*max)+min);
    let b=Math.floor((Math.random()*max)+min);

    color[i]={r,g,b};
}

for (let i=0;i<=square.length-1;i++)
{
    square[i].style.background="rgb("+color[i].r+", "+color[i].g+", "+color[i].b+")";
}

let ans=Math.floor((Math.random()*square.length));
red_display.innerHTML=color[ans].r;
green_display.innerHTML=color[ans].g;
blue_display.innerHTML=color[ans].b;


var score=5;
score_display.innerHTML=score;
for (let i=0;i<=square.length-1;i++)
{
    square[i].addEventListener("click", function()
    {
        if (i==ans)
        {
            console.log("correct");
            i=6;
        }
        else
        {
            console.log("wrong");
            square[i].style.background="#232323";
            score--;
        }

        score_display.innerHTML=score;
    })
}

