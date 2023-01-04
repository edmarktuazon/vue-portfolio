<script setup>
import ORSiteImg from "../assets/images/OR-site.png";

import { useMotion } from "@vueuse/motion";
import { ref } from "vue";

const targetEl_infoFirst = ref();
const targetEl_infoSecond = ref();

useMotion(targetEl_infoFirst, {
  initial: { opacity: 0, y: 100 },
  enter: { opacity: 1, y: 0, scale: 1, transition: { duration: 1000 } },
  variants: { custom: { scale: 2 } },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1000 } },
});

useMotion(targetEl_infoSecond, {
  initial: { opacity: 0, y: 100 },
  enter: { opacity: 1, y: 0, scale: 1, transition: { duration: 1000 } },
  variants: { custom: { scale: 2 } },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1000 } },
});
</script>

<template>
  <div class="md:px-0 px-8 min-h-screen bg-backupPrimary py-24">
    <div class="relative flex items-center justify-center flex-col mb-36">
      <h2
        class="
          text-lightGray
          font-poppins
          text-xl
          tracking-widest
          uppercase
          mb-4
        "
      >
        Portfolio
      </h2>
      <h2
        class="text-4xl font-poppins text-gray relative text-center font-bold"
      >
        Checkout a few of my works
      </h2>
    </div>
    <!-- portfolio section -->
    <div
      class="
        grid grid-cols-1
        md:grid-cols-2
        mx-auto
        w-full
        md:w-4/5
        relative
        md:gap-y-44 md:gap-10
        gap-0
      "
    >
      <!-- first  portfolio -->
      <a href="https://olivia-rodrigo-site-cloned.vercel.app/" target="_blank">
        <img
          :src="ORSiteImg"
          alt="Olivia rodrigo home screen capture  "
          class="w-full"
        />
      </a>
      <div class="my-6 lg:my-0" ref="targetEl_infoFirst">
        <div class="flex justify-start lg:justify-end">
          <h4 class="font-poppins text-gray text-xl font-semibold">
            Olivia Rodrigo Site Cloned
          </h4>
        </div>
        <div class="bg-backupSecondary p-4 my-2">
          <p class="text-lightGray font-poppins leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            soluta quia vel accusantium molestias adipisci ab, optio rem iure
            voluptate repellendus quis eum nulla ex autem explicabo nemo harum.
            Ipsam?
          </p>
        </div>
        <div class="flex justify-start items-center lg:justify-end">
          <h5 class="text-gray font-bold">Tech Used:</h5>
        </div>
        <ul class="flex gap-1 justify-start items-center lg:justify-end">
          <li class="text-[12px] font-poppins text-lightBlue">Vue.js</li>
          <li class="text-[12px] font-poppins text-lightBlue">Tailwind CSS</li>
        </ul>
      </div>
      <!-- second portfolio -->
      <div
        class="my-6 lg:my-0 row-start-4 md:row-start-auto"
        ref="targetEl_infoSecond"
      >
        <div class="flex justify-start lg:justify-start">
          <h4 class="font-poppins text-gray text-xl font-semibold">
            Imus Computer College Cavite Site
          </h4>
        </div>
        <div class="bg-backupSecondary p-4 my-2">
          <p class="text-lightGray font-poppins leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            soluta quia vel accusantium molestias adipisci ab, optio rem iure
            voluptate repellendus quis eum nulla ex autem explicabo nemo harum.
            Ipsam?
          </p>
        </div>
        <div class="flex justify-start items-center lg:justify-start">
          <h5 class="text-gray font-bold">Tech Used:</h5>
        </div>
        <ul class="flex gap-1 justify-start items-center lg:justify-start">
          <li class="text-[12px] font-poppins text-lightBlue">Bootstrap 5</li>
          <li class="text-[12px] font-poppins text-lightBlue">JavaScript</li>
        </ul>
      </div>
      <div class="">
        <a
          href="https://icc-tmc-branch-2022-edmarktuazon.vercel.app/"
          target="_blank"
        >
          <!-- <img
            :src="ICCSiteImg"
            alt="ICC banner screen capture  "
            class="w-full"
          /> -->
        </a>
      </div>
    </div>
  </div>
</template>
