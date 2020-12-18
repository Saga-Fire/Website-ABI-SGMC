let booly = sessionStorage.getItem('booly') ? sessionStorage.getItem('booly') : true;
console.log(booly);
login = sessionStorage.getItem('login') ? sessionStorage.getItem('login') : "Saga_Fire";

if (booly === true) {
    document.getElementById("disconnection").style.display = "none";
    document.getElementById("connection").style.display = "block";
    
} else {
    oldUser = document.getElementById("disconnection").firstElementChild;
    user = document.createElement("p");
    user.textContent = `Connected as ${login}`;
    document.getElementById("disconnection").replaceChild(user, oldUser);
    document.getElementById("connection").style.display = "none";
    document.getElementById("disconnection").style.display = "block";
};



document.querySelector("#connection").addEventListener("submit",(e)=>{
    e.preventDefault();
    oldUser = document.getElementById("disconnection").firstElementChild;
    user = document.createElement("p");
    login = document.getElementById("login").value;
    sessionStorage.setItem('login', login);
    user.textContent = `Connected as ${login}`;
    document.getElementById("disconnection").replaceChild(user, oldUser);
    if (document.getElementById("connection").style.display === "block") {
        document.getElementById("connection").style.display = "none";
        document.getElementById("disconnection").style.display = "block";
    } else {
        document.getElementById("connection").style.display = "block";
        document.getElementById("disconnection").style.display = "none";
    };
    booly = false;
    sessionStorage.setItem('booly', booly);
})

document.querySelector("#disconnection").addEventListener("submit",(e)=>{
    e.preventDefault();
    if (document.getElementById("disconnection").style.display === "block") {
        document.getElementById("connection").style.display = "block";
        document.getElementById("disconnection").style.display = "none";
    } else {
        document.getElementById("connection").style.display = "none";
        document.getElementById("disconnection").style.display = "block";
    };
    booly = true;
    sessionStorage.setItem('booly', booly);
})


