import React, {Component} from 'react';
import Nav from './Nav';
import Vegitable1 from './Vegitable1'
import Rice from '../images/Rice.jpg';
import ChoppingCart from '../images/ChoppingCart.png';
// import NavStyle from './NavStyle.css';


 function ProductsDisplay () {
    return(
        <div className="Container">
            <Nav/>
            <Vegitable1/>
            {/* <div className='Section1'>
                <div>
                    <img src='' alt=''/>
                </div>
                <div>
                    <h1>Ewedu</h1>
                </div>
                <h4>N12,000 <small>25kg bag</small></h4>
        
            </div>  */}

         </div>
         
    ) 
}

export default ProductsDisplay 