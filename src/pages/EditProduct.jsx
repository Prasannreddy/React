import { useState } from "react";
import { updateProduct } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleUpdate = async () => {
    await updateProduct(id, { title });
    navigate("/products");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Product</h2>

      <input
        placeholder="New Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default EditProduct;
