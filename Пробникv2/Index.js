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

// Открытие подсказок

// во время ввода имени пользователя

document.getElementById("UserNameRegist").addEventListener("click", function(){
    document.getElementById("Hint-User-Name-Regist").classList.add("open")
})

//  во время ввода почты

document.getElementById("UserEmailRegist").addEventListener("click", function(){
    document.getElementById("Hint-User-Email-Regist").classList.add("open")
})

//  во время ввода пароля

document.getElementById("UserPasswordRegist").addEventListener("click", function(){
    document.getElementById("Hint-User-Password-Regist").classList.add("open")
})

// во время повторного пароля

document.getElementById("UserRepitPasswordRegist").addEventListener("click", function(){
    document.getElementById("Hint-User-Repit-Password-Regist").classList.add("open")
})

// Закрытие подсказки про имя пользователя во время открытия другово поля ввода

// При вводе почты

document.getElementById("UserEmailRegist").addEventListener("click", function(){
    document.getElementById("Hint-User-Name-Regist").classList.remove("open")
})

// При вводе пароля

document.getElementById("UserPasswordRegist").addEventListener("click", function(){
    document.getElementById("Hint-User-Name-Regist").classList.remove("open")
})

// При вводе повтрного пароля

document.getElementById("UserRepitPasswordRegist").addEventListener("click", function(){
    document.getElementById("Hint-User-Name-Regist").classList.remove("open")
})

// Закрытие подсказки про почту во время открытия другово поля ввода

// При вводе имени пользователя

document.getElementById("UserNameRegist").addEventListener("click", function(){
    document.getElementById("Hint-User-Email-Regist").classList.remove("open")
})

// При вводе пароля

document.getElementById("UserPasswordRegist").addEventListener("click", function(){
    document.getElementById("Hint-User-Email-Regist").classList.remove("open")
})

// При вводе повторного пароля

document.getElementById("UserRepitPasswordRegist").addEventListener("click", function(){
    document.getElementById("Hint-User-Email-Regist").classList.remove("open")
})

// Закрытие подсказки про пароль во время открытия другово поля ввода

// При вводе имени пользователя

 document.getElementById("UserNameRegist").addEventListener("click", function(){
    document.getElementById("Hint-User-Password-Regist").classList.remove("open")
})

/// При вводе почты

document.getElementById("UserEmailRegist").addEventListener("click", function(){
    document.getElementById("Hint-User-Password-Regist").classList.remove("open")
})

// При вводе повторного пароля 

document.getElementById("UserRepitPasswordRegist").addEventListener("click", function(){
    document.getElementById("Hint-User-Password-Regist").classList.remove("open")
})

// Закрытие подсказки про повторный пароль во время открытия  другово поля ввода

//  При вводе имени пользователя

document.getElementById("UserNameRegist").addEventListener("click", function(){
    document.getElementById("Hint-User-Repit-Password-Regist").classList.remove("open")
})

//  При вводе почты

document.getElementById("UserEmailRegist").addEventListener("click", function(){
    document.getElementById("Hint-User-Repit-Password-Regist").classList.remove("open")
})

// при вводе пароля 

document.getElementById("UserPasswordRegist").addEventListener("click", function(){
    document.getElementById("Hint-User-Repit-Password-Regist").classList.remove("open")
})

// Работа модального окна регистрации

