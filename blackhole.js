document.querySelector(".mydiv").style.backgroundImage="url('Bulb-Off.jpeg')";
document.querySelector(".mydiv").style.backgroundSize="cover";
let state="off";
function changeImage()
{
    if(state=="off")
    {
        document.querySelector(".mydiv").style.backgroundImage="url('Bulb-On.jpeg')";
        document.querySelector(".mydiv").style.backgroundSize="cover";
        state="on";
    }
    else
    {
        document.querySelector(".mydiv").style.backgroundImage="url('Bulb-Off.jpeg')";
        document.querySelector(".mydiv").style.backgroundSize="cover";
        state="off";
    }
}