let Counter = 0
document.getElementById("num").innerHTML = Counter
function plus(){
    Counter++;
    document.getElementById("num").innerHTML = Counter
}
function minus(){
    Counter--;
    document.getElementById("num").innerHTML = Counter
}