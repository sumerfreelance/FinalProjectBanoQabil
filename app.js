let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach((valueDisplays) => {
    let starterValue = 0;
    let endValue = parseInt(valueDisplays.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
        starterValue += 1;
        valueDisplays.textContent = starterValue;
        if(starterValue === endValue){
            clearInterval(counter);
        }
    }, duration);
});