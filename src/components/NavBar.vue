<script setup lang="ts">
import { isDark, toggleDark } from '~/logics'
</script>

<template>
  <nav flex items-center justify-center>
    <h1>
      <b>Fine</b> Website
    </h1>
    <div class="flex-auto" />
    <a
      class="icon-btn"
      i-carbon-logo-github
      rel="noreferrer"
      href="https://github.com/guoyiheng/fxxx-website"
      target="_blank"
      title="GitHub"
      mr-4
    />
    <button class="icon-btn !outline-none" @click="toggleDark()">
      <div v-if="isDark" i-carbon-moon />
      <div v-else i-carbon-sun />
    </button>
  </nav>
</template>
