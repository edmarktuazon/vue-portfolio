<script setup>
import TheAboutSection from "./components/AboutSection.vue";
import TheNavigation from "./components/Navigation.vue";
</script>

<template>
  <TheNavigation />
  <RouterView />
  <TheAboutSection />
</template>
