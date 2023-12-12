import React from 'react';
import { useSelector } from 'react-redux';

export default function Cart() {
  let data = useSelector(state => state.seatSlice.cart)
  let renderCart = () => {
    return data.map(ticket => {
      return <tr key={ticket.soGhe}>
        <td>{ticket.soGhe}</td>
        <td>đ {ticket.gia.toLocaleString()}</td>
        <td><button className='btn text-danger'>X</button></td>
      </tr>
    })
  }
  return (
    <div className="col-4 cart">
      <h1>DANH SÁCH GHẾ BẠN CHỌN</h1>
      <table className='tableCart table table-bordered border-white align-middle'>
        <thead>
          <tr>
            <th className='text-white'>Số ghế</th>
            <th className='text-white'>Giá tiền</th>
            <th className='text-white'>Hủy</th>
          </tr>
        </thead>
        <tbody>
          {renderCart()}
        </tbody>
      </table>
    </div>
  );
}