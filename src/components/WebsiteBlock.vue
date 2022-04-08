<script setup lang="ts">
import type { Website } from '~/logics'
defineProps<{ website: Website }>()
</script>

<template>
  <div
    w-250px h-25 transition overflow-y-hidden flex="~ col gap-2" rounded p-3
    bg="gray-100 hover:gray-200 dark:zinc-700 hover:dark:zinc-800"
  >
    <div flex items-center>
      <img :src="website.image" h-8 mr-2>
      <a :href="website.link" target="_blank" rel="noopener noreferrer" color="$primary hover:$primary-deep">
        {{ website.title }}
      </a>
    </div>
    <div text-sm>
      {{ website.description }}
    </div>
  </div>
</template>
