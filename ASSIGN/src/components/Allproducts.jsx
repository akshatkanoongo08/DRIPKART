import { useState, useEffect } from "react";
import axios from "axios";
import StarRatings from "react-star-ratings";
//  import "./scss/main.scss";  
import { useNavigate } from "react-router-dom";

const Allproducts = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
console.log(">>>>>>,",products)
  useEffect(() => {
    // Fetch all products
    // axios.get("http://localhost:5000/api/v1/products/allproducts")
    //   .then((res) => setProducts(res.data))
    //   .catch((error) => console.error("Error fetching products", error));
      
    // Check if the user is an admin
    const checkAdminStatus = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log("Token:", token);
        if (token) {
          const response = await axios.get("http://localhost:5000/api/v1/user/me", {
            headers: { Authorization: `Bearer ${token}` }
          });
          console.log("Admin Status Response:", response.data);
          
          if(response?.data?._id){
            setIsAdmin(true);
          }else{
            navigate("/homepage")
          }
        }else{
          navigate('/homepage')
        }
      } catch (error) {
        console.error("Error checking admin status", error);
        navigate('/homepage')

      }
    };

    checkAdminStatus();
  }, [navigate]);
  const Truncate = (string, number) => {
    if (!string) {
      return null;
    }
    if (string.length <= number) {
      return string;
    }
    return string.slice(0, number) + "...";
  };

  return (
    <>
      <section className="product">
        <div className="container">
          {/* {isAdmin && (
            <button className="add-product-button">Add Product</button>
          )} */}
          <div className="grid">
            {products.map((item) => (
              <div className="card" key={item.id}>
                <img
                  className="card-image"
                  src={item.imageUrl}
                  alt={item.title}
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    title={item.title.length >= 50 ? product.title : null}
                  >
                    {Truncate(item.title, 55)}
                  </h5>
                  <p className="card-description">
                    {Truncate(item.description, 55)}
                  </p>
                  <p className="card-price">${item.price}</p>
                  <div className="card-detail">
                    <StarRatings
                      rating={item.rating.rate}
                      starDimension="16px"
                      starSpacing="1px"
                      starRatedColor="black"
                    />
                    <span>Stock: {item.rating.count}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Allproducts;
