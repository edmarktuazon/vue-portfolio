<script setup>
import TheAboutSection from "./components/AboutSection.vue";
import TheNavigation from "./components/Navigation.vue";
import PortfolioSection from "./components/PortfolioSection.vue";
</script>

<template>
  <TheNavigation />
  <RouterView />
  <TheAboutSection />
  <PortfolioSection />
</template>
