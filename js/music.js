var SeparatePlaces = new Audio('../audio/SeparatePlaces.mp3'),
    SleepDeprivation = new Audio('../audio/SleepDeprivation.mp3');

var play1 = document.querySelector("#play1"),
    play2 = document.querySelector("#play2"),
    pause1 = document.querySelector("#pause1"),
    pause2 = document.querySelector("#pause2");

play1.addEventListener("click", function(){
    SeparatePlaces.play();
    play1.style.visibility = "hidden";
    pause1.style.visibility = "visible";
});

play2.addEventListener("click", function(){
    SleepDeprivation.play();
    play2.style.visibility = "hidden";
    pause2.style.visibility = "visible";
});
pause1.addEventListener("click", function(){
    SeparatePlaces.pause();
    SeparatePlaces.currentTime = 0;
    play1.style.visibility = "visible";
    pause1.style.visibility = "hidden";
});
pause2.addEventListener("click", function(){
    SleepDeprivation.pause();
    SleepDeprivation.currentTime = 0;
    play2.style.visibility = "visible";
    pause2.style.visibility = "hidden";
});
