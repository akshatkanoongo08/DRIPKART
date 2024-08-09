import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import "../Admin.page/Admin.css"
import { Addproduct } from '../../Redux/action/AddProduct.action';
import { Alert } from 'antd';
const CreateProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  // console.log("immmmmmmm".imagesUrl)
  const {isLoading,Data,error}=useSelector((state)=>state.addproducts);
  const dispatch=useDispatch();

  const handleSubmit= async (e)=>{
    e.preventDefault();
    console.log(e.target);
    dispatch(Addproduct(name,description,price,category,imageUrl));
   
}
  return (
    <div className="Add-restaurant">
    <h2>Add Product</h2>
    {/* {loading && <p>Loading...</p>}
    {error && <p style={{ color: 'red' }}>{error}</p>}
    {success && <p style={{ color: 'green' }}>Restaurant added successfully</p>} */}
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
    
      <div className="form-group">
        <label>Price</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>



      <div className="form-group">
        <label>Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Image URL</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <button type="submit">Add Product</button>
    </form>
  </div>
  )
}

export default CreateProduct