// TODO: create a component that displays a single bakery item
export default function BakeryItem(props) {
    const item = props.item;

    return  (
        <div className="BakeryItem">
            <img src={item.image}/>
            <div className="description">
                <div className="name">
                    {item.name}
                </div>
                <div className="desc">
                    {item.description}
                </div>
                <div className="price">
                    {item.price}
                </div>
                <div className="add">
                    <button className="button" onClick={() => 
                        {props.updateCart(item.name, item.price)}}>
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}