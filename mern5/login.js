const email = document.getElementById("email");
const pass= document.getElementById("password");
function handleLogin(){ 
    if(email.value === "abhijeet" && pass.value === "123"){
        alert("Logged In");
        localStorage.setItem("token",JSON.stringify(Date.now()));
        window.location.href = "/index.html";
    }
}