// fetch("http://localhost:8080/myrecipe", {
//   method: 'GET',
// })
//   .then((response) => response.json())
//   .then((data) => {
//     const dishes = document.getElementById("hotel"); // Fixed the element ID selector

//     data.myrecipe.forEach((el) => {
//       const div = document.createElement("div");
//       const image = document.createElement("img");
//       image.src = el.link;
//       const dishtitle = document.createElement("h1");
//       dishtitle.innerText = el.dish;
//       const desc = document.createElement("p");
//       const button1 = document.createElement("button");
//       button1.innerText = "Click for Description";
//       button1.addEventListener("click", () => {
//         desc.innerText = el.description;
//       });
//       const button2 = document.createElement("button");
//       button2.innerText = "Click for Hide";
//       button2.addEventListener("click", () => {
//         desc.innerText = "";
//       });
//       div.append(image, dishtitle, button1, button2, desc);
//       dishes.append(div);
//     });
//   })
//   .catch((error) => {
//     console.log("Error fetching recipe data:", error);
//   });


// function renderData(data){
//    console.log(data);
// }

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const myrecipe = data.myrecipe;
    const dishesContainer = document.getElementById("hotel");

    myrecipe.forEach((recipe) => {
      const div = document.createElement("div");
      const image = document.createElement("img");
      image.src = recipe.link;
      const dishTitle = document.createElement("h1");
      dishTitle.innerText = recipe.dish;
      const desc = document.createElement("p");
      desc.innerText = recipe.description;
      const button1 =document.createElement("button");
        button1.innerText="show Description";
        button1.addEventListener("click", () =>{
            desc.innerText=recipe.description;
            localStorage.setItem("id",JSON.stringify(recipe.id));
        });
        const button2 =document.createElement("button");
        button2.innerText="click for Hide";
        button2.addEventListener("click", () =>{
            desc.innerText="";
        });
      const updatebutton = document.createElement("button");
      updatebutton.innerText= "UPDATE";
      updatebutton.addEventListener("click",() => {
        const updatetitle = prompt("");
        const newobj = {
          dish : updatetitle,
          link: recipe.link,
          description: recipe.description,
        };
        fetch(`http://localhost:8080/myrecipe/${recipe.id}`, {
          method: "PUT",
          headers :{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newobj),
        })
        .then((res) => {
          alert("updated title suscessfully");
        }) 
        .catch((err) => {
          alert("error occured while updating"+err);
        });
      });
      const deletebutton = document.createElement("button");
      deletebutton.innerText= "DELETE";
      deletebutton.addEventListener("click", () => {
        fetch(`http://localhost:8080/myrecipe/${recipe.id}`, {
          method: "DELETE",
          
        })
        .then((res) => {
          alert("Deleted the item");
        }) 
        .catch((err) => {
          alert("error occured while deleting"+err);
        });
      });
      // const showDetails=document.createElement("button");
      //   showDetails.innerText="Show Details";
      //   showDetails.addEventListener("click",()=>
      //   {
      //       localStorage.setItem("id",JSON.stringify(el.id));
      //   })
      div.append(image, dishTitle, desc,button1,button2,updatebutton,deletebutton);
      dishesContainer.append(div);
    });
  })
  .catch((error) => {
    console.error("Error fetching recipe data:", error);
  });

