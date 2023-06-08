document.addEventListener("DOMContentLoaded", displayDonorDetails);

function displayDonorDetails() {
    fetch("http://localhost:8080/donorData")
        .then((res) => res.json())
        .then((data) => {
            const donorTable = document.getElementById("donorTable");
            data.forEach((donor) => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${donor.id}</td>
                    <td>${donor.donorName}</td>
                    <td>${donor.donorAge}</td>
                    <td>${donor.bloodGroup}</td>
                `;
                donorTable.appendChild(row);
            });
        })
        .catch((err) => console.log(err));
}
function showText(){
    const button = document.getElementById("b1");
    button.addEventListener("click",()=> {
        alert("Contact No:6371909037,   Email: sahooabhijeet48@gmail.com");
    });
}
const token=JSON.parse(localStorage.getItem("token"));
const loginlogout=document.getElementById("login_heading");
if(token){
    loginlogout.innerText="Log Out";
    loginlogout.addEventListener("click",()=>{
        localStorage.removeItem("token");
        window.location.href="index.html";
    });
}