<script setup lang="ts">
const website = {
  link: 'https://facebook.github.io/react/',
  image: 'https://cdn-icons-png.flaticon.com/512/528/528111.png',
  title: 'React',
  description: 'facebook强大的JavaScript框架',
}
</script>

<template>
  <div grid="~ cols-1 sm:cols-[minmax(150px,20%)_2fr]" p='0 sm:10'>
    <MenuBar />
    <div >
      <WebsiteBlock :website="website" />
    </div>
  </div>
</template>
