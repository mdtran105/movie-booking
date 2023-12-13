import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from './seatSlice';

export default function Seats() {
  let dispatch = useDispatch()
  let handleAddCart = (seat) => {
    dispatch(addCart(seat))
  }
  let seatList = useSelector((state) => state.seatSlice.seatArr);
  let renderSeatList = () => {
    return seatList.map(seat => {
      return <tr key={seat.hang}>
        <td>{seat.hang}</td>
        {seat.danhSachGhe.map(item => <td>
          <input onChange={() => handleAddCart(item)}
          type="checkbox" className="ghe" 
          value={item.soGhe} disabled={item.daDat && 'disabled'} />
        </td>)}
      </tr>;
    });
  };
  return (
    <div className="col-8 seats">
      <div className="text-center">
        <p className='mb-1'>Màn hình</p>
        <div className="screen"></div>
      </div>
      <table id="seatsBlock" className='w-100 text-center'>
        <tbody>
          <tr>
            <td />
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
          </tr>
          {renderSeatList()}
        </tbody></table>

    </div>
  );
}