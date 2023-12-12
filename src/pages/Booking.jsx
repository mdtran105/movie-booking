import React from 'react';
import Cart from '../components/Cart';
import Seats from '../components/Seats';


export default function Booking() {
  return (
    <div className='container'>
      <div className="row gx-5">
        <Seats />
        <Cart />
      </div>
    </div>
  );
}