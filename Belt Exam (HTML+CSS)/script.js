function remove(element) {
    element.remove();
}
function displayalet(element) {
    console.log(element);
}
function cat(element) {
    console.log(element)
    }
var count = 0;
var Element = document.querySelector(".likebut1");
function add1() {
    count++;
    Element.innerText = count + " like(s)"
    //console.log(count);//
}
var count2 = 0;
var Element2 = document.querySelector(".likebut2");
function add2() {
    count2++;
    Element2.innerText = count2 + " like(s)"
}
var count3 = 0;
    var Element3 = document.querySelector(".likebut3");
function add3() {
    count3++;
    Element3.innerText = count3 + " like(s)"
}
