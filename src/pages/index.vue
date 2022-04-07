<script setup lang="ts">
const router = useRouter()
const go = () => {
  router.push(`/hi/${encodeURIComponent(name)}`)
}
</script>

<template>
  <NavBar />
</template>
