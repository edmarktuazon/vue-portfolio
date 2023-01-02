<script setup>
import ORSiteImg from "../assets/images/OR-site.png";
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
        class="text-4xl font-poppins text-white relative text-center font-bold"
      >
        Checkout a few of my works
      </h2>
    </div>
    <div
      class="
        grid grid-cols-1
        lg:grid-cols-2
        mx-auto
        w-full
        md:w-4/5
        relative
        md:gap-10
        gap-0
      "
    >
      <a href="https://olivia-rodrigo-site-cloned.vercel.app/" target="_blank">
        <img
          :src="ORSiteImg"
          alt="Olivia rodrigo home screen capture  "
          class="w-full"
        />
      </a>
      <div class="my-6 lg:my-0">
        <div class="flex justify-start lg:justify-end">
          <h4 class="font-poppins text-lightGray text-xl font-semibold">
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
          <h5 class="text-red font-bold">Tech Used:</h5>
        </div>
        <ul class="flex gap-1 justify-start items-center lg:justify-end">
          <li class="text-[12px] font-poppins text-lightGray">Vue.js</li>
          <li class="text-[12px] font-poppins text-lightGray">Tailwind CSS</li>
        </ul>
      </div>
    </div>
  </div>
</template>
