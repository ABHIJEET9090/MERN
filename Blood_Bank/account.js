const takenemail=document.getElementById("email");
const takenpass=document.getElementById("pass");
const takenname=document.getElementById("name");
 function submitData()
 {
    if(takenemail.value !=="" && takenpass.value!=="")
    {
        const obj=
        {
            id:Date.now(),
            name:takenname.value,
            email:takenemail.value,
            password:takenpass.value,
        };
        fetch("http://localhost:8080/myData",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(obj),
        })
        .then((res)=>res.json())
        .then((data)=>
        {
            console.log(data);
            alert("Account Created");
        })
        .catch((err)=> console.log(err));
    }
    else
    {
        alert("Fill in all the fields");
    }
    window.location.href="login.html";
 }