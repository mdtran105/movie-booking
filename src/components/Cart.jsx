import React from 'react';

export default function Cart() {
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
          <tr>
            <td>A2</td>
            <td>30.000</td>
            <td><button className='btn text-danger'>X</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}