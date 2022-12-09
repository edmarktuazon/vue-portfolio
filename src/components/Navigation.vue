<script setup>
import logo from "../assets/images/logo.png";

const sourceData = {
  navigation_links: [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "About",
    },
    {
      id: 3,
      name: "Portfolio",
    },
    {
      id: 3,
      name: "Certificate",
    },
    {
      id: 4,
      name: "Contact",
    },
  ],
};
</script>

<script>
export default {
  methods: {
    toggleMenu() {
      const navMenu = document.getElementById("nav-menus");
      navMenu.classList.toggle("isShow");
    },
  },
};
</script>

<template>
  <header
    class="
      header
      bg-primary
      lg:w-[80%]
      w-[90%]
      rounded-full
      fixed
      top-6
      left-2/4
    "
  >
    <nav class="px-8 xl:px-36">
      <div class="flex justify-between items-center py-6 lg:mx-0">
        <a href="/" class="z-50">
          <img :src="logo" alt="logo-web" />
        </a>

        <ul
          class="nav-menu hidden md:flex gap-8 items-center font-poppins"
          id="nav-menus"
        >
          <a
            href="#"
            v-for="data in sourceData.navigation_links"
            :key="data.id"
            :to="`${data.path}`"
            class="
              nav-links
              font-bold
              text-secondary
              hover:text-white
              ease-out
              duration-300
            "
          >
            {{ data.name }}
          </a>
        </ul>
        <!-- hamburger-->
        <div
          class="
            md:hidden
            hamburger-menu
            mobile-menu-button
            cursor-pointer
            z-50
          "
          @click="toggleMenu()"
        >
          <span class="block mx-0 bg-secondary h-[3px] w-7 rounded-full"></span>
          <span
            class="block my-[5px] mx-0 bg-secondary h-[3px] w-7 rounded-full"
          ></span>
          <span class="block mx-0 bg-secondary h-[3px] w-7 rounded-full"></span>
        </div>
      </div>
    </nav>
  </header>
</template>
<style scoped>
.header {
  transform: translate(-50%, 0);
}
@media (max-width: 767px) {
  #nav-menus.isShow {
    opacity: 1;
    position: fixed;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    row-gap: 56px;
    top: 0px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #1d1e21;
  }
  .header {
    width: 100%;
    top: 0;
    border-radius: 0px;
  }

  .nav-menu .nav-links {
    font-size: 24px;
    font-weight: 700;
  }
}
</style>
