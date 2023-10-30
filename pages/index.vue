<template>
index page

    <pre>{{ data }}</pre>

</template>

<script setup>
const { data } = await useFetch('/api/hello')

</script>

<style scoped>

</style>
