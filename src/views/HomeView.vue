<script setup>
import FacebookIcon from "../components/icons/IconFacebook.vue";
import GitHubIcon from "../components/icons/IconGitHub.vue";
import InstagramIcon from "../components/icons/IconInstagram.vue";
import LinkedInIcon from "../components/icons/IconLinkedIn.vue";

// USE MOTION PLUGIN
import { useMotion } from "@vueuse/motion";
import { ref } from "vue";

const targetEl_headings = ref();

useMotion(targetEl_headings, {
  initial: { opacity: 0, y: 100 },
  enter: { opacity: 1, y: 0, scale: 1, transition: { duration: 1000 } },
  variants: { custom: { scale: 2 } },
});
</script>

<template>
  <section
    class="
      bg-backupPrimary
      min-h-screen
      flex
      justify-center
      items-center
      flex-col
    "
  >
    <div class="z-50 relative">
      <div class="px-4" ref="targetEl_headings">
        <h4
          class="
            text-lightGray text-center
            font-poppins
            tracking-wide
            text-xl
            font-medium
          "
        >
          Greetings! I'm
        </h4>
        <h1
          class="
            heading-h1
            font-poppins font-bold
            text-gray text-center
            my-2
            tracking-wide
            v-motion-fade
          "
        >
          Edmark Tuazon.
        </h1>
        <h3
          class="
            heading-h3
            font-poppins
            text-lightGray text-center
            tracking-wide
          "
        >
          Iam a Frontend Web Developer
        </h3>
      </div>
      <div class="mt-16 px-4">
        <h3 class="text-center text-gray font-poppins mb-2">Connect with me</h3>
        <div class="icons-container flex justify-center items-center gap-3">
          <a href="https://www.facebook.com/edmark.io/" target="_blank">
            <FacebookIcon />
          </a>
          <a href="https://www.instagram.com/edmark.ig/" target="_blank">
            <InstagramIcon />
          </a>
          <a href="https://www.linkedin.com/in/edmarktuazon/" target="_blank">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/edmarktuazon" target="_blank">
            <GitHubIcon />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.heading-h1 {
  font-size: clamp(2.5rem, 0.3231rem + 7.2034vw, 4.375rem);
  line-height: 1.1;
}
.heading-h3 {
  font-size: clamp(1.25rem, 1.0233rem + 0.8475vw, 1.5rem);
}
.icons-container {
  width: 100%;
}
.icons-container::after {
  content: "";
  display: block;
  max-width: 150px;
  width: 100%;
  height: 1px;
  background-color: rgb(32, 32, 32);
}
.icons-container::before {
  content: "";
  display: block;
  max-width: 150px;
  width: 100%;
  height: 1px;
  background-color: rgb(32, 32, 32);
}
</style>
