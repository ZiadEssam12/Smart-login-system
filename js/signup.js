var inputEmail = document.getElementById("inputEmail");
var inputPassword = document.getElementById("inputPassword");
var signup = document.getElementById("signup");
var inputName = document.getElementById("inputName");
var alertInput = document.getElementById("alert");
var emailExists = document.getElementById("emailExists");



var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var usersList=[];
var user;


(function(){
    if (getCurrentSession()){
        window.location.href = "home.html";
    }
})();



function getLocalStorage(){
    usersList= JSON.parse(localStorage.getItem("users"));
    if (!usersList){
        usersList=[];
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
    localStorage.setItem("users", JSON.stringify(usersList));
}


(function(){
    if (getCurrentSession()){
        window.location.href = "home.html";
    }
})();


function setSession(email){
    localStorage.setItem("currentSession", JSON.stringify(email));
}

function checkifNotRegisteredEmail(email){
    var found=true;
    try{
        for (var index=0; index < usersList.length ; index++){
            if(usersList[index].userEmail == email){
                emailExists.classList.remove("d-none");
                found = false;
                
            }
        }
    }
    catch{
        return true;
    }
    return found;
}

function checkForInputs(){

    if (!emailRegex.test(inputEmail.value)) return false;
    if (!inputPassword.value.length >=8) return false;
    if (!inputName.value.length >= 8) return false;
    if (!checkifNotRegisteredEmail(inputEmail.value)) return false;
    return true;
}

function checkIfinputEmpty(){
    if (inputPassword.value.length == 0 || inputEmail.value.length == 0 || inputName.value.length == 0){
        alertInput.classList.remove("d-none");
        return false;
    }
    return true;
}

signup.addEventListener("click" , function(){
    getLocalStorage()

    if (!alertInput.classList.contains("d-none")){
        alertInput.classList.add("d-none");
    }

    if (!emailExists.classList.contains("d-none")){
        emailExists.classList.add("d-none");
    }

    if (checkIfinputEmpty() && checkForInputs())
    {
        user={
            "userName":inputName.value,
            "userEmail":inputEmail.value,
            "userPassowrd":inputPassword.value
        };

        usersList.push(user);
        setLocalStorage();
        
        window.location.href = "index.html";
    }

});