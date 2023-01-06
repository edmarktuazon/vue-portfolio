<script setup>
import ORSiteImg from "../assets/images/OR-site.png";
import IccImg from "../assets/images/icc.png";
import ShopweissImg from "../assets/images/shopweiss.png";
import TalaImg from "../assets/images/tala.png";
import TpSiteImg from "../assets/images/tp.jpg";

import { useMotion } from "@vueuse/motion";
import { ref } from "vue";

const targetEl_firstInfo = ref();
const targetEl_secondInfo = ref();
const targetEl_thirdInfo = ref();
const targetEl_fourthInfo = ref();
const targetEl_fifthInfo = ref();

useMotion(targetEl_firstInfo, {
  initial: { opacity: 0, y: 100 },
  enter: { opacity: 1, y: 0, scale: 1, transition: { duration: 1000 } },
  variants: { custom: { scale: 2 } },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1000 } },
});

useMotion(targetEl_secondInfo, {
  initial: { opacity: 0, y: 100 },
  enter: { opacity: 1, y: 0, scale: 1, transition: { duration: 1000 } },
  variants: { custom: { scale: 2 } },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1000 } },
});

useMotion(targetEl_thirdInfo, {
  initial: { opacity: 0, y: 100 },
  enter: { opacity: 1, y: 0, scale: 1, transition: { duration: 1000 } },
  variants: { custom: { scale: 2 } },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1000 } },
});

useMotion(targetEl_fourthInfo, {
  initial: { opacity: 0, y: 100 },
  enter: { opacity: 1, y: 0, scale: 1, transition: { duration: 1000 } },
  variants: { custom: { scale: 2 } },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1000 } },
});

useMotion(targetEl_fifthInfo, {
  initial: { opacity: 0, y: 100 },
  enter: { opacity: 1, y: 0, scale: 1, transition: { duration: 1000 } },
  variants: { custom: { scale: 2 } },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1000 } },
});
</script>

