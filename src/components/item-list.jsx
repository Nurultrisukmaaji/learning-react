export default function ItemList ({items}){
    if(!items.length) {
        return <p>no items available</p>
    }

    return items.map((item) => {
        return (
            // looping here
            <div className="wrap-div" key={item.id}>

                {item.title ? (
                    <>
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                    </>
                ) : (
                    <>
                        <h2>{item.name}</h2>
                        <p>{item.email}</p>
                    </>
                )}
              
            </div>
        )
    });
}