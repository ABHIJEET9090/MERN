//fetch("http://localhost:8080/myData",{
//    method:'GET',
//}).then((response)=>response.json())
//    .then((data)=>console.log(data));
//
//function renderData(data){
//    console.log(data);
//}

//const button=document.getElementById("mybutton");
const takenemail=document.getElementById("email");
const takenpassword=document.getElementById("password");
function submitData(){
    if(takenemail.valeu !== "" && takenpassword.value !== ""){
        const obj ={
            id:Date.now(),
            email:takenemail.value,
            password:takenpassword.value,
        };
        fetch("http://localhost:8080/myData",{
    method:"POST",
    headers :{
        "Content-Type": "application/json"
    },
    body: JSON.stringify(obj),
})
.then((res)=>res.json())
.then((data) => {console.log(data);
    alert("Created Account");
})
    .catch((err) => console.log(err));
    
}
else{
    alert("Fill in all the fields");
}
window.location.href = "./login.html";
}
function cancel() {
    // Redirect to hotel.html
    window.location.href = "./login.html";
  }



// const button = document.getElementById("mybutton");
// const email = document.getElementById("email");
// const name = document.getElementById("name");
// const number = document.getElementById("number");
// const password = document.getElementById("password");

// button.addEventListener("click", () => {
//     fetch("http://localhost:8080/myData", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             email: email.value,
//             name: name.value,
//             number: number.value,
//             password: password.value,
//         }),
//     })
//         .then((response) => response.json())
//         .then((data) => console.log(data))
//         .catch((error) => console.error(error));
// });

