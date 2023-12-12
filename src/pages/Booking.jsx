import React from 'react';
import Cart from '../components/Cart';
import Seats from '../components/Seats';


export default function Booking() {
  return (
    <div className='container'>
      <h1 className='mb-4'>Đặt vé xem phim Cyberlearn.vn</h1>
      <div className="row gx-5">
        <Seats />
        <Cart />
      </div>
    </div>
  );
}



