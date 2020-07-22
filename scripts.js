function add(a,b)
{
    return a+b;
}
function substract(a,b)
{
    return a-b;
}
function multiply(a,b)
{
    return a*b;
}
function divide(a,b)
{
    return a/b;
}
function operate(a,b,op)
{
    let res;
    op == "+" ? res = add(a,b) :
    op == "-" ? res = substract(a,b) :
    op == "*" ? res = multiply(a,b) :
    res = divide(a,b);

    return res;
}

const container = document.querySelector("#container");

for(let x = 0; x<17; x++)
{
    const btn = document.createElement('button');
    btn.id="id"+x;
    container.appendChild(btn);
}

const num7 = document.querySelector("#id0");
num7.textContent = "7";
const num8 = document.querySelector("#id1");
num8.textContent = "8";
const num9 = document.querySelector("#id2");
num9.textContent = "9";
const plus = document.querySelector("#id3");
plus.textContent = "+";
const num4 = document.querySelector("#id4");
num4.textContent = "4";
const num5 = document.querySelector("#id5");
num5.textContent = "5";
const num6 = document.querySelector("#id6");
num6.textContent = "6";
const minus = document.querySelector("#id7");
minus.textContent = "-";
const num1 = document.querySelector("#id8");
num1.textContent = "1";
const num2 = document.querySelector("#id9");
num2.textContent = "2";
const num3 = document.querySelector("#id10");
num3.textContent = "3";
const by = document.querySelector("#id11");
by.textContent = "*";
const num0 = document.querySelector("#id12");
num0.textContent = "0";
const dot = document.querySelector("#id13");
dot.textContent = ".";
const ce = document.querySelector("#id14");
ce.textContent = "CE";
const divided = document.querySelector("#id15");
divided.textContent = "/";
const eq = document.querySelector("#id16");
eq.textContent = "=";

const input = document.querySelector("textarea");

num1.addEventListener('click', () => {
    input.textContent += "1";
})
num2.addEventListener('click', () => {
    input.textContent += "2";
})
num3.addEventListener('click', () => {
    input.textContent += "3";
})
num4.addEventListener('click', () => {
    input.textContent += "4";
})
num5.addEventListener('click', () => {
    input.textContent += "5";
})
num6.addEventListener('click', () => {
    input.textContent += "6";
})
num7.addEventListener('click', () => {
    input.textContent += "7";
})
num8.addEventListener('click', () => {
    input.textContent += "8";
})
num9.addEventListener('click', () => {
    input.textContent += "9";
})
num0.addEventListener('click', () => {
        input.textContent += "0";
})
dot.addEventListener('click', () => {
    input.textContent += ".";
})
plus.addEventListener('click', () => {
    input.textContent += "+";
})
minus.addEventListener('click', () => {
    input.textContent += "-";
})
by.addEventListener('click', () => {
    input.textContent += "*";
})
divided.addEventListener('click', () => {
    input.textContent += "/";
})
ce.addEventListener('click', () => {
    input.textContent = "";
})
eq.addEventListener('click',() =>{
    let num="";
    let num_2=0;
    let act="";
    let op="";
    for(let x = 0; x<input.textContent.length; x++)
    {
        act=input.textContent[x];
        if(act=="0")
            num+="0";
        else if(act=="1")
            num+="1";
        else if(act=="2")
            num+="2";
        else if(act=="3")
            num+="3";
        else if(act=="4")
            num+="4";
        else if(act=="5")
            num+="5";
        else if(act=="6")
            num+="6";
        else if(act=="7")
            num+="7";
        else if(act=="8")
            num+="8";
        else if(act=="9")
            num+="9";
        else if(act==".")
            if(num.indexOf(".")!="-1" || num=="")
                num+=".";
            else
            {
                input.textContent="Syntax Error.";
                break;
            }
        else
        {
            if(op=="")
            {
                num++;
                num--;
                num_2=num;
                op=act;
                num="";
            }
            else if(num!="")
            {
                num++;
                num--;
                if(op=="+")
                    num_2=add(num_2,num);
                else if(op=="-")
                    num_2=substract(num_2,num);
                else if(op=="*")
                    num_2=multiply(num_2,num);
                else
                    num_2=divide(num_2,num);
                num="";
                op=act;
            }
            else
            {
                input.textContent="Syntax Error.";
                break;
            }
        }
        if(x==input.textContent.length-1)
        {
            num++;
            num--;
            if(op=="+")
                num_2=add(num_2,num);
            else if(op=="-")
                num_2=substract(num_2,num);
            else if(op=="*")
                num_2=multiply(num_2,num);
            else
                num_2=divide(num_2,num);
            op="";
        }
    }
    input.textContent = num_2;
})