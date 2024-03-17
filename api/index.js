import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000',
})
function fetchProducts() {
  return http.get(`/products`)
}
function fetchProductId(productId) {
  return http.get(`/products/${productId}`)
}
function fetchProductByKeyword(keyword) {
  return http.get(`/products`, {
    params: {
      name_like: keyword,
    },
  })
}
function createCartItem(cartItem) {
  return http.post('/carts', cartItem)
}
function fetchCartItems() {
  return http.get('/carts')
}
export {
  fetchProducts,
  fetchProductId,
  fetchProductByKeyword,
  createCartItem,
  fetchCartItems,
}
