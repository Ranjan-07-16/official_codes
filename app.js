function repeaterFunction()
{
    let color="white";
    setInterval(() => {
        if(color=="white")
        {
            document.body.style.backgroundColor="black";
            color="black";
            console.log("I am now black");
        }
        else{
            document.body.style.backgroundColor= "white";
            color="white";
            console.log("I am now white");
        }
    }, 2000);
}