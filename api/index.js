import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000',
})
function fetchProducts() {
  return instance.get(`/products`)
}
function fetchProductId(productId) {
  return instance.get(`/products/${productId}`)
}
function fetchProductByKeyword(keyword) {
  return instance.get(`/products`, {
    params: {
      name_like: keyword,
    },
  })
}
function createCartItem(cartItem) {
  return instance.post('/carts', cartItem)
}
export { fetchProducts, fetchProductId, fetchProductByKeyword, createCartItem }
