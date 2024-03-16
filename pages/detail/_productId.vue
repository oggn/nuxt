<template>
  <div>
    <h1>상세페이지</h1>
    <div>
      <img :src="product.imageUrl" :alt="product.name" />
      <p>name: {{ product.name }}</p>
      <p>price: {{ product.price }}</p>
    </div>
  </div>
</template>

<script>
import { fetchProductId } from '@/api/index'
export default {
  async asyncData({ params }) {
    const response = await fetchProductId(params.productId)
    const product = response.data
    return { product }
  },
}
</script>

<style>
</style>