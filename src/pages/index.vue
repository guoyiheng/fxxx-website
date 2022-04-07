<script setup lang="ts">
const router = useRouter()
const go = () => {
  router.push(`/hi/${encodeURIComponent(name)}`)
}
</script>

<template>
  111
</template>
