import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";

const Article = ({article}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return(<div className="articleDetails">
        <h3>{article.name}</h3>
        <p> $ {article.price}</p>
        <img className="artPicture" src={process.env.PUBLIC_URL + `/${article.img}.jpg`} alt="article"/>
        {/* <img className="artPicture" src={`./${article.img}.jpg`} alt="article"/> */}
        <br/>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
        <br/>
        <button onClick={() => {dispatch(addItemToCart({article, quantity}));
    }}>Add to cart</button>
    </div>)
}

export default Article;