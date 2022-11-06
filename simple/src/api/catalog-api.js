import { axios } from "../services/axios";

export function getProducts() {
  return axios.get('/products/')
}

export function getProduct(productId = '') {
 return axios.get(`/products/${productId}`)
}