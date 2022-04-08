<script setup lang="ts">
import { websiteArray } from '~/logics'
</script>

<template>
  <div grid="~ cols-1 sm:cols-[minmax(150px,20%)_2fr]" p="0 sm:10">
    <MenuBar />
    <div>
      <div v-for="websiteType in websiteArray" :key="websiteType.id">
        <h1>
          {{ websiteType.name }}
        </h1>
        <div flex="~ wrap" justify-between gap-2>
          <WebsiteBlock v-for="website in websiteType.children" :key="website.link" :website="website" />
        </div>
      </div>
    </div>
  </div>
</template>
