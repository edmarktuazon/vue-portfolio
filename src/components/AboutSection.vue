<script setup>
import EdmarkImg from "../assets/images/ed.jpg";

import { useMotion } from "@vueuse/motion";
import { ref } from "vue";

const targetEl_ul = ref();

useMotion(targetEl_ul, {
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
  },
});
</script>
<template>
  <section class="bg-backupPrimary py-24 min-h-screen">
    <div
      class="
        grid
        gap-5
        w-full
        md:px-0
        px-8
        md:w-4/5
        grid-cols-1
        lg:grid-cols-3
        m-auto
      "
    >
      <figure class="place-items-center m-auto grid">
        <img
          :src="EdmarkImg"
          alt="edmark image"
          class="h-[300px] object-cover max-w-[300px] w-full rounded-lg"
        />
        <a
          href="../assets/docs/Dev_Ed.pdf"
          target="_blank"
          class="
            text-lightGray
            border
            font-poppins
            p-2
            rounded-lg
            w-44
            mt-8
            text-center
            hover:bg-backupSecondary hover:text-white
          "
        >
          <font-awesome-icon icon="fa-solid fa-file" /> &nbsp; View Resume
        </a>
      </figure>
      <div class="relative mt-12 lg:mt-0 col-span-2">
        <h2
          class="
            heading-h2
            absolute
            text-backupSecondary
            font-black
            text-9xl
            tracking-wider
          "
        >
          ABOUT
        </h2>
        <div class="p-5 ml-0 my-2 sm:my-8 sm:ml-4">
          <h2 class="text-2xl sm:text-4xl font-poppins text-white relative">
            What about me?
          </h2>
        </div>
        <p class="font-poppins text-lightGray my-5 leading-7">
          A self-taught Software Developer focused on Frontend,
          <span class="text-red">I'm based in Cavite Philippines</span>, I' am
          able to develop Responsive, Intuitive and User-Friendly Websites using
          the latest Frontend Technologies.
        </p>
        <h3 class="text-2xl font-bold text-red capitalize">my tech stacks:</h3>
        <ul
          class="
            grid grid-cols-2
            md:grid-cols-3
            text-lightGray
            font-poppins
            mt-5
            leading-7
          "
          ref="targetEl_ul"
        >
          <li><font-awesome-icon icon="check" class="text-red" /> HTML</li>
          <li><font-awesome-icon icon="check" class="text-red" /> CSS3</li>
          <li><font-awesome-icon icon="check" class="text-red" /> SASS/SCSS</li>
          <li>
            <font-awesome-icon icon="check" class="text-red" /> TailwindCSS
          </li>
          <li>
            <font-awesome-icon icon="check" class="text-red" /> Bootstrap 4/5
          </li>
          <li>
            <font-awesome-icon icon="check" class="text-red" /> JavaScript
          </li>
          <li>
            <font-awesome-icon icon="check" class="text-red" /> Basic jQuery
          </li>
          <li><font-awesome-icon icon="check" class="text-red" /> Pug.js</li>
          <li><font-awesome-icon icon="check" class="text-red" /> Vue.js</li>
          <li>
            <font-awesome-icon icon="check" class="text-red" /> Familiarity in
            PHP
          </li>
          <li><font-awesome-icon icon="check" class="text-red" /> Git</li>
          <li><font-awesome-icon icon="check" class="text-red" /> GitHub</li>
          <li>
            <font-awesome-icon icon="check" class="text-red" /> Figma Software
          </li>
          <li><font-awesome-icon icon="check" class="text-red" /> Adobe XD</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.heading-h2 {
  font-size: clamp(4.6875rem, 2.3214rem + 10.0952vw, 8rem);
}
</style>
