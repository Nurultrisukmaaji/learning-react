import { useState, useEffect } from "react";
import { getItems } from "../service/Api";
import ItemList from "../components/item-list";
import ItemListNew from "../components/item-list2";
import ShowHide from "../components/show-hide";
import { Button } from "react-bootstrap";

export default function Home (){
    const [posts, setPosts] = useState([]);
    const [comment, setComment] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isVisible, setIsVisible] = useState(true);
    const [isHide, setIsHide] = useState(false);


    // menampilkan data dari API
    useEffect(() =>{
        getItems("posts").then((result) => {
            setPosts(result.slice(0, 3)); 
        });

        getItems("comments").then((result) => {
            setComment(result.slice(0,3));
        });

        getItems("users").then((result) => {
            setUsers(result.slice(0,3));
        });

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

   function showCard(){
    setIsHide(!isHide);
   }

    return (
        <>
            <h1>Learning React with API</h1> <br /> 
            <Button variant="secondary" onClick={toggle} className="me-2">
                {isVisible ? "Hide Card Comments" : "Show Card Comments"}
            </Button>
            <Button onClick={showCard}>
                {isHide ? "Hide Users" : "Show Users"}
            </Button>

            <h1>Posts</h1>
            {<ItemList items={posts} type="post"/>}
            <br/>

            { isVisible && (
                <>
                    <h1>Comment</h1>
                    {<ItemList items={comment} type="comment"/>}
                    <br />
                </> 
            )}

            <h1>Posts Type</h1>
            {<ItemListNew items={posts} type="post"/>}
            <br />

            <h1>Comments Type</h1>
            {<ItemListNew items={comment} type="comment"/>}
            <br />

            {isHide && (
                <>
                    <h1>Users Type</h1>
                    {<ItemListNew items={users} type="user" />}
                </>
            )}
            
        </>
    )
}