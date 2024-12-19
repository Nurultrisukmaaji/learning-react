export default function ItemList ({items}){
    if(!items.length) {
        return <p>no items available</p>
    }

    return(
        <ul>
            {items.map((item) =>(
                <li key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                </li>
            ))}
        </ul>
    )
}