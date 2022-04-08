<script setup lang="ts">
import type { Website } from '~/logics'
const props = defineProps<{ website: Website }>()

function openLink() {
  window.open(props.website.link)
}
</script>

<template>
  <div
    w-250px h-25 transition overflow-y-hidden cursor-pointer flex="~ col gap-2" rounded p-3
    bg="gray-100 hover:gray-200 dark:zinc-700 hover:dark:zinc-800"
    @click="openLink"
  >
    <div flex items-center>
      <!-- <div w-5 h-5 mr-2 :style="{ background: 'no-repeat center/contain url(' + website.link + '/favicon.ico),url(' + website.link + '/favicon.png)' }" /> -->
      <div color-teal-600>
        {{ website.title }}
      </div>
    </div>
    <div text-sm>
      {{ website.description }}
    </div>
  </div>
</template>
