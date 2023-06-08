const takename=document.getElementById("name");
const takenurl=document.getElementById("l");
const takedesc=document.getElementById("desc");
function recip(){
    if(takename.value !== "" && takenurl.value !== "" && takedesc.value !== ""){
        const obj1 ={
            dish:takename.value,
            link:takenurl.value,
            description:takedesc.value,
        };
        fetch("http://localhost:8080/myrecipe",{
    method:"POST",
    headers :{
        "Content-Type": "application/json"
    },
    body: JSON.stringify(obj1),
})
.then((res)=>res.json())
.then((data) => {console.log(data);
    alert("Details Saved");
})
    .catch((err) => console.log(err));
    
}
else{
    alert("Fill in all the fields");
}
window.location.href = "./hotel.html";
}
function cancel() {
    // Redirect to hotel.html
    window.location.href = "./hotel.html";
  }