import articlesData from "../../data/articlesData";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem}) => {
    const articles = articlesData.find(item => item.id === cartItem.articleId);
    const dispatch = useDispatch();

    return (<div className="cart">
        <p>{articles.name}</p>
        <p>{cartItem.quantity} item(s)</p>
        <img src={`./${articles.img}.jpg`} alt="smallArticle" width="100px"/>
        <p>$ {articles.price * cartItem.quantity}</p>
        <span onClick={() => dispatch(removeItemFromCart({
            cartItemId: cartItem.id}))}>
        <img className="binIcon" src="https://img.icons8.com/sf-regular/48/undefined/delete.png" alt="bin"/>
        </span>
    </div>)
}

export default CartItem;