<template>
  <section class="md:px-0 px-8 min-h-screen bg-backupPrimary py-24">
    <div
      class="
        relative
        z-50
        flex
        items-center
        justify-center
        flex-col
        mb-20
        lg:mb-36
      "
    >
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
        md:px-2
        lg:w-full lg:px-8
        xl:px-0 xl:w-4/5
        relative
        md:gap-y-44 md:gap-10
        gap-0
        place-items-center
        z-50
        relative
      "
    >
      <!-- first portfolio -->
      <div class="my-6 lg:my-0 md:mb-0 mb-24" ref="targetEl_firstInfo">
        <div class="relative left-0 md:left-14 lg:left-14 xl:left-24">
          <div class="flex justify-start">
            <h4 class="font-poppins text-gray text-xl font-semibold">
              Shopweiss
            </h4>
          </div>
          <div class="bg-primary p-4 my-2">
            <p class="text-lightGray font-poppins leading-7">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
              quasi iusto autem quod exercitationem enim sit, eaque voluptatum
              nihil distinctio voluptatem molestiae, maxime ipsum laudantium
              adipisci ab perspiciatis voluptatibus odio!
            </p>
          </div>
          <div class="flex gap-4 justify-start">
            <!-- tech -->
            <div>
              <div class="flex justify-start lg:justify-start">
                <div class="flex justify-start items-center lg:justify-end">
                  <h5 class="text-gray font-bold">Tech Used:</h5>
                </div>
              </div>
              <ul
                class="
                  block
                  md:flex
                  gap-1
                  justify-start
                  items-center
                  lg:justify-start
                "
              >
                <li class="text-[12px] font-poppins text-lightBlue">HTML</li>
                <li class="text-[12px] font-poppins text-lightBlue">
                  Tailwind CSS
                </li>
                <li class="text-[12px] font-poppins text-lightBlue">
                  JavaScript
                </li>
              </ul>
            </div>
            <!-- divider -->
            <span
              class="block content-[''] h-12 w-[1px] bg-backupSecondary"
            ></span>
            <!-- date -->
            <div>
              <div class="flex justify-start items-center lg:justify-end">
                <h5 class="text-gray font-bold">Date created:</h5>
              </div>
              <ul
                class="flex gap-1 justify-start items-center lg:justify-start"
              >
                <li class="text-[12px] font-poppins text-lightBlue">
                  November 2022
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <a
        href="https://shopweiss.store/finals05/"
        target="_blank"
        class="row-start-1 md:row-start-auto"
      >
        <img
          :src="ShopweissImg"
          alt="Shopweiss banner screen capture  "
          class="w-full"
        />
      </a>

      <!-- Second  portfolio -->
      <a href="https://tala-beta.vercel.app/" target="_blank">
        <img
          :src="TalaImg"
          alt="Talatun banner screen capture  "
          class="w-full"
        />
      </a>
      <div class="mt-6 md:mb-0 mb-24 lg:my-0" ref="targetEl_secondInfo">
        <div class="relative right-0 md:right-14 lg:right-14 xl:right-24">
          <div class="flex flex-col">
            <h4
              class="
                font-poppins
                text-gray text-xl
                font-semibold
                flex
                justify-start
                lg:justify-end
              "
            >
              Talatun
            </h4>
          </div>
          <div class="bg-primary p-4 my-2">
            <p class="text-lightGray font-poppins leading-7">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
              quasi iusto autem quod exercitationem enim sit, eaque voluptatum
              nihil distinctio voluptatem molestiae, maxime ipsum laudantium
              adipisci ab perspiciatis voluptatibus odio!
            </p>
          </div>
          <div class="flex gap-4 justify-start md:justify-end">
            <!-- tech  -->
            <div>
              <div class="flex justify-start items-center lg:justify-end">
                <h5 class="text-gray font-bold">Tech Used:</h5>
              </div>
              <ul
                class="
                  block
                  md:flex
                  gap-1
                  justify-start
                  items-center
                  lg:justify-end
                "
              >
                <li class="text-[12px] font-poppins text-lightBlue">HTML</li>
                <li class="text-[12px] font-poppins text-lightBlue">CSS3</li>
                <li class="text-[12px] font-poppins text-lightBlue">
                  JavaScript
                </li>
              </ul>
            </div>
            <!-- divider -->
            <span
              class="block content-[''] h-12 w-[1px] bg-backupSecondary"
            ></span>
            <!-- date -->
            <div>
              <div class="flex justify-start items-center lg:justify-end">
                <h5 class="text-gray font-bold">Date created:</h5>
              </div>
              <ul class="flex gap-1 justify-start items-center lg:justify-end">
                <li class="text-[12px] font-poppins text-lightBlue">
                  December 2022
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- third  portfolio -->
      <div class="my-6 lg:my-0 mt-6 md:mb-0 mb-24" ref="targetEl_thirdInfo">
        <div class="relative left-0 md:left-14 lg:left-14 xl:left-24">
          <div class="flex justify-start">
            <h4 class="font-poppins text-gray text-xl font-semibold">
              Olivia Rodrigo Site Cloned
            </h4>
          </div>
          <div class="bg-primary p-4 my-2">
            <p class="text-lightGray font-poppins leading-7">
              This site is my first Vue App, this is a dynamic web app. I've
              cloned this from the official site at
              <span class="text-lightBlue">Oliviarodrigo.com</span>
            </p>
          </div>

          <div class="flex gap-4 justify-start">
            <!-- tech -->
            <div>
              <div class="flex justify-start lg:justify-start">
                <div class="flex justify-start items-center lg:justify-end">
                  <h5 class="text-gray font-bold">Tech Used:</h5>
                </div>
              </div>
              <ul
                class="
                  block
                  md:flex
                  gap-1
                  justify-start
                  items-center
                  lg:justify-start
                "
              >
                <li class="text-[12px] font-poppins text-lightBlue">Vue.js</li>
                <li class="text-[12px] font-poppins text-lightBlue">
                  Tailwind CSS
                </li>
              </ul>
            </div>
            <!-- divider -->
            <span
              class="block content-[''] h-12 w-[1px] bg-backupSecondary"
            ></span>
            <!-- date -->
            <div>
              <div class="flex justify-start items-center lg:justify-end">
                <h5 class="text-gray font-bold">Date created:</h5>
              </div>
              <ul
                class="flex gap-1 justify-start items-center lg:justify-start"
              >
                <li class="text-[12px] font-poppins text-lightBlue">
                  September 2022
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <a
        href="https://olivia-rodrigo-site-cloned.vercel.app/"
        target="_blank"
        class="row-start-5 md:row-start-auto"
      >
        <img
          :src="ORSiteImg"
          alt="Olivia banner screen capture  "
          class="w-full"
        />
      </a>

      <!-- fourth portfolio -->
      <a href="https://tala-beta.vercel.app/" target="_blank">
        <img
          :src="TpSiteImg"
          alt="TaskPlace banner screen capture  "
          class="w-full"
        />
      </a>
      <div class="mt-6 md:mb-0 mb-24 lg:my-0" ref="targetEl_fourthInfo">
        <div class="relative right-0 md:right-14 lg:right-14 xl:right-24">
          <div class="flex flex-col">
            <h4
              class="
                font-poppins
                text-gray text-xl
                font-semibold
                flex
                justify-start
                lg:justify-end
              "
            >
              TaskPlace
            </h4>
          </div>
          <div class="bg-primary p-4 my-2">
            <p class="text-lightGray font-poppins leading-7">
              This site is my OJT project, TaskPlace is a rental place for
              individuals or groups, the visitor/user can book place through
              google form or visitor/user may fill out the form on this site,
              and rent a place they want.
            </p>
          </div>
          <div class="flex gap-4 justify-start md:justify-end">
            <!-- tech  -->
            <div>
              <div class="flex justify-start items-center lg:justify-end">
                <h5 class="text-gray font-bold">Tech Used:</h5>
              </div>
              <ul
                class="
                  block
                  md:flex
                  gap-1
                  justify-start
                  items-center
                  lg:justify-end
                "
              >
                <li class="text-[12px] font-poppins text-lightBlue">HTML</li>
                <li class="text-[12px] font-poppins text-lightBlue">SCSS</li>
                <li class="text-[12px] font-poppins text-lightBlue">
                  JavaScript
                </li>
                <li class="text-[12px] font-poppins text-lightBlue">
                  Formspree (form backend, API)
                </li>
              </ul>
            </div>
            <!-- divider -->
            <span
              class="block content-[''] h-12 w-[1px] bg-backupSecondary"
            ></span>
            <!-- date -->
            <div>
              <div class="flex justify-start items-center lg:justify-end">
                <h5 class="text-gray font-bold">Date created:</h5>
              </div>
              <ul class="flex gap-1 justify-start items-center lg:justify-end">
                <li class="text-[12px] font-poppins text-lightBlue">
                  June 2022
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- fifth portfolio -->
      <div class="my-6 lg:my-0" ref="targetEl_fifthInfo">
        <div class="relative left-0 md:left-14 lg:left-14 xl:left-24">
          <div class="flex justify-start">
            <h4 class="font-poppins text-gray text-xl font-semibold">
              Imus Computer College
            </h4>
          </div>
          <div class="bg-primary p-4 my-2">
            <p class="text-lightGray font-poppins leading-7">
              Imus Computer College is a fully responsive Landing Page,
              visitor/user can view the courses offered by the school, and also
              visitor/user may register for the courses using direct link to the
              official site of ICC, this site is my entry for Website
              Competition for our school sportfest.
            </p>
          </div>

          <div class="flex gap-4 justify-start">
            <!-- tech -->
            <div>
              <div class="flex justify-start lg:justify-start">
                <div class="flex justify-start items-center lg:justify-end">
                  <h5 class="text-gray font-bold">Tech Used:</h5>
                </div>
              </div>
              <ul
                class="
                  block
                  md:flex
                  gap-1
                  justify-start
                  items-center
                  lg:justify-start
                "
              >
                <li class="text-[12px] font-poppins text-lightBlue">HTML</li>
                <li class="text-[12px] font-poppins text-lightBlue">
                  Bootstrap 5
                </li>
                <li class="text-[12px] font-poppins text-lightBlue">
                  JavaScript
                </li>
              </ul>
            </div>
            <!-- divider -->
            <span
              class="block content-[''] h-12 w-[1px] bg-backupSecondary"
            ></span>
            <!-- date -->
            <div>
              <div class="flex justify-start items-center lg:justify-end">
                <h5 class="text-gray font-bold">Date created:</h5>
              </div>
              <ul
                class="flex gap-1 justify-start items-center lg:justify-start"
              >
                <li class="text-[12px] font-poppins text-lightBlue">
                  May 2022
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <a
        href="https://icc-tmc-branch-2022-edmarktuazon.vercel.app/"
        target="_blank"
        class="row-start-[9] md:row-start-auto"
      >
        <img :src="IccImg" alt="ICC banner screen capture  " class="w-full" />
      </a>
    </div>
  </section>
</template>
