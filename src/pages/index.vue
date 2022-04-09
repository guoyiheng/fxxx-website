<script setup lang="ts">
import { setWebsiteRef, websiteArray } from '~/logics'
</script>

<template>
  <div>
    <div
      v-for="websiteType in websiteArray" :ref="(el:HTMLElement)=>setWebsiteRef(el,websiteType.name)" :key="websiteType.name"
      mb-10 mt--75px pt-75px
    >
      <h1 mb-4 font-bold tracking-wide>
        {{ websiteType.name }}
      </h1>
      <div flex="~ wrap" gap-2>
        <WebsiteBlock v-for="website in websiteType.children" :key="website.link" :website="website" />
      </div>
    </div>
  </div>
</template>
