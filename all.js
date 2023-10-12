const register = document.querySelector("#register");
const loginContent = document.querySelector(".login-content");
const registerContent = document.querySelector(".register-content");
const login2 = document.querySelector("#login2");
const login = document.querySelector("#login");
const register2 = document.querySelector("#register2");

register.addEventListener("click",function(e){
    e.preventDefault();
    loginContent.classList.toggle('none');
    registerContent.classList.toggle('none');
})
register2.addEventListener("click",function(e){
    e.preventDefault();
    alert("註冊成功");
})
login.addEventListener("click",function(e){
    e.preventDefault();
    alert("登入成功");
})
login2.addEventListener("click",function(e){
    e.preventDefault();
    loginContent.classList.toggle('none');
    registerContent.classList.toggle('none');
})
