import React from "react";
import { Table } from "react-bootstrap";
//redux
import { useSelector,useDispatch } from "react-redux";
import {clearAllCart } from '../redux/actions/cartAction'
const CartPage = () => {
  const cart = useSelector((state) => state.cartReducer.cart);
  const total = useSelector((state) => state.cartReducer.total);
  const dispatch = useDispatch();
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12">
          <h2>Cart Sum {total}</h2>
          <button className="btn btn-danger btn-sm m-3" onClick={() => {
            dispatch(clearAllCart());
          }}>
            Clear Product All
          </button>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>id</th>
                <th>Product Code</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>product Number</th>
                <th>Sum</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.qty}</td>
                    <td>{item.qty * item.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
