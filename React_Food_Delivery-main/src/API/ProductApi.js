import { api } from "./api";

// get listProduct API
const getListProductAPI = (params) => {
  let url = "product/" + params;
  return api("GET", url, null);
};

const getProductByIdAPI = (id) => {
  let url = "product/" + id;
  return api("GET", url, null);
};

const addProductNewAPI = (ProductNew) => {
  return api("POST", "product/", ProductNew);
};

const deleteProductAPI = (id) => {
  let url = "product/" + id;
  return api("DELETE", url, null);
};

const updateProductAPI = (productUpdate) => {
  let url = "product/" + productUpdate.id;
  return api("PUT", url, productUpdate);
};

export {
  getListProductAPI,
  getProductByIdAPI,
  addProductNewAPI,
  deleteProductAPI,
  updateProductAPI,
};
