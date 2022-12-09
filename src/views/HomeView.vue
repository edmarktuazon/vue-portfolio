<script setup>
import FacebookIcon from "../components/icons/IconFacebook.vue";
import GitHubIcon from "../components/icons/IconGitHub.vue";
import InstagramIcon from "../components/icons/IconInstagram.vue";
import LinkedInIcon from "../components/icons/IconLinkedIn.vue";
</script>

<template>
  <section class="bg-backupPrimary h-screen grid place-items-center">
    <h1 class="font-poppins font-bold text-4xl text-white text-center px-8">
      THIS WEBSITE IS UNDER CONSTRUCTION
      <div class="icons-container flex justify-center items-center gap-3 mt-4">
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
    </h1>
  </section>
</template>
<style scoped>
.icons-container::after {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background-color: rgb(32, 32, 32);
}
.icons-container::before {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background-color: rgb(32, 32, 32);
}
</style>
