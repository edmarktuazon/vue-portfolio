<script setup>
import EdmarkImg from "../assets/images/ed.jpg";

import { useMotion } from "@vueuse/motion";
import { reactive, ref } from "vue";

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

const skillList = reactive({
  frontendSkills: [
    {
      id: 1,
      name: "HTML5",
    },
    {
      id: 2,
      name: "CSS3, SCSS",
    },
    {
      id: 3,
      name: "Tailwind CSS",
    },
    {
      id: 4,
      name: "Bootstrap 4/5",
    },
    {
      id: 5,
      name: "JavaScript",
    },
    {
      id: 6,
      name: "Basic jQuery",
    },
    {
      id: 7,
      name: "Pug.js",
    },
    {
      id: 8,
      name: "Vue.js",
    },
    {
      id: 9,
      name: "Familiarity in PHP",
    },
    {
      id: 10,
      name: "Git",
    },
    {
      id: 11,
      name: "GitHub",
    },
    {
      id: 12,
      name: "Figma Software",
    },
    {
      id: 13,
      name: "Adobe XD",
    },
  ],
});
const { frontendSkills } = skillList;
</script>
<template>
  <section class="bg-backupPrimary py-24 min-h-screen">
    <div class="z-50 relative">
      <div
        class="
          grid
          gap-5
          w-full
          lg:px-0
          px-8
          w-full
          lg:w-4/5
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
        <div class="relative mt-12 lg:mt-0 col-span-1 lg:col-span-2">
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
              based in Cavite Philippines</span
            >, that focused on Frontend side of a Web, I'm also able to develop
            Responsive, Intuitive and User-Friendly Websites using the latest
            Frontend Technologies.
          </p>
          <h3 class="text-2xl font-bold text-gray capitalize">
            my tech stacks:
          </h3>
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
            <li v-for="skills in skillList.frontendSkills" :key="skills.id">
              <font-awesome-icon icon="check" class="text-lightBlue" />
              {{ skills.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.heading-h2 {
  font-size: clamp(4.6875rem, 2.3214rem + 10.0952vw, 8rem);
}
</style>
