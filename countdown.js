function startCountdown()
{
    let num=parseInt(document.querySelector(".input-bar").value);
    console.log("Starting countdown...");
    let actnum=(num+1)*1000;
    setTimeout(() => {
        console.log("Blast off!");
    }, actnum);
    const intervalId = setInterval(() => {
        if(num==0)
        {
            clearInterval(intervalId);
        }
        console.log(num);
        num-=1;
    }, 1000);
}