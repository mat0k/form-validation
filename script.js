
function $(id) {
    return document.getElementById(id);
}

let myForm = $("my_form");
let inputName = $("name");
let msgName = $("msg_name");
let inputPassword = $("password");
let msgPwd = $("msg_pwd");
let inputReEnterPass= $("password2");
let msgRePwd= $("msg_pwd2")
let inputPhone= $("phone")
let msgPhone= $("msg_phone")
let inputEmail= $("email");
let msgEmail= $("msg_email");

let samePassword=false;

function checkName() {
    let pattern = /^[a-zA-Z]+\s?[a-zA-Z]*$/;
    let name = inputName.value;
    return pattern.test(name);
}

function checkPassword() {
    let pattern = /^[a-zA-Z]+\w*\d+\w*$/;
    let password = inputPassword.value;
    return pattern.test(password) && (password.length>8);
}

function checkConfirmPassword() {
    let reEntered= inputReEnterPass.value;
    let pass=inputPassword.value;
    if(reEntered===pass || pass!="")
        return true;
}

function checkEmail() {
    let email = inputEmail.value;
    let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
}

function checkPhone() {
    let phonNb= inputPhone.value;
    let pattern= /^\d{2}[- \/]?\d{6}$/;
    return pattern.test(phonNb) 
}

inputName.addEventListener("keyup",function(){
    let name=inputName.value;
    if(name=="" || checkName()){
        msgName.textContent="";
    }
    else if(!checkName()){
        msgName.textContent = "Invalid name";
        msgName.style.color = "red";
    }
});

inputPassword.addEventListener("keyup", function () {
    password = inputPassword.value;
    handlePass();
    if (password == "") {
        msgPwd.textContent = "";
    }
    else if (password.length < 8) {
        msgPwd.textContent = "Short";
        msgPwd.style.color = "red";
    }
    else if (checkPassword()) {
        msgPwd.textContent = "Strong";
        msgPwd.style.color = "green";
    }
    else {
        msgPwd.textContent = "Weak";
        msgPwd.style.color = "red";
    }
});


inputReEnterPass.addEventListener("keyup",handlePass);
function handlePass(){
    let reEntered= inputReEnterPass.value;
    let pass=inputPassword.value;
    if(pass=="" || reEntered==""){
        msgRePwd.textContent= "";
        samePassword=false;
    }
   else if(reEntered!=pass ){
        msgRePwd.textContent= "Mismatch";
        msgRePwd.style.color= "red";
        samePassword=false;
    }
    else if(reEntered==pass && pass!=""){
        msgRePwd.textContent= "Matching";
        msgRePwd.style.color= "green";
        samePassword=true;
    } 
};

inputPhone.addEventListener("keyup",function(){
    let phoneNb= inputPhone.value;
    if(phoneNb==""){
        msgPhone.textContent="";
    }
    else if(checkPhone()){
        msgPhone.textContent="Valid";
        msgPhone.style.color="green";
    }
    else{
        msgPhone.textContent="Invalid";
        msgPhone.style.color="red";
    }
});

inputEmail.addEventListener("keyup",function(){
    let email= inputEmail.value;
    if(email==""){
        msgEmail.textContent="";
    }
    else if (checkEmail()) {
        msgEmail.textContent = "Valid";
        msgEmail.style.color = "green";
    } else {
        msgEmail.textContent = "Invalid";
        msgEmail.style.color = "red";
    }
});

myForm.addEventListener("submit", function(event) {
    isFormValid = true;

    if(!checkName()) {
        isFormValid = false;
    }

    if(!checkPassword()) {
        isFormValid = false;
    }
    
    if(!samePassword){
        isFormValid= false;
    }

    if(!checkPhone()){
        isFormValid=false;
    }

    if(!checkEmail()){
        isFormValid=false;
    }



    if(!isFormValid) {
        event.preventDefault();
        
    }



})