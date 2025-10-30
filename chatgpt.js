document.querySelector(".mytext").style.color="red";
let myInterval;
function changeColor()
{
    let color = "red";
    if(myInterval)
    {
        console.log("Repetition already in process.");
        return;
    }
    myInterval = setInterval(() => {
        if(color=="red")
        {
            document.querySelector(".mytext").style.color="blue";
            color="blue";
            console.log("I am now blue");
        }
        else if(color=="blue")
        {
            document.querySelector(".mytext").style.color="green";
            color="green";
            console.log("I am now green");
        }
        else
        {
            document.querySelector(".mytext").style.color="red";
            color="red";
            console.log("I am now red");
        }
    }, 3000);
}