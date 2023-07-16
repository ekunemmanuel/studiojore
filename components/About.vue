<template>
  <section id="about" class="main_container !py-[5rem]">
    <h1 class="text-[20px] tracking-[.6rem] uppercase font-bold mb-[1rem]">About us</h1>
    <div
      class="flex justify-between duration-300 md:items-start items-center md:flex-row flex-col-reverse gap-[1rem]"
    >
      <div
        class="flex flex-col md:justify-between gap-[1rem] items-center md:min-h-[400px]"
      >
        <p class="sm:text-[18px] text-[gray] max-w-[700px] w-full mb-[30px]">
          <span class="text-client_color uppercase font-[600]">Studio Jore</span> is a
          dynamic design, photography, and marketing agency that specializes in delivering
          creative solutions to businesses. With a team of passionate professionals, we
          aim to transform businesses by harnessing the power of visual storytelling and
          effective marketing strategies. <br /><br />At
          <span class="text-client_color uppercase font-[600]">Studio Jore</span>, we
          believe that every brand has a unique story to tell. We are dedicated to
          understanding our clients' visions, values, and objectives in order to create
          compelling designs, captivating photography, and impactful marketing campaigns.
          Our goal is to help businesses build strong brand identities, connect with their
          target audiences, and achieve success in their respective industries.
          <br /><br />
          With our expertise in design, photography, and marketing, we combine artistry
          and strategy to craft engaging visuals and implement effective campaigns. We
          pride ourselves on our attention to detail, creativity, and commitment to
          excellence in every project we undertake.
        </p>
        <div class="flex gap-[1rem] w-full flex-wrap align-bottom justify-center">
          <div
            class="bg-[#e7e7e785] rounded-md shadow-md w-full sm:max-w-[150px] shadow-[#00000080] px-[1.5rem] text-center p-[1rem]"
          >
            <p class="text-[30px] text-client_color">1000+</p>
            <p class="text-[20px] text-[gray]">Creatives</p>
          </div>
          <div
            class="bg-[#e7e7e785] rounded-md shadow-md w-full sm:max-w-[150px] shadow-[#00000080] px-[1.5rem] text-center p-[1rem]"
          >
            <p class="text-[30px] text-client_color">50+</p>
            <p class="text-[20px] text-[gray]">Partners</p>
          </div>
          <div
            class="bg-[#e7e7e785] rounded-md shadow-md w-full sm:max-w-[150px] shadow-[#00000080] px-[1.5rem] text-center p-[1rem]"
          >
            <p class="text-[30px] text-client_color">200+</p>
            <p class="text-[20px] text-[gray]">Stories Told</p>
          </div>
          <div
            class="bg-[#e7e7e785] rounded-md shadow-md w-full sm:max-w-[150px] shadow-[#00000080] px-[1.5rem] text-center p-[1rem]"
          >
            <p class="text-[30px] text-client_color">100+</p>
            <p class="text-[20px] text-[gray]">Clients</p>
          </div>
        </div>
      </div>

      <swiper
        class="md:max-w-[400px] w-full"
        :effect="'flip'"
        :loop="true"
        :loopFillGroupWithBlank="true"
        :centeredSlides="true"
        :modules="[EffectFlip, Autoplay]"
        :autoplay="{
          delay: 2000,
          disableOnInteraction: false,
        }"
      >
        <swiper-slide v-for="(image, index) in 6" :key="index">
          <NuxtImg
            alt="slideshow of my work"
            loading="lazy"
            class="object-cover object-top md:max-w-[500px] w-full md:h-[500px] h-[400px] rounded-md"
            :src="`/${image}.jpg`"
          />
        </swiper-slide>
        <div class="w-full bg-[#000000a6] blur-[2rem] mb-[1rem] h-[2px] p-[1rem]"></div>
      </swiper>
    </div>
  </section>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
// import required modules
import { Autoplay, EffectFlip } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
</script>
