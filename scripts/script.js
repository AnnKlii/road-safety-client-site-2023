var questions = document.querySelectorAll('.question');
var questionsArray = Array.from(questions);

for (var i = 0; i < 5; i++) {
    /* случайно определяем номер элемента который необходимо показать */
    var ran = Math.floor(Math.random() * questionsArray.length);
    /* показываем случайный */
    questionsArray[ran].style.display = "block";
    /* удаляем показанный элемент из выборки, что бы он не попал второй раз */
    questionsArray.splice(ran, 1);
}


var question1 = document.querySelector('.question1');
var yes1 = document.querySelector('.answer1-2');
var no1 = document.querySelector('.answer1-1');
var not1 = document.querySelector('.answer1-3');

yes1.onclick = function () {
    question1.style.backgroundColor = "lightgreen";
}
no1.onclick = function () {
    question1.style.backgroundColor = "pink";
}
not1.onclick = function () {
    question1.style.backgroundColor = "pink";
}
var question2 = document.querySelector('.question2');
var yes2 = document.querySelector('.answer2-1');
var no2 = document.querySelector('.answer2-2');
var not2 = document.querySelector('.answer2-3');

yes2.onclick = function () {
    question2.style.backgroundColor = "lightgreen";
}
no2.onclick = function () {
    question2.style.backgroundColor = "pink";
}
not2.onclick = function () {
    question2.style.backgroundColor = "pink";
}

var question3 = document.querySelector('.question3');
var yes3 = document.querySelector('.answer3-1');
var no3 = document.querySelector('.answer3-2');
var not3 = document.querySelector('.answer3-3');

yes3.onclick = function () {
    question3.style.backgroundColor = "lightgreen";
}
no3.onclick = function () {
    question3.style.backgroundColor = "pink";
}
not3.onclick = function () {
    question3.style.backgroundColor = "pink";
}

var question4 = document.querySelector('.question4');
var yes4 = document.querySelector('.answer4-4');
var no4 = document.querySelector('.answer4-2');
var not4 = document.querySelector('.answer4-3');
var noo4 = document.querySelector('.answer4-1');

yes4.onclick = function () {
    question4.style.backgroundColor = "lightgreen";
}
no4.onclick = function () {
    question4.style.backgroundColor = "pink";
}
not4.onclick = function () {
    question4.style.backgroundColor = "pink";
}
noo4.onclick = function () {
    question4.style.backgroundColor = "pink";
}

var question5 = document.querySelector('.question5');
var yes5 = document.querySelector('.answer5-2');
var no5 = document.querySelector('.answer5-1');
var not5 = document.querySelector('.answer5-3');
var noo5 = document.querySelector('.answer5-4');

yes5.onclick = function () {
    question5.style.backgroundColor = "lightgreen";
}
no5.onclick = function () {
    question5.style.backgroundColor = "pink";
}
not5.onclick = function () {
    question5.style.backgroundColor = "pink";
}
noo5.onclick = function () {
    question5.style.backgroundColor = "pink";
}
var question6 = document.querySelector('.question6');
var yes6 = document.querySelector('.answer6-2');
var no6 = document.querySelector('.answer6-1');
var not6 = document.querySelector('.answer6-3');

yes6.onclick = function () {
    question6.style.backgroundColor = "lightgreen";
    question6.style.borderColor = "lightgreen";
}
no6.onclick = function () {
    question6.style.backgroundColor = "pink";
}
not6.onclick = function () {
    question6.style.backgroundColor = "pink";
}
var question7 = document.querySelector('.question7');
var yes7 = document.querySelector('.answer7-4');
var no7 = document.querySelector('.answer7-2');
var not7 = document.querySelector('.answer7-3');
var noo7 = document.querySelector('.answer7-1');

yes7.onclick = function () {
    question7.style.backgroundColor = "lightgreen";
}
no7.onclick = function () {
    question7.style.backgroundColor = "pink";
}
not7.onclick = function () {
    question7.style.backgroundColor = "pink";
}
noo7.onclick = function () {
    question7.style.backgroundColor = "pink";
}
var question8 = document.querySelector('.question8');
var yes8 = document.querySelector('.answer8-3');
var no8 = document.querySelector('.answer8-1');
var not8 = document.querySelector('.answer8-2');

yes8.onclick = function () {
    question8.style.backgroundColor = "lightgreen";
}
no8.onclick = function () {
    question8.style.backgroundColor = "pink";
}
not8.onclick = function () {
    question8.style.backgroundColor = "pink";
}