const email = document.getElementById("email");
const pass = document.getElementById("password");

function findUser() {
  fetch("http://localhost:8080/myData", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const user = data.find(
        (el) => el.email === email.value && el.password === pass.value
      );
      console.log(user);
      if (user) {
        alert("Logged in Successfully");
      } else {
        window.location.href = "./index.html";
      }
      window.location.href = "./recipe.html";
    });
  console.log(data);
  
}