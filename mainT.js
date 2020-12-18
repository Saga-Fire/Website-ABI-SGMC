document.getElementById("loginout").addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(document.getElementById("login").value);
    const login = (document.getElementById("login").value ? document.getElementById("login").value : 0);
    const div = document.createElement("div");
    div.id = "connected";
    const div2 = document.createElement("div");
    const div_content = document.createTextNode(`Connected as MMM`);
    const logout = document.createElement("button");
    div.appendChild(div2);
    div2.appendChild(div_content);
    div.appendChild(logout);
    logout.appendChild(document.createTextNode(`Disconnect`));
    const oldDiv = document.getElementById("conexion");
    const parentDiv = oldDiv.parentNode;
    parentDiv.replaceChild(div, oldDiv);
})