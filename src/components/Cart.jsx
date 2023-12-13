import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTicket } from './seatSlice';

export default function Cart() {
  let dispatch = useDispatch();
  let handleRemoveBtn = (seat) => {
    dispatch(removeTicket(seat));
  }
  let data = useSelector(state => state.seatSlice.cart)
  let renderCart = () => {
    return data.map(ticket => {
      return <tr key={ticket.soGhe}>
        <td>{ticket.soGhe}</td>
        <td>đ {ticket.gia.toLocaleString()}</td>
        <td><button onClick={() => handleRemoveBtn(ticket.soGhe)} className='btn text-danger'>X</button></td>
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