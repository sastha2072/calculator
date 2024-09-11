let box=document.getElementById("display");
let value=box.value
let firstvalue=0;
let secondvalue=0;
let symbol="";
function appendchar(x)
{
    if(x=="+" || x=='-' ||x=="*" || x=="/")
    {
        symbol=x;
        firstvalue=box.value;
        box.value='';
        value='';
        return 0;
    }
    value=value+x;
    box.value=value;
}
let deletechar=()=>{
    box.value='';
    value='';
}
let cleardisplay=()=>{
    let x=value.length;
    let y=value.slice(0,x-1)
    box.value=y;
}
let calculate=()=>{
    secondvalue=box.value;
    box.value='';
    value='';
    if(symbol=="+")
    {
        box.value=Number(firstvalue)+Number(secondvalue);
    }
    if(symbol=="-")
    {
        box.value=Number(firstvalue)-Number(secondvalue);
    }
    if(symbol=="*")
    {
        box.value=Number(firstvalue)*Number(secondvalue);
    }
    if(symbol=="/")
    {
        box.value=Number(firstvalue)/Number(secondvalue);
    }
}
