import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return (<div>
        <img src="https://img.icons8.com/fluency-systems-regular/48/null/shopping-cart.png" alt="shoppingCart" width="30px"/>
        <h3>TOTAL: ${totalPrice}</h3>
        {cartItems.map(cartItem => <CartItem cartItem={cartItem}/>)}
    </div>)
}

export default Cart;