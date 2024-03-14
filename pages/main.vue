<template>
  <div>
    <p>메인 페이지입니다.</p>
    <div>
      {{ products }}
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get('http://localhost:3000/products')
    return { products: data }
  },
  data() {
    return {
      products: [],
    }
  },
  // asyncData (비동기, blocking)
  //   - 페이지 컴포넌트가 로딩되기 전에 매번 호출됩니다.
  //   - 컴포넌트 data 프로퍼티와 병합(merge)됩니다.
  // beforeCreate (Vue 라이크사이클 메서드)
  //   - Vue 인스턴트(instance)가 초기화(initialized) 될때 호출됩니다.
  // created (Vue 라이크사이클 메서드)
  //   - The new fetch (top to bottom, siblings = parallel) (동기, non-blocking)
  // beforeMount (Vue 라이크사이클 메서드)
  // mounted (Vue 라이크사이클 메서드)
}
</script>
