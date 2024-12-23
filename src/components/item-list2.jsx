import { useState } from "react";

export default function ItemListNew({items, type}){
    if(!items.length){
        <p>No Items Available</p>
    }

    const [isVisible, setIsVisible] = useState(true)

    const toggleCard= () => {
        setIsVisible(!isVisible);
    }

    return items.map((item) => {
        return (
            <div className="wrap-div" key={item.id}>
                {type === "post" && (
                    <>
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                        <br />
                        {isVisible && (
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Praesentium, architecto totam iure beatae nulla laudantium blanditiis, 
                                maxime eveniet incidunt minus quos consectetur ipsam distinctio 
                                illum ex officiis officia magnam nobis.
                            </p>
                        )}
                        <button onClick={toggleCard}>
                            Read More
                        </button>
                    </>
                )}
                {type === "comment" && (
                    <>
                        <h2>{item.name}</h2>
                        <p>{item.email}</p>
                    </>
                )}
                {type === "user" && (
                    <>
                        <h2>{item.name}</h2>
                        <p>Username: {item.username}</p>      
                        <p>Email: {item.email}</p>      
                    </>
                )}
            </div>
        )
    }) 
}