var inputEmail = document.getElementById("inputEmail");
var inputPassword = document.getElementById("inputPassword");
var login = document.getElementById("login");
var errorEmailOrPassword = document.getElementById("errorEmailOrPassword");

var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var users=[];
var user;
var currentSession;


function getLocalStorage(){
    try{
        users= JSON.parse(localStorage.getItem("users"));
    }
    catch{
        users=[];
    }    
}

function getCurrentSession(){
    try{
        return JSON.parse(localStorage.getItem("currentSession"));
    }
    catch{
        return null
    }    
}


function setLocalStorage(){ 
    localStorage.setItem("users", JSON.stringify(users));
}


(function(){
    if (getCurrentSession()){
        window.location.href = "home.html";
    }
})();


function setSession(email){
    localStorage.setItem("currentSession", JSON.stringify(email));
}

function checkForregistereduser(user){
    for (var index=0; index < users.length ; index++){
        if(users[index].userEmail == user.userEmail && users[index].userPassowrd == user.userPassowrd){
            return true
        }
    }
    errorEmailOrPassword.classList.remove("d-none");
    return false;
}

login.addEventListener("click" , function(){
    getLocalStorage()
    if (!errorEmailOrPassword.classList.contains("d-none")){
        errorEmailOrPassword.classList.add("d-none");
    }

    user={
        "userEmail":inputEmail.value,
        "userPassowrd":inputPassword.value
    }

    if (emailRegex.test(inputEmail.value) && inputPassword.value.length >=8 && checkForregistereduser(user))
    {
        setSession(inputEmail.value);
        window.location.href = "home.html";

    }else{
        errorEmailOrPassword.classList.remove("d-none");
    }

})