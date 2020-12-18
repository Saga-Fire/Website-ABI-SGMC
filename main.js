document.getElementById("connection").addEventListener("submit",(e)=>{
    e.preventDefault();
    const login = document.getElementById("login").value;
    const form = document.createElement("form");
    form.id = "disconnection";
    const div = document.createElement("div");
    const div_content = document.createTextNode(`Connected as ${login}`);
    const logout = document.createElement("button");
    form.appendChild(div);
    div.appendChild(div_content);
    form.appendChild(logout);
    logout.appendChild(document.createTextNode(`Disconnection`));
    const oldDiv = document.getElementById("connection");
    const parentDiv = oldDiv.parentNode;
    parentDiv.replaceChild(form, oldDiv);
})

document.getElementById("disconnection").addEventListener("submit",(e)=>{
    e.preventDefault();
    const form = document.createElement("form");
    form.id = "connection";
    const div = document.createElement("div");
    const label = document.createElement("label");
    const input = document.createElement("input");
    const div_content = document.createTextNode(`Login :`);
    form.appendChild(div);
    div.appendChild(label);
    div.appendChild(input);
    label.appendChild(div_content);
    const oldDiv = document.getElementById("disconnection");
    const parentDiv = oldDiv.parentNode;
    parentDiv.replaceChild(form, oldDiv);
})