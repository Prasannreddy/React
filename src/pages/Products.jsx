import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../services/api";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]); 
  const navigate = useNavigate();

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  const handleDelete = async (id) => {
    await deleteProduct(id);
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Products</h2>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button onClick={() => navigate("/add")}>Add Product</button>
      </div>

      <div className="card-container">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <p>₹ {product.price}</p>

            <div className="card-buttons">
              <button onClick={() => navigate(`/edit/${product.id}`)}>
                Edit
              </button>
              <button onClick={() => handleDelete(product.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
