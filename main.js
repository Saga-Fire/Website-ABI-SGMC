

document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();
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
    const contact2 = document.getElementById("contact2").value;
    const contact3 = document.getElementById("contact3").value;
    const contactPhone1 = document.getElementById("contactPhone1").value;
    const contactPhone2 = document.getElementById("contactPhone2").value;
    const contactPhone3 = document.getElementById("contactPhone3").value;
    const contactMail1 = document.getElementById("contactMail1").value;
    const contactMail2 = document.getElementById("contactMail2").value;
    const contactMail3 = document.getElementById("contactMail3").value;
    const contactDepartment1 = document.getElementById("contactDepartment1").value;
    const contactDepartment2 = document.getElementById("contactDepartment2").value;
    const contactDepartment3 = document.getElementById("contactDepartment3").value;

    console.log(clientNumber);
    console.log(companyName);
    console.log(clientType);
    console.log(clientActivity);
    console.log(clientTurnover);
    console.log(clientStaff);
    console.log(clientAdress);
    console.log(clientPhone);
    console.log(primaryNature);
    console.log(secondaryNature);
    console.log(oldNature);
    console.log(contact1);
    console.log(contact2);
    console.log(contact3);
    console.log(contactPhone1);
    console.log(contactPhone2);
    console.log(contactPhone3);
    console.log(contactMail1);
    console.log(contactMail2);
    console.log(contactMail3);
    console.log(contactDepartment1);
    console.log(contactDepartment2);
    console.log(contactDepartment3);
})

