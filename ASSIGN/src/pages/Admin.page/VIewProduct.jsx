import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { homedata } from '../../Redux/action/GetProduct.action';
import "./Admin.css"
import { useNavigate } from 'react-router-dom';
import { DeleteProduct } from '../../Redux/action/DeleteProduct.action';
const VIewProduct = () => {
  const dispatch = useDispatch();
  const navi = useNavigate();
  // const { isLoading, getdata, error } = useSelector((state) => state.home);
  // const {isLoding,erro}=useSelector((state)=>state.deleteproducts)
  const {isLoading,data: data , error}=useSelector((state)=>state.home)
  console.log(">>>>>>", data);

  const handleDelete = async (id) => {
    await dispatch(DeleteProduct(id));
    dispatch(homedata()); // Re-fetch the data after deletion
  };



  useEffect(() => {
    dispatch(homedata());
  }, [dispatch]);

  const handelEdit = (id) => {
    navi(`/update/${id}`);
  };

  // const handleAddMenu = (id) => {
  //   navi(/admin/menuadd/${id});
  // };

  return (
    
    <>
    <div className="show-productss">
        <h2>Products</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>category</th>
                <th>price</th>
                <th>description</th>
              </tr>
            </thead>
            <tbody>
              {data.map((products) => (
                <tr key={products._id}>
                  <td>{products.name}</td>
                  <td>{products.category}</td>
                  <td>{products.price}</td>
                  <td>{products.description}</td>
        

                  <td>
                    <img
                      src={products.imageUrl}
                      alt={products.name}
                      width="100"
                    />
                    <div className="btn">


                    <button onClick={() => handelEdit(products._id)}>
                    <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button onClick={() => handleDelete(products._id)}>
                    <i class="fa-solid fa-trash"></i>
                    </button>
                    
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
    
  )
}

export default VIewProduct