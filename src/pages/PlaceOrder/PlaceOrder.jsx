import "./PlaceOrder.css"
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {
  const { getTotalPrice } = useContext(StoreContext);
  const subtotal = getTotalPrice()
  const deliveryFee = subtotal > 0 ? 5 : 0
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="text" placeholder='Email Address' />
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
    
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone Number' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="cart-total-details">
            <div className="cart-total-item">
              <p>Subtotal</p>
              <p>${subtotal}</p>
            </div>
            <div className="cart-total-item">
              <p>Delivery Fee</p>
              <p>${deliveryFee}</p>
            </div>
            <div className="cart-total-item cart-total-grand">
              <b>Total</b>
              <b>${subtotal + deliveryFee}</b>
            </div>
          </div>
          <button type="submit">Place Order</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
