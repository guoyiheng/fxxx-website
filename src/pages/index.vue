<script setup lang="ts">
import { setWebsiteRef, websiteArray } from '~/logics'
</script>

<template>
  <div pl-220px>
    <div v-for="websiteType in websiteArray" :ref="(el:HTMLElement)=>setWebsiteRef(el,websiteType.id)" :key="websiteType.id" mb-10>
      <h1 mb-4 font-bold tracking-wide>
        {{ websiteType.name }}
      </h1>
      <div flex="~ wrap" gap-2>
        <WebsiteBlock v-for="website in websiteType.children" :key="website.link" :website="website" />
      </div>
    </div>
  </div>
</template>