function CheckData(){
    
// Проверка корректности ввода имени пользователя

    var UserNameRegist = document.getElementById("UserNameRegist").value;
    var MinNameLength = 4;
    var MaxNameLength = 20;
    
// Проверка пустое поле или нет

    if (UserNameRegist === ""){
        document.getElementById("warning-user").classList.add("open");
        document.getElementById("bt-close-user-warning").addEventListener("click", function(){
            document.getElementById("warning-user").classList.remove("open")
        })
        return false;
// проверка на правельность введение данных

     } else if (UserNameRegist.length < MinNameLength || UserNameRegist > MaxNameLength){
        document.getElementById("User-Name-Not-Corecct-Regist").classList.add("open");
        return false;
// Если все правильно то нет сообщения о не исправности

    } else if  (!UserEmailRegist ==="" || !UserNameRegist.length < MinNameLength || !UserNameRegist > MaxNameLength)
    document.getElementById("User-Name-Not-Corecct-Regist").classList.remove("open")

// Проверка корректности ввода почты

    var UserEmailRegist = document.getElementById("UserEmailRegist").value;

// Проверка пустое поле или нет

    if (UserEmailRegist === "") {
        document.getElementById("warning-email").classList.add("open")
        document.getElementById("bt-close-email-warning").addEventListener("click", function(){
            document.getElementById("warning-email").classList.remove("open")
        })
        return false;

//Проверка регулярного вырожения

    } else if (!/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/.test(UserEmailRegist)) {
        document.getElementById("User-Email-Not-Corecct-Regist").classList.add("open");
        return false;

 // Если все правильно то нет сообщения о не исправности

    } else if (/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/.test(UserEmailRegist)){
        document.getElementById("User-Email-Not-Corecct-Regist").classList.remove("open")
    }

 // Проверка коректность ввода пароля

    var UserPasswordRegist = document.getElementById("UserPasswordRegist").value;
    var MinPasswordLength = 4;
    var MaxPasswordLength = 20;

// Проверка пустое поле или нет

    if (UserPasswordRegist === ""){
        document.getElementById("warning-password").classList.add("open")
        document.getElementById("bt-close-password-warning").addEventListener("click", function(){
            document.getElementById("warning-password").classList.remove("open")
        })
        return false; 
    } else if (UserPasswordRegist.length < MinPasswordLength || UserPasswordRegist > MaxPasswordLength)
    document.getElementById("User-Password-Not-Corecct-Regist").classList.add("open")
     else if(!UserPasswordRegist.length < MinPasswordLength || !UserPasswordRegist > MaxPasswordLength || !UserPasswordRegist === "" )
     document.getElementById("User-Password-Not-Corecct-Regist").classList.remove("open")

// Проверка корректности повторного пароля

    var UserRepitPasswordRegist = document.getElementById("UserRepitPasswordRegist").value;

    if (UserRepitPasswordRegist === ""){
        document.getElementById("warning-repassword").classList.add("open")
        document.getElementById("bt-close-repassword-close").addEventListener("click", function(){
            document.getElementById("warning-repassword").classList.remove("open")
        })
    return false;
    } else if (UserPasswordRegist !== UserRepitPasswordRegist)
    document.getElementById("User-Repit-Password-Not-Corecct-Regist").classList.add("open")
    else if (UserPasswordRegist == UserRepitPasswordRegist)
    document.getElementById("User-Repit-Password-Not-Corecct-Regist").classList.remove("open")

}

// Открытие окна регистрации

document.getElementById("bt-regist-open-pop").addEventListener("click", function(){
    document.getElementById("Regist-Pop").classList.add("open")
})

document.getElementById("Main-page").addEventListener("click", function(){
    document.getElementById("Regist-Pop").classList.add("open")
    
})

document.getElementById("Main-page-floter").addEventListener("click", function(){
    document.getElementById("Regist-Pop").classList.add("open")
    
})

document.getElementById("Mileage-and-consumption-monitoring").addEventListener("click", function(){
    document.getElementById("Regist-Pop").classList.add("open")
    
})

document.getElementById("Mileage-and-consumption-monitoring-floter").addEventListener("click", function(){
    document.getElementById("Regist-Pop").classList.add("open")
    
})

document.getElementById("Technical-maintenance").addEventListener("click", function(){
    document.getElementById("Regist-Pop").classList.add("open")
    
})

document.getElementById("Technical-maintenance-floter").addEventListener("click", function(){
    document.getElementById("Regist-Pop").classList.add("open")
    
})

document.getElementById("Expenses-and-budget").addEventListener("click", function(){
    document.getElementById("Regist-Pop").classList.add("open")
    
})

document.getElementById("Expenses-and-budget-floter").addEventListener("click", function(){
    document.getElementById("Regist-Pop").classList.add("open")
    
})

document.getElementById("bt-start-main").addEventListener("click", function(){
    document.getElementById("Regist-Pop").classList.add("open")
    
})

document.getElementById("bt-start-mileage-and-consumption-monitoring").addEventListener("click", function(){
    document.getElementById("Regist-Pop").classList.add("open")
    
})

document.getElementById("start-technical-maintenance").addEventListener("click", function(){
    document.getElementById("Regist-Pop").classList.add("open")
    
})

document.getElementById("start-expenses-and-budget").addEventListener("click", function(){
    document.getElementById("Regist-Pop").classList.add("open")
    
})
// закрытие регистрации

document.getElementById("bt-regist-close-pop").addEventListener("click", function(){
    document.getElementById("Regist-Pop").classList.remove("open")
})


document.getElementById("bt-pop-login-open").addEventListener("click", function(){
    document.getElementById("Regist-Pop").classList.remove("open")
})

document.getElementById("bt-login-open-pop").addEventListener("click", function(){
    document.getElementById("Regist-Pop").classList.remove("open")
})

// Открытие авторизации

document.getElementById("bt-login-open-pop").addEventListener("click", function(){
    document.getElementById("Login-Pop").classList.add("open")
})

document.getElementById("bt-pop-login-open").addEventListener("click", function(){
    document.getElementById("Login-Pop").classList.add("open")
})

// закрытие авторизации

document.getElementById("bt-login-close-pop").addEventListener("click", function(){
    document.getElementById("Login-Pop").classList.remove("open")
})

document.getElementById("bt-pop-regist-open").addEventListener("click", function(){
    document.getElementById("Login-Pop").classList.remove("open")
})

document.getElementById("bt-regist-open-pop").addEventListener("click", function(){
    document.getElementById("Login-Pop").classList.remove("open")
})

document.getElementById("bt-pop-regist-open").addEventListener("click", function(){
    document.getElementById("Regist-Pop").classList.add("open")

}) 
