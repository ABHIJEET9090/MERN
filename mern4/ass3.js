const data=[
    {
        image:"https://media.istockphoto.com/id/494350327/photo/mutton-curry.jpg?s=612x612&w=0&k=20&c=hVHgWtkKFsQKorKVk30RabALq_09gJR0TsU4P0RZDfg=",
        title:"Meat mutton dish",
        description:"Mutton Curry is a one pot dish where mutton is marinated and cooked with plenty of spices, herbs, onions, tomatoes and yogurt. It is basically a curried dish popular in Indian Sub-continent. Indian Cuisine is diverse and every dish is made in a zillion ways. "
    },
    {
        image:"https://media.istockphoto.com/id/1185465221/photo/chilly-chicken.jpg?s=2048x2048&w=is&k=20&c=97Ua2coQq0XVWEZbM-Ng9-zEbOT1ict6eoPuo978nMY=",
        title:"Spicy indian Chilly Chicken",
        description:"Chilly chicken is a popular Indo-Chinese dish that is spicy and delicious. It is made by marinating chicken in a mixture of spices and sauces and then frying it until crispy. The dish is usually served with rice or noodles"
    },
    {
        image:"https://media.istockphoto.com/id/914008376/photo/indian-dish-of-spicy-hot-chicken-curry-in-red.jpg?s=2048x2048&w=is&k=20&c=r5dBJjXu1GWmEGikjZHcAe8Mw0rdyXJxKJkNjBL5zH4=",
        title:"Chicken",
        description:"Indian spicy chicken curry top view. Traditional kerala chicken curry two legs cooked in thick gravy with herbs and spices mint leaf. Side dish for appam puttu chapatti parota served in iron or copper bowl with dark black background"

    },
    {
        image:"https://media.istockphoto.com/id/609932720/photo/fish-fry-marinated-fried-fish-on-iron-skillet-griddle.jpg?s=2048x2048&w=is&k=20&c=IxHPubYVnri7Oqi2OJyO4rzmuvgS-Kl060q1jcQUVlc=",
        title:"Marinated fried fish ",
        description:"Marinated fried fish is a delicious dish that can be enjoyed as an appetizer or main course. There are many different recipes for marinated fried fish, but most involve marinating the fish in a mixture of spices and then frying it until crispy"
    },
    {
        image:"https://media.istockphoto.com/id/536381178/photo/crab-curry-in-coconut-milk.jpg?s=2048x2048&w=is&k=20&c=LFjmXoI4mWGLN_O-GoqTGTRbJre3-qL2ji-GUjPjW90=",
        title:"Crab Curry",
        description:"Crab curry in Thai infused red coconut curry sauce on dark moody background, selective focus"
    },
    {
        image:"https://media.istockphoto.com/id/1278396239/photo/delicious-chicken-biryani.jpg?s=2048x2048&w=is&k=20&c=g02pO2rHtFYEfkfpC0YnYNUrkjr5VH6VsZsRuJpuvt0=",
        title:"Chicken Biriyani",
        description:"Delicious and spicy home made chicken biryani in traditional bowl with raita and salad on black background"
    }
];
const dishes = document.getElementById("resturant");
data.forEach((el) =>{
        const div =document.createElement("div");
        const image =document.createElement("img");
        image.src=el.image;
        const dishtitle =document.createElement("h1");
        dishtitle.innerText=el.title;
        const desc =document.createElement("p");
        const button1 =document.createElement("button");
        button1.innerText="click for Description";
        button1.addEventListener("click", () =>{
            desc.innerText=el.description;
        });
        const button2 =document.createElement("button");
        button2.innerText="click for Hide";
        button2.addEventListener("click", () =>{
            desc.innerText="";
        });
        div.append(image,dishtitle,button1,button2,desc);
        dishes.append(div);

});