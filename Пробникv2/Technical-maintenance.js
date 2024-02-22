// Выводить рандомный слогон в загаловке сайта

var phrases = [
    "Drivelog: записывай мгновения на дороге",
    "Drivelog: отмечай каждый километр вместе",
    "Drivelog: делай путь незабываемый",
    "Drivelog: шаг за шагом",
    "Drivelog: наши дороги, ваши воспоминания",
    "Drivelog: каждая поездка уникальная история твоего пути",
    "Drivelog: дневник твоих дорожных приключений: просто, легко",
    "Drivelog: зафиксируй моменты дороги с нами",
    "Drivelog: оставь следы своих поездок вместе с нами",
    "Drivelog: не пропускай ни одной мили",

];

var randomIndex = Math.floor(Math.random() * phrases.length);
var randomPhrase = phrases[randomIndex];

document.getElementById("Dynamic-Title").innerText = randomPhrase;

document.getElementById("THATsthefilter-open").addEventListener("click", function(){
    document.getElementById("THATsthefilter").classList.add("open")
})

document.getElementById("Thebrakingsystem-open").addEventListener("click", function(){
    document.getElementById("Thebrakingsystem").classList.add("open")
})

document.getElementById("Engineandexhaust-open").addEventListener("click", function(){
    document.getElementById("Engineandexhaust").classList.add("open")
})