<template>
  <div>
    <Questionnaire :form='form'/>
  </div>
</template>

<script>
import Questionnaire from '@/components/Questionnaire.vue'
export default {
  name: 'questionnaire',
  components: {
    Questionnaire
  },
  props: {
    form: null
  }
}
</script>

<style scoped>

</style>
