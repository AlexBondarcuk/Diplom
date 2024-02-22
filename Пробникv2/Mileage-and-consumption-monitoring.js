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


            // Функция для расчета общего расхода топлива
            function calculateTotalConsumption() {
              var expenditure = parseFloat(document.getElementById('floatingExpendituret').value);
              var distance = parseFloat(document.getElementById('floatingDistance').value);
              var price = parseFloat(document.getElementById('floatingPrice').value);
              var currency = document.getElementById('state').value;
          
              var totalConsumption = (distance / expenditure).toFixed(2);
              var costOfTheTrip = (totalConsumption * price).toFixed(2);
          
              document.querySelector('.TotalFuelConsumption').innerHTML = "Общий расход топлива: " + totalConsumption + " литров";
              document.querySelector('.TheCostOfTheTrip').innerHTML = "Стоимость поездки: " + costOfTheTrip + " " + currency;
            }
          
            // Функция для расчета среднего расхода топлива на 100 км
            function calculateAverageConsumption() {
              var expenditure = parseFloat(document.getElementById('floatingExpendituret').value);
              var distance = parseFloat(document.getElementById('floatingDistance').value);
              var price = parseFloat(document.getElementById('floatingPrice').value);
              var currency = document.getElementById('state').value;
          
              var averageConsumption = ((expenditure / distance) * 100).toFixed(2);
              var costOfTheTrip = (expenditure * price).toFixed(2);
          
              document.querySelector('.AverageFuelConsumption').innerHTML = "Средний расход топлива на 100 км: " + averageConsumption + " литров";
              document.querySelector('.TheCostOfTheTrip').innerHTML = "Стоимость поездки: " + costOfTheTrip + " " + currency;
            }
          
            // При нажатии кнопки "Расчитать" выбирается одна из функций в зависимости от выбранного радиобаттона
            document.querySelector('form').addEventListener('submit', function(e) {
              e.preventDefault();
              if (document.getElementById('TotalСonsumption').checked) {
                calculateTotalConsumption();
              } else if (document.getElementById('AverageСonsumption').checked) {
                calculateAverageConsumption();
              }
            });

            

            // Функция для очистки результатов
            function clearResults() {
              document.querySelector('.AverageFuelConsumption').innerHTML = "Средний расход топлива: ";
              document.querySelector('.TotalFuelConsumption').innerHTML = "Общий расход топлива: ";
              document.querySelector('.TheCostOfTheTrip').innerHTML = "Стоимость поездки: ";
              document.getElementById('floatingExpendituret').value = "";
              document.getElementById('floatingDistance').value = "";
              document.getElementById('floatingPrice').value = "";
              document.getElementById('state').value = "";
            }
          
            // При смене выбора радиобаттона очищаются результаты
            document.querySelectorAll('input[name="Сonsumption"]').forEach(function(radio) {
              radio.addEventListener('change', function() {
                clearResults();
              });
            });
          