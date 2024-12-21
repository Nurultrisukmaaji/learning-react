import { useState, useEffect } from "react"
import { getItems } from "../service/Api"
import ItemList from "../components/item-list"
import ShowHide from "../components/show-hide";

export default function Home (){
    const [posts, setPosts] = useState([]);
    const [comment, setComment] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isVisible, setIsVisible] = useState(true);


    // menampilkan data dari API
    useEffect(() =>{
        getItems("posts").then((result) => {
            setPosts(result.slice(0, 3)); 
        })

        getItems("comments").then((result) => {
            setComment(result.slice(0,3));
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

   function toggle(){
    setIsVisible(!isVisible); // ubah nilai state
   }

    return (
        <>
            <h1>Learning React with API</h1> <br />
            <button onClick={toggle}>
                {isVisible ? "Hide Card Comments" : "Show Card Comments"}
            </button>

            <h1>Posts</h1>
            {<ItemList items={posts} />}
            <br/>

            { isVisible && (
                <>
                    <h1>Comment</h1>
                    {<ItemList items={comment} />}
                </> 
            )}
            <ShowHide />
        </>
    )
}