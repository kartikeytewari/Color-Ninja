let square=document.querySelectorAll(".square");
let red_display=document.querySelector(".red_display");
let green_display=document.querySelector(".green_display");
let blue_display=document.querySelector(".blue_display");
let score_display=document.querySelector(".score_display");
let red_bar=document.querySelector(".red_bar");
let green_bar=document.querySelector(".green_bar");
let blue_bar=document.querySelector(".blue_bar");
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
red_display.innerHTML=Math.floor((color[ans].r/255)*100) + '%';
green_display.innerHTML=Math.floor((color[ans].g/255)*100) + '%';
blue_display.innerHTML=Math.floor((color[ans].b/255)*100) + '%';
red_bar.style.width=red_display.innerHTML;
green_bar.style.width=green_display.innerHTML;
blue_bar.style.width=blue_display.innerHTML;


var score=5;
score_display.innerHTML=score;
for (let i=0;i<=square.length-1;i++)
{
    square[i].addEventListener("click", function()
    {
        if (i==ans)
        {
            // correct answer
            i=6;
            if (score==0)
            {
                window.location.replace("score_0.html");
            }
            else if (score==1)
            {
                window.location.replace("score_1.html");
            }
            else if (score==2)
            {
                window.location.replace("score_2.html");
            }
            else if (score==3)
            {
                window.location.replace("score_3.html");
            }
            else if (score==4)
            {
                window.location.replace("score_4.html");
            }
            else if (score==5)
            {
                window.location.replace("score_5.html");
            }
        }
        else
        {
            // wrong answer
            square[i].style.background="#232323";
            score--;
        }

        score_display.innerHTML=score;
    })
}

