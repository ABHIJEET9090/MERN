const token=JSON.parse(localStorage.getItem("token"));
const loginrlogout=document.getElementById("login_heading");
if(token){
    loginrlogout.innerText="LOg Out";
    loginrlogout.addEventListener("click",()=>{
        localStorage.removeItem("token");
        window.location.href="./login.html";
    });
}




