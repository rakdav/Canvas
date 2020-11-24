var comp=document.getElementById("comp");
var clear=document.getElementById("clear");
var X=document.getElementById("X");
var Y=document.getElementById("Y");
var STEP=document.getElementById("step");
var canvas=document.getElementById("canvas"),
    context=canvas.getContext("2d");
var firstX=canvas.width/2;
var firstY=canvas.height/2;
Clear();
comp.addEventListener("click",function () {
    let scaleX=(canvas.width)/20;
    let scaleY=(canvas.height)/10;
    let x=firstX+Number(X.value)*scaleX;
    let y=firstY-Number(Y.value)*scaleY;
    let step=Number(STEP.value);
    context.beginPath();
    context.fillStyle="red";
    context.moveTo(x,y);
    for(let i=1;i<=step;i++)
    {
        console.log(x+" "+y);
        x+=i;
        y=x;
        context.lineTo(x*scaleX,-y*scaleY);
    }
    context.closePath();

    context.lineWidth=3;
    context.stroke();
});

function Clear()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.moveTo(canvas.width/2,10);
    context.lineTo(canvas.width/2, canvas.height-10);
    context.moveTo(10,canvas.height/2);
    context.lineTo(canvas.width-10, canvas.height/2);
    context.moveTo(10,canvas.height/2-4);
    let st=(canvas.width-20)/20;
    let k=10;
    for(let i=-10;i<=10;i++)
    {
        context.lineTo(k,canvas.height/2+5);
        context.font = "16px Verdana";
        context.fillText(i, k-5, canvas.height/2+20);
        k+=st;
        context.moveTo(k,canvas.height/2-5);
    }
    st=(canvas.height-20)/10;
    k=10;
    context.moveTo((canvas.width/2)-5,k);
    for(let i=5;i>=-5;i--)
    {
        context.lineTo((canvas.width/2)+5,k);
        if(i!=0)
            context.fillText(i,(canvas.width/2)-25, k+5);
        k+=st;
        context.moveTo((canvas.width/2)-5,k);
    }

    context.closePath();
    context.lineWidth=3;
    context.stroke();
}
clear.addEventListener("click",function () {
    Clear();
});