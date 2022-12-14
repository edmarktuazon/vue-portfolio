<script setup>
import FacebookIcon from "../components/icons/IconFacebook.vue";
import GitHubIcon from "../components/icons/IconGitHub.vue";
import InstagramIcon from "../components/icons/IconInstagram.vue";
import LinkedInIcon from "../components/icons/IconLinkedIn.vue";

// USE MOTION PLUGIN
import { useMotion } from "@vueuse/motion";
import { ref } from "vue";

const targetEl = ref();

useMotion(targetEl, {
  initial: { opacity: 0, y: 100 },
  visibleOnce: { opacity: 1, y: 0 },
});
</script>

<template>
  <section
    class="bg-backupPrimary h-screen flex justify-center items-center flex-col"
  >
    <div class="px-8">
      <h4
        class="
          text-white text-center
          font-poppins
          tracking-wide
          text-xl
          font-medium
        "
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :variants="{ custom: { scale: 2 } }"
        :delay="500"
      >
        Greetings! I'm
      </h4>
      <h1
        class="
          heading-h1
          font-poppins font-bold
          text-red text-center
          my-2
          tracking-wide
        "
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :variants="{ custom: { scale: 2 } }"
        :delay="900"
      >
        Edmark Tuazon.
      </h1>
      <h4
        class="
          heading-h4
          font-poppins font-semibold
          text-white text-center
          tracking-wide
          text-2xl
        "
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :variants="{ custom: { scale: 2 } }"
        :delay="900"
      >
        I' am a Frontend Software Developer
      </h4>
    </div>
    <div class="icons-container flex justify-center items-center gap-3 mt-12">
      <a href="https://www.facebook.com/edmark.io/" target="_blank">
        <FacebookIcon />
      </a>
      <a href="https://www.instagram.com/edmark.io/" target="_blank">
        <InstagramIcon />
      </a>
      <a href="https://www.linkedin.com/in/edmarktuazon/" target="_blank">
        <LinkedInIcon />
      </a>
      <a href="https://github.com/edmarktuazon" target="_blank">
        <GitHubIcon />
      </a>
    </div>
  </section>
</template>
<style scoped>
.heading-h1 {
  font-size: clamp(3.125rem, 1.7457rem + 6.8966vw, 5.625rem);
  line-height: 1.1;
}

.icons-container::after {
  content: "";
  display: block;
  width: 200px;
  height: 1px;
  background-color: rgb(32, 32, 32);
}
.icons-container::before {
  content: "";
  display: block;
  width: 200px;
  height: 1px;
  background-color: rgb(32, 32, 32);
}
</style>
