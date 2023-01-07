<script setup>
import { reactive, toRefs } from "vue";
import CertImg from "../assets/images/OJT-Cert_Tuazon-Edmark.png";

// dynamic nav links
const navLinks = reactive({
  home: "Home",
  about: "About",
  portfolio: "Portfolios",
  certificate: "Certificates",
  contact: "Contact",
});
const { home, about, portfolio, certificate, contact } = toRefs(navLinks);

// hamburger menu
function toggleMenu() {
  const navMenu = document.getElementById("nav-menus");
  navMenu.classList.toggle("isShow");
}
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
      z-[999]
    "
  >
    <nav class="px-8 xl:px-36">
      <div class="flex justify-between items-center py-6 lg:mx-0">
        <a href="/" class="z-50">
          <span class="text-lightBlue font-bold text-2xl font-poppins"
            >Edmark.</span
          >
        </a>

        <ul
          class="nav-menu hidden md:flex gap-8 items-center font-poppins"
          id="nav-menus"
        >
          <li>
            <a
              href="#"
              class="
                nav-links
                font-medium
                text-gray
                hover:text-lightBlue
                ease-out
                duration-300
                tracking-wide
              "
              >{{ home }}</a
            >
          </li>
          <li>
            <a
              href="#"
              class="
                nav-links
                font-medium
                text-gray
                hover:text-lightBlue
                ease-out
                duration-300
                tracking-wide
              "
              >{{ about }}</a
            >
          </li>
          <li>
            <a
              href="#"
              class="
                nav-links
                font-medium
                text-gray
                hover:text-lightBlue
                ease-out
                duration-300
                tracking-wide
              "
              >{{ portfolio }}</a
            >
          </li>
          <li>
            <a
              :href="CertImg"
              target="_blank"
              class="
                nav-links
                font-medium
                text-gray
                hover:text-lightBlue
                ease-out
                duration-300
                tracking-wide
              "
              >{{ certificate }}</a
            >
          </li>
          <li>
            <a
              href="mailto:edmarktuazon03@gmail.com"
              class="
                nav-links
                font-medium
                text-gray
                hover:text-lightBlue
                ease-out
                duration-300
                tracking-wide
              "
              >{{ contact }}</a
            >
          </li>
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
body {
  scroll-behavior: smooth !important;
}

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
