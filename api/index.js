import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000',
})
async function fetchProductId(productId) {
  return await instance.get(`/products/${productId}`)
}

export { fetchProductId }
