import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let total = 0
    let shipping = 0
    for (const item of cart) {
        total = total + item.price
        shipping = shipping + item.shipping
    }
    const tax = total * 10 / 100
    const grand = total + shipping + tax

    return (
        <div className='cart'>
            <h5>
                Product Summary
            </h5>
            <div className='cart-details'>
                <p>
                    Selected Item: {cart.length}
                </p>
                <p>
                    Total Price: ${total}
                </p>
                <p>
                    Total Shipping Charge; ${shipping}
                </p>
                <p>
                    Tax: ${tax}
                </p>
                <p>
                    Grand Total: ${grand.toFixed(2)}
                </p>
            </div>
            <div className='cart-button'>
                <button>
                    <p>
                        Clear Cart
                    </p>
                </button>
                <button>
                    <p>
                        Review Order
                    </p>
                </button>
            </div>
        </div>
    );
};

export default Cart;