import { useState, useEffect } from "react"
import { getItems } from "../service/Api"
import ItemList from "../components/item-list"

export default function Home (){
    const [posts, setPosts] = useState([]);
    const [comment, setComment] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        getItems("posts").then((result) => {
            setPosts(result.slice(0, 5));
        })

        getItems("comments").then((result) => {
            setComment(result.slice(0,5));
        })

        // with loading
        // const loadItems = async () => {
        //     try {
        //         const data = await getItems();
        //         setItems(data.slice(0, 10)); //ambil 10 item pertama
        //     } catch (error) {
        //         console.error("Failed get items");
        //     } finally {
        //         setLoading(false)
        //     }
        // };

        // loadItems();
    }, []);

    return (
        <>
            <h1>Learning React with API</h1> <br />

            <h1>Posts</h1>
            {<ItemList items={posts} />}
            <br/>
            <h1>Comment</h1>
            {<ItemList items={comment} />}
        </>
    )
}