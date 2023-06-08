const data =[
    {
        image: "https://posterhouse.org/wp-content/uploads/2021/05/silence_of_the_lambs_0.jpg",
        title: "The silence of the lambs",
        rating: 5
    },
    {
        image: "https://www.designer-daily.com/wp-content/uploads/2012/12/lord-war-creative-movie-posters.jpg",
        title: "LORD of WAR",
        rating: 5
    },
    {
        image: "https://i2.wp.com/www.instantshift.com/assets/uploads/2008/12/cmp-01.jpg",
        title: "The BROKEN",
        rating: 5
    },
    {
        image: "https://www.boredart.com/wp-content/uploads/2015/01/famous-movie-posters-of-All-time-Hollywood-1.gif",
        title: "LOOPER",
        rating: 5
    },
    {
        image: "https://s.yimg.com/ny/api/res/1.2/ZzAHlDHi8a2xdBRRbruaYQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTkyOA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5",
        title: "MOONLIGHT",
        rating: 5
    },
    {
        image: "https://archive.org/services/img/MoviePosters",
        title: "AVATAR",
        rating: 5
    },
    
];
const movieBox = document.getElementById("showmovie");
//data.map((el)=>{
//    const div =document.createElement("div");
//    const image =document.createElement("img");
//})
//for(let i=0; i<data.length;i++){
//        const div =document.createElement("div");
//        const image =document.createElement("img");
//        image.src=data[i].image;
//        const movietitle =document.createElement("h1");
//        movietitle.innerText=data[i].title;
//        const rating =document.createElement("p");
//        rating.innerText=data[i].rating;
//        div.append(image,movietitle,rating);
//        movieBox.append(div);
//
//}
data.forEach((el) => {
    //const movieBox = document.getElementById("showmovie");
        const div =document.createElement("div");
        const image =document.createElement("img");
        image.src=el.image;
        const movietitle =document.createElement("h1");
        movietitle.innerText=el.title;
        const rating =document.createElement("p");
        rating.innerText=el.rating;
        const button =document.createElement("button");
        button.innerText="click movie";
        button.addEventListener("click", () =>{
            alert(`You clicked on ${el.title}`);
            

        });
        div.append(image,movietitle,rating,button);
        movieBox.append(div);
});

