<script setup>
import EdmarkImg from "../assets/images/ed.jpg";

import { useMotion } from "@vueuse/motion";
import { ref } from "vue";

const targetEl_info = ref();
const targetEl_ul = ref();

useMotion(targetEl_info, {
  initial: { opacity: 0, y: 100 },
  enter: { opacity: 1, y: 0, scale: 1, transition: { duration: 1000 } },
  variants: { custom: { scale: 2 } },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1000 } },
});

useMotion(targetEl_ul, {
  initial: { opacity: 0, y: 100 },
  enter: { opacity: 1, y: 0, scale: 1, transition: { duration: 1200 } },
  variants: { custom: { scale: 2 } },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1200 } },
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
            border border-lightGray
            font-poppins
            p-2
            rounded-lg
            w-52
            mt-8
            text-center
            hover:bg-backupSecondary hover:text-white
          "
        >
          <font-awesome-icon icon="fa-solid fa-file" /> &nbsp; View my resume
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
        <p
          class="font-poppins text-lightGray my-5 leading-7"
          ref="targetEl_info"
        >
          A self-taught Software Developer<span class="text-lightBlue">
            base in Cavite Philippines</span
          >, that focused on Frontend side of a Web, I'm also able to develop
          Responsive, Intuitive and User-Friendly Websites using the latest
          Frontend Technologies.
        </p>
        <h3 class="text-2xl font-bold text-gray capitalize">my tech stacks:</h3>
        <ul
          ref="targetEl_ul"
          class="
            grid grid-cols-2
            md:grid-cols-3
            text-lightGray
            font-poppins
            mt-5
            leading-7
          "
        >
          <li>
            <font-awesome-icon icon="check" class="text-lightBlue" /> HTML
          </li>
          <li>
            <font-awesome-icon icon="check" class="text-lightBlue" /> CSS3
          </li>
          <li>
            <font-awesome-icon icon="check" class="text-lightBlue" /> SASS/SCSS
          </li>
          <li>
            <font-awesome-icon icon="check" class="text-lightBlue" />
            TailwindCSS
          </li>
          <li>
            <font-awesome-icon icon="check" class="text-lightBlue" /> Bootstrap
            4/5
          </li>
          <li>
            <font-awesome-icon icon="check" class="text-lightBlue" /> JavaScript
          </li>
          <li>
            <font-awesome-icon icon="check" class="text-lightBlue" /> Basic
            jQuery
          </li>
          <li>
            <font-awesome-icon icon="check" class="text-lightBlue" /> Pug.js
          </li>
          <li>
            <font-awesome-icon icon="check" class="text-lightBlue" /> Vue.js
          </li>
          <li>
            <font-awesome-icon icon="check" class="text-lightBlue" />
            Familiarity in PHP
          </li>
          <li><font-awesome-icon icon="check" class="text-lightBlue" /> Git</li>
          <li>
            <font-awesome-icon icon="check" class="text-lightBlue" /> GitHub
          </li>
          <li>
            <font-awesome-icon icon="check" class="text-lightBlue" /> Figma
            Software
          </li>
          <li>
            <font-awesome-icon icon="check" class="text-lightBlue" /> Adobe XD
          </li>
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
