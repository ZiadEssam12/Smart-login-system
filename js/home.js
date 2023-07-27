var welcomeMessage = document.getElementById("welcomeMessage");
var logout = document.getElementById("logout");

var users=[];
var user;
var currentSession;
var username

(function(){
    users= JSON.parse(localStorage.getItem("users"));
})();

function getCurrentSession(){
    var session = JSON.parse(localStorage.getItem("currentSession"));
    if (session){
        return session
    }
    else{
        window.location.href="index.html";
    }
}

function checkifNotRegisteredEmail(email){
    for (var index=0; index < users.length ; index++){
        if(users[index].userEmail == email){
            return users[index].userName 
        }
    }
}

var email = getCurrentSession();
welcomeMessage.innerHTML  = "Welcome " + checkifNotRegisteredEmail(email);


logout.addEventListener("click" , function(){
    localStorage.removeItem("currentSession");
    window.location.href = "index.html";
})