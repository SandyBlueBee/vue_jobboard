<template>
  <h1>JOB FEED</h1>
  <div v-for="job in jobs" :key="job.id">
    <p>{{ job.title }}</p>
  </div>
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
