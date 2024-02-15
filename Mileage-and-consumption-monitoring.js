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

function Calculator(){

    var Expenditure = document.getElementById("floatingExpendituret").value;
    var Distance = document.getElementById("floatingDistance").value;
    var Price = document.getElementById("floatingPrice").value;
        
    if (Expenditure === ""){
    document.getElementById("warning-distance").classList.add("open");
        document.getElementById("bt-close-distance-warning").addEventListener("click", function(){
            document.getElementById("warning-distance").classList.remove("open")
        })
        return false;
    
    }  else if (Distance === ""){
    document.getElementById("warning-сonsumption").classList.add("open");
        document.getElementById("bt-close-сonsumption-warning").addEventListener("click", function(){
            document.getElementById("warning-сonsumption").classList.remove("open")
        })
        return false;


    } else if (Price === ""){
        document.getElementById("warning-price").classList.add("open");
        document.getElementById("bt-close-price-warning").addEventListener("click", function(){
            document.getElementById("warning-price").classList.remove("open")
        })  
        return false; 
    } 


}
