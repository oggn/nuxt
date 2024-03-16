<template>
  <div>
    {{ products }}
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const response = await $axios.get('http://localhost:3000/products')
    const products = response.data
    return { products }
  },
}
</script>

<style>
</style>