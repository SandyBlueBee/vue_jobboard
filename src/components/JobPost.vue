<template>
  <v-card
    title="job.title"
    variant="outlined"
  ></v-card>
  <h2>Job post</h2>
  <p>{{ job.title }}</p>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// data

const job = {"title": "Front-end Vuejs developer", "company": "Jira Inc.", "id": 1, "details": "We are currently looking for a front-end developer to help us redefine what it means to be modern."}


</script>

<style lang="scss" scoped>

</style>
