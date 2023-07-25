var a=Math.floor(Math.random()*100+1);
var c=document.querySelector(".na");
var b=document.createElement("div");
c.classList.add('b');
b.className="write";
c.appendChild(b);
var g=document.createElement("div");
c.classList.add('g');
g.className="write";
c.appendChild(g);
var i=1;
var j=10;
function fun1(){
    if(i<11){
    if(a==parseInt(document.getElementById("no").value)){
        document.location.href="index1.html";
    }
    else if(a!=parseInt(document.getElementById("no").value)){
        b.innerHTML="You have Only "+j+" moves";
        b.style.color="white";
        g.style="width:900px;margin-left:-10%;";
        j--;
        if(a>parseInt(document.getElementById("no").value)){
            g.innerHTML="The Correct number is greater than your guessing number...";
        }
        else if(a<parseInt(document.getElementById("no").value)){
            g.innerHTML="The Correct number is less than your guessing number...";
        }
    }}
    else{
        c.innerHTML="Your attempt is over...  :(";
        c.style="font-size:xx-large;";
        var d=document.createElement("button");
        c.classList.add('d');
        c.appendChild(d);
        d.innerHTML="Replay the game";
        c.style="position:absolute;margin-left:34%; width:auto;height:auto;font-size:xx-large;"
        d.style="margin-left:67%; margin-top:120%;width:160px;height:auto;font-size:large;"
        d.onmouseover = function(e){
            this.className="test";
        }
        d.onclick = function(e){
            document.location.href="index.html";
        }
    }
    i++;
}
function fun2(){
    document.location.href="index.html";
}
