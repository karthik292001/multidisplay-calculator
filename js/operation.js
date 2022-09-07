function operation(clickid)
{
        var  v1=parseFloat(document.getElementById("op1").value)
        var  v2=parseFloat(document.getElementById("op2").value)
if(isNaN(v1)&& isNaN(v2))
{
    alert("Enter a valid input")
}
else if(clickid == "add")
{
    document.getElementById("output").value= v1 + v2 ;
    console.log("Addition operation performed")
}
else if(clickid == "sub")
{   
    // e= v1 - v2 ;
    // l=1
    document.getElementById("output").value= v1 - v2;
    console.log("Subtraction operation performed")
}
else if(clickid == "mul")
{   
    document.getElementById("output").value= v1 * v2 ;
    console.log("Multiplication operation performed")
}
else if(clickid == "div")
{
    document.getElementById("output").value= v1 / v2 ;
    console.log("Division operation performed")
}
else if(clickid == "reset")
{
    document.getElementById("op1").value= "";
    document.getElementById("op2").value= "";
    document.getElementById("output").value= "";
}
}
function dis1(opn)
{
    if(opn=="op1")
    {
        flag=0
    }
    else if(opn=="op2")
    {
        flag=1
    }
}
function dis(val)
    {
        if(flag==0)

        {
    document.getElementById("op1").value += val;
        }
        else if(flag==1){
    document.getElementById("op2").value += val;   
        }
    }
//operation for equal button
/*function check()
{
    if(l==1)
    document.getElementById("output").value= e; 
    if(l==2)
    document.getElementById("output").value= e;
    if(l==3)
    document.getElementById("output").value= e;
    if(l==4)
    document.getElementById("output").value= e;
}*/


