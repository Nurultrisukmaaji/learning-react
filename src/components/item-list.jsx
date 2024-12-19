export default function ItemList ({items}){
    if(!items.length) {
        return <p>no items available</p>
    }


    return items.map((item) => {
        return (
            // looping here
            <div className="wrap-div" key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
            </div>
        )
    });
    // return(
    //     <ul>
    //         {items.map((item) =>(
    //             <li key={item.id}>
    //                 <h3>{item.title}</h3>
    //                 <p>{item.body}</p>
    //             </li>
    //         ))}
    //     </ul>
    // )
}