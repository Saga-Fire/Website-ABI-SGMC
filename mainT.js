document.querySelector("#connection").addEventListener("submit",(e)=>{
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
    const oldDiv = document.querySelector("#connection");
    const parentDiv = oldDiv.parentNode;
    parentDiv.replaceChild(form, oldDiv);

    document.querySelector("#disconnection").addEventListener("submit",(e)=>{
        e.preventDefault();
        const form = document.createElement("form");
        form.id = "connection";
        const div = document.createElement("div");
        const div2 = document.createElement("div");
        const label = document.createElement("label");
        const div_content = document.createTextNode(`Login : `);
        const label2 = document.createElement("label");
        const div_content2 = document.createTextNode(`Password : `);
        const input = document.createElement("input");
        input.type = "text";
        input.id = "login";
        input.size = "15";
        input.maxLength = "30";
        const input2 = document.createElement("input");
        input2.type = "password";
        input2.id = "password";
        input2.size = "15";
        input2.maxLength = "30";
        const submit = document.createElement("input");
        submit.type = "submit";
        submit.value = "Connection"
        form.appendChild(div);
        div.appendChild(label);
        label.appendChild(div_content);
        div.appendChild(input);
        form.appendChild(div2);
        div2.appendChild(label2);
        label2.appendChild(div_content2);
        div2.appendChild(input2);
        form.appendChild(submit);
        const oldDiv = document.querySelector("#disconnection");
        const parentDiv = oldDiv.parentNode;
        parentDiv.replaceChild(form, oldDiv);
    })
})

