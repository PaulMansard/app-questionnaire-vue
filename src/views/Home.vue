<template>
  <div class="home">
    <HelloWorld :form = 'form'/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  props: {
    form: null
  }
}
</script>
