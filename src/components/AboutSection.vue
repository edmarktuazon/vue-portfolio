<script setup>
import EdmarkImg from "../assets/images/me.jpg";
</script>
<template>
  <section class="bg-backupPrimary pb-12">
    <div
      class="
        grid
        gap-5
        w-full
        md:px-0
        px-4
        md:w-4/5
        grid-cols-1
        lg:grid-cols-2
        m-auto
      "
    >
      <figure class="place-items-center m-auto lg:grid hidden">
        <img
          :src="EdmarkImg"
          alt="edmark image"
          class="h-[300px] object-cover max-w-[300px] w-full"
        />
      </figure>
      <div class="relative">
        <h1
          class="
            heading-h1
            absolute
            text-backupSecondary
            font-extrabold
            text-9xl
            tracking-wider
          "
        >
          ABOUT
        </h1>
        <div class="p-5 ml-0 my-2 sm:my-8 sm:ml-4">
          <h2 class="text-2xl sm:text-4xl font-poppins text-white relative">
            What about me?
          </h2>
        </div>
        <p class="font-poppins text-white my-5">
          A self-taught Software Developer focused on Frontend, able to develop
          Responsive, Intuitive and User-Friendly Websites using the latest
          Frontend Technologies.
        </p>
        <h3 class="text-2xl font-bold text-red">My tech stacks:</h3>
        <ul
          class="grid grid-cols-2 md:grid-cols-3 text-white font-poppins mt-5"
        >
          <li>HTML</li>
          <li>CSS3</li>
          <li>SASS, SCSS</li>
          <li>TailwindCSS</li>
          <li>Bootstrap</li>
          <li>JavaScript</li>
          <li>Basic jQuery</li>
          <li>Vue.js</li>
          <li>Familiarity in PHP</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>Figma Software</li>
          <li>Adobe XD</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.heading-h1 {
  font-size: clamp(4.6875rem, 2.3214rem + 10.0952vw, 8rem);
}
</style>
