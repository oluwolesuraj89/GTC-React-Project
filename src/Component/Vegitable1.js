import React from 'react'
import Rice from '../images/Rice.jpg';
import ChoppingCart from '../images/ChoppingCart.png';


 const Vegitable1= () => {
  return (
    <div className='Section1'>
        <div>
            <img src={Rice} alt='Bag of rice' id='BagOfRic'/>
        </div>
        <div className='ewedusection'>
            <h1>Ewedu</h1>
            <h4>N12,000 <small>25kg bag</small></h4>
            <div>
              <h5>Discription</h5>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae</p>
            </div>
            <div>
              <div>
                <button className='add'> + </button>
                <button className='subtract'> - </button>
                <div>
                  <button><span><img src={ChoppingCart} className="Chop" alt="ChoppingCart"/></span>Cart</button>
                </div>
              </div>
            </div>
        </div>
        

        
    </div>
  )
}

export default Vegitable1