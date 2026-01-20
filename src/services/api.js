const BASE_URL = "https://fakestoreapi.com/products";

export const getProducts = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const addProduct = async (product) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  return res.json();
};

export const updateProduct = async (id, product) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  return res.json();
};

export const deleteProduct = async (id) => {
  await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
};

export const getUsers = async () => {
  const res = await fetch("https://fakestoreapi.com/users");
  return res.json();
};
