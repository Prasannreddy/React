import { useState } from "react";
import { addProduct } from "../services/api";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSave = async () => {
    await addProduct({
      title,
      price: 100,
      description: "Simple product",
      image: "https://i.pravatar.cc",
      category: "electronics",
    });

    navigate("/products");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Product</h2>

      <input
        placeholder="Product title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br/><br/>
      <input
        placeholder="useremail"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default AddProduct;
