<script setup>
import sourceData from "../../json/data.json";
import logo from "../assets/images/logo.png";
</script>

<template>
  <header class="bg-primary">
    <nav class="px-8 xl:px-48" id="navigation">
      <div class="nav-wrapper flex justify-between py-8 lg:mx-0">
        <a href="/">
          <img :src="logo" alt="logo-web" />
        </a>

        <ul class="hidden md:flex items-center font-poppins">
          <RouterLink
            v-for="data in sourceData.navigation_links"
            :key="data.id"
            :to="`${data.path}`"
            class="text-secondary mr-8 hover:text-white ease-out duration-300"
          >
            {{ data.name }}
          </RouterLink>
        </ul>
        <!-- hamburger-->
        <div class="md:hidden hamburger-menu mobile-menu-button cursor-pointer">
          <div class="menu-bar">
            <button class="bar"></button>
          </div>
        </div>
      </div>
      <!-- mobile menu -->
      <section class="mobile-menu mx-0 hidden">
        <ul class="hidden md:flex items-center">
          <RouterLink
            v-for="data in sourceData.navigation_links"
            :key="data.id"
            :to="`${data.path}`"
            class="text-secondary mr-8 hover:text-white ease-out duration-300"
          >
            {{ data.name }}
          </RouterLink>
        </ul>
      </section>
    </nav>
  </header>
</template>
