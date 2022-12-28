<script setup>
import FacebookIcon from "../components/icons/IconFacebook.vue";
import GitHubIcon from "../components/icons/IconGitHub.vue";
import InstagramIcon from "../components/icons/IconInstagram.vue";
import LinkedInIcon from "../components/icons/IconLinkedIn.vue";

// USE MOTION PLUGIN
import { useMotion } from "@vueuse/motion";
import { ref } from "vue";

const targetEl_h3 = ref();
const targetEl_h1 = ref();
const targetEl_h4 = ref();

useMotion(targetEl_h1, {
  initial: { opacity: 0, y: 100 },
  enter: { opacity: 1, y: 0, scale: 1, transition: { delay: 900 } },
  variants: { custom: { scale: 2 } },
});

useMotion(targetEl_h3, {
  initial: { opacity: 0, y: 100 },
  enter: { opacity: 1, y: 0, scale: 1, transition: { delay: 900 } },
  variants: { custom: { scale: 2 } },
});

useMotion(targetEl_h4, {
  initial: { opacity: 0, y: 100 },
  enter: { opacity: 1, y: 0, scale: 1, transition: { delay: 500 } },
  variants: { custom: { scale: 2 } },
});
</script>

<template>
  <section
    class="bg-backupPrimary h-screen flex justify-center items-center flex-col"
  >
    <div class="px-4">
      <h4
        class="
          text-white text-center
          font-poppins
          tracking-wide
          text-xl
          font-medium
        "
        ref="targetEl_h4"
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
          v-motion-fade
        "
        ref="targetEl_h1"
      >
        Edmark Tuazon.
      </h1>
      <h3
        class="heading-h3 font-poppins text-white text-center tracking-wide"
        ref="targetEl_h3"
      >
        I' am a Frontend Web Developer
      </h3>
    </div>
    <div
      class="icons-container flex justify-center items-center gap-3 mt-16 px-4"
    >
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
  font-size: clamp(2.65rem, 0.3231rem + 7.2034vw, 4.375rem);
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
  width: 150px;
  height: 1px;
  background-color: rgb(32, 32, 32);
}
.icons-container::before {
  content: "";
  display: block;
  width: 150px;
  height: 1px;
  background-color: rgb(32, 32, 32);
}
</style>
