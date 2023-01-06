<script setup>
import TheAboutSection from "./components/AboutSection.vue";
import FeedbacksSection from "./components/FeedbacksSection.vue";
import Footer from "./components/Footer.vue";
import TheNavigation from "./components/Navigation.vue";
import PortfolioSection from "./components/PortfolioSection.vue";
</script>

<template>
  <TheNavigation />
  <RouterView />
  <TheAboutSection />
  <PortfolioSection />
  <FeedbacksSection />
  <Footer />
</template>
