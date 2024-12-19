import { useState, useEffect } from "react"
import { getItems } from "../service/Api"
import ItemList from "../components/item-list"

export default function Home (){
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        getItems().then((result) => {
            setItems(result.slice(0, 10));
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
            {<ItemList items={items} />}
        </>
    )
}