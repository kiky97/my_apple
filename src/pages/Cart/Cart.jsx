import React, { useContext, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Cart.css"
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalPrice } = useContext(StoreContext);
  const [promoCode, setPromoCode] = useState('')

  const { subtotal, deliveryFee, total } = useMemo(() => {
    const sub = food_list.reduce((sum, item) => {
      if (cartItems[item._id] > 0) {
        return sum + item.price * cartItems[item._id]
      }
      return sum
    }, 0)
    const delivery = sub > 0 ? 5 : 0
    return { subtotal: sub, deliveryFee: delivery, total: sub + delivery }
  }, [cartItems, food_list])

  return (
    <div className='cart'>
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
      </div>
      <br />
      <hr />
      {food_list.map((item) => {
        if (cartItems[item._id] > 0) {
          return (
            <div key={item._id}>
              <div className="cart-items-title cart-items-item">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${cartItems[item._id] * item.price}</p>
                <p onClick={() => removeFromCart(item._id)} className='cross'>X</p>
              </div>
              <hr />
            </div>
          )
        }
        return null
      })}
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="cart-total-details">
            <div className="cart-total-item">
              <p>Subtotal</p>
              <p>${getTotalPrice()}</p>
            </div>
            <div className="cart-total-item">
              <p>Delivery Fee</p>
              <p>${deliveryFee}</p>
            </div>
            <div className="cart-total-item cart-total-grand">
              <b>Total</b>
              <b>${getTotalPrice()+deliveryFee}</b>
            </div>
          </div>
          <div className="cart-promocode">
            <input
              type="text"
              placeholder="Promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button type="button" className="cart-promocode-submit">Submit</button>
          </div>
          <Link
            to="/order"
            className={`checkout-button${subtotal === 0 ? ' checkout-button-disabled' : ''}`}
            aria-disabled={subtotal === 0}
            onClick={(e) => subtotal === 0 && e.preventDefault()}
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart
