import React from 'react'
function Header(props) {
    console.warn(props.data)
    return (
        <div>
            <div className="add-to-cart">
                <span className="cart-count">{props.data.length}</span>
                    <img src="https://www.pngkit.com/png/detail/829-8299026_cart-png-photos-shopping-cart-icon-png.png" alt="image"  />
            </div>
        </div>
    )
}

export default Header