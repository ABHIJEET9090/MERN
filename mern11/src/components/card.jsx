import React from "react";
function Card({userId,body,title}){
    return (
        <div>
            <h1>{userId}</h1>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
}
export default Card;