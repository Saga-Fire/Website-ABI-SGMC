

document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    const customerList = [];
    let contact = "";
    const tbody = document.getElementById("newCustomer");
    const tr = document.createElement('tr');
    const td = [];
    const clientNumber = document.getElementById("clientNumber").value;
    const companyName = document.getElementById("companyName").value;
    const clientType = document.getElementById("clientType").value;
    const clientActivity = document.getElementById("clientActivity").value;
    const clientTurnover = document.getElementById("clientTurnover").value;
    const clientStaff = document.getElementById("clientStaff").value;
    const clientAdress = document.getElementById("clientAdress").value;
    const clientPhone = document.getElementById("clientPhone").value;
    const primaryNature = document.getElementById("primaryNature").value;
    const secondaryNature = document.getElementById("secondaryNature").value;
    const oldNature = document.getElementById("oldNature").value;
    const contact1 = document.getElementById("contact1").value;
    const contactPhone1 = document.getElementById("contactPhone1").value;
    const contactMail1 = document.getElementById("contactMail1").value;
    const contactDepartment1 = document.getElementById("contactDepartment1").value;
    const contact2 = document.getElementById("contact2").value;
    const contactPhone2 = document.getElementById("contactPhone2").value;
    const contactMail2 = document.getElementById("contactMail2").value;
    const contactDepartment2 = document.getElementById("contactDepartment2").value;
    const contact3 = document.getElementById("contact3").value;
    const contactPhone3 = document.getElementById("contactPhone3").value;
    const contactMail3 = document.getElementById("contactMail3").value;
    const contactDepartment3 = document.getElementById("contactDepartment3").value;
    const comercialComments = document.getElementById("comercialComments").value;

    if (contactDepartment1) {
        contact += `Contact 1 : ${contact1}, Phone : ${contactPhone1}, Mail : ${contactMail1}, Departement : ${contactDepartment1}`;
    } else {
        contact += `Contact 1 : ${contact1}, Phone : ${contactPhone1}, Mail : ${contactMail1}`;
    };
    if (contact2) {
        if (contactDepartment2) {
            contact += `<br>Contact 2 : ${contact2}, Phone : ${contactPhone2}, Mail : ${contactMail2}, Departement : ${contactDepartment2}`;
        } else {
            contact += `<br>Contact 2 : ${contact2}, Phone : ${contactPhone2}, Mail : ${contactMail2}`;
        };
        if (contact3) {
            if (contactDepartment3) {
                contact += `<br>Contact 3 : ${contact3}, Phone : ${contactPhone3}, Mail : ${contactMail3}, Departement : ${contactDepartment3}`;
            } else {
                contact += `<br>Contact 3 : ${contact3}, Phone : ${contactPhone3}, Mail : ${contactMail3}`;
            };
        };
    };
    
    customerList.push({
        companyName,
        clientNumber,
        clientType,
        clientActivity,
        clientTurnover,
        clientStaff,
        clientAdress,
        clientPhone,
        contact,
        comercialComments
    });

    tbody.appendChild(tr);
    for (let i = 0; i < 10; i++) {
        td[i] = document.createElement('td');
        tr.appendChild(td[i]);
    };

    const customerListJson = JSON.stringify(customerList);
    sessionStorage.setItem('clients', customerListJson);

    const testJson = sessionStorage.getItem('client');
    const test = JSON.parse(testJson);

    sessionStorage.setItem('company', customerList[0].companyName);
    const test2 = sessionStorage.getItem('company');

    td[0].innerHTML = customerList[0].companyName;
    td[1].innerHTML = customerList[0].clientNumber;
    td[2].innerHTML = customerList[0].clientType;
    td[3].innerHTML = customerList[0].clientActivity;
    td[4].innerHTML = customerList[0].clientTurnover;
    td[5].innerHTML = customerList[0].clientStaff;
    td[6].innerHTML = customerList[0].clientAdress;
    td[7].innerHTML = customerList[0].clientPhone;
    td[8].innerHTML = customerList[0].contact;
    td[9].innerHTML = customerList[0].comercialComments;

    console.log(customerList);
    console.log(test);
    console.log(test2);
})

