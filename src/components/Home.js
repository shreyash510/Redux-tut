import React from 'react'

const Home = () => {
  return (
    // <h1>Home components</h1>
    <>
    <div className="cart relative">
        <img className='absolute w-[5em] right-10' src="https://toppng.com/uploads/preview/shopping-cart-11530997216xsrc2jr32q.png"/>
    </div>
    <div className='wrapper text-center flex border w-[fit-content] flex-col' >
    <div className="image">
        <img className='w-[10em]' src="https://clipart.info/images/ccovers/1505918651the-iphone-x-ten-10-png.png"   />
    </div>
    <div className="">
        <p className='text-2xl font-bold'>I-Phone</p>
        <p className=''>Price: $1000.00</p>
    </div>
    <div>
        <button style={{backgroundColor:'purple', color:'white'}} className="p-3 border rounded">Add to Cart</button>
    </div>
    </div>
    </>
  )
}

export default Home