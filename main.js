document.querySelector("#connection").addEventListener("submit",(e)=>{
    e.preventDefault();
    oldUser = document.getElementById("disconnection").firstElementChild;
    user = document.createElement("p");
    login = document.getElementById("login").value;
    user.textContent = `Connected as ${login}`;
    document.getElementById("disconnection").replaceChild(user, oldUser);
    if (document.getElementById("connection").style.display === "block") {
        document.getElementById("connection").style.display = "none";
        document.getElementById("disconnection").style.display = "block";
    } else {
        document.getElementById("connection").style.display = "block";
        document.getElementById("disconnection").style.display = "none";
    };
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
})


