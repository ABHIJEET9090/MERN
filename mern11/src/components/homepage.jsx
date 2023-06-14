import React from "react";
import Card from "./card";
import { useEffect,useState,useContext } from "react";
import Navbar from "./navbar";
import SearchContext from "../searchContext";
function HomePage(){
    const{search}=useContext(SearchContext);
   console.log(search);
    const [arr,setArr] = useState([]);
    const [wholearr,setWholeArr] = useState([]);
    const [searchStr,setSearchStr]= useState("");
    const pageArr = [];
    let i=1;
    while(i<= wholearr.length/10){
        pageArr.push(i);
        i++;
    }
    const [page,setPage] = useState(1);
    const getData = async() => {
            await fetch("https://jsonplaceholder.typicode.com/posts",{
              method: "GET"
            }).then((res)=>res.json()).then((data)=>{
              setWholeArr(data);
              const end=page*20;
              const start=page-1;
              const newData=data.slice(start*20,end);
              setArr(newData);
            });
          };
          useEffect(() => {
            getData();
          }, []);
          
    const handlePage=(el) =>{
        setPage(el);
    };
    useEffect(()=>{
        getData();
    },[page]);
    

    return (
        <div>
            <Navbar/>
            {arr.length>0 ? (
                <div
                style={{
                    display:"grid",
                    gridTemplateColumns:"repeat(3,1fr)",
                    marginTop:"5%",
                }}
                >
                    {arr.map((el) => {
                        return <Card userId={el.userId} title={el.title} body={el.body} />;
                    })}
                </div>
            ):(
                <h1>No Data Found</h1>
            )}
            {pageArr.map((el)=>{
                return <bottom onClick={() => handlePage(el)}>{el}</bottom>;
            })}
        </div>
    );
}
export default HomePage;