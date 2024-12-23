import { useState, useEffect, useRef } from "react";
import SlideToggle from "./slide-toggle";

export default function ItemListNew({items, type}){
    if(!items.length){
        <p>No Items Available</p>
    }

    const [isVisible, setIsVisible] = useState([]);

    const toggleCard = (id) => {
        // setIsVisible(isVisible === id ? null : id);

        if(isVisible.includes(id)){
            setIsVisible(isVisible.filter((cardId) => cardId !== id));
        } else {
            setIsVisible([...isVisible, id]);
        }
    }

    return items.map((item) => {
        return (
            <div className="wrap-div" key={item.id}>
                {type === "post" && (
                    <>
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                        <br />
                        {isVisible.includes(item.id) &&  (
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Praesentium, architecto totam iure beatae nulla laudantium blanditiis, 
                                maxime eveniet incidunt minus quos consectetur ipsam distinctio 
                                illum ex officiis officia magnam nobis.
                            </p>
                        )}
                        <button onClick={() => toggleCard(item.id)}>
                            Read More
                        </button>
                    </>
                )}
                {type === "comment" && (
                    <>
                        <h2>{item.name}</h2>
                        <p>{item.email}</p>
                        <br />
                        {isVisible.includes(item.id) &&  (
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Praesentium, architecto totam iure beatae nulla laudantium blanditiis, 
                                maxime eveniet incidunt minus quos consectetur ipsam distinctio 
                                illum ex officiis officia magnam nobis.
                            </p>
                        )}
                        <button onClick={() => toggleCard(item.id)}>
                           {isVisible.includes(item.id) ? "Read Less" : "Read More"}
                        </button>
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