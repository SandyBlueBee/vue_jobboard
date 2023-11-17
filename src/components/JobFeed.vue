<template>
  <h1>JOB FEED</h1>
  <p>{{ jobs.first }}</p>
  <JobPost />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import JobPost from './JobPost.vue'

// Data
const jobs = ref([])

// Lifecycle hooks
onMounted(() => {
  console.log("job feed")
  fetch('http://localhost:3000/jobs')
  .then((response) => response.json())
  .then(data => jobs.value = data)
  .catch(error => console.log(error.message))
})


</script>

<style scoped>

</style>
