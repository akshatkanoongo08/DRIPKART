// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import "../Admin.page/Admin.css"
// // import { UpdateRes } from "../../../redux/action/UpdateRes.action";
// import { UpdateRes } from "../../Redux/action/UpdateProduct.action";
// import { useParams } from "react-router-dom";

// const ProductUpdate = ({setViewW}) => {
//   const dispatch = useDispatch();
//   let { id } = useParams();
// //   const { isLoading, data, error } = useSelector((state) => state.updaterestro);
// const {isLoading,data,error}=useSelector((state)=>state.updateProd)

  
// // console.log(data)
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [category, setCategory] = useState("");
//   const [imageUrl, setImageUrl] = useState("");

// //   Populate form fields when data changes
//   useEffect(() => {
//     if (data) {
//       setName(data.name);
//       setDescription(data.description);
//       setPrice(data.price);
//       setCategory(data.category);
      
//       setImageUrl(data.imageUrl);
//     }
//   }, [data]);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     dispatch(
//       UpdateRes(id, name, description, price,imageUrl)
//     );
//     // Optionally, navigate to view page after update
//     setViewW("view");
//   };

//   return (
//     <div className="update-product">
//       <h2>Update Product</h2>

//       <form onSubmit={submitHandler}>
//         <div>
//           <label>Name</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Description</label>
//           <input
//             type="text"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Price</label>
//           <input
//             type="text"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Category</label>
//           <input
//             type="text"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Image URL</label>
//           <input
//             type="text"
//             value={imageUrl}
//             onChange={(e) => setImageUrl(e.target.value)}
//           />
//         </div>
//         <div>
        
//         </div>
//         <button type="submit"> "Update"</button>
//         {/* {error && <p style={{ color: "red" }}>{err</p>} */}
//       </form>
//     </div>
//   );
// };

// export default ProductUpdate;



import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Admin.page/Admin.css";
import { UpdateRes } from "../../Redux/action/UpdateProduct.action";
import { useParams } from "react-router-dom";

  const ProductUpdate = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  console.log("{{{{{{{{{{{{",id)
  const { isLoading, data, error } = useSelector((state) => state.updateProd);
  console.log("::::::::::::::",data)

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // Populate form fields when data changes
  useEffect(() => {
    if (data) {
      setName(data.name || "");
      setDescription(data.description || "");
      setPrice(data.price || "");
      setCategory(data.category || "");
      setImageUrl(data.imageUrl || "");
    }
  }, [data]);

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(UpdateRes(id, name, description, price, category, imageUrl));
    // setViewW("view");
  };

  return (
    <div className="update-product">
      <h2>Update Product</h2>

      <form onSubmit={submitHandler}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={handleInputChange(setName)}
            placeholder="Enter product name"
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={handleInputChange(setDescription)}
            placeholder="Enter product description"
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="text"
            value={price}
            onChange={handleInputChange(setPrice)}
            placeholder="Enter product price"
          />
        </div>
        <div>
          <label>Category</label>
          <input
            type="text"
            value={category}
            onChange={handleInputChange(setCategory)}
            placeholder="Enter product category"
          />
        </div>
        <div>
          <label>Image URL</label>
          <input
            type="text"
            value={imageUrl}
            onChange={handleInputChange(setImageUrl)}
            placeholder="Enter image URL"
          />
        </div>
        <button type="submit">{isLoading ? "Updating..." : "Update"}</button>
        {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
      </form>
    </div>
  );
};

export default ProductUpdate;
