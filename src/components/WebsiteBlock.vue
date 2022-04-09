<script setup lang="ts">
import type { Website } from '~/logics'

const props = defineProps<{ website: Website }>()
const emit = defineEmits<{
  (e: 'visit', website: Website): void
}>()
function _visit() {
  emit('visit', props.website)
}
</script>

<template>
  <div
    w-230px
    transition
    overflow-y-hidden
    cursor-pointer
    flex="~ col gap-2"
    rounded
    p-3
    bg="gray-100 hover:gray-200 dark:zinc-700 hover:dark:zinc-800"
    :h="website.description ? 25 : 14"
    :class="{ 'justify-center': !website.description }"
    @click="_visit"
  >
    <div flex items-center>
      <!-- <div w-5 h-5 mr-2 :style="{ background: 'no-repeat center/contain url(' + website.link + '/favicon.ico),url(' + website.link + '/favicon.png)' }" /> -->
      <div color-red-400>
        {{ website.title }}
      </div>
    </div>
    <div v-if="website.description" text-sm>
      {{ website.description }}
    </div>
  </div>
</template>
