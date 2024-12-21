export default function ItemListNew({items, type}){
    if(!items.length){
        <p>No Items Available</p>
    }

    return items.map((item) => {
        return (
            <div className="wrap-div" key={item.id}>
                {type === "post" && (
                    <>
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
